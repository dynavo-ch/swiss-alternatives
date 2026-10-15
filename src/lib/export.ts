/**
 * Serialisers for the static JSON files consumed by client-side features.
 * Labels are resolved at build time so the browser needs no dictionary.
 */
import { useTranslations } from '~/i18n';
import { CERTIFICATION_LABELS, FEATURE_KEYS } from './constants';
import { getImage } from 'astro:assets';
import type { Directory, Product } from './data';
import { licenseClass } from './licenses';
import {
  cantonName,
  countryName,
  formatPrice,
  isoDate,
  languageName,
  monogram,
  shortLocation,
} from './format';
import { FOOTPRINT_DIMENSIONS, SIGNAL_KEYS } from './signals';

export interface SearchDoc {
  id: string;
  type: 'alternative' | 'product' | 'category' | 'company';
  title: string;
  subtitle: string;
  aliases: string;
  keywords: string;
  text: string;
  url: string;
  count?: number;
  meta?: string;
  popular?: boolean;
  mono?: string;
  logo?: string | null;
}

export function searchDocs(dir: Directory, locale?: string): SearchDoc[] {
  const t = useTranslations(locale);
  const docs: SearchDoc[] = [];

  for (const a of dir.alternatives) {
    docs.push({
      id: `a:${a.id}`,
      type: 'alternative',
      title: a.name,
      subtitle: `${a.data.vendor} · ${countryName(a.data.vendorCountry, locale)}`,
      aliases: a.data.aliases.join(' '),
      keywords: [a.data.vendor, a.data.parent, ...a.categories.map((c) => c.name)]
        .filter(Boolean)
        .join(' '),
      text: a.data.summary,
      url: a.url,
      count: a.products.length,
      popular: a.data.popular,
    });
  }

  for (const p of dir.products) {
    const d = p.data;
    const hq = p.company.data.headquarters;
    docs.push({
      id: `p:${p.id}`,
      type: 'product',
      title: p.name,
      subtitle: `${p.company.displayName} · ${p.primaryCategory.name}`,
      aliases: d.aliases.join(' '),
      keywords: [
        p.company.name,
        ...p.categories.map((c) => `${c.name} ${c.noun}`),
        ...p.alternatives.map(
          (l) => `${l.alternative.name} ${l.alternative.data.aliases.join(' ')}`,
        ),
        ...d.tags,
        hq.city,
        hq.canton ? cantonName(hq.canton) : undefined,
      ]
        .filter(Boolean)
        .join(' '),
      text: [
        d.tagline,
        d.description,
        ...FEATURE_KEYS.filter((k) => d.features[k] === 'yes').map((k) => t(`feature.${k}`)),
        ...SIGNAL_KEYS.filter((k) => p.signals[k]).map((k) => t(`signal.${k}`)),
        p.pricingTier !== 'unknown' ? t(`pricing.tier.${p.pricingTier}`) : '',
        d.openSource?.license ?? '',
      ].join(' '),
      url: p.url,
      meta: hq.canton,
      mono: monogram(p.name),
    });
  }

  for (const c of dir.categories) {
    docs.push({
      id: `c:${c.id}`,
      type: 'category',
      title: c.name,
      subtitle: c.group.data.name,
      aliases: c.noun,
      keywords: c.alternatives.map((a) => a.name).join(' '),
      text: c.data.summary,
      url: c.url,
      count: c.products.length,
    });
  }

  for (const co of dir.companies) {
    if (co.products.length === 0) continue;
    const hq = co.data.headquarters;
    docs.push({
      id: `o:${co.id}`,
      type: 'company',
      title: co.name,
      subtitle: shortLocation(hq, locale),
      aliases: co.data.shortName ?? '',
      keywords: co.products.map((p) => p.name).join(' '),
      text: co.data.description,
      url: co.url,
      count: co.products.length,
    });
  }

  return docs;
}

export function productRecord(p: Product, locale?: string) {
  const t = useTranslations(locale);
  const d = p.data;
  const c = p.company.data;
  const hq = c.headquarters;
  const price = d.pricing?.startingPrice;
  return {
    id: p.id,
    name: p.name,
    url: p.url,
    website: d.website,
    tagline: d.tagline,
    mono: monogram(p.name),
    company: p.company.name,
    companyUrl: p.company.url,
    location: hq.city ?? countryName(hq.country, locale),
    canton: hq.canton ? `${cantonName(hq.canton)} (${hq.canton})` : null,
    category: p.primaryCategory.name,
    categoryUrl: p.primaryCategory.url,
    classification: t(`class.${p.classification}`),
    footprint: Object.fromEntries(FOOTPRINT_DIMENSIONS.map((dim) => [dim, p.footprint[dim]])),
    signals: SIGNAL_KEYS.filter((k) => p.signals[k]),
    swissCompany: p.company.isSwiss ? 'yes' : 'no',
    jurisdiction: c.jurisdiction ? countryName(c.jurisdiction, locale) : null,
    owned: c.ownership.swissOwned,
    parent: c.ownership.parent
      ? `${c.ownership.parent}${c.ownership.parentCountry ? ` (${c.ownership.parentCountry})` : ''}`
      : null,
    developed: d.swiss.developed?.value ?? 'unknown',
    hosted: d.swiss.hosted?.value ?? 'unknown',
    dataLocations: d.swiss.dataLocations.map((code) => countryName(code, locale)),
    infrastructure: d.swiss.infrastructure?.swissOwned ?? 'unknown',
    infraProvider: d.swiss.infrastructure?.provider ?? null,
    openSource: d.openSource?.value ?? 'unknown',
    license: d.openSource?.license ?? null,
    licenseClass: licenseClass(d.openSource?.license) ?? null,
    repository: d.openSource?.repository ?? null,
    githubStars: p.repository?.kind === 'repository' ? (p.repository.stars ?? null) : null,
    selfHostable: p.signals['self-hostable'] ? 'yes' : d.deployment.length ? 'no' : 'unknown',
    deployment: d.deployment.map((x) => t(`deployment.${x}`)),
    platforms: d.platforms.map((x) => t(`platform.${x}`)),
    audience: d.audience.map((x) => t(`audience.${x}`)),
    languages: d.languages.interface.map((l) => languageName(l, locale)),
    pricingTier: p.pricingTier,
    pricingTierLabel: t(`pricing.tier.${p.pricingTier}`),
    pricingModel: d.pricing?.model ? t(`pricing.model.${d.pricing.model}`) : null,
    freePlan: d.pricing?.freePlan ?? 'unknown',
    freeTrial: d.pricing?.freeTrial ?? 'unknown',
    enterprise: d.pricing?.enterprise ?? 'unknown',
    chfBilling: d.pricing?.chfBilling ?? 'unknown',
    price: price ? formatPrice(price, (period) => t(`pricing.period.${period}`), locale) : null,
    priceNote: price?.note ?? null,
    features: Object.fromEntries(FEATURE_KEYS.map((k) => [k, d.features[k] ?? 'unknown'])),
    certifications: d.certifications.map((x) => CERTIFICATION_LABELS[x]),
    lastVerified: d.lastVerified ? isoDate(d.lastVerified) : null,
  };
}

export type ProductRecord = ReturnType<typeof productRecord>;

/** Optimised 64 px logo URL for client-rendered lists (search, compare, favourites). */
export async function logoUrl(product: Product): Promise<string | null> {
  if (!product.logo) return null;
  const image = await getImage({ src: product.logo, width: 64, height: 64, format: 'webp' });
  return image.src;
}
