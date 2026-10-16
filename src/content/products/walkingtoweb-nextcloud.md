---
name: walkingtoweb Collaboration Cloud
aliases: [walkingtoweb Nextcloud, walkingtoweb Managed Nextcloud]
company: walkingtoweb
tagline: Managed private Nextcloud servers for files, calendars and chat, hosted in Zurich.
description: >-
  walkingtoweb Collaboration Cloud is a managed private Nextcloud server for files,
  calendars and team chat, run on the Zurich host's own hardware in Switzerland.
website: https://www.walkingtoweb.com/de/cloudloesungen/nextcloud-collaboration
status: active

categories: [cloud-storage, file-sharing]
alternativesTo:
  - id: dropbox
    note: >-
      Each customer gets a private Nextcloud server with its own admin access;
      storage is sold per server rather than per user.
  - google-drive
  - onedrive

audience: [consumer, business]
deployment: [managed]
platforms: [web, windows, macos, linux, ios, android]

swiss:
  developed:
    value: no
    basis: inferred
    source: product
    note: >-
      The service runs Nextcloud, open-source software developed by the German
      company Nextcloud GmbH. walkingtoweb sets up, hosts and maintains the
      servers.
  hosted:
    value: yes
    basis: vendor
    source: product
    note: >-
      walkingtoweb states that all data is stored only in Switzerland, on its
      own servers in Zurich, with backups on two separate systems and a second
      data centre in Geneva for backups and failover.
  dataLocations: [CH]
  infrastructure:
    provider: walkingtoweb GmbH (own hardware in colocation)
    providerCountry: CH
    type: colocation
    swissOwned: partial
    facility: NTT Global Data Centers (Zurich); backup and failover data centre in Geneva (operator not named)
    basis: vendor
    source: about
    note: >-
      Ownership follows the company: two German-citizen partners, the majority
      partner resident in Zurich. The Zurich facility is operated by NTT, a
      Japanese group.

openSource:
  value: yes
  license: AGPL-3.0-or-later
  repository: https://github.com/nextcloud/server
  note: >-
    walkingtoweb installs the Nextcloud community edition; its own hosting
    setup is not published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: unknown
  enterprise: unknown
  chfBilling: yes
  startingPrice:
    amount: 10
    currency: CHF
    period: month
    note: >-
      Nextcloud BRONZE with 25 GB, net price plus Swiss VAT; a one-time setup
      fee of CHF 50 applies
  url: https://www.walkingtoweb.com/de/cloudloesungen/nextcloud-collaboration
  checked: 2026-10-16
  basis: vendor
  source: product

features:
  e2ee: partial
  encryptionInTransit: yes
  mfa: yes

sustainability:
  summary: Infrastructure powered by renewable electricity, mainly Swiss hydro and wind power.
  basis: vendor
  source: about

tags: [nextcloud, managed-hosting, onlyoffice, collabora, webdav, sync]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: product
    title: Nextcloud - Managed Collaboration Cloud für Ihre Daten - Sicher in der Schweiz
    url: https://www.walkingtoweb.com/de/cloudloesungen/nextcloud-collaboration
    publisher: walkingtoweb GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: Über uns - walkingtoweb
    url: https://www.walkingtoweb.com/de/walkingtoweb
    publisher: walkingtoweb GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: partners
    title: Unsere Partner - walkingtoweb
    url: https://www.walkingtoweb.com/de/walkingtoweb/walkingtoweb-partner
    publisher: walkingtoweb GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: walkingtoweb GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/walkingtoweb-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Verwaltete private Nextcloud-Server für Dateien, Kalender und Chat, gehostet in Zürich.'
    description: 'walkingtoweb Collaboration Cloud ist ein verwalteter privater Nextcloud-Server für Dateien, Kalender und Team-Chat, betrieben auf eigener Hardware des Zürcher Hosters in der Schweiz.'
    notes:
      swiss.developed.note: 'Der Dienst nutzt Nextcloud, Open-Source-Software, die vom deutschen Unternehmen Nextcloud GmbH entwickelt wird. walkingtoweb richtet die Server ein, hostet und wartet sie.'
      swiss.hosted.note: 'walkingtoweb gibt an, dass alle Daten ausschliesslich in der Schweiz gespeichert werden, auf eigenen Servern in Zürich, mit Backups auf zwei getrennten Systemen und einem zweiten Rechenzentrum in Genf für Backups und Failover.'
      swiss.infrastructure.note: 'Die Eigentumsverhältnisse folgen dem Unternehmen: zwei Gesellschafter mit deutscher Staatsangehörigkeit, der Mehrheitsgesellschafter wohnhaft in Zürich. Der Standort in Zürich wird von NTT betrieben, einem japanischen Konzern.'
      openSource.note: 'walkingtoweb installiert die Community Edition von Nextcloud; das eigene Hosting-Setup ist nicht veröffentlicht.'
      pricing.startingPrice.note: 'Nextcloud BRONZE mit 25 GB, Nettopreis zuzüglich Schweizer MWST; einmalige Einrichtungsgebühr von CHF 50'
      sustainability.summary: 'Infrastruktur mit erneuerbarem Strom betrieben, hauptsächlich Schweizer Wasser- und Windkraft.'
      alternativesTo.dropbox.note: 'Jeder Kunde erhält einen privaten Nextcloud-Server mit eigenem Admin-Zugang; Speicher wird pro Server statt pro Benutzer verkauft.'
---

walkingtoweb Collaboration Cloud is a managed Nextcloud service: each customer
gets a private Nextcloud server with full admin access, no limit on the number
of user accounts and a choice of Nextcloud apps. It covers file sync on desktop
and mobile, sharing links with passwords and expiry dates, calendars, contacts,
Deck task boards and Nextcloud Talk chat. From the GOLD plan, documents can be
edited in the browser with OnlyOffice or Collabora, and Talk includes video
calls. Customers can use their own domain and adjust logo and colours.

The servers run on walkingtoweb's own Dell hardware with Proxmox virtualisation
in racks at an NTT data centre in Zurich, with a second data centre in Geneva
for backups and failover. Connections are encrypted, two-factor authentication
is available, and Nextcloud's end-to-end encryption can be used for private
folders but not for shared ones. walkingtoweb states that it handles operation
and support itself without outsourcing.

Plans are priced per server rather than per user, from CHF 10 a month for 25 GB
to CHF 100 a month for 1 TB, plus a one-time setup fee of CHF 50. Contracts
renew for six months unless cancelled 30 days before expiry. walkingtoweb GmbH
is a Zurich company registered in 2017.
