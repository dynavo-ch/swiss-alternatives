import type { APIRoute } from 'astro';
import { getDirectory } from '~/lib/data';
import { localeStaticPaths } from '~/i18n/routing';
import { logoUrl, searchDocs } from '~/lib/export';

export const getStaticPaths = localeStaticPaths;

/** Static search index per locale, fetched lazily by the search UI. */
export const GET: APIRoute = async ({ currentLocale }) => {
  const dir = await getDirectory(currentLocale);
  const logos = new Map<string, string | null>(
    await Promise.all(
      dir.products.map(async (p) => [`p:${p.id}`, await logoUrl(p)] as [string, string | null]),
    ),
  );
  const docs = searchDocs(dir, currentLocale).map((doc) => {
    const logo = logos.get(doc.id);
    return logo ? { ...doc, logo } : doc;
  });
  return new Response(JSON.stringify({ generated: dir.buildDate.toISOString(), docs }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
