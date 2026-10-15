import type { APIRoute } from 'astro';
import { site } from '~/config/site';
import { getDirectory } from '~/lib/data';
import { productRecord } from '~/lib/export';
import { isoDate } from '~/lib/format';

/**
 * The complete directory as one JSON document: products, companies,
 * categories, groups and the foreign products they replace — with relations
 * expressed as slugs. Open data under CC BY 4.0.
 */
export const GET: APIRoute = async () => {
  const dir = await getDirectory();
  const body = {
    name: site.name,
    url: site.url,
    license: 'CC BY 4.0 — attribute "Swiss Alternatives" with a link to the site',
    generated: dir.buildDate.toISOString(),
    stats: dir.stats,
    products: dir.products.map((p) => ({
      ...productRecord(p),
      companyId: p.company.id,
      categoryIds: p.categories.map((c) => c.id),
      alternativeIds: p.alternatives.map((a) => a.alternative.id),
      classificationId: p.classification,
      added: isoDate(p.data.added),
      sources: p.data.sources.map((s) => ({
        ...s,
        accessed: s.accessed ? isoDate(s.accessed) : null,
      })),
    })),
    companies: dir.companies.map((c) => ({
      id: c.id,
      name: c.name,
      type: c.data.type,
      website: c.data.website,
      founded: c.data.founded ?? null,
      headquarters: {
        city: c.data.headquarters.city ?? null,
        canton: c.data.headquarters.canton ?? null,
        country: c.data.headquarters.country,
      },
      jurisdiction: c.data.jurisdiction ?? null,
      uid: c.data.registry?.uid ?? null,
      swissOwned: c.data.ownership.swissOwned,
      parent: c.data.ownership.parent ?? null,
      parentCountry: c.data.ownership.parentCountry ?? null,
      productIds: c.products.map((p) => p.id),
      url: new URL(c.url, site.url).href,
    })),
    categories: dir.categories.map((c) => ({
      id: c.id,
      name: c.name,
      groupId: c.group.id,
      summary: c.data.summary,
      productIds: c.products.map((p) => p.id),
    })),
    groups: dir.groups.map((g) => ({
      id: g.id,
      name: g.data.name,
      categoryIds: g.categories.map((c) => c.id),
    })),
    alternatives: dir.alternatives.map((a) => ({
      id: a.id,
      name: a.name,
      vendor: a.data.vendor,
      vendorCountry: a.data.vendorCountry,
      categoryIds: a.categories.map((c) => c.id),
      swissAlternativeIds: a.products.map((l) => l.product.id),
    })),
  };
  return new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
