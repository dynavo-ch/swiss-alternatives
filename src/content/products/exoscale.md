---
name: Exoscale
company: exoscale
tagline: European IaaS cloud with compute, object storage, managed Kubernetes and databases.
description: >-
  Exoscale is an IaaS cloud run by Lausanne-based Akenes SA, part of Austria's
  A1 Group, with two Swiss zones among eight zones in Europe.
website: https://www.exoscale.com
status: active

categories: [cloud-platforms, vps-hosting, object-storage, kubernetes]
alternativesTo:
  - id: aws
    note: Covers compute, block and object storage, Kubernetes and managed databases; much smaller service catalogue.
  - id: google-cloud
    note: Covers core IaaS, Kubernetes and managed databases; much smaller service catalogue.
  - id: microsoft-azure
    note: Covers core IaaS, Kubernetes and managed databases; much smaller service catalogue.
  - digitalocean
  - id: amazon-s3
    note: Via the S3-compatible Exoscale object storage (SOS).

audience: [developer, business, enterprise]
deployment: [saas]
platforms: [web, cli, api]

swiss:
  developed:
    value: partial
    basis: inferred
    source: jobs
    note: >-
      Headquartered in Lausanne, but Exoscale describes its team as distributed
      across Europe and recruits engineers in other countries.
  hosted:
    value: optional
    basis: vendor
    source: zones
    note: >-
      Resources are created in a zone chosen by the customer. Two of eight
      zones are in Switzerland (CH-GVA-2 Geneva, CH-DK-2 Zurich); the others
      are in Austria, Germany, Bulgaria and Croatia, and a Madrid zone has been
      announced.
  dataLocations: [CH, AT, DE, BG, HR]
  infrastructure:
    provider: Akenes SA (Exoscale), own platform in third-party data centres
    providerCountry: MX
    type: colocation
    swissOwned: no
    facility: Equinix (both Swiss zones); A1 data centres in Vienna and Zagreb among others
    basis: vendor
    source: datacenters
    note: >-
      Akenes SA belongs to A1 Digital (A1 Telekom Austria Group); Telekom
      Austria AG is majority-owned by América Móvil (Mexico).

openSource:
  value: partial
  license: Apache-2.0
  repository: https://github.com/exoscale/cli
  basis: vendor
  source: github
  note: The CLI and Go SDK (egoscale) are open source; the cloud platform itself is proprietary.

pricing:
  model: usage-based
  chfBilling: yes
  startingPrice:
    amount: 0.00729
    currency: CHF
    period: hour
    note: Micro instance (512 MB RAM, 1 core); local storage and tax extra; same rate in EUR and USD
  url: https://www.exoscale.com/pricing/
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  api: yes

certifications: [iso-27001, iso-27017, iso-27018, bsi-c5, soc-2, hds]

tags: [iaas, virtual-machines, s3, kubernetes, dbaas, gpu]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: about
    title: About Us - Exoscale
    url: https://www.exoscale.com/about-us/
    publisher: Akenes SA
    kind: vendor
    accessed: 2026-10-15
  - id: zones
    title: Data Center Zones
    url: https://community.exoscale.com/platform/dc-zones/
    publisher: Akenes SA
    kind: documentation
    accessed: 2026-10-15
  - id: datacenters
    title: Our European Cloud Zones
    url: https://www.exoscale.com/datacenters/
    publisher: Akenes SA
    kind: vendor
    accessed: 2026-10-15
  - id: jobs
    title: Work at Exoscale
    url: https://www.exoscale.com/jobs/
    publisher: Akenes SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Exoscale Cloud Pricing
    url: https://www.exoscale.com/pricing/
    publisher: Akenes SA
    kind: vendor
    accessed: 2026-10-15
  - id: billing
    title: Billing
    url: https://community.exoscale.com/platform/billing/
    publisher: Akenes SA
    kind: documentation
    accessed: 2026-10-15
  - id: compliance
    title: Compliance
    url: https://www.exoscale.com/compliance/
    publisher: Akenes SA
    kind: vendor
    accessed: 2026-10-15
  - id: products
    title: Explore the Marketplace - Exoscale products
    url: https://www.exoscale.com/products/
    publisher: Akenes SA
    kind: vendor
    accessed: 2026-10-15
  - id: aiven
    title: Aiven partners with Exoscale to drive open source database-as-a-service offerings
    url: https://aiven.io/press/aiven-partners-with-exoscale-to-drive-open-source-database-as-a-service
    publisher: Aiven Oy
    kind: press
    accessed: 2026-10-15
  - id: github
    title: exoscale/cli
    url: https://github.com/exoscale/cli
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

Exoscale is an infrastructure-as-a-service cloud operated by Akenes SA in
Lausanne. It offers virtual machines (including GPU instances), block storage,
S3-compatible object storage (SOS), the Scalable Kubernetes Service (SKS) and
managed databases such as PostgreSQL, MySQL, Kafka, OpenSearch and Valkey.
The managed database service is powered by Finnish provider Aiven. Resources
can be managed through a web portal, API, CLI and Terraform, and are billed by
usage in CHF, EUR or USD.

The platform runs in eight zones: Geneva and Zurich in Switzerland, two in
Vienna, Frankfurt, Munich, Sofia and Zagreb. Customers choose the zone for each
resource, so data stays in Switzerland only if Swiss zones are selected. Both
Swiss zones are hosted in Equinix data centres.

Exoscale was founded in Switzerland in 2011. Since 2017 it has been majority-owned
by A1 Digital, part of the Vienna-listed A1 Telekom Austria Group, whose majority
shareholder is Mexico's América Móvil. The operator lists ISO 27001, 27017 and
27018 certifications, a BSI C5 attestation and a SOC 2 report.
