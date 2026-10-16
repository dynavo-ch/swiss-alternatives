---
name: Threema
aliases: [Threema Private, Threema Libre]
company: threema
tagline: End-to-end encrypted messenger that works without a phone number, bought once.
description: >-
  Threema is an end-to-end encrypted messenger with open-source apps, usable
  without a phone number or email address, with servers in Switzerland.
website: https://threema.com/en/products/private
status: active
launched: 2012

categories: [messaging]
alternativesTo:
  - whatsapp
  - id: signal
    note: Paid one-time purchase instead of free; the server software is not open source.
  - id: telegram
    note: Not designed for large public channels or groups; all chats are end-to-end encrypted.

audience: [consumer]
deployment: [saas]
platforms: [ios, android, windows, macos, linux, web]
languages:
  interface: [en, de, fr, it, es, nl, pt, pl, cs, sk, ru, uk, tr, bg, ja, zh]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: Threema states that its apps are developed in Switzerland.
  hosted:
    value: yes
    basis: vendor
    source: server-location
    note: >-
      Threema runs its own servers in two data centres of an ISO 27001-certified
      colocation partner in the Zurich area. Media routers for some group calls
      may be located abroad; these streams are end-to-end encrypted.
  dataLocations: [CH]
  infrastructure:
    provider: Threema AG (own servers in colocation)
    providerCountry: DE
    type: colocation
    swissOwned: no
    facility: ISO 27001-certified colocation partner in the Zurich area (not named)
    basis: vendor
    source: server-location

openSource:
  value: partial
  license: AGPL-3.0
  repository: https://github.com/threema-ch
  basis: vendor
  source: open-source
  note: >-
    The Android, iOS, desktop and web clients are published under the AGPL-3.0;
    the server software is proprietary.

pricing:
  model: one-time
  freePlan: no
  chfBilling: yes
  startingPrice:
    amount: 5.99
    currency: CHF
    period: one-time
    note: Android licence bought directly from the Threema Shop; app store prices vary by store and country
  url: https://threema.com/en/pricing
  checked: 2026-10-15
  basis: vendor
  source: shop

features:
  e2ee: yes
  encryptionInTransit: yes

tags: [encryption, anonymous, no-phone-number, open-source-clients]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: product
    title: Threema Private
    url: https://threema.com/en/products/private
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: about
    title: About Threema
    url: https://threema.com/en/about
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: server-location
    title: Where are the Threema servers located?
    url: https://threema.com/en/faq/server-location
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: open-source
    title: Threema open source
    url: https://threema.com/en/open-source
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Threema pricing
    url: https://threema.com/en/pricing
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: shop
    title: Buy Threema for Android
    url: https://shop.threema.ch/en/buy
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: cost
    title: Are there recurring costs when using the Threema app?
    url: https://threema.com/en/faq/cost
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: languages
    title: Is Threema available in my language?
    url: https://threema.com/en/faq/languages
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: wikipedia
    title: Threema
    url: https://en.wikipedia.org/wiki/Threema
    publisher: Wikipedia
    kind: independent
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Ende-zu-Ende-verschlüsselter Messenger, nutzbar ohne Telefonnummer, mit Einmalkauf.'
    description: 'Threema ist ein Ende-zu-Ende-verschlüsselter Messenger mit Open-Source-Apps, nutzbar ohne Telefonnummer oder E-Mail-Adresse, mit Servern in der Schweiz.'
---

Threema is an instant messenger for text, voice and video calls, group chats,
file transfer and polls. Users are identified by a random Threema ID; linking a
phone number or email address is optional. Messages and calls are end-to-end
encrypted. Desktop and web clients are available in addition to the iOS and
Android apps.

The app is paid once per platform, with no subscription; licences cannot be
transferred between app stores. The client apps have been open source under the
AGPL-3.0 since 2020, while the server is proprietary. An F-Droid build without
proprietary components (Threema Libre) is available for Android.

Threema operates its own servers in colocation data centres in the Zurich area.
Threema AG has been owned by German investment firm Comitis Capital since early
2026, after Afinum held a majority stake from 2020.
