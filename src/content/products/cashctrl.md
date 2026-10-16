---
name: CashCtrl
aliases: [CashCtrl FREE, CashCtrl PRO, CashCtrl FL4T]
company: cashctrl
tagline: Cloud accounting and business software with a free plan, hosted in Switzerland.
description: >-
  CashCtrl is cloud accounting software from Münchenstein with order processing,
  payroll and multi-client support, a free plan and data hosted in Switzerland.
website: https://cashctrl.com
status: active

categories: [accounting, invoicing, erp, payroll]
alternativesTo:
  - id: quickbooks
    note: Built around Swiss accounting practice and QR-bills; free plan for one user and one organisation.
  - id: xero
    note: Built around Swiss accounting practice and QR-bills; free plan for one user and one organisation.

audience: [business]
deployment: [saas]
platforms: [web, api]
languages:
  interface: [en, de]

swiss:
  developed:
    value: yes
    basis: vendor
    source: faq
    note: >-
      CashCtrl states that all development is done in-house and that the
      service is developed and operated exclusively in Switzerland.
  hosted:
    value: yes
    basis: vendor
    source: faq
    note: >-
      According to CashCtrl, data is stored exclusively on servers in
      Switzerland, and backups and uploaded files also remain in Swiss data
      centres. The hosting provider is not named. Website analytics use a
      self-hosted Matomo instance in Switzerland.
  dataLocations: [CH]

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
    amount: 350
    currency: CHF
    period: year
    note: >-
      CashCtrl PRO with 3 users/employees, 2 organisations and 1 GB storage,
      prepaid for one year, incl. VAT; additional users CHF 80 and
      organisations CHF 40 per year
  url: https://cashctrl.com/en/info/plans
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    CashCtrl FREE is limited to 1 user and 1 organisation. PRO can also be
    prepaid for six months (CHF 195) or two years (CHF 650); FL4T costs CHF
    3,900 per year. Plans do not renew automatically. Prices are also published
    in EUR and USD. A 30-day PRO demo is available. Support is by e-mail only.

features:
  encryptionInTransit: yes
  mfa: yes
  api: yes

tags:
  [accounting, invoicing, payroll, order-processing, qr-bill, sme, associations, fiduciaries, free]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: pricing
    title: Price plans - CashCtrl
    url: https://cashctrl.com/en/info/plans
    publisher: CashCtrl AG
    kind: vendor
    accessed: 2026-10-16
  - id: faq
    title: FAQ - CashCtrl
    url: https://cashctrl.com/en/help/faq
    publisher: CashCtrl AG
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: About us - CashCtrl
    url: https://cashctrl.com/en/about
    publisher: CashCtrl AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Privacy policy - CashCtrl
    url: https://cashctrl.com/en/about/privacy
    publisher: CashCtrl AG
    kind: vendor
    accessed: 2026-10-16
  - id: api
    title: API & Scripts - CashCtrl
    url: https://cashctrl.com/en/help/api
    publisher: CashCtrl AG
    kind: documentation
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: CashCtrl AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/cashctrl-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
---

CashCtrl is a browser-based accounting and business software for self-employed
people, SMEs, associations and fiduciaries. The free version covers financial
accounting, debtors and creditors with QR-bills, address management, articles
and fixed assets, and reports for one user and one organisation. The PRO plan
adds multiple organisations and users, order processing, payroll accounting,
cost centres, foreign currencies, custom layouts and fields, ISO 20022 bank
statement import and API access.

CashCtrl runs only as a cloud service and supports current desktop browsers;
mobile browsers are not officially supported. The interface is available in
English and German, while documents and reports can be produced in English,
French, German and Italian. Accounts can be protected with two-factor
authentication or passkeys.

Paid plans are prepaid for six months, one or two years and do not renew
automatically. CashCtrl states that its data stays in Switzerland and that it
uses no third-party trackers apart from a self-hosted Matomo instance. As of
mid-2022, the company reported around 3,500 active users.
