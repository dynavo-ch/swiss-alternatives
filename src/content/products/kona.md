---
name: Kona
aliases: [Kona Platform, Kona by Nordfold]
company: nordfold
tagline: Self-hosted platform for building and governing network security automation.
description: >-
  Kona is a self-hosted platform from Nordfold in Zurich on which security teams
  build, run and share automations for firewalls and other systems.
website: https://kona.ch
status: active

categories: [network-security]
alternativesTo:
  - id: ansible-automation-platform
    note: >-
      Focused on network security teams: automations in any language get SSO,
      RBAC, multi-tenancy, audit, a web UI and a REST API from the platform;
      only self-hosted, with no vendor-run edition.

audience: [enterprise]
deployment: [self-hosted, on-premises]

swiss:
  developed:
    value: yes
    basis: vendor
    source: company
    note: >-
      Nordfold states that Kona is built in Switzerland by its own engineering
      team in Zurich, with no offshore development.
  hosted:
    value: unknown
    note: >-
      Kona runs only on the customer's infrastructure, on-premises, in the
      customer's cloud tenant or air-gapped, so the data location depends on the
      deployment. Nordfold states that the platform sends no telemetry; standard
      deployments check the licence against a Nordfold licence service.

openSource:
  value: no
  basis: inferred
  source: security
  note: >-
    No source code is published; source escrow is offered on request.

pricing:
  model: quote
  url: https://kona.ch/why-kona
  checked: 2026-11-02
  basis: vendor
  source: why
  note: >-
    No prices are published. A base licence covers the platform, a set number of
    professional-service hours, users and tenants; further users and tenants are
    charged per seat and per tenant.

features:
  sso: yes
  api: yes

tags:
  [
    network-security-automation,
    firewall-management,
    self-service,
    rbac,
    audit-trail,
    air-gapped,
    multi-tenant,
  ]
affiliate: null
sponsored: false
added: 2026-11-02
updated: 2026-11-02
lastVerified: 2026-11-02
sources:
  - id: home
    title: Kona | Network Security Automation Platform by Nordfold
    url: https://kona.ch
    publisher: Nordfold GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: why
    title: Why Kona | Kona by Nordfold
    url: https://kona.ch/why-kona
    publisher: Nordfold GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: security
    title: Security Architecture | Kona by Nordfold
    url: https://kona.ch/security
    publisher: Nordfold GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: company
    title: Company | Kona by Nordfold
    url: https://kona.ch/company
    publisher: Nordfold GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: customers
    title: How SWISS TXT Modernised Its Network Security Platform with Kona
    url: https://kona.ch/customers
    publisher: Nordfold GmbH
    kind: vendor
    accessed: 2026-11-02
  - id: swissmadesoftware
    title: Nordfold GmbH — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/nordfold-gmbh/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-02
i18n:
  de:
    tagline: 'Selbst gehostete Plattform zum Bauen und Steuern von Automatisierungen für die Netzwerksicherheit.'
    description: 'Kona ist eine selbst gehostete Plattform von Nordfold aus Zürich, auf der Security-Teams Automatisierungen für Firewalls und andere Systeme bauen, betreiben und teilen.'
    notes:
      swiss.developed.note: 'Nordfold gibt an, dass Kona in der Schweiz vom eigenen Engineering-Team in Zürich gebaut wird, ohne Offshore-Entwicklung.'
      swiss.hosted.note: 'Kona läuft ausschliesslich auf der Infrastruktur der Kundschaft, vor Ort, im eigenen Cloud-Tenant oder air-gapped, daher hängt der Speicherort der Daten von der Installation ab. Nordfold gibt an, dass die Plattform keine Telemetrie sendet; Standardinstallationen prüfen die Lizenz bei einem Lizenzdienst von Nordfold.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht; eine Hinterlegung des Quellcodes (Escrow) wird auf Anfrage angeboten.'
      alternativesTo.ansible-automation-platform.note: 'Auf Netzwerksicherheits-Teams ausgerichtet: Automatisierungen in beliebigen Sprachen erhalten SSO, RBAC, Mandantenfähigkeit, Audit, eine Weboberfläche und eine REST-API von der Plattform; nur selbst gehostet, ohne vom Anbieter betriebene Variante.'
---

Kona is a platform on which network security teams build and run their own
tools. It connects to firewalls, proxies, SIEM, ITSM, identity providers and
cloud services through one integration layer, and runs scripts and services in
any language, such as Python, Go or TypeScript, in isolated containers with
centrally stored credentials. Each automation is exposed as a web interface, a
REST API with generated documentation and to AI agents, and inherits single
sign-on, fine-grained role-based permissions, rate limits, multi-tenancy and an
audit log that can be forwarded to a SIEM. Nordfold positions it as neither a
firewall policy manager nor a SOAR product.

Kona is deployed on Docker or Kubernetes in the customer's own environment,
on-premises, in a private cloud tenant or air-gapped; there is no
vendor-hosted edition. Licences include a set number of professional-service
hours for installation, identity provider integration and training. Prices are
not published.

Nordfold, a small company founded in Zurich in 2023, states that the first
production deployment started in October 2025 at a large Swiss media company
and that the platform became generally available in June 2026. Its published
customer story describes SWISS TXT, which runs Kona under the name SPOT.
