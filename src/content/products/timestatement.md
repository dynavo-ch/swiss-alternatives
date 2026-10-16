---
name: TimeStatement
company: timestatement
tagline: Working-time and project time tracking with absences, expenses and invoicing.
description: >-
  TimeStatement is a cloud time-tracking service from Baar for working hours,
  projects, absences and expenses, with invoicing and a free single-user plan.
website: https://timestatement.com/schweiz
status: active

categories: [time-tracking, invoicing]
alternativesTo:
  - id: toggl
    note: Adds Swiss working-time compliance, absence management and invoicing with QR-bills.
  - id: harvest
    note: Adds Swiss working-time compliance, absence management and integrations with Swiss accounting software.
  - id: clockify
    note: Adds Swiss working-time compliance, absence management and integrations with Swiss accounting software.

audience: [business]
deployment: [saas, self-hosted]
platforms: [web, ios, android]

swiss:
  developed:
    value: unknown
    note: >-
      TimeStatement AG describes itself as a Swiss provider and developer of
      time-tracking software but does not say where its development team works.
  hosted:
    value: partial
    basis: vendor
    source: pricing
    note: >-
      Recorded as partly because the international offering is hosted in the EU. The Swiss pricing page lists "hosted in Switzerland" for all plans, and
      the swiss made software profile adds that other locations are available
      on request; the international website states hosting in the EU. The
      hosting provider is not named. The privacy policy says service providers
      such as Microsoft, Amazon and Google may be located elsewhere in Europe
      or in the USA.
  dataLocations: [CH]

openSource:
  value: no
  basis: inferred
  note: Proprietary software; no source code is published.

pricing:
  model: freemium
  freePlan: yes
  chfBilling: yes
  startingPrice:
    amount: 3.50
    currency: CHF
    period: month
    note: Starter plan, per user per month with annual billing; CHF 5.90 with monthly billing
  url: https://timestatement.com/schweiz/preise
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    The free plan is limited to 1 user, 2 projects and 200 MB of storage. Pro
    costs CHF 10 per user per month with annual billing (CHF 15 monthly) and
    adds project time tracking, expenses and invoicing. VAT treatment is not
    stated. A self-hosted installation is offered on request.

features:
  encryptionInTransit: yes

tags: [time-tracking, timesheets, absence-management, expenses, invoicing, bexio, abacus, terminal]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: pricing
    title: Zeiterfassung Preisübersicht - TimeStatement Schweiz
    url: https://timestatement.com/schweiz/preise
    publisher: TimeStatement AG
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: Über uns - TimeStatement Schweiz
    url: https://timestatement.com/schweiz/ueber-uns
    publisher: TimeStatement AG
    kind: vendor
    accessed: 2026-10-16
  - id: home-international
    title: TimeStatement - time tracking software
    url: https://timestatement.com/
    publisher: TimeStatement AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutzerklärung TimeStatement AG (version of 31 December 2024)
    url: https://timestatement.com/public/datenschutzerklaerung.pdf
    publisher: TimeStatement AG
    kind: vendor
    accessed: 2026-10-16
  - id: ios-app
    title: TimeStatement Mobile - App Store
    url: https://apps.apple.com/app/timestatement-mobile/id1488943863
    publisher: Apple
    kind: vendor
    accessed: 2026-10-16
  - id: android-app
    title: TimeStatement - Google Play
    url: https://play.google.com/store/apps/details?id=com.ts.timestatement
    publisher: Google
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: TimeStatement AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/timestatement-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Arbeits- und Projektzeiterfassung mit Absenzen, Spesen und Rechnungsstellung.'
    description: 'TimeStatement ist ein Cloud-Dienst zur Zeiterfassung aus Baar für Arbeitszeiten, Projekte, Absenzen und Spesen, mit Rechnungsstellung und kostenlosem Plan für Einzelnutzer.'
---

TimeStatement is a cloud service for recording working hours, project time
and services. The vendor says it meets the Swiss working-time recording
obligation, tracking target and actual hours, overtime and flexitime. It
includes absence and
holiday management with approval workflows and a team calendar. The Pro plan
adds expense tracking and invoicing from recorded time, with multilingual
invoices, several currencies and Swiss QR-bills.

Time can be recorded in the browser, in the iOS and Android apps or on a
time-clock terminal. Integrations exist for Swiss business software such as
bexio, Abacus, Run my Accounts and Infoniqa ONE 50, as well as DATEV.
According to its swiss made software profile, the service is built with
React, Node.js and C#.

TimeStatement AG was founded in Baar in 2017. Plans are priced per user in
CHF, and a free plan is available for single freelancers. For companies that
need to run the software in-house, a self-hosted version is offered on request.
