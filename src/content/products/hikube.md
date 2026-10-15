---
name: Hikube
aliases: [Hidora Hikube, hikube.cloud]
company: hidora
tagline: Kubernetes-based cloud with VMs, GPUs and S3 storage replicated across three Swiss sites.
description: >-
  Hikube is a cloud platform from Geneva-based Hidora offering VMs, managed
  Kubernetes, GPUs, databases and S3 storage across three data centres in Switzerland.
website: https://hikube.cloud
status: active

categories: [cloud-platforms, kubernetes, vps-hosting, object-storage]
alternativesTo:
  - id: aws
    note: Covers VMs, GPUs, managed Kubernetes, databases, messaging and object storage; much smaller service catalogue.
  - id: microsoft-azure
    note: Covers core IaaS, managed Kubernetes and databases; much smaller service catalogue.
  - id: google-cloud
    note: Covers core IaaS, managed Kubernetes and databases; much smaller service catalogue.
  - digitalocean
  - id: amazon-s3
    note: Via S3-compatible object storage.

audience: [developer, business, enterprise]
deployment: [saas, on-premises]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: Hidora states that its engineering team works from its offices in Petit-Lancy near Geneva.
  hosted:
    value: yes
    basis: vendor
    source: security
    note: >-
      Hidora states that compute, storage, backups and metadata stay in three
      Swiss data centres in Geneva, Gland and Lucerne, with replication across
      the three sites.
  dataLocations: [CH]
  infrastructure:
    provider: Hidora SA (own platform in third-party data centres)
    providerCountry: CH
    type: colocation
    swissOwned: unknown
    facility: Stack Infrastructure GEN01 (Geneva) and GEN02 (Gland); EWL Stollen (Lucerne)
    basis: inferred
    source: security
    note: >-
      Hidora names the three facilities and says the buildings have their own
      site operators, so the platform is assumed to run in colocation. Hidora's
      shareholders are not published.

pricing:
  model: usage-based
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 24
    currency: CHF
    period: month
    note: s1.small instance (1 vCPU, 2 GB RAM), CHF 0.033 per hour, excl. VAT; billed hourly
  url: https://hikube.cloud/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  api: yes

certifications: [iso-27001]

tags: [iaas, kubernetes, gpu, s3, virtual-machines, dbaas, multi-site]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: Hikube - Swiss sovereign cloud
    url: https://hikube.cloud/
    publisher: Hidora SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Hikube pricing
    url: https://hikube.cloud/pricing
    publisher: Hidora SA
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Hikube security and compliance
    url: https://hikube.cloud/company/security-compliance
    publisher: Hidora SA
    kind: vendor
    accessed: 2026-10-15
  - id: hidora-hikube
    title: Hikube - Hidora
    url: https://hidora.io/en/hikube
    publisher: Hidora SA
    kind: vendor
    accessed: 2026-10-15
  - id: about
    title: About Hidora
    url: https://hidora.io/en/about
    publisher: Hidora SA
    kind: vendor
    accessed: 2026-10-15
  - id: launch
    title: Hidora präsentiert Cloud-Angebot mit Replikation an drei Standorten
    url: https://www.netzwoche.ch/news/2025-09-22/hidora-praesentiert-cloud-angebot-mit-replikation-an-drei-standorten
    publisher: Netzwoche
    kind: press
    accessed: 2026-10-15
  - id: jelastic
    title: Jelastic Cloud - Hidora
    url: https://hidora.io/en/jelastic
    publisher: Hidora SA
    kind: vendor
    accessed: 2026-10-15
---

Hikube is a cloud platform operated by Hidora SA near Geneva. It offers Linux and
Windows virtual machines, managed Kubernetes, NVIDIA GPU instances, block
storage, S3-compatible object storage, managed databases (PostgreSQL, MySQL,
Redis) and Kafka and RabbitMQ messaging. Hidora dates the platform to 2023; the
three-site offering was presented publicly in September 2025.

Data is replicated across three data centres in Geneva, Gland and Lucerne, which
are run by third-party facility operators. Billing is hourly by consumed
resources, with prices in CHF or EUR excluding VAT and discounts for longer
commitments; a 14-day trial is available without a credit card. Hidora states
that it is ISO 27001-certified by SQS; the certificate is available on request
rather than published.

Hidora is a smaller provider than the hyperscalers, and its service catalogue is
correspondingly narrower. It also continues to sell a separate PaaS based on
Virtuozzo Application Platform (formerly Jelastic), hosted in Switzerland.
