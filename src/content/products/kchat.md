---
name: kChat
aliases: [Infomaniak kChat]
company: infomaniak
tagline: Team messaging with channels, threads and guest access, included in kSuite.
description: >-
  kChat is Infomaniak's team messaging app with public and private channels and
  guest access. It is part of kSuite and hosted in Infomaniak's Swiss data centres.
website: https://www.infomaniak.com/en/ksuite/kchat
status: active

categories: [team-chat]
alternativesTo:
  - slack
  - id: microsoft-teams
    note: Covers team chat; video meetings are handled by the separate kMeet service.

audience: [business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android]

swiss:
  developed:
    value: partial
    basis: inferred
    source: github
    note: >-
      Infomaniak states kChat is developed in Switzerland. Its published web,
      desktop and mobile clients are forks of the open-source Mattermost
      platform, originally developed in the United States.
  hosted:
    value: yes
    basis: vendor
    source: kchat
    note: Infomaniak states that kChat data and backups are encrypted and stored in Switzerland.
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
  repository: https://github.com/Infomaniak/mobile-kchat
  basis: vendor
  source: github
  note: >-
    Web, desktop and mobile clients are published as Mattermost forks (desktop and
    mobile under Apache-2.0); it is not stated whether the server is published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 1.76
    currency: CHF
    period: month
    note: Per user, kSuite Standard with annual billing, excl. VAT; kChat is not sold separately
  url: https://www.infomaniak.com/en/ksuite/ksuite-pro/prices
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Infomaniak states its data centres run on renewable electricity without air
    conditioning, and that its D4 data centre in Geneva feeds all of its waste
    heat into the district heating network.
  basis: vendor
  source: d4

tags: [team-chat, channels, mattermost, guests, webhooks]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: kchat
    title: kChat - The secure instant messaging for businesses
    url: https://www.infomaniak.com/en/ksuite/kchat
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: kSuite PRO - Prices and characteristics
    url: https://www.infomaniak.com/en/ksuite/ksuite-pro/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: apps
    title: Download the kChat app
    url: https://www.infomaniak.com/en/apps/download-kchat
    publisher: Infomaniak Network SA
    kind: vendor
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
    title: Infomaniak/mobile-kchat (fork of Mattermost mobile)
    url: https://github.com/Infomaniak/mobile-kchat
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
  - id: github-desktop
    title: Infomaniak/desktop-kChat
    url: https://github.com/Infomaniak/desktop-kChat
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Team-Messaging mit Kanälen, Threads und Gastzugang, in kSuite enthalten.'
    description: 'kChat ist die Team-Messaging-App von Infomaniak mit öffentlichen und privaten Kanälen und Gastzugang. Sie ist Teil von kSuite und in den Schweizer Rechenzentren von Infomaniak gehostet.'
    notes:
      swiss.developed.note: 'Infomaniak gibt an, dass kChat in der Schweiz entwickelt wird. Die veröffentlichten Web-, Desktop- und Mobile-Clients sind Forks der Open-Source-Plattform Mattermost, die ursprünglich in den USA entwickelt wurde.'
      swiss.hosted.note: 'Infomaniak gibt an, dass kChat-Daten und Backups verschlüsselt in der Schweiz gespeichert werden.'
      openSource.note: 'Web-, Desktop- und Mobile-Clients sind als Mattermost-Forks veröffentlicht (Desktop und Mobile unter Apache-2.0); ob der Server veröffentlicht ist, wird nicht angegeben.'
      pricing.startingPrice.note: 'Pro Benutzer, kSuite Standard bei jährlicher Abrechnung, exkl. MWST; kChat wird nicht separat verkauft'
      sustainability.summary: 'Infomaniak gibt an, dass seine Rechenzentren mit erneuerbarem Strom und ohne Klimaanlage betrieben werden und dass sein Rechenzentrum D4 in Genf seine gesamte Abwärme ins Fernwärmenetz einspeist.'
      alternativesTo.microsoft-teams.note: 'Deckt Team-Chat ab; Videokonferenzen laufen über den separaten Dienst kMeet.'
---

kChat is a team messaging service with public and private channels, threads,
direct messages, file sharing up to 100 MB per file, message search, webhooks
and free guest access for external partners, who see only the channels they are
invited to. It includes AI features from Infomaniak's Euria assistant, such as
thread summaries and voice-message transcription.

kChat cannot be ordered separately: it is part of kSuite, with a free tier
limited to 90 days of message history and paid kSuite Pro plans with unlimited
history. Its published clients are based on the open-source Mattermost
platform, and imports from Mattermost, Slack or Teams are offered on request.
Infomaniak states that data in transit and at rest is encrypted and stored in
Switzerland; end-to-end encryption is not advertised.
