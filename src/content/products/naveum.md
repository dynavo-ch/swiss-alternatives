---
name: Naveum
aliases: [Naveum IaaS, Naveum Cloud Stack, Naveum NCS]
company: naveum
tagline: Virtual data centres, hosted private clouds and backup from Swiss data centres.
description: >-
  Naveum is a cloud provider from Adliswil offering VMware-based virtual data
  centres, hosted private clouds, backup and disaster recovery in Switzerland.
website: https://naveum.ch
status: active

categories: [cloud-platforms, backup]
alternativesTo:
  - id: aws
    note: Covers virtual machines, private clouds, backup and disaster recovery; sold mainly through IT service providers and resellers.
  - id: microsoft-azure
    note: Virtual data centres on VMware Cloud Director rather than a hyperscaler platform; prices are quoted on request.

audience: [business]
deployment: [saas, managed]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Naveum operates the service from Adliswil on VMware Cloud Director or
      Huawei FusionCompute and states that its performance-monitoring platform
      was developed in-house.
  hosted:
    value: yes
    basis: vendor
    source: iaas
    note: >-
      Naveum guarantees data storage in Switzerland; backups are kept in a
      different Swiss data centre from the production systems.
  dataLocations: [CH]
  infrastructure:
    provider: Naveum AG (own hardware in colocation)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    facility: Equinix and Digital Realty data centres in Switzerland
    basis: vendor
    source: datacenters
    note: >-
      The data-centre page names four Swiss data centres at Equinix and Digital
      Realty; the IaaS page refers to three.

pricing:
  model: quote
  url: https://naveum.ch/infrastructure-as-a-service/
  checked: 2026-10-16
  basis: vendor
  source: iaas

features:
  api: yes

tags: [iaas, vmware-cloud-director, private-cloud, draas, backup, microsoft-365-backup, huawei]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: about
    title: Unsere Werte und Identität - Naveum
    url: https://naveum.ch/about-us/
    publisher: Naveum AG
    kind: vendor
    accessed: 2026-10-16
  - id: iaas
    title: Swiss Infrastructure as a Service - Naveum
    url: https://naveum.ch/infrastructure-as-a-service/
    publisher: Naveum AG
    kind: vendor
    accessed: 2026-10-16
  - id: ncs
    title: Naveum Cloud Stack - Naveum
    url: https://naveum.ch/naveum-cloud-stack/
    publisher: Naveum AG
    kind: vendor
    accessed: 2026-10-16
  - id: backup
    title: Backup as a Service - Naveum
    url: https://naveum.ch/backup-as-a-service/
    publisher: Naveum AG
    kind: vendor
    accessed: 2026-10-16
  - id: datacenters
    title: Cloud aus Schweizer Rechenzentren - Naveum
    url: https://naveum.ch/rechenzentren/
    publisher: Naveum AG
    kind: vendor
    accessed: 2026-10-16
  - id: certificate
    title: Certificate No. 01 153 2401774/02 (Truecore AG) - Certipedia
    url: https://www.certipedia.com/certificates/01+153+2401774%2F02?locale=en
    publisher: TÜV Rheinland
    kind: independent
    accessed: 2026-10-16
---

Naveum is a cloud provider in Adliswil near Zurich that sells mainly to IT
service providers, resellers and software companies. Its infrastructure as a
service provides virtual data centres on VMware Cloud Director, either in one
data centre with a 99.9% uptime SLA or on a stretched cluster across two data
centres with 99.99%. Customers manage resources through a web portal or the
Cloud Director API and get access to Naveum's performance-monitoring dashboards.

Other services include managed VMware private clouds on dedicated hardware, the
Naveum Cloud Stack, a hosted private cloud on Huawei FusionCompute (KVM)
positioned as an alternative to VMware, backup for hosted systems and Microsoft
365, tape archiving and disaster recovery as a service. Naveum also lists Huawei
cloud storage, managed GitLab and Atlassian hosting.

The hardware is hosted in Swiss colocation data centres operated by Equinix and
Digital Realty. Naveum does not publish prices on its website. A TÜV Rheinland
certificate linked from its homepage, issued to the parent company Truecore AG,
is listed as no longer valid.
