---
name: Swissbackupcloud
aliases: [Armacom Swissbackupcloud]
company: armacom
tagline: Off-site backup with Veeam Cloud Connect or Barracuda, replicated to two Swiss sites.
description: >-
  Swissbackupcloud is an off-site backup service from Armacom in Pratteln, using
  Veeam Cloud Connect or Barracuda appliances, replicated to Pratteln and Bern.
website: https://www.armacom.ch/system-technik/swissbackupcloud
status: active

categories: [backup]
alternativesTo:
  - id: backblaze-b2
    note: An off-site target for existing Veeam or Barracuda backups rather than general-purpose S3 object storage; managed backup is available.

audience: [business]
deployment: [saas, managed]

swiss:
  developed:
    value: partial
    basis: vendor
    source: product
    note: >-
      Armacom designed and operates the service in Switzerland; the backup
      software comes from the US vendors Veeam and Barracuda.
  hosted:
    value: yes
    basis: vendor
    source: product
    note: >-
      Backup data is replicated to two Swiss data centres, in Pratteln (Basel
      region) and Bern.
  dataLocations: [CH]
  infrastructure:
    provider: Armacom AG (own cloud infrastructure)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    facility: ColoBâle, Pratteln BL, and ColoBern, Bern
    basis: vendor
    source: cloud-services
    note: >-
      Armacom states that it has operated its own cloud infrastructure in
      Switzerland since 2010, built georedundantly across the ColoBâle and
      ColoBern colocation sites.

pricing:
  model: subscription
  chfBilling: yes
  startingPrice:
    amount: 60
    currency: CHF
    period: month
    note: Veeam Cloud Connect, per 500 GB of storage, plus CHF 16 per VM or agent; Barracuda Box to Box costs CHF 200 per 500 GB; VAT not stated
  url: https://www.armacom.ch/system-technik/swissbackupcloud
  checked: 2026-10-16
  basis: vendor
  source: product

tags:
  [backup, veeam, veeam-cloud-connect, barracuda, managed-backup, disaster-recovery, white-label]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: product
    title: Armacom Swissbackupcloud
    url: https://www.armacom.ch/system-technik/swissbackupcloud
    publisher: Armacom AG
    kind: vendor
    accessed: 2026-10-16
  - id: cloud-services
    title: Armacom Cloud Services und Produkte
    url: https://www.armacom.ch/system-technik/armacom-cloud-services
    publisher: Armacom AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Armacom AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/armacom-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Externes Backup mit Veeam Cloud Connect oder Barracuda, repliziert an zwei Schweizer Standorte.'
    description: 'Swissbackupcloud ist ein externer Backup-Dienst der Armacom in Pratteln mit Veeam Cloud Connect oder Barracuda-Appliances, repliziert nach Pratteln und Bern.'
    notes:
      swiss.developed.note: 'Armacom hat den Dienst in der Schweiz konzipiert und betreibt ihn dort; die Backup-Software stammt von den US-Anbietern Veeam und Barracuda.'
      swiss.hosted.note: 'Backup-Daten werden in zwei Schweizer Rechenzentren repliziert, in Pratteln (Region Basel) und in Bern.'
      swiss.infrastructure.note: 'Armacom gibt an, seit 2010 eine eigene Cloud-Infrastruktur in der Schweiz zu betreiben, die georedundant über die Colocation-Standorte ColoBâle und ColoBern aufgebaut ist.'
      pricing.startingPrice.note: 'Veeam Cloud Connect, pro 500 GB Speicher, zzgl. CHF 16 pro VM oder Agent; Barracuda Box to Box kostet CHF 200 pro 500 GB; MWST nicht angegeben'
      alternativesTo.backblaze-b2.note: 'Ein externes Ziel für bestehende Veeam- oder Barracuda-Backups statt eines allgemeinen S3-Object-Storage; Managed Backup ist erhältlich.'
---

Swissbackupcloud is the off-site backup service of Armacom, an IT service
provider in Pratteln. Customers either replicate their existing Veeam backups
to Armacom through Veeam Cloud Connect, or use Barracuda backup appliances that
replicate box to box. Customers choose how long data is kept, and Armacom also
offers the service as fully managed backup.

Backup data is replicated to two data centres, in Pratteln and Bern, where
Armacom runs its own cloud infrastructure in the ColoBâle and ColoBern
colocation facilities. Armacom says its service desk monitors the backups and
that it regularly tests restores.

Prices are published as a monthly calculator in CHF: Veeam Cloud Connect costs
CHF 60 per 500 GB plus CHF 16 per VM or agent, and Barracuda Box to Box costs
CHF 200 per 500 GB. IT service providers can resell the service under their own
brand.
