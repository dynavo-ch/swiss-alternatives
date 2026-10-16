---
name: MILKEE
company: milkee
tagline: Cloud accounting, invoicing and time tracking for the self-employed in Switzerland.
description: >-
  MILKEE is cloud accounting software from Winterthur for self-employed people
  and small firms, with QR invoices, time tracking and a receipt-scanning app.
website: https://milkee.ch
status: active
launched: 2022

categories: [accounting, invoicing, time-tracking, payroll]
alternativesTo:
  - id: quickbooks
    note: Built for Swiss sole proprietors and GmbHs, with simple single-entry bookkeeping and QR-bills.
  - id: xero
    note: Built for Swiss sole proprietors and GmbHs, with simple single-entry bookkeeping and QR-bills.
  - id: freshbooks
    note: Aimed at Swiss freelancers; adds Swiss VAT returns, QR-bills and bank connections to Swiss banks.

audience: [business]
deployment: [saas]
platforms: [web, ios, android, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      MILKEE states that the software is developed in Winterthur by a small
      core team, supplemented by freelancers for design, development and
      marketing.
  hosted:
    value: partial
    basis: vendor
    source: ai
    note: >-
      Recorded as partly because the privacy policy commits only to "primarily" Switzerland and the EU. MILKEE states that customer data is hosted in Switzerland and transmitted
      encrypted. Its privacy policy says personal data is stored and processed
      primarily in Switzerland and the EU and may be transferred to other
      countries, in particular the USA. The hosting provider is not named.
  dataLocations: [CH]

openSource:
  value: no
  basis: inferred
  note: Proprietary cloud service; no source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 24.90
    currency: CHF
    period: month
    note: Basic plan (2 users, 120 AI receipt scans per year), billed annually, excl. VAT; CHF 29.90 with monthly billing
  url: https://milkee.ch/preise
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Business costs CHF 34.90 and Team CHF 69.90 per month with annual billing
    (CHF 39.90 and 79.90 monthly). Payroll is not available in Basic, costs CHF
    9 per employee in Business and includes five employees in Team. The
    14-day trial requires no credit card.

features:
  encryptionInTransit: yes
  api: yes

tags:
  [
    accounting,
    invoicing,
    time-tracking,
    freelancers,
    self-employed,
    qr-bill,
    swiss-vat,
    receipt-scanning,
  ]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: pricing
    title: Unsere Preise - MILKEE
    url: https://milkee.ch/preise
    publisher: MILKEE GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: Über uns - MILKEE
    url: https://milkee.ch/ueber-uns
    publisher: MILKEE GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: ai
    title: AI Buchhaltung - MILKEE
    url: https://milkee.ch/ai-buchhaltung
    publisher: MILKEE GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutzerklärung - MILKEE
    url: https://milkee.ch/datenschutz
    publisher: MILKEE GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: llms
    title: MILKEE - information for LLMs (llms.txt)
    url: https://milkee.ch/llms.txt
    publisher: MILKEE GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: api
    title: MILKEE API documentation
    url: https://apidocs.milkee.ch/
    publisher: MILKEE GmbH
    kind: documentation
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: MILKEE GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/milkee-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Cloud-Buchhaltung, Rechnungsstellung und Zeiterfassung für Selbstständige in der Schweiz.'
    description: 'MILKEE ist Cloud-Buchhaltungssoftware aus Winterthur für Selbstständige und kleine Firmen, mit QR-Rechnungen, Zeiterfassung und einer App zum Scannen von Belegen.'
---

MILKEE is a cloud accounting tool for self-employed people with a sole
proprietorship or GmbH and for small businesses in Switzerland. It starts with
simple income-and-expense bookkeeping and can be switched to double-entry
accounting with balance sheet and income statement. Invoices with Swiss
QR-bills, time tracking and customer management are part of every plan;
according to MILKEE's plan summary, double-entry accounting, VAT returns,
foreign currencies and payroll require the Business or Team plan.

A mobile app for iOS and Android scans receipts and uses AI to extract amount,
date, VAT rate and supplier, and the software suggests bookings for imported
bank transactions. Bank connections are included in all plans. A REST API,
webhooks and integrations with Zapier, Make, Stripe and Toggl are available.

MILKEE was started in 2022 and is run by a small team in Winterthur. All plans
include at least two users so that a fiduciary can access the books. The
company reports more than 820 customers. The website is published in German
only, and support is provided by e-mail.
