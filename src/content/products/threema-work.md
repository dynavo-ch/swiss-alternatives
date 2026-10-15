---
name: Threema Work
aliases: [Threema OnPrem]
company: threema
tagline: Encrypted business messenger with central user management and on-premises option.
description: >-
  Threema Work is the business edition of the Threema messenger, with central
  user management, MDM support and an API, run on Threema's servers in Switzerland.
website: https://threema.com/en/products/work
status: active
launched: 2016

categories: [team-chat, messaging, employee-communication]
alternativesTo:
  - id: whatsapp
    note: Replaces WhatsApp use for work chats with centrally managed accounts.
  - id: microsoft-teams
    note: Covers chat and calls only; no document collaboration, meeting scheduling or Microsoft 365 integration.
  - id: slack
    note: Mobile-first messenger; no channel-based workspace or app integration marketplace comparable to Slack.
  - id: workplace-from-meta
    note: Covers chat and broadcast messages to staff; no news feed or intranet features.

audience: [business, enterprise, public-sector]
deployment: [saas, on-premises]
platforms: [ios, android, windows, macos, linux, web, api]
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
    source: work
    note: >-
      The cloud service runs exclusively on Threema's own servers in colocation
      data centres in the Zurich area. With Threema OnPrem, organisations host
      the server themselves at a location of their choice.
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
  source: android-repo
  note: >-
    The client apps, including the Work and OnPrem build variants, are published
    under the AGPL-3.0; the server and the management cockpit are proprietary.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 3.00
    currency: CHF
    period: month
    note: Work Core, per user per month, billed annually; EUR and USD prices are converted one-to-one
  url: https://threema.com/en/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: yes
  encryptionInTransit: yes
  sso: no
  api: yes

tags: [encryption, business-messenger, mdm, on-premises, broadcast]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: work
    title: Threema Work
    url: https://threema.com/en/products/work
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
  - id: pricing
    title: Threema pricing
    url: https://threema.com/en/pricing
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: open-source
    title: Threema open source
    url: https://threema.com/en/open-source
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: android-repo
    title: threema-android on GitHub
    url: https://github.com/threema-ch/threema-android
    publisher: Threema AG
    kind: documentation
    accessed: 2026-10-15
  - id: roadmap
    title: "What We're Working On: Threema Work roadmap 2026"
    url: https://threema.com/en/blog/roadmap-for-threema-work-2026
    publisher: Threema AG
    kind: vendor
    accessed: 2026-10-15
  - id: ad
    title: Integration into Active Directory and similar directory services
    url: https://threema.com/en/faq/ad
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
---

Threema Work is the organisational edition of the Threema messenger, launched
in 2016. Administrators manage users, groups, contacts and app settings in a
web-based management cockpit and can distribute the app via mobile device
management. An API and connectors for Active Directory and Entra ID support
automated user provisioning. Professional licences include a matching number
of recipients for Threema Broadcast, a tool for one-to-many messages to staff.

Communication is end-to-end encrypted, and the cloud service runs on Threema's
own servers in Zurich-area colocation data centres. Threema OnPrem, recommended
from 200 users, lets organisations operate the server infrastructure
themselves. The client apps are open source under the AGPL-3.0.

Single sign-on is not currently offered; Threema lists it on its roadmap as a
future item. Plans are billed annually per user in CHF, EUR or USD, and a
30-day free trial is available. Threema AG has been owned by German investment
firm Comitis Capital since early 2026.
