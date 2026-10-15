import type { APIRoute } from 'astro';
import { site } from '~/config/site';
import { getDirectory, sortByAdded } from '~/lib/data';
import { paths } from '~/lib/paths';

const escape = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!,
  );

/**
 * RSS 2.0 feed of newly added products (newest 50), regenerated on every build.
 * New entries appear as soon as a content change is merged and deployed.
 */
export const GET: APIRoute = async () => {
  const { products, buildDate } = await getDirectory();
  const self = new URL(paths.rss(), site.url).href;
  const items = sortByAdded(products)
    .slice(0, 50)
    .map((p) => {
      const url = new URL(p.url, site.url).href;
      return `    <item>
      <title>${escape(p.name)} — ${escape(p.primaryCategory.name)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${p.data.added.toUTCString()}</pubDate>
      <description>${escape(p.data.description)}</description>
${p.categories.map((c) => `      <category>${escape(c.name)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)} — Latest additions</title>
    <link>${new URL(paths.latest(), site.url).href}</link>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
    <description>${escape(site.description)}</description>
    <language>en</language>
    <lastBuildDate>${buildDate.toUTCString()}</lastBuildDate>
    <ttl>1440</ttl>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
