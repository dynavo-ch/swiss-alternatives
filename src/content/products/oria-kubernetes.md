---
name: ORIA Kubernetes Service
aliases: [ORIA Kubernetes, Sharp DX Kubernetes]
company: sharp-dx
tagline: Kubernetes clusters on the ORIA Enterprise Cloud, self-administered or fully managed.
description: >-
  ORIA Kubernetes Service from Sharp DX (Schweiz) in Rotkreuz runs Kubernetes
  clusters on the ORIA Enterprise Cloud in two Swiss data centres.
website: https://www.oria.ch/en/services/kubernetes
status: active

categories: [kubernetes]
alternativesTo:
  - id: red-hat-openshift
    note: >-
      Offered as a service on Sharp DX infrastructure rather than as a platform
      to install; clusters are set up through Sharp DX, without published
      self-service provisioning.
  - id: aws
    note: Only as an alternative to managed Kubernetes (EKS); prices are quoted on request.
  - id: microsoft-azure
    note: Only as an alternative to managed Kubernetes (AKS); prices are quoted on request.
  - id: google-cloud
    note: Only as an alternative to managed Kubernetes (GKE); prices are quoted on request.

audience: [business, enterprise, developer]
deployment: [managed]
platforms: []

swiss:
  developed:
    value: yes
    basis: vendor
    source: kubernetes
    note: >-
      The service is set up and operated by Sharp DX (Schweiz) AG on its ORIA
      Enterprise Cloud, which the company describes as developed by ITpoint, its
      former name. Kubernetes itself is an open-source project.
  hosted:
    value: yes
    basis: vendor
    source: kubernetes
    note: >-
      Sharp DX states that the clusters run geo-redundantly in two Swiss data
      centres and that 100% of the data is stored in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: Sharp DX (Schweiz) AG (own infrastructure)
    providerCountry: JP
    type: unknown
    swissOwned: no
    basis: vendor
    source: operations
    note: >-
      Sharp DX states that the entire ORIA infrastructure is owned and controlled
      by Sharp DX (Schweiz) AG, which belongs to the Japanese Sharp group. The
      data centre buildings and their operators are not named.

openSource:
  value: no
  basis: inferred
  note: >-
    The service runs Kubernetes, which is open source; Sharp DX's own platform
    and tooling are not published.

pricing:
  model: quote
  url: https://www.oria.ch/en/services/kubernetes
  checked: 2026-11-08
  basis: vendor
  source: kubernetes

certifications: [iso-27001, isae-3402]

tags: [kubernetes, managed-kubernetes, containers, bare-metal, gpu, object-storage, nfs]
affiliate: null
sponsored: false
added: 2026-11-08
updated: 2026-11-08
lastVerified: 2026-11-08
sources:
  - id: kubernetes
    title: Kubernetes Service on the ORIA Enterprise Cloud
    url: https://www.oria.ch/en/services/kubernetes
    publisher: Sharp DX (Schweiz) AG
    kind: vendor
    accessed: 2026-11-08
  - id: announcement
    title: Kubernetes Service auf der ORIA Enterprise Cloud
    url: https://www.oria.ch/post/kubernetes-service-auf-der-oria-enterprise-cloud
    publisher: Sharp DX (Schweiz) AG
    kind: vendor
    accessed: 2026-11-08
  - id: operations
    title: Datenhaltung Schweiz, Betriebsverantwortung und internationale Zusammenarbeit mit ORIA by Sharp DX
    url: https://www.oria.ch/post/datenhaltung-schweiz-betriebsverantwortung-und-internationale-zusammenarbeit-mit-oria-by-itpoint
    publisher: Sharp DX (Schweiz) AG
    kind: vendor
    accessed: 2026-11-08
  - id: about
    title: About us - ORIA
    url: https://www.oria.ch/en/about
    publisher: Sharp DX (Schweiz) AG
    kind: vendor
    accessed: 2026-11-08
i18n:
  de:
    tagline: 'Kubernetes-Cluster auf der ORIA Enterprise Cloud, selbst administriert oder vollständig verwaltet.'
    description: 'ORIA Kubernetes Service der Sharp DX (Schweiz) aus Rotkreuz betreibt Kubernetes-Cluster auf der ORIA Enterprise Cloud in zwei Schweizer Rechenzentren.'
    notes:
      swiss.developed.note: 'Der Dienst wird von der Sharp DX (Schweiz) AG auf ihrer ORIA Enterprise Cloud eingerichtet und betrieben, die das Unternehmen als von ITpoint, seinem früheren Namen, entwickelt bezeichnet. Kubernetes selbst ist ein Open-Source-Projekt.'
      swiss.hosted.note: 'Sharp DX gibt an, dass die Cluster georedundant in zwei Schweizer Rechenzentren laufen und 100 % der Daten in der Schweiz gespeichert werden.'
      swiss.infrastructure.note: 'Sharp DX gibt an, dass die gesamte ORIA-Infrastruktur im Besitz und unter der Kontrolle der Sharp DX (Schweiz) AG steht, die zur japanischen Sharp-Gruppe gehört. Die Rechenzentrumsgebäude und ihre Betreiber werden nicht genannt.'
      openSource.note: 'Der Dienst nutzt Kubernetes, das Open Source ist; die eigene Plattform und die Werkzeuge von Sharp DX werden nicht veröffentlicht.'
      alternativesTo.red-hat-openshift.note: 'Als Dienst auf der Infrastruktur von Sharp DX statt als zu installierende Plattform angeboten; Cluster werden über Sharp DX eingerichtet, ohne veröffentlichte Self-Service-Bereitstellung.'
      alternativesTo.aws.note: 'Nur als Alternative zu verwaltetem Kubernetes (EKS); Preise werden auf Anfrage offeriert.'
      alternativesTo.microsoft-azure.note: 'Nur als Alternative zu verwaltetem Kubernetes (AKS); Preise werden auf Anfrage offeriert.'
      alternativesTo.google-cloud.note: 'Nur als Alternative zu verwaltetem Kubernetes (GKE); Preise werden auf Anfrage offeriert.'
---

The ORIA Kubernetes Service provides Kubernetes clusters on the ORIA Enterprise
Cloud of Sharp DX (Schweiz) AG in Rotkreuz. In the Basic model Sharp DX runs
the infrastructure, takes etcd backups and provides basic monitoring, while the
customer has full administrative access and handles configuration, updates and
cluster services. In the Advanced model Sharp DX also operates the Kubernetes
layer, applies updates and security patches and guarantees availability up to
the Kubernetes API. Both models are also available on dedicated physical
hardware, optionally with GPUs for AI and machine learning workloads.

Clusters are integrated with NFS and S3-compatible object storage, redundant
network connectivity, firewall services and backup from the same platform. The
service is aimed at companies with regulatory requirements; prices are quoted on
request.

Sharp DX, formerly ITpoint, has belonged to the Sharp group since 2021. It
states that the platform runs in two Swiss data centres on infrastructure it
owns.
