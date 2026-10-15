/**
 * Client-side filtering and sorting for <FilterableList>.
 *
 * Semantics: options within one facet are OR-ed (e.g. Linux OR macOS), facets
 * and flags are AND-ed (Swiss hosted AND open source AND (Linux OR macOS)).
 * State is kept in the URL with history.replaceState so every view is
 * shareable and survives reloads.
 */
import { icons } from './icons';
import { copyText, escapeHtml, t, toast } from './store';

const FACETS = ['audience', 'platform', 'class', 'canton', 'cat', 'pricing'] as const;
type Facet = (typeof FACETS)[number];
const SORTS = ['name', 'footprint', 'added', 'verified'] as const;
type Sort = (typeof SORTS)[number];

interface State {
  flags: Set<string>;
  facets: Record<Facet, Set<string>>;
  sort: Sort;
  q: string;
}

interface Item {
  el: HTMLElement;
  name: string;
  search: string;
  added: number;
  verified: number;
  score: number;
  flags: Set<string>;
  facets: Record<Facet, Set<string>>;
}

const split = (value: string | undefined | null) =>
  new Set((value ?? '').split(/[\s,]+/).filter(Boolean));

function readState(): State {
  const params = new URLSearchParams(location.search);
  const sort = params.get('sort') as Sort | null;
  return {
    flags: split(params.get('f')),
    facets: Object.fromEntries(FACETS.map((f) => [f, split(params.get(f))])) as State['facets'],
    sort: sort && SORTS.includes(sort) ? sort : 'name',
    q: params.get('q') ?? '',
  };
}

function writeState(state: State) {
  const params = new URLSearchParams(location.search);
  const set = (key: string, values: Set<string>) =>
    values.size ? params.set(key, [...values].join(',')) : params.delete(key);
  set('f', state.flags);
  FACETS.forEach((f) => set(f, state.facets[f]));
  if (state.sort !== 'name') params.set('sort', state.sort);
  else params.delete('sort');
  if (state.q) params.set('q', state.q);
  else params.delete('q');
  const query = params.toString().replace(/%2C/g, ',');
  history.replaceState(null, '', `${location.pathname}${query ? `?${query}` : ''}${location.hash}`);
}

