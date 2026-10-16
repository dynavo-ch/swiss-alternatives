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
i18n:
  de:
    tagline: 'Local-first-App für Notizen und Wissen mit Verschlüsselung auf dem Gerät und Peer-to-Peer-Synchronisation.'
    description: 'Anytype ist eine Local-first-App für Notizen, Dokumente und Aufgaben der Any Association mit Sitz in Zug, mit Verschlüsselung auf dem Gerät und optional selbst gehosteter Synchronisation.'
    notes:
      swiss.developed.note: 'Any beschreibt sich als Remote-Team mit einem Standort in Berlin, wo die Mitarbeitenden bei einer deutschen Tochtergesellschaft des Schweizer Vereins angestellt sind.'
      swiss.hosted.note: 'Any gibt an, das Anytype Network (seine Backup- und Sync-Nodes) in der Schweiz und in der Europäischen Union zu betreiben; die dort gespeicherten Inhalte sind Ende-zu-Ende-verschlüsselt. Analyse- (Amplitude), Zahlungs- (Stripe) und E-Mail-Anbieter verarbeiten Kontodaten in den USA. Benutzer können auch nur innerhalb eines lokalen Netzwerks synchronisieren oder ein eigenes Netzwerk betreiben.'
      openSource.note: 'Das any-sync-Protokoll und sein Self-Hosting-Setup stehen unter der MIT-Lizenz. Die Desktop- und Mobile-Apps sowie die Middleware werden unter der «Any Source Available License 1.0» veröffentlicht, die nichtkommerzielle Nutzung erlaubt und kommerzielle Nutzung nur in von der Any Association genehmigten Netzwerken; dies ist keine von der OSI anerkannte Open-Source-Lizenz.'
      pricing.startingPrice.note: 'Plus-Plan (1 GB Remote-Speicher), bei jährlicher Abrechnung; USD 5 pro Monat bei monatlicher Abrechnung'
      alternativesTo.notion.note: 'Daten werden zuerst auf dem Gerät gespeichert und vor der Synchronisierung verschlüsselt; Apps gibt es für Desktop und Mobile.'
      alternativesTo.obsidian.note: 'Synchronisierung und Freigabe sind integriert; der Gratis-Plan enthält 100 MB Remote-Speicher.'
      alternativesTo.evernote.note: 'Deckt Notizen und Organisation ab; vor einer Migration die Importoptionen prüfen.'
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
