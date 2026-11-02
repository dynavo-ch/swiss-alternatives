---
name: Blond
aliases: [blond.swiss, StrawBlond, Leicht Blond, Voll Blond]
company: strawblond
tagline: Invoicing, bookkeeping, VAT and project time tracking for Swiss freelancers and SMEs.
description: >-
  Blond is business software from Wolfhausen ZH for Swiss freelancers and small
  firms, with QR invoices, bookkeeping, VAT and time tracking, hosted in Switzerland.
website: https://blond.swiss
status: active

categories: [invoicing, accounting, time-tracking]
alternativesTo:
  - id: freshbooks
    note: >-
      Built for Swiss requirements, with QR-bills and invoices in German,
      French, Italian or English; project time tracking is part of the larger
      plan only.
  - id: quickbooks
    note: >-
      Bookkeeping, VAT returns, bank reconciliation and receipt scanning are
      included in the Voll Blond plan only; payroll is announced for 2027.

audience: [business]
deployment: [saas]
platforms: [web, ios, android]
languages:
  interface: [de, en, fr]

swiss:
  developed:
    value: yes
    basis: vendor
    source: home
    note: >-
      Blond states that it is developed and operated in Switzerland by
      STRAWBLOND GmbH in Wolfhausen ZH.
  hosted:
    value: yes
    basis: vendor
    source: dpa
    note: >-
      The data processing agreement states that application data and backups
      are stored in Switzerland, on servers in a data centre of Nine Internet
      Solutions AG managed by Onlime GmbH, with uploaded files and receipts in
      Exoscale object storage in Zurich. Receipt recognition uses Mindee in the
      EU, email is sent through Twilio SendGrid (US), and the optional AI agent
      uses OpenAI in the US.
  dataLocations: [CH]
  infrastructure:
    provider: Nine Internet Solutions AG (managed by Onlime GmbH); Exoscale for files
    providerCountry: CH
    type: unknown
    swissOwned: unknown
    facility: Nine Internet Solutions AG data centres in Switzerland
    basis: vendor
    source: dpa
    note: >-
      Exoscale is operated by Akenes SA, part of the Austrian A1 group. Whether
      Blond runs on dedicated, colocated or virtual servers is not stated.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 25
    currency: CHF
    period: month
    note: Leicht Blond (invoices and quotes, one user), billed annually, excluding VAT; Voll Blond with bookkeeping costs CHF 100 per month
  url: https://blond.swiss/de/preise
  checked: 2026-11-02
  basis: vendor
  source: pricing

features:
  encryptionInTransit: yes

tags: [invoicing, qr-bill, bookkeeping, vat, time-tracking, freelancers, sme, receipt-scanning]
affiliate: null
sponsored: false
added: 2026-11-02
updated: 2026-11-02
lastVerified: 2026-11-02
sources:
  - id: home
    title: Blond - Business-Software für Schweizer Selbständige und KMU
    url: https://blond.swiss
    publisher: STRAWBLOND GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: pricing
    title: Blond Preise
    url: https://blond.swiss/de/preise
    publisher: STRAWBLOND GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: dpa
    title: Auftragsverarbeitungsvertrag (AVV) - Blond
    url: https://blond.swiss/de/avv
    publisher: STRAWBLOND GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: privacy
    title: Datenschutzerklärung - Blond
    url: https://blond.swiss/de/datenschutz
    publisher: STRAWBLOND GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: swissmadesoftware
    title: STRAWBLOND GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/strawblond/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-02
i18n:
  de:
    tagline: 'Rechnungen, Buchhaltung, MWST und Projektzeiterfassung für Schweizer Selbständige und KMU.'
    description: 'Blond ist Business-Software aus Wolfhausen ZH für Schweizer Selbständige und kleine Firmen, mit QR-Rechnungen, Buchhaltung, MWST und Zeiterfassung, gehostet in der Schweiz.'
    notes:
      swiss.developed.note: 'Blond gibt an, in der Schweiz von der STRAWBLOND GmbH in Wolfhausen ZH entwickelt und betrieben zu werden.'
      swiss.hosted.note: 'Gemäss Auftragsverarbeitungsvertrag werden Anwendungsdaten und Sicherungen in der Schweiz gespeichert, auf Servern in einem Rechenzentrum der Nine Internet Solutions AG, verwaltet durch die Onlime GmbH, hochgeladene Dateien und Belege im Object Storage von Exoscale in Zürich. Das Auslesen von Belegen erfolgt über Mindee in der EU, E-Mails werden über Twilio SendGrid (USA) versendet, und der optionale KI-Agent nutzt OpenAI in den USA.'
      swiss.infrastructure.note: 'Exoscale wird von der Akenes SA betrieben, die zur österreichischen A1-Gruppe gehört. Ob Blond auf dedizierten, eingemieteten oder virtuellen Servern läuft, wird nicht angegeben.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Leicht Blond (Rechnungen und Offerten, ein Benutzer), jährliche Abrechnung, exklusive MWST; Voll Blond mit Buchhaltung kostet CHF 100 pro Monat'
      alternativesTo.freshbooks.note: 'Auf Schweizer Anforderungen ausgerichtet, mit QR-Rechnungen und Rechnungen auf Deutsch, Französisch, Italienisch oder Englisch; die Projektzeiterfassung ist nur im grösseren Plan enthalten.'
      alternativesTo.quickbooks.note: 'Buchhaltung, MWST-Abrechnung, Bankabgleich und Belegerkennung sind nur im Plan Voll Blond enthalten; die Lohnbuchhaltung ist für 2027 angekündigt.'
---

Blond is browser-based administration software for Swiss freelancers and
small businesses, with apps for iPhone and Android. It manages customers and
contacts, creates quotes and invoices with Swiss QR-bills in German, French,
Italian or English, and offers a customer portal and custom email design. The
larger plan adds double-entry bookkeeping with VAT returns and year-end
closing, bank reconciliation, payment files for e-banking, receipt and
supplier invoice scanning with AI, and project time tracking. An AI agent can
answer questions and carry out tasks, and Blond can be connected to AI
assistants through an MCP server.

There are two plans, billed per month or year and excluding VAT: Leicht Blond
for invoices and quotes at CHF 25 per month with one user, and Voll Blond for
the full administration at CHF 100 per month with five users. A payroll module
certified under Swissdec is announced for 2027 at CHF 9 per person and month.
A 30-day trial is available; there is no free plan.

STRAWBLOND GmbH was entered in the commercial register in December 2025. Its
data processing agreement names Nine Internet Solutions in Switzerland for
hosting and Exoscale in Zurich for file storage, with some sub-processors in
the EU and the US.
