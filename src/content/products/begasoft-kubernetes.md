---
name: BEGASOFT Managed Kubernetes Platform
aliases: [BEGASOFT Container Platform, BEGASOFT Kubernetes]
company: begasoft
tagline: Dedicated managed Kubernetes clusters operated from a data centre in Bern.
description: >-
  BEGASOFT's Managed Kubernetes Platform provides dedicated Kubernetes clusters
  with CI/CD and 24/7 operations, run in the Swisscom Wankdorf data centre in Bern.
website: https://www.begasoft.ch/container-platform/
status: active

categories: [kubernetes]
alternativesTo:
  - id: red-hat-openshift
    note: >-
      Built on upstream Kubernetes with Talos Linux, Argo CD and Keycloak
      rather than OpenShift; clusters are set up and run by BEGASOFT.
  - id: aws
    note: Only as an alternative to managed Kubernetes (EKS); no self-service provisioning.
  - id: microsoft-azure
    note: Only as an alternative to managed Kubernetes (AKS); no self-service provisioning.
  - id: google-cloud
    note: Only as an alternative to managed Kubernetes (GKE); no self-service provisioning.

audience: [business, public-sector, developer]
deployment: [managed]
platforms: []

swiss:
  developed:
    value: yes
    basis: vendor
    source: platform-blog
    note: >-
      The platform is assembled and operated by BEGASOFT's DevOps team in Bern
      from open-source components (Kubernetes, Talos Linux, OpenTofu, Argo CD,
      Keycloak, Capsule).
  hosted:
    value: yes
    basis: vendor
    source: infrastructure
    note: >-
      BEGASOFT runs its own and all customer systems in the BEGASOFT data centre
      Bern-Wankdorf, located in a Swisscom data centre certified Tier IV. Backup
      and disaster-recovery services run at a second site in the SenseLan Tier
      III data centre in Düdingen FR.
  dataLocations: [CH]
  infrastructure:
    provider: BEGASOFT AG (own systems in colocation)
    providerCountry: CH
    type: colocation
    swissOwned: unknown
    facility: Swisscom data centre Bern-Wankdorf; SenseLan, Düdingen (secondary site)
    basis: vendor
    source: infrastructure
    note: >-
      BEGASOFT uses the data-centre infrastructure of Swisscom (Schweiz) AG for
      its own equipment. BEGASOFT's shareholders are not published.

openSource:
  value: no
  basis: inferred
  source: platform-blog
  note: >-
    The platform is built from open-source software, but BEGASOFT's own
    configuration and automation are not published.

pricing:
  model: quote
  url: https://www.begasoft.ch/container-platform/
  checked: 2026-10-16
  basis: vendor
  source: platform
  note: No prices are published; costs depend on the resources and services chosen.

certifications: [iso-27001, iso-9001]

sustainability:
  summary: >-
    The Wankdorf data centre reports a PUE of 1.2, feeds its waste heat into
    the city of Bern's district heating and, according to BEGASOFT, Swisscom
    sources its electricity from domestic renewable energy.
  basis: vendor
  source: infrastructure

