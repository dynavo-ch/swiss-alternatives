---
name: Anytype
aliases: [Any, Anytype for Business]
company: any-association
tagline: Local-first notes and knowledge app with on-device encryption and peer-to-peer sync.
description: >-
  Anytype is a local-first app for notes, documents and tasks from Zug-based Any
  Association, with on-device encryption and optional self-hosted sync.
website: https://anytype.io
status: active

categories: [notes]
alternativesTo:
  - id: notion
    note: Data is stored on the device first and encrypted before it syncs; apps are desktop and mobile.
  - id: obsidian
    note: Sync and sharing are built in; the free plan includes 100 MB of remote storage.
  - id: evernote
    note: Covers note-taking and organisation; check the import options before migrating.

audience: [consumer, business]
deployment: [saas, self-hosted]
platforms: [windows, macos, linux, ios, android]

swiss:
  developed:
    value: no
    basis: vendor
    source: faq
    note: >-
      Any describes itself as a remote team with one hub in Berlin, where staff
      are employed by a German subsidiary of the Swiss association.
  hosted:
    value: partial
    basis: vendor
    source: privacy
    note: >-
      Any states that it maintains the Anytype Network (its backup and sync
      nodes) in Switzerland and the European Union; content stored there is
      end-to-end encrypted. Analytics (Amplitude), payments (Stripe) and email
      providers process account data in the United States. Users can also sync
      only within a local network or run their own network.
  dataLocations: [CH]

openSource:
  value: partial
  license: MIT
  repository: https://github.com/anyproto
  basis: vendor
  source: licence
  note: >-
    The any-sync protocol and its self-hosting setup are MIT-licensed. The
    desktop and mobile apps and the middleware are published under the "Any
    Source Available License 1.0", which permits non-commercial use and
    commercial use only on networks approved by Any Association; this is not an
    OSI-approved open-source licence.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: yes
  startingPrice:
    amount: 4
    currency: USD
    period: month
    note: Plus plan (1 GB remote storage), billed annually; USD 5 per month with monthly billing
  url: https://anytype.io/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: yes
  sso: yes

tags: [local-first, knowledge-base, encryption, p2p, source-available, self-hosting]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: website
    title: Anytype
    url: https://anytype.io
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
  - id: faq
    title: Anytype FAQ
    url: https://anytype.io/faq
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Privacy Policy for Anytype App
    url: https://anytype.io/app_privacy
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
  - id: terms
    title: Anytype Terms of Use
    url: https://anytype.io/terms_of_use
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Anytype pricing
    url: https://anytype.io/pricing
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
  - id: business
    title: Anytype for Business
    url: https://business.anytype.io/
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
  - id: licence
    title: Any Source Available License 1.0 (anytype-ts)
    url: https://github.com/anyproto/anytype-ts/blob/main/LICENSE.md
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
  - id: any-sync
    title: any-sync (MIT License)
    url: https://github.com/anyproto/any-sync
    publisher: Any Association
    kind: vendor
    accessed: 2026-10-15
---

Anytype is a local-first app for notes, documents, tasks and linked objects,
with shared spaces and chat channels. Content is stored on the device first and
encrypted there before it syncs to other devices or to the backup nodes of the
Anytype Network. Users can instead sync only within their local network or run
their own sync network. Apps are available for Windows, macOS, Linux, iOS and
Android.

The sync protocol (any-sync) is MIT-licensed, but the apps themselves are
published under Any's own source-available licence, which restricts commercial
use to networks approved by the association. Paid plans mainly add remote
storage and short network names; Anytype for Business adds SSO and central
administration at EUR 20 per editor per month. The business page states that
zero-knowledge operation requires self-hosting, which was not yet available
when checked.

Any Association is registered in Zug at the address of a corporate service
provider. Its team works remotely with a hub in Berlin, and the Anytype
Network is run in Switzerland and the European Union, so the product is not
developed in Switzerland and only partly hosted there.
