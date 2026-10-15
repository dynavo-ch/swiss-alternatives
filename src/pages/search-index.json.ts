import type { APIRoute } from 'astro';
import { getDirectory } from '~/lib/data';
import { logoUrl, searchDocs } from '~/lib/export';

/** Static search index, fetched lazily by the search UI. */
export const GET: APIRoute = async () => {
  const dir = await getDirectory();
  const logos = new Map<string, string | null>(
    await Promise.all(
      dir.products.map(async (p) => [`p:${p.id}`, await logoUrl(p)] as [string, string | null]),
    ),
  );
  const docs = searchDocs(dir).map((doc) => {
    const logo = logos.get(doc.id);
    return logo ? { ...doc, logo } : doc;
  });
  return new Response(JSON.stringify({ generated: dir.buildDate.toISOString(), docs }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
