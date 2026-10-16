---
name: Restore-IT
aliases: [RESTORE-IT, Sileo Restore-IT]
company: sileo
tagline: Cloud backup and disaster recovery for SMEs in Sileo's two Swiss data centres.
description: >-
  Restore-IT is a cloud backup and disaster recovery service from Sileo in
  Fahrwangen AG, storing backups in its data centres in a former bank and a bunker.
website: https://sileo.swiss/cloud-loesungen/cloud-backup/
status: active

categories: [backup]
alternativesTo:
  - id: veeam
    note: >-
      A managed backup service with storage in Sileo's Swiss data centres, not
      backup software; the backup software it uses is not named.

audience: [business]
deployment: [saas, managed]

swiss:
  developed:
    value: unknown
    note: >-
      Sileo designs and operates the service; backups are controlled by agents
      on the protected systems, but the backup software used is not named.
  hosted:
    value: yes
    basis: vendor
    source: product
    note: >-
      Sileo states that backups are stored encrypted in its two data centres in
      Switzerland, one in a former communications bunker in the canton of St.
      Gallen and one in a former bank with a vault in the canton of Aargau.
  dataLocations: [CH]
  infrastructure:
    provider: Sileo AG (own data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    basis: vendor
    source: product
    note: >-
      Sileo states that it operates both data centres itself and also rents
      space there for colocation.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: subscription
  freePlan: no
  chfBilling: yes
  startingPrice:
    amount: 52.9
    currency: CHF
    period: month
    note: Infrastructure backup; backup of Microsoft 365 or Google Workspace data starts at CHF 1.95 per month; VAT not stated
  url: https://sileo.swiss/cloud-loesungen/cloud-backup/
  checked: 2026-10-16
  basis: vendor
  source: swissmadesoftware

features:
  encryptionAtRest: yes

tags: [backup, disaster-recovery, microsoft-365-backup, offsite-backup, bunker]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: product
    title: Cloud Backup in der Schweiz mit Restore-IT - SILEO AG
    url: https://sileo.swiss/cloud-loesungen/cloud-backup/
    publisher: Sileo AG
    kind: vendor
    accessed: 2026-10-16
  - id: colocation
    title: Colocation im Schweizer Rechenzentrum - SILEO AG
    url: https://sileo.swiss/it-infrastruktur/colocation/
    publisher: Sileo AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Sileo Information Management AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/sileo-information-management-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Cloud-Backup und Disaster Recovery für KMU in den zwei Schweizer Rechenzentren von Sileo.'
    description: 'Restore-IT ist ein Cloud-Backup- und Disaster-Recovery-Dienst von Sileo aus Fahrwangen AG, der Backups in eigenen Rechenzentren in einer ehemaligen Bank und einem Bunker speichert.'
    notes:
      swiss.developed.note: 'Sileo konzipiert und betreibt den Dienst; die Sicherungen werden über Agenten auf den geschützten Systemen gesteuert, die verwendete Backup-Software wird jedoch nicht genannt.'
      swiss.hosted.note: 'Sileo gibt an, dass Backups verschlüsselt in seinen zwei Rechenzentren in der Schweiz gespeichert werden, eines in einem ehemaligen Kommunikationsbunker im Kanton St. Gallen und eines in einer ehemaligen Bank mit Tresorraum im Kanton Aargau.'
      swiss.infrastructure.note: 'Sileo gibt an, beide Rechenzentren selbst zu betreiben, und vermietet dort auch Fläche für Colocation.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Infrastruktur-Backup; das Backup von Microsoft-365- oder Google-Workspace-Daten kostet ab CHF 1.95 pro Monat; MWST nicht angegeben'
      alternativesTo.veeam.note: 'Ein verwalteter Backup-Dienst mit Speicherung in den Schweizer Rechenzentren von Sileo, keine Backup-Software; die verwendete Backup-Software wird nicht genannt.'
---

Restore-IT is Sileo's backup and disaster recovery service for small and
medium-sized businesses. Agents installed on virtual or physical servers,
clients, NAS systems and archives back up data or whole systems to Sileo's
data centres; a separate public cloud backup covers Microsoft 365 and Google
Workspace data. With the disaster recovery option, systems can be started in
Sileo's data centre after a total failure.

Sileo states that it runs two data centres in Switzerland, one in a former
communications bunker in the canton of St. Gallen and one in a former bank in
the canton of Aargau, more than 150 km apart, and that data can be kept in the
vault or across both sites. The backup software used is not named, and the
service is also sold through IT partners.

Prices are not listed on Sileo's website; its swiss made software profile
gives infrastructure backup from CHF 52.90 and cloud data backup from CHF 1.95
per month. Sileo also offers colocation, cloud storage, virtual servers and IT
support.
