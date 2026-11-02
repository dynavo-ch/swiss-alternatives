---
name: Mast
aliases: [Mast Finance, mastfinance.io]
company: mast-finance
tagline: Accounting, QR invoicing, treasury and reporting for Swiss SMEs and fiduciaries.
description: >-
  Mast is accounting and finance software from Lausanne for Swiss SMEs and
  fiduciaries, with QR invoicing, VAT, bank reconciliation and budgets, hosted on AWS Zurich.
website: https://mastfinance.io
status: active

categories: [accounting, invoicing]
alternativesTo:
  - id: quickbooks
    note: >-
      Built for Swiss accounting rules, with QR-bills, Swiss VAT, bLink bank
      connections and a workspace shared with the fiduciary; no free plan.
  - id: xero
    note: >-
      Built for Swiss accounting rules and Swiss bank connections through bLink;
      customer data is stored in the AWS Zurich region.

audience: [business]
deployment: [saas]
platforms: [web, ios, android]
languages:
  interface: [en, fr, de, it]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: Mast states that the software is designed and built by its team in Lausanne.
  hosted:
    value: yes
    basis: vendor
    source: privacy
    note: >-
      The privacy policy states that customer data, including backups, is stored
      on AWS in the Zurich region. Scanned documents are read by Microsoft Azure
      in Switzerland, AI inference runs in Switzerland or the EU, transactional
      email goes through AWS in Ireland, and invoices received by email are held
      there for up to seven days. Product analytics and error tracking run in
      Frankfurt without customer data.
  dataLocations: [CH]
  infrastructure:
    provider: Amazon Web Services
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: privacy

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: subscription
  freePlan: no
  chfBilling: yes
  enterprise: yes
  startingPrice:
    amount: 49
    currency: CHF
    period: month
    note: Starter, one user, billed annually, excluding VAT (CHF 59 billed monthly)
  url: https://mastfinance.io/pricing/
  checked: 2026-11-02
  basis: vendor
  source: pricing

features:
  dataExport: yes

tags: [accounting, qr-bill, vat, bank-reconciliation, treasury, budgeting, fiduciaries, sme]
affiliate: null
sponsored: false
added: 2026-11-02
updated: 2026-11-02
lastVerified: 2026-11-02
sources:
  - id: home
    title: Mast — Swiss accounting and finance software
    url: https://mastfinance.io
    publisher: Mast Finance Sàrl
    kind: vendor
    accessed: 2026-11-02
  - id: about
    title: About Mast | Swiss Accounting & Finance Software
    url: https://mastfinance.io/about
    publisher: Mast Finance Sàrl
    kind: vendor
    accessed: 2026-11-02
  - id: features
    title: Mast features
    url: https://mastfinance.io/features
    publisher: Mast Finance Sàrl
    kind: vendor
    accessed: 2026-11-02
  - id: privacy
    title: Mast — Privacy policy
    url: https://mastfinance.io/privacy
    publisher: Mast Finance Sàrl
    kind: vendor
    accessed: 2026-11-02
  - id: pricing
    title: 'Pricing: plans for Swiss businesses and fiduciaries | Mast'
    url: https://mastfinance.io/pricing/
    publisher: Mast Finance Sàrl
    kind: vendor
    accessed: 2026-11-02
  - id: swissmadesoftware
    title: Mast Finance Sàrl — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/mast-finance-s-rl/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-02
i18n:
  de:
    tagline: 'Buchhaltung, QR-Rechnungen, Liquiditätsplanung und Reporting für Schweizer KMU und Treuhänder.'
    description: 'Mast ist Buchhaltungs- und Finanzsoftware aus Lausanne für Schweizer KMU und Treuhänder, mit QR-Rechnungen, MWST, Bankabgleich und Budgets, gehostet auf AWS Zürich.'
    notes:
      swiss.developed.note: 'Mast gibt an, dass die Software von ihrem Team in Lausanne gestaltet und gebaut wird.'
      swiss.hosted.note: 'Gemäss Datenschutzerklärung werden Kundendaten einschliesslich Sicherungen auf AWS in der Region Zürich gespeichert. Gescannte Dokumente werden von Microsoft Azure in der Schweiz ausgelesen, KI-Inferenz läuft in der Schweiz oder der EU, Transaktions-E-Mails laufen über AWS in Irland, und per E-Mail empfangene Rechnungen werden dort bis zu sieben Tage zwischengespeichert. Produktanalyse und Fehlerüberwachung laufen in Frankfurt ohne Kundendaten.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Starter, ein Benutzer, jährliche Abrechnung, exklusive MWST (CHF 59 bei monatlicher Abrechnung)'
      alternativesTo.quickbooks.note: 'Für Schweizer Buchhaltungsregeln gebaut, mit QR-Rechnungen, Schweizer MWST, Bankanbindung über bLink und einem gemeinsamen Arbeitsbereich mit dem Treuhänder; kein Gratis-Plan.'
      alternativesTo.xero.note: 'Für Schweizer Buchhaltungsregeln und Schweizer Bankanbindungen über bLink gebaut; Kundendaten werden in der AWS-Region Zürich gespeichert.'
---

Mast is browser-based accounting and finance software for Swiss small and
medium-sized businesses, fiduciaries and interim CFOs, with apps for iOS and
Android. It covers quotes and invoices with Swiss QR-bills and payment
reminders, supplier bill approval, double-entry bookkeeping with Swiss VAT,
multi-currency and year-end closing, bank reconciliation with bank connections
through SIX bLink, payment runs, depreciation schedules, cash-flow forecasts,
budgets, dashboards and reports. An AI assistant answers questions from the
company's books. Fiduciaries can manage several client companies from one
workspace.

Plans are priced per company in CHF, excluding VAT, from CHF 49 per month for
one user (Starter, billed annually) to Business and Enterprise plans for larger
teams. Mast Finance Sàrl was entered in the commercial register in Lausanne in
December 2025.

The privacy policy states that customer data is stored on Amazon Web Services
in the Zurich region; some functions use providers in the EU, and staff
support tasks may use an AI assistant from a US provider.
