/**
 * Content collections — the typed data model of the directory.
 *
 * Relations (company, categories, alternatives, source ids) are stored as
 * slugs and validated in `src/lib/data.ts`, which fails the build with a
 * descriptive error when a reference does not resolve.
 *
 * See docs/CONTENT.md for the authoring guide.
 */
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import {
  AUDIENCES,
  CANTONS,
  CERTIFICATIONS,
  DEPLOYMENTS,
  HOSTING_VALUES,
  PLATFORMS,
  TRI_VALUES,
  BASIS_VALUES,
} from './lib/constants';

/* ------------------------------------------------------------------ */
/* Primitive value types                                               */
/* ------------------------------------------------------------------ */

const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slugs must be lowercase words separated by "-"');

const country = z
  .string()
  .regex(/^[A-Z]{2}$/, 'Use an ISO 3166-1 alpha-2 country code such as "CH" or "DE"');

const canton = z.enum(CANTONS);

const language = z.string().regex(/^[a-z]{2}$/, 'Use ISO 639-1 language codes such as "de"');

/** YAML dates may arrive as Date objects or strings. */
const date = z.coerce.date();

const basis = z.enum(BASIS_VALUES);

const tri = z.enum(TRI_VALUES);
const hostingValue = z.enum(HOSTING_VALUES);

const provenance = {
  basis: basis.optional(),
  source: z.string().optional(),
  note: z.string().optional(),
};

/**
 * A fact can be written as a bare value (`hosted: yes`) or as an object with
 * provenance. Both are normalised to the object form.
 */
function fact<T extends z.ZodType<string>>(value: T) {
  return z
    .union([value, z.object({ value, ...provenance })])
    .transform((input) =>
      typeof input === 'string'
        ? { value: input as z.infer<T>, basis: undefined, source: undefined, note: undefined }
        : { basis: undefined, source: undefined, note: undefined, ...input },
    );
}

const source = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  url: z.url(),
  publisher: z.string().optional(),
  kind: z.enum(['vendor', 'registry', 'documentation', 'press', 'independent']).default('vendor'),
  accessed: date.optional(),
});

/* ------------------------------------------------------------------ */
/* Groups & categories                                                 */
/* ------------------------------------------------------------------ */

const groups = defineCollection({
  loader: file('src/content/groups.yaml'),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    icon: z.string(),
    order: z.number().int(),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    /** Plural noun used in sentences: "Swiss password managers". Defaults to name. */
    noun: z.string().optional(),
    group: slug,
    icon: z.string(),
    summary: z.string().max(140),
    intro: z.string(),
    related: z.array(slug).default([]),
    added: date,
  }),
});

/* ------------------------------------------------------------------ */
/* Companies                                                           */
/* ------------------------------------------------------------------ */

const companies = defineCollection({
  loader: glob({ pattern: '*.{yaml,yml}', base: './src/content/companies' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      shortName: z.string().optional(),
      type: z
        .enum(['company', 'foundation', 'association', 'cooperative', 'public-institution'])
        .default('company'),
      description: z.string(),
      website: z.url(),
      logo: image().optional(),
      founded: z.number().int().min(1800).max(2100).optional(),
      swissFounded: fact(tri).optional(),
      headquarters: z.object({
        city: z.string().optional(),
        canton: canton.optional(),
        country,
        ...provenance,
      }),
      jurisdiction: country.optional(),
      registry: z
        .object({
          uid: z.string().optional(),
          url: z.url().optional(),
        })
        .optional(),
      ownership: z
        .object({
          swissOwned: tri.default('unknown'),
          parent: z.string().optional(),
          parentCountry: country.optional(),
          parentCompany: slug.optional(),
          ...provenance,
        })
        .default({ swissOwned: 'unknown' }),
      lastVerified: date.optional(),
      sources: z.array(source).default([]),
    }),
});

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

const alternativeRef = z
  .union([slug, z.object({ id: slug, note: z.string().optional() })])
  .transform((input) => (typeof input === 'string' ? { id: input, note: undefined } : input));

