---
name: Webling
aliases: [Webling Vereinssoftware, webling.eu]
company: usystems
tagline: Association software for membership records, dues, accounting and a member portal.
description: >-
  Webling is cloud software for clubs and associations from uSystems in
  Winterthur, covering members, dues, accounting and a member portal, on own servers in Switzerland.
website: https://www.webling.ch
status: active

categories: [accounting, crm]
alternativesTo:
  - id: wildapricot
    note: >-
      Includes double-entry association accounting; priced by number of
      members, with unlimited users on every plan.

audience: [consumer, business]
deployment: [saas]
platforms: [web, api]
languages:
  interface: [de, fr, en, it]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      uSystems states that Webling is developed, supported and sold by its team
      in Winterthur and that programming and support are not outsourced.
  hosted:
    value: yes
    basis: vendor
    source: about
    note: >-
      uSystems states that association data is kept on its own servers in a
      secure data centre in Switzerland. The data-centre operator is not named.
  dataLocations: [CH]
  infrastructure:
    provider: uSystems GmbH (own servers)
    providerCountry: CH
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: pricing
    note: The data centre that houses the servers is not named.

openSource:
  value: no
  basis: vendor
  source: about
  note: >-
    Webling itself is proprietary; uSystems publishes smaller tools such as a
    WordPress plugin and the CamtConverter as open source.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 14.9
    currency: CHF
    period: month
    note: Webling 100, up to 100 members, billed annually (CHF 21 billed monthly); prices rise with the number of members
  url: https://www.webling.ch/angebote
  checked: 2026-11-02
  basis: vendor
  source: pricing

features:
  encryptionInTransit: yes
  api: yes
  dataExport: yes

tags:
  [
    associations,
    clubs,
    membership-management,
    association-accounting,
    member-portal,
    dues,
    non-profit,
  ]
affiliate: null
sponsored: false
added: 2026-11-02
updated: 2026-11-02
lastVerified: 2026-11-02
sources:
  - id: home
    title: Webling - Die Vereinssoftware
    url: https://www.webling.ch
    publisher: uSystems GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: about
    title: Wer hinter der Vereinssoftware steht | Webling
    url: https://www.webling.ch/ueberuns
    publisher: uSystems GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: pricing
    title: Preise | Webling
    url: https://www.webling.ch/angebote
    publisher: uSystems GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: api
    title: 'Webling API: Schnittstelle für deine Vereinslösung'
    url: https://www.webling.ch/schnittstelle
    publisher: uSystems GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: swissmadesoftware
    title: uSystems GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/usystems-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-02
i18n:
  de:
    tagline: 'Vereinssoftware für Mitgliederverwaltung, Beiträge, Buchhaltung und ein Mitgliederportal.'
    description: 'Webling ist Cloud-Software für Vereine von uSystems aus Winterthur, mit Mitgliedern, Beiträgen, Buchhaltung und Mitgliederportal, auf eigenen Servern in der Schweiz.'
    notes:
      swiss.developed.note: 'uSystems gibt an, dass Webling von seinem Team in Winterthur entwickelt, betreut und vertrieben wird und weder Programmierung noch Support ausgelagert werden.'
      swiss.hosted.note: 'uSystems gibt an, dass die Vereinsdaten auf eigenen Servern in einem sicheren Rechenzentrum in der Schweiz liegen. Der Betreiber des Rechenzentrums wird nicht genannt.'
      swiss.infrastructure.note: 'Das Rechenzentrum, in dem die Server stehen, wird nicht genannt.'
      openSource.note: 'Webling selbst ist proprietär; uSystems veröffentlicht kleinere Werkzeuge wie ein WordPress-Plugin und den CamtConverter als Open Source.'
      pricing.startingPrice.note: 'Webling 100, bis 100 Mitglieder, jährliche Abrechnung (CHF 21 bei monatlicher Abrechnung); die Preise steigen mit der Anzahl Mitglieder'
      alternativesTo.wildapricot.note: 'Enthält eine doppelte Vereinsbuchhaltung; Preise nach Anzahl Mitglieder, mit unbegrenzt vielen Benutzern in jedem Abo.'
---

Webling is browser-based software for clubs and associations. It manages
member records in groups with configurable access rights for board members,
issues membership fee invoices and matches incoming payments, keeps
double-entry accounts for up to two separate ledgers per plan, and sends emails
and serial letters from templates. A calendar handles events and invitations,
and a member portal lets members view and edit their own data. Documents and
club equipment can be managed as well, and the interface is available in
German, French, English and Italian.

Webling Free covers up to 50 members with limited functions and without email
sending. Paid plans include all functions and are priced by the number of
members, from CHF 14.90 per month for up to 100 members, billed annually.
Additional users are free, a REST API and a Zapier integration are available,
and EU customers are billed in euros through webling.eu.

uSystems GmbH in Winterthur was founded in 2008 by four friends who first
built the software for their scout group. It states that Webling is developed
and supported in Winterthur and that data is stored on its own servers in a
Swiss data centre, whose operator is not named.
