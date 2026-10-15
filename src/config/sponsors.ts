/**
 * Sponsors and partners.
 *
 * Policy (also published on /sponsors/): sponsorship never influences whether
 * a product is listed, how it is classified or where it appears in lists.
 * Sponsors are shown only on /sponsors/ and in the footer, always labelled.
 *
 * Add an entry to show it; the logo is optional (place it in
 * src/assets/sponsors/ and import it here).
 */
import type { ImageMetadata } from 'astro';

export interface Sponsor {
  name: string;
  url: string;
  /** "sponsor" supports the project financially; "partner" contributes in kind (hosting, research …). */
  kind: 'sponsor' | 'partner';
  /** Short, factual description of the support. */
  contribution: string;
  logo?: ImageMetadata;
  since: string;
}

export const sponsors: Sponsor[] = [
  // {
  //   name: 'Example AG',
  //   url: 'https://example.ch',
  //   kind: 'partner',
  //   contribution: 'Provides hosting for swiss-alternatives.ch.',
  //   since: '2026-11-01',
  // },
];
