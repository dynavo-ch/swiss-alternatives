/** Locale-aware formatting helpers (dates, countries, languages, prices). */
import { defaultLocale, localeTags } from '~/i18n/config';
import { CANTON_NAMES, type Canton } from './constants';

const tag = (locale: string = defaultLocale) => localeTags[locale] ?? 'en-CH';

const displayNames = new Map<string, Intl.DisplayNames>();
function names(locale: string, type: 'region' | 'language'): Intl.DisplayNames {
  const key = `${locale}:${type}`;
  let dn = displayNames.get(key);
  if (!dn) {
    dn = new Intl.DisplayNames([tag(locale)], { type });
    displayNames.set(key, dn);
  }
  return dn;
}

/** "Switzerland", "Germany" … from an ISO 3166-1 alpha-2 code. */
export function countryName(code: string, locale?: string): string {
  try {
    return names(locale ?? defaultLocale, 'region').of(code) ?? code;
  } catch {
    return code;
  }
}

/** "German", "French" … from an ISO 639-1 code. */
export function languageName(code: string, locale?: string): string {
  try {
    return names(locale ?? defaultLocale, 'language').of(code) ?? code;
  } catch {
    return code;
  }
}

export function cantonName(code: Canton | string): string {
  return CANTON_NAMES[code as Canton] ?? code;
}

const fold = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

/**
 * "Plan-les-Ouates, Geneva" — city and canton name for running text, without
 * repeating a canton that shares the city's name ("Zürich", not "Zürich, Zurich").
 */
export function placeName(
  hq: { city?: string | undefined; canton?: string | undefined; country: string },
  locale?: string,
): string {
  if (hq.country !== 'CH')
    return [hq.city, countryName(hq.country, locale)].filter(Boolean).join(', ');
  const canton = hq.canton ? cantonName(hq.canton) : undefined;
  if (!hq.city) return canton ?? countryName(hq.country, locale);
  const same =
    canton && (fold(hq.city).startsWith(fold(canton)) || hq.city.endsWith(` ${hq.canton}`));
  return canton && !same ? `${hq.city}, ${canton}` : hq.city;
}

/**
 * "Zürich, ZH" — city and canton code, without repeating a canton that is
 * already part of the official place name (e.g. "Pfäffikon SZ").
 * Falls back to the country name when no city is known.
 */
export function shortLocation(
  hq: { city?: string | undefined; canton?: string | undefined; country: string },
  locale?: string,
): string {
  const canton = hq.canton && !hq.city?.endsWith(` ${hq.canton}`) ? hq.canton : undefined;
  return [hq.city, canton].filter(Boolean).join(', ') || countryName(hq.country, locale);
}

/** "15 Oct 2026" */
export function formatDate(date: Date, locale?: string): string {
  return new Intl.DateTimeFormat(tag(locale), {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** "2026-10-15" — for datetime attributes and machine-readable output. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function formatNumber(value: number, locale?: string): string {
  return new Intl.NumberFormat(tag(locale)).format(value);
}

/** "CHF 5.00", "EUR 4.99" — currency code first, as is common in Switzerland. */
export function formatMoney(amount: number, currency: string, locale?: string): string {
  const fractional = !Number.isInteger(amount);
  const number = new Intl.NumberFormat(tag(locale), {
    minimumFractionDigits: fractional ? 2 : 0,
    // Sub-cent unit prices (e.g. per-hour compute) keep their precision.
    maximumFractionDigits: amount > 0 && amount < 0.01 ? 6 : amount < 0.1 ? 5 : 2,
  }).format(amount);
  return `${currency} ${number}`;
}

export interface Price {
  amount: number;
  currency: string;
  period: 'month' | 'year' | 'one-time' | 'hour' | 'usage';
}

/** "CHF 4.99 / month", "CHF 0.00729 / hour", "CHF 5.99 · one-time", "CHF 1.80 · usage-based". */
export function formatPrice(
  price: Price,
  periodLabel: (period: Price['period']) => string,
  locale?: string,
): string {
  const amount = formatMoney(price.amount, price.currency, locale);
  switch (price.period) {
    case 'month':
    case 'year':
    case 'hour':
      return `${amount} / ${periodLabel(price.period)}`;
    case 'one-time':
    case 'usage':
      return `${amount} · ${periodLabel(price.period)}`;
    default:
      return amount;
  }
}

/** Collapses "https://www.example.com/path/" to "example.com". */
export function displayHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/** Two-letter monogram for products without a logo. */
export function monogram(name: string): string {
  const words = name
    .replace(/[^\p{L}\p{N}\s.-]/gu, '')
    .split(/[\s.-]+/)
    .filter(Boolean);
  if (words.length >= 2) return (words[0]![0]! + words[1]![0]!).toUpperCase();
  const word = words[0] ?? name;
  return word[0]!.toUpperCase() + (word[1] ?? '').toLowerCase();
}

/** Joins ["a", "b", "c"] as "a, b and c". */
export function list(
  items: string[],
  locale?: string,
  type: 'conjunction' | 'disjunction' = 'conjunction',
): string {
  return new Intl.ListFormat(tag(locale), { style: 'long', type }).format(items);
}
