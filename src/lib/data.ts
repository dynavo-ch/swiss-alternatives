/**
 * The directory graph.
 *
 * Loads every content collection once, resolves all relations (product →
 * company, categories, alternatives; category → group; …), validates them and
 * derives signals, classifications and statistics. Pages only ever talk to
 * this module, never to `astro:content` directly.
 *
 * Any broken reference fails the build with a list of every problem found.
 */
import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '~/config/site';
import { paths } from './paths';
import {
  classify,
  computeFootprint,
  pricingTier,
  computeSignals,
  footprintScore,
  isSwissCompany,
  type Classification,
  type Footprint,
  type PricingTier,
  type Signals,
} from './signals';
import { companyLogo, productLogo } from './logos';
import { repositoryFor, type RepositoryStats } from './repositories';

export type ProductEntry = CollectionEntry<'products'>;
export type ProductData = ProductEntry['data'];
export type CompanyData = CollectionEntry<'companies'>['data'];
export type CategoryData = CollectionEntry<'categories'>['data'];
export type GroupData = CollectionEntry<'groups'>['data'];
export type AlternativeData = CollectionEntry<'alternatives'>['data'];
export type Source = ProductData['sources'][number];

export interface Group {
  id: string;
  data: GroupData;
  categories: Category[];
  productCount: number;
}

export interface Category {
  id: string;
  data: CategoryData;
  name: string;
  /** Lower-case plural noun for use in sentences. */
  noun: string;
  url: string;
  group: Group;
  products: Product[];
  /** Foreign products in this category, most-replaced first. */
  alternatives: Alternative[];
  related: Category[];
}

export interface Company {
  id: string;
  data: CompanyData;
  name: string;
  displayName: string;
  url: string;
  isSwiss: boolean;
  logo?: ImageMetadata | undefined;
  parentCompany?: Company;
  products: Product[];
}

export interface AlternativeLink {
  alternative: Alternative;
  note?: string | undefined;
}

export interface ProductLink {
  product: Product;
  note?: string | undefined;
}

export interface Alternative {
  id: string;
  data: AlternativeData;
  name: string;
  url: string;
  categories: Category[];
  products: ProductLink[];
}

export interface Product {
  id: string;
  entry: ProductEntry;
  data: ProductData;
  name: string;
  url: string;
  company: Company;
  categories: Category[];
  primaryCategory: Category;
  alternatives: AlternativeLink[];
  signals: Signals;
  footprint: Footprint;
  footprintScore: number;
  classification: Classification;
  pricingTier: PricingTier;
  /** Logo from the content file, else the normalised tile in src/assets/logos/. */
  logo?: ImageMetadata | undefined;
  /** True for normalised tiles (already padded, shown edge to edge). */
  logoNormalized: boolean;
  /** GitHub statistics for the product's repository, if synced (scripts/sync-repos.mjs). */
  repository?: RepositoryStats | undefined;
  isNew: boolean;
  /** Most recent of updated / added. */
  updatedAt: Date;
}

export interface Directory {
  groups: Group[];
  categories: Category[];
  companies: Company[];
  products: Product[];
  alternatives: Alternative[];
  byId: {
    groups: Map<string, Group>;
    categories: Map<string, Category>;
    companies: Map<string, Company>;
    products: Map<string, Product>;
    alternatives: Map<string, Alternative>;
  };
  stats: Stats;
  buildDate: Date;
}

export interface Stats {
  products: number;
  companies: number;
  categories: number;
  alternatives: number;
  swissHosted: number;
  openSource: number;
  swissNative: number;
  cantons: number;
  freePlan: number;
}

const byName = <T extends { name: string }>(a: T, b: T) =>
  a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });

let cache: Promise<Directory> | undefined;

/** Returns the fully resolved directory. Cached for the duration of the build. */
export function getDirectory(): Promise<Directory> {
  cache ??= buildDirectory();
  return cache;
}

