---
name: Oniva
aliases: [Zoon, Swisscom Zoon, Oniva Event Software]
company: oniva
tagline: Event management software for invitations, registration, ticketing and check-in.
description: >-
  Oniva is event management software from Dübendorf ZH, formerly Swisscom Zoon,
  for event websites, registration, ticketing and check-in, hosted on Azure in Switzerland.
website: https://www.oniva.events/en
status: active
launched: 2019

categories: [event-management]
alternativesTo:
  - id: cvent
    note: >-
      Covers event websites, registration, guest communication, ticketing and
      check-in; no venue sourcing or hotel booking features are listed.
  - id: eventbrite
    note: >-
      Aimed at organisations running their own corporate events, licensed per
      event or per year; there is no free plan for free events.

audience: [business, enterprise, public-sector]
deployment: [saas]
platforms: [web, ios, android, api]
languages:
  interface: [de, en]

swiss:
  developed:
    value: yes
    basis: inferred
    source: press
    note: >-
      The platform was developed from 2019 at Swisscom Broadcast and has been
      developed further by Oniva in the canton of Zurich since the 2024
      spin-off; the co-founders lead technology and development. The location of
      the development team is not stated in more detail.
  hosted:
    value: yes
    basis: vendor
    source: dpa
    note: >-
      The data processing agreement states that personal data is stored only in
      data centres in Switzerland, on Microsoft Azure in the Switzerland North
      region with a recovery site in Switzerland West. Cloudflare (Germany) is a
      sub-processor for web performance and security; optional AI text
      generation uses Anthropic (US) without access to personal data, according
      to Oniva.
  dataLocations: [CH]
  infrastructure:
    provider: Microsoft Azure
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: dpa
    note: >-
      Enterprise customers can choose a private cloud with a custom hosting
      location.

openSource:
  value: no
  basis: inferred
  source: terms
  note: >-
    No source code of the platform is published; the terms reserve the
    intellectual property rights to Oniva.

pricing:
  model: subscription
  freePlan: no
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 890
    currency: CHF
    period: one-time
    note: Event licence for one event with up to 500 registrations; annual licences for unlimited events start at CHF 3,290 per year
  url: https://www.oniva.events/en/pricing
  checked: 2026-11-02
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: yes
  api: yes
  dataExport: yes

tags:
  [events, event-registration, ticketing, check-in, guest-management, invitations, hybrid-events]
affiliate: null
sponsored: false
added: 2026-11-02
updated: 2026-11-02
lastVerified: 2026-11-02
sources:
  - id: home
    title: Oniva — event management software
    url: https://www.oniva.events/en
    publisher: Oniva AG
    kind: vendor
    accessed: 2026-11-02
  - id: security
    title: Oniva — Security & Compliance
    url: https://www.oniva.events/en/security-compliance
    publisher: Oniva AG
    kind: vendor
    accessed: 2026-11-02
  - id: dpa
    title: Oniva — Data processing agreement and sub-processors
    url: https://www.oniva.events/en/dpa
    publisher: Oniva AG
    kind: vendor
    accessed: 2026-11-02
  - id: pricing
    title: Oniva — Pricing
    url: https://www.oniva.events/en/pricing
    publisher: Oniva AG
    kind: vendor
    accessed: 2026-11-02
  - id: terms
    title: Oniva — Terms and conditions
    url: https://www.oniva.events/en/terms-conditions
    publisher: Oniva AG
    kind: vendor
    accessed: 2026-11-02
  - id: press
    title: Aus der Eventmanagement-Software von Swisscom wird ein Start-up
    url: https://www.netzwoche.ch/news/2024-03-05/aus-der-eventmanagement-software-von-swisscom-wird-ein-start-up
    publisher: Netzwoche
    kind: press
    accessed: 2026-11-02
  - id: swissmadesoftware
    title: Oniva AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/oniva-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-02
i18n:
  de:
    tagline: 'Eventmanagement-Software für Einladungen, Anmeldung, Ticketing und Check-in.'
    description: 'Oniva ist Eventmanagement-Software aus Dübendorf ZH, früher Swisscom Zoon, für Event-Websites, Anmeldung, Ticketing und Check-in, gehostet auf Azure in der Schweiz.'
    notes:
      swiss.developed.note: 'Die Plattform wurde ab 2019 bei Swisscom Broadcast entwickelt und wird seit der Ausgründung 2024 von Oniva im Kanton Zürich weiterentwickelt; die Mitgründer leiten Technologie und Entwicklung. Der Standort des Entwicklungsteams wird nicht näher angegeben.'
      swiss.hosted.note: 'Gemäss Auftragsverarbeitungsvertrag werden Personendaten nur in Rechenzentren in der Schweiz gespeichert, auf Microsoft Azure in der Region Switzerland North mit einem Ausweichstandort in Switzerland West. Cloudflare (Deutschland) ist Unterauftragsbearbeiter für Web-Performance und Sicherheit; die optionale KI-Textgenerierung nutzt laut Oniva Anthropic (USA) ohne Zugriff auf Personendaten.'
      swiss.infrastructure.note: 'Enterprise-Kundschaft kann eine Private Cloud mit eigenem Hosting-Standort wählen.'
      openSource.note: 'Von der Plattform wird kein Quellcode veröffentlicht; die AGB behalten die Immaterialgüterrechte Oniva vor.'
      pricing.startingPrice.note: 'Eventlizenz für einen Anlass mit bis zu 500 Anmeldungen; Jahreslizenzen für unbegrenzt viele Anlässe ab CHF 3290 pro Jahr'
      alternativesTo.cvent.note: 'Deckt Event-Websites, Anmeldung, Gästekommunikation, Ticketing und Check-in ab; Funktionen für die Suche nach Veranstaltungsorten oder Hotelbuchungen werden nicht aufgeführt.'
      alternativesTo.eventbrite.note: 'Auf Organisationen ausgerichtet, die eigene Firmenanlässe durchführen, lizenziert pro Anlass oder pro Jahr; für kostenlose Anlässe gibt es keinen Gratis-Plan.'
---

Oniva is browser-based software for organisations that run their own events,
such as conferences, marketing and employee events, trainings and company
anniversaries. It covers event websites with the organiser's branding,
registration with configurable logic, guest and contact management, email and
SMS invitations, paid ticketing, check-in with a mobile app, links to
streaming platforms for hybrid events, and reporting. Personal data can be
anonymised after an event, and AI-assisted text generation and translation are
optional.

The platform was built from 2019 by Swisscom Broadcast under the name Zoon and
was spun off in March 2024 as Oniva AG, led by members of the former Zoon team.
Oniva states that it runs on Microsoft Azure in the Switzerland North region,
with a recovery site in Switzerland West; Cloudflare is used for web
performance and security.

Licences are sold per event, from CHF 890 for up to 500 registrations, or per
year for unlimited events, from CHF 3,290. Single sign-on and API integrations
are included from the Premium plan; Enterprise adds a private cloud with a
custom hosting location.
