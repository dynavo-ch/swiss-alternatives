---
name: Flow Swiss
aliases: [Flow, flow.swiss, Flow Cloud Platform]
company: flow-swiss
tagline: Cloud servers, Kubernetes, object storage and Mac hosting from Swiss data centres.
description: >-
  Flow Swiss offers virtual machines, managed Kubernetes, an app platform,
  S3-compatible object storage and Mac bare metal from data centres in Switzerland.
website: https://flow.swiss
status: active

categories: [cloud-platforms, vps-hosting, kubernetes, object-storage, paas]
alternativesTo:
  - id: aws
    note: Covers compute, managed Kubernetes, object storage, load balancers and VPN; much smaller service catalogue.
  - id: digitalocean
    note: Covers virtual machines, managed Kubernetes, an app platform and object storage.
  - id: amazon-s3
    note: Via the S3-compatible Flow object storage.
  - id: heroku
    note: Via App Engine, a managed container hosting platform.

audience: [developer, business, enterprise]
deployment: [saas]
platforms: [web, cli, api]

swiss:
  developed:
    value: yes
    basis: inferred
    source: about
    note: >-
      Flow is run by its founders from Switzerland and maintains its own CLI and
      API clients; the development location is not stated explicitly.
  hosted:
    value: yes
    basis: vendor
    source: about
    note: >-
      Flow states that customer data is hosted exclusively in Switzerland. Its
      documentation lists three regions: ZRH1 (Zurich), ALP1 (Lucerne) and ALP2,
      a bunker data centre in central Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: Flow Swiss AG (own platform in third-party data centres)
    providerCountry: CH
    type: colocation
    swissOwned: unknown
    facility: NTT Global Data Centers Switzerland AG (ZRH1); CKW Fiber Services AG (ALP1)
    basis: inferred
    source: infrastructure
    note: >-
      Flow names external operators for its data centres, so the platform is
      assumed to run in colocation. The operator of ALP2 is not stated. Flow
      belongs to the Swiss Sonio group, whose ultimate shareholders are not
      published.

openSource:
  value: partial
  license: MIT
  repository: https://github.com/flowswiss/cli
  basis: vendor
  source: github
  note: The CLI, Go client and CSI driver are open source; the cloud platform itself is proprietary.

pricing:
  model: usage-based
  chfBilling: yes
  startingPrice:
    amount: 10
    currency: CHF
    period: month
    note: Object Storage, from CHF 0.0138 per hour; compute from CHF 29/month (CHF 0.04/hour); hourly billing, no commitment
  url: https://flow.swiss/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  api: yes

certifications: [iso-27001]

tags: [iaas, virtual-machines, kubernetes, s3, mac-hosting, paas]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: about
    title: About us - Flow Swiss
    url: https://flow.swiss/about-us
    publisher: Flow Swiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: compute
    title: Compute - Flow Swiss
    url: https://flow.swiss/compute
    publisher: Flow Swiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Pricing - Flow Swiss
    url: https://flow.swiss/pricing
    publisher: Flow Swiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: infrastructure
    title: Infrastructure & Security - Flow Swiss
    url: https://flow.swiss/infrastructure-security
    publisher: Flow Swiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: regions
    title: Regions - Flow documentation
    url: https://doc.flow.swiss/platform/regions
    publisher: Flow Swiss AG
    kind: documentation
    accessed: 2026-10-15
  - id: github
    title: flowswiss on GitHub
    url: https://github.com/flowswiss
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

Flow Swiss provides a self-service cloud with virtual machines (up to 32 vCPUs
and 512 GB of memory), volumes, private networks, load balancers, VPN, managed
Kubernetes, App Engine for container-based applications, S3-compatible object
storage and dedicated Mac mini and Mac Studio hosting. It is managed through a
web console, an API and an open-source CLI.

Flow states that all customer data is hosted in Switzerland across three
regions: ZRH1 in Zurich, operated by NTT, ALP1 in Lucerne, operated by CKW, and
ALP2, a bunker data centre in central Switzerland. Storage is encrypted at rest
by default, and Flow states that its cloud platform is ISO 27001-certified.

Pricing is pay-as-you-go in CHF, billed hourly without commitment; the pricing
page does not state whether VAT is included. Since September 2024 Flow has been
part of the Swiss IT service group Sonio and continues under its own brand.
