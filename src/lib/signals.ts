/**
 * Swiss signals, footprint and classification.
 *
 * Everything here is derived from content data — nothing is typed in by hand.
 * The rules are documented for readers on /methodology/ and must stay in sync
 * with that page (the page renders its rule tables from the exports below).
 */
import type { CollectionEntry } from 'astro:content';
import type { HostingValue, Tri } from './constants';

type ProductData = CollectionEntry<'products'>['data'];
type CompanyData = CollectionEntry<'companies'>['data'];

/* ------------------------------------------------------------------ */
/* Badges                                                              */
/* ------------------------------------------------------------------ */

export const SIGNAL_KEYS = [
  'swiss-company',
  'swiss-owned',
  'swiss-developed',
  'swiss-hosted',
  'swiss-residency',
  'swiss-infrastructure',
  'open-source',
  'self-hostable',
  'free-plan',
] as const;
export type SignalKey = (typeof SIGNAL_KEYS)[number];

/** Signals that describe the Swiss footprint (shown with the red cross motif). */
export const SWISS_SIGNALS: SignalKey[] = [
  'swiss-company',
  'swiss-owned',
  'swiss-developed',
  'swiss-hosted',
  'swiss-residency',
  'swiss-infrastructure',
];

/** Order in which badges compete for the few slots on a product card. */
export const CARD_SIGNAL_PRIORITY: SignalKey[] = [
  'swiss-hosted',
  'swiss-residency',
  'open-source',
  'free-plan',
  'self-hostable',
];

export type Signals = Record<SignalKey, boolean>;

export function isSwissCompany(company: CompanyData): boolean {
  return (
    company.headquarters.country === 'CH' &&
    (company.jurisdiction ?? company.headquarters.country) === 'CH'
  );
}

export function computeSignals(product: ProductData, company: CompanyData): Signals {
  const hosted = product.swiss.hosted?.value ?? 'unknown';
  const infraSwiss = product.swiss.infrastructure?.swissOwned ?? 'unknown';
  return {
    'swiss-company': isSwissCompany(company),
    'swiss-owned': company.ownership.swissOwned === 'yes',
    'swiss-developed': product.swiss.developed?.value === 'yes',
    'swiss-hosted': hosted === 'yes',
    'swiss-residency': hosted === 'optional' || hosted === 'partial',
    'swiss-infrastructure': hosted === 'yes' && infraSwiss === 'yes',
    'open-source': product.openSource?.value === 'yes',
    'self-hostable':
      product.deployment.includes('self-hosted') || product.deployment.includes('on-premises'),
    'free-plan': product.pricing?.freePlan === 'yes',
  };
}

/* ------------------------------------------------------------------ */
/* Footprint — five independent dimensions                             */
/* ------------------------------------------------------------------ */

export const FOOTPRINT_DIMENSIONS = [
  'headquarters',
  'ownership',
  'development',
  'hosting',
  'infrastructure',
] as const;
export type FootprintDimension = (typeof FOOTPRINT_DIMENSIONS)[number];

/** Normalised state of one footprint dimension. */
export type FootprintState = 'yes' | 'partial' | 'no' | 'unknown';

export type Footprint = Record<FootprintDimension, FootprintState>;

function fromTri(value: Tri | HostingValue | undefined): FootprintState {
  switch (value) {
    case 'yes':
      return 'yes';
    case 'no':
      return 'no';
    case 'partial':
    case 'optional':
      return 'partial';
    default:
      return 'unknown';
  }
}

export function computeFootprint(product: ProductData, company: CompanyData): Footprint {
  const hosted = product.swiss.hosted?.value;
  // Infrastructure only counts when the service is actually (at least partly) in Switzerland.
  const infra = product.swiss.infrastructure?.swissOwned;
  let infrastructure: FootprintState = fromTri(infra);
  if (hosted === 'no' && infrastructure !== 'unknown') infrastructure = 'no';

  return {
    headquarters: isSwissCompany(company) ? 'yes' : 'no',
    ownership: fromTri(company.ownership.swissOwned),
    development: fromTri(product.swiss.developed?.value),
    hosting: fromTri(hosted),
    infrastructure,
  };
}

/** 0–5 score: yes = 1, partial = 0.5. Used only for the "Swiss footprint" sort order. */
export function footprintScore(footprint: Footprint): number {
  return FOOTPRINT_DIMENSIONS.reduce((sum, key) => {
    const state = footprint[key];
    return sum + (state === 'yes' ? 1 : state === 'partial' ? 0.5 : 0);
  }, 0);
}

/* ------------------------------------------------------------------ */
/* Classification — the listing tier                                   */
/* ------------------------------------------------------------------ */

export const CLASSIFICATIONS = [
  'swiss-native',
  'swiss-company',
  'swiss-company-foreign-parent',
  'swiss-open-source',
  'swiss-hosted-foreign',
] as const;
export type Classification = (typeof CLASSIFICATIONS)[number];

/**
 * Returns the listing tier, or `null` when the product does not meet the
 * listing criteria (the build then fails with an explanation).
 */
export function classify(product: ProductData, company: CompanyData): Classification | null {
  const developed = product.swiss.developed?.value ?? 'unknown';
  if (isSwissCompany(company)) {
    const owned = company.ownership.swissOwned;
    if (owned === 'yes' && (developed === 'yes' || developed === 'partial')) return 'swiss-native';
    const parentCountry = company.ownership.parentCountry;
    if (owned === 'no' || (parentCountry && parentCountry !== 'CH')) {
      return 'swiss-company-foreign-parent';
    }
    return 'swiss-company';
  }
  if (product.openSource?.value === 'yes' && developed === 'yes') return 'swiss-open-source';
  if (product.swiss.hosted?.value === 'yes') return 'swiss-hosted-foreign';
  return null;
}

/* ------------------------------------------------------------------ */
/* Pricing tier — a simple Free / Freemium / Paid summary              */
/* ------------------------------------------------------------------ */

export const PRICING_TIERS = ['free', 'freemium', 'paid', 'unknown'] as const;
export type PricingTier = (typeof PRICING_TIERS)[number];

/**
 * Derived from `pricing.model` and `pricing.freePlan`:
 * - free: free or donation-funded, no paid plans
 * - freemium: a permanent free plan plus paid plans
 * - paid: subscription, usage-based, one-time or on request, without a free plan
 */
export function pricingTier(product: ProductData): PricingTier {
  const pricing = product.pricing;
  if (!pricing) return 'unknown';
  const { model, freePlan } = pricing;
  if (model === 'free' || model === 'donation') return 'free';
  if (model === 'freemium') return 'freemium';
  if (model && freePlan === 'yes') return 'freemium';
  if (model) return 'paid';
  return freePlan === 'yes' ? 'freemium' : 'unknown';
}
