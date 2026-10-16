---
name: Nine
aliases: [nine.ch, Nine Kubernetes Engine, NKE, Deploio]
company: nine
tagline: Managed Kubernetes, app platform, databases and servers on Swiss infrastructure.
description: >-
  Nine is a Zurich cloud provider offering managed Kubernetes (NKE), the Deploio
  app platform, managed databases, object storage and servers in Switzerland.
website: https://www.nine.ch
status: active

categories: [kubernetes, paas, cloud-platforms, vps-hosting, object-storage]
alternativesTo:
  - id: heroku
    note: Via Deploio, a managed app platform that builds and deploys on Git push.
  - id: google-cloud
    note: Covers managed Kubernetes, databases, object storage and servers; much smaller service catalogue.
  - id: aws
    note: Covers managed Kubernetes, databases, object storage and servers; much smaller service catalogue.
  - id: amazon-s3
    note: Via the S3-compatible Nine object storage.

audience: [developer, business, enterprise]
deployment: [managed, saas]
platforms: [web, cli, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: self-declaration
    note: >-
      Operated and developed from Zurich; out-of-hours on-call support is
      provided through a wholly owned subsidiary in Canada.
  hosted:
    value: yes
    basis: vendor
    source: infrastructure
    note: >-
      Services run on Nine's own infrastructure in two data centres in the
      canton of Zurich. A legacy managed GKE offering on Google Cloud is no
      longer available to new customers.
  dataLocations: [CH]
  infrastructure:
    provider: Nine Internet Solutions AG (own hardware in colocation)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    facility: ColoZüri (Zurich-Altstetten) and NTT Zürich 1 (Rümlang)
    basis: vendor
    source: infrastructure

openSource:
  value: partial
  license: Apache-2.0
  repository: https://github.com/ninech/nctl
  basis: vendor
  source: github
  note: >-
    The nctl command-line tool is open source and the managed stacks are built
    on open-source software; the Cockpit portal and platform are proprietary.

pricing:
  model: usage-based
  chfBilling: yes
  startingPrice:
    amount: 5.5
    currency: CHF
    period: month
    note: On-demand MySQL or PostgreSQL Single DB (1 GB), billed per minute; NKE from CHF 305.30/month
  url: https://www.nine.ch/en/price-calculator/
  checked: 2026-10-15
  basis: vendor
  source: databases

features:
  api: yes

certifications: [iso-27001, iso-9001]

tags: [kubernetes, paas, managed-hosting, dbaas, s3, gpu, colocation]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: self-declaration
    title: Disclaimer and company self-declaration - Nine
    url: https://www.nine.ch/en/disclaimer/
    publisher: Nine Internet Solutions AG
    kind: vendor
    accessed: 2026-10-15
  - id: infrastructure
    title: Our Nine Infrastructure
    url: https://www.nine.ch/en/infrastructure/
    publisher: Nine Internet Solutions AG
    kind: vendor
    accessed: 2026-10-15
  - id: kubernetes
    title: Managed Kubernetes (NKE) - Nine
    url: https://www.nine.ch/en/products/kubernetes/
    publisher: Nine Internet Solutions AG
    kind: vendor
    accessed: 2026-10-15
  - id: deploio
    title: Deploio - Nine
    url: https://www.nine.ch/en/products/deploio/
    publisher: Nine Internet Solutions AG
    kind: vendor
    accessed: 2026-10-15
  - id: databases
    title: Databases - Nine
    url: https://www.nine.ch/en/products/databases/
    publisher: Nine Internet Solutions AG
    kind: vendor
    accessed: 2026-10-15
  - id: llms
    title: Nine - company and product overview (llms-full.txt)
    url: https://www.nine.ch/en/llms-full.txt
    publisher: Nine Internet Solutions AG
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: ninech/nctl
    url: https://github.com/ninech/nctl
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Managed Kubernetes, App-Plattform, Datenbanken und Server auf Schweizer Infrastruktur.'
    description: 'Nine ist ein Zürcher Cloud-Anbieter mit Managed Kubernetes (NKE), der App-Plattform Deploio, verwalteten Datenbanken, Objektspeicher und Servern in der Schweiz.'
---

Nine is a managed cloud and hosting provider from Zurich. Its main offerings are
Nine Kubernetes Engine (NKE), a managed Kubernetes service; Deploio, an app
platform that builds and deploys applications from Git; managed MySQL,
PostgreSQL and Redis-compatible databases; S3-compatible object storage; and
managed, root and GPU servers. Self-service resources are managed through the
Cockpit portal, an API and the nctl CLI, and most are billed per minute in CHF.

All services run on Nine's own hardware in two colocation data centres in the
canton of Zurich, ColoZüri and NTT Zürich 1. Nine Internet Solutions AG is ISO
27001 and ISO 9001 certified. Out-of-hours on-call support is handled through a
subsidiary in Canada.

Nine's self-service catalogue is narrower than that of large public clouds; the
company focuses on managed operations with optional SLAs and 24/7 on-call
support. NKE pricing starts at CHF 305.30 per month for a cluster with one
worker node and the managed software stack.
