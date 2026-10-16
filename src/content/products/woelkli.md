---
name: wölkli
aliases: [woelkli, wölkli Cloud, woelkli Cloud]
company: oriented-net
tagline: Nextcloud-based cloud storage with calendar and contacts, hosted in Basel.
description: >-
  wölkli is a cloud storage service based on Nextcloud, run by oriented.net in its
  own data centre in Switzerland, with a free 1 GB plan and paid plans in CHF.
website: https://woelkli.com
status: active
launched: 2014

categories: [cloud-storage, file-sharing]
alternativesTo:
  - id: dropbox
    note: Runs on Nextcloud; files are encrypted server-side rather than end-to-end, and calendar, contacts and notes are included.
  - id: google-drive
    note: Storage, sync and sharing with Nextcloud apps; online document editing is available through Collabora Online or ONLYOFFICE.

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android]

swiss:
  developed:
    value: no
    basis: vendor
    source: about
    note: >-
      wölkli is based on Nextcloud, which is developed by Nextcloud GmbH in
      Germany; oriented.net hosts and operates the service in Switzerland.
  hosted:
    value: yes
    basis: vendor
    source: about
    note: >-
      oriented.net states that all wölkli servers and file storage are located
      in an ISO/IEC 27001-certified data centre in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: oriented.net GmbH (own data centre)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    facility: oriented.net data centre, Basel
    basis: vendor
    source: features
    note: >-
      The features page describes a self-owned data centre in Switzerland;
      oriented.net's server housing page places its data centre in Basel.

pricing:
  model: freemium
  freePlan: yes
  chfBilling: yes
  startingPrice:
    amount: 60
    currency: CHF
    period: year
    note: Level CB (10 GB, one user), marked as a limited offer; the next plan is 100 GB for CHF 180 per year; excl. 8.1% VAT
  url: https://woelkli.com/en/packages
  checked: 2026-10-16
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes

tags: [nextcloud, sync, webdav, calendar, contacts, collabora, onlyoffice]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: about
    title: About wölkli Cloud
    url: https://woelkli.com/en/about
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: features
    title: wölkli Cloud Storage features
    url: https://woelkli.com/en/features
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: wölkli Cloud Storage Packages
    url: https://woelkli.com/en/packages
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: downloads
    title: wölkli Cloud Downloads
    url: https://woelkli.com/en/downloads
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: housing
    title: Server Housing – oriented.net
    url: https://oriented.net/server/server-housing
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: oriented.net GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/oriented.net-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Cloud-Speicher auf Basis von Nextcloud mit Kalender und Kontakten, gehostet in Basel.'
    description: 'wölkli ist ein Cloud-Speicherdienst auf Basis von Nextcloud, betrieben von oriented.net im eigenen Rechenzentrum in der Schweiz, mit kostenlosem 1-GB-Plan und kostenpflichtigen Plänen in CHF.'
---

wölkli ("small cloud" in Swiss German) is a cloud storage service that Basel
hosting provider oriented.net has run since 2014. It is based on Nextcloud and
covers file storage, sync and sharing, calendars, contacts, notes, photo
galleries and WebDAV access, with the Nextcloud desktop and mobile apps. Online
document editing is offered through Collabora Online and ONLYOFFICE.

Files are stored in oriented.net's own data centre in Switzerland. Transfers use
TLS and files are stored encrypted with AES-256 on the server side; the service
does not describe the encryption as end-to-end. Accounts can be protected with
TOTP two-factor authentication.

A free account includes 1 GB. Paid single-user plans run from 10 GB to 600 GB
and add phone and email support and file versioning; multi-user private
installations with their own subdomain start at CHF 400 per year. Prices are in
CHF and exclude VAT.
