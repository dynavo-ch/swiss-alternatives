import type { APIRoute } from 'astro';
import { getDirectory } from '~/lib/data';
import { logoUrl, productRecord } from '~/lib/export';

/**
 * Compact product data for the comparison table, favourites and random
 * discovery. Also a convenient open-data export of the directory.
 */
export const GET: APIRoute = async () => {
  const dir = await getDirectory();
  return new Response(
    JSON.stringify({
      generated: dir.buildDate.toISOString(),
      license: 'Directory data: CC BY 4.0. Verify facts with the linked sources.',
      products: await Promise.all(
        dir.products.map(async (p) => ({ ...productRecord(p), logo: await logoUrl(p) })),
      ),
    }),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
};
