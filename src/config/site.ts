/**
 * Global site configuration.
 *
 * Renaming the project or moving it to another domain only requires changes
 * here (and, optionally, the PUBLIC_SITE_URL environment variable for preview
 * deployments).
 */
const domain = 'swiss-alternatives.ch';

export const site = {
  name: 'Swiss Alternatives',
  /** Short name used in tight spaces (e.g. the mobile header, web manifest). */
  shortName: 'Swiss Alt.',
  domain,
  url: process.env.PUBLIC_SITE_URL ?? `https://${domain}`,
  tagline: 'Find the Swiss alternative.',
  description:
    'An independent directory of software, cloud services and digital products from Swiss companies — with transparent information about ownership, hosting and data residency.',
  /** Public source repository. Used for "Suggest a product" and "Edit this entry" links. */
  repository: 'https://github.com/dynavo-ch/swiss-alternatives',
  /** Branch that holds the content, used for "edit on GitHub" links. */
  repositoryBranch: 'main',
  /** One public mailbox for suggestions, corrections, vendors, press and partnerships. */
  contactEmail: `info@${domain}`,
  /** Operator shown on the imprint page. */
  operator: {
    name: 'Dynavo',
    street: '',
    postalCode: '9000',
    city: 'St. Gallen',
    country: 'CH', // ISO 3166-1 alpha-2
    email: `info@${domain}`,
  },
  /**
   * Related, independent directories we point readers to. Shown on /about/
   * and in the footer. Neutral pointers — no partnership is implied.
   */
  related: [
    {
      name: 'European Alternatives',
      url: 'https://european-alternatives.eu',
      description:
        'Alternatives to US services from companies in the EU and Europe — the reference for European digital sovereignty, and an inspiration for this project.',
      footer: true,
    },
    {
      name: 'OpenAlternative',
      url: 'https://openalternative.co',
      description: 'Open-source alternatives to popular proprietary software.',
      footer: false,
    },
    {
      name: 'Open Source Alternative To',
      url: 'https://www.opensourcealternative.to',
      description: 'Open-source alternatives, with repository statistics and licences.',
      footer: false,
    },
    {
      name: 'Privacy Guides',
      url: 'https://www.privacyguides.org',
      description: 'Community-maintained recommendations for privacy and security tools.',
      footer: false,
    },
  ],
  /** Products added within this many days are labelled "New". */
  newWindowDays: 21,
  /**
   * Entries added on or before this date form the initial dataset and are not
   * labelled "New" (otherwise every entry would be new at launch).
   */
  launchDate: '2026-10-16',
  /** Maximum number of products in a comparison. */
  compareLimit: 4,
  /**
   * Optional privacy-friendly analytics. Disabled by default — the site sets
   * no cookies and makes no third-party requests unless this is configured.
   */
  analytics: null as null | {
    provider: 'plausible' | 'umami';
    src: string;
    domain?: string;
    websiteId?: string;
  },
} as const;

export type SiteConfig = typeof site;
