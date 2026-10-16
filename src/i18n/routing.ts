/**
 * Locale routing. Pages live in `src/pages/[...lang]/`: the default locale is
 * served without a prefix (`lang` undefined), every other locale under
 * `/<locale>/`. Internal links on localised pages are rewritten by
 * `src/middleware.ts`, so components can keep using `paths.*()`.
 */
import { defaultLocale, locales, type Locale } from './config';

type Params = Record<string, string | undefined>;

/** The `lang` route parameter for a locale. */
export function langParam(locale: Locale): string | undefined {
  return locale === defaultLocale ? undefined : locale;
}

/** `getStaticPaths` for a page without other parameters. */
export function localeStaticPaths() {
  return locales.map((locale) => ({ params: { lang: langParam(locale) } }));
}

/** `getStaticPaths` for a dynamic page: `build` runs once per locale. */
export async function localeRoutes<P extends Params, Props>(
  build: (locale: Locale) => Promise<{ params: P; props: Props }[]>,
) {
  const routes = await Promise.all(
    locales.map(async (locale) =>
      (await build(locale)).map(({ params, props }) => ({
        params: { ...params, lang: langParam(locale) },
        props,
      })),
    ),
  );
  return routes.flat();
}

const prefixed = new RegExp(`^/(${locales.filter((l) => l !== defaultLocale).join('|')})(?=/)`);

/** The locale a path belongs to: `/de/products/` → `de`. */
export function localeOfPath(pathname: string): Locale {
  return (prefixed.exec(pathname)?.[1] as Locale | undefined) ?? defaultLocale;
}

/** Removes the locale prefix: `/de/products/` → `/products/`. */
export function stripLocale(pathname: string): string {
  return pathname.replace(prefixed, '') || '/';
}

/** Adds the locale prefix to an unprefixed page path: `/products/` → `/de/products/`. */
export function localisePath(pathname: string, locale: Locale): string {
  const path = stripLocale(pathname);
  return locale === defaultLocale ? path : `/${locale}${path}`;
}
