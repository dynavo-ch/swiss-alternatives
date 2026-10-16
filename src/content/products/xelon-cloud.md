---
name: Xelon Cloud
aliases: [Xelon, Xelon HQ]
company: xelon
tagline: Public and private cloud, Kubernetes and cloud backup from Swiss data centres.
description: >-
  Xelon Cloud is an IaaS platform from Zug-based Xelon AG with virtual servers,
  managed Kubernetes and Veeam or Acronis backup hosted in Switzerland.
website: https://www.xelon.ch
status: active

categories: [cloud-platforms, vps-hosting, kubernetes, backup]
alternativesTo:
  - id: aws
    note: Covers virtual servers, networks, Kubernetes and backup; managed databases are not part of the published portfolio.
  - id: microsoft-azure
    note: Focused on virtual machines, private clouds and Kubernetes for IT service providers and SaaS companies.
  - id: digitalocean
    note: Pay-as-you-go virtual servers and Kubernetes; public prices are not published.

audience: [business, developer]
deployment: [saas, managed]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      The Xelon HQ management platform was developed in-house by the company,
      whose headquarters and team are in Zug.
  hosted:
    value: yes
    basis: vendor
    source: datacenter
    note: >-
      Public and private cloud infrastructure runs in two data centres in
      Switzerland (Lupfig AG and Rümlang ZH), connected by fibre.
  dataLocations: [CH]
  infrastructure:
    provider: Xelon AG (own infrastructure in colocation)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    facility: Green Datacenter (Lupfig) and NTT (Rümlang)
    basis: vendor
    source: datacenter
    note: >-
      The data-centre page names these two facilities; the company's about page
      refers to three Swiss data centres in Zug and Zurich.

openSource:
  value: partial
  license: MPL-2.0, Apache-2.0
  repository: https://github.com/Xelon-AG
  basis: vendor
  source: github
  note: >-
    The Terraform provider, Packer plugin, Go SDK and Kubernetes CSI driver are
    published on GitHub; the Xelon HQ platform is not open source.

pricing:
  model: usage-based
  url: https://www.xelon.ch/en/products/public-cloud
  checked: 2026-10-16
  basis: vendor
  source: public-cloud

features:
  api: yes

certifications: [iso-27001, iso-9001]

tags: [iaas, virtual-machines, private-cloud, kubernetes, veeam, acronis, terraform]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: about
    title: Über uns - Xelon AG
    url: https://www.xelon.ch/ueber-uns
    publisher: Xelon AG
    kind: vendor
    accessed: 2026-10-16
  - id: datacenter
    title: Unser Datacenter - Xelon AG
    url: https://www.xelon.ch/datacenter
    publisher: Xelon AG
    kind: vendor
    accessed: 2026-10-16
  - id: public-cloud
    title: Public Cloud in Switzerland - Xelon
    url: https://www.xelon.ch/en/products/public-cloud
    publisher: Xelon AG
    kind: vendor
    accessed: 2026-10-16
  - id: kubernetes
    title: Kubernetes (K8s) - Xelon HQ
    url: https://www.xelon.ch/en/products/kubernetes
    publisher: Xelon AG
    kind: vendor
    accessed: 2026-10-16
  - id: backup
    title: 'Cloud Backup Switzerland: Veeam & Acronis - Xelon'
    url: https://www.xelon.ch/en/products/cloud-backup
    publisher: Xelon AG
    kind: vendor
    accessed: 2026-10-16
  - id: github
    title: Xelon-AG on GitHub
    url: https://github.com/Xelon-AG
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Public und Private Cloud, Kubernetes und Cloud-Backup aus Schweizer Rechenzentren.'
    description: 'Xelon Cloud ist eine IaaS-Plattform der Xelon AG mit Sitz in Zug, mit virtuellen Servern, Managed Kubernetes und Backup mit Veeam oder Acronis, gehostet in der Schweiz.'
    notes:
      swiss.developed.note: 'Die Verwaltungsplattform Xelon HQ wurde vom Unternehmen selbst entwickelt, dessen Firmensitz und Team sich in Zug befinden.'
      swiss.hosted.note: 'Die Public- und Private-Cloud-Infrastruktur läuft in zwei Rechenzentren in der Schweiz (Lupfig AG und Rümlang ZH), die per Glasfaser verbunden sind.'
      swiss.infrastructure.note: 'Die Rechenzentrumsseite nennt diese beiden Standorte; die Über-uns-Seite des Unternehmens spricht von drei Schweizer Rechenzentren in Zug und Zürich.'
      openSource.note: 'Der Terraform-Provider, das Packer-Plugin, das Go-SDK und der Kubernetes-CSI-Treiber sind auf GitHub veröffentlicht; die Plattform Xelon HQ ist nicht Open Source.'
      alternativesTo.aws.note: 'Deckt virtuelle Server, Netzwerke, Kubernetes und Backup ab; verwaltete Datenbanken gehören nicht zum veröffentlichten Portfolio.'
      alternativesTo.microsoft-azure.note: 'Auf virtuelle Maschinen, Private Clouds und Kubernetes für IT-Dienstleister und SaaS-Unternehmen ausgerichtet.'
      alternativesTo.digitalocean.note: 'Virtuelle Server und Kubernetes nach Verbrauch abgerechnet; öffentliche Preise werden nicht veröffentlicht.'
---

Xelon Cloud is the infrastructure-as-a-service offering of Xelon AG in Zug. It
covers a shared public cloud billed pay-as-you-go, dedicated private clouds for
larger and more static environments, managed Kubernetes clusters with persistent
storage and load balancing, and cloud backup based on Veeam Cloud Connect or
Acronis. Resources are managed in the in-house Xelon HQ console or via API,
Terraform and Packer. According to Xelon, Xelon HQ is evolving into Cloudpilot,
offered by the newly founded Cloudpilot AG in Zug.

Xelon states that all customer data stays in Switzerland. Its infrastructure is
located in a Green data centre in Lupfig (Aargau) and an NTT data centre in
Rümlang (Zurich). The company reports ISO 27001 and ISO 9001 certification since 2020.

The service is aimed mainly at IT service providers, SaaS companies and start-ups.
The website does not list prices; public cloud resources are billed by usage,
while private clouds and backup are quoted individually.
