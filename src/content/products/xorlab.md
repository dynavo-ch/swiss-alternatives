---
name: xorlab
aliases: [xorlab Email Security Platform, xorlab Security Platform]
company: xorlab
tagline: Email security against phishing, BEC and malware for Microsoft 365 or on-premises mail.
description: >-
  xorlab is an email security platform from Zurich that detects phishing, BEC
  and malware using behavioural analysis, offered as SaaS or on-premises.
website: https://www.xorlab.com
status: active

categories: [email-security]
alternativesTo:
  - id: proofpoint
    note: >-
      Focuses on inbound email protection and abuse-mailbox automation for
      Microsoft 365 and on-premises mail; email archiving and outbound data
      loss prevention are not among the listed products.
  - id: mimecast
    note: >-
      Covers inbound filtering, attachment sandboxing, warning banners and
      self-service quarantine; email archiving and continuity services are not
      among the listed products.

audience: [enterprise, public-sector]
deployment: [saas, on-premises]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: inferred
    source: about
    note: >-
      xorlab AG and its leadership team are based in Zurich, it offers support
      from Swiss-based technical experts, and the company carries the swiss
      made software label. xorlab itself describes the product as built in
      Europe.
  hosted:
    value: partial
    basis: vendor
    source: subprocessors
    note: >-
      Recorded as partly because customers outside Switzerland are served from Germany. According to xorlab's sub-processor list, SaaS customers in Switzerland
      are served from Microsoft Azure's Swiss region (mail transfer agent,
      language analysis, logs) and Green Datacenter in Switzerland (sandbox,
      attachment parsing, reputation service). Customers outside Switzerland
      are served from Hetzner in Germany and Azure West Europe. Cloudflare
      handles DNS. On-premises customers process and store email data on
      their own infrastructure.
  dataLocations: [CH]
  infrastructure:
    provider: Microsoft Azure (Switzerland region) and Green Datacenter
    providerCountry: US
    type: mixed
    swissOwned: no
    basis: vendor
    source: subprocessors

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: quote
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  basis: inferred
  note: No prices are published; xorlab offers personalised demos on request.

features:
  sso: yes
  api: yes

tags:
  [
    phishing,
    bec,
    anti-malware,
    sandbox,
    microsoft-365,
    secure-email-gateway,
    abuse-mailbox,
    dora,
    nis2,
  ]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: Email Security - Made in Europe
    url: https://www.xorlab.com/en/
    publisher: xorlab AG
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: About xorlab
    url: https://www.xorlab.com/en/about
    publisher: xorlab AG
    kind: vendor
    accessed: 2026-10-16
  - id: platform
    title: xorlab platform overview
    url: https://www.xorlab.com/en/products/platform-overview
    publisher: xorlab AG
    kind: vendor
    accessed: 2026-10-16
  - id: subprocessors
    title: List of Data Sub-Processors
    url: https://docs.xorlab.com/latest/data-third-party-subprocessors
    publisher: xorlab AG
    kind: documentation
    accessed: 2026-10-16
  - id: data-storage
    title: Data Storage
    url: https://docs.xorlab.com/latest/data-storage
    publisher: xorlab AG
    kind: documentation
    accessed: 2026-10-16
  - id: admin-essentials
    title: What Integrating xorlab Involves
    url: https://docs.xorlab.com/latest/admin-essentials
    publisher: xorlab AG
    kind: documentation
    accessed: 2026-10-16
  - id: financing-2026
    title: xorlab Raises EUR 5 Million to Build Europe's Leading Sovereign Email Security Platform
    url: https://www.xorlab.com/en/blog/xorlab-raises-eur-5-million-to-build-europes-leading-sovereign-email-security-platform
    publisher: xorlab AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: xorlab AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/xorlab-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'E-Mail-Sicherheit gegen Phishing, BEC und Malware für Microsoft 365 oder On-Premises-Mailserver.'
    description: 'xorlab ist eine E-Mail-Sicherheitsplattform aus Zürich, die Phishing, BEC und Malware mittels Verhaltensanalyse erkennt, angeboten als SaaS oder On-Premises.'
---

xorlab is an email security platform developed by xorlab AG in Zurich. It
analyses inbound email for phishing, business email compromise, credential
theft, QR-code phishing and malware, using behavioural models of each
organisation's normal communication patterns together with link, content and
attachment analysis. Add-ons include an attachment sandbox, contextual warning
banners and a self-service quarantine for end users; a second product automates
the triage of suspicious emails reported by employees. xorlab also sells an
email attack simulation as a service.

The platform works with Microsoft 365 or can replace or supplement an
on-premises secure email gateway; it integrates with SIEM and SOAR tools and
offers an API and SAML login. It is available as a SaaS operated by xorlab or as
virtual machines run on the customer's own infrastructure. For Swiss SaaS
customers, xorlab's sub-processor list names Microsoft Azure's Swiss region and
Green Datacenter in Switzerland; customers elsewhere are served from Germany
and Azure West Europe.

xorlab targets organisations with high security requirements, including
financial institutions, healthcare organisations, critical-infrastructure and
telecommunications operators and public-sector bodies, and states that six of
the ten largest Swiss banks use it. No prices are published.