export function initFilterList(root: HTMLElement) {
  const list = root.querySelector<HTMLElement>('[data-items]')!;
  const items: Item[] = [...list.querySelectorAll<HTMLElement>('[data-item]')].map((el) => ({
    el,
    name: el.dataset.name ?? '',
    search: el.dataset.search ?? '',
    added: Number(el.dataset.added),
    verified: Number(el.dataset.verified),
    score: Number(el.dataset.score),
    flags: split(el.dataset.f),
    facets: Object.fromEntries(FACETS.map((f) => [f, split(el.dataset[f])])) as Item['facets'],
  }));

  const chips = [...root.querySelectorAll<HTMLButtonElement>('[data-chip]')];
  const checkboxes = [...root.querySelectorAll<HTMLInputElement>('.drawer input[type="checkbox"]')];
  const sortSelect = root.querySelector<HTMLSelectElement>('[data-sort]');
  const nameInput = root.querySelector<HTMLInputElement>('[data-name-filter]');
  const countEl = root.querySelector<HTMLElement>('[data-count]');
  const activeList = root.querySelector<HTMLElement>('[data-active-list]');
  const activeCount = root.querySelector<HTMLElement>('[data-active-count]');
  const empty = root.querySelector<HTMLElement>('[data-empty]');
  const share = root.querySelector<HTMLButtonElement>('[data-share]');
  const drawer = root.querySelector<HTMLDialogElement>('.drawer');
  const applyButton = root.querySelector<HTMLButtonElement>('[data-apply-label]');

  let state = readState();

  const labelFor = (name: string, value: string) => {
    const box = checkboxes.find((c) => c.name === name && c.value === value);
    return box?.parentElement?.querySelector('span')?.textContent?.trim() ?? value;
  };

  const matches = (item: Item, s: State) => {
    for (const flag of s.flags) if (!item.flags.has(flag)) return false;
    for (const facet of FACETS) {
      const wanted = s.facets[facet];
      if (wanted.size && ![...wanted].some((v) => item.facets[facet].has(v))) return false;
    }
    if (s.q && !item.search.includes(s.q.toLowerCase())) return false;
    return true;
  };

  const compare: Record<Sort, (a: Item, b: Item) => number> = {
    name: (a, b) => a.name.localeCompare(b.name),
    footprint: (a, b) => b.score - a.score || a.name.localeCompare(b.name),
    added: (a, b) => b.added - a.added || a.name.localeCompare(b.name),
    verified: (a, b) => b.verified - a.verified || a.name.localeCompare(b.name),
  };

  function render() {
    const visible = items.filter((item) => matches(item, state));
    const visibleSet = new Set(visible);

    // Reorder DOM according to sort, then toggle visibility.
    const sorted = [...items].sort(compare[state.sort]);
    sorted.forEach((item) => {
      item.el.hidden = !visibleSet.has(item);
      list.append(item.el);
    });

    const total = items.length;
    const shown = visible.length;
    const filtered = shown !== total;
    if (countEl) {
      countEl.textContent = filtered
        ? t('filter.showing', { shown, total })
        : t('count.products', { count: total });
    }
    if (empty) empty.hidden = shown > 0;
    list.hidden = shown === 0;
    if (applyButton) applyButton.textContent = t('filter.apply', { count: shown });

    // Faceted counts: how many results each option would give from here.
    const countWith = (mutate: (s: State) => void) => {
      const next: State = {
        ...state,
        flags: new Set(state.flags),
        facets: Object.fromEntries(
          FACETS.map((f) => [f, new Set(state.facets[f])]),
        ) as State['facets'],
      };
      mutate(next);
      return items.filter((item) => matches(item, next)).length;
    };
    const setCount = (el: Element, n: number) => {
      const target = el.querySelector('[data-n]');
      if (target) target.textContent = String(n);
      el.toggleAttribute('data-zero', n === 0);
    };

    // Controls reflect state.
    chips.forEach((chip) => {
      const flag = chip.dataset.chip!;
      chip.setAttribute('aria-pressed', String(state.flags.has(flag)));
      setCount(
        chip,
        countWith((s) => s.flags.add(flag)),
      );
    });
    checkboxes.forEach((box) => {
      const label = box.parentElement!;
      const n =
        box.name === 'f'
          ? countWith((s) => s.flags.add(box.value))
          : countWith((s) => (s.facets[box.name as Facet] = new Set([box.value])));
      setCount(label, n);
    });
    checkboxes.forEach((box) => {
      box.checked =
        box.name === 'f'
          ? state.flags.has(box.value)
          : (state.facets[box.name as Facet]?.has(box.value) ?? false);
    });
    if (sortSelect) sortSelect.value = state.sort;
    if (nameInput && nameInput.value !== state.q) nameInput.value = state.q;

    // Active filter tags.
    const active: { name: string; value: string }[] = [
      ...[...state.flags].map((value) => ({ name: 'f', value })),
      ...FACETS.flatMap((facet) =>
        [...state.facets[facet]].map((value) => ({ name: facet, value })),
      ),
    ];
    const chipFlags = new Set(chips.map((c) => c.dataset.chip));
    const drawerActive = active.filter((a) => !(a.name === 'f' && chipFlags.has(a.value))).length;
    if (activeCount) {
      activeCount.textContent = String(drawerActive);
      activeCount.hidden = drawerActive === 0;
    }
    if (activeList) {
      activeList.innerHTML = active
        .map(
          (a) =>
            `<button type="button" class="active-tag" data-remove="${escapeHtml(a.name)}:${escapeHtml(a.value)}" aria-label="${escapeHtml(t('filter.clear'))}: ${escapeHtml(labelFor(a.name, a.value))}">${escapeHtml(labelFor(a.name, a.value))}${icons.x}</button>`,
        )
        .join('');
    }
    if (share) share.hidden = active.length === 0 && state.sort === 'name' && !state.q;
  }

  function update(mutator: (s: State) => void) {
    mutator(state);
    writeState(state);
    render();
  }

  chips.forEach((chip) =>
    chip.addEventListener('click', () =>
      update((s) => {
        const flag = chip.dataset.chip!;
        if (s.flags.has(flag)) s.flags.delete(flag);
        else s.flags.add(flag);
      }),
    ),
  );

  checkboxes.forEach((box) =>
    box.addEventListener('change', () =>
      update((s) => {
        const target = box.name === 'f' ? s.flags : s.facets[box.name as Facet];
        if (box.checked) target.add(box.value);
        else target.delete(box.value);
      }),
    ),
  );

  sortSelect?.addEventListener('change', () => update((s) => (s.sort = sortSelect.value as Sort)));

  let timer: number | undefined;
  nameInput?.addEventListener('input', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => update((s) => (s.q = nameInput.value.trim())), 80);
  });

  root.addEventListener('click', (event) => {
    const target = event.target as Element;
    const remove = target.closest<HTMLElement>('[data-remove]');
    if (remove) {
      const [name, value] = remove.dataset.remove!.split(':') as [string, string];
      update((s) => (name === 'f' ? s.flags.delete(value) : s.facets[name as Facet].delete(value)));
      return;
    }
    if (target.closest('[data-clear]')) {
      update((s) => {
        s.flags.clear();
        FACETS.forEach((f) => s.facets[f].clear());
        s.q = '';
      });
      return;
    }
    if (target.closest('[data-drawer-open]')) {
      drawer?.showModal();
      return;
    }
    if (target.closest('[data-drawer-close]') || target === drawer) {
      drawer?.close();
      return;
    }
    if (target.closest('[data-share]')) {
      void copyText(location.href).then((ok) => ok && toast(t('common.linkCopied')));
    }
  });

  window.addEventListener('popstate', () => {
    state = readState();
    render();
  });

  render();
}
