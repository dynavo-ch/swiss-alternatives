/**
 * Global progressive enhancements, loaded on every page (~3 kB).
 * Heavier features (search index, comparison, filtering) are loaded only
 * where needed.
 */
import {
  copyText,
  currentTheme,
  getList,
  onChange,
  pushRecent,
  setList,
  setTheme,
  t,
  toast,
  toggle,
} from './store';
import { initEmailLinks } from './email';
import { initFootprintTips } from './footprint-tip';
import type * as SearchApi from './search';

type SearchModule = typeof SearchApi;

const COMPARE_LIMIT = Number(document.documentElement.dataset.compareLimit ?? 4);

/* Theme --------------------------------------------------------------- */
function syncThemeButtons() {
  const theme = currentTheme();
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  });
}

document.addEventListener('click', (event) => {
  const target = event.target as Element;

  if (target.closest('[data-theme-toggle]')) {
    setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    syncThemeButtons();
    return;
  }

  const fav = target.closest<HTMLElement>('[data-fav]');
  if (fav) {
    event.preventDefault();
    toggle('favourites', fav.dataset.fav!);
    return;
  }

  const cmp = target.closest<HTMLElement>('[data-compare]');
  if (cmp) {
    event.preventDefault();
    const result = toggle('compare', cmp.dataset.compare!, COMPARE_LIMIT);
    if (result === null) toast(t('compare.limit', { count: COMPARE_LIMIT }));
    return;
  }

  if (target.closest('[data-compare-clear]')) {
    setList('compare', []);
    return;
  }

  const copy = target.closest<HTMLElement>('[data-copy-link]');
  if (copy) {
    event.preventDefault();
    const url = copy.dataset.copyLink || location.href;
    void copyText(url).then((ok) => ok && toast(t('common.linkCopied')));
    return;
  }

  const random = target.closest<HTMLAnchorElement>('a[data-random]');
  if (random) {
    event.preventDefault();
    void goRandom(random.href);
    return;
  }

  const menuOpen = target.closest('[data-menu-open]');
  if (menuOpen) {
    document.querySelector<HTMLDialogElement>('#site-menu')?.showModal();
    return;
  }
  if (target.closest('[data-menu-close]') || target.matches('#site-menu')) {
    document.querySelector<HTMLDialogElement>('#site-menu')?.close();
  }
});

syncThemeButtons();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncThemeButtons);

/* Favourites & comparison toggles ------------------------------------ */
function syncToggles() {
  const favs = new Set(getList('favourites'));
  const compare = getList('compare');
  const compareSet = new Set(compare);

  document.querySelectorAll<HTMLElement>('[data-fav]').forEach((button) => {
    const on = favs.has(button.dataset.fav!);
    button.setAttribute('aria-pressed', String(on));
    const label = on ? t('fav.remove') : t('fav.add');
    button.setAttribute('aria-label', `${label}: ${button.dataset.name ?? ''}`.trim());
    const text = button.querySelector('[data-label]');
    if (text) text.textContent = label;
  });

  document.querySelectorAll<HTMLElement>('[data-compare]').forEach((button) => {
    const on = compareSet.has(button.dataset.compare!);
    button.setAttribute('aria-pressed', String(on));
    const label = on ? t('compare.remove') : t('compare.add');
    button.setAttribute('aria-label', `${label}: ${button.dataset.name ?? ''}`.trim());
    const text = button.querySelector('[data-label]');
    if (text) text.textContent = label;
  });

  document.querySelectorAll<HTMLElement>('[data-fav-count]').forEach((el) => {
    el.textContent = String(favs.size);
    el.hidden = favs.size === 0;
  });

  const tray = document.getElementById('compare-tray');
  if (tray) {
    tray.hidden = compare.length === 0;
    const count = tray.querySelector('[data-compare-count]');
    if (count) count.textContent = String(compare.length);
    const link = tray.querySelector<HTMLAnchorElement>('[data-compare-link]');
    if (link) {
      link.href = `${new URL(link.href, location.href).pathname}?products=${compare.join(',')}`;
    }
  }
}

syncToggles();
onChange(syncToggles);

/* Recently viewed ------------------------------------------------------ */
const viewed = document.querySelector<HTMLElement>('[data-product-view]');
if (viewed?.dataset.productView) pushRecent(viewed.dataset.productView);

/* Random discovery ----------------------------------------------------- */
async function goRandom(fallback: string) {
  try {
    const response = await fetch('/data/products.json');
    const data = (await response.json()) as { products: { url: string }[] };
    const pick = data.products[Math.floor(Math.random() * data.products.length)];
    location.href = pick?.url ?? fallback;
  } catch {
    location.href = fallback;
  }
}

/* Search ------------------------------------------------------------- */
let searchModule: Promise<SearchModule> | undefined;
const loadSearch = () => (searchModule ??= import('./search'));

function openSearch(initial = '') {
  void loadSearch().then((mod) => mod.openDialog(initial));
}

document.addEventListener('click', (event) => {
  if ((event.target as Element).closest('[data-search-open]')) {
    event.preventDefault();
    openSearch();
  }
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const typing = (event.target as Element | null)?.closest(
    'input, textarea, select, [contenteditable]',
  );
  if ((event.metaKey || event.ctrlKey) && key === 'k') {
    event.preventDefault();
    openSearch();
  } else if (key === '/' && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
    event.preventDefault();
    openSearch();
  }
});

// Inline search boxes (hero, search page) upgrade themselves on first interaction.
document.querySelectorAll<HTMLElement>('[data-search-inline]').forEach((root) => {
  const input = root.querySelector('input');
  const init = () => void loadSearch().then((mod) => mod.mountInline(root));
  if (root.dataset.searchInline === 'eager') init();
  else {
    input?.addEventListener('focus', init, { once: true });
    input?.addEventListener('pointerenter', () => void loadSearch(), { once: true });
  }
});

// Warm the search chunk when the visitor hovers the header search button.
document
  .querySelectorAll('[data-search-open]')
  .forEach((el) => el.addEventListener('pointerenter', () => void loadSearch(), { once: true }));

/* Footprint explanations ------------------------------------------------ */
initFootprintTips();

/* Protected email links ------------------------------------------------- */
initEmailLinks();
