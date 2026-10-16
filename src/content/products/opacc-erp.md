---
name: Opacc ERP
aliases: [Opacc, OpaccERP, OXAS]
company: opacc
tagline: ERP software for Swiss trading and service companies, on premises or in Opacc's cloud.
description: >-
  Opacc ERP is business software from Rothenburg LU for trading, service and
  manufacturing companies, run on premises or in Opacc's own Swiss cloud.
website: https://www.opacc.ch/anwendungen/erp
status: active

categories: [erp]
alternativesTo:
  - id: sap
    note: Aimed mainly at Swiss mid-sized trading and service companies; no public pricing.
  - id: microsoft-dynamics-365
    note: Aimed mainly at Swiss mid-sized trading and service companies; no public pricing.

audience: [business, enterprise]
deployment: [on-premises, managed]
platforms: [windows, api]

swiss:
  developed:
    value: yes
    basis: inferred
    note: >-
      Developed by Opacc Software AG, headquartered in Rothenburg LU. Opacc
      does not publish where its development teams are based; it also has a
      branch in Fürth, Germany.
  hosted:
    value: yes
    basis: vendor
    source: cloud
    note: >-
      Opacc runs the Opacc Cloud geo-redundantly at two sites and states that
      data storage in Switzerland is "100% guaranteed". Customers can
      alternatively run the software on premises, in which case they decide
      where data is kept.
  dataLocations: [CH]
  infrastructure:
    provider: Opacc Software AG (own systems)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    facility: CKW data centre Luzern Nord (Littau)
    basis: vendor
    source: cloud-center
    note: >-
      Opacc states that all data runs on its own systems, maintained by its own
      staff, in the white space it rents in the CKW data centre in Lucerne-Littau.
      The second site is not named.

openSource:
  value: no
  basis: inferred
  note: Proprietary licensed software; no source code is published.

pricing:
  model: quote
  freePlan: no
  url: https://www.opacc.ch/anwendungen/features/betrieb-in-der-opacc-cloud
  checked: 2026-10-15
  basis: vendor
  source: cloud
  note: >-
    No public price list. Cloud operation is billed by guaranteed service
    level; prices are provided on request.

features:
  api: yes

tags: [erp, crm, trade, wholesale, logistics, production, sme]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: erp
    title: ERP Software für Schweizer Handel und Dienstleistung - Opacc
    url: https://www.opacc.ch/anwendungen/erp
    publisher: Opacc Software AG
    kind: vendor
    accessed: 2026-10-15
  - id: platform
    title: OXAS - Plattform für digitale Unternehmensressourcen - Opacc
    url: https://www.opacc.ch/plattform
    publisher: Opacc Software AG
    kind: vendor
    accessed: 2026-10-15
  - id: cloud
    title: Betrieb in der Opacc Cloud
    url: https://www.opacc.ch/anwendungen/features/betrieb-in-der-opacc-cloud
    publisher: Opacc Software AG
    kind: vendor
    accessed: 2026-10-15
  - id: cloud-center
    title: Cloud Center Luzern
    url: https://www.opacc.ch/uber-uns/news/opacc-cloud-datacenter-luzern-nord
    publisher: Opacc Software AG
    kind: vendor
    accessed: 2026-10-15
  - id: requirements
    title: Der neue Cloud Client Nytron - Technische Anforderungen
    url: https://www.opacc.ch/anwendungen/features/technische-anforderungen
    publisher: Opacc Software AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Datenschutz - Opacc
    url: https://www.opacc.ch/datenschutz
    publisher: Opacc Software AG
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'ERP-Software für Schweizer Handels- und Dienstleistungsunternehmen, On-Premises oder in der Opacc-Cloud.'
    description: 'Opacc ERP ist Unternehmenssoftware aus Rothenburg LU für Handels-, Dienstleistungs- und Produktionsunternehmen, betrieben On-Premises oder in der eigenen Schweizer Cloud von Opacc.'
    notes:
      swiss.developed.note: 'Entwickelt von der Opacc Software AG mit Firmensitz in Rothenburg LU. Opacc veröffentlicht nicht, wo seine Entwicklungsteams arbeiten; das Unternehmen hat zudem eine Niederlassung in Fürth, Deutschland.'
      swiss.hosted.note: 'Opacc betreibt die Opacc Cloud georedundant an zwei Standorten und gibt an, dass die Datenhaltung in der Schweiz «100% garantiert» ist. Kunden können die Software alternativ On-Premises betreiben und bestimmen dann selbst, wo die Daten liegen.'
      swiss.infrastructure.note: 'Opacc gibt an, dass sämtliche Daten auf eigenen, von eigenem Personal gewarteten Systemen in der gemieteten White Space im CKW-Rechenzentrum in Luzern-Littau laufen. Der zweite Standort wird nicht genannt.'
      openSource.note: 'Proprietäre lizenzierte Software; es wird kein Quellcode veröffentlicht.'
      alternativesTo.sap.note: 'Richtet sich vor allem an mittelgrosse Schweizer Handels- und Dienstleistungsunternehmen; keine öffentlichen Preise.'
      alternativesTo.microsoft-dynamics-365.note: 'Richtet sich vor allem an mittelgrosse Schweizer Handels- und Dienstleistungsunternehmen; keine öffentlichen Preise.'
---

Opacc ERP is business software for trading, service and manufacturing
companies, mainly in Switzerland. It covers order processing, purchasing,
warehouse and batch management, shipping, production planning, customer
service and time recording, with management reporting and contribution-margin
accounting. CRM and an online shop run on the same OXAS platform, which offers
an API with read and write access to its resources. Mobile apps are available
for warehouse, service and sales staff.

The software can run on premises or in the Opacc Cloud, and customers can
switch between the two. Opacc operates the cloud on its own systems in a
rented area of the CKW data centre in Lucerne and at a second, unnamed site,
and states that data is stored in Switzerland. The Windows client (Nytron)
requires Windows 10 22H2 or Windows 11.

Opacc does not publish prices. Its website does not describe payroll or HR
modules for the ERP; reference customers range from about 10 to 999 employees.