tags: [kubernetes, managed-kubernetes, containers, ci-cd, gitops, talos-linux, kcsp]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: platform
    title: Die sichere und skalierbare Schweizer Container Plattform
    url: https://www.begasoft.ch/container-platform/
    publisher: BEGASOFT AG
    kind: vendor
    accessed: 2026-10-16
  - id: platform-blog
    title: Warum wir unsere Kubernetes-Plattform neu aufgebaut haben (April 2025)
    url: https://www.begasoft.ch/themenbeitraege/unsere-neue-kubernetes-plattform
    publisher: BEGASOFT AG
    kind: vendor
    accessed: 2026-10-16
  - id: infrastructure
    title: Unsere Infrastruktur - Tier-IV-Datacenter Bern-Wankdorf
    url: https://www.begasoft.ch/unternehmen/infrastruktur
    publisher: BEGASOFT AG
    kind: vendor
    accessed: 2026-10-16
  - id: certifications
    title: Zertifizierungen & Labels - BEGASOFT
    url: https://www.begasoft.ch/unternehmen/zertifizierungen
    publisher: BEGASOFT AG
    kind: vendor
    accessed: 2026-10-16
  - id: managed-cloud
    title: Infrastructure & Managed Cloud-Services - BEGASOFT
    url: https://www.begasoft.ch/infrastructure-managed-cloud
    publisher: BEGASOFT AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: BEGASOFT AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/begasoft-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Dedizierte Managed-Kubernetes-Cluster, betrieben aus einem Rechenzentrum in Bern.'
    description: 'Die Managed Kubernetes Platform von BEGASOFT bietet dedizierte Kubernetes-Cluster mit CI/CD und 24/7-Betrieb, betrieben im Swisscom-Rechenzentrum Wankdorf in Bern.'
    notes:
      swiss.developed.note: 'Die Plattform wird vom DevOps-Team von BEGASOFT in Bern aus Open-Source-Komponenten (Kubernetes, Talos Linux, OpenTofu, Argo CD, Keycloak, Capsule) zusammengestellt und betrieben.'
      swiss.hosted.note: 'BEGASOFT betreibt die eigenen und sämtliche Kundensysteme im BEGASOFT Datacenter Bern-Wankdorf, das sich in einem nach Tier IV zertifizierten Rechenzentrum der Swisscom befindet. Backup- und Disaster-Recovery-Dienste laufen an einem Zweitstandort im Tier-III-Rechenzentrum von SenseLan in Düdingen FR.'
      swiss.infrastructure.note: 'BEGASOFT nutzt für die eigene Ausrüstung die Rechenzentrumsinfrastruktur der Swisscom (Schweiz) AG. Die Aktionäre von BEGASOFT werden nicht veröffentlicht.'
      openSource.note: 'Die Plattform besteht aus Open-Source-Software, doch die eigene Konfiguration und Automatisierung von BEGASOFT werden nicht veröffentlicht.'
      sustainability.summary: 'Das Rechenzentrum Wankdorf weist einen PUE-Wert von 1,2 aus, speist seine Abwärme in den Wärmeverbund der Stadt Bern ein, und gemäss BEGASOFT bezieht Swisscom den Strom aus einheimischer erneuerbarer Energie.'
      alternativesTo.red-hat-openshift.note: 'Basiert auf Upstream-Kubernetes mit Talos Linux, Argo CD und Keycloak statt auf OpenShift; die Cluster werden von BEGASOFT eingerichtet und betrieben.'
      alternativesTo.aws.note: 'Nur als Alternative zu verwaltetem Kubernetes (EKS); keine Bereitstellung im Self-Service.'
      alternativesTo.microsoft-azure.note: 'Nur als Alternative zu verwaltetem Kubernetes (AKS); keine Bereitstellung im Self-Service.'
      alternativesTo.google-cloud.note: 'Nur als Alternative zu verwaltetem Kubernetes (GKE); keine Bereitstellung im Self-Service.'
---

BEGASOFT's Managed Kubernetes Platform provides dedicated Kubernetes clusters
for software companies and organisations, operated by BEGASOFT AG in Bern.
BEGASOFT sets up the cluster and CI/CD pipeline with the customer and takes
responsibility for operation, 24/7 support, security, monitoring, backup and
availability; databases, logging and web application firewalls are offered as
additional components. Customers include simap.ch, the Swiss public
procurement platform, and the Swiss vocational guidance service centre SDBB.

By April 2025 BEGASOFT had rebuilt the platform on upstream Kubernetes with Talos Linux,
infrastructure as code with OpenTofu, GitOps with Argo CD and multi-tenant
access via Keycloak and Capsule, replacing an earlier Rancher setup. The
company is a Kubernetes Certified Service Provider and states that it holds
ISO 9001 and ISO 27001 certification.

The clusters run on BEGASOFT's own equipment in a Swisscom data centre in
Bern-Wankdorf, with a secondary site in Düdingen. Prices are quoted
individually.
