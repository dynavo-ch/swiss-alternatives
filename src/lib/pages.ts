/** Editorial page content (src/content/pages/<locale>/<slug>.md) with English fallback. */
import { getEntry, type CollectionEntry } from 'astro:content';
import { defaultLocale } from '~/i18n/config';
import { resolveLocale } from '~/i18n';

export async function getPage(slug: string, locale?: string): Promise<CollectionEntry<'pages'>> {
  const lang = resolveLocale(locale);
  const entry =
    (await getEntry('pages', `${lang}/${slug}`)) ??
    (await getEntry('pages', `${defaultLocale}/${slug}`));
  if (!entry)
    throw new Error(`Missing page content: src/content/pages/${defaultLocale}/${slug}.md`);
  return entry;
}
