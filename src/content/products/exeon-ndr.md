---
name: Exeon.NDR
aliases: [Exeon, ExeonTrace, Exeon NDR, Exeon.UEBA]
company: exeon
tagline: Network detection and response based on flow and log metadata, run on customer systems.
description: >-
  Exeon.NDR is network detection and response software from Zurich-based Exeon
  that analyses traffic metadata with machine learning, on-premises or in the cloud.
website: https://exeon.com/ndr/
status: active

categories: [network-security]
alternativesTo:
  - id: darktrace
    note: >-
      Covers network detection and response only; analyses metadata from
      existing devices instead of mirrored traffic and has no email or
      endpoint products.
  - id: vectra-ai
    note: Analyses flow and log metadata from existing devices instead of dedicated network sensors.

audience: [business, enterprise, public-sector]
deployment: [on-premises, self-hosted]
platforms: [api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Exeon describes its platform as Swiss-made; the company and its
      management are based in Zurich.
  hosted:
    value: unknown
    note: >-
      Exeon.NDR runs on infrastructure chosen by the customer, on-premises, in a
      private or public cloud or in air-gapped networks, and Exeon states that
      data processing stays on-premises. No vendor-hosted SaaS edition was
      found, so the data location depends on the customer's deployment.

openSource:
  value: no
  basis: inferred
  note: Commercially licensed software; no source code is published.

pricing:
  model: quote
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  chfBilling: unknown
  checked: 2026-10-15
  basis: vendor
  source: ndr
  note: >-
    Sold as a subscription that includes the software licence, setup, training
    and support. Prices are not published and depend on the analysis scope and
    the number of active internal IP addresses.

features:
  api: yes

tags:
  [
    ndr,
    network-detection-and-response,
    ueba,
    anomaly-detection,
    netflow,
    ot-security,
    machine-learning,
    siem,
  ]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: ndr
    title: Exeon.NDR - Network Detection and Response
    url: https://exeon.com/ndr/
    publisher: Exeon Analytics AG
    kind: vendor
    accessed: 2026-10-15
  - id: deployment
    title: Deployment
    url: https://exeon.com/deployment/
    publisher: Exeon Analytics AG
    kind: vendor
    accessed: 2026-10-15
  - id: about
    title: About Exeon
    url: https://exeon.com/about/
    publisher: Exeon Analytics AG
    kind: vendor
    accessed: 2026-10-15
---

Exeon.NDR is a network detection and response (NDR) product from Exeon
Analytics AG in Zurich; the platform was earlier marketed as ExeonTrace.
Instead of mirroring traffic to dedicated sensors or inspecting packet
contents, it analyses metadata such as NetFlow and logs from existing routers,
switches, firewalls, DNS servers, proxies, cloud platforms and applications,
using supervised and unsupervised machine learning to detect attacks, including
in encrypted traffic. It covers IT, OT and cloud networks, aggregates and
correlates alerts to reduce false positives, and exposes APIs for data
ingestion and for responses through SIEM, SOAR, EDR and XDR tools. Related
modules include Exeon.UEBA for user and entity behaviour analytics and
Exeon.Visibility.

The software requires no agents or additional hardware and runs on
infrastructure chosen by the customer: on-premises, in a private or public
cloud or in air-gapped networks, and it can analyse traffic in AWS, Azure and
Google Cloud. No vendor-hosted SaaS edition is listed; some customers use it as
a managed service through partners such as Swisscom or Reist Telecom.

Exeon is sold as a subscription that includes licence, setup, training and
support, with prices based on the number of active internal IP addresses; no
prices are published. Customer references on its site include PostFinance,
SWISS International Air Lines and Swiss hospitals. As a metadata-based system,
it does not offer the payload-level forensics of tools that perform deep packet
inspection.
