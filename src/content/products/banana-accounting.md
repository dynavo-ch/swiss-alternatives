---
name: Banana Accounting
aliases: [Banana Accounting Plus, Banana Buchhaltung, Banana Comptabilité, Banana Contabilità]
company: banana
tagline: Desktop accounting software with a spreadsheet-like interface, made in Lugano.
description: >-
  Banana Accounting is accounting software from Lugano for Windows, macOS and
  Linux; files are stored where the user chooses rather than in a vendor cloud.
website: https://www.banana.ch
status: active

categories: [accounting]
alternativesTo:
  - id: quickbooks
    note: Installed software working on local files; no vendor-hosted cloud storage or built-in online collaboration.
  - id: xero
    note: Installed software working on local files; no vendor-hosted cloud storage or built-in online collaboration.

audience: [consumer, business]
deployment: [on-premises]
platforms: [windows, macos, linux, ios, android, web]
languages:
  interface: [en, fr, de, it, es, pt, nl, zh]

swiss:
  developed:
    value: yes
    basis: vendor
    source: company
    note: Developed by Banana.ch SA in Lugano since 1989.
  hosted:
    value: unknown
    basis: vendor
    source: privacy-files
    note: >-
      Not applicable in the usual sense: Banana.ch states that Banana Accounting
      does not provide a cloud system. Accounting files are saved wherever the
      user chooses, for example on a local disk, a network server or a
      third-party cloud service such as OneDrive or Dropbox.

openSource:
  value: no
  basis: inferred
  source: license
  note: Distributed under Banana.ch's own user licence; no source code of the application is published.

pricing:
  model: freemium
  freePlan: yes
  chfBilling: yes
  startingPrice:
    amount: 89
    currency: CHF
    period: year
    note: Professional plan, annual subscription (Switzerland); international price EUR 84 per year plus VAT
  url: https://www.banana.ch/en/buy
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    The free plan is limited to 70 transactions. The Advanced plan
    (CHF 179 per year) is aimed at users subject to Swiss VAT.

features:
  encryptionAtRest: no

tags: [accounting, bookkeeping, desktop, offline, vat, associations]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: Banana Accounting Software
    url: https://www.banana.ch/en
    publisher: Banana.ch SA
    kind: vendor
    accessed: 2026-10-15
  - id: company
    title: Company - Banana Accounting Software
    url: https://www.banana.ch/en/company
    publisher: Banana.ch SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Buy Banana Accounting Plus
    url: https://www.banana.ch/en/buy
    publisher: Banana.ch SA
    kind: vendor
    accessed: 2026-10-15
  - id: requirements
    title: System requirements - Banana Accounting Plus
    url: https://www.banana.ch/en/node/11217
    publisher: Banana.ch SA
    kind: documentation
    accessed: 2026-10-15
  - id: privacy-files
    title: Banana Accounting and Privacy
    url: https://www.banana.ch/en/node/10296
    publisher: Banana.ch SA
    kind: vendor
    accessed: 2026-10-15
  - id: license
    title: User License - Banana Accounting
    url: https://www.banana.ch/en/user_license
    publisher: Banana.ch SA
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Desktop-Buchhaltungssoftware mit tabellenähnlicher Oberfläche, entwickelt in Lugano.'
    description: 'Banana Accounting ist Buchhaltungssoftware aus Lugano für Windows, macOS und Linux; die Dateien werden dort gespeichert, wo die Nutzenden es wählen, nicht in einer Cloud des Herstellers.'
    notes:
      swiss.developed.note: 'Seit 1989 von der Banana.ch SA in Lugano entwickelt.'
      swiss.hosted.note: 'Im üblichen Sinn nicht anwendbar: Banana.ch gibt an, dass Banana Buchhaltung kein Cloud-System bereitstellt. Buchhaltungsdateien werden dort gespeichert, wo der Benutzer es wählt, zum Beispiel auf einer lokalen Festplatte, einem Netzwerkserver oder bei einem Cloud-Dienst eines Drittanbieters wie OneDrive oder Dropbox.'
      openSource.note: 'Wird unter der eigenen Benutzerlizenz von Banana.ch vertrieben; es wird kein Quellcode der Anwendung veröffentlicht.'
      pricing.startingPrice.note: 'Professional-Plan, Jahresabonnement (Schweiz); internationaler Preis EUR 84 pro Jahr zzgl. MWST'
      alternativesTo.quickbooks.note: 'Installierte Software, die mit lokalen Dateien arbeitet; kein vom Anbieter gehosteter Cloud-Speicher und keine integrierte Online-Zusammenarbeit.'
      alternativesTo.xero.note: 'Installierte Software, die mit lokalen Dateien arbeitet; kein vom Anbieter gehosteter Cloud-Speicher und keine integrierte Online-Zusammenarbeit.'
---

Banana Accounting is double-entry and cash-book accounting software developed by
Banana.ch SA in Lugano. The current version, Banana Accounting Plus, runs on
Windows, macOS and Linux; Banana also lists Android and iOS/iPadOS apps (with
documented limitations) and a WebAssembly build that starts in the browser. The
interface is available in eight languages and the company offers more than 1,000
templates. Banana.ch reports more than 400,000 licences sold.

Data is kept in accounting files on a location chosen by the user. Banana.ch
does not operate a cloud service for these files, and the files are not
encrypted by default; a password can be set, but Banana recommends separate
encryption software where needed. Collaboration and backups therefore depend on
the storage the user chooses.

Licences are sold as annual subscriptions, with CHF prices for Switzerland and
EUR prices for other countries. A free plan for small accountings (up to 70
transactions) is available, and schools can use the software free of charge.
