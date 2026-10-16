---
name: oriented.net
aliases: [oriented]
company: oriented-net
tagline: Managed Linux hosting, VPS, ARM servers and Kubernetes from its own data centre in Basel.
description: >-
  oriented.net is a Basel hosting provider offering web hosting, x86 and ARM VPS,
  physical servers, managed Kubernetes and colocation in its own data centre.
website: https://oriented.net
status: active

categories: [vps-hosting, web-hosting, kubernetes]
alternativesTo:
  - id: digitalocean
    note: Fixed VPS packages on Xen with optional management by oriented.net engineers; Kubernetes runs on dedicated ARM servers and is quoted individually.
  - id: ionos
    note: Covers web hosting, VPS, physical servers and colocation, with a focus on managed Linux and open-source setups.

audience: [business]
deployment: [saas, managed]
platforms: [web]

swiss:
  developed:
    value: unknown
    note: >-
      Services are run by oriented.net's team in Basel on open-source software
      such as Linux and the Xen hypervisor; in-house software development is not
      described.
  hosted:
    value: yes
    basis: vendor
    source: vps
    note: >-
      Hosting and server products list Switzerland as the server location; the
      server housing page names oriented.net's data centre in Basel.
  dataLocations: [CH]
  infrastructure:
    provider: oriented.net GmbH (own data centre)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    facility: oriented.net data centre, Basel
    basis: vendor
    source: housing
    note: >-
      oriented.net states that its entire network and IT infrastructure is owned
      by the company and describes a self-owned, ISO 27001-certified data centre
      in Basel; who owns the building is not stated.

pricing:
  model: subscription
  chfBilling: yes
  startingPrice:
    amount: 120
    currency: CHF
    period: year
    note: PHP web hosting Level W1 (10 GB); VPS from CHF 40 per month (ARM) or CHF 50 per month (x86); VAT not stated
  url: https://oriented.net/hosting/php
  checked: 2026-10-16
  basis: vendor
  source: php

certifications: [iso-27001]

sustainability:
  summary: >-
    oriented.net states that it uses only renewable electricity, mainly
    hydropower, and no nuclear power.
  basis: vendor
  source: about

tags:
  [
    managed-hosting,
    vps,
    arm,
    xen,
    kubernetes,
    colocation,
    php,
    python,
    ruby-on-rails,
    tomcat,
    zimbra,
    openbsd,
  ]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: about
    title: About – oriented.net
    url: https://oriented.net/company/about
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: certifications
    title: Certifications – oriented.net
    url: https://oriented.net/company/certifications
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: vps
    title: Virtual Private Server – oriented.net
    url: https://oriented.net/server/virtual-private-server
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: arm-vps
    title: ARM Virtual Private Server – oriented.net
    url: https://oriented.net/server/arm-vps
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: kubernetes
    title: Managed Kubernetes Cluster on ARM Servers – oriented.net
    url: https://oriented.net/server/managed-kubernetes
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: housing
    title: Server Housing – oriented.net
    url: https://oriented.net/server/server-housing
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: php
    title: PHP Web Hosting – oriented.net
    url: https://oriented.net/hosting/php
    publisher: oriented.net GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: oriented.net GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/oriented.net-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Managed Linux-Hosting, VPS, ARM-Server und Kubernetes aus dem eigenen Rechenzentrum in Basel.'
    description: 'oriented.net ist ein Basler Hosting-Anbieter mit Webhosting, x86- und ARM-VPS, physischen Servern, Managed Kubernetes und Colocation im eigenen Rechenzentrum.'
---

oriented.net is a managed hosting and server provider founded in Basel in 2002.
Its portfolio covers web hosting for PHP, Python, Ruby on Rails and Apache
Tomcat, Zimbra email, virtual private servers on x86 and ARM hardware with the
Xen hypervisor, OpenBSD virtual machines, physical and GPU servers, managed
Kubernetes on dedicated ARM servers, a web application firewall and server
housing. Servers can be run by the customer or managed by oriented.net's
Linux engineers.

The company says it owns its entire network and server infrastructure and runs
it in its own data centre in Basel, which, like the company, is certified to
ISO/IEC 27001 according to oriented.net. It also states that it uses only
renewable electricity. oriented.net also runs the wölkli cloud storage service
and a Raspberry Pi server offer.

Prices are published in CHF: web hosting from CHF 120 per year, ARM VPS from CHF
40 and x86 VPS from CHF 50 per month, with management of a VPS available for
CHF 80 per month extra. Managed Kubernetes is priced on request.
