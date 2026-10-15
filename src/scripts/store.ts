/**
 * Local, account-free state: favourites, comparison selection, recently
 * viewed products and theme. Everything lives in localStorage on the
 * visitor's device and is never sent anywhere.
 */

export type ListKey = 'favourites' | 'compare' | 'recent';

const KEYS: Record<ListKey, string> = {
  favourites: 'sa:favourites',
  compare: 'sa:compare',
  recent: 'sa:recent',
};

const LIMITS: Partial<Record<ListKey, number>> = {
  recent: 12,
};

const EVENT = 'sa:store';

function safeRead(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeWrite(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode / disabled) — features degrade silently */
  }
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function getList(list: ListKey): string[] {
  const raw = safeRead(KEYS[list]);
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((v): v is string => typeof v === 'string' && SLUG.test(v))
      : [];
  } catch {
    return [];
  }
}

export function setList(list: ListKey, ids: string[]) {
  const unique = [...new Set(ids)];
  const limit = LIMITS[list];
  safeWrite(KEYS[list], JSON.stringify(limit ? unique.slice(0, limit) : unique));
  document.dispatchEvent(new CustomEvent(EVENT, { detail: { list } }));
}

export function has(list: ListKey, id: string): boolean {
  return getList(list).includes(id);
}

/** Toggles `id`; returns the new membership state, or null if the limit was hit. */
export function toggle(list: ListKey, id: string, max?: number): boolean | null {
  const ids = getList(list);
  if (ids.includes(id)) {
    setList(
      list,
      ids.filter((x) => x !== id),
    );
    return false;
  }
  if (max && ids.length >= max) return null;
  setList(list, [...ids, id]);
  return true;
}

/** Moves `id` to the front of the recently-viewed list. */
export function pushRecent(id: string) {
  setList('recent', [id, ...getList('recent').filter((x) => x !== id)]);
}

export function onChange(callback: (list: ListKey) => void) {
  document.addEventListener(EVENT, (event) =>
    callback((event as CustomEvent<{ list: ListKey }>).detail.list),
  );
  // Keep multiple tabs in sync.
  window.addEventListener('storage', (event) => {
    const entry = Object.entries(KEYS).find(([, key]) => key === event.key);
    if (entry) callback(entry[0] as ListKey);
  });
}

/* Theme -------------------------------------------------------------- */

export type Theme = 'light' | 'dark';

export function currentTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  safeWrite('sa:theme', theme);
}

/* Client strings ----------------------------------------------------- */

type Plural = Partial<Record<Intl.LDMLPluralRule, string>>;
let strings: Record<string, string | Plural> | undefined;

/** Translates using the dictionary subset embedded by the layout. */
export function t(key: string, vars: Record<string, string | number> = {}): string {
  if (!strings) {
    const el = document.getElementById('sa-i18n');
    strings = el?.textContent
      ? (JSON.parse(el.textContent) as Record<string, string | Plural>)
      : {};
  }
  const value = strings[key];
  let template: string;
  if (typeof value === 'string') template = value;
  else if (value) {
    const count = typeof vars.count === 'number' ? vars.count : 0;
    template =
      value[new Intl.PluralRules(document.documentElement.lang).select(count)] ?? value.other ?? '';
  } else template = key;
  return template.replace(/\{(\w+)\}/g, (_, name: string) =>
    name in vars ? String(vars[name]) : `{${name}}`,
  );
}

/* Small UI helpers --------------------------------------------------- */

let toastTimer: number | undefined;

export function toast(message: string) {
  let el = document.getElementById('sa-toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'sa-toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el);
  }
  el.textContent = message;
  el.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    el.hidden = true;
  }, 2200);
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

/** Logo tile markup for client-rendered lists. */
export function logoTile(
  logo: string | null | undefined,
  mono: string,
  size: 'sm' | 'md' = 'sm',
): string {
  const cls = size === 'sm' ? ' logo-tile--sm' : '';
  return logo
    ? `<span class="logo-tile${cls} logo-tile--img" aria-hidden="true"><img src="${escapeHtml(logo)}" alt="" loading="lazy"></span>`
    : `<span class="logo-tile logo-tile--mono${cls}" aria-hidden="true">${escapeHtml(mono)}</span>`;
}
