---
name: Unblu Spark
aliases: [Unblu, Unblu Secure Messenger, Unblu Financial Cloud, Unblu Branch]
company: unblu
tagline: Secure messaging, video and co-browsing platform for banks, wealth managers and insurers.
description: >-
  Unblu Spark is a client communication platform from Basel for financial
  institutions, combining secure chat, video, co-browsing and AI assistants.
website: https://www.unblu.com
status: active

categories: [crm, video-conferencing]
alternativesTo:
  - id: intercom
    note: >-
      Built only for banks, wealth managers and insurers, with authenticated
      messaging, video and co-browsing embedded in the institution's own web
      and mobile apps; it can also be self-hosted, but has no published
      self-service plans.

audience: [enterprise]
deployment: [saas, self-hosted, on-premises]
platforms: [web, ios, android, api]
languages:
  interface: [en]

swiss:
  developed:
    value: partial
    basis: inferred
    source: careers
    note: >-
      Unblu is headquartered in Basel, but its team spans five countries, with
      central offices in Basel and Sofia (Bulgaria); how development work is
      split between locations is not published.
  hosted:
    value: optional
    basis: vendor
    source: security
    note: >-
      The vendor-operated Unblu Financial Cloud runs on Google Cloud Platform
      in regions across Europe, North America and Asia-Pacific, with a client-
      selectable failover region, or on IBM Financial Services Cloud. The
      Unblu Swiss Sovereign Cloud option runs on the Swiss Open Telekom Cloud,
      hosted by T-Systems Schweiz AG in two data centres in Zollikofen and Bern.
      Banks can also install Unblu on their own infrastructure. The
      infrastructure details below refer to the Swiss option.
  dataLocations: [CH]
  infrastructure:
    provider: Open Telekom Cloud Swiss (T-Systems Schweiz AG)
    providerCountry: DE
    type: public-cloud
    swissOwned: no
    facility: Data centres in Zollikofen and Bern
    basis: vendor
    source: security

openSource:
  value: no
  basis: inferred
  note: No source code is published; the platform is licensed commercially.

pricing:
  model: quote
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  basis: inferred
  note: No prices are published; Unblu offers demos on request.

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: yes
  api: yes

certifications: [iso-27001, soc-2]

tags:
  [
    co-browsing,
    live-chat,
    secure-messaging,
    video-banking,
    conversational-ai,
    banking,
    wealth-management,
    finnova,
    avaloq,
    temenos,
  ]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: Unblu - conversational banking platform
    url: https://www.unblu.com/en/
    publisher: unblu inc.
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: About Us - Unblu
    url: https://www.unblu.com/en/company
    publisher: unblu inc.
    kind: vendor
    accessed: 2026-10-16
  - id: security
    title: Security & Compliance - Unblu
    url: https://www.unblu.com/en/security-compliance
    publisher: unblu inc.
    kind: vendor
    accessed: 2026-10-16
  - id: careers
    title: Careers - Unblu
    url: https://www.unblu.com/en/company/careers
    publisher: unblu inc.
    kind: vendor
    accessed: 2026-10-16
  - id: docs
    title: Unblu documentation
    url: https://docs.unblu.com/
    publisher: unblu inc.
    kind: documentation
    accessed: 2026-10-16
  - id: localization
    title: Localization - Unblu documentation
    url: https://docs.unblu.com/latest/knowledge-base/configuration/basics/localization.html
    publisher: unblu inc.
    kind: documentation
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: unblu inc. — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/unblu-inc./home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Plattform für sicheres Messaging, Video und Co-Browsing für Banken, Vermögensverwalter und Versicherer.'
    description: 'Unblu Spark ist eine Plattform für Kundenkommunikation aus Basel für Finanzinstitute, die sicheren Chat, Video, Co-Browsing und KI-Assistenten vereint.'
---

Unblu Spark is a client communication platform developed by Basel-based unblu
inc. for retail banks, private banks, wealth managers and insurers. It combines
live chat and an authenticated secure messenger, audio and video calls,
co-browsing, co-apping and document collaboration, and AI-based virtual agents
that can hand conversations over to human advisors. The components are embedded in the
institution's own website, e-banking and mobile apps through JavaScript APIs and
mobile SDKs for iOS and Android; a web API and webhooks connect it to other
systems. Reference integrations exist for Avaloq, Backbase, Temenos, Finnova
and Salesforce Financial Services Cloud. Unblu Branch extends the platform to
remote advisory screens in physical branches.

Unblu offers the platform as a managed service or for installation on the
customer's own infrastructure. The managed Unblu Financial Cloud runs on Google
Cloud Platform in several regions or on IBM Financial Services Cloud, while the
Unblu Swiss Sovereign Cloud option is hosted by T-Systems Schweiz in data centres
in Zollikofen and Bern. Unblu states that data is encrypted with AES-256 at rest
and TLS 1.2 or higher in transit, and that it holds ISO/IEC 27001:2022
certification and a SOC 2 Type 2 report for its cloud operations.

The company has been majority owned by Swiss Post since 2022. Prices are not
published; the platform is sold to financial institutions on request.
