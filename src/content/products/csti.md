---
name: CSTI
aliases: [CSTI SA, csti.ch]
company: csti
tagline: VPS, hosted Exchange mailboxes and Veeam backup from data centres in Switzerland.
description: >-
  CSTI is a Geneva-area provider of VPS, Microsoft Exchange mailboxes, Veeam backup
  and file sync, run from its own data centres in Switzerland and priced in CHF.
website: https://www.csti.ch
status: active

categories: [vps-hosting, email, backup]
alternativesTo:
  - id: digitalocean
    note: VPS configured per CPU, RAM and disk, billed monthly in CHF, with optional geo-redundancy.
  - id: microsoft-365
    note: Covers only Exchange mailboxes, hosted by CSTI in Switzerland; no Office apps. CSTI also manages customers' Microsoft 365 tenants.

audience: [business]
deployment: [saas, managed]
platforms: [web]

swiss:
  developed:
    value: unknown
    note: >-
      CSTI operates the services from the canton of Geneva; mail runs on
      Microsoft Exchange and backup on Veeam. In-house software development is
      not described.
  hosted:
    value: yes
    basis: vendor
    source: vps
    note: >-
      CSTI states that its data centres are exclusively in Switzerland and that
      Exchange servers and mail data are hosted only in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: CSTI SA (own data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    basis: vendor
    source: interview
    note: >-
      In a 2026 interview republished on its website, CSTI says it operates its
      own data centres for a fully Swiss cloud. Their locations and any
      colocation partners are not named.

pricing:
  model: subscription
  chfBilling: yes
  startingPrice:
    amount: 7.5
    currency: CHF
    period: month
    note: Hosted Exchange mailbox with 20 GB, 14 days of backup and basic support, excl. VAT
  url: https://www.csti.ch/shop/configure/mail
  checked: 2026-10-16
  basis: vendor
  source: mail-pricing

tags: [vps, hosted-exchange, email-hosting, veeam, backup, password-manager, managed-it]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: vps
    title: VPS – CSTI
    url: https://www.csti.ch/shop/vps
    publisher: CSTI SA
    kind: vendor
    accessed: 2026-10-16
  - id: vps-pricing
    title: Configurer un VPS – CSTI
    url: https://www.csti.ch/shop/configure/vps
    publisher: CSTI SA
    kind: vendor
    accessed: 2026-10-16
  - id: mail
    title: Mail – CSTI
    url: https://www.csti.ch/shop/mail
    publisher: CSTI SA
    kind: vendor
    accessed: 2026-10-16
  - id: mail-pricing
    title: Configurer Mail – CSTI
    url: https://www.csti.ch/shop/configure/mail
    publisher: CSTI SA
    kind: vendor
    accessed: 2026-10-16
  - id: backup-pricing
    title: Configurer Backup Veeam – CSTI
    url: https://www.csti.ch/shop/configure/csti-backup
    publisher: CSTI SA
    kind: vendor
    accessed: 2026-10-16
  - id: interview
    title: Interview de CSTI par le Monde Économique
    url: https://www.csti.ch/about/news/11
    publisher: CSTI SA
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: CSTI SA — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/csti-sa/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'VPS, gehostete Exchange-Postfächer und Veeam-Backup aus Rechenzentren in der Schweiz.'
    description: 'CSTI ist ein Anbieter aus der Region Genf für VPS, Microsoft-Exchange-Postfächer, Veeam-Backup und Dateisynchronisation, betrieben aus eigenen Rechenzentren in der Schweiz, mit Preisen in CHF.'
---

CSTI is an IT service provider in Thônex (Geneva), founded in 2009, that hosts
services for small and medium-sized businesses alongside managed IT, consulting
and hardware sales. Its hosted products include virtual private servers,
Microsoft Exchange mailboxes, Veeam-based backup, a password manager (CSTI
Vault), a file sync and sharing service (CSTI Drive), domains and Sophos
security packages.

CSTI states that its data centres are exclusively in Switzerland and that it
operates them itself; mail is described as running on geo-redundant
infrastructure in Switzerland, and VPS can be made geo-redundant as an option.
The data centre locations are not published.

Prices are configured online in CHF and exclude VAT: a 20 GB Exchange mailbox
costs CHF 7.50 per month, VPS are priced per CPU, RAM and disk, and backup is
priced per storage volume plus a support level. VPS subscriptions can be
cancelled at any time.
