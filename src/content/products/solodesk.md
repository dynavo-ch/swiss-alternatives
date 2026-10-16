---
name: SoloDesk
company: solodesk
tagline: AI-assisted bookkeeping, invoicing and VAT for Swiss sole proprietors and small firms.
description: >-
  SoloDesk is an accounting service from Vernier GE that reads receipts with AI,
  issues QR-bills and prepares VAT returns, with a free plan and data in Zurich.
website: https://solodesk.ch/en-ch/
status: active

categories: [accounting, invoicing, payroll]
alternativesTo:
  - id: quickbooks
    note: Only for businesses registered in Switzerland; built around Swiss VAT, QR-bills and the Swiss SME chart of accounts.
  - id: xero
    note: Only for businesses registered in Switzerland; built around Swiss VAT, QR-bills and the Swiss SME chart of accounts.
  - id: freshbooks
    note: Only for businesses registered in Switzerland; includes double-entry bookkeeping and VAT returns.

audience: [business]
deployment: [saas]
platforms: [web, ios, android]
languages:
  interface: [de, fr, it, en]

swiss:
  developed:
    value: yes
    basis: inferred
    source: ai
    note: >-
      SoloDesk states that the software around the AI model is its own in-house
      development. The company is based in Vernier GE; where development work
      takes place is not otherwise stated. The AI model is a third-party Google
      Gemini model.
  hosted:
    value: partial
    basis: vendor
    source: privacy
    note: >-
      The application, database and uploaded documents are hosted on Google
      Cloud in the Zurich region (europe-west6). For AI document reading, which
      is a core function, every uploaded file is sent to Google Cloud Vertex AI
      through its global endpoint, which SoloDesk says may involve processing
      outside Switzerland (zero data retention configured). Stripe, SendGrid and
      Sentry may also process personal data outside Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: Google Cloud Platform
    providerCountry: US
    type: public-cloud
    swissOwned: no
    facility: Google Cloud region europe-west6 (Zurich)
    basis: vendor
    source: privacy

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
    amount: 29
    currency: CHF
    period: month
    note: Mid plan, 25 incoming documents per month and payroll for one employee, excl. 8.1% VAT
  url: https://solodesk.ch/en-ch/pricing
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    The Free plan (CHF 0) covers one user and 10 incoming documents per month.
    Full costs CHF 59 per month with 50 documents and payroll for five
    employees. Extra documents cost CHF 0.50 each and extra employees CHF 5 per
    month. New accounts get the Full plan free for the first month without a
    card. Plans are billed monthly in CHF.

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  dataExport: yes

tags: [bookkeeping, invoicing, qr-bill, vat, ai, receipts, fiduciaries, sole-proprietors, free]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: Accounting Software for Swiss Sole Proprietors - SoloDesk
    url: https://solodesk.ch/en-ch/
    publisher: Solodesk Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Plans & prices - SoloDesk
    url: https://solodesk.ch/en-ch/pricing
    publisher: Solodesk Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Privacy Policy - SoloDesk
    url: https://solodesk.ch/en-ch/privacy-policy
    publisher: Solodesk Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: ai
    title: How we use AI - SoloDesk
    url: https://solodesk.ch/en-ch/how-we-use-ai
    publisher: Solodesk Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: terms
    title: Terms of Service - SoloDesk
    url: https://solodesk.ch/en-ch/terms-of-service
    publisher: Solodesk Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Solodesk Sàrl — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/solodesk-s-rl/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'KI-gestützte Buchhaltung, Rechnungsstellung und MWST für Schweizer Einzelunternehmen und kleine Firmen.'
    description: 'SoloDesk ist ein Buchhaltungsdienst aus Vernier GE, der Belege mit KI ausliest, QR-Rechnungen ausstellt und MWST-Abrechnungen vorbereitet, mit kostenlosem Plan und Daten in Zürich.'
---

SoloDesk is a browser and mobile service for bookkeeping, invoicing and VAT,
aimed at sole proprietors, small businesses and fiduciaries in Switzerland. Users
upload receipts, supplier bills and bank statements; an AI model classifies each
document and extracts the details, and SoloDesk proposes the accounting entry
and matches bank payments. Uncertain results are queued for review. The service
issues quotes, invoices and QR-bills, prepares VAT returns on the official form
and produces balance sheets and profit and loss statements.

The service is available only to businesses registered in Switzerland and
self-employed people resident in Switzerland. The application and its data are
hosted on Google Cloud in Zurich, but AI document reading uses Google Vertex AI
through a global endpoint, which may process documents outside Switzerland.
Fiduciaries can manage several clients from one account at no charge, while each
client company pays for its own plan.

Solodesk Sàrl was registered in Geneva in July 2026 and the service was free
until 1 September 2026, when paid plans started. The free plan remains, limited
to one user and ten incoming documents per month.
