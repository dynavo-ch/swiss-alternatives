---
name: Session
aliases: [Session Messenger, getsession]
company: session
tagline: Open-source encrypted messenger without phone numbers, routed over decentralised nodes.
description: >-
  Session is an open-source, end-to-end encrypted messenger that needs no phone
  number and routes messages through a decentralised network of community nodes.
website: https://getsession.org
status: active
launched: 2020

categories: [messaging]
alternativesTo:
  - id: whatsapp
    note: No phone number needed; development capacity has been sharply reduced since 2026.
  - id: signal
    note: Uses a decentralised node network instead of central servers; the current protocol lacks forward secrecy.

audience: [consumer]
deployment: [saas]
platforms: [ios, android, windows, macos, linux]

swiss:
  developed:
    value: no
    basis: inferred
    source: future
    note: >-
      Since mid-2026 Session has been maintained by two to three developers led
      by chief software architect Jason Rhinelander, who is registered as living
      in Fredericton, Canada. The earlier team came from the Australian OPTF. No
      development team in Switzerland is described.
  hosted:
    value: no
    basis: vendor
    source: introducing
    note: >-
      Messages are stored on swarms of Session Nodes operated by a community of
      independent operators around the world; no Swiss storage location is
      stated. The foundation runs the seed nodes that new clients contact first.
  infrastructure:
    provider: Independent Session Node operators (decentralised network)
    type: mixed
    swissOwned: no
    basis: vendor
    source: introducing

openSource:
  value: yes
  license: GPL-3.0, MIT
  repository: https://github.com/session-foundation
  basis: vendor
  source: github
  note: >-
    The Android, iOS and desktop clients and Session Router are GPL-3.0; the
    storage server run on Session Nodes is MIT-licensed.

pricing:
  model: free
  freePlan: yes
  url: https://getsession.org/pro
  checked: 2026-10-15
  basis: vendor
  source: dev-update
  note: >-
    Session is free and funded by donations. A paid Session Pro tier is
    advertised from USD 2.99 per month, but its launch was put on hold in
    October 2026.

features:
  e2ee: yes

tags: [encryption, anonymous, no-phone-number, onion-routing, decentralised, open-source]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: website
    title: Session
    url: https://getsession.org
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: introducing
    title: Introducing the Session Technology Foundation
    url: https://getsession.org/introducing-the-session-technology-foundation
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Session Privacy Policy
    url: https://getsession.org/privacy-policy
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: future
    title: The Future of Session
    url: https://getsession.org/blog/the-future-of-session
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: dev-update
    title: Development Update - Stability Fixes and Network Improvements
    url: https://getsession.org/blog/development-update-stability-fixes-and-network-improvements
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: pro
    title: Session Pro
    url: https://getsession.org/pro
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: token
    title: Session Token
    url: https://token.getsession.org/
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: Session Technology Foundation on GitHub
    url: https://github.com/session-foundation
    publisher: Session Technology Foundation
    kind: vendor
    accessed: 2026-10-15
  - id: zefix
    title: Session Technology Stiftung (CHE-360.761.156) - commercial register entry
    url: https://www.zefix.ch/en/search/entity/list/firm/1650256
    publisher: Federal Office of Justice (Zefix)
    kind: registry
    accessed: 2026-10-15
  - id: wikipedia
    title: Session (software)
    url: https://en.wikipedia.org/wiki/Session_(software)
    publisher: Wikipedia
    kind: independent
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Verschlüsselter Open-Source-Messenger ohne Telefonnummer, geroutet über dezentrale Knoten.'
    description: 'Session ist ein Ende-zu-Ende-verschlüsselter Open-Source-Messenger, der keine Telefonnummer benötigt und Nachrichten über ein dezentrales Netzwerk von Community-Knoten leitet.'
    notes:
      swiss.developed.note: 'Seit Mitte 2026 wird Session von zwei bis drei Entwicklern gepflegt, geleitet von Chief Software Architect Jason Rhinelander, der mit Wohnsitz in Fredericton, Kanada, eingetragen ist. Das frühere Team stammte von der australischen OPTF. Ein Entwicklungsteam in der Schweiz wird nicht beschrieben.'
      swiss.hosted.note: 'Nachrichten werden in Schwärmen von Session Nodes gespeichert, die von einer Gemeinschaft unabhängiger Betreiber weltweit betrieben werden; ein Schweizer Speicherort wird nicht angegeben. Die Stiftung betreibt die Seed-Nodes, die neue Clients zuerst kontaktieren.'
      openSource.note: 'Die Android-, iOS- und Desktop-Clients sowie Session Router stehen unter GPL-3.0; der auf Session Nodes laufende Storage-Server steht unter der MIT-Lizenz.'
      alternativesTo.whatsapp.note: 'Keine Telefonnummer nötig; die Entwicklungskapazität wurde seit 2026 stark reduziert.'
      alternativesTo.signal.note: 'Nutzt ein dezentrales Node-Netzwerk statt zentraler Server; dem aktuellen Protokoll fehlt Forward Secrecy.'
---

Session is a messenger for one-to-one and group chats that can be used without
a phone number or other real-world identity. Messages are end-to-end encrypted
and sent through onion-routed requests over the Session Network, whose nodes are
run by independent operators who stake the SESH token. Each account's messages
are held by a small group of nodes (a swarm) until the recipient fetches them.

The Android, iOS and desktop clients are open source under the GPL-3.0. The
current protocol does not provide perfect forward secrecy; a Protocol v2 with
forward secrecy and post-quantum encryption is in development.

The Swiss Session Technology Foundation took over stewardship from the
Australian OPTF in October 2024. In April 2026 it let all paid staff go for lack
of funds. After a donation campaign it said in June 2026 that two to three
developers would continue the work, and in October 2026 it put the launch of the
paid Session Pro tier on hold. The developers are not based in Switzerland.
