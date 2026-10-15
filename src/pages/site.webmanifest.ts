import type { APIRoute } from 'astro';
import { site } from '~/config/site';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: site.name,
      short_name: site.shortName,
      description: site.description,
      start_url: '/',
      display: 'browser',
      background_color: '#f5f4f0',
      theme_color: '#f5f4f0',
      icons: [
        { src: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
        { src: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