async function buildDirectory(): Promise<Directory> {
  const [groupEntries, categoryEntries, companyEntries, productEntries, alternativeEntries] =
    await Promise.all([
      getCollection('groups'),
      getCollection('categories'),
      getCollection('companies'),
      getCollection('products'),
      getCollection('alternatives'),
    ]);

  const errors: string[] = [];
  const warnings: string[] = [];
  const buildDate = new Date();

  /* Groups ----------------------------------------------------------- */
  const groups = new Map<string, Group>();
  for (const entry of groupEntries) {
    groups.set(entry.id, { id: entry.id, data: entry.data, categories: [], productCount: 0 });
  }

  /* Categories ------------------------------------------------------- */
  const categories = new Map<string, Category>();
  for (const entry of categoryEntries) {
    const group = groups.get(entry.data.group);
    if (!group) {
      errors.push(
        `categories/${entry.id}.yaml: group "${entry.data.group}" does not exist in src/content/groups.yaml (available: ${[...groups.keys()].join(', ')})`,
      );
      continue;
    }
    const category: Category = {
      id: entry.id,
      data: entry.data,
      name: entry.data.name,
      noun: entry.data.noun ?? entry.data.name.toLowerCase(),
      url: paths.category(entry.id),
      group,
      products: [],
      alternatives: [],
      related: [],
    };
    categories.set(entry.id, category);
    group.categories.push(category);
  }
  for (const category of categories.values()) {
    for (const relatedId of category.data.related) {
      const related = categories.get(relatedId);
      if (!related)
        errors.push(
          missing(`categories/${category.id}.yaml`, 'related category', relatedId, categories),
        );
      else category.related.push(related);
    }
  }

  /* Companies -------------------------------------------------------- */
  const companies = new Map<string, Company>();
  for (const entry of companyEntries) {
    const file = `companies/${entry.id}.yaml`;
    checkSources(file, entry.data.sources, entry.data, errors, warnings);
    companies.set(entry.id, {
      id: entry.id,
      data: entry.data,
      name: entry.data.name,
      displayName: entry.data.shortName ?? entry.data.name,
      url: paths.company(entry.id),
      isSwiss: isSwissCompany(entry.data),
      logo: entry.data.logo ?? companyLogo(entry.id),
      products: [],
    });
  }
  for (const company of companies.values()) {
    const parentId = company.data.ownership.parentCompany;
    if (!parentId) continue;
    const parent = companies.get(parentId);
    if (!parent)
      errors.push(missing(`companies/${company.id}.yaml`, 'parent company', parentId, companies));
    else company.parentCompany = parent;
  }

  /* Alternatives ----------------------------------------------------- */
  const alternatives = new Map<string, Alternative>();
  for (const entry of alternativeEntries) {
    const resolved: Category[] = [];
    for (const categoryId of entry.data.categories) {
      const category = categories.get(categoryId);
      if (!category)
        errors.push(missing(`alternatives/${entry.id}.yaml`, 'category', categoryId, categories));
      else resolved.push(category);
    }
    alternatives.set(entry.id, {
      id: entry.id,
      data: entry.data,
      name: entry.data.name,
      url: paths.alternative(entry.id),
      categories: resolved,
      products: [],
    });
  }

  /* Products --------------------------------------------------------- */
  const products = new Map<string, Product>();
  const newCutoff = Math.max(
    buildDate.getTime() - site.newWindowDays * 86_400_000,
    new Date(site.launchDate).getTime() + 1,
  );
  const names = new Map<string, string>();

  for (const entry of productEntries) {
    const file = `products/${entry.id}.md`;
    const data = entry.data;

    const lowerName = data.name.toLowerCase();
    if (names.has(lowerName)) {
      errors.push(
        `${file}: product name "${data.name}" is already used by products/${names.get(lowerName)}.md`,
      );
    }
    names.set(lowerName, entry.id);

    const company = companies.get(data.company);
    if (!company) {
      errors.push(missing(file, 'company', data.company, companies));
      continue;
    }

    const productCategories: Category[] = [];
    for (const categoryId of data.categories) {
      const category = categories.get(categoryId);
      if (!category) errors.push(missing(file, 'category', categoryId, categories));
      else productCategories.push(category);
    }
    if (productCategories.length === 0) continue;

    const links: AlternativeLink[] = [];
    for (const ref of data.alternativesTo) {
      const alternative = alternatives.get(ref.id);
      if (!alternative)
        errors.push(missing(file, 'alternative (alternativesTo)', ref.id, alternatives));
      else links.push({ alternative, note: ref.note });
    }

    checkSources(file, data.sources, data, errors, warnings);

    const classification = classify(data, company.data);
    if (!classification) {
      errors.push(
        `${file}: does not meet the listing criteria. The company "${company.name}" is not headquartered and incorporated in Switzerland, and the product is neither Swiss-developed open source nor hosted in Switzerland. See /methodology/.`,
      );
      continue;
    }

    const footprint = computeFootprint(data, company.data);
    const product: Product = {
      id: entry.id,
      entry,
      data,
      name: data.name,
      url: paths.product(entry.id),
      company,
      categories: productCategories,
      primaryCategory: productCategories[0]!,
      alternatives: links,
      signals: computeSignals(data, company.data),
      footprint,
      footprintScore: footprintScore(footprint),
      classification,
      pricingTier: pricingTier(data),
      logo: data.logo ?? productLogo(entry.id, company.id),
      logoNormalized: !data.logo,
      repository: repositoryFor(data.openSource?.repository),
      isNew: data.added.getTime() >= newCutoff,
      updatedAt: data.updated && data.updated > data.added ? data.updated : data.added,
    };
    products.set(entry.id, product);
  }

  if (errors.length > 0) {
    throw new Error(
      `Content validation failed with ${errors.length} problem(s):\n\n` +
        errors.map((e) => `  • ${e}`).join('\n') +
        '\n\nSee docs/CONTENT.md for the content format.\n',
    );
  }
  if (warnings.length > 0 && process.env.CONTENT_WARNINGS !== 'off') {
    console.warn(
      `\n[content] ${warnings.length} warning(s):\n` +
        warnings.map((w) => `  • ${w}`).join('\n') +
        '\n',
    );
  }

  /* Back-links ------------------------------------------------------- */
  const productList = [...products.values()].sort(byName);
  for (const product of productList) {
    product.company.products.push(product);
    for (const category of product.categories) category.products.push(product);
    for (const link of product.alternatives) {
      link.alternative.products.push({ product, note: link.note });
    }
  }

  // Foreign products per category, ordered by how many Swiss alternatives exist.
  const alternativeList = [...alternatives.values()].sort(byName);
  for (const alternative of alternativeList) {
    for (const category of alternative.categories) category.alternatives.push(alternative);
  }
  for (const category of categories.values()) {
    category.alternatives.sort(
      (a, b) =>
        Number(b.data.popular) - Number(a.data.popular) ||
        b.products.length - a.products.length ||
        byName(a, b),
    );
  }

  const groupList = [...groups.values()].sort((a, b) => a.data.order - b.data.order);
  for (const group of groupList) {
    group.categories.sort(byName);
    group.productCount = new Set(group.categories.flatMap((c) => c.products.map((p) => p.id))).size;
  }

  const categoryList = [...categories.values()].sort(byName);
  const companyList = [...companies.values()].sort(byName);

  const cantons = new Set(
    companyList
      .filter((c) => c.products.length > 0 && c.data.headquarters.canton)
      .map((c) => c.data.headquarters.canton),
  );

  const stats: Stats = {
    products: productList.length,
    companies: companyList.filter((c) => c.products.length > 0).length,
    categories: categoryList.filter((c) => c.products.length > 0).length,
    alternatives: alternativeList.filter((a) => a.products.length > 0).length,
    swissHosted: productList.filter((p) => p.signals['swiss-hosted']).length,
    openSource: productList.filter((p) => p.signals['open-source']).length,
    swissNative: productList.filter((p) => p.classification === 'swiss-native').length,
    freePlan: productList.filter((p) => p.signals['free-plan']).length,
    cantons: cantons.size,
  };

  return {
    groups: groupList,
    categories: categoryList,
    companies: companyList,
    products: productList,
    alternatives: alternativeList,
    byId: { groups, categories, companies, products, alternatives },
    stats,
    buildDate,
  };
}

