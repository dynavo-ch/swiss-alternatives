/**
 * Client-side search (command palette + inline search boxes).
 *
 * The index is a static JSON file generated at build time
 * (src/pages/search-index.json.ts) and searched with MiniSearch: prefix and
 * fuzzy matching, field boosting, no server. Loaded lazily on first use.
 */
import MiniSearch, { type SearchResult } from 'minisearch';
import { icons } from './icons';
import { escapeHtml, t } from './store';

type DocType = 'alternative' | 'product' | 'category' | 'company';

interface Doc {
  id: string;
  type: DocType;
  title: string;
  subtitle: string;
  aliases: string;
  keywords: string;
  text: string;
  url: string;
  count?: number;
  meta?: string;
  popular?: boolean;
  mono?: string;
  logo?: string | null;
}

type Hit = SearchResult & Doc;

const GROUP_LIMIT: Record<DocType, number> = {
  alternative: 5,
  product: 6,
  category: 4,
  company: 3,
};

let indexPromise: Promise<{ engine: MiniSearch<Doc>; docs: Doc[] }> | undefined;

function loadIndex() {
  indexPromise ??= fetch('/search-index.json')
    .then((r) => r.json() as Promise<{ docs: Doc[] }>)
    .then(({ docs }) => {
      const engine = new MiniSearch<Doc>({
        fields: ['title', 'aliases', 'keywords', 'text'],
        storeFields: [
          'type',
          'title',
          'subtitle',
          'url',
          'count',
          'meta',
          'popular',
          'mono',
          'logo',
        ],
        searchOptions: {
          boost: { title: 5, aliases: 4, keywords: 1.6, text: 0.6 },
          prefix: true,
          fuzzy: (term) => (term.length > 4 ? 0.2 : false),
        },
        processTerm: (term) => term.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''),
      });
      engine.addAll(docs);
      return { engine, docs };
    });
  return indexPromise;
}

function runSearch(engine: MiniSearch<Doc>, query: string): Map<DocType, Hit[]> {
  let results = engine.search(query, { combineWith: 'AND' }) as Hit[];
  if (results.length === 0) results = engine.search(query, { combineWith: 'OR' }) as Hit[];

  const groups = new Map<DocType, Hit[]>();
  for (const hit of results) {
    // Small nudge so a foreign product with Swiss alternatives outranks noise.
    if (hit.type === 'alternative' && (hit.count ?? 0) === 0) hit.score *= 0.6;
    const list = groups.get(hit.type) ?? [];
    list.push(hit);
    groups.set(hit.type, list);
  }
  for (const [type, list] of groups) {
    list.sort((a, b) => b.score - a.score);
    groups.set(type, list.slice(0, GROUP_LIMIT[type]));
  }
  // Order groups by their best match.
  return new Map(
    [...groups.entries()].sort((a, b) => (b[1][0]?.score ?? 0) - (a[1][0]?.score ?? 0)),
  );
}

function highlight(text: string, query: string): string {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term.length > 1)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const safe = escapeHtml(text);
  if (terms.length === 0) return safe;
  return safe.replace(new RegExp(`(^|[\\s(/-])(${terms.join('|')})`, 'gi'), '$1<mark>$2</mark>');
}

const ICONS: Record<Exclude<DocType, 'product'>, string> = {
  alternative: icons.repeat,
  category: icons.folder,
  company: icons.building,
};

function optionHtml(doc: Doc, id: string, query: string): string {
  const visual =
    doc.type === 'product'
      ? doc.logo
        ? `<span class="logo-tile logo-tile--sm logo-tile--img" aria-hidden="true"><img src="${escapeHtml(doc.logo)}" alt="" width="32" height="32" loading="lazy"></span>`
        : `<span class="logo-tile logo-tile--mono logo-tile--sm" aria-hidden="true">${escapeHtml(doc.mono ?? '')}</span>`
      : `<span class="search__icon">${ICONS[doc.type]}</span>`;

  let side = `<span class="search__type">${escapeHtml(t(`search.type.${doc.type}`))}</span>`;
  if (doc.type === 'alternative') {
    side =
      (doc.count ?? 0) > 0
        ? `<span class="search__count">${icons.arrowRight}${escapeHtml(t('count.swissAlternatives', { count: doc.count ?? 0 }))}</span>`
        : `<span class="search__type">${escapeHtml(t('search.type.alternative'))}</span>`;
  } else if (doc.type === 'category' || doc.type === 'company') {
    side = `<span class="search__type">${escapeHtml(t('count.products', { count: doc.count ?? 0 }))}</span>`;
  }

  return `<a class="search__option" role="option" id="${id}" href="${escapeHtml(doc.url)}" aria-selected="false" tabindex="-1">
    ${visual}
    <span class="search__text">
      <span class="search__title">${highlight(doc.title, query)}</span>
      <span class="search__sub">${escapeHtml(doc.subtitle)}</span>
    </span>
    ${side}
  </a>`;
}

class SearchBox {
  root: HTMLElement;
  input: HTMLInputElement;
  list: HTMLElement;
  panel: HTMLElement;
  status: HTMLElement;
  mode: 'dialog' | 'inline' | 'page';
  active = -1;
  options: HTMLAnchorElement[] = [];
  uid: string;
  lastQuery = '';

