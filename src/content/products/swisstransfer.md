---
name: SwissTransfer
aliases: [Swiss Transfer]
company: infomaniak
tagline: Free transfers of files up to 50 GB without an account, stored in Switzerland.
description: >-
  SwissTransfer is Infomaniak's free service for sending files up to 50 GB per
  transfer without an account, with links valid up to 30 days, stored in Switzerland.
website: https://www.swisstransfer.com
status: active
launched: 2019

categories: [file-transfer, file-sharing]
alternativesTo:
  - wetransfer

audience: [consumer, business]
deployment: [saas]
platforms: [web, ios, android]

swiss:
  developed:
    value: yes
    basis: vendor
    source: swisstransfer-ik
  hosted:
    value: yes
    basis: vendor
    source: swisstransfer
    note: >-
      Infomaniak states that files are stored exclusively in its own data centres
      in Switzerland, without third-party hosting providers.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak (self-operated data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    basis: vendor
    source: swisstransfer

openSource:
  value: partial
  license: GPL-3.0
  repository: https://github.com/Infomaniak/multiplatform-SwissTransfer
  basis: vendor
  source: github
  note: The Android and iOS apps and their shared core library are GPL-3.0; the web service is not published.

pricing:
  model: freemium
  freePlan: yes
  chfBilling: yes
  url: https://www.infomaniak.com/en/swisstransfer/prices
  checked: 2026-10-15
  basis: vendor
  source: swisstransfer-ik

features:
  e2ee: no
  encryptionAtRest: yes
  encryptionInTransit: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Infomaniak states its data centres run on renewable electricity without air
    conditioning, and that its D4 data centre in Geneva feeds all of its waste
    heat into the district heating network.
  basis: vendor
  source: d4

tags: [large-files, file-transfer, no-account, password-protection]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: swisstransfer
    title: SwissTransfer - Send large files securely and free of charge
    url: https://www.swisstransfer.com/en
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: swisstransfer-ik
    title: SwissTransfer - The free file transfer tool
    url: https://www.infomaniak.com/en/swisstransfer
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: launch
    title: "Infomaniak: Une transmission facile, sûre et rapide de fichiers jusqu'à 20 Go"
    url: https://www.presseportal.ch/pm/100057093/100824886?langid=2
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
    title: Infomaniak/multiplatform-SwissTransfer
    url: https://github.com/Infomaniak/multiplatform-SwissTransfer
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Kostenlose Übertragung von Dateien bis 50 GB ohne Konto, gespeichert in der Schweiz.'
    description: 'SwissTransfer ist der kostenlose Dienst von Infomaniak zum Versenden von Dateien bis 50 GB pro Übertragung ohne Konto, mit bis zu 30 Tage gültigen Links, gespeichert in der Schweiz.'
---

SwissTransfer sends files of up to 50 GB per transfer, free of charge and
without an account for sender or recipient. Transfers can be shared by link or
email and protected with a password, a download limit and an expiry of 1 to 30
days, after which files are deleted. Senders verify their email address once
per device, and free transfers allow up to 250 downloads.

Paid offers (marketed as SwissTransfer Pro and included with kSuite plans) add a
transfer history, branded download pages, unlimited downloads and, on the
Enterprise plan, availability of up to 60 days. Files are encrypted in transit (TLS) and at rest (LUKS, AES-256)
but not end-to-end, and Infomaniak states they are stored only in its own data
centres in Switzerland. Mobile apps are available for iOS and Android.
