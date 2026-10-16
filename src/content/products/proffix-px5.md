---
name: Proffix Px5
aliases: [Proffix, PROFFIX]
company: proffix
tagline: Windows-based ERP software for Swiss SMEs, from accounting and payroll to inventory.
description: >-
  Proffix Px5 is modular ERP software for Swiss SMEs, covering accounting,
  payroll, order processing and inventory. It runs on Windows and SQL Server.
website: https://www.proffix.ch
status: active

categories: [erp, accounting, payroll]
alternativesTo:
  - id: sap
    note: Comparable to SAP Business One for small companies; Windows-only and aimed at the Swiss market.
  - id: microsoft-dynamics-365
    note: Comparable to Business Central for small companies; Windows-only and aimed at the Swiss market.

audience: [business]
deployment: [on-premises]
platforms: [windows, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: company
    note: >-
      Proffix states that it has its own development department in Switzerland.
      According to the Forterro privacy notice, staff of group subsidiaries in
      India, the United States and Morocco may have read access to data for
      support purposes.
  hosted:
    value: unknown
    note: >-
      Proffix Px5 is installed on the customer's own Windows server or
      workstation, so the customer decides where data is kept. The Proffix
      website describes the software as "100% Swiss made & hosted", but Proffix
      states that it does not offer a native cloud product; remote operation on
      a Windows server is arranged by the customer or by Proffix partners, whose
      data-centre locations are not published by Proffix.

openSource:
  value: no
  basis: inferred
  note: Proprietary licensed software; no source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: unknown
  chfBilling: yes
  startingPrice:
    amount: 62.10
    currency: CHF
    period: month
    note: >-
      Accounting package (financial, debtor and creditor accounting, address
      management), usage fee per user and month with a 12-month contract; VAT
      treatment not stated
  url: https://www.proffix.ch/de/preise
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    Published packages are Buchhaltungspaket (CHF 62.10), Auftragsbearbeitungspaket
    (65.30) and KMU-Paket (CHF 96.30), each per user and month on an annual
    contract. Payroll, CRM, time management, e-banking and other modules are
    priced separately and not listed. An online demo is available.

features:
  api: yes

tags: [erp, accounting, payroll, swissdec, inventory, order-processing, sme, windows]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: Proffix - Business Software für Schweizer KMU
    url: https://www.proffix.ch/de
    publisher: Forterro Schweiz Proffix AG
    kind: vendor
    accessed: 2026-10-15
  - id: company
    title: Unternehmen - Proffix
    url: https://www.proffix.ch/de/unternehmen
    publisher: Forterro Schweiz Proffix AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Preise - Proffix
    url: https://www.proffix.ch/de/preise
    publisher: Forterro Schweiz Proffix AG
    kind: vendor
    accessed: 2026-10-15
  - id: requirements
    title: Minimalanforderungen - Proffix Px5 Hilfe
    url: https://www.proffix.ch/help/px5/minimalanforderungen.html
    publisher: Forterro Schweiz Proffix AG
    kind: documentation
    accessed: 2026-10-15
  - id: api
    title: Drittlösungen und Proffix REST-API - Proffix
    url: https://www.proffix.ch/de/loesung/drittloesungen
    publisher: Forterro Schweiz Proffix AG
    kind: vendor
    accessed: 2026-10-15
  - id: partners
    title: Proffix Partnersystem
    url: https://www.proffix.ch/de/unternehmen/partner
    publisher: Forterro Schweiz Proffix AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Datenschutz - Proffix
    url: https://www.proffix.ch/de/datenschutz
    publisher: Forterro Schweiz Proffix AG
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Windows-basierte ERP-Software für Schweizer KMU, von Buchhaltung und Lohn bis Lagerverwaltung.'
    description: 'Proffix Px5 ist modulare ERP-Software für Schweizer KMU mit Buchhaltung, Lohn, Auftragsbearbeitung und Lagerverwaltung. Sie läuft auf Windows und SQL Server.'
---

Proffix Px5 is modular ERP and business software for small and medium-sized
companies in Switzerland. It covers financial, debtor and creditor accounting,
address management, order processing, article and warehouse management, and
Swissdec-certified payroll, with further modules for CRM, time management,
service management and e-banking. A REST API connects third-party applications
such as web shops, POS systems and document management. Proffix reports around
4,000 customer companies.

The software is installed on Windows (Windows 11 clients, Windows Server 2022
or newer) with a Microsoft SQL Server database. There is no native macOS
version and no native cloud product; Proffix recommends running it as a remote
application on a Windows server for users on macOS, iPadOS or Linux. Sales,
implementation and hosting are largely handled by a network of certified
partners.

Proffix was founded in 2001 and has belonged to the London-based Forterro group
since 2023. Prices are published as monthly per-user fees on an annual contract.
The Proffix website is published in German only.
