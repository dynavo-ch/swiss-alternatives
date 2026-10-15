import type { APIRoute } from 'astro';
import { site } from '~/config/site';

/** RFC 9116 security contact. Expires one year after each build. */
export const GET: APIRoute = () => {
  const expires = new Date(Date.now() + 365 * 86_400_000).toISOString();
  return new Response(
    [
      `Contact: mailto:${site.contactEmail}`,
      `Expires: ${expires}`,
      'Preferred-Languages: en, de, fr, it',
      `Canonical: ${new URL('/.well-known/security.txt', site.url).href}`,
      `Policy: ${new URL('/contact/', site.url).href}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
