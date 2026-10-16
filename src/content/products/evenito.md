---
name: evenito
aliases: [Evenito Event Management, evenito Ticketing]
company: evenito
tagline: Event management software for invitations, registration, ticketing and check-in.
description: >-
  evenito is event management software from Zurich for corporate event teams,
  covering invitations, registration, ticketing, check-in and online events.
website: https://evenito.com
status: active

categories: [event-management]
alternativesTo:
  - id: cvent
    note: >-
      Covers guest management, event websites, email invitations, ticketing,
      check-in and virtual events, but no venue sourcing or hotel booking
      features are listed.
  - id: eventbrite
    note: >-
      Aimed at companies running invitation-based corporate events, with
      guest groups, CRM integration and sponsor quotas; tickets are sold
      through the organiser's own event pages, and there is no free plan.

audience: [business, enterprise]
deployment: [saas]
platforms: [web, ios, android, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: security
    note: >-
      evenito describes itself as a Swiss tech company and its platform as
      software developed in Switzerland. The company also has an office in
      Hamburg.
  hosted:
    value: yes
    basis: vendor
    source: security
    note: >-
      evenito states that the platform runs on Google Cloud infrastructure and
      that guest data is stored in Switzerland; the swiss made software profile
      also lists the products as hosted in Switzerland. Card payments are
      processed by Datatrans, and evenito states that it does not store card
      data itself.
  dataLocations: [CH]
  infrastructure:
    provider: Google Cloud Platform
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: security

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  chfBilling: unknown
  url: https://evenito.com/en/preise
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Plans (Starter, Professional, Premium, Enterprise) are tiered by events and
    registrations per year; prices are not published on the pricing page.

features:
  sso: yes
  api: yes

certifications: [iso-27001]

tags:
  [event-registration, guest-management, ticketing, check-in, virtual-events, badges, twint, saml]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: evenito - event management software
    url: https://evenito.com/en
    publisher: Evenito AG
    kind: vendor
    accessed: 2026-10-16
  - id: security
    title: Security - evenito
    url: https://evenito.com/en/produkt/security
    publisher: Evenito AG
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Price overview - evenito
    url: https://evenito.com/en/preise
    publisher: Evenito AG
    kind: vendor
    accessed: 2026-10-16
  - id: integrations
    title: Integrations - evenito
    url: https://evenito.com/en/integrations
    publisher: Evenito AG
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: About us - evenito
    url: https://evenito.com/en/unternehmen/about-us
    publisher: Evenito AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Evenito AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/evenito-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Eventmanagement-Software für Einladungen, Anmeldung, Ticketing und Check-in.'
    description: 'evenito ist Eventmanagement-Software aus Zürich für Corporate-Event-Teams, mit Einladungen, Anmeldung, Ticketing, Check-in und Online-Events.'
---

evenito is an event management platform developed by Evenito AG in Zurich for
companies that run many in-person, virtual or hybrid events, such as customer
events, sponsorship hospitality, conferences and internal events. It covers
guest lists and groups, email invitations built with a drag-and-drop editor,
branded event websites in several languages, registration forms with
waitlists, ticketing with quota management and online payment, a check-in app
for iOS and Android with badge printing, a virtual event platform with Q&A and
polls, and reporting.

The platform has a documented API and integrations with CRM systems such as
Salesforce, HubSpot and Microsoft Dynamics 365, and supports single sign-on
via SAML 2.0. evenito
states that it runs on Google Cloud infrastructure with guest data stored in
Switzerland, that it holds ISO/IEC 27001 certification, and that card payments
are handled by the PCI DSS-certified provider Datatrans.

Plans are tiered by the number of events and registrations per year, from
Starter (up to five events and 500 registrations) to Enterprise. Prices are not
published on the pricing page; evenito offers demos and consultations.
