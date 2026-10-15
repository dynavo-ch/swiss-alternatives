---
name: Proton Drive
aliases: [ProtonDrive, Proton Docs, Proton Sheets]
company: proton
tagline: End-to-end encrypted cloud storage with file sharing and document editors.
description: >-
  Proton Drive is an end-to-end encrypted cloud storage and file sharing service
  from Proton AG, with sync apps and built-in document and spreadsheet editors.
website: https://proton.me/drive
status: active
launched: 2022

categories: [cloud-storage, file-sharing]
alternativesTo:
  - google-drive
  - onedrive
  - id: dropbox
    note: No Linux sync app; Linux is supported through a command-line tool.
  - id: icloud
    note: Covers file and photo storage; no device backup or Apple system integration.
  - id: google-docs
    note: Documents and spreadsheets via Proton Docs and Proton Sheets, stored as encrypted files in Drive.

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, ios, android, cli]
languages:
  interface: [en, de, fr, it]

swiss:
  developed:
    value: partial
    basis: inferred
    source: privacy-general
    note: >-
      Developed by Proton AG, headquartered near Geneva. Proton's privacy policy
      also lists subsidiaries in North Macedonia and Taiwan as processors, and
      Proton runs an R&D office in Vilnius. Proton does not publish how
      development work is split between locations.
  hosted:
    value: partial
    basis: vendor
    source: privacy
    note: >-
      Proton's Drive privacy policy (last modified August 2026) states that data
      is stored encrypted on Proton servers located exclusively in Switzerland,
      Germany or Norway, without a per-country breakdown. Since July 2025 Proton
      has been moving the majority of its physical infrastructure out of
      Switzerland, citing the proposed revision of the Swiss surveillance
      ordinance (VÜPF/OSCPT); its August 2026 incident report describes core
      databases split between Frankfurt and Zurich.
  dataLocations: [CH, DE, NO]
  infrastructure:
    provider: Proton AG (Proton-owned servers in third-party data centres)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    basis: vendor
    source: outage-press
    note: >-
      Proton says it owns its server hardware. According to a watson.ch report
      (August 2026) it rents secured space from data-centre operators it does
      not name, rather than running its own data centres in Switzerland,
      Germany or Norway.

openSource:
  value: partial
  license: GPL-3.0
  repository: https://github.com/ProtonDriveApps
  basis: verified
  source: github
  note: >-
    The Windows, Android and iOS apps and the web client (in the
    ProtonMail/WebClients repository) are published under GPL-3.0; the server
    side is not published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 4.99
    currency: USD
    period: month
    note: Drive Plus (200 GB), billed monthly; CHF and EUR prices also offered
  url: https://proton.me/drive/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: yes
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes

certifications: [iso-27001, soc-2]

tags: [encryption, sync, photo-backup, document-editor, spreadsheets]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: drive
    title: Proton Drive - secure cloud storage
    url: https://proton.me/drive
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Proton Drive security
    url: https://proton.me/drive/security
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Proton Drive privacy policy
    url: https://proton.me/drive/privacy-policy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy-general
    title: Proton privacy policy
    url: https://proton.me/legal/privacy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: incident
    title: August 27 outage incident report
    url: https://proton.me/blog/august-27-outage-incident-report
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: infra-move
    title: 'Introducing Lumo: AI where every conversation is confidential'
    url: https://proton.me/blog/lumo-ai
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: outage-press
    title: Hitzebedingter Server-Ausfall bei Schweizer Cloud-Firma Proton
    url: https://www.watson.ch/wirtschaft/digital/192121021-hitzebedingter-server-ausfall-bei-schweizer-cloud-firma-proton
    publisher: watson.ch
    kind: press
    accessed: 2026-10-15
  - id: pricing
    title: Proton Drive pricing
    url: https://proton.me/drive/pricing
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: download
    title: Download Proton Drive apps
    url: https://proton.me/drive/download
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: editor
    title: Proton Docs and Sheets
    url: https://proton.me/drive/document-editor
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: soc2
    title: Proton completes SOC 2 Type II audit
    url: https://proton.me/blog/soc-2
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: ProtonDriveApps on GitHub
    url: https://github.com/ProtonDriveApps
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

Proton Drive is a cloud storage service in which files and file names are
encrypted on the user's device before upload. It includes share links with
optional passwords and expiry dates, automatic photo and video backup from the
mobile apps, file version history, and the Proton Docs and Proton Sheets
editors, which store documents and spreadsheets as encrypted files in Drive.

Sync apps are available for Windows and macOS, mobile apps for iOS and Android,
and a command-line tool for Linux, macOS and Windows; there is no graphical
Linux sync client. The free plan includes 5 GB. Drive storage is also part of
Proton's bundled plans and its business plans.

Proton states that Drive data is kept on Proton-owned servers in Switzerland,
Germany or Norway. Since 2025 the company has shifted infrastructure away from
Switzerland because of a proposed revision of the Swiss surveillance ordinance,
while the contracting entity remains Proton AG under Swiss law.
