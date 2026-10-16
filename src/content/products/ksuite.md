---
name: kSuite
aliases: [my kSuite, kSuite Pro, Infomaniak kSuite]
company: infomaniak
tagline: Collaboration suite with email, calendar, cloud storage, office editing, chat and video.
description: >-
  kSuite is Infomaniak's collaboration suite with mail, calendar, kDrive storage,
  OnlyOffice editing, kChat, kMeet and the Euria assistant, hosted in Switzerland.
website: https://www.infomaniak.com/en/ksuite
status: active
launched: 2022

categories: [office-suites, email, calendars, cloud-storage, team-chat, video-conferencing]
alternativesTo:
  - id: google-workspace
    note: Documents are edited with OnlyOffice; organisation features such as kChat are limited to the kSuite Pro plans.
  - id: microsoft-365
    note: No desktop Office apps; Microsoft Office Online editing is available only on higher kSuite Pro tiers.
  - google-calendar

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android]

swiss:
  developed:
    value: yes
    basis: vendor
    source: ksuite
    note: >-
      Infomaniak states kSuite is developed in Switzerland. Some components build
      on open-source projects: OnlyOffice for document editing, Mattermost for
      kChat and Jitsi Meet for kMeet.
  hosted:
    value: yes
    basis: vendor
    source: ksuite
    note: >-
      Infomaniak states that kSuite data is hosted and processed exclusively in
      Switzerland and is not transferred outside its own infrastructure.
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
  repository: https://github.com/Infomaniak
  basis: vendor
  source: github
  note: >-
    Mobile apps (Mail, kDrive, Calendar, kMeet) and the kDrive desktop client are
    published under GPL-3.0; the kChat clients are Mattermost forks. Server-side
    services are not published as a whole.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 19.00
    currency: CHF
    period: year
    note: my kSuite+ (1 TB), annual billing, incl. VAT; kSuite Pro Standard CHF 1.76/user/month excl. VAT
  url: https://www.infomaniak.com/en/ksuite/ksuite-pro/prices
  checked: 2026-10-15
  basis: vendor
  source: pricing-pro

features:
  e2ee: partial
  encryptionInTransit: yes
  mfa: yes
  sso: yes
  scim: yes
  api: yes
  dataExport: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Infomaniak states its data centres run on renewable electricity without air
    conditioning, and that its D4 data centre in Geneva feeds all of its waste
    heat into the district heating network.
  basis: vendor
  source: d4

tags: [collaboration, email, calendar, onlyoffice, chat, videoconferencing]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: ksuite
    title: kSuite - The ethical collaborative solution
    url: https://www.infomaniak.com/en/ksuite
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing-pro
    title: kSuite PRO - Prices and characteristics
    url: https://www.infomaniak.com/en/ksuite/ksuite-pro/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing-my
    title: my kSuite - Prices and characteristics
    url: https://www.infomaniak.com/en/ksuite/myksuite/prices
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
    title: Infomaniak on GitHub
    url: https://github.com/Infomaniak
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
  - id: launch
    title: Infomaniak lance kSuite, l'alternative Swiss made à Google Workspace et Microsoft 365
    url: https://www.presseportal.ch/pm/100057093/100896670?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Kollaborationssuite mit E-Mail, Kalender, Cloud-Speicher, Office-Bearbeitung, Chat und Video.'
    description: 'kSuite ist die Kollaborationssuite von Infomaniak mit Mail, Kalender, kDrive-Speicher, Bearbeitung in OnlyOffice, kChat, kMeet und dem Assistenten Euria, gehostet in der Schweiz.'
---

kSuite bundles Infomaniak's collaboration services: Mail with calendar and
contacts, kDrive cloud storage, online editing of Word, Excel and PowerPoint
files with OnlyOffice, kChat team messaging, kMeet video meetings, SwissTransfer
and the Euria AI assistant. It is sold in two lines: my kSuite for individuals,
with a free tier (an @ik.me, @etik.com or @ikmail.com address, 20 GB of mail and
15 GB of kDrive storage) and a paid my kSuite+ plan; and kSuite Pro for
organisations, with Free, Standard, Business and Enterprise plans for up to
300 users.

Infomaniak states that kSuite is developed and hosted in Switzerland in its own
data centres. Desktop editing relies on separately installed software such as
OnlyOffice or Microsoft 365. Microsoft Office Online integration, SSO and SCIM
are reserved for the higher kSuite Pro tiers. Mail encryption uses keys held on
Infomaniak's infrastructure, while kMeet offers optional end-to-end encryption.
