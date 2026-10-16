---
name: Divio
aliases: [Divio Cloud, divio.com]
company: divio
tagline: Container-based PaaS for web applications, with a choice of cloud and region.
description: >-
  Divio is a PaaS for Docker-based web apps, run by Zurich-based Divio AG on
  AWS, Exoscale or Azure, with the AWS Zurich region as a Swiss hosting option.
website: https://www.divio.com
status: active

categories: [paas]
alternativesTo:
  - id: heroku
    note: Docker-based deployments with test and live environments; runs on third-party clouds rather than own infrastructure.

audience: [developer, business, enterprise]
deployment: [saas, managed]
platforms: [web, cli]

swiss:
  developed:
    value: partial
    basis: inferred
    source: report-2023q4
    note: >-
      The group's operating activities are conducted mainly within Divio AG in
      Zurich (Q4 2023 report), while the listed parent company and its management
      are based in Stockholm. The website footer reads "Built in Switzerland.
      Designed in Sweden."
  hosted:
    value: optional
    basis: vendor
    source: aws-zurich
    note: >-
      Applications run in a "cloudspace" chosen per project. Divio offers the
      AWS Europe (Zurich) region for hosting in Switzerland; according to its
      documentation, free Developer-plan projects use a North America cloudspace
      on AWS. Since February 2026 Divio also markets a European-only option with
      infrastructure exclusively in the EU or Switzerland.
  dataLocations: [CH, US]
  infrastructure:
    provider: Amazon Web Services and Exoscale; Microsoft Azure on Enterprise plans
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: llms
    note: >-
      Divio does not operate its own data centres. The Swiss region named by
      Divio is AWS Europe (Zurich), run by US-owned Amazon Web Services. Exoscale
      belongs to Austria's A1 Telekom Austria Group; which Exoscale zones Divio
      uses was not confirmed.

openSource:
  value: partial
  repository: https://github.com/divio/divio-cli
  basis: vendor
  source: github
  note: The Divio CLI is published on GitHub; the platform and control panel are proprietary.

pricing:
  freeTrial: yes
  url: https://www.divio.com/pricing/
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    The pricing page lists a fixed Lite plan offered as a free trial and a
    customisable Business plan with Silver, Gold and Platinum feature tiers, but
    publishes no fixed prices. Cloud infrastructure costs are passed on at cost.

certifications: [iso-27001, iso-27017, iso-27018]

tags: [paas, docker, containers, django, multi-cloud, aws-zurich]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: pricing
    title: Pricing - Divio
    url: https://www.divio.com/pricing/
    publisher: Divio Technologies AB
    kind: vendor
    accessed: 2026-10-15
  - id: llms
    title: Divio - platform summary (llms.txt)
    url: https://www.divio.com/llms.txt
    publisher: Divio Technologies AB
    kind: vendor
    accessed: 2026-10-15
  - id: infrastructure
    title: Divio infrastructure - cloudspaces
    url: https://docs.divio.com/reference/infrastructure/
    publisher: Divio
    kind: documentation
    accessed: 2026-10-15
  - id: aws-zurich
    title: Amazon Web Services and the Divio PaaS
    url: https://www.divio.com/aws-swiss-region-partner/
    publisher: Divio Technologies AB
    kind: vendor
    accessed: 2026-10-15
  - id: european-hosting
    title: Divio launches pure European managed hosting solution
    url: https://www.inderes.fi/releases/divio-launches-pure-european-managed-hosting-solution
    publisher: Divio Technologies AB
    kind: press
    accessed: 2026-10-15
  - id: iso
    title: ISO-compliant PaaS - Divio
    url: https://www.divio.com/iso-compliant-paas/
    publisher: Divio Technologies AB
    kind: vendor
    accessed: 2026-10-15
  - id: terms
    title: Terms of Service - Divio
    url: https://www.divio.com/terms-and-policies/terms/
    publisher: Divio AG
    kind: vendor
    accessed: 2026-10-15
  - id: report-2023q4
    title: Divio Technologies AB (publ) - Q4 2023 report
    url: https://storage.mfn.se/ed54ca25-550f-4dc0-b963-812d450d4080/2023q4-report-divio.pdf
    publisher: Divio Technologies AB
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: divio/divio-cli on GitHub
    url: https://github.com/divio/divio-cli
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Container-basierte PaaS für Webanwendungen, mit Wahl von Cloud und Region.'
    description: 'Divio ist eine PaaS für Docker-basierte Web-Apps der Zürcher Divio AG, betrieben auf AWS, Exoscale oder Azure, mit der AWS-Region Zürich als Hosting-Option in der Schweiz.'
---

Divio is a platform-as-a-service for deploying containerised web applications;
it lists support for frameworks such as django CMS, Wagtail, Node.js, Laravel,
Symfony and Spring Boot. Projects get separate test and live environments,
backups and TLS, and are managed through a web control panel and a command-line
tool. The contracting party is Divio AG in Zurich under Swiss law; Divio AG is a
wholly owned subsidiary of Swedish Divio Technologies AB, which is listed on
Nasdaq First North Growth Market.

Divio does not run its own servers. Workloads are placed on AWS or Exoscale, and
on Microsoft Azure for Enterprise plans. Hosting in Switzerland is available via
the AWS Europe (Zurich) region, but it is not the default for every plan, and
the underlying infrastructure is not Swiss-owned.

Divio states that it holds ISO 27001, 27017 and 27018 certifications. Its
pricing page describes plans and feature tiers without publishing fixed prices.
