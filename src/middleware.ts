/**
 * Localises internal links on pages of non-default locales.
 *
 * Components build links with `paths.*()` without knowing the locale. For a
 * page under `/de/`, this rewrites every internal page link in the rendered
 * HTML (`href`/`action` values and absolute site URLs in JSON-LD) to its
 * `/de/` counterpart. Page paths always end in a slash, so assets, feeds and
 * data files are left alone. Elements marked `data-locale-link` (language
 * switcher, hreflang alternates) are skipped.
 */
import { defineMiddleware } from 'astro:middleware';
import { site } from '~/config/site';
import { defaultLocale, locales, type Locale } from '~/i18n/config';
import { localeOfPath } from '~/i18n/routing';

const otherLocales = locales.filter((l) => l !== defaultLocale);
const alreadyPrefixed = new RegExp(`^/(?:${otherLocales.join('|')})/`);

/** Rewrites a root-relative page path (`/products/?q=x#y`) for `locale`. */
function localise(path: string, locale: Locale): string {
  if (alreadyPrefixed.test(path) || path.startsWith('//')) return path;
  const pathname = path.split(/[?#]/, 1)[0] ?? '';
  if (!pathname.endsWith('/')) return path;
  return `/${locale}${path}`;
}

/** Opening tags with an internal href/action, unless marked data-locale-link. */
const TAG = /<(a|link|form)\b[^>]*>/g;
const ATTR = /\b(href|action)="(\/[^"]*)"/g;
const LD = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
const siteOrigin = site.url.replace(/\/$/, '');
const ABSOLUTE = new RegExp(`"${siteOrigin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(/[^"]*)"`, 'g');

export function localiseHtml(html: string, locale: Locale): string {
  return html
    .replace(TAG, (tag) =>
      tag.includes('data-locale-link')
        ? tag
        : tag.replace(
            ATTR,
            (_, attr: string, path: string) => `${attr}="${localise(path, locale)}"`,
          ),
    )
    .replace(LD, (block) =>
      block.replace(ABSOLUTE, (_, path: string) => `"${siteOrigin}${localise(path, locale)}"`),
    );
}

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const locale = localeOfPath(context.url.pathname);
  if (locale === defaultLocale) return response;
  if (!response.headers.get('content-type')?.includes('text/html')) return response;
  const html = await response.text();
  return new Response(localiseHtml(html, locale), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
});
