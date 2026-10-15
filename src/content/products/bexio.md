---
name: bexio
aliases: [bexio Go]
company: bexio
tagline: Cloud business software for Swiss small businesses, from invoicing to payroll.
description: >-
  bexio is cloud business software from Rapperswil-Jona for Swiss small
  businesses, covering accounting, invoicing, payroll and contact management.
website: https://www.bexio.com
status: active

categories: [accounting, invoicing, payroll, crm]
alternativesTo:
  - id: quickbooks
    note: Built for Swiss small businesses and Swiss accounting, VAT and payroll practice.
  - id: xero
    note: Built for Swiss small businesses and Swiss accounting, VAT and payroll practice.

audience: [business]
deployment: [saas]
platforms: [web, ios, android, api]
languages:
  interface: [de, fr, it, en]

swiss:
  developed:
    value: yes
    basis: inferred
    note: >-
      Developed by bexio AG in Rapperswil-Jona; the company does not publish a
      breakdown of its development locations.
  hosted:
    value: yes
    basis: vendor
    source: privacy
    note: >-
      bexio states that data in the software is stored and processed exclusively
      in Switzerland and that its servers are located in Switzerland. Encrypted
      backups are kept in several data centres in Switzerland and abroad; the
      foreign locations are not named. Some auxiliary services may run on
      servers in other countries.
  dataLocations: [CH]
  infrastructure:
    provider: Google Cloud (Google Switzerland GmbH)
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: subprocessors
    note: >-
      bexio's list of subcontractors names Google Switzerland GmbH, Zurich, for
      data-centre services and data hosting. OriginStamp AG (Kreuzlingen) is
      listed for audit-proof archiving of receipts and documents.

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
    amount: 35
    currency: CHF
    period: month
    note: Basic plan (1 user) with annual billing, excl. VAT; CHF 45 per month with monthly billing
  url: https://www.bexio.com/en-CH/packages-and-prices
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    Packages were updated on 1 March 2026; current plans are Basic, Advanced,
    Optima and Ultimate. The 30-day free trial requires no credit card.

features:
  encryptionInTransit: yes
  mfa: yes
  api: yes

tags: [accounting, invoicing, payroll, sme, swiss-vat, qr-bill]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: privacy
    title: Privacy policy - bexio
    url: https://www.bexio.com/en-CH/privacy-policy
    publisher: bexio AG
    kind: vendor
    accessed: 2026-10-15
  - id: subprocessors
    title: Subunternehmer (AVV Ziff. 5) - bexio
    url: https://www.bexio.com/de-CH/richtlinien/subunternehmer
    publisher: bexio AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Our packages & prices at a glance - bexio
    url: https://www.bexio.com/en-CH/packages-and-prices
    publisher: bexio AG
    kind: vendor
    accessed: 2026-10-15
  - id: api
    title: bexio API documentation
    url: https://docs.bexio.com/
    publisher: bexio AG
    kind: documentation
    accessed: 2026-10-15
  - id: app
    title: bexio Go for iOS and Android
    url: https://www.bexio.com/en-CH/bexiogo
    publisher: bexio AG
    kind: vendor
    accessed: 2026-10-15
  - id: press-kontera
    title: bexio integriert Kontera (media release, 23 October 2025)
    url: https://www.bexio.com/de-CH/ueber-uns/medienmitteilung-oktober
    publisher: bexio AG
    kind: vendor
    accessed: 2026-10-15
  - id: press-2fa
    title: Bexio zwingt alle Kunden zur Zwei-Faktor-Authentifizierung nach Phishing-Angriff
    url: https://borncity.com/news/bexio-zwingt-alle-kunden-zur-zwei-faktor-authentifizierung-nach-phishing-angriff/
    publisher: Borncity
    kind: press
    accessed: 2026-10-15
---

bexio is a cloud-based business software for small businesses, start-ups and
self-employed people in Switzerland. It combines quotes and invoicing, financial
accounting, bank reconciliation, contact management, time tracking and, in the
larger plans, payroll. The companion app bexio Go for iOS and Android scans
receipts and QR-bills. A REST API with OAuth 2.0 / OpenID Connect is available
for integrations. In October 2025 bexio took over Kontera GmbH, whose AI-based
receipt processing is being integrated from 2026.

According to its privacy policy, customer data in the software is stored and
processed in Switzerland. The underlying hosting is provided by Google
Switzerland GmbH (Google Cloud), so the infrastructure operator is not Swiss
owned. Encrypted backups are also kept in data centres abroad, and auxiliary
services such as e-mail, analytics and payment providers may process data in
Europe and the USA.

Plans are billed in CHF, with a discount for annual billing. The Basic plan is
limited to one user and does not include payroll or bexio Pay. According to
press reports from May 2026, bexio made two-factor authentication mandatory for
all users after a phishing campaign targeted customer accounts.
