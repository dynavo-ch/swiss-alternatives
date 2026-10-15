#!/usr/bin/env node
/**
 * Drafts a new directory entry from a website (and optionally a GitHub
 * repository). It collects what can be read automatically and leaves
 * everything else as `unknown` for a human to verify.
 *
 *   npm run new -- https://example.ch
 *   npm run new -- https://example.ch --github https://github.com/example/app
 *   npm run new -- https://example.ch --slug example-app --category email --dry-run
 *
 * What it gathers
 *   Website   name, description, interface languages (lang / hreflang),
 *             links to imprint, privacy, pricing and about pages, app-store
 *             links (→ platforms), schema.org Organization data
 *   Imprint   Swiss company register number (UID, CHE-…)
 *   Zefix     legal name, legal seat, canton, address, status, purpose
 *             (Swiss commercial register, public REST API)
 *   GitHub    description, licence, stars, topics, homepage, last push
 *
 * Nothing is published: the script writes draft files and prints a checklist.
 */
import { existsSync, writeFileSync } from 'node:fs';
import { stringify } from 'yaml';

/* ------------------------------------------------------------------ */
/* Arguments                                                           */
/* ------------------------------------------------------------------ */

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const website = args.find(
  (a) => /^https?:\/\//.test(a) && args[args.indexOf(a) - 1] !== '--github',
);
const githubArg = flag('github');
const dryRun = args.includes('--dry-run');

