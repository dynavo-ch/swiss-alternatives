---
name: KLARA
aliases: [KLARA Business, myKLARA]
company: epost-service
tagline: Modular cloud business software for Swiss SMEs, from accounting and invoicing to payroll.
description: >-
  KLARA is cloud business software from Lucerne for Swiss SMEs, covering
  accounting, invoicing, payroll, CRM and POS. It is part of Swiss Post's ePost.
website: https://www.klara.ch
status: active
launched: 2016

categories: [accounting, invoicing, payroll, crm]
alternativesTo:
  - id: quickbooks
    note: Built for Swiss SMEs and Swiss accounting, VAT and payroll practice.
  - id: xero
    note: Built for Swiss SMEs and Swiss accounting, VAT and payroll practice.

audience: [business]
deployment: [saas]
platforms: [web, ios, android, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: home
    note: KLARA states that the software is developed and operated entirely in Switzerland.
  hosted:
    value: yes
    basis: vendor
    source: subprocessors
    note: >-
      KLARA states that all data is stored exclusively in Swiss data centres,
      mirrored geo-redundantly across several locations in Switzerland, and
      that all personal and content data is processed and stored in
      Switzerland. Its subprocessor list notes that information-security
      services may operate worldwide; SMS and customer-support providers are
      based in the EU.
  dataLocations: [CH]
  infrastructure:
    provider: Google Cloud (Google Cloud Ireland Ltd.)
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: subprocessors
    note: >-
      Google Cloud Ireland Ltd. is the only hosting and infrastructure provider
      on KLARA's list of subprocessors. KLARA does not name the Google Cloud
      region; it states that data is stored in Switzerland.

openSource:
  value: no
  basis: inferred
  note: Proprietary cloud service; no source code is published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 48
    currency: CHF
    period: month
    note: >-
      Business Basic on a 2-year plan paid yearly, excl. VAT; CHF 55 per month
      with a 1-year plan and CHF 69 with monthly billing
  url: https://www.klara.ch/en/business
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    KLARA states that basic functions such as invoicing and recording receipts
    are free. Business Basic includes accounting, CRM, order management and
    eArchive for up to three admin users; Business Plus and Premium add
    further features. Additional modules (payroll, POS, online shop, website)
    are activated individually through the KLARA Widget Store; the homepage
    lists payroll "from CHF 3.90 / payroll". A 30-day free trial is offered.

features:
  api: yes

tags: [accounting, invoicing, payroll, crm, pos, swissdec, qr-bill, sme]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: KLARA - Business software for SMEs in Switzerland
    url: https://www.klara.ch/en/
    publisher: ePost Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: KLARA Business - plans and prices
    url: https://www.klara.ch/en/business
    publisher: ePost Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing-vat
    title: Preise - KLARA
    url: https://www.klara.ch/preise
    publisher: ePost Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: accounting
    title: Online accounting software - KLARA
    url: https://www.klara.ch/en/accounting
    publisher: ePost Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: subprocessors
    title: Unterauftragsbearbeiter - KLARA
    url: https://www.klara.ch/unterauftragsbearbeiter
    publisher: ePost Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: about
    title: Über uns - ePost
    url: https://www.epost.ch/de-ch/ueber-uns
    publisher: ePost Service AG
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Modulare Cloud-Unternehmenssoftware für Schweizer KMU, von Buchhaltung und Rechnungsstellung bis Lohn.'
    description: 'KLARA ist Cloud-basierte Unternehmenssoftware aus Luzern für Schweizer KMU mit Buchhaltung, Rechnungsstellung, Lohn, CRM und Kassensystem. Sie gehört zu ePost der Schweizerischen Post.'
---

KLARA is cloud-based business software for small and medium-sized businesses
in Switzerland. Its core covers financial accounting with automatic bank
reconciliation for major Swiss banks, quotes and invoicing, contact management
(CRM), order management and an electronic archive. Further modules include
Swissdec-certified payroll, time tracking, projects, expenses, a POS system,
online booking, an online shop and a website builder. The myKLARA app is
available for iOS and Android, and an API is documented.

KLARA states that customer data is stored only in Swiss data centres and
mirrored geo-redundantly within Switzerland. The hosting and infrastructure
provider on its subprocessor list is Google Cloud, so the infrastructure
operator is not Swiss owned. Print and dispatch partners, including Swiss Post,
are also listed as subprocessors.

KLARA was founded in 2016 and has been majority-owned by Swiss Post since 2020;
the operating company was renamed from KLARA Business AG to ePost Service AG
in 2024. Pricing combines Business packages with individually activated
modules, which makes the total cost depend on the modules chosen. The Basic
package is limited to three admin users.
