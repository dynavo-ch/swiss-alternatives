---
name: APPUiO
aliases: [APPUiO Cloud, appuio.ch]
company: vshn
tagline: Managed Red Hat OpenShift container platform running in Swiss cloud zones.
description: >-
  APPUiO is a Kubernetes container platform based on Red Hat OpenShift, run by
  Zurich-based VSHN on cloudscale and Exoscale zones in Switzerland.
website: https://www.appuio.ch
status: active
launched: 2016

categories: [paas, kubernetes]
alternativesTo:
  - id: red-hat-openshift
    note: APPUiO is itself built on Red Hat OpenShift; it replaces Red Hat's hosted OpenShift services, not the software.
  - id: heroku
    note: Applications are deployed as OpenShift/Kubernetes workloads rather than Heroku dynos.
  - id: aws
    note: Only as an alternative to managed Kubernetes and container hosting (EKS, ECS).
  - id: google-cloud
    note: Only as an alternative to managed Kubernetes and container hosting (GKE, Cloud Run).
  - id: microsoft-azure
    note: Only as an alternative to managed Kubernetes and container hosting (AKS, Azure Red Hat OpenShift).

audience: [developer, business]
deployment: [saas, managed]
platforms: [web, cli, api]

swiss:
  developed:
    value: partial
    basis: inferred
    source: our-story
    note: >-
      VSHN operates the platform from Zurich and develops its portal, billing
      and tooling, but the core platform is Red Hat OpenShift, developed by US
      company Red Hat. APPUiO was created in 2016 by VSHN together with Puzzle
      ITC; VSHN took it over fully in 2024.
  hosted:
    value: yes
    basis: vendor
    source: features
    note: >-
      APPUiO Cloud is offered in zones on cloudscale and Exoscale
      infrastructure; VSHN states that data is stored in ISO 27001-certified
      data centres in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: cloudscale.ch AG and Exoscale (Akenes SA)
    type: public-cloud
    swissOwned: partial
    basis: vendor
    source: pricing
    note: >-
      APPUiO runs on third-party IaaS. cloudscale is a Swiss-owned provider;
      Exoscale is operated by Lausanne-based Akenes SA, which belongs to
      Austria's A1 Telekom Austria Group.

openSource:
  value: partial
  license: Apache-2.0
  repository: https://github.com/appuio
  basis: vendor
  source: github
  note: >-
    The APPUiO Cloud portal and control API and VSHN's K8up backup operator are
    open source; Red Hat OpenShift itself is a commercial subscription product.

pricing:
  model: usage-based
  chfBilling: yes
  startingPrice:
    amount: 0.001135
    currency: CHF
    period: usage
    note: Per GiB of RAM per minute on cloudscale Flex or Exoscale Standard nodes (about CHF 49 per GiB per 30 days), excl. VAT; storage extra
  url: https://products.vshn.ch/appuio/pricing.html
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  api: yes

certifications: [iso-27001, isae-3402]

tags: [openshift, kubernetes, containers, managed-kubernetes, k8up]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: APPUiO - Swiss container platform
    url: https://www.appuio.ch/
    publisher: VSHN AG
    kind: vendor
    accessed: 2026-10-15
  - id: features
    title: APPUiO - Features
    url: https://www.appuio.ch/en/funktionen
    publisher: VSHN AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: APPUiO pricing - VSHN product documentation
    url: https://products.vshn.ch/appuio/pricing.html
    publisher: VSHN AG
    kind: vendor
    accessed: 2026-10-15
  - id: docs
    title: APPUiO Cloud documentation - node classes
    url: https://docs.appuio.cloud/user/references/node-classes.html
    publisher: VSHN AG
    kind: documentation
    accessed: 2026-10-15
  - id: our-story
    title: Our story - VSHN
    url: https://www.vshn.ch/en/about/our-story/
    publisher: VSHN AG
    kind: vendor
    accessed: 2026-10-15
  - id: certifications
    title: Awards and certifications - VSHN
    url: https://www.vshn.ch/en/about/awards-certifications/
    publisher: VSHN AG
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: APPUiO on GitHub
    url: https://github.com/appuio
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Managed Container-Plattform auf Basis von Red Hat OpenShift, betrieben in Schweizer Cloud-Zonen.'
    description: 'APPUiO ist eine Kubernetes-Container-Plattform auf Basis von Red Hat OpenShift, betrieben von der Zürcher VSHN auf Zonen von cloudscale und Exoscale in der Schweiz.'
---

APPUiO is a container platform based on Red Hat OpenShift, operated by VSHN AG in
Zurich. Customers deploy containerised applications into projects on a shared
OpenShift cluster via the web console, the `oc` command-line tool or the
Kubernetes API. Backups with K8up, databases, support plans and dedicated
managed OpenShift clusters are offered as additional services.

APPUiO Cloud runs in zones on cloudscale and Exoscale infrastructure, which VSHN
states are located in Switzerland. VSHN does not operate its own data centres:
cloudscale is Swiss-owned, while Exoscale belongs to the Austrian A1 Group.
Billing is per minute based on reserved or used memory and storage in CHF; the
price list excludes VAT.

VSHN states that it holds ISO 27001 certification and an ISAE 3402 Type 2 report.
The platform was launched in 2016 together with Puzzle ITC, from which VSHN
acquired it in 2024.
