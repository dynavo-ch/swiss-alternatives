---
name: Netstream Cloud
aliases: [Netstream Virtual Data Center, Netstream VDC]
company: netstream
tagline: Virtual data centres, managed Kubernetes, S3 storage and backup from Swiss data centres.
description: >-
  Netstream Cloud offers virtual data centres, managed Kubernetes, S3-compatible
  object storage and backup for businesses from data centres in Switzerland.
website: https://netstream.ch/business/vdc/
status: active

categories: [cloud-platforms, kubernetes, object-storage, backup]
alternativesTo:
  - id: aws
    note: Covers virtual machines, Kubernetes, S3-compatible storage and backup; managed databases are not part of the published portfolio.
  - id: microsoft-azure
    note: Virtual data centres run on VMware Cloud Director rather than a hyperscaler platform; offered to businesses only.
  - id: amazon-s3
    note: Via the S3-compatible Netstream Object Storage, with object lock.

audience: [business]
deployment: [saas, managed]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: kubernetes
    note: >-
      Netstream operates its own OpenStack platform for Kubernetes and runs all
      systems with its own engineering team; the virtual data centre is based on
      VMware Cloud Director and object storage on Cloudian HyperStore.
  hosted:
    value: yes
    basis: vendor
    source: trust
    note: >-
      Netstream states that all services are operated in Switzerland and that
      system data is stored and processed in its own data centres.
  dataLocations: [CH]
  infrastructure:
    provider: Netstream (own data centres and colocation)
    type: mixed
    swissOwned: unknown
    facility: >-
      Two own data centres in Dübendorf; colocation sites at Interxion (Digital
      Realty) in Glattbrugg, Equinix in Zurich and ColoBâle in Basel
    basis: vendor
    source: datacenter
    note: >-
      The ultimate shareholders of Netstream are not published, so the
      ownership of the infrastructure operator is unverified.

pricing:
  model: usage-based
  freeTrial: yes
  chfBilling: yes
  url: https://netstream.ch/business/vdc/
  checked: 2026-10-16
  basis: vendor
  source: vdc

features:
  api: yes

certifications: [iso-27001]

sustainability:
  summary: >-
    The Dübendorf data centre and offices have run on solar power since 2018,
    with a projected PUE of 1.23.
  basis: vendor
  source: datacenter

tags: [iaas, virtual-machines, vmware-cloud-director, kubernetes, openstack, s3, veeam, rubrik]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: vdc
    title: Virtual Data Center - Netstream
    url: https://netstream.ch/business/vdc/
    publisher: Netstream AG
    kind: vendor
    accessed: 2026-10-16
  - id: kubernetes
    title: Netstream Managed Kubernetes
    url: https://netstream.ch/business/kubernetes/
    publisher: Netstream AG
    kind: vendor
    accessed: 2026-10-16
  - id: object-storage
    title: Object Storage - der Schweizer S3 Cloud Speicher
    url: https://netstream.ch/business/backup/object-storage/
    publisher: Netstream AG
    kind: vendor
    accessed: 2026-10-16
  - id: backup
    title: Einfaches Backup in die Schweizer Cloud
    url: https://netstream.ch/business/backup/
    publisher: Netstream AG
    kind: vendor
    accessed: 2026-10-16
  - id: datacenter
    title: Die Schweizer Rechenzentren der Netstream
    url: https://netstream.ch/datacenter/
    publisher: Netstream AG
    kind: vendor
    accessed: 2026-10-16
  - id: trust
    title: Trust Center - Netstream
    url: https://netstream.ch/trust/
    publisher: Netstream AG
    kind: vendor
    accessed: 2026-10-16
---

Netstream Cloud is the business cloud offering of Netstream, a Wallisellen-based
provider that also runs TV streaming and connectivity services. It includes
virtual data centres based on VMware Cloud Director in public, private
(dedicated) or on-premises edge variants, managed Kubernetes clusters on
upstream Kubernetes running on Netstream's own OpenStack platform, S3-compatible
object storage with object lock, and backup for servers, virtual machines,
endpoints and Microsoft 365 or Google accounts. Netstream's imprint names both
Netstream AG and its sister company Netstream Cloud AG in Dübendorf, whose
registered purpose is data-centre and cloud services.

Netstream operates two data centres of its own in Dübendorf and uses colocation
sites at Interxion in Glattbrugg, Equinix in Zurich and ColoBâle in Basel for
redundancy. According to Netstream, the whole organisation, including both
companies and the data centres, has been ISO/IEC 27001 certified since March 2022.

The services are offered to businesses only. A price calculator lists
per-resource prices in CHF, for example CHF 7.36 per vCPU and CHF 9.35 per GB of
memory for the virtual data centre, and a 14-day free test environment is
available.
