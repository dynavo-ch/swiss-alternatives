/**
 * Locale configuration.
 *
 * English is the canonical content language. German, French and Italian are
 * prepared: add the locale here, add a dictionary in `./ui/`, and Astro's i18n
 * routing will serve it under `/de/`, `/fr/`, `/it/`.
 */
export const defaultLocale = 'en' as const;

export const locales = ['en'] as const;

/** Locales planned for later. Used only for documentation and hreflang planning. */
export const plannedLocales = ['de', 'fr', 'it'] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
};

/** BCP 47 tags used for Intl formatting and the html lang attribute. */
export const localeTags: Record<string, string> = {
  en: 'en-CH',
  de: 'de-CH',
  fr: 'fr-CH',
  it: 'it-CH',
};
