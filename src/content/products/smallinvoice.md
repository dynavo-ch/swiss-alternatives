---
name: smallinvoice
aliases: [small invoice]
company: lourens-systems
tagline: Online invoicing with contact management, time tracking and QR-bills for small businesses.
description: >-
  smallinvoice is an online invoicing and CRM service from Zurich with QR-bills,
  quotes, reminders, time tracking and accounting exports, plus a free plan.
website: https://www.smallinvoice.ch
status: active

categories: [invoicing, crm]
alternativesTo:
  - id: freshbooks
    note: No full accounting module; bookkeeping data is exported to accounting software such as Banana or Topal.

audience: [business]
deployment: [saas]
platforms: [web, api]

swiss:
  developed:
    value: unknown
    note: >-
      Developed by Lourens Systems GmbH, a small Zurich-based company. It does
      not publish where its developers work; one of its two managing directors
      is registered as resident in Warsaw, and its EU data-protection
      representative is also based there.
  hosted:
    value: yes
    basis: vendor
    source: home
    note: >-
      smallinvoice states that customer data is processed exclusively in
      Switzerland. Its published subcontractor list (version of April 2019)
      also names US providers for support tickets, transactional e-mail and
      SMS notifications, which receive the data needed for those functions.
  dataLocations: [CH]
  infrastructure:
    provider: Several Swiss hosting providers (cloudscale.ch, Akenes/Exoscale, Hostpoint, Swisscom, VSHN)
    providerCountry: CH
    type: mixed
    swissOwned: partial
    basis: vendor
    source: subcontractors
    note: >-
      The subcontractor list dated 1 April 2019 names cloudscale.ch AG, Akenes
      SA (Exoscale), Hostpoint AG, Swisscom (Schweiz) AG and VSHN AG for
      hosting, storage and monitoring without saying which provider hosts what.
      Exoscale belongs to the Austrian A1 Telekom Austria Group; the others are
      Swiss owned. The list may be out of date.

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
    amount: 15
    currency: CHF
    period: month
    note: Starter plan with 1 user, billed monthly in arrears; EUR 13 when billed in euros
  url: https://www.smallinvoice.ch/de/preise
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    The free plan is limited to one user and one layout, has no API access, and
    can be used until the totals of all documents reach 70,000. Professional
    (3 users) costs CHF 30 and Business (5 users) CHF 45 per month; extra users
    cost CHF 10 per month each. Paid features can be tested for 30 days. The
    pricing page does not say whether prices include VAT.

features:
  api: yes
  encryptionInTransit: yes

tags: [invoicing, crm, qr-bill, time-tracking, quotes, sme]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: smallinvoice - Rechnungsprogramm für KMU
    url: https://www.smallinvoice.ch/de/
    publisher: Lourens Systems GmbH
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Preise - smallinvoice
    url: https://www.smallinvoice.ch/de/preise
    publisher: Lourens Systems GmbH
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Datenschutzerklärung Lourens Systems (version 1.01)
    url: https://www.smallinvoice.ch/datenschutz/04_PrivacyPolicy_LourensSystems_de.pdf
    publisher: Lourens Systems GmbH
    kind: vendor
    accessed: 2026-10-15
  - id: subcontractors
    title: smallinvoice subcontractor list (version 1.01, 1 April 2019)
    url: https://www.smallinvoice.ch/subcontractors/06_SubcontractorList_smallinvoice_de.pdf
    publisher: Lourens Systems GmbH
    kind: vendor
    accessed: 2026-10-15
  - id: imprint
    title: Impressum - smallinvoice
    url: https://www.smallinvoice.ch/de/impressum
    publisher: Lourens Systems GmbH
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Online-Rechnungsstellung mit Kontaktverwaltung, Zeiterfassung und QR-Rechnungen für kleine Unternehmen.'
    description: 'smallinvoice ist ein Dienst für Online-Rechnungsstellung und CRM aus Zürich mit QR-Rechnungen, Offerten, Mahnungen, Zeiterfassung und Buchhaltungsexporten sowie einem kostenlosen Plan.'
    notes:
      swiss.developed.note: 'Entwickelt von der Lourens Systems GmbH, einem kleinen Unternehmen mit Sitz in Zürich. Es veröffentlicht nicht, wo seine Entwickler arbeiten; einer seiner beiden Geschäftsführer ist mit Wohnsitz in Warschau eingetragen, und auch sein EU-Datenschutzvertreter hat dort seinen Sitz.'
      swiss.hosted.note: 'smallinvoice gibt an, dass Kundendaten ausschliesslich in der Schweiz verarbeitet werden. Die veröffentlichte Liste der Unterauftragnehmer (Stand April 2019) nennt zudem US-Anbieter für Support-Tickets, transaktionale E-Mails und SMS-Benachrichtigungen, welche die für diese Funktionen nötigen Daten erhalten.'
      swiss.infrastructure.note: 'Die Liste der Unterauftragnehmer vom 1. April 2019 nennt die cloudscale.ch AG, Akenes SA (Exoscale), Hostpoint AG, Swisscom (Schweiz) AG und VSHN AG für Hosting, Speicher und Monitoring, ohne anzugeben, welcher Anbieter was hostet. Exoscale gehört zur österreichischen A1 Telekom Austria Group; die anderen sind in Schweizer Besitz. Die Liste ist möglicherweise veraltet.'
      openSource.note: 'Proprietärer Cloud-Dienst; es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Starter-Plan mit 1 Benutzer, monatlich nachschüssig abgerechnet; EUR 13 bei Abrechnung in Euro'
      alternativesTo.freshbooks.note: 'Kein vollständiges Buchhaltungsmodul; Buchungsdaten werden in Buchhaltungssoftware wie Banana oder Topal exportiert.'
---

smallinvoice is a web-based invoicing service for small businesses. It
creates quotes, order confirmations, delivery notes, invoices with Swiss
QR-bills and reminders, which can be sent by e-mail or through an integrated
postal dispatch service. Contact management, time tracking, projects, a
creditor module for expenses and e-banking payment orders, and bank payment
matching are included. Documents can be issued in several languages and
currencies, and a public API is available on the paid plans.

smallinvoice does not include full double-entry bookkeeping. Accounting data
can be exported to accounting software such as INFONIQA ONE 50, Banana and
Topal. The service is developed and operated by Lourens Systems GmbH in Zurich,
a small company owned by its two managing directors.

According to smallinvoice, customer data is processed only in Switzerland. Its
published subcontractor list dates from 2019 and names several Swiss hosting
providers, along with US services used for support, e-mail and SMS
notifications. The free plan has no time limit but ends once document totals
reach 70,000; paid plans are billed monthly in CHF or EUR.
