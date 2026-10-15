import type { APIRoute } from 'astro';
import { site } from '~/config/site';

export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      'Disallow: /compare/',
      'Disallow: /favourites/',
      '',
      `Sitemap: ${new URL('/sitemap.xml', site.url).href}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