/* ------------------------------------------------------------------ */
/* Validation helpers                                                  */
/* ------------------------------------------------------------------ */

function missing(file: string, what: string, id: string, available: Map<string, unknown>): string {
  const suggestion = closest(id, [...available.keys()]);
  return `${file}: ${what} "${id}" does not exist${suggestion ? ` — did you mean "${suggestion}"?` : ''}`;
}

/** Finds `{ source: "id" }` references anywhere in an entry and checks them. */
function checkSources(
  file: string,
  sources: Source[],
  data: unknown,
  errors: string[],
  warnings: string[],
) {
  const ids = new Set<string>();
  for (const source of sources) {
    if (ids.has(source.id)) errors.push(`${file}: duplicate source id "${source.id}"`);
    ids.add(source.id);
  }
  const visit = (value: unknown, path: string) => {
    if (!value || typeof value !== 'object' || value instanceof Date) return;
    if (Array.isArray(value)) {
      if (path === 'sources') return;
      value.forEach((item, i) => visit(item, `${path}[${i}]`));
      return;
    }
    const record = value as Record<string, unknown>;
    if (typeof record.source === 'string' && !ids.has(record.source)) {
      errors.push(
        `${file}: ${path || 'entry'}.source "${record.source}" is not defined in sources (defined: ${[...ids].join(', ') || 'none'})`,
      );
    }
    const hasClaim = 'value' in record && record.value !== 'unknown';
    if (hasClaim && !record.basis && path.startsWith('swiss')) {
      warnings.push(`${file}: ${path} has no "basis" (verified | vendor | inferred)`);
    }
    for (const [key, child] of Object.entries(record)) {
      if (key === 'sources') continue;
      visit(child, path ? `${path}.${key}` : key);
    }
  };
  visit(data, '');
}

