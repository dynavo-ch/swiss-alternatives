# Content specification

All directory data lives in `src/content/` as plain files. Every page, count,
relation and search entry is generated from these files at build time. This
document is the authoritative reference for authors and reviewers.

> **Golden rule:** never invent facts. If a value cannot be confirmed from a
> source, leave it out (or set it to `unknown`). Missing information is always
> rendered as **Unknown / not verified** — it is never treated as "No".

## Collections

| Collection     | Location                               | Format          | One file per…                   |
| -------------- | -------------------------------------- | --------------- | ------------------------------- |
| `products`     | `src/content/products/<slug>.md`       | Markdown + YAML | Swiss product or service        |
| `companies`    | `src/content/companies/<slug>.yaml`    | YAML            | organisation operating products |
| `categories`   | `src/content/categories/<slug>.yaml`   | YAML            | category                        |
| `groups`       | `src/content/groups.yaml`              | YAML (list)     | top-level category group        |
| `alternatives` | `src/content/alternatives/<slug>.yaml` | YAML            | foreign product people replace  |

The **file name is the slug** (`proton-drive.md` → `/product/proton-drive/`).
Slugs are lowercase, ASCII, words separated by `-`.

Relations are expressed **by slug** and validated during the build. Referencing
a category, company, alternative or source id that does not exist fails the
build with an explanatory message.

## Shared value types

### Tri-state (and more) values

| Value      | Meaning                                                                |
| ---------- | ---------------------------------------------------------------------- |
| `yes`      | Confirmed.                                                             |
| `no`       | Confirmed **not** the case.                                            |
| `partial`  | True for part of the product / part of the data / part of ownership.   |
| `optional` | (hosting only) Customer can choose Switzerland, but it is not default. |
| `unknown`  | Not verified. This is also what an omitted field means.                |

### Facts with provenance

Important claims can be written as a plain value or as an object that records
where the claim comes from:

```yaml
hosted: yes # short form (basis unspecified)

hosted: # long form (preferred for Swiss footprint)
  value: yes
  basis: vendor # verified | vendor | inferred
  source: infra # id of an entry in `sources`
  note: Customer data is stored in Proton-operated data centres in Switzerland.
```

| Basis      | Use when…                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `verified` | Confirmed by an independent or official primary source (commercial register, audit report, regulator, multiple independent reports). |
| `vendor`   | Stated by the vendor in its own website, documentation, legal terms or press release.                                                |
| `inferred` | Derived by the editors from indirect evidence (explain how in `note`).                                                               |

### Sources

Every product and company has a `sources` list. Facts reference sources by `id`.

```yaml
sources:
  - id: infra # short id, unique within this file
    title: Proton infrastructure and data centres
    url: https://proton.me/…
    publisher: Proton AG
    kind: vendor # vendor | registry | documentation | press | independent
    accessed: 2026-10-15
```

## Companies — `src/content/companies/<slug>.yaml`

```yaml
name: Proton AG # legal or common full name
shortName: Proton # optional, used in compact UI
type: company # company | foundation | association | cooperative | public-institution
description: >-
  Geneva-based technology company that develops encrypted communication and
  storage services.
website: https://proton.me
founded: 2014 # year; omit if unknown
swissFounded: # was the organisation founded in Switzerland?
  value: yes
  basis: vendor
  source: about
headquarters:
  city: Plan-les-Ouates
  canton: GE # official two-letter canton code (CH only)
  country: CH # ISO 3166-1 alpha-2
  basis: verified
  source: zefix
jurisdiction: CH # country where the operating legal entity is incorporated
registry: # optional: Swiss commercial register (Zefix) data
  uid: CHE-000.000.000
  url: https://www.zefix.ch/…
ownership:
  swissOwned: yes # ultimate control is Swiss: yes | no | partial | unknown
  parent: Proton Foundation # optional: name of the controlling entity
  parentCountry: CH # optional: ISO country of the controlling entity
  parentCompany: some-slug # optional: slug of a company file, if the parent is listed
  basis: vendor
  source: about
  note: >-
    The non-profit Proton Foundation is the majority shareholder.
lastVerified: 2026-10-15
sources: […]
```

## Products — `src/content/products/<slug>.md`

Front matter holds structured data, the Markdown body holds the long
description (2–4 short, neutral paragraphs — no marketing language).

