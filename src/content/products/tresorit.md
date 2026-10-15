---
name: Tresorit
aliases: [Tresorit SecureCloud]
company: tresorit
tagline: End-to-end encrypted cloud storage and file sharing running on Microsoft Azure.
description: >-
  Tresorit is end-to-end encrypted cloud storage and file sharing from Swiss Post
  subsidiary Tresorit AG, hosted on Microsoft Azure with selectable data regions.
website: https://tresorit.com
status: active

categories: [cloud-storage, file-sharing]
alternativesTo:
  - dropbox
  - box
  - id: google-drive
    note: No built-in office document editor comparable to Google Docs.
  - id: onedrive
    note: Files only; no Microsoft 365 co-authoring within the encrypted storage.

audience: [consumer, business, enterprise]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android, api]
languages:
  interface: [en, de, fr, es, hu]

swiss:
  developed:
    value: no
    basis: inferred
    source: jobs
    note: >-
      Tresorit was founded by Hungarian developers, and its engineering roles
      (backend, security, Windows and Android) are advertised in Budapest. Head
      office and contracting entity are in Zurich.
  hosted:
    value: partial
    basis: vendor
    source: storage
    note: >-
      Encrypted file content of customers based in Switzerland is stored in
      Azure data centres in Switzerland by default; for other customers the
      default is Ireland. Business, Business Pro and Enterprise customers can
      choose among Azure locations including Switzerland. Usage and
      access-related metadata is always stored in Azure data centres in Ireland.
  dataLocations: [CH, IE, DE, FR, NL, GB, US, CA, BR, SG, AE]
  infrastructure:
    provider: Microsoft Azure
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: storage

openSource:
  value: no
  basis: inferred
  source: security
  note: No source code for the clients or the server has been published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  url: https://tresorit.com/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: yes
  encryptionAtRest: yes
  encryptionInTransit: yes
  sso: yes
  api: yes

certifications: [iso-27001]

tags: [encryption, zero-knowledge, sync, data-residency, azure]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: storage
    title: Service and data storage locations
    url: https://support.tresorit.com/hc/en-us/articles/360017472540-Service-and-data-storage-locations
    publisher: Tresorit AG
    kind: documentation
    accessed: 2026-10-15
  - id: residency
    title: Data Residency Options
    url: https://tresorit.com/features/data-residency-options
    publisher: Tresorit AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Tresorit security
    url: https://tresorit.com/security
    publisher: Tresorit AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Tresorit pricing
    url: https://tresorit.com/pricing/business
    publisher: Tresorit AG
    kind: vendor
    accessed: 2026-10-15
  - id: basic
    title: Tresorit Basic (free plan)
    url: https://tresorit.com/pricing/basic
    publisher: Tresorit AG
    kind: vendor
    accessed: 2026-10-15
  - id: payment
    title: Tresorit payment FAQ
    url: https://support.tresorit.com/hc/en-us/articles/216113967-Tresorit-payment-FAQ
    publisher: Tresorit AG
    kind: documentation
    accessed: 2026-10-15
  - id: platforms
    title: Supported platforms and browsers
    url: https://support.tresorit.com/hc/en-us/articles/216114317-Supported-platforms-and-browsers
    publisher: Tresorit AG
    kind: documentation
    accessed: 2026-10-15
  - id: french
    title: Tresorit launches apps in French
    url: https://tresorit.com/blog/tresorit-en-francais
    publisher: Tresorit AG
    kind: vendor
    accessed: 2026-10-15
  - id: terms
    title: Tresorit terms of service
    url: https://tresorit.com/legal/terms-of-service
    publisher: Tresorit AG
    kind: vendor
    accessed: 2026-10-15
  - id: jobs
    title: Tresorit jobs
    url: https://www.glassdoor.co.uk/Jobs/Tresorit-Jobs-E1603611.htm
    publisher: Glassdoor
    kind: independent
    accessed: 2026-10-15
---

Tresorit provides end-to-end encrypted cloud storage, file sync and sharing for
individuals and organisations. Files are encrypted on the user's device before
upload, so neither Tresorit nor its hosting provider can read file content.
Business plans add admin controls, SSO with Okta, Entra ID or Google Workspace,
and data residency options; a free Basic plan offers 3 GB.

The service runs on Microsoft Azure. Encrypted file content of Swiss customers
is stored in Switzerland by default, while other customers default to Ireland
unless a business plan with a different data region is chosen. Operational and
access metadata is always stored in Ireland. Tresorit AG holds ISO 27001
certification.

The company was founded in Hungary in 2011 and is headquartered in Zurich. Swiss
Post, which is owned by the Swiss Confederation, acquired a majority stake in
2021 and now lists Tresorit as a wholly owned subsidiary. Customer contracts are
with Tresorit AG under Swiss law.
