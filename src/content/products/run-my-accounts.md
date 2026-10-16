---
name: Run my Accounts
aliases: [RunMyAccounts, RMA]
company: suiteify-service
tagline: Outsourced online bookkeeping for Swiss SMEs, combined with its own accounting software.
description: >-
  Run my Accounts is an outsourced online bookkeeping service for Swiss SMEs,
  combining accounting and invoicing software with bookkeeping done by its team.
website: https://www.runmyaccounts.ch
status: active

categories: [accounting, invoicing]
alternativesTo:
  - id: quickbooks
    note: Sold as a bookkeeping service with software included; new customers cannot buy the software alone.
  - id: xero
    note: Sold as a bookkeeping service with software included; new customers cannot buy the software alone.

audience: [business]
deployment: [saas]
platforms: [web, ios, android, api]

swiss:
  developed:
    value: unknown
    note: >-
      The team page lists a development team but not its location. The
      open-source accounting core is published in the GitHub account
      ledger123 as "SQL-Ledger customizations by Run My Accounts".
  hosted:
    value: yes
    basis: vendor
    source: software
    note: >-
      Run my Accounts states that data is kept in Switzerland, in data centres
      in Bern at two locations. The data-centre operator is not named. The
      privacy policy says personal data is generally processed in Switzerland
      but may also be disclosed abroad; website tools such as HubSpot and
      Google Analytics involve US providers.
  dataLocations: [CH]

openSource:
  value: partial
  license: GPL-2.0
  repository: https://github.com/ledger123/runmyaccounts
  basis: vendor
  source: download
  note: >-
    Run my Accounts states that its accounting software is published as source
    code under the GPL and can be installed by customers who want to keep
    their data independently; it is based on SQL-Ledger. Run my Accounts does
    not support self-hosted installations. Components of the hosted service,
    such as receipt recognition, are not described as open source.

pricing:
  model: usage-based
  freePlan: no
  freeTrial: unknown
  chfBilling: yes
  startingPrice:
    amount: 1.80
    currency: CHF
    period: usage
    note: >-
      Package S: no monthly base fee, CHF 1.80 per processed item (receipt,
      additional line, payment, upload, bank booking), excl. VAT
  url: https://www.runmyaccounts.ch/preis-buchhaltung/
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    Package M costs CHF 35 per month plus CHF 1.40 per item, package L CHF 290
    per month plus CHF 0.95 per item. Self-entered debtor documents and QR
    payment receipts are free. The software plans (Startup free, KMU CHF 25 per
    month plus CHF 10 per user) are only offered to new customers together
    with services. Prices exclude VAT; packages can be changed monthly.

features:
  api: yes
  dataExport: yes

tags: [accounting, bookkeeping, invoicing, outsourcing, treuhand, qr-bill, sme]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: Run my Accounts - Der ausgelagerte Online-Buchhaltungs-Service
    url: https://www.runmyaccounts.ch/
    publisher: Suiteify Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: software
    title: Online-Buchhaltungs-Software - Run my Accounts
    url: https://www.runmyaccounts.ch/online-buchhaltungs-software/
    publisher: Suiteify Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Preise Buchhaltung - Run my Accounts
    url: https://www.runmyaccounts.ch/preis-buchhaltung/
    publisher: Suiteify Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: download
    title: Run my Accounts Online-Buchhaltungs-Software downloaden
    url: https://www.runmyaccounts.ch/support-artikel/run-my-accounts-online-buchhaltungs-software-downloaden/
    publisher: Suiteify Service AG
    kind: documentation
    accessed: 2026-10-15
  - id: repository
    title: ledger123/runmyaccounts - SQL-Ledger customizations by Run My Accounts
    url: https://github.com/ledger123/runmyaccounts
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
  - id: privacy
    title: Datenschutzerklärung - Run my Accounts
    url: https://www.runmyaccounts.ch/datenschutzerklaerung/
    publisher: Suiteify Service AG
    kind: vendor
    accessed: 2026-10-15
  - id: team
    title: Über uns - Run my Accounts
    url: https://www.runmyaccounts.ch/ueber-uns/
    publisher: Suiteify Service AG
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Ausgelagerte Online-Buchhaltung für Schweizer KMU, kombiniert mit eigener Buchhaltungssoftware.'
    description: 'Run my Accounts ist ein Dienst für ausgelagerte Online-Buchhaltung für Schweizer KMU, der Buchhaltungs- und Rechnungssoftware mit Buchführung durch das eigene Team kombiniert.'
---

Run my Accounts combines online accounting software with an outsourced
bookkeeping service for small and medium-sized businesses in Switzerland. The
software covers financial accounting with cost centres and projects, customer
invoicing with quotes, QR-bills and dunning, automated capture and payment of
supplier invoices, bank synchronisation and a digital archive. An expense app,
a REST API and a Zapier connection are included. The company's own staff handle
the ongoing bookkeeping; fiduciary services such as payroll, VAT returns and
year-end accounts are also offered.

Pricing is mainly usage-based: a monthly package fee plus a fee per processed
item. New customers can only obtain the software together with bookkeeping
services. Run my Accounts states that customer data
is kept in two data centres in Bern; the operator is not named.

The accounting core is based on SQL-Ledger and published under the GPL, so
customers can export their database and run the software themselves without
support from Run my Accounts. Run my Accounts AG was acquired by the Austrian
Infoniqa group in 2021; in 2026 the operating company was renamed Suiteify
Service AG as the group adopted the Suiteify name.