if (!website) {
  console.log(`Usage: npm run new -- <website-url> [--github <repo-url>] [--slug <slug>]
                       [--company <slug>] [--category <slug>] [--dry-run]`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const root = new URL('../', import.meta.url);
const UA =
  'Mozilla/5.0 (compatible; SwissAlternativesBot/1.0; +https://swiss-alternatives.ch/contribute/)';

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

async function get(url, options = {}) {
  const response = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(15_000),
    ...options,
    headers: {
      'User-Agent': UA,
      'Accept-Language': 'en,de;q=0.8,fr;q=0.6,it;q=0.4',
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error(`${url} → HTTP ${response.status}`);
  return response;
}

const ENTITIES = {
  amp: '&',
  quot: '"',
  apos: "'",
  lt: '<',
  gt: '>',
  nbsp: ' ',
  ndash: '–',
  mdash: '—',
  hellip: '…',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  laquo: '«',
  raquo: '»',
  szlig: 'ß',
  auml: 'ä',
  ouml: 'ö',
  uuml: 'ü',
  Auml: 'Ä',
  Ouml: 'Ö',
  Uuml: 'Ü',
  eacute: 'é',
  egrave: 'è',
  ecirc: 'ê',
  agrave: 'à',
  acirc: 'â',
  ccedil: 'ç',
  icirc: 'î',
  ocirc: 'ô',
  ugrave: 'ù',
  Eacute: 'É',
};
const decode = (text = '') =>
  text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITIES[name] ?? match)
    .replace(/\s+/g, ' ')
    .trim();

const meta = (html, key) =>
  decode(
    new RegExp(`<meta[^>]+(?:name|property)=["']${key}["'][^>]+content=["']([^"']*)["']`, 'i').exec(
      html,
    )?.[1] ??
      new RegExp(
        `<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${key}["']`,
        'i',
      ).exec(html)?.[1] ??
      '',
  );

const slugify = (value) =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\b(ag|sa|gmbh|sarl|sàrl|sagl|ltd|inc|llc|stiftung|foundation)\b/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const LINK_PATTERNS = {
  imprint:
    /impressum|imprint|legal[-_ ]?notice|mentions[-_ ]l[eé]gales|note[-_ ]legali|colophon|\/legal\/?$/i,
  privacy: /privacy|datenschutz|confidentialit|protection[-_ ]des[-_ ]donn|riservatezza/i,
  pricing: /pricing|preise|tarif|prezzi|\/plans?\b|\/price/i,
  about: /about|ueber[-_ ]uns|uber[-_ ]uns|a[-_ ]propos|chi[-_ ]siamo|\/company\b|unternehmen/i,
};

function links(html, base) {
  const found = [];
  for (const [, href, text] of html.matchAll(
    /<a\b[^>]*href=["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi,
  )) {
    try {
      found.push({
        url: new URL(decode(href), base).href,
        text: decode(text.replace(/<[^>]+>/g, ' ')),
      });
    } catch {
      /* ignore malformed links */
    }
  }
  return found;
}

function pick(all, pattern, sameSite) {
  const local = all.filter((l) => {
    try {
      return !sameSite || new URL(l.url).hostname.replace(/^www\./, '') === sameSite;
    } catch {
      return false;
    }
  });
  // Prefer a match in the URL path; fall back to the link text.
  return (
    local.find((l) => pattern.test(new URL(l.url).pathname))?.url ??
    local.find((l) => pattern.test(l.text))?.url
  );
}

/* ------------------------------------------------------------------ */
/* 1. Website                                                          */
/* ------------------------------------------------------------------ */

const report = [];
const sources = [];
const addSource = (source) => {
  if (!sources.some((s) => s.url === source.url)) sources.push({ ...source, accessed: today });
};

console.log(`→ Reading ${website}`);
const page = await get(website);
const finalUrl = page.url;
const html = await page.text();
const host = new URL(finalUrl).hostname.replace(/^www\./, '');

// Product name: the title segment that matches the domain ("Cloud Servers | cloudscale" → "cloudscale"),
// else og:site_name, else the domain label.
const hostLabel = host.split('.')[0];
const squash = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
const titleParts = decode(/<title[^>]*>([^<]*)<\/title>/i.exec(html)?.[1])
  .split(/\s[|–—·:-]\s/)
  .map((p) => p.trim())
  .filter(Boolean);
const siteName =
  titleParts.find((p) => squash(p).includes(squash(hostLabel)) && p.length < 40) ||
  meta(html, 'og:site_name') ||
  hostLabel.charAt(0).toUpperCase() + hostLabel.slice(1);
const description = meta(html, 'description') || meta(html, 'og:description');
const htmlLang = /<html[^>]+lang=["']([a-z]{2})/i.exec(html)?.[1]?.toLowerCase();
const hreflangs = [...html.matchAll(/hreflang=["']([a-z]{2})(?:-[A-Za-z]{2})?["']/gi)].map((m) =>
  m[1].toLowerCase(),
);
const languages = [...new Set([htmlLang, ...hreflangs].filter((l) => l && l !== 'x-'))].sort();

const all = links(html, finalUrl);
const imprintUrl = pick(all, LINK_PATTERNS.imprint, host);
const privacyUrl = pick(all, LINK_PATTERNS.privacy, host);
const pricingUrl = pick(all, LINK_PATTERNS.pricing, host);
const aboutUrl = pick(all, LINK_PATTERNS.about, host);
const githubLink = all
  .map((l) => l.url)
  .find((u) => /^https:\/\/github\.com\/[\w.-]+\/?[\w.-]*\/?$/.test(u));
const platforms = new Set();
if (all.some((l) => /apps\.apple\.com/.test(l.url))) platforms.add('ios');
if (all.some((l) => /play\.google\.com/.test(l.url))) platforms.add('android');

// schema.org Organization in JSON-LD
let organisation;
for (const [, json] of html.matchAll(
  /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi,
)) {
  try {
    const items = [JSON.parse(json)].flat().flatMap((x) => x['@graph'] ?? [x]);
    organisation ??= items.find((x) => /Organization|Corporation/.test(String(x['@type'])));
  } catch {
    /* ignore invalid JSON-LD */
  }
}

addSource({ id: 'website', title: siteName || host, url: finalUrl, kind: 'vendor' });
if (aboutUrl) addSource({ id: 'about', title: 'About', url: aboutUrl, kind: 'vendor' });
if (privacyUrl)
  addSource({ id: 'privacy', title: 'Privacy policy', url: privacyUrl, kind: 'vendor' });
if (pricingUrl) addSource({ id: 'pricing', title: 'Pricing', url: pricingUrl, kind: 'vendor' });

report.push(`Name:        ${siteName || '—'}`);
report.push(`Description: ${description || '—'}`);
report.push(`Languages:   ${languages.join(', ') || '—'}`);
report.push(`Imprint:     ${imprintUrl ?? 'not found'}`);
report.push(`Privacy:     ${privacyUrl ?? 'not found'}`);
report.push(`Pricing:     ${pricingUrl ?? 'not found'}`);

/* ------------------------------------------------------------------ */
/* 2. Imprint → UID → Zefix                                            */
/* ------------------------------------------------------------------ */

let uid;
let registry;
const origin = new URL(finalUrl).origin;
const uidCandidates = [
  ...new Set(
    [
      imprintUrl,
      privacyUrl,
      aboutUrl,
      finalUrl,
      `${origin}/impressum`,
      `${origin}/imprint`,
      `${origin}/en/imprint`,
      `${origin}/legal`,
    ].filter(Boolean),
  ),
];
for (const url of uidCandidates) {
  try {
    const text = url === finalUrl ? html : await (await get(url)).text();
    const match = /CHE[-\s.]?(\d{3})[.\s]?(\d{3})[.\s]?(\d{3})/.exec(text);
    if (match) {
      uid = `CHE-${match[1]}.${match[2]}.${match[3]}`;
      addSource({
        id: url === privacyUrl ? 'privacy' : 'imprint',
        title: url === privacyUrl ? 'Privacy policy' : 'Imprint',
        url,
        kind: 'vendor',
      });
      report.push(`UID:         ${uid} (found on ${url})`);
      break;
    }
  } catch {
    /* page missing or blocked — try the next candidate */
  }
}

// Zefix register office → canton (verified against known companies), with a
// fallback on the cantonal excerpt host (e.g. https://zh.chregister.ch).
const OFFICE_CANTON = {
  20: 'ZH',
  100: 'LU',
  130: 'SZ',
  150: 'NW',
  170: 'ZG',
  270: 'BS',
  290: 'SH',
  320: 'SG',
  440: 'TG',
  501: 'TI',
  550: 'VD',
  660: 'GE',
};
function cantonOf(firm) {
  if (OFFICE_CANTON[firm.registerOfficeId]) return OFFICE_CANTON[firm.registerOfficeId];
  const host = firm.cantonalExcerptWeb ? new URL(firm.cantonalExcerptWeb).hostname : '';
  const code =
    /^([a-z]{2})\.chregister\.ch$/.exec(host)?.[1] ?? /\.([a-z]{2})\.ch$/.exec(host)?.[1];
  if (!code) return undefined;
  return ['vc', 'vo'].includes(code) ? 'VS' : code.toUpperCase();
}

if (uid) {
  try {
    const search = await get('https://www.zefix.ch/ZefixREST/api/v1/firm/search.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: uid, languageKey: 'en', maxEntries: 1 }),
    }).then((r) => r.json());
    const hit = search.list?.[0];
    if (hit) {
      const detail = await get(
        `https://www.zefix.ch/ZefixREST/api/v1/firm/${hit.ehraid}.json`,
      ).then((r) => r.json());
      registry = {
        name: detail.name,
        uid: detail.uidFormatted,
        seat: detail.legalSeat,
        canton: cantonOf(hit),
        status: detail.status,
        purpose: decode(detail.purpose ?? ''),
        address: detail.address,
        url: `https://www.zefix.ch/en/search/entity/list/firm/${hit.ehraid}`,
      };
      report.push(
        `Register:    ${registry.name} · ${registry.uid} · seat ${registry.seat} (${registry.canton ?? '?'}) · ${registry.status}`,
      );
    }
  } catch (error) {
    report.push(`! Zefix lookup failed: ${error.message}`);
  }
} else {
  report.push(
    'Register:    no UID (CHE-…) found on the website or imprint — look it up on zefix.ch',
  );
}

/* ------------------------------------------------------------------ */
/* 3. GitHub                                                           */
/* ------------------------------------------------------------------ */

const githubUrl = githubArg ?? githubLink;
let github;
if (githubUrl) {
  const [owner, repo] = new URL(githubUrl).pathname.split('/').filter(Boolean);
  const headers = {
    Accept: 'application/vnd.github+json',
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  };
  try {
    const data = await get(
      `https://api.github.com/${repo ? `repos/${owner}/${repo}` : `orgs/${owner}`}`,
      { headers },
    ).then((r) => r.json());
    github = repo
      ? {
          url: data.html_url,
          description: data.description,
          license:
            data.license?.spdx_id && data.license.spdx_id !== 'NOASSERTION'
              ? data.license.spdx_id
              : undefined,
          stars: data.stargazers_count,
          topics: data.topics ?? [],
          archived: data.archived,
          pushed: data.pushed_at,
        }
      : { url: data.html_url, description: data.description, publicRepos: data.public_repos };
    addSource({
      id: 'github',
      title: `GitHub — ${owner}${repo ? `/${repo}` : ''}`,
      url: github.url,
      kind: 'documentation',
    });
    report.push(
      `GitHub:      ${github.url}${github.license ? ` · ${github.license}` : ''}${github.stars != null ? ` · ★ ${github.stars}` : ''}${github.archived ? ' · ARCHIVED' : ''}`,
    );
  } catch (error) {
    const limited = /HTTP 403|HTTP 429/.test(error.message);
    report.push(
      `! GitHub lookup failed: ${error.message}${limited ? ' — rate-limited; set GITHUB_TOKEN to raise the limit' : ''}`,
    );
  }
}

/* ------------------------------------------------------------------ */
/* 4. Draft files                                                      */
/* ------------------------------------------------------------------ */

const companyName = registry?.name ?? organisation?.legalName ?? organisation?.name ?? siteName;
const companySlug = flag('company') ?? slugify(companyName);
const productName = siteName || companyName;
const productSlug = flag('slug') ?? slugify(productName);
const category = flag('category');

if (registry) {
  addSource({
    id: 'zefix',
    title: `${registry.name} — commercial register (Zefix)`,
    url: registry.url,
    publisher: 'Federal Office of Justice',
    kind: 'registry',
  });
}

const companyFile = new URL(`src/content/companies/${companySlug}.yaml`, root);
const productFile = new URL(`src/content/products/${productSlug}.md`, root);
const companyExists = existsSync(companyFile);

const company = {
  name: companyName,
  type: /stiftung|foundation|fondation/i.test(companyName)
    ? 'foundation'
    : /verein|association/i.test(companyName)
      ? 'association'
      : 'company',
  description: registry?.purpose
    ? `TODO: one factual sentence. Registered purpose: ${registry.purpose}`.slice(0, 400)
    : 'TODO: one factual sentence.',
  website: new URL(finalUrl).origin,
  swissFounded: { value: 'unknown' },
  headquarters: registry
    ? {
        city: registry.seat,
        ...(registry.canton ? { canton: registry.canton } : {}),
        country: 'CH',
        basis: 'verified',
        source: 'zefix',
      }
    : { country: 'CH', note: 'TODO: confirm in the commercial register' },
  jurisdiction: registry ? 'CH' : undefined,
  registry: registry ? { uid: registry.uid, url: registry.url } : undefined,
  ownership: {
    swissOwned: 'unknown',
    note: 'TODO: who ultimately owns or controls the company? Check press releases and the imprint.',
  },
  lastVerified: today,
  sources: sources.filter((s) => ['zefix', 'about', 'imprint', 'website'].includes(s.id)),
};

const product = {
  name: productName,
  company: companySlug,
  tagline: 'TODO: one factual line (max 90 characters)',
  description: (description || 'TODO: 120–160 characters').slice(0, 200),
  website: finalUrl,
  status: 'active',
  categories: category ? [category] : [],
  alternativesTo: [],
  audience: [],
  deployment: [],
  platforms: [...platforms],
  languages: { interface: languages, support: [] },
  swiss: {
    developed: { value: 'unknown' },
    hosted: {
      value: 'unknown',
      note: 'TODO: where is customer data stored? Check the privacy policy and sub-processor list.',
    },
    dataLocations: [],
  },
  openSource: github
    ? {
        value: 'unknown',
        ...(github.license ? { license: github.license } : {}),
        repository: github.url,
        basis: 'vendor',
        source: 'github',
        note: 'TODO: is the server open source too (yes) or only clients/tools (partial)?',
      }
    : { value: 'unknown' },
  pricing: {
    freePlan: 'unknown',
    freeTrial: 'unknown',
    ...(pricingUrl ? { url: pricingUrl } : {}),
  },
  features: {},
  certifications: [],
  tags: github?.topics?.slice(0, 8) ?? [],
  sponsored: false,
  added: today,
  updated: today,
  lastVerified: today,
  sources,
};

const clean = (value) => JSON.parse(JSON.stringify(value)); // drop undefined
const header = `# Draft created by \`npm run new\` on ${today} from ${finalUrl}.\n# Verify every value against its source; replace TODOs; keep unknowns as unknown.\n`;
const productText = `---\n${header}${stringify(clean(product), { lineWidth: 100 })}---\n\nTODO: two or three neutral paragraphs — what the product does, notable limitations,\nand how it differs from the products it may replace.\n${github?.description ? `\nGitHub description: ${github.description}\n` : ''}`;
const companyText = `${header}${stringify(clean(company), { lineWidth: 100 })}`;

console.log('\n' + report.join('\n') + '\n');

if (dryRun) {
  console.log(`--- src/content/products/${productSlug}.md\n${productText}`);
  if (!companyExists) console.log(`--- src/content/companies/${companySlug}.yaml\n${companyText}`);
} else {
  if (existsSync(productFile)) {
    console.error(
      `✗ src/content/products/${productSlug}.md already exists — use --slug to choose another name.`,
    );
    process.exit(1);
  }
  writeFileSync(productFile, productText);
  console.log(`✓ wrote src/content/products/${productSlug}.md`);
  if (companyExists) console.log(`• company ${companySlug} already exists — not changed`);
  else {
    writeFileSync(companyFile, companyText);
    console.log(`✓ wrote src/content/companies/${companySlug}.yaml`);
  }
}

console.log(`
Next steps
  1. Pick categories (src/content/categories/) and the foreign products it replaces.
  2. Verify headquarters and find the ultimate owner (press releases, annual reports).
  3. Fill in development, hosting, data locations and infrastructure from the privacy policy.
  4. Add basis + source to every claim; leave anything you cannot confirm as unknown.
  5. Run: npm run lint:content && npm run build
`);
