import type { APIRoute } from 'astro';
import { site } from '~/config/site';
import { defaultLocale, locales } from '~/i18n/config';
import { localisePath } from '~/i18n/routing';
import { getDirectory } from '~/lib/data';
import { isoDate } from '~/lib/format';
import { paths } from '~/lib/paths';

/**
 * XML sitemap generated from the directory graph. Only indexable pages are
 * listed: entries without Swiss products (rendered `noindex`) and pages that
 * depend on local state (compare, favourites, search) are left out. Every
 * page is listed once per locale with hreflang alternates.
 */
export const GET: APIRoute = async () => {
  const dir = await getDirectory();
  const latest = (dates: Date[]) =>
    dates.length ? isoDate(new Date(Math.max(...dates.map(Number)))) : undefined;
  const productDate = (p: (typeof dir.products)[number]) => p.updatedAt;

  const urls: { path: string; lastmod?: string | undefined }[] = [
    { path: paths.home(), lastmod: latest(dir.products.map(productDate)) },
    { path: paths.products(), lastmod: latest(dir.products.map(productDate)) },
    { path: paths.categories() },
    { path: paths.alternatives() },
    { path: paths.companies() },
    { path: paths.latest(), lastmod: latest(dir.products.map(productDate)) },
    { path: paths.about() },
    { path: paths.methodology() },
    { path: paths.suggest() },
    { path: paths.contribute() },
    { path: paths.contact() },
    { path: paths.sponsors() },
    { path: paths.privacy() },
    { path: paths.imprint() },
    ...dir.products.map((p) => ({ path: p.url, lastmod: isoDate(productDate(p)) })),
    ...dir.categories
      .filter((c) => c.products.length > 0)
      .map((c) => ({ path: c.url, lastmod: latest(c.products.map(productDate)) })),
    ...dir.alternatives
      .filter((a) => a.products.length > 0)
      .map((a) => ({
        path: a.url,
        lastmod: latest(a.products.map((l) => productDate(l.product))),
      })),
    ...dir.companies
      .filter((c) => c.products.length > 0)
      .map((c) => ({ path: c.url, lastmod: latest(c.products.map(productDate)) })),
  ];

  const href = (path: string) => new URL(path, site.url).href;
  const body = urls
    .flatMap(({ path, lastmod }) => {
      const alternates = [
        ...locales.map((l) => [l, localisePath(path, l)] as const),
        ['x-default', localisePath(path, defaultLocale)] as const,
      ]
        .map(([lang, p]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${href(p)}"/>`)
        .join('');
      return locales.map(
        (l) =>
          `  <url><loc>${href(localisePath(path, l))}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}${alternates}</url>`,
      );
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
