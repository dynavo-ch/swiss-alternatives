---
name: kDrive
aliases: [Infomaniak kDrive, Infomaniak Drive]
company: infomaniak
tagline: Cloud storage and file sharing with online document editing, hosted in Switzerland.
description: >-
  kDrive is Infomaniak's cloud storage and file sharing service with sync apps,
  OnlyOffice editing and WebDAV access, hosted in Infomaniak's Swiss data centres.
website: https://www.infomaniak.com/en/ksuite/kdrive
status: active

categories: [cloud-storage, file-sharing]
alternativesTo:
  - google-drive
  - onedrive
  - dropbox
  - id: icloud
    note: Covers file and photo storage; no full iPhone or iPad backups and no Apple system integration.
  - id: google-docs
    note: Office documents are edited in the browser with the built-in OnlyOffice editors.

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android]

swiss:
  developed:
    value: yes
    basis: vendor
    source: kdrive
  hosted:
    value: yes
    basis: vendor
    source: kdrive
    note: >-
      Infomaniak states that each file is replicated on three storage devices in
      two of its data centres in Switzerland.
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
  repository: https://github.com/Infomaniak/desktop-kDrive
  basis: vendor
  source: github
  note: >-
    The desktop sync client and the Android and iOS apps are open source under
    GPL-3.0; the server and web app are not published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 4.99
    currency: CHF
    period: month
    note: kDrive Solo (3 TB, 1 user) with 1-year billing, excl. VAT; CHF 5.54 billed monthly
  url: https://www.infomaniak.com/en/ksuite/kdrive/prices
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: no
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: yes
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

tags: [sync, file-sharing, webdav, onlyoffice, photo-backup]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: kdrive
    title: kDrive - Secure collaborative cloud in Switzerland
    url: https://www.infomaniak.com/en/ksuite/kdrive
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: kDrive - Prices and characteristics
    url: https://www.infomaniak.com/en/ksuite/kdrive/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: apps
    title: Download the kDrive app
    url: https://www.infomaniak.com/en/apps/download-kdrive
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
    title: Infomaniak/desktop-kDrive
    url: https://github.com/Infomaniak/desktop-kDrive
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Cloud-Speicher und Dateifreigabe mit Online-Dokumentbearbeitung, gehostet in der Schweiz.'
    description: 'kDrive ist der Cloud-Speicher- und Dateifreigabedienst von Infomaniak mit Sync-Apps, Bearbeitung in OnlyOffice und WebDAV-Zugriff, gehostet in den Schweizer Rechenzentren von Infomaniak.'
    notes:
      swiss.hosted.note: 'Infomaniak gibt an, dass jede Datei auf drei Speichergeräten in zwei seiner Rechenzentren in der Schweiz repliziert wird.'
      openSource.note: 'Der Desktop-Sync-Client sowie die Android- und iOS-Apps sind Open Source unter GPL-3.0; Server und Web-App sind nicht veröffentlicht.'
      pricing.startingPrice.note: 'kDrive Solo (3 TB, 1 Benutzer) bei 1-jähriger Abrechnung, exkl. MWST; CHF 5.54 bei monatlicher Abrechnung'
      sustainability.summary: 'Infomaniak gibt an, dass seine Rechenzentren mit erneuerbarem Strom und ohne Klimaanlage betrieben werden und dass sein Rechenzentrum D4 in Genf seine gesamte Abwärme ins Fernwärmenetz einspeist.'
      alternativesTo.icloud.note: 'Deckt Datei- und Fotospeicherung ab; keine vollständigen iPhone- oder iPad-Backups und keine Integration ins Apple-System.'
      alternativesTo.google-docs.note: 'Office-Dokumente werden im Browser mit den integrierten OnlyOffice-Editoren bearbeitet.'
---

kDrive is Infomaniak's cloud storage service for files and photos. It offers
desktop sync clients for Windows, macOS and Linux with selective sync, mobile
apps with automatic photo upload, share links with passwords and expiry dates,
drop boxes for receiving files, and online editing of Office documents with
OnlyOffice. kDrive Pro adds Microsoft Office Online editing.

kDrive is available on its own (Solo, Team and Pro plans, from 3 TB, all with
WebDAV access) or as part of kSuite; the free my kSuite tier includes 15 GB of
kDrive storage, without WebDAV. Infomaniak states that files are encrypted and
replicated across two of its data centres in Switzerland, and that kDrive is
developed in Switzerland. kDrive does not offer end-to-end encryption.
