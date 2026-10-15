---
name: CloudSigma
aliases: [cloudsigma.com]
company: cloudsigma
tagline: IaaS cloud with freely sized virtual servers and a location in Switzerland.
description: >-
  CloudSigma is an IaaS cloud from Zug-based CloudSigma AG with per-resource
  billing and locations worldwide, including one in Geneva, Switzerland.
website: https://www.cloudsigma.com
status: active

categories: [cloud-platforms, vps-hosting]
alternativesTo:
  - id: aws
    note: Covers virtual servers, storage, networking and GPUs only; much smaller service catalogue.
  - id: digitalocean
    note: Virtual servers are sized by CPU, RAM and storage rather than fixed plans.

audience: [business, enterprise]
deployment: [saas]
platforms: [web, api]

swiss:
  hosted:
    value: optional
    basis: vendor
    source: locations
    note: >-
      Customers use a specific location. CloudSigma's public locations API lists
      one Swiss location, "Geneva, Switzerland" (location ID ZRH), alongside
      CloudSigma-branded locations in Germany, Australia, Japan, Malaysia and the
      Philippines and partner-operated clouds in other countries.
  dataLocations: [CH, DE, AU, JP, MY, PH]
  infrastructure:
    provider: CloudSigma AG (facility operator of the Swiss location not stated)
    type: unknown
    swissOwned: unknown
    basis: inferred
    source: locations
    note: >-
      CloudSigma does not currently publish the data centre facility used for
      its Swiss location, and its shareholders are not published.

pricing:
  model: usage-based
  chfBilling: yes
  url: https://www.cloudsigma.com/pages/pricing.html
  checked: 2026-10-15
  basis: vendor
  source: pricing-api
  note: >-
    No plan prices are published on the website. The Geneva location's pricing
    API lists per-resource rates in CHF, EUR and GBP (CPU per GHz-hour, RAM per
    GB-hour, storage per GB-month).

features:
  api: yes

tags: [iaas, virtual-machines, gpu, white-label]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: about
    title: About - CloudSigma
    url: https://www.cloudsigma.com/pages/about.html
    publisher: CloudSigma Holding AG
    kind: vendor
    accessed: 2026-10-15
  - id: cloud-servers
    title: Cloud Servers - CloudSigma
    url: https://www.cloudsigma.com/pages/cloud-servers.html
    publisher: CloudSigma Holding AG
    kind: vendor
    accessed: 2026-10-15
  - id: business-model
    title: Business model - CloudSigma
    url: https://www.cloudsigma.com/pages/business-model.html
    publisher: CloudSigma Holding AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Pricing model - CloudSigma
    url: https://www.cloudsigma.com/pages/pricing.html
    publisher: CloudSigma Holding AG
    kind: vendor
    accessed: 2026-10-15
  - id: locations
    title: CloudSigma API - locations
    url: https://zrh.cloudsigma.com/api/2.0/locations/
    publisher: CloudSigma AG
    kind: documentation
    accessed: 2026-10-15
  - id: pricing-api
    title: CloudSigma API - pricing (Geneva location)
    url: https://gva.cloudsigma.com/api/2.0/pricing/
    publisher: CloudSigma AG
    kind: documentation
    accessed: 2026-10-15
  - id: certifications
    title: Certifications - CloudSigma
    url: https://www.cloudsigma.com/pages/certifications.html
    publisher: CloudSigma Holding AG
    kind: vendor
    accessed: 2026-10-15
---

CloudSigma is an infrastructure-as-a-service platform from a company founded in
Zurich in 2009; the operating company CloudSigma AG is registered in Zug, where
the group's holding company is also based. Virtual servers are not
tied to fixed plans: CPU, RAM and storage are sized independently and billed per
resource in five-minute segments. The platform also offers GPU resources,
private networks and an API.

CloudSigma's website now addresses mainly telecom operators, managed service
providers and data centre operators, who run the platform under their own brand
and sell it to their customers. CloudSigma-branded public locations remain
listed in its API, including one in Geneva with prices in CHF; the website no
longer publishes a location list, the Swiss facility operator or end-customer
prices.

CloudSigma lists ISO 27001, 27017, 27018, 9001, 14001 and 20000-1 certifications
and SOC 2 on its website without stating which entity or locations they cover.
