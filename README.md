# Swiss Alternatives

An independent, static directory of **Swiss software, cloud services and digital products** — with
transparent, sourced information about who owns them, where they are developed and where customer
data is hosted.

> Working name and domain: **Swiss Alternatives** · `swiss-alternatives.ch` — both are configured in
> one place ([`src/config/site.ts`](src/config/site.ts)) and can be changed at any time.

**Open source and open data.** Code is MIT-licensed, directory data is CC BY 4.0, and contributions
happen through pull requests — see [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Contribute](https://swiss-alternatives.ch/contribute/) page.

The site works as a directory, a search engine for Swiss software, a comparison tool and a set of
"Swiss alternative to X" landing pages. Everything is generated at build time from plain files in the
repository: there is no backend, no database, no account system, no cookies and no third-party
requests.

---

## Contents

- [Highlights](#highlights)
- [Stack](#stack)
- [Getting started](#getting-started)
- [Commands](#commands)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Content architecture](#content-architecture)
- [How to add content](#how-to-add-content)
- [Contribution tooling](#contribution-tooling)
- [Open data](#open-data)
- [Automation with Claude](#automation-with-claude)
- [Verification & provenance](#verification--provenance)
- [Signals, footprint and classification](#signals-footprint-and-classification)
- [Images and logos](#images-and-logos)
- [Search](#search)
- [Client-side features without a backend](#client-side-features-without-a-backend)
- [Internationalisation](#internationalisation)
- [Design system](#design-system)
- [SEO](#seo)
- [Privacy & security](#privacy--security)
- [Quality checks](#quality-checks)
- [Decisions and assumptions](#decisions-and-assumptions)

---

## Highlights

- **Five independent Swiss questions per product** — headquarters, ownership, development, hosting
  and infrastructure — instead of a single "Swiss: yes/no". A Swiss company on AWS Frankfurt is a
  Swiss company, but is _not_ "Hosted in Switzerland".
- **Provenance on every claim**: each fact is labelled _verified_, _vendor claim_ or _inferred_, links
  to a numbered source and carries a "last verified" date. Unknown is never shown as "No".
- **Computed, not hand-assigned**: badges, the five-cell footprint, the listing classification and all
  statistics are derived from the data at build time. An entry that does not meet the listing
  criteria fails the build.
- **Relational content**: products reference companies, categories and foreign products by slug. The
  build generates every back-link (Google Drive → Swiss alternatives, Proton AG → its products …) and
  fails on broken references with "did you mean …?" suggestions.
- **⌘K / Ctrl K command palette** and instant search over products, categories, companies and foreign
  products — from a static index.
- **Client-side filters** with shareable URLs (`/category/password-managers/?f=swiss-hosted`), faceted
  counts and a mobile filter sheet.
- **Comparison** of up to four products (`/compare/?products=kdrive,proton-drive`), favourites,
  recently viewed and shared lists — all in `localStorage`, no account.
- **Static, fast, accessible**: Lighthouse 99–100 performance and 100 accessibility, best practices
  and SEO on the tested content pages; no axe-core violations; works without JavaScript except for
  the interactive extras.

## Stack

| Concern   | Choice                                                                                 |
| --------- | -------------------------------------------------------------------------------------- |
| Framework | [Astro 7](https://astro.build) — static output, no UI framework                        |
| Language  | TypeScript (`astro/tsconfigs/strictest`)                                               |
| Content   | Astro Content Collections (Content Layer API, Zod schemas) + relational validation     |
| Search    | [MiniSearch](https://lucaong.github.io/minisearch/) over a build-time JSON index       |
| Icons     | [Lucide](https://lucide.dev) via `lucide-static`, inlined at build time                |
| Font      | Inter (variable, optical sizes) — self-hosted via `@fontsource-variable/inter`         |
| Styling   | Hand-written CSS with design tokens, `light-dark()` theming, scoped component styles   |
| Client JS | Small vanilla TypeScript modules; heavier features are loaded only where used          |
| Quality   | `astro check`, ESLint (typescript-eslint, eslint-plugin-astro), Prettier, link checker |

## Getting started

Requirements: **Node.js ≥ 22.12** (see `.nvmrc`) and npm.

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:4321>.

## Commands

| Command                            | Action                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------- |
| `npm run dev`                      | Start the dev server with hot reload                                      |
| `npm run build`                    | Validate content and build the static site into `dist/`                   |
| `npm run preview`                  | Serve the production build locally                                        |
| `npm run check`                    | Type-check `.astro` and `.ts` files                                       |
| `npm run lint`                     | Run ESLint                                                                |
| `npm run lint:content`             | Editorial checks: lengths, provenance, marketing language, dates          |
| `npm run format`                   | Format everything with Prettier                                           |
| `npm run check:links`              | Verify every internal link and `#fragment` in `dist/` (run after a build) |
| `npm run verify`                   | `check` + `lint` + `lint:content` + `build` + `check:links` (as in CI)    |
| `npm run new -- <url>`             | Draft a product + company entry from a website (and `--github <repo>`)    |
| `npm run logos`                    | Fetch and normalise missing logos (`--force` to refetch, or pass slugs)   |
| `npm run sync:repos`               | Refresh GitHub stars, licence, last commit (`GITHUB_TOKEN` optional)      |
| `npm run schemas`                  | Re-export JSON Schemas for editor autocompletion into `schemas/`          |
| `node scripts/generate-assets.mjs` | Regenerate `favicon.ico`, app icons and `og-default.png`                  |

## Deployment

`npm run build` produces a fully static site in `dist/`. Any static host works.

| Host                 | Settings                                                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cloudflare Pages** | Build command `npm run build`, output `dist`. `public/_headers` is applied automatically.                                                   |
| **Netlify**          | Build command `npm run build`, publish directory `dist`. `public/_headers` is applied automatically.                                        |
| **Vercel**           | Framework preset "Astro" (or "Other"), output `dist`.                                                                                       |
| **GitHub Pages**     | Build with Actions and upload `dist`. Use a custom domain or a user/organisation page — the site expects to be served from the domain root. |
| **Any web server**   | Upload `dist/`. Serve `404.html` for unknown paths.                                                                                         |

Set the canonical URL with `PUBLIC_SITE_URL` for preview deployments, otherwise `site.url` from
`src/config/site.ts` is used for canonical links, Open Graph URLs, the sitemap and JSON-LD.

Before launch, fill in the operator details in `site.operator` (shown on `/imprint/`), and set
`site.repository` to the real repository URL (used for "Suggest a product", "Report an error" and
"Edit this entry" links).

## Project structure

```
├── docs/CONTENT.md              # Authoring guide and full content specification
├── public/                      # Static files (favicons, _headers, og image)
├── scripts/
│   ├── check-links.mjs          # Internal link + fragment checker for dist/
│   └── generate-assets.mjs      # Icons and social image from SVG
└── src/
    ├── config/site.ts           # Name, domain, repository, operator, feature settings
    ├── content.config.ts        # Collection schemas (Zod)
    ├── content/
    │   ├── products/*.md        # One Swiss product per file (front matter + description)
    │   ├── companies/*.yaml     # Organisations (HQ, ownership, registry, sources)
    │   ├── categories/*.yaml    # Categories
    │   ├── groups.yaml          # Top-level category groups
    │   ├── alternatives/*.yaml  # Foreign products people replace (Gmail, AWS …)
    │   └── pages/en/*.md        # Editorial pages (about, privacy, imprint) per locale
    ├── i18n/                    # Locale config, dictionaries, t() helper
    ├── lib/
    │   ├── data.ts              # Loads, resolves, validates and enriches all content
    │   ├── signals.ts           # Badges, footprint and classification rules
    │   ├── export.ts            # Search index + product JSON serialisers
    │   ├── seo.ts               # JSON-LD builders
    │   ├── paths.ts             # Central URL builder (locale-aware)
    │   └── format.ts, constants.ts, icons.ts, inline-scripts.ts
    ├── components/              # Header, Footer, ProductCard, SwissFootprint, FilterableList …
    ├── layouts/BaseLayout.astro # Document head, SEO, theme bootstrap, global UI
    ├── pages/                   # Routes (see below)
    ├── scripts/                 # Client modules: app, search, filters, compare, favourites, store
    └── styles/                  # tokens.css, base.css, components.css
```

### Routes

| Route                                                                                         | Purpose                                                       |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `/`                                                                                           | Home: search, footprint explainer, stats, discovery sections  |
| `/products/`                                                                                  | All products with filters, sorting and name filter            |
| `/product/[slug]/`                                                                            | Product detail with Swiss footprint, sources and verification |
| `/categories/`                                                                                | Category groups and categories                                |
| `/category/[slug]/`                                                                           | Category with filters, foreign products replaced, related     |
| `/alternatives/`                                                                              | Foreign products with Swiss alternatives                      |
| `/alternatives/[slug]/`                                                                       | "Swiss alternatives to X" with an at-a-glance comparison      |
| `/companies/`                                                                                 | Companies table and canton grid                               |
| `/company/[slug]/`                                                                            | Company facts, ownership, products, sources                   |
| `/latest/`                                                                                    | Added, updated and recently verified entries (+ RSS)          |
| `/compare/`                                                                                   | Side-by-side comparison (client-rendered, shareable URL)      |
| `/favourites/`                                                                                | Local favourites, recently viewed, shared lists               |
| `/search/`                                                                                    | Search page and full A–Z index (works without JS)             |
| `/methodology/`                                                                               | Listing criteria, classification and badge rules              |
| `/suggest/`                                                                                   | Contribution options and suggestion helper                    |
| `/about/`, `/privacy/`, `/imprint/`, `404`                                                    | Editorial and legal pages                                     |
| `/search-index.json`, `/data/products.json`, `/sitemap.xml`, `/robots.txt`, `/latest/rss.xml` | Generated data                                                |

## Content architecture

The full specification lives in **[docs/CONTENT.md](docs/CONTENT.md)**. In short:

```
company ──< product >── category >── group
               │
               └──< alternativesTo >── alternative (foreign product)
```

- **Facts live where they belong.** Headquarters, jurisdiction and ownership are company facts and
  are written once in `companies/*.yaml`. Development, hosting, data locations, infrastructure,
  pricing and features are product facts.
- **Relations are slugs.** `company: proton`, `categories: [cloud-storage]`,
  `alternativesTo: [google-drive]`. `src/lib/data.ts` resolves them, builds back-links and fails the
  build on any unknown slug, duplicate name or missing source id.
- **Multi-state values.** `yes | no | partial | optional | unknown`. An omitted value is `unknown`.

## How to add content

### Add a product

1. If the company is new, create `src/content/companies/<company-slug>.yaml`:

   ```yaml
   name: Example AG
   type: company
   description: Zurich-based developer of an encrypted note-taking app.
   website: https://example.ch
   founded: 2019
   headquarters:
     city: Zürich
     canton: ZH
     country: CH
     basis: verified
     source: zefix
   jurisdiction: CH
   registry:
     uid: CHE-123.456.789
   ownership:
     swissOwned: yes
     basis: vendor
     source: about
     note: Owned by the two founders.
   lastVerified: 2026-10-15
   sources:
     - id: zefix
       title: Example AG — Zefix commercial register
       url: https://www.zefix.ch/en/search/entity/list/firm/0000000
       kind: registry
       accessed: 2026-10-15
     - id: about
       title: About Example
       url: https://example.ch/about
       kind: vendor
       accessed: 2026-10-15
   ```

2. Create `src/content/products/<product-slug>.md`:

   ```markdown
   ---
   name: Example Notes
   company: example
   tagline: End-to-end encrypted notes, hosted in Switzerland.
   description: >-
     Example Notes is an end-to-end encrypted note-taking app from Zurich-based Example AG, with
     apps for desktop and mobile and data hosted in Switzerland.
   website: https://example.ch/notes
   categories: [notes]
   alternativesTo:
     - evernote
     - id: notion
       note: Notes only — no databases or wiki features.
   audience: [consumer, business]
   deployment: [saas]
   platforms: [web, macos, windows, ios, android]
   swiss:
     developed: { value: yes, basis: vendor, source: about }
     hosted:
       value: yes
       basis: vendor
       source: privacy
       note: All customer data is stored in two data centres in Zurich.
     dataLocations: [CH]
     infrastructure:
       provider: Green Datacenter AG
       providerCountry: CH
       type: colocation
       swissOwned: yes
       basis: vendor
       source: privacy
   openSource: { value: no }
   pricing:
     model: freemium
     freePlan: yes
     chfBilling: yes
     startingPrice: { amount: 4, currency: CHF, period: month }
     url: https://example.ch/pricing
     checked: 2026-10-15
   features: { e2ee: yes, mfa: yes, dataExport: yes }
   added: 2026-10-15
   lastVerified: 2026-10-15
   sources:
     - { id: about, title: About Example, url: https://example.ch/about, kind: vendor }
     - { id: privacy, title: Privacy policy, url: https://example.ch/privacy, kind: vendor }
   ---

   Two or three neutral paragraphs describing what the product does, its notable limitations and
   how it differs from the products it may replace.
   ```

3. Run `npm run build`. If anything is wrong — an unknown category, a typo in a slug, a source id that
   does not exist, or an entry that does not meet the listing criteria — the build stops and tells you
   exactly which file and field to fix.

The product page, category listings, alternative pages, company page, search index, sitemap,
statistics and RSS feed update automatically.

### Add a category

Create `src/content/categories/<slug>.yaml`:

```yaml
name: Note Taking
noun: note-taking apps # used in sentences: "Swiss note-taking apps"
group: workplace # id from src/content/groups.yaml
icon: notebook-pen # any Lucide icon name (https://lucide.dev/icons)
summary: Notes, documents and personal knowledge bases.
intro: >-
  One to three sentences shown at the top of the category page.
related: [office-suites] # optional
added: 2026-10-15
```

Unknown icon names fail the build. Categories without products render a helpful empty state, are
marked `noindex` and are excluded from the sitemap until a product is added.

### Add an "alternative to" product

Create `src/content/alternatives/<slug>.yaml` for the foreign product, then reference the slug from
products' `alternativesTo`:

```yaml
name: Google Drive
vendor: Google LLC
vendorCountry: US
parent: Alphabet Inc.
summary: Google's cloud storage and file sync service, part of Google Workspace and Google One.
website: https://drive.google.com
categories: [cloud-storage, file-sharing]
aliases: [gdrive, google one] # search synonyms
popular: true # featured on the home page
```

`/alternatives/google-drive/` is generated automatically, with an at-a-glance table built from the
linked products and their per-alternative `note`s.

### Add a top-level group

Append an entry to `src/content/groups.yaml` with `id`, `name`, `summary`, `icon` and `order`.

## Contribution tooling

Contributions are plain files and pull requests — no CMS, no database. The
tooling makes the first draft fast and the review strict:

| Tool                   | Purpose                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `templates/`           | The "default object": every supported field of each content type, with defaults and comments |
| `schemas/`             | JSON Schemas (exported from the Zod schemas) for autocompletion and validation in editors    |
| `npm run new -- <url>` | Reads a website and drafts entries (see below)                                               |
| `npm run lint:content` | Editorial checks the schema cannot express                                                   |
| `npm run build`        | Schema + relational validation + listing criteria — fails with "did you mean …?" hints       |
| Issue forms            | `Suggest a product` and `Report an error` for contributors without Git                       |

### What `npm run new` gathers automatically

```bash
npm run new -- https://threema.com
npm run new -- https://example.ch --github https://github.com/example/app --category email
```

| Source                        | Gathered                                                                                                                                                                                                        |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Website                       | Product name, meta description, interface languages (`lang`/`hreflang`), links to imprint, privacy policy, pricing and about pages, App Store / Google Play links (→ platforms), schema.org `Organization` data |
| Imprint / privacy / about     | The Swiss company identification number (UID, `CHE-…`)                                                                                                                                                          |
| Zefix (commercial register)   | Legal name, legal seat, canton, address, register status, registered purpose                                                                                                                                    |
| GitHub (repo or organisation) | Description, SPDX licence, stars, topics, archived flag, last push                                                                                                                                              |

Everything that cannot be read reliably — ownership, development location,
hosting, infrastructure, certifications — is left as `unknown` with a TODO. The
draft fails the build until a category is chosen, which forces a human pass.

### Logos

`npm run logos` takes each product's own declared icon (SVG favicon, web-app
manifest icon, apple-touch-icon — largest first), normalises it to a 256×256
PNG tile (trimmed, scaled, centred on white, never recoloured) and records the
source URL in `src/assets/logos/sources.json`. Vendor-supplied files in
`src/assets/logos/manual/` always win; unusable icons are listed in
`exclude.txt`. See [src/assets/logos/README.md](src/assets/logos/README.md).

### Repository statistics

`npm run sync:repos` stores stars, forks, licence, language and last commit for
every GitHub repository referenced in `openSource.repository` in
`src/data/repositories.json`, with a fetch date that is shown on the site. The
build never calls GitHub. A weekly workflow (`.github/workflows/sync-repos.yml`)
refreshes the file through a pull request.

## Open data

Every build regenerates machine-readable exports (CC BY 4.0):

| File                   | Content                                                                      |
| ---------------------- | ---------------------------------------------------------------------------- |
| `/data/directory.json` | The full graph: products, companies, categories, groups, foreign products    |
| `/data/products.json`  | Products with footprint, hosting, pricing tier, open-source status, logo URL |
| `/data/products.csv`   | Flat product table for spreadsheets                                          |
| `/search-index.json`   | The search index                                                             |
| `/latest/rss.xml`      | RSS feed of new entries                                                      |
| `/sitemap.xml`         | Indexable pages with `lastmod`                                               |

## Automation with Claude

`.github/workflows/claude.yml` connects the repository to
[Claude Code on GitHub](https://github.com/anthropics/claude-code-action):

- Maintainers can mention **`@claude`** in an issue or pull request to ask for
  research or changes.
- Adding the **`research`** label to a "Suggest a product" issue lets Claude
  research the product following [CLAUDE.md](CLAUDE.md) and
  [docs/CONTENT.md](docs/CONTENT.md), run `npm run verify` and open a pull
  request. A maintainer always reviews and merges.

Setup: install the Claude GitHub app (`claude` → `/install-github-app`) or add a
`CLAUDE_CODE_OAUTH_TOKEN` secret (from `claude setup-token`, uses a Claude
subscription) or an `ANTHROPIC_API_KEY`. Only owners, members and collaborators
can trigger runs, so drive-by comments do not consume credits.

## Verification & provenance

Trust is the core feature. Important statements carry provenance:

```yaml
hosted:
  value: partial # what we know
  basis: vendor # verified | vendor | inferred
  source: privacy # id in this file's `sources`
  note: Data is stored in Switzerland, Germany or Norway; no per-country breakdown is published.
```

| Basis      | Meaning                                                                                 |
| ---------- | --------------------------------------------------------------------------------------- |
| `verified` | Confirmed by an independent or official source (commercial register, audit, regulator). |
| `vendor`   | Stated by the vendor in its own website, documentation or legal terms.                  |
| `inferred` | Derived by the editors from indirect evidence — explained in `note`.                    |

On the site each fact shows its state, its basis and a numbered link to the source list at the bottom
of the page. `lastVerified` and every source's `accessed` date are displayed. Every product page links
to a prefilled "Report an error" issue and to "Edit this entry" on GitHub.

## Signals, footprint and classification

All three are computed in [`src/lib/signals.ts`](src/lib/signals.ts) and documented for readers on
`/methodology/` (which renders its tables from the same definitions).

- **Footprint** — five cells: headquarters · ownership · development · hosting · infrastructure, each
  `yes | partial | no | unknown`.
- **Badges** — _Swiss Company, Swiss Owned, Swiss Developed, Hosted in Switzerland, Swiss Data Option,
  Swiss Infrastructure, Open Source, Self-hostable, Free Plan_. Cards show at most three, chosen by a
  fixed priority; product pages show all with tooltips.
- **Classification** (listing tier):

  | Tier                           | Rule                                                                          |
  | ------------------------------ | ----------------------------------------------------------------------------- |
  | Swiss native                   | Swiss HQ + jurisdiction, Swiss-owned, developed in CH (yes/partly)            |
  | Swiss company                  | Swiss HQ + jurisdiction; ownership mixed/unknown or development mainly abroad |
  | Swiss company · foreign parent | Swiss HQ + jurisdiction; ultimate owner outside Switzerland                   |
  | Swiss-developed open source    | No Swiss operating company; open source; developed in Switzerland             |
  | Swiss-hosted · foreign company | Foreign company; core data hosted in Switzerland by default                   |

  Anything else fails the build.

## Images and logos

- Logos are resolved by convention: `src/assets/logos/<product-slug>.png`, then
  `company--<company-slug>.png`, then a typographic monogram tile. A content file
  can also set `logo:` explicitly (any image; shown inset).
- `npm run logos` fetches and normalises logos from vendors' own websites — see
  [Contribution tooling](#logos). Vendors can supply official files (SVG
  preferred) through the contact address or a pull request into
  `src/assets/logos/manual/`.
- Logos identify the product they belong to, are shown at icon size beside it,
  separate from the site's own branding, and are never altered beyond scaling
  and padding. A footer note states that names and logos belong to their owners
  and no endorsement is implied.
- Optional `screenshots: [{ src, alt }]` (16:10, ≥ 1600 px wide) are supported by the schema.
- `scripts/generate-assets.mjs` creates `favicon.ico`, `apple-touch-icon.png`, `icon-512.png` and the
  default social image `og-default.png` from SVG. Pass a new name/domain as arguments after renaming:
  `node scripts/generate-assets.mjs "New Name" new-domain.ch`.

## Search

- At build time, `src/pages/search-index.json.ts` serialises products, categories, companies and
  foreign products (with aliases, category names, replaced products, tags and verified features) into
  `/search-index.json` (≈ 66 kB, 14 kB gzipped, for the seed data).
- `src/scripts/search.ts` loads [MiniSearch](https://lucaong.github.io/minisearch/) and the index
  lazily on first interaction (hover/focus on a search control, or ⌘K / Ctrl K / `/`), then searches
  with prefix + fuzzy matching, diacritic folding and field boosts. Results are grouped by type and
  the groups are ordered by best match — typing "google" lists Google Drive, Gmail … with their number
  of Swiss alternatives.
- The search UI implements the ARIA combobox/listbox pattern with `aria-activedescendant`, arrow-key
  navigation, Enter to open and Esc to close.
- **Without JavaScript**, the search form submits to `/search/`, which contains a complete A–Z index.
- **Scaling**: MiniSearch comfortably handles thousands of entries. For tens of thousands, consider
  splitting the index per type or switching to [Pagefind](https://pagefind.app) for full-text search
  over the built HTML.

## Client-side features without a backend

| Feature          | Storage / mechanism                                                              |
| ---------------- | -------------------------------------------------------------------------------- |
| Filters & sort   | Static cards + `data-*` attributes; state in the URL (`?f=…&platform=…&sort=…`)  |
| Compare          | URL `?products=a,b,c` (source of truth) mirrored to `localStorage["sa:compare"]` |
| Favourites       | `localStorage["sa:favourites"]`; shareable as `/favourites/?ids=a,b`             |
| Recently viewed  | `localStorage["sa:recent"]` (last 12)                                            |
| Theme            | `localStorage["sa:theme"]`, applied before first paint                           |
| Random discovery | Picks a product from `/data/products.json`                                       |

`/data/products.json` doubles as an open-data export of the directory.

## Internationalisation

English is the canonical language; the architecture is ready for German, French and Italian.

- **Locales** are configured in [`src/i18n/config.ts`](src/i18n/config.ts) and wired into Astro's i18n
  routing (`prefixDefaultLocale: false`, so English stays at `/` and others at `/de/`, `/fr/`, `/it/`).
- **UI strings** live in one flat dictionary per locale ([`src/i18n/ui/en.ts`](src/i18n/ui/en.ts)).
  Components call `useTranslations(Astro.currentLocale)`; plural forms use `Intl.PluralRules`. Missing
  keys fall back to English, so a locale can be translated incrementally. Strings needed by client
  scripts are embedded per page via `clientStrings()`.
- **URLs** are built through [`src/lib/paths.ts`](src/lib/paths.ts), which already accepts a locale.
- **Formatting** (dates, numbers, money, country and language names) uses `Intl` with `de-CH`,
  `fr-CH`, `it-CH` tags.
- **Editorial pages** are Markdown files per locale in `src/content/pages/<locale>/`.

To add German:

1. Add `'de'` to `locales` in `src/i18n/config.ts`.
2. Create `src/i18n/ui/de.ts` (`export const de: Dictionary = { … }`) and register it in
   `src/i18n/index.ts`.
3. Add `src/content/pages/de/*.md`.
4. Add localised routes under `src/pages/de/` (or a `[locale]` segment) that reuse the same components.
5. For translated product descriptions, add optional localised fields (e.g. `i18n.de.tagline`) to the
   product schema and pick them in `data.ts`.

## Design system

- **Tokens** in [`src/styles/tokens.css`](src/styles/tokens.css): colour (via `light-dark()`), type
  scale, spacing (4 px base), radii, shadows, motion. Contrast ratios are documented in the file —
  body text ≥ 10:1, muted text ≥ 5.9:1, red text ≥ 6:1, controls ≥ 3:1.
- **Colour**: warm paper background, near-black ink, crisp white surfaces, a restrained Swiss red
  (`#D52B1E` for marks, `#B5221A` for text) and a separately designed graphite dark theme.
- **Typography**: Inter Variable with optical sizing (display cuts for large headlines), tight
  negative tracking for headings, monospaced micro-labels for metadata, tabular numerals in data.
- **Swiss details**: editorial section numbering, hairline rules, the five-cell footprint, canton
  codes, a tiny cross motif — no flags, mountains or gradients.
- **Logo**: a Swiss cross framed by viewfinder brackets ("finding" something Swiss) —
  `src/components/Logo.astro`, `public/favicon.svg`; works in colour and monochrome.
- **Components** (selection): `Header`, `Footer`, `SearchBox`, `SearchDialog`, `ProductCard`,
  `ProductRow`, `CategoryCard`, `AlternativeCard`, `Badge`, `Footprint`, `SwissFootprint`,
  `FactValue`, `SourceList`, `FilterableList`, `Breadcrumbs`, `SectionHeader`, `PageHeader`, `Stats`,
  `EmptyState`, `CantonGrid`, `ThemeToggle`, `CompareTray`.

## SEO

- Unique `<title>` and meta description per page, canonical URLs, Open Graph and Twitter cards,
  `hreflang` scaffolding.
- JSON-LD where it fits: `WebSite` + `SearchAction` (home), `SoftwareApplication` (product),
  `Organization` (company), `ItemList` (category, alternative, products), `BreadcrumbList`.
- `/sitemap.xml` is generated from the directory graph with `lastmod` dates and lists only indexable
  pages; empty categories/alternatives and local-state pages are `noindex`.
- Landing pages target "Swiss alternative to X", "Swiss [category]", "Swiss hosted [service]" with
  natural copy, not keyword stuffing.

## Privacy & security

- No cookies, analytics, trackers, third-party fonts or scripts. No cookie banner is needed.
- Optional privacy-friendly analytics (Plausible or Umami, self-hosted or EU/CH-hosted) can be
  configured in `site.analytics` — disabled by default. When set, the script is added to every page
  and its origin is allowed in `script-src` and `connect-src`; nothing else changes.
- A strict **Content-Security-Policy** is emitted on every page (Astro `security.csp`), with SHA-256
  hashes for the two tiny inline scripts (`src/lib/inline-scripts.ts`) — no `'unsafe-inline'`
  scripts. `public/_headers` adds `nosniff`, `Referrer-Policy`, `Permissions-Policy`, framing
  protection and cache headers on Netlify/Cloudflare.

## Quality checks

Run `npm run verify` before pushing; CI (`.github/workflows/ci.yml`) runs the same steps:

1. Prettier formatting check
2. ESLint and the editorial content linter (`scripts/lint-content.mjs`)
3. `astro check` (TypeScript in `.astro` and `.ts`)
4. Build — includes content schema validation and relational/listing-criteria validation
5. Internal link and fragment check over the built site

During development the site was additionally audited with axe-core (WCAG 2.2 AA + best practices,
light and dark themes) and Lighthouse (performance 99–100, accessibility 100, best practices 100,
SEO 100 on the tested content pages; `/compare/` and `/favourites/` are intentionally `noindex`).

## Decisions and assumptions

- **Seed dataset**: 59 products from 43 organisations, researched on 2026-10-15 from vendor
  documentation, legal pages, commercial-register data and press releases. Where facts could not be
  confirmed they are `unknown`. Prices are recorded as published on that date and may change.
- **"New" labels** are not shown for the initial dataset (`site.launchDate`); entries added later are
  labelled for `site.newWindowDays`.
- **Default ordering is alphabetical.** "Swiss footprint" ordering is an explicit, documented count —
  not a quality score. There are no rankings, editorial picks or paid placements.
- **Logos** are fetched from vendors' own websites and normalised (see [Images and logos](#images-and-logos)).
- **Licences**: code MIT ([LICENSE](LICENSE)), data CC BY 4.0 ([LICENSE-DATA.md](LICENSE-DATA.md)); logos
  and trademarks are excluded.
- **Contact**: one public mailbox, `info@swiss-alternatives.ch` (configured in `src/config/site.ts`).
- **Operator & repository** values in `src/config/site.ts` are placeholders and must be set before
  launch.
- **Sponsors** are configured in `src/config/sponsors.ts` (empty by default) and governed by the policy
  on `/sponsors/`: no paid placement, always labelled, no tracking.
