---
name: Infomaniak Public Cloud
aliases: [Infomaniak IaaS, Infomaniak OpenStack]
company: infomaniak
tagline: OpenStack-based IaaS with instances, GPU, block and object storage, run in Switzerland.
description: >-
  Infomaniak Public Cloud is an OpenStack-based IaaS with VMs, GPUs, block and
  S3-compatible object storage and managed Kubernetes in Swiss data centres.
website: https://www.infomaniak.com/en/hosting/public-cloud
status: active
launched: 2021

categories: [cloud-platforms, object-storage, kubernetes]
alternativesTo:
  - id: aws
    note: Covers compute, GPU, block and object storage, networking, managed Kubernetes and databases; much smaller service catalogue.
  - id: microsoft-azure
    note: Covers core IaaS, managed Kubernetes and databases; much smaller service catalogue.
  - id: google-cloud
    note: Covers core IaaS, managed Kubernetes and databases; much smaller service catalogue.
  - digitalocean
  - id: amazon-s3
    note: Via S3-compatible object storage built on OpenStack Swift.

audience: [developer, business, enterprise]
deployment: [saas]
platforms: [web, cli, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: publiccloud
    note: >-
      Infomaniak states the platform was built in-house by its cloud team in
      Switzerland; it is based on the open-source OpenStack software.
  hosted:
    value: yes
    basis: vendor
    source: publiccloud
    note: >-
      Infomaniak states that the infrastructure is managed exclusively in
      Switzerland, across several regions and availability zones in its own
      data centres.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak (self-operated data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    facility: Infomaniak data centres in Geneva, including D3
    basis: vendor
    source: publiccloud

openSource:
  value: partial
  license: Apache-2.0
  repository: https://opendev.org/openstack
  basis: vendor
  source: publiccloud
  note: >-
    Built on the open-source OpenStack (Nova, Cinder, Swift, Neutron, Heat) and
    Ceph; Infomaniak's own management interface and tooling are not published as
    a whole.

pricing:
  model: usage-based
  freePlan: no
  freeTrial: yes
  chfBilling: yes
  url: https://www.infomaniak.com/en/hosting/public-cloud/prices
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  api: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Infomaniak states its data centres run on renewable electricity without air
    conditioning, and that its D4 data centre in Geneva feeds all of its waste
    heat into the district heating network.
  basis: vendor
  source: d4

tags: [iaas, openstack, virtual-machines, gpu, s3, swift, kubernetes, dbaas]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: publiccloud
    title: Public Cloud - High performance cloud infrastructure in Switzerland
    url: https://www.infomaniak.com/en/hosting/public-cloud
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Public Cloud - Prices
    url: https://www.infomaniak.com/en/hosting/public-cloud/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: guide
    title: Getting started guide - Public Cloud
    url: https://www.infomaniak.com/en/support/faq/2601/start-guide-public-cloud
    publisher: Infomaniak Network SA
    kind: documentation
    accessed: 2026-10-15
  - id: launch
    title: 'Cloud Suisse : Infomaniak lance une alternative souveraine aux géants du Web'
    url: https://www.presseportal.ch/pm/100057093/100878328?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
  - id: certifications
    title: Certifications and labels
    url: https://www.infomaniak.com/en/certifications
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: d4
    title: 'Innovation : Infomaniak inaugure un data center revalorisant 100% de son énergie'
    url: https://www.presseportal.ch/pm/100057093/100928245?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
  - id: openstack
    title: Infomaniak Public Cloud - OpenStack Marketplace
    url: https://www.openstack.org/marketplace/public-clouds/Infomaniak/infomaniak-public-cloud
    publisher: OpenInfra Foundation
    kind: independent
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'IaaS auf Basis von OpenStack mit Instanzen, GPU, Block- und Objektspeicher, betrieben in der Schweiz.'
    description: 'Infomaniak Public Cloud ist eine IaaS auf Basis von OpenStack mit VMs, GPUs, Block- und S3-kompatiblem Objektspeicher sowie Managed Kubernetes in Schweizer Rechenzentren.'
    notes:
      swiss.developed.note: 'Infomaniak gibt an, dass die Plattform intern von seinem Cloud-Team in der Schweiz entwickelt wurde; sie basiert auf der Open-Source-Software OpenStack.'
      swiss.hosted.note: 'Infomaniak gibt an, dass die Infrastruktur ausschliesslich in der Schweiz betrieben wird, über mehrere Regionen und Verfügbarkeitszonen in eigenen Rechenzentren.'
      openSource.note: 'Basiert auf dem Open-Source-Projekt OpenStack (Nova, Cinder, Swift, Neutron, Heat) und Ceph; die eigene Verwaltungsoberfläche und die Tools von Infomaniak werden nicht vollständig veröffentlicht.'
      sustainability.summary: 'Gemäss Infomaniak laufen die Rechenzentren mit erneuerbarem Strom ohne Klimaanlage, und das Rechenzentrum D4 in Genf speist seine gesamte Abwärme ins Fernwärmenetz ein.'
      alternativesTo.aws.note: 'Deckt Compute, GPU, Block- und Object Storage, Netzwerk, Managed Kubernetes und Datenbanken ab; deutlich kleineres Dienstangebot.'
      alternativesTo.microsoft-azure.note: 'Deckt grundlegendes IaaS, Managed Kubernetes und Datenbanken ab; deutlich kleineres Dienstangebot.'
      alternativesTo.google-cloud.note: 'Deckt grundlegendes IaaS, Managed Kubernetes und Datenbanken ab; deutlich kleineres Dienstangebot.'
      alternativesTo.amazon-s3.note: 'Über S3-kompatiblen Object Storage auf Basis von OpenStack Swift.'
---

Infomaniak Public Cloud is an infrastructure-as-a-service platform based on
OpenStack. It provides Linux and Windows instances, GPU instances, Ceph block
storage, S3- and Swift-compatible object storage, load balancers, Heat
orchestration and DNS, plus a managed Kubernetes service and managed databases
(MariaDB, MySQL, PostgreSQL, Redis and OpenSearch-compatible). Resources are
managed through a web console or the OpenStack API and CLI.

Billing is hourly by usage in CHF, with no minimum and bandwidth included except
for object storage above 10 TB; new customers receive CHF 300 of credit for
three months, and only credit cards are accepted. The platform was reserved for
large customers and Infomaniak's own services from 2012 and opened to all
customers in 2021. It runs in Infomaniak's own data centres in Switzerland, with
two regions and six availability zones; no locations outside Switzerland are
offered.