  constructor(root: HTMLElement, mode: 'dialog' | 'inline' | 'page') {
    this.root = root;
    this.mode = mode;
    this.input = root.querySelector('input')!;
    this.list = root.querySelector('[role="listbox"]')!;
    this.panel = root.querySelector('.search__panel')!;
    this.status = root.querySelector('[data-search-status]')!;
    this.uid = this.list.id;

    this.input.setAttribute('role', 'combobox');
    this.input.setAttribute('aria-autocomplete', 'list');
    this.input.setAttribute('aria-controls', this.list.id);
    this.input.setAttribute('aria-expanded', 'false');

    let timer: number | undefined;
    this.input.addEventListener('input', () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => void this.update(), 60);
    });
    this.input.addEventListener('keydown', (event) => this.onKey(event));
    this.list.addEventListener('pointermove', (event) => {
      const option = (event.target as Element).closest<HTMLAnchorElement>('[role="option"]');
      if (option) this.setActive(this.options.indexOf(option), false);
    });

    if (mode === 'inline') {
      this.input.addEventListener('focus', () => void this.update());
      document.addEventListener('pointerdown', (event) => {
        if (!root.contains(event.target as Node)) this.close();
      });
      root.addEventListener('focusout', (event) => {
        if (!root.contains(event.relatedTarget as Node | null)) this.close();
      });
    }
  }

  close() {
    if (this.mode !== 'inline') return;
    this.panel.hidden = true;
    this.input.setAttribute('aria-expanded', 'false');
  }

  async update() {
    const query = this.input.value.trim();
    this.lastQuery = query;
    const { engine, docs } = await loadIndex();
    if (query !== this.lastQuery) return; // a newer query is in flight

    if (this.mode === 'page') {
      const url = new URL(location.href);
      if (query) url.searchParams.set('q', query);
      else url.searchParams.delete('q');
      history.replaceState(null, '', url);
      document.querySelector('[data-search-index]')?.toggleAttribute('hidden', query.length > 0);
    }

    let html = '';
    let total = 0;
    if (!query) {
      if (this.mode === 'page') {
        this.list.innerHTML = '';
        this.options = [];
        this.panel.hidden = true;
        this.status.textContent = '';
        return;
      }
      const popular = docs
        .filter((d) => d.popular && d.type === 'alternative' && (d.count ?? 0) > 0)
        .slice(0, 6);
      html = this.group('popular', t('search.tryLabel'), popular, '');
    } else {
      const groups = runSearch(engine, query);
      for (const [type, hits] of groups) {
        total += hits.length;
        html += this.group(type, t(`search.group.${type}`), hits, query);
      }
      if (total === 0) {
        html = `<div class="search__empty"><p><strong>${escapeHtml(t('search.empty', { query }))}</strong></p><p>${escapeHtml(t('search.emptyHint'))}</p><p><a href="/suggest/">${escapeHtml(t('search.suggestLink'))} →</a></p></div>`;
      }
      this.status.textContent = t('search.results', { count: total });
    }

    this.list.innerHTML = html;
    this.options = [...this.list.querySelectorAll<HTMLAnchorElement>('[role="option"]')];
    this.panel.hidden = false;
    this.input.setAttribute('aria-expanded', 'true');
    this.setActive(query && this.options.length ? 0 : -1, false);
  }

  group(key: string, label: string, docs: Doc[], query: string): string {
    if (docs.length === 0) return '';
    const labelId = `${this.uid}-g-${key}`;
    return `<div role="group" aria-labelledby="${labelId}" class="search__group">
      <div class="search__group-label label" id="${labelId}" role="presentation">${escapeHtml(label)}</div>
      ${docs.map((doc, i) => optionHtml(doc, `${this.uid}-${key}-${i}`, query)).join('')}
    </div>`;
  }

  setActive(index: number, scroll = true) {
    this.options.forEach((option, i) => option.setAttribute('aria-selected', String(i === index)));
    this.active = index;
    const option = this.options[index];
    if (option) {
      this.input.setAttribute('aria-activedescendant', option.id);
      if (scroll) option.scrollIntoView({ block: 'nearest' });
    } else {
      this.input.removeAttribute('aria-activedescendant');
    }
  }

  onKey(event: KeyboardEvent) {
    const count = this.options.length;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.panel.hidden) void this.update();
        else if (count) this.setActive((this.active + 1) % count);
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (count) this.setActive((this.active - 1 + count) % count);
        break;
      case 'Home':
      case 'End':
        if (count && this.input.value === '') {
          event.preventDefault();
          this.setActive(event.key === 'Home' ? 0 : count - 1);
        }
        break;
      case 'Enter': {
        const option = this.options[this.active];
        if (option) {
          event.preventDefault();
          location.href = option.href;
        }
        break;
      }
      case 'Escape':
        if (this.mode === 'inline' && !this.panel.hidden) {
          event.preventDefault();
          this.close();
        }
        break;
    }
  }
}

/* Public API ----------------------------------------------------------- */

const mounted = new WeakMap<HTMLElement, SearchBox>();

export function mountInline(root: HTMLElement) {
  if (mounted.has(root)) return mounted.get(root)!;
  const box = new SearchBox(root, root.dataset.searchMode === 'page' ? 'page' : 'inline');
  mounted.set(root, box);
  if (box.mode === 'page') {
    const q = new URLSearchParams(location.search).get('q');
    if (q && !box.input.value) box.input.value = q;
  }
  void loadIndex();
  if (box.mode === 'page' || document.activeElement === box.input) void box.update();
  return box;
}

export function openDialog(initial = '') {
  const dialog = document.querySelector<HTMLDialogElement>('#search-dialog');
  if (!dialog) {
    location.href = '/search/';
    return;
  }
  const root = dialog.querySelector<HTMLElement>('.search')!;
  let box = mounted.get(root);
  if (!box) {
    box = new SearchBox(root, 'dialog');
    mounted.set(root, box);
    dialog.addEventListener('click', (event) => {
      const target = event.target as Element;
      if (target === dialog || target.closest('[data-search-close]')) dialog.close();
    });
  }
  if (!dialog.open) dialog.showModal();
  if (initial) box.input.value = initial;
  box.input.select();
  void box.update();
}
