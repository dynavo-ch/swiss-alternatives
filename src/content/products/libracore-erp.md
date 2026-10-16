---
name: libracore ERP
aliases: [ERPNextSwiss, libracore business software]
company: libracore
tagline: Open-source ERPNext with Swiss localisation, implemented and hosted by libracore.
description: >-
  libracore ERP is the open-source ERPNext system with libracore's ERPNextSwiss
  extension, run on premises or hosted by libracore AG of Bauma ZH.
website: https://www.libracore.com/erpnextswiss/
status: active

categories: [erp, accounting, crm]
alternativesTo:
  - id: sap
    note: >-
      Based on open-source ERPNext without licence fees; libracore charges for
      implementation, hosting and support.
  - id: microsoft-dynamics-365
    note: >-
      Based on open-source ERPNext without licence fees; libracore charges for
      implementation, hosting and support.

audience: [business]
deployment: [on-premises, managed]
platforms: [web]

swiss:
  developed:
    value: partial
    basis: vendor
    source: erpnextswiss
    note: >-
      libracore develops the ERPNextSwiss and ERPNextAustria extensions and
      customer-specific adaptations; its GitHub organisation gives Switzerland
      as its location. The ERPNext application itself and the underlying Frappe
      framework are developed by Frappe Technologies, based in India, and an
      open-source community.
  hosted:
    value: optional
    basis: inferred
    source: swissmadesoftware
    note: >-
      libracore offers ERPNextSwiss on premises or as a hosted solution but does
      not state on its website where hosted instances run or who operates the
      servers. Its swiss made software profile carries the swiss hosting label,
      which promises that hosted data is accessible only under Swiss
      jurisdiction. For on-premises installations the customer decides where
      data is kept.

openSource:
  value: yes
  license: AGPL-3.0, GPL-3.0
  repository: https://github.com/libracore/erpnextswiss
  basis: verified
  source: github
  note: >-
    ERPNextSwiss is published under the AGPL-3.0; ERPNext, on which it builds,
    is published by Frappe under the GPL-3.0.

pricing:
  model: quote
  url: https://www.libracore.com/
  checked: 2026-10-16
  basis: vendor
  source: website
  note: >-
    No public price list. libracore states that there are no licence or
    per-user fees and charges for configuration, implementation, training,
    support and hosting. ERPNext and ERPNextSwiss can also be installed free of
    charge under their open-source licences.

tags: [erpnext, frappe, open-source, qr-bill, sme, implementation-partner]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: libracore AG - Ihr ERPNext Implementationspartner
    url: https://www.libracore.com/
    publisher: libracore AG
    kind: vendor
    accessed: 2026-10-16
  - id: erpnextswiss
    title: ERPNextSwiss - Individuelle ERP-Lösung ohne Lizenzkosten
    url: https://www.libracore.com/erpnextswiss/
    publisher: libracore AG
    kind: vendor
    accessed: 2026-10-16
  - id: ai
    title: Digitale Datensouveränität mit KI
    url: https://www.libracore.com/2026/09/09/digitale-datensouveraenitaet-mit-und-trotz-ki/
    publisher: libracore AG
    kind: vendor
    accessed: 2026-10-16
  - id: github
    title: libracore/erpnextswiss — ERPNext application for Switzerland-specific use cases
    url: https://github.com/libracore/erpnextswiss
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-16
  - id: github-erpnext
    title: frappe/erpnext
    url: https://github.com/frappe/erpnext
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: libracore AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/libracore-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Open-Source-ERPNext mit Schweizer Lokalisierung, eingeführt und gehostet von libracore.'
    description: 'libracore ERP ist das Open-Source-System ERPNext mit der Erweiterung ERPNextSwiss von libracore, betrieben On-Premises oder gehostet von der libracore AG aus Bauma ZH.'
---

libracore ERP is the open-source ERP system ERPNext as implemented and extended
by libracore AG. ERPNext covers financial accounting, sales and CRM, projects,
inventory, HR and an integrated web shop. libracore's ERPNextSwiss app adds
Swiss requirements such as QR-bills, which it has supported since mid-2018, and
payroll structures following Swiss rules. libracore also maintains ERPNextAustria
and a WooCommerce connector.

The system is offered on premises or as a hosted solution. libracore configures
ERPNext to each customer's processes, builds interfaces to systems such as
WooCommerce, Mailchimp, Abacus, the Swiss tax administration (ESTV) and the EU
VAT check (VIES), and provides training and support. It is also introducing an
AI agent for tasks such as reading invoices, offered self-hosted or as a managed
service. libracore does not state on its website where hosted instances run.

There are no licence or per-user fees; libracore charges for its services and
does not publish prices. ERPNextSwiss is available on GitHub under the
AGPL-3.0, so the software can also be run without libracore.