const products = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      aliases: z.array(z.string()).default([]),
      company: slug,
      tagline: z.string().max(110),
      description: z.string().max(220),
      website: z.url(),
      logo: image().optional(),
      screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      status: z.enum(['active', 'beta', 'discontinued']).default('active'),
      launched: z.number().int().min(1970).max(2100).optional(),

      categories: z.array(slug).min(1, 'Every product needs at least one category'),
      alternativesTo: z.array(alternativeRef).default([]),

      audience: z.array(z.enum(AUDIENCES)).default([]),
      deployment: z.array(z.enum(DEPLOYMENTS)).default([]),
      platforms: z.array(z.enum(PLATFORMS)).default([]),
      languages: z
        .object({
          interface: z.array(language).default([]),
          support: z.array(language).default([]),
        })
        .default({ interface: [], support: [] }),

      swiss: z
        .object({
          developed: fact(tri).optional(),
          hosted: fact(hostingValue).optional(),
          dataLocations: z.array(country).default([]),
          infrastructure: z
            .object({
              provider: z.string().optional(),
              providerCountry: country.optional(),
              type: z
                .enum(['self-operated', 'colocation', 'public-cloud', 'mixed', 'unknown'])
                .default('unknown'),
              swissOwned: tri.default('unknown'),
              facility: z.string().optional(),
              ...provenance,
            })
            .optional(),
        })
        .default({ dataLocations: [] }),

      openSource: z
        .object({
          value: tri.default('unknown'),
          license: z.string().optional(),
          repository: z.url().optional(),
          ...provenance,
        })
        .optional(),

      pricing: z
        .object({
          model: z
            .enum([
              'free',
              'freemium',
              'subscription',
              'usage-based',
              'one-time',
              'quote',
              'donation',
            ])
            .optional(),
          freePlan: tri.default('unknown'),
          freeTrial: tri.default('unknown'),
          enterprise: tri.default('unknown'),
          chfBilling: tri.default('unknown'),
          startingPrice: z
            .object({
              amount: z.number().nonnegative(),
              currency: z.enum(['CHF', 'EUR', 'USD']),
              period: z.enum(['month', 'year', 'one-time', 'hour', 'usage']),
              note: z.string().optional(),
            })
            .optional(),
          url: z.url().optional(),
          checked: date.optional(),
          ...provenance,
        })
        .optional(),

      features: z
        .object({
          e2ee: tri.default('unknown'),
          encryptionAtRest: tri.default('unknown'),
          encryptionInTransit: tri.default('unknown'),
          mfa: tri.default('unknown'),
          sso: tri.default('unknown'),
          scim: tri.default('unknown'),
          api: tri.default('unknown'),
          dataExport: tri.default('unknown'),
        })
        .partial()
        .default({}),

      certifications: z.array(z.enum(CERTIFICATIONS)).default([]),

      sustainability: z.object({ summary: z.string(), ...provenance }).optional(),

      tags: z.array(z.string()).default([]),
      affiliate: z.object({ url: z.url(), note: z.string().optional() }).nullable().optional(),
      sponsored: z.boolean().default(false),

      added: date,
      updated: date.optional(),
      lastVerified: date.optional(),
      sources: z.array(source).default([]),
    }),
});

/* ------------------------------------------------------------------ */
/* Alternatives (foreign products people replace)                      */
/* ------------------------------------------------------------------ */

const alternatives = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/alternatives' }),
  schema: z.object({
    name: z.string(),
    vendor: z.string(),
    vendorCountry: country,
    parent: z.string().optional(),
    summary: z.string(),
    website: z.url(),
    categories: z.array(slug).min(1),
    aliases: z.array(z.string()).default([]),
    popular: z.boolean().default(false),
    status: z.enum(['active', 'discontinued']).default('active'),
  }),
});

/* ------------------------------------------------------------------ */
/* Editorial pages (about, privacy, imprint) — one file per locale     */
/* ------------------------------------------------------------------ */

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    updated: date.optional(),
  }),
});

export const collections = { groups, categories, companies, products, alternatives, pages };
