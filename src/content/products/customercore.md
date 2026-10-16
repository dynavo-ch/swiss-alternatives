---
name: CustomerCore
company: coresection
tagline: Cloud business software for Swiss SMEs with accounting, CRM, invoicing and e-banking.
description: >-
  CustomerCore is cloud business software from Zurich-based Coresection for
  Swiss SMEs, combining accounting, CRM, quotes, invoices and bank connections.
website: https://customercore.ch
status: active

categories: [accounting, crm, invoicing, erp]
alternativesTo:
  - id: quickbooks
    note: >-
      Built for Swiss SMEs, with Swiss VAT forms, bank connections through
      SIX bLink and a payroll module in the higher plans.
  - id: xero
    note: >-
      Built for Swiss SMEs, with Swiss VAT forms, bank connections through
      SIX bLink and a payroll module in the higher plans.

audience: [business]
deployment: [saas]
platforms: [web, ios, android]

swiss:
  developed:
    value: unknown
    note: >-
      Coresection states that CustomerCore was developed by the Swiss company
      Coresection GmbH and describes a team of more than 15 people in
      Switzerland and abroad. Where the developers work is not stated.
  hosted:
    value: partial
    basis: vendor
    source: privacy
    note: >-
      Recorded as partly because the privacy policy allows exceptions. The
      website and the data processing agreement state that customer data is
      stored exclusively in Switzerland, and the privacy policy names Amazon
      Web Services in Zurich for hosting and backup. The same policy says
      encrypted backups are kept in data centres in Switzerland and abroad,
      that certain services may run on servers in other countries, and that
      support data may be processed in Europe (Zammad, Germany). Receipt
      recognition in the accounting module uses Google Gemini.
  dataLocations: [CH]
  infrastructure:
    provider: Amazon Web Services
    providerCountry: US
    type: public-cloud
    swissOwned: no
    facility: AWS in Zurich
    basis: vendor
    source: privacy

openSource:
  value: no
  basis: inferred
  note: Proprietary software; no source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 39
    currency: CHF
    period: month
    note: >-
      Standard plan for up to 2 users and 1 company, billed annually,
      including VAT; CHF 49 with monthly billing
  url: https://customercore.ch/preise
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Professional costs CHF 79 (up to 5 users, payroll for up to 2 employees)
    and Ultimate CHF 149 (up to 25 users, payroll for up to 5 employees) per
    month with annual billing, or CHF 89 and CHF 159 with monthly billing.
    Additional companies (Professional and Ultimate), storage, payroll
    employees and credits cost extra. The free trial lasts 14 days.

features:
  encryptionAtRest: yes
  encryptionInTransit: yes

tags: [accounting, crm, invoicing, e-banking, blink, vat, payroll, document-management, sme]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: home
    title: CustomerCore - Automatisierte Buchhaltung
    url: https://customercore.ch/
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Preise - CustomerCore
    url: https://customercore.ch/preise
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: products
    title: Produkte - CustomerCore
    url: https://customercore.ch/produkte
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: accounting
    title: Buchhaltung - CustomerCore
    url: https://customercore.ch/buchhaltung
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: Über uns - CustomerCore
    url: https://customercore.ch/ueber-uns
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutzerklärung (November 2025) - Coresection GmbH
    url: https://customercore.ch/dse
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: dpa
    title: Auftragsverarbeitungsvertrag (January 2024) - Coresection GmbH
    url: https://customercore.ch/avv
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: terms
    title: Allgemeine Geschäftsbedingungen (January 2024) - Coresection GmbH
    url: https://customercore.ch/agb
    publisher: Coresection GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: swissdec
    title: Swissdec certified payroll software (ERP)
    url: https://www.swissdec.ch/certified-erp/
    publisher: Swissdec
    kind: independent
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Coresection GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/coresection-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Cloud-basierte Unternehmenssoftware für Schweizer KMU mit Buchhaltung, CRM, Rechnungsstellung und E-Banking.'
    description: 'CustomerCore ist Cloud-basierte Unternehmenssoftware der Zürcher Coresection für Schweizer KMU, die Buchhaltung, CRM, Offerten, Rechnungen und Bankanbindungen vereint.'
---

CustomerCore is business software for small and medium-sized companies in
Switzerland. It combines contact management, quotes and receivables, expenses,
products, contracts, document storage and accounting with balance sheet,
income statement and a VAT return in the eCH-0217 format. Bank accounts at
Swiss banks are connected through the bLink platform of SIX. The higher plans
include a payroll module described as ELM 5; CustomerCore does not appear in
the Swissdec list of certified payroll software.

The accounting module uses Google Gemini to read receipts and suggest
bookings, which the user confirms. Fiduciaries can be given direct access to
the documents. Besides the web application, apps for iOS and Android have been
available since November 2025.

Coresection says customer data is stored in Switzerland on Amazon Web Services
in Zurich; its privacy policy also mentions encrypted backups abroad. Prices
are published in CHF including VAT, starting at CHF 39 per month with annual
billing for two users.
