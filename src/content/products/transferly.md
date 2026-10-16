---
name: transferly
aliases: [transferly.swiss, Transferly]
company: digio
tagline: End-to-end encrypted file, message and password transfer, hosted in Switzerland.
description: >-
  transferly is a file transfer service from Digio AG in the Zurich area that
  encrypts files in the browser and stores them with a Swiss cloud provider.
website: https://discover.transferly.swiss
status: active

categories: [file-transfer, file-sharing]
alternativesTo:
  - id: wetransfer
    note: >-
      Files are encrypted in the browser before upload; the free plan is limited
      to 1 GB, 10 files and 3 downloads per transfer, kept for 7 days.

audience: [consumer, business]
deployment: [saas]
platforms: [web, macos, windows]
languages:
  interface: [de, fr, it, en]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      transferly states that development, hosting and support are Swiss and that
      the service is built by an interdisciplinary team; it is developed by Digio
      AG.
  hosted:
    value: yes
    basis: vendor
    source: privacy
    note: >-
      The privacy policy names the Swiss cloud provider Flow Swiss AG as hosting provider and
      states that it stores all data in certified data centres in Switzerland.
      Card payments and optional identity checks use Stripe, and SMS codes are
      sent through Twilio (both US).
  dataLocations: [CH]
  infrastructure:
    provider: Flow Swiss AG
    providerCountry: CH
    type: public-cloud
    swissOwned: unknown
    basis: vendor
    source: privacy
    note: >-
      Flow is a Swiss cloud provider that belongs to the Swiss Sonio group,
      whose ultimate shareholders are not published.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 9.9
    currency: CHF
    period: month
    note: Pro plan, 25 GB, billed monthly, excluding VAT; Business costs CHF 11.90 per user and month
  url: https://discover.transferly.swiss/preise
  checked: 2026-10-16
  basis: vendor
  source: pricing

features:
  e2ee: yes
  encryptionAtRest: yes
  encryptionInTransit: yes
  sso: yes

tags: [file-transfer, end-to-end-encryption, zero-knowledge, secure-links, white-label]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: home
    title: transferly - Die sicherste Art, Dateien zu versenden
    url: https://discover.transferly.swiss
    publisher: Digio AG
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: Über transferly - Datensicherheit auf Schweizer Art
    url: https://discover.transferly.swiss/ueber-uns
    publisher: Digio AG
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: transferly - Preise und Abos
    url: https://discover.transferly.swiss/preise
    publisher: Digio AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutzerklärung - transferly
    url: https://discover.transferly.swiss/datenschutzerklaerung
    publisher: Digio AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Digio AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/digio-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Ende-zu-Ende-verschlüsselte Übertragung von Dateien, Nachrichten und Passwörtern, gehostet in der Schweiz.'
    description: 'transferly ist ein Dateiübertragungsdienst der Digio AG aus dem Raum Zürich, der Dateien im Browser verschlüsselt und bei einem Schweizer Cloud-Anbieter speichert.'
    notes:
      swiss.developed.note: 'transferly gibt an, dass Entwicklung, Hosting und Support aus der Schweiz stammen und der Dienst von einem interdisziplinären Team gebaut wird; entwickelt wird er von der Digio AG.'
      swiss.hosted.note: 'Die Datenschutzerklärung nennt den Schweizer Cloud-Anbieter Flow Swiss AG als Hosting-Anbieter und gibt an, dass dieser alle Daten in zertifizierten Rechenzentren in der Schweiz speichert. Kartenzahlungen und optionale Identitätsprüfungen laufen über Stripe, SMS-Codes werden über Twilio versendet (beide USA).'
      swiss.infrastructure.note: 'Flow ist ein Schweizer Cloud-Anbieter, der zur Schweizer Sonio-Gruppe gehört, deren letztliche Aktionäre nicht veröffentlicht werden.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Pro-Plan, 25 GB, monatliche Abrechnung, exklusive MWST; Business kostet CHF 11.90 pro Nutzer und Monat'
      alternativesTo.wetransfer.note: 'Dateien werden vor dem Hochladen im Browser verschlüsselt; der Gratis-Plan ist auf 1 GB, 10 Dateien und 3 Downloads pro Übertragung beschränkt, aufbewahrt während 7 Tagen.'
---

transferly sends files, messages and passwords by link. Files are encrypted
with AES-256 in the sender's browser before upload, so that, according to
transferly, the operator cannot read them. Each transfer can be limited by
expiry date and number of downloads and protected with a password, an email or
SMS code or, as a paid add-on, an identity check. Recipients can also be asked
to upload files. Apps are available for macOS and Windows.

A free Personal plan allows transfers of up to 1 GB and 10 files, kept for 7
days. The paid Pro and Business plans raise storage, retention (up to 180 days
on Business) and download limits; Business adds user management, a company
verification badge, white-label branding, a custom subdomain and single sign-on.
An Enterprise plan with a dedicated instance is offered on request.

transferly is developed and run by Digio AG, an IT services company from the
Zurich area. The privacy policy names Flow Swiss AG, a Swiss cloud provider, as
hosting provider, with data stored in Switzerland; payments and identity checks
use Stripe and SMS codes are sent through Twilio.
