---
name: kMeet
aliases: [Infomaniak kMeet, Infomaniak Meet]
company: infomaniak
tagline: Free video meetings based on Jitsi Meet, run on Infomaniak servers in Switzerland.
description: >-
  kMeet is a free video conferencing service from Infomaniak, based on Jitsi Meet,
  with browser, desktop and mobile apps and calls routed via its Swiss servers.
website: https://www.infomaniak.com/en/ksuite/kmeet
status: active
launched: 2020

categories: [video-conferencing]
alternativesTo:
  - zoom
  - google-meet
  - id: microsoft-teams
    note: Covers video meetings only; persistent team chat is provided by kChat.

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android]

swiss:
  developed:
    value: partial
    basis: vendor
    source: appstore
    note: >-
      Infomaniak develops and operates kMeet, but describes it as based on the
      open-source Jitsi Meet software, which is developed outside Switzerland.
  hosted:
    value: yes
    basis: vendor
    source: kmeet
    note: Infomaniak states that communications pass only through its servers in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak (self-operated data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    basis: vendor
    source: certifications

openSource:
  value: partial
  license: GPL-3.0
  repository: https://github.com/Infomaniak/android-infomaniak-meet
  basis: vendor
  source: github
  note: >-
    The Android and iOS apps are published under GPL-3.0 and the service builds
    on the open-source Jitsi Meet; Infomaniak's server configuration is not
    published.

pricing:
  model: free
  freePlan: yes
  chfBilling: yes
  url: https://www.infomaniak.com/en/ksuite/kmeet
  checked: 2026-10-15
  basis: vendor
  source: kmeet

features:
  e2ee: partial
  encryptionInTransit: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Infomaniak states its data centres run on renewable electricity without air
    conditioning, and that its D4 data centre in Geneva feeds all of its waste
    heat into the district heating network.
  basis: vendor
  source: d4

tags: [videoconferencing, jitsi, webrtc, screen-sharing, no-account]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: kmeet
    title: kMeet - The secure, unlimited and free videoconferencing service
    url: https://www.infomaniak.com/en/ksuite/kmeet
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: appstore
    title: Infomaniak kMeet on the App Store
    url: https://apps.apple.com/us/app/infomaniak-kmeet/id1505940319
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: launch
    title: "Visioconférence: l'alternative suisse 100% gratuite à Microsoft Teams et Zoom"
    url: https://www.presseportal.ch/pm/100057093/100870361?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
  - id: certifications
    title: Certifications and labels
    url: https://www.infomaniak.com/en/certifications
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: d4
    title: 'Innovation : Infomaniak inaugure un data center revalorisant 100% de son énergie'
    url: https://www.presseportal.ch/pm/100057093/100928245?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
  - id: github
    title: Infomaniak/android-infomaniak-meet
    url: https://github.com/Infomaniak/android-infomaniak-meet
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

kMeet is a free video conferencing service that works in Chromium- and
Firefox-based browsers and through apps for Windows, macOS, Linux, iOS and
Android. It offers screen sharing with annotation, chat, password-protected
rooms, a waiting room and virtual backgrounds. Joining or starting a meeting
does not require an account; scheduling through the Infomaniak calendar and
recording to kDrive require an Infomaniak account.

kMeet is based on the open-source Jitsi Meet software and launched in 2020.
Infomaniak states that calls pass only through its servers in Switzerland and
are encrypted by default. End-to-end encryption can be enabled per meeting in
up-to-date Chromium-based browsers and the desktop app, but is not available on
mobile devices.
