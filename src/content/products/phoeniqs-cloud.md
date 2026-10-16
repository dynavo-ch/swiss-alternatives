---
name: PHOENIQS Cloud
aliases: [kvant, kvant cloud, Phoenix Cloud, Phoenix Systems, Phoeniqs]
company: phoeniqs
tagline: Swiss OpenShift-based cloud with managed Kubernetes, GPU compute and object storage.
description: >-
  PHOENIQS Cloud, formerly kvant, is an OpenShift-based IaaS cloud with Kubernetes,
  NVIDIA H100 GPUs and S3 storage, run from its own data centre in Basel.
website: https://www.phoeniqs.com
status: active

categories: [cloud-platforms, kubernetes, object-storage]
alternativesTo:
  - id: aws
    note: Covers Kubernetes-based compute, GPUs and S3-compatible storage; much smaller service catalogue.
  - id: microsoft-azure
    note: Covers Kubernetes-based compute, GPUs and S3-compatible storage; much smaller service catalogue.
  - id: google-cloud
    note: Covers Kubernetes-based compute, GPUs and S3-compatible storage; much smaller service catalogue.
  - id: red-hat-openshift
    note: Offered as managed OpenShift namespaces or dedicated hosted clusters on PHOENIQS infrastructure.

audience: [business, enterprise, public-sector, developer]
deployment: [saas, on-premises]
platforms: [web, cli, api]

swiss:
  developed:
    value: yes
    basis: inferred
    source: swissmadesoftware
    note: >-
      Phoenix Systems held the swiss made software label, which requires at
      least 60% of production costs to be incurred in Switzerland. The platform
      is built on Red Hat OpenShift and other open-source software, and PHOENIQS
      states that the infrastructure is operated and supported only by
      employees resident in Switzerland.
  hosted:
    value: yes
    basis: vendor
    source: docs
    note: >-
      PHOENIQS states that live workloads and backups stay in Switzerland. The
      data centre is in Basel and managed by PHOENIQS itself; backups are kept
      at Mount10 in the Swiss Alps.
  dataLocations: [CH]
  infrastructure:
    provider: Phoenix Technologies AG (PHOENIQS)
    providerCountry: CH
    type: self-operated
    swissOwned: unknown
    facility: Basel; backups at Mount10
    basis: vendor
    source: docs
    note: >-
      PHOENIQS states that no third-party operator handles the infrastructure.
      Whether the company is ultimately Swiss-owned is not published.

openSource:
  value: no
  basis: inferred
  note: >-
    The service runs on open-source components such as Red Hat OpenShift; the
    PHOENIQS platform and portal are not published as open source.

pricing:
  model: usage-based
  chfBilling: yes
  url: https://documentation.kvant.cloud/iaas/resource-pricing/
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Billed monthly per requested resource: CHF 5.50 per vCPU, CHF 6.00 per GB
    of RAM and CHF 0.03 per GB of storage. GPU prices on request.

features:
  api: yes

tags: [iaas, openshift, kubernetes, gpu, h100, confidential-computing, s3, sovereign-cloud]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: docs
    title: Phoeniqs Cloud Services - Documentation
    url: https://documentation.kvant.cloud/iaas/
    publisher: Phoenix Technologies AG
    kind: documentation
    accessed: 2026-10-16
  - id: pricing
    title: Resource Pricing - Phoeniqs Cloud Services
    url: https://documentation.kvant.cloud/iaas/resource-pricing/
    publisher: Phoenix Technologies AG
    kind: documentation
    accessed: 2026-10-16
  - id: website
    title: PHOENIQS - Swiss sovereign cloud and AI provider
    url: https://www.phoeniqs.com
    publisher: Phoenix Technologies AG
    kind: vendor
    accessed: 2026-10-16
  - id: rebrand
    title: Phoenix Technologies becomes PHOENIQS
    url: https://www.phoeniqs.com/en/news/phoenix-technologies-becomes-phoeniqs
    publisher: Phoenix Technologies AG
    kind: vendor
    accessed: 2026-10-16
  - id: label-criteria
    title: swiss made software label criteria
    url: https://www.swissmadesoftware.org/en/about/swiss-made-software.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Phoenix Systems AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/phoenix-systems-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Schweizer Cloud auf Basis von OpenShift mit Managed Kubernetes, GPU-Rechenleistung und Object Storage.'
    description: 'PHOENIQS Cloud, früher kvant, ist eine IaaS-Cloud auf Basis von OpenShift mit Kubernetes, NVIDIA-H100-GPUs und S3-Speicher, betrieben im eigenen Rechenzentrum in Basel.'
    notes:
      swiss.developed.note: 'Phoenix Systems trug das Label swiss made software, das voraussetzt, dass mindestens 60 % der Herstellungskosten in der Schweiz anfallen. Die Plattform basiert auf Red Hat OpenShift und weiterer Open-Source-Software, und PHOENIQS gibt an, dass die Infrastruktur ausschliesslich von Mitarbeitenden mit Wohnsitz in der Schweiz betrieben und betreut wird.'
      swiss.hosted.note: 'PHOENIQS gibt an, dass laufende Workloads und Backups in der Schweiz bleiben. Das Rechenzentrum befindet sich in Basel und wird von PHOENIQS selbst verwaltet; Backups werden bei Mount10 in den Schweizer Alpen aufbewahrt.'
      swiss.infrastructure.note: 'PHOENIQS gibt an, dass kein Drittbetreiber die Infrastruktur betreut. Ob das Unternehmen letztlich in Schweizer Besitz ist, wird nicht veröffentlicht.'
      openSource.note: 'Der Dienst läuft auf Open-Source-Komponenten wie Red Hat OpenShift; die PHOENIQS-Plattform und das Portal werden nicht als Open Source veröffentlicht.'
      alternativesTo.aws.note: 'Deckt Kubernetes-basierte Rechenleistung, GPUs und S3-kompatiblen Speicher ab; deutlich kleineres Dienstangebot.'
      alternativesTo.microsoft-azure.note: 'Deckt Kubernetes-basierte Rechenleistung, GPUs und S3-kompatiblen Speicher ab; deutlich kleineres Dienstangebot.'
      alternativesTo.google-cloud.note: 'Deckt Kubernetes-basierte Rechenleistung, GPUs und S3-kompatiblen Speicher ab; deutlich kleineres Dienstangebot.'
      alternativesTo.red-hat-openshift.note: 'Angeboten als verwaltete OpenShift-Namespaces oder dedizierte Hosted Clusters auf PHOENIQS-Infrastruktur.'
---

PHOENIQS Cloud, previously marketed as kvant by Phoenix Systems, is an
infrastructure-as-a-service platform built on Red Hat OpenShift. Customers buy
vCPUs, memory, storage and GPUs individually through a self-service portal and
use them in OpenShift namespaces or dedicated hosted clusters. The service
includes NVIDIA H100 GPU nodes, OpenShift AI, S3-compatible object storage and
confidential computing with hardware-based trusted execution environments. An
on-premises variant and an AI model service are offered separately.

According to the documentation, the data centre is in Basel and managed by
PHOENIQS without a third-party operator, and backups are stored at Mount10 in
the Swiss Alps. Earlier material described two regions with four availability
zones in Basel and Zurich.

Resources are billed monthly in CHF per requested unit: CHF 5.50 per vCPU,
CHF 6.00 per GB of RAM and CHF 0.03 per GB of storage, with GPU pricing on
request. In 2026 Phoenix Technologies AG merged its subsidiary Phoenix Systems
AG into itself and adopted the PHOENIQS brand.
