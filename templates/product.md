---
# Product template — every supported field with its default.
# Copy to src/content/products/<slug>.md (the file name is the slug), or run:
#   npm run new -- https://example.ch [--github https://github.com/org/repo]
# Rules: never guess. Leave a value as `unknown` (or delete the line) when it
# cannot be confirmed from a source. See docs/CONTENT.md for definitions.

name: Example Product
aliases: [] # other names people search for
company: example # slug of src/content/companies/<slug>.yaml
tagline: One factual line, at most 90 characters.
description: >-
  120–160 characters for search results and social previews: what it is, who
  makes it, what is notable.
website: https://example.ch
status: active # active | beta | discontinued
launched: 2020 # year, optional

categories: [category-slug] # first = primary; see src/content/categories/
alternativesTo: # foreign products with overlapping functionality
  - foreign-product-slug # short form
  - id: other-foreign-product # long form with a factual difference
    note: Covers X, not Y.

audience: [] # consumer | business | enterprise | public-sector | developer
deployment: [] # saas | self-hosted | on-premises | managed
platforms: [] # web | windows | macos | linux | ios | android | browser-extension | cli | api
languages:
  interface: [] # ISO 639-1 codes, e.g. [de, fr, it, en]
  support: []

swiss:
  developed:
    value: unknown # yes | no | partial | unknown
    basis: vendor # verified | vendor | inferred
    source: about
    note: ''
  hosted:
    value: unknown # yes | no | partial | optional | unknown
    basis: vendor
    source: privacy
    note: ''
  dataLocations: [] # ISO country codes where customer data is stored, e.g. [CH]
  infrastructure:
    provider: '' # who operates the servers: the company itself, a Swiss host, AWS …
    providerCountry: CH # country of that provider's ultimate owner
    type: unknown # self-operated | colocation | public-cloud | mixed | unknown
    swissOwned: unknown # yes | no | partial | unknown
    facility: '' # data-centre operator, if known
    basis: vendor
    source: privacy

openSource:
  value: unknown # yes (client and server) | partial (e.g. apps only) | no | unknown
  license: '' # SPDX id(s), e.g. GPL-3.0 or "Apache-2.0, MIT"
  repository: '' # GitHub/GitLab/Codeberg URL — GitHub stats are synced automatically
  basis: vendor
  source: about

pricing:
  model: freemium # free | freemium | subscription | usage-based | one-time | quote | donation
  freePlan: unknown # a permanent free plan, not a trial
  freeTrial: unknown
  enterprise: unknown
  chfBilling: unknown
  startingPrice: # cheapest paid plan exactly as published; delete if unclear
    amount: 0
    currency: CHF # CHF | EUR | USD
    period: month # month | year | one-time | hour | usage
    note: Plan name, billing period, VAT
  url: https://example.ch/pricing
  checked: 2026-01-01
  basis: vendor
  source: pricing

features: # yes | no | partial | unknown — omit what you cannot confirm
  e2ee: unknown
  encryptionAtRest: unknown
  encryptionInTransit: unknown
  mfa: unknown
  sso: unknown
  scim: unknown
  api: unknown
  dataExport: unknown

certifications: [] # only certificates confirmed for this product/operator, e.g. [iso-27001]

# sustainability:
#   summary: Data centres run on renewable electricity.
#   basis: vendor
#   source: sustainability

tags: []
affiliate: null # { url, note } — must be disclosed
sponsored: false
added: 2026-01-01
updated: 2026-01-01
lastVerified: 2026-01-01
sources:
  - id: about
    title: About Example
    url: https://example.ch/about
    publisher: Example AG
    kind: vendor # vendor | registry | documentation | press | independent
    accessed: 2026-01-01
  - id: privacy
    title: Privacy policy
    url: https://example.ch/privacy
    kind: vendor
    accessed: 2026-01-01
  - id: pricing
    title: Pricing
    url: https://example.ch/pricing
    kind: vendor
    accessed: 2026-01-01
# Optional German translation (Swiss Standard German: «ss», never «ß»). Untranslated
# fields fall back to English. The Markdown body below stays English.
i18n:
  de:
    tagline: Deutsche Kurzbeschreibung (max. 110 Zeichen).
    description: Deutsche Beschreibung (max. 220 Zeichen).
---

Two or three short, neutral paragraphs: what the product does, who it is for,
notable limitations, and how it differs from the products it may replace. No
marketing language.
