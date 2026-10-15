/**
 * Structured data (schema.org JSON-LD) builders. Used sparingly and only
 * where the type genuinely fits the page.
 */
import { site } from '~/config/site';
import type { Alternative, Category, Company, Product } from './data';
import { isoDate } from './format';
import { paths } from './paths';

export type JsonLd = Record<string, unknown>;

export const absolute = (path: string) => new URL(path, site.url).toString();

export interface Crumb {
  label: string;
  href: string;
}

export function breadcrumbLd(crumbs: Crumb[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: absolute(crumb.href),
    })),
  };
}

export function websiteLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absolute(paths.search())}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

function organization(company: Company): JsonLd {
  const hq = company.data.headquarters;
  return {
    '@type': 'Organization',
    name: company.name,
    url: company.data.website,
    ...(company.data.founded ? { foundingDate: String(company.data.founded) } : {}),
    address: {
      '@type': 'PostalAddress',
      ...(hq.city ? { addressLocality: hq.city } : {}),
      ...(hq.canton ? { addressRegion: hq.canton } : {}),
      addressCountry: hq.country,
    },
  };
}

export function companyLd(company: Company): JsonLd {
  return {
    '@context': 'https://schema.org',
    ...organization(company),
    '@id': absolute(company.url),
    description: company.data.description,
  };
}

const OS: Record<string, string> = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  ios: 'iOS',
  android: 'Android',
};

export function productLd(product: Product): JsonLd {
  const d = product.data;
  const price = d.pricing?.startingPrice;
  const os = d.platforms.map((p) => OS[p]).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: d.name,
    description: d.description,
    url: d.website,
    applicationCategory: product.primaryCategory.name,
    ...(os.length
      ? { operatingSystem: os.join(', ') }
      : d.platforms.includes('web')
        ? { operatingSystem: 'Web' }
        : {}),
    publisher: organization(product.company),
    ...(d.updated ? { dateModified: isoDate(d.updated) } : {}),
    ...(price
      ? {
          offers: {
            '@type': 'Offer',
            price: price.amount.toFixed(2),
            priceCurrency: price.currency,
            ...(d.pricing?.url ? { url: d.pricing.url } : {}),
          },
        }
      : d.pricing?.freePlan === 'yes'
        ? { offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF' } }
        : {}),
  };
}

export function itemListLd(name: string, url: string, products: Product[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: absolute(url),
    numberOfItems: products.length,
    itemListElement: products.map((product, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absolute(product.url),
      name: product.name,
    })),
  };
}

export function categoryLd(category: Category): JsonLd {
  return itemListLd(`Swiss ${category.noun}`, category.url, category.products);
}

export function alternativeLd(alternative: Alternative): JsonLd {
  return itemListLd(
    `Swiss alternatives to ${alternative.name}`,
    alternative.url,
    alternative.products.map((l) => l.product),
  );
}
