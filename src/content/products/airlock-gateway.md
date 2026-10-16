---
name: Airlock Gateway
aliases: [Airlock WAF, Airlock Web Application Firewall, Airlock WAAP, Ergon Airlock Gateway]
company: ergon
tagline: Web application and API firewall with reverse proxy, run on customer infrastructure.
description: >-
  Airlock Gateway is a web application and API firewall from Zurich's Ergon
  Informatik, installed as a virtual appliance or cloud image by the customer.
website: https://www.airlock.com/en/secure-access-hub/components/gateway
status: active

categories: [network-security]
alternativesTo:
  - id: f5
    note: >-
      Covers the web application and API firewall functions, not F5's wider
      application delivery and networking products.
  - id: cloudflare
    note: >-
      Comparable to Cloudflare's web application firewall and bot protection,
      but installed and run by the customer, without a global CDN or edge
      network.

audience: [business, enterprise, public-sector]
deployment: [on-premises, self-hosted]
platforms: [web, linux, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: press-saas
    note: Developed by Ergon Informatik AG in Zurich.
  hosted:
    value: unknown
    note: >-
      Airlock Gateway is installed by the customer or a partner, on-premises,
      on VMware or other virtualisation platforms or as a cloud image in a
      public cloud, so the data location depends on the deployment. No
      vendor-hosted edition of the Gateway is listed; the managed service
      Airlock launched in April 2026 covers Airlock IAM.

openSource:
  value: no
  basis: vendor
  source: license
  note: >-
    Airlock Gateway is part of the commercially licensed Premium Edition. Only
    Airlock Microgateway is offered as a free Community Edition.

pricing:
  model: quote
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  chfBilling: unknown
  url: https://www.airlock.com/en/airlock-license
  checked: 2026-10-15
  basis: vendor
  source: license
  note: The Premium Edition carries a licence fee; no prices are published.

features:
  api: yes

certifications: [iso-27001]

tags:
  [
    waf,
    waap,
    web-application-firewall,
    api-security,
    reverse-proxy,
    bot-protection,
    owasp,
    virtual-patching,
  ]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: gateway
    title: Airlock Gateway - Web Application and API Protection (WAAP)
    url: https://www.airlock.com/en/secure-access-hub/components/gateway
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: gateway-86
    title: Airlock Gateway 8.6
    url: https://www.airlock.com/en/secure-access-hub/components/gateway/airlock-gw-86
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: getting-started
    title: Getting started with Airlock Gateway
    url: https://docs.airlock.com/gateway/latest/index/1645446598875.html
    publisher: Ergon Informatik AG
    kind: documentation
    accessed: 2026-10-15
  - id: license
    title: Airlock licence
    url: https://www.airlock.com/en/airlock-license
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: iam-saas
    title: Airlock IAM as a Service
    url: https://www.airlock.com/en/secure-access-hub/components/iam/airlock-iam-as-a-service
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: press-saas
    title: Airlock lanciert IAM as a Service für sichere Zugriffe auf digitale Services
    url: https://www.airlock.com/fileadmin/content/07_Airlock-PDFs/Presse/260420_Airlock_Pressemitteilung_IAM_as_a_Service.pdf
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Web-Application- und API-Firewall mit Reverse Proxy, betrieben auf Kundeninfrastruktur.'
    description: 'Airlock Gateway ist eine Web-Application- und API-Firewall der Zürcher Ergon Informatik, die Kunden selbst als virtuelle Appliance oder Cloud-Image installieren.'
    notes:
      swiss.developed.note: 'Entwickelt von der Ergon Informatik AG in Zürich.'
      swiss.hosted.note: 'Airlock Gateway wird vom Kunden oder einem Partner installiert, On-Premises, auf VMware oder anderen Virtualisierungsplattformen oder als Cloud-Image in einer Public Cloud; der Datenstandort hängt daher vom Deployment ab. Eine vom Anbieter gehostete Edition des Gateways ist nicht aufgeführt; der im April 2026 lancierte Managed Service von Airlock umfasst Airlock IAM.'
      openSource.note: 'Airlock Gateway ist Teil der kommerziell lizenzierten Premium Edition. Nur Airlock Microgateway wird als kostenlose Community Edition angeboten.'
      alternativesTo.f5.note: 'Deckt die Funktionen der Web Application Firewall und API-Firewall ab, nicht aber die weitergehenden Application-Delivery- und Netzwerkprodukte von F5.'
      alternativesTo.cloudflare.note: 'Vergleichbar mit der Web Application Firewall und dem Bot-Schutz von Cloudflare, wird aber vom Kunden installiert und betrieben, ohne globales CDN oder Edge-Netzwerk.'
---

Airlock Gateway is a web application and API protection (WAAP) product from
Ergon Informatik AG in Zurich, sold under the Airlock brand as part of the
Airlock Secure Access Hub together with Airlock IAM and Airlock Microgateway.
It works as a reverse proxy in front of web applications and APIs and inspects
every HTTP(S) request. Functions include filtering against the OWASP Top 10,
virtual patching, bot defence, denial-of-service protection,
AI-based anomaly detection (Anomaly Shield), threat intelligence from Webroot
BrightCloud, API schema enforcement, API keys and throttling, load balancing,
and reporting with SIEM integration. Together with Airlock IAM it enforces
authentication and authorisation using OAuth 2.0, OpenID Connect and SAML 2.0.

The Gateway is installed and operated by the customer or a partner. It is
delivered as an ISO image for on-premises installation or as a VMDK image for
VMware and cloud deployments, and release 8.6 added support for Red Hat
OpenShift Virtualization. A REST API allows configuration from DevOps pipelines. For
Kubernetes environments, Airlock offers the separate Airlock Microgateway,
which is also available as a free Community Edition.

The Gateway is part of the commercially licensed Premium Edition, and prices
are not published. No vendor-hosted edition of the Gateway is listed. Ergon
states that it is ISO 27001 certified. Ergon has been majority-owned by the
German private equity investor Afinum since January 2026.
