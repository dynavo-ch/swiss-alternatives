---
name: cloudscale
aliases: [cloudscale.ch]
company: cloudscale
tagline: Self-service cloud servers, object storage and load balancers hosted in Switzerland.
description: >-
  cloudscale is a Zurich-based IaaS cloud offering virtual servers, GPU servers,
  S3-compatible object storage and load balancers from two Swiss data centres.
website: https://www.cloudscale.ch
status: active
launched: 2016

categories: [cloud-platforms, vps-hosting, object-storage]
alternativesTo:
  - id: aws
    note: Covers virtual servers, volumes, object storage and load balancers only; no managed databases or Kubernetes from cloudscale itself.
  - id: digitalocean
    note: No managed Kubernetes or managed databases from cloudscale itself; partner services are offered via its marketplace.
  - id: amazon-s3
    note: Via the S3-compatible cloudscale object storage.

audience: [developer, business]
deployment: [saas]
platforms: [web, cli, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: The platform and control panel are developed by the company's team in Zurich.
  hosted:
    value: yes
    basis: vendor
    source: datacenter
    note: >-
      All cloud infrastructure is operated in two data centres in Switzerland
      (Lupfig AG and Rümlang ZH).
  dataLocations: [CH]
  infrastructure:
    provider: cloudscale.ch AG (own hardware in colocation)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    facility: Green Datacenter AG (Lupfig) and NTT Global Data Centers Switzerland AG (Rümlang)
    basis: vendor
    source: datacenter

openSource:
  value: partial
  license: MIT
  repository: https://github.com/cloudscale-ch
  basis: vendor
  source: github
  note: >-
    Built on OpenStack and Ceph; the CLI, Terraform provider and Kubernetes
    integrations are open source, while the control panel is proprietary.

pricing:
  model: usage-based
  chfBilling: yes
  startingPrice:
    amount: 1.1
    currency: CHF
    period: usage
    note: Flex-4-1 server (1 vCPU, 4 GB RAM, 10 GB SSD), CHF 1.10 per 24 hours, billed per second from prepaid credit
  url: https://www.cloudscale.ch/en/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  sso: yes
  api: yes

certifications: [iso-27001, iso-27017, iso-27018, isae-3000]

tags: [iaas, virtual-machines, s3, gpu, openstack]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: about
    title: About - cloudscale.ch
    url: https://www.cloudscale.ch/en/about
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: offer
    title: Our Infrastructure - cloudscale.ch
    url: https://www.cloudscale.ch/en/offer
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: datacenter
    title: Datacenter - cloudscale.ch
    url: https://www.cloudscale.ch/en/datacenter
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Security - cloudscale.ch
    url: https://www.cloudscale.ch/en/security
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Pricing - cloudscale.ch
    url: https://www.cloudscale.ch/en/pricing
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: ten-years
    title: 10 Years of cloudscale
    url: https://www.cloudscale.ch/en/news/2024/09/30/10-years-of-cloudscale
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: marketplace
    title: Managed Services on Our Infrastructure
    url: https://www.cloudscale.ch/en/news/2025/03/13/managed-services-on-our-infrastructure
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: object-storage-price
    title: Price Increase for Object Storage
    url: https://www.cloudscale.ch/en/news/2026/09/29/price-increase-for-object-storage
    publisher: cloudscale.ch AG
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: cloudscale-ch on GitHub
    url: https://github.com/cloudscale-ch
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

cloudscale is an infrastructure-as-a-service platform from cloudscale.ch AG in
Zurich, generally available since 2016. It provides virtual servers with shared
or dedicated CPUs, GPU servers, SSD and bulk volumes, private networks, floating
IPs, load balancers and S3-compatible object storage. The platform is built on
OpenStack and Ceph and can be managed via a web control panel, REST API, CLI,
Terraform and Ansible.

All resources run in two data centres in Switzerland, in Lupfig (Aargau) and
Rümlang (Zurich), which can be combined for geo-redundant setups. cloudscale.ch AG
holds ISO 27001, 27017 and 27018 certifications. Billing is per second from
prepaid credit in CHF; the object storage price per GB rises from 1 January 2027.

cloudscale does not operate managed Kubernetes or managed databases itself;
partners offer such services on its infrastructure through a marketplace. Swiss
managed service provider Cyberlink holds 40% of the company.
