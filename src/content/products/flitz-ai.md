---
name: Flitz.ai
aliases: [Flitz]
company: mejleroe
tagline: All-in-one business platform with AI bookkeeping, payroll, CRM and team tools for SMEs.
description: >-
  Flitz.ai is a business platform from Engelberg OW for Swiss SMEs with AI-assisted
  accounting, payroll, CRM, time tracking and team chat, hosted in Frankfurt.
website: https://flitz.ai
status: active

categories: [erp, accounting, crm]
alternativesTo:
  - id: quickbooks
    note: >-
      Keeps Swiss (OR/MWST) or Swedish books and adds payroll, CRM, team chat,
      email and an intranet in one subscription; invoice parsing and bookings
      rely on an AI model from a US provider.

audience: [business]
deployment: [saas]
platforms: [web, macos]
languages:
  interface: [de, en, sv]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Flitz.ai states that it is built and operated by The Mejlerö Company in
      Engelberg.
  hosted:
    value: no
    basis: vendor
    source: dpa
    note: >-
      The subprocessor list states that all customer data at rest is stored with
      DigitalOcean in Frankfurt, Germany. AI invoice parsing, booking, audit and
      document questions are processed by Anthropic in the US, and transactional
      email is sent through Mailtrap in the Czech Republic.
  dataLocations: [DE]
  infrastructure:
    provider: DigitalOcean
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: dpa

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: freemium
  freePlan: yes
  chfBilling: yes
  startingPrice:
    amount: 39
    currency: CHF
    period: month
    note: Professional, one user included, CHF 9 per additional user, monthly with no minimum term
  url: https://flitz.ai/pricing
  checked: 2026-11-02
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes

tags: [all-in-one, accounting, payroll, crm, time-tracking, team-chat, ai-bookkeeping, sme]
affiliate: null
sponsored: false
added: 2026-11-02
updated: 2026-11-02
lastVerified: 2026-11-02
sources:
  - id: home
    title: Flitz.ai — business platform for Swiss SMEs
    url: https://flitz.ai
    publisher: The Mejlerö Company GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: about
    title: About Flitz.ai
    url: https://flitz.ai/about
    publisher: The Mejlerö Company GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: dpa
    title: Data Processing Addendum & Subprocessors - Flitz.ai
    url: https://flitz.ai/dpa
    publisher: The Mejlerö Company GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: pricing
    title: Pricing - Flitz.ai
    url: https://flitz.ai/pricing
    publisher: The Mejlerö Company GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: swissmadesoftware
    title: The Mejlerö Company GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/the-mejler--company-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-02
i18n:
  de:
    tagline: 'All-in-one-Business-Plattform mit KI-Buchhaltung, Lohn, CRM und Teamwerkzeugen für KMU.'
    description: 'Flitz.ai ist eine Business-Plattform aus Engelberg OW für Schweizer KMU mit KI-gestützter Buchhaltung, Lohn, CRM, Zeiterfassung und Team-Chat, gehostet in Frankfurt.'
    notes:
      swiss.developed.note: 'Flitz.ai gibt an, von The Mejlerö Company in Engelberg gebaut und betrieben zu werden.'
      swiss.hosted.note: 'Gemäss Liste der Unterauftragsbearbeiter werden alle ruhenden Kundendaten bei DigitalOcean in Frankfurt, Deutschland, gespeichert. KI-gestütztes Auslesen von Rechnungen, Buchungen, Prüfungen und Fragen zu Dokumenten werden von Anthropic in den USA verarbeitet, und Transaktions-E-Mails werden über Mailtrap in Tschechien versendet.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Professional, ein Benutzer inbegriffen, CHF 9 pro weiteren Benutzer, monatlich ohne Mindestlaufzeit'
      alternativesTo.quickbooks.note: 'Führt Schweizer (OR/MWST) oder schwedische Bücher und ergänzt Lohn, CRM, Team-Chat, E-Mail und ein Intranet in einem Abo; das Auslesen von Rechnungen und das Buchen stützen sich auf ein KI-Modell eines US-Anbieters.'
---

Flitz.ai is a browser-based business platform for small Swiss companies that
combines many tools in one subscription. The core covers double-entry
bookkeeping on the Swiss SME chart of accounts with VAT reporting, receipt and
invoice intake with AI-assisted booking, bank reconciliation, payroll, a CRM
with customer portal, work tickets with Kanban boards, time tracking, team chat
with email and video calls, a password vault and a webshop. Higher plans add an
intranet, IT inventory, uptime monitoring and endpoint protection. Swedish
books can be kept as well, and a desktop app for macOS is offered.

A free Starter plan is available; paid plans start at CHF 39 per month with
one user included and are billed monthly without a minimum term. Each plan
includes a monthly allowance of AI credits.

Flitz.ai is run by The Mejlerö Company, a small IT consultancy in Engelberg.
Its subprocessor list states that customer data is stored with DigitalOcean in
Frankfurt and that AI functions send document content to Anthropic in the US,
so the service is not hosted in Switzerland.
