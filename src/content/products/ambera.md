---
name: ambera
aliases: [ambera modular business application]
company: ambera
tagline: Modular business software for Swiss SMEs, from quotes and invoices to time and stock.
description: >-
  ambera is modular web-based business software from Kleinlützel SO for quotes,
  invoices, time tracking, projects and inventory, hosted in Switzerland.
website: https://ambera.ch/
status: active

categories: [invoicing, erp, crm, time-tracking]
alternativesTo:
  - id: freshbooks
    note: >-
      Built for Swiss SMEs with QR-bills and Swiss VAT; does not keep the books
      itself but exports to Bexio, Abacus or Banana.
  - id: harvest
    note: >-
      Time tracking is one module of a wider business application with
      contacts, quotes, invoices, projects and inventory.

audience: [business]
deployment: [saas]
platforms: [web]
languages:
  interface: [de, fr, it, en]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      ambera states that the software is developed by AMBERA GmbH in
      Switzerland. The company is owner-managed and based in Kleinlützel SO.
  hosted:
    value: yes
    basis: vendor
    source: security
    note: >-
      ambera states that the application is made and hosted in Switzerland and
      that data stays there; its privacy policy says the application is
      developed and operated in Switzerland, with a separate database for each
      customer and two independent server backups in Switzerland (Infomaniak
      Swiss Backup and Acronis). The provider of the application servers is not
      named. Cloudflare sits in front of the application for TLS and DDoS
      protection and processes connection data. The marketing website is
      hosted by METANET in Zurich.
  dataLocations: [CH]

openSource:
  value: no
  basis: inferred
  note: Proprietary cloud service; no source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 29
    currency: CHF
    period: month
    note: Solo plan, one user account, all modules included, excl. VAT
  url: https://ambera.ch/preise/
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Team costs CHF 59 per month (up to 5 user accounts) and Business CHF 99
    (up to 15). Larger companies, associations and non-profits get prices on
    request. Annual payment costs ten monthly fees (e.g. CHF 290 for Solo). A
    30-day trial needs no credit card and there is no notice period. All
    prices in CHF, excl. VAT.

features:
  encryptionInTransit: yes
  mfa: yes
  dataExport: yes

tags: [invoicing, quotes, qr-bill, time-tracking, projects, inventory, crm, sme, passkeys]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: ambera — Modular Business Application
    url: https://ambera.ch/
    publisher: AMBERA GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Preise — ambera
    url: https://ambera.ch/preise/
    publisher: AMBERA GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: security
    title: Sicherheit und Datenschutz — ambera
    url: https://ambera.ch/sicherheit/
    publisher: AMBERA GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutz — ambera
    url: https://ambera.ch/datenschutz/
    publisher: AMBERA GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: Über ambera
    url: https://ambera.ch/ueber-uns/
    publisher: AMBERA GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: accounting-interface
    title: Schnittstelle zur Buchhaltung — Bexio, Abacus und Banana
    url: https://ambera.ch/funktionen/buchhaltungs-schnittstelle/
    publisher: AMBERA GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: personnel
    title: Personal — Anstellung, Lohnreihe, Ferien und Dossier
    url: https://ambera.ch/funktionen/personal/
    publisher: AMBERA GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: ambera gmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/ambera-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Modulare Unternehmenssoftware für Schweizer KMU, von Offerten und Rechnungen bis zu Zeit und Lager.'
    description: 'ambera ist modulare, webbasierte Unternehmenssoftware aus Kleinlützel SO für Offerten, Rechnungen, Zeiterfassung, Projekte und Lager, gehostet in der Schweiz.'
---

ambera is a browser-based business application for small Swiss businesses. It
combines contacts, quotes, invoices with QR-bills, dunning, supplier invoices,
payment matching, calendar and tasks with optional modules for time tracking,
projects, inventory, CRM, HR and support tickets, as well as modules for
specific trades such as driving schools, childcare or removals. Every plan
includes all modules; the price depends on the number of user accounts.

ambera does not keep the books or calculate payroll. It passes invoices and
related data to Bexio through a direct connection, to Abacus as AbaConnect XML
files and to Banana as ready-made bookings, and fiduciaries get their own
access. The HR module keeps personnel records and salary history but leaves
the payroll run to the fiduciary.

The interface is available in German, French, Italian and English. Users sign in
with passkeys or a time-based one-time password, each customer has a separate
database, and a complete backup can be downloaded as a ZIP file at any time.
ambera states that the service is operated in Switzerland but does not name the
provider of its application servers.
