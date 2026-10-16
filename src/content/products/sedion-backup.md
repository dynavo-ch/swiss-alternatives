---
name: Sedion Backup
aliases: [Sedion Secure Box, Sedion]
company: sedion
tagline: Additional backup of critical company data via an on-site box to a Swiss bunker.
description: >-
  Sedion Backup supplements an existing backup: an on-site Secure Box scans and
  encrypts selected critical data and replicates it to Sedion servers in a bunker.
website: https://www.sedion.ch/angebote/sedion-backup
status: active

categories: [backup]
alternativesTo:
  - id: veeam
    note: Supplements rather than replaces a full backup system; covers only data classified as business-critical, replicated through an on-site Secure Box.

audience: [business]
deployment: [managed]

swiss:
  developed:
    value: yes
    basis: vendor
    source: company
    note: >-
      Sedion states that it develops in Switzerland and that the software of the
      Secure Box is programmed natively without third-party software packages.
  hosted:
    value: yes
    basis: vendor
    source: product
    note: >-
      Sedion states that the core data is stored exclusively in Switzerland and
      that it uses no external cloud servers or services.
  dataLocations: [CH]
  infrastructure:
    provider: Sedion AG
    providerCountry: CH
    type: unknown
    swissOwned: unknown
    facility: Former military bunker in Central Switzerland (operator not named)
    basis: vendor
    source: swissmadesoftware
    note: >-
      Sedion's swiss made software profile says the replica is kept in a former
      military bunker in Central Switzerland; the company page says data is
      stored there redundantly and encrypted. The bunker's location and
      operator are not published.

features:
  encryptionAtRest: yes

tags: [backup, ransomware, cyber-resilience, bunker, appliance, malware-scanning]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: product
    title: Sedion Backup
    url: https://www.sedion.ch/angebote/sedion-backup
    publisher: Sedion AG
    kind: vendor
    accessed: 2026-10-16
  - id: company
    title: Unternehmen – Sedion
    url: https://www.sedion.ch/unternehmen
    publisher: Sedion AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Sedion AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/sedion-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Zusätzliches Backup kritischer Unternehmensdaten über eine Box vor Ort in einen Schweizer Bunker.'
    description: 'Sedion Backup ergänzt ein bestehendes Backup: Eine Secure Box vor Ort scannt und verschlüsselt ausgewählte kritische Daten und repliziert sie auf Sedion-Server in einem Bunker.'
    notes:
      swiss.developed.note: 'Sedion gibt an, in der Schweiz zu entwickeln und dass die Software der Secure Box nativ ohne Softwarepakete von Drittanbietern programmiert ist.'
      swiss.hosted.note: 'Sedion gibt an, dass die Kerndaten ausschliesslich in der Schweiz gespeichert werden und keine externen Cloud-Server oder -Dienste genutzt werden.'
      swiss.infrastructure.note: 'Gemäss dem swiss made software-Profil von Sedion wird das Replikat in einem ehemaligen Militärbunker in der Zentralschweiz aufbewahrt; laut Unternehmensseite werden die Daten dort redundant und verschlüsselt gespeichert. Standort und Betreiber des Bunkers werden nicht veröffentlicht.'
      alternativesTo.veeam.note: 'Ergänzt ein vollständiges Backup-System, statt es zu ersetzen; deckt nur als geschäftskritisch eingestufte Daten ab, die über eine Secure Box vor Ort repliziert werden.'
---

Sedion Backup is an additional backup for business-critical data, offered by
Sedion AG from Cham. It is meant to supplement a conventional 3-2-1 backup
rather than replace it: the customer classifies which data needs special
protection, and a Sedion Secure Box installed on site scans that data for
malware, encrypts it and replicates it to Sedion's backup servers.

According to Sedion, the replica is kept in a former military bunker in Central
Switzerland, redundantly and encrypted, and the company uses no external cloud
servers or services. Connectors cover both on-premises and cloud data. Sedion
says the Secure Box software is developed in-house in Switzerland.

The service is aimed at companies and IT service providers that want to restore
critical data quickly after a cyber attack such as ransomware. Prices are not
published. Sedion also offers a file-transfer service, a cloud storage service
and a cyber-defence rack.
