---
name: Pilae
aliases: [Pilae Cloud, Pilae Agent, Pilae Platform]
company: pilae
tagline: Managed open-source apps and private AI, on your own servers or in a Swiss region.
description: >-
  Pilae operates about 40 open-source apps and private AI models for organisations,
  on their own servers or on dedicated machines in Zurich or other regions.
website: https://pilae.com
status: active

categories: [paas, ai-assistants]
alternativesTo:
  - id: chatgpt
    note: Private chat assistants such as Open WebUI or LibreChat with open models, operated on infrastructure chosen by the customer.
  - id: microsoft-365
    note: Partial; Pilae operates open-source collaboration apps such as Nextcloud, Collabora Online and Jitsi Meet rather than developing its own office suite.

audience: [business, enterprise, public-sector]
deployment: [managed, on-premises]
platforms: [web, api]
languages:
  support: [en, fr, de]

swiss:
  developed:
    value: unknown
    note: Pilae SA is based in Lausanne; where its platform and agent are developed is not stated.
  hosted:
    value: optional
    basis: vendor
    source: regions
    note: >-
      Apps run on the customer's own servers by default or on dedicated machines
      in one of 12 Pilae Cloud regions. Zurich is the region for data that must
      stay in Switzerland; backups go to a second site in the same jurisdiction.
  dataLocations: [CH, DE, FR, NL, FI, GB, US, SG, JP, AU]
  infrastructure:
    provider: Third-party hosting providers per region (named only in the customer DPA)
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: residency
    note: >-
      Pilae states that machines in Swiss and EU regions are run by European
      data-centre operators in ISO 27001-certified data centres. The public
      network edge and email delivery use a US-owned provider.

pricing:
  model: quote
  chfBilling: yes
  startingPrice:
    amount: 249
    currency: USD
    period: month
    note: Startup Stack bundle for start-ups, plus external usage; other plans are a fixed onboarding price and a monthly price per managed app, quoted individually
  url: https://pilae.com/pricing
  checked: 2026-10-16
  basis: vendor
  source: pricing

features:
  sso: yes
  api: yes

tags: [managed-hosting, open-source, private-ai, llm, nextcloud, n8n, keycloak, sovereign-cloud]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: company
    title: About Pilae
    url: https://pilae.com/company
    publisher: Pilae SA
    kind: vendor
    accessed: 2026-10-16
  - id: cloud
    title: Pilae Cloud
    url: https://pilae.com/platform/cloud
    publisher: Pilae SA
    kind: vendor
    accessed: 2026-10-16
  - id: regions
    title: Pilae Cloud regions
    url: https://pilae.com/platform/regions
    publisher: Pilae SA
    kind: vendor
    accessed: 2026-10-16
  - id: residency
    title: Data residency - Pilae
    url: https://pilae.com/trust/residency
    publisher: Pilae SA
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Pricing - Pilae
    url: https://pilae.com/pricing
    publisher: Pilae SA
    kind: vendor
    accessed: 2026-10-16
  - id: startups
    title: 'Startup Stack: own your software for 249/month'
    url: https://pilae.com/startups
    publisher: Pilae SA
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Pilae SA — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/pilae-sa/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
---

Pilae is a managed service from Pilae SA in Lausanne, founded in 2026, that
installs and operates open-source applications and private AI for
organisations. Its catalogue of about 40 apps covers collaboration and identity
(for example Nextcloud, Keycloak and Mattermost), workflow and data tools such
as n8n, business software such as Odoo, and language-model tools such as Open
WebUI, Ollama and vLLM. A control plane handles deployments, backups, logs and
single sign-on, and an AI agent plans each change and applies it only after
approval.

Apps run on the customer's own servers by default, including air-gapped sites,
or on dedicated machines in Pilae Cloud. Of its 12 regions, Zurich is the one in
Switzerland; five are in the EU and six elsewhere, including the United States.
Pilae does not publicly name the hosting providers behind each region; they are
listed in the data processing agreement.

Pricing consists of a fixed onboarding fee and a monthly price per managed app,
quoted individually and invoiced in CHF or EUR; a bundle for start-ups is
listed at 249 dollars per month plus external usage. The company was entered in
the commercial register in April 2026.
