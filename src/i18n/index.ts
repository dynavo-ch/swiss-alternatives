/**
 * Translation helpers.
 *
 * Usage in a component:
 *   const t = useTranslations(Astro.currentLocale);
 *   t('nav.categories');                         // "Categories"
 *   t('count.products', { count: 3 });           // "3 products"
 *
 * Missing keys in a non-English dictionary fall back to English, so a new
 * locale can be introduced incrementally.
 */
import { defaultLocale, localeTags, locales, type Locale } from './config';
import { en, type Dictionary, type UIKey, type UIValue } from './ui/en';

const dictionaries: Record<Locale, Dictionary> = { en };

export type Vars = Record<string, string | number>;
export type Translate = (key: UIKey, vars?: Vars) => string;

export function resolveLocale(value: string | undefined): Locale {
  return (locales as readonly string[]).includes(value ?? '') ? (value as Locale) : defaultLocale;
}

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) =>
    name in vars ? String(vars[name]) : `{${name}}`,
  );
}

export function useTranslations(locale?: string): Translate {
  const lang = resolveLocale(locale);
  const dict = dictionaries[lang];
  const rules = new Intl.PluralRules(localeTags[lang]);
  return (key, vars) => {
    const value: UIValue = dict[key] ?? en[key];
    if (typeof value === 'string') return interpolate(value, vars);
    const count = typeof vars?.count === 'number' ? vars.count : 0;
    const form = value[rules.select(count)] ?? value.other ?? '';
    return interpolate(form, vars);
  };
}

/**
 * Serialises a subset of the dictionary for client-side scripts, so strings
 * used in the browser are translated by the same source of truth.
 */
export function clientStrings(locale: string | undefined, keys: UIKey[]): Record<string, UIValue> {
  const lang = resolveLocale(locale);
  const dict = dictionaries[lang];
  return Object.fromEntries(keys.map((key) => [key, dict[key] ?? en[key]]));
}

export type { UIKey };
