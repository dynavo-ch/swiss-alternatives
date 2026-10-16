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
i18n:
  de:
    tagline: 'Cloud-Server, Kubernetes, Objektspeicher und Mac-Hosting aus Schweizer Rechenzentren.'
    description: 'Flow Swiss bietet virtuelle Maschinen, Managed Kubernetes, eine App-Plattform, S3-kompatiblen Objektspeicher und Mac Bare Metal aus Rechenzentren in der Schweiz.'
    notes:
      swiss.developed.note: 'Flow wird von seinen Gründern aus der Schweiz geführt und pflegt eigene CLI- und API-Clients; der Entwicklungsstandort wird nicht ausdrücklich angegeben.'
      swiss.hosted.note: 'Flow gibt an, dass Kundendaten ausschliesslich in der Schweiz gehostet werden. Die Dokumentation nennt drei Regionen: ZRH1 (Zürich), ALP1 (Luzern) und ALP2, ein Bunker-Rechenzentrum in der Zentralschweiz.'
      swiss.infrastructure.note: 'Flow nennt externe Betreiber für seine Rechenzentren, daher wird angenommen, dass die Plattform in Colocation läuft. Der Betreiber von ALP2 wird nicht angegeben. Flow gehört zur Schweizer Sonio-Gruppe, deren letztliche Aktionäre nicht veröffentlicht werden.'
      openSource.note: 'Das CLI, der Go-Client und der CSI-Treiber sind Open Source; die Cloud-Plattform selbst ist proprietär.'
      pricing.startingPrice.note: 'Object Storage, ab CHF 0.0138 pro Stunde; Compute ab CHF 29/Monat (CHF 0.04/Stunde); stündliche Abrechnung, ohne Mindestlaufzeit'
      alternativesTo.aws.note: 'Deckt Compute, Managed Kubernetes, Object Storage, Load Balancer und VPN ab; deutlich kleineres Dienstangebot.'
      alternativesTo.digitalocean.note: 'Deckt virtuelle Maschinen, Managed Kubernetes, eine App-Plattform und Object Storage ab.'
      alternativesTo.amazon-s3.note: 'Über den S3-kompatiblen Object Storage von Flow.'
      alternativesTo.heroku.note: 'Über App Engine, eine verwaltete Container-Hosting-Plattform.'
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
