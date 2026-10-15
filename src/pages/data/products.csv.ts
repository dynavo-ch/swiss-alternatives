import type { APIRoute } from 'astro';
import { site } from '~/config/site';
import { getDirectory } from '~/lib/data';
import { productRecord } from '~/lib/export';

/** Flat CSV export of all products for spreadsheets. */
const COLUMNS = [
  'id',
  'name',
  'company',
  'location',
  'canton',
  'category',
  'classification',
  'swissCompany',
  'owned',
  'developed',
  'hosted',
  'dataLocations',
  'infrastructure',
  'openSource',
  'license',
  'pricingTier',
  'price',
  'freePlan',
  'platforms',
  'website',
  'url',
  'lastVerified',
] as const;

const cell = (value: unknown) => {
  const text = Array.isArray(value) ? value.join('; ') : value == null ? '' : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

export const GET: APIRoute = async () => {
  const { products } = await getDirectory();
  const rows = products.map((p) => {
    const record = productRecord(p) as Record<string, unknown>;
    return COLUMNS.map((key) =>
      cell(key === 'url' ? new URL(p.url, site.url).href : record[key]),
    ).join(',');
  });
  return new Response([COLUMNS.join(','), ...rows].join('\n') + '\n', {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
};