/** Small Levenshtein-based suggestion for typos in references. */
function closest(target: string, candidates: string[]): string | undefined {
  let best: string | undefined;
  let bestDistance = Infinity;
  for (const candidate of candidates) {
    const d = levenshtein(target, candidate);
    if (d < bestDistance) {
      bestDistance = d;
      best = candidate;
    }
  }
  return bestDistance <= Math.max(2, Math.floor(target.length / 3)) ? best : undefined;
}

function levenshtein(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]!;
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j]!;
      row[j] = Math.min(row[j]! + 1, row[j - 1]! + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length]!;
}

/* ------------------------------------------------------------------ */
/* Query helpers                                                       */
/* ------------------------------------------------------------------ */

/** Products sharing categories or alternatives with `product`, best matches first. */
export function similarProducts(product: Product, limit = 4): Product[] {
  const scores = new Map<Product, number>();
  for (const category of product.categories) {
    const weight = category === product.primaryCategory ? 3 : 1;
    for (const other of category.products) {
      if (other !== product) scores.set(other, (scores.get(other) ?? 0) + weight);
    }
  }
  for (const link of product.alternatives) {
    for (const { product: other } of link.alternative.products) {
      if (other !== product) scores.set(other, (scores.get(other) ?? 0) + 1);
    }
  }
  return [...scores.entries()]
    .sort(
      (a, b) =>
        b[1] - a[1] ||
        (a[0].company === product.company ? 1 : 0) - (b[0].company === product.company ? 1 : 0) ||
        byName(a[0], b[0]),
    )
    .slice(0, limit)
    .map(([p]) => p);
}

/** Foreign products related to `alternative` through shared categories. */
export function relatedAlternatives(alternative: Alternative, limit = 6): Alternative[] {
  const scores = new Map<Alternative, number>();
  for (const category of alternative.categories) {
    for (const other of category.alternatives) {
      if (other !== alternative) scores.set(other, (scores.get(other) ?? 0) + 1);
    }
  }
  return [...scores.entries()]
    .filter(([a]) => a.products.length > 0)
    .sort(
      (a, b) => b[1] - a[1] || b[0].products.length - a[0].products.length || byName(a[0], b[0]),
    )
    .slice(0, limit)
    .map(([a]) => a);
}

export function sortByAdded(list: Product[]): Product[] {
  return [...list].sort((a, b) => b.data.added.getTime() - a.data.added.getTime() || byName(a, b));
}

export function sortByUpdated(list: Product[]): Product[] {
  return [...list].sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime() || byName(a, b));
}