```yaml
---
name: Proton Drive
aliases: [ProtonDrive] # optional search synonyms
company: proton # company slug
tagline: End-to-end encrypted cloud storage and file sharing. # ≤ 90 chars, no trailing hype
description: >- # 120–160 chars, used as meta description
  Proton Drive is an end-to-end encrypted cloud storage service from Geneva-based
  Proton, with apps for desktop and mobile.
website: https://proton.me/drive
status: active # active | beta | discontinued
launched: 2022 # optional year

categories: [cloud-storage, file-sharing] # first entry = primary category
alternativesTo: # foreign products this may replace
  - google-drive # short form
  - id: dropbox # long form with a factual difference note
    note: No LAN sync or Paper-style documents.

audience: [consumer, business] # consumer | business | enterprise | public-sector | developer
deployment: [saas] # saas | self-hosted | on-premises | managed
platforms:
  [web, windows, macos, ios, android]
  # web | windows | macos | linux | ios | android | browser-extension | cli | api
languages:
  interface: [en, de, fr, it] # ISO 639-1 — only languages confirmed
  support: [en] # languages of customer support, if stated

swiss:
  developed: # primarily developed by a team operating from Switzerland?
    value: yes # yes | no | partial | unknown
    basis: vendor
    source: about
  hosted: # where are core customer data / workloads hosted?
    value: yes # yes | no | partial | optional | unknown
    basis: vendor
    source: infra
    note: …
  dataLocations: [CH] # ISO countries where customer data is stored (if known)
  infrastructure:
    provider: Proton AG (self-operated) # who operates the servers / cloud the service runs on
    providerCountry: CH # country of that provider's ultimate owner
    type: self-operated # self-operated | colocation | public-cloud | unknown
    swissOwned: yes # is the infrastructure operator Swiss-owned?
    facility: … # optional: data-centre facility operator, if known
    basis: vendor
    source: infra

openSource:
  value: partial # yes | no | partial (e.g. clients only) | unknown
  license: GPL-3.0 # SPDX id(s), optional
  repository: https://github.com/…
  note: Client applications are open source; the server is proprietary.

pricing:
  model: freemium # free | freemium | subscription | usage-based | one-time | quote | donation
  freePlan: yes
  freeTrial: unknown
  enterprise: yes
  chfBilling: unknown # can customers be billed in CHF?
  startingPrice: # cheapest paid plan, exactly as published
    amount: 4.99
    currency: EUR # CHF | EUR | USD
    period: month # month | year | one-time | hour | usage
    note: Drive Plus, billed monthly
  url: https://proton.me/drive/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features: # yes | no | partial | unknown (omit = unknown)
  e2ee: yes # end-to-end encryption
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: unknown # SSO / SAML / OIDC for organisations
  scim: unknown
  api: no
  dataExport: yes

certifications:
  [iso-27001] # only certifications confirmed for this product / operator
  # iso-27001 | iso-27017 | iso-27018 | iso-9001 | iso-14001 | iso-50001
  # soc-2 | soc-1 | bsi-c5 | pci-dss | hipaa | tisax | isae-3402 | iso-22301

sustainability: # optional
  summary: Data centres powered by renewable electricity.
  basis: vendor
  source: sustainability

tags: [encryption, sync] # free-form keywords for search
affiliate: null # { url, note } — must be disclosed if present
sponsored: false
added: 2026-10-15 # date added to the directory
updated: 2026-10-15 # date the entry was last edited
lastVerified: 2026-10-15 # date facts were last checked against sources
sources: […]
---
Long description in Markdown.
```

### How Swiss signals are derived

Badges and the classification are **computed** from the data above; they are
never typed in by hand. See `/methodology/` on the site and `src/lib/signals.ts`.

| Signal / badge              | Rule                                                                 |
| --------------------------- | -------------------------------------------------------------------- |
| Swiss Company               | company `headquarters.country = CH` **and** `jurisdiction = CH`      |
| Swiss Owned                 | company `ownership.swissOwned = yes`                                 |
| Swiss Developed             | product `swiss.developed = yes`                                      |
| Hosted in Switzerland       | product `swiss.hosted = yes`                                         |
| Swiss data residency option | product `swiss.hosted = optional` (or `partial`)                     |
| Swiss Infrastructure        | `swiss.hosted = yes` **and** `swiss.infrastructure.swissOwned = yes` |
| Open Source                 | `openSource.value = yes`                                             |
| Self-hostable               | `deployment` contains `self-hosted` or `on-premises`                 |
| Free Plan                   | `pricing.freePlan = yes`                                             |

## Categories — `src/content/categories/<slug>.yaml`

```yaml
name: Password Managers
group: security # id from src/content/groups.yaml
icon: key-round # Lucide icon name
summary: Store and share credentials securely. # short, for cards
intro: >- # 1–3 sentences shown on the category page
  Password managers generate, store and autofill credentials…
related: [vpn, authentication] # optional, extra related categories
added: 2026-10-15
```

## Alternatives (foreign products) — `src/content/alternatives/<slug>.yaml`

```yaml
name: Google Drive
vendor: Google LLC
vendorCountry: US
parent: Alphabet Inc. # optional
summary: Cloud file storage and sync service, part of Google Workspace.
website: https://drive.google.com
categories: [cloud-storage, file-sharing]
aliases: [gdrive] # optional search synonyms
popular: true # featured on the homepage
```

Swiss products are linked to an alternative from the **product** side
(`alternativesTo`). The alternative page is generated automatically.

## Derived values (never typed by hand)

| Value                 | Derived from                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Pricing tier          | `pricing.model` + `pricing.freePlan` → **Free** (free/donation), **Freemium** (free plan + paid plans), **Paid** |
| Licence class         | `openSource.license` (SPDX) → OSI-approved, source-available (e.g. BUSL, SSPL) or other                          |
| Repository statistics | `openSource.repository` (GitHub) → stars, forks, licence, language, last commit, via `npm run sync:repos`        |
| Logo                  | `src/assets/logos/<product-slug>.png` → `company--<company-slug>.png` → monogram (`npm run logos`)               |

## Templates and schemas

- `templates/` contains every content type with **all supported fields and their defaults** — copy one
  to start a new entry, or run `npm run new -- <website> [--github <repo>]` to draft one automatically.
- `schemas/*.schema.json` are JSON Schemas exported from `src/content.config.ts` (`npm run schemas`).
  The VS Code workspace settings map them onto the YAML content files for autocompletion and
  validation.
