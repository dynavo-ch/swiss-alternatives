---
name: Swiss Backup
aliases: [Infomaniak Swiss Backup]
company: infomaniak
tagline: Cloud backup for devices via Acronis, or S3, Swift and SFTP storage, kept in Switzerland.
description: >-
  Swiss Backup is Infomaniak's cloud backup, using Acronis software for devices
  or S3, Swift and SFTP storage, with three copies in two Swiss data centres.
website: https://www.infomaniak.com/en/swiss-backup
status: active
launched: 2018

categories: [backup, object-storage]
alternativesTo:
  - id: backblaze-b2
    note: Backup-oriented storage via S3, Swift or SFTP, billed by reserved capacity rather than per GB used.

audience: [business, consumer]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android, api]

swiss:
  developed:
    value: partial
    basis: vendor
    source: swissbackup
    note: >-
      Infomaniak states the storage infrastructure was developed in-house;
      device backups use Acronis Cyber Protect Cloud, third-party software.
  hosted:
    value: yes
    basis: vendor
    source: swissbackup
    note: >-
      Infomaniak states that data is copied to at least three storage media in
      two of its data centres in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak (self-operated data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    basis: vendor
    source: swissbackup

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 4.18
    currency: CHF
    period: month
    note: 1 TB backup capacity with annual billing, excl. VAT; per-device fees extra (from CHF 0.72/month)
  url: https://www.infomaniak.com/en/swiss-backup/prices
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  api: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Infomaniak states its data centres run on renewable electricity without air
    conditioning, and that its D4 data centre in Geneva feeds all of its waste
    heat into the district heating network.
  basis: vendor
  source: d4

tags: [backup, acronis, s3, swift, sftp, ransomware, nas]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: swissbackup
    title: Swiss Backup - Back up your data in complete security
    url: https://www.infomaniak.com/en/swiss-backup
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Swiss Backup - Prices
    url: https://www.infomaniak.com/en/swiss-backup/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: launch
    title: Swiss Backup d'Infomaniak garantit une triple sécurité des données
    url: https://www.presseportal.ch/pm/100057093/100822657?langid=2
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
i18n:
  de:
    tagline: 'Cloud-Backup für Geräte über Acronis oder S3-, Swift- und SFTP-Speicher, in der Schweiz aufbewahrt.'
    description: 'Swiss Backup ist das Cloud-Backup von Infomaniak, mit Acronis-Software für Geräte oder S3-, Swift- und SFTP-Speicher und drei Kopien in zwei Schweizer Rechenzentren.'
---

Swiss Backup offers two ways to back up data to Infomaniak's cloud. The first
uses Acronis Cyber Protect Cloud, included in the price, to back up
workstations, servers, virtual machines, mobile devices and Microsoft 365 or
Google Workspace accounts. The second provides backup storage that works with
any software or NAS (such as Synology or QNAP) supporting OpenStack Swift, S3
or SFTP.

Pricing combines a reserved storage capacity (from 1 TB, up to 1,000 TB) with a
monthly fee per device or account, and a 90-day free trial is offered.
Infomaniak states that backups are kept on at least three media in two of its
data centres in Switzerland, and that backups can be encrypted with AES-256.
For syncing and accessing personal files, Infomaniak recommends kDrive instead.
