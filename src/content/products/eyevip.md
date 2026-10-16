---
name: eyevip
aliases: [eyeVIP, eyevip Event Management]
company: eyevip
tagline: Invitation and guest management software for corporate events, with check-in app.
description: >-
  eyevip is event management software from Zurich for invitations, registration,
  guest lists and check-in, hosted in data centres in Switzerland.
website: https://www.eyevip.com
status: active

categories: [event-management]
alternativesTo:
  - id: cvent
    note: >-
      Focused on invitation-based events, guest lists, registration pages and
      check-in; no venue sourcing or hotel booking features are listed.
  - id: eventbrite
    note: >-
      Aimed at organisations managing invited guests rather than public ticket
      sales; plans are annual subscriptions with a one-off setup fee.

audience: [business, enterprise]
deployment: [saas, on-premises]
platforms: [web, ios, android]

swiss:
  developed:
    value: yes
    basis: vendor
    source: swissmadesoftware
    note: >-
      eyevip holds the swiss made software label, and its member profile states
      that the eyevip team develops the platform. The product was originally
      developed by the Swiss software company .eyecatcher AG and spun off in 2016.
  hosted:
    value: yes
    basis: vendor
    source: infrastructure
    note: >-
      eyevip states that customer data is stored encrypted in two geo-redundant,
      ISO 27001-certified data centres in Switzerland (Interxion in Glattbrugg
      and Equinix in Oberengstringen) and does not leave Switzerland. An EU
      server or on-premises installation is available on request.
  dataLocations: [CH]
  infrastructure:
    type: unknown
    swissOwned: unknown
    facility: Interxion (Digital Realty), Glattbrugg, and Equinix, Oberengstringen
    basis: vendor
    source: infrastructure
    note: >-
      eyevip names the two data-centre facilities but not who operates the
      servers. Both facility operators are US-owned.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: subscription
  freePlan: no
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 99
    currency: CHF
    period: month
    note: Newcomer plan, 500 invitations per year, plus a one-off setup fee of CHF 590
  url: https://eyevip.com/en/pricing
  checked: 2026-10-16
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  sso: yes

tags: [event-registration, guest-management, invitations, check-in, virtual-events]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: infrastructure
    title: Infrastruktur & Sicherheit - eyevip
    url: https://eyevip.com/de/infrastruktur
    publisher: eyevip cloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: faq
    title: Questions & Answers - eyevip
    url: https://eyevip.com/en/faq
    publisher: eyevip cloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Pricing - eyevip
    url: https://eyevip.com/en/pricing
    publisher: eyevip cloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Privacy Policy - eyevip
    url: https://eyevip.com/en/dataprotection
    publisher: eyevip cloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: eyevip cloud AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/eyevip-cloud-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Einladungs- und Gästemanagement-Software für Firmenanlässe, mit Check-in-App.'
    description: 'eyevip ist Eventmanagement-Software aus Zürich für Einladungen, Anmeldung, Gästelisten und Check-in, gehostet in Rechenzentren in der Schweiz.'
    notes:
      swiss.developed.note: 'eyevip trägt das Label swiss made software, und sein Mitgliederprofil gibt an, dass das eyevip-Team die Plattform entwickelt. Das Produkt wurde ursprünglich von der Schweizer Softwarefirma .eyecatcher AG entwickelt und 2016 ausgegliedert.'
      swiss.hosted.note: 'eyevip gibt an, dass Kundendaten verschlüsselt in zwei georedundanten, nach ISO 27001 zertifizierten Rechenzentren in der Schweiz (Interxion in Glattbrugg und Equinix in Oberengstringen) gespeichert werden und die Schweiz nicht verlassen. Auf Wunsch sind ein EU-Server oder eine On-Premises-Installation möglich.'
      swiss.infrastructure.note: 'eyevip nennt die beiden Rechenzentren, aber nicht, wer die Server betreibt. Beide Rechenzentrumsbetreiber sind in US-Besitz.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Newcomer-Plan, 500 Einladungen pro Jahr, zuzüglich einer einmaligen Einrichtungsgebühr von CHF 590'
      alternativesTo.cvent.note: 'Ausgerichtet auf Anlässe mit Einladung, Gästelisten, Anmeldeseiten und Check-in; Funktionen für Location-Suche oder Hotelbuchung sind nicht aufgeführt.'
      alternativesTo.eventbrite.note: 'Richtet sich an Organisationen, die eingeladene Gäste verwalten, statt an öffentlichen Ticketverkauf; die Pläne sind Jahresabonnements mit einmaliger Einrichtungsgebühr.'
---

eyevip is an event management platform for organisations that invite guests
to customer events, conferences, internal events and webinars. It covers guest
lists, email invitations and landing pages built with an editor, registration
forms, event series, tickets with QR codes, a check-in app for iOS and Android,
virtual events and reporting. Single sign-on via ADFS, OAuth 2.0 or OpenID is
supported for staff accounts.

eyevip states that customer data is stored encrypted in two geo-redundant data
centres in Switzerland, operated by Interxion (Digital Realty) in Glattbrugg and
Equinix in Oberengstringen; it does not say who runs the servers there. An EU
server is offered on request, and an Enterprise edition can be delivered as a
container for operation on the customer's own Kubernetes or OpenShift platform.
The website uses US services such as HubSpot and Google Analytics.

Plans are priced in CHF and tiered by the number of invitations per year and
users, starting at CHF 99 per month for 500 invitations, plus a one-off setup
and onboarding fee. Subscriptions run for twelve months.
