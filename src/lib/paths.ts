/**
 * Central URL builder. All internal links go through here so that locale
 * prefixes (e.g. `/de/…`) can be introduced in one place later.
 */
import { defaultLocale, type Locale } from '~/i18n/config';

function withLocale(path: string, locale: Locale = defaultLocale): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

export const paths = {
  home: (locale?: Locale) => withLocale('/', locale),
  products: (locale?: Locale) => withLocale('/products/', locale),
  product: (slug: string, locale?: Locale) => withLocale(`/product/${slug}/`, locale),
  categories: (locale?: Locale) => withLocale('/categories/', locale),
  category: (slug: string, locale?: Locale) => withLocale(`/category/${slug}/`, locale),
  alternatives: (locale?: Locale) => withLocale('/alternatives/', locale),
  alternative: (slug: string, locale?: Locale) => withLocale(`/alternatives/${slug}/`, locale),
  companies: (locale?: Locale) => withLocale('/companies/', locale),
  company: (slug: string, locale?: Locale) => withLocale(`/company/${slug}/`, locale),
  latest: (locale?: Locale) => withLocale('/latest/', locale),
  compare: (locale?: Locale) => withLocale('/compare/', locale),
  favourites: (locale?: Locale) => withLocale('/favourites/', locale),
  search: (locale?: Locale) => withLocale('/search/', locale),
  about: (locale?: Locale) => withLocale('/about/', locale),
  methodology: (locale?: Locale) => withLocale('/methodology/', locale),
  suggest: (locale?: Locale) => withLocale('/suggest/', locale),
  privacy: (locale?: Locale) => withLocale('/privacy/', locale),
  contact: (locale?: Locale) => withLocale('/contact/', locale),
  sponsors: (locale?: Locale) => withLocale('/sponsors/', locale),
  contribute: (locale?: Locale) => withLocale('/contribute/', locale),
  rss: () => '/latest/rss.xml',
  imprint: (locale?: Locale) => withLocale('/imprint/', locale),
  /** Static JSON used by client-side features. */
  searchIndex: () => '/search-index.json',
  productData: () => '/data/products.json',
};
