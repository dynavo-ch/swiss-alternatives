/**
 * Locale configuration.
 *
 * English is the canonical content language and is served without a prefix;
 * German lives under `/de/`. To add a locale: list it here, add a dictionary
 * in `./ui/`, translate `src/content/pages/<locale>/` and the `i18n.<locale>`
 * fields of the content collections (untranslated fields fall back to English).
 */
export const defaultLocale = 'en' as const;

export const locales = ['en', 'de'] as const;

/** Locales planned for later. */
export const plannedLocales = ['fr', 'it'] as const;

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
