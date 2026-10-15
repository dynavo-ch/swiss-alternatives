---
name: SwissGPT
aliases: [AlpineAI, AlpineAI Platform, Swiss HealthAssist]
company: alpineai
tagline: AI assistant platform for regulated sectors, running open-source models in Switzerland.
description: >-
  SwissGPT is AlpineAI's AI platform for healthcare, authorities and universities,
  running open-source language models on its own hardware in Swiss data centres.
website: https://alpineai.swiss/produkt/
status: active

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: Sold per user to organisations; runs open-source models (currently Mistral Large 3) on AlpineAI hardware.
  - id: microsoft-copilot
    note: Offers an Outlook add-in and an API; no integration across the other Microsoft 365 apps is described.

audience: [business, enterprise, public-sector]
deployment: [saas]
platforms: [web, ios, android, api]

swiss:
  developed:
    value: partial
    basis: inferred
    source: product
    note: >-
      The platform is built by AlpineAI in Davos and Zurich, but the language
      models are third-party open-source models; AlpineAI names Mistral Large 3,
      from French company Mistral AI, as its current primary model.
  hosted:
    value: yes
    basis: vendor
    source: security
    note: >-
      AlpineAI states that content is stored and processed in Switzerland on
      hardware it owns. Its data processing agreement allows processing in
      Switzerland and the EEA, and the optional web search sends queries to an
      external search provider.
  dataLocations: [CH]
  infrastructure:
    provider: AlpineAI AG (own hardware in colocation)
    type: colocation
    swissOwned: unknown
    facility: >-
      RIZ AG (platform and data, two sites); Green Datacenter AG and
      Rechenzentrum Ostschweiz (GPU inference)
    basis: vendor
    source: security

pricing:
  model: subscription
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 74
    currency: CHF
    period: month
    note: >-
      Standard licence per user for public authorities and universities, billed
      annually (CHF 79 with monthly billing); VAT treatment not stated
  url: https://alpineai.swiss/behoerden/
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  api: yes

certifications: [iso-27001]

tags: [ai, chatbot, llm, transcription, healthcare, public-sector, mistral]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: product
    title: Produkt - AlpineAI
    url: https://alpineai.swiss/produkt/
    publisher: AlpineAI AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Sicherheit - AlpineAI
    url: https://alpineai.swiss/sicherheit/
    publisher: AlpineAI AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: KI für Behörden und Verwaltungen - Preise
    url: https://alpineai.swiss/behoerden/
    publisher: AlpineAI AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing-universities
    title: 'SwissGPT: Datenschutzkonforme KI für Hochschulen'
    url: https://alpineai.swiss/hochschulen/
    publisher: AlpineAI AG
    kind: vendor
    accessed: 2026-10-15
  - id: health
    title: KI für das Gesundheitswesen
    url: https://alpineai.swiss/gesundheitswesen/
    publisher: AlpineAI AG
    kind: vendor
    accessed: 2026-10-15
  - id: naming
    title: 'Künstliche Intelligenz: Weniger Tools, mehr Kontext'
    url: https://alpineai.swiss/kuenstliche-intelligenz-weniger-tools-mehr-kontext/
    publisher: AlpineAI AG
    kind: vendor
    accessed: 2026-10-15
---

SwissGPT is an AI platform for organisations in healthcare, public
administration and higher education. It offers chat with optional web search,
assistants that answer from uploaded documents, agents for multi-step tasks, a
"Listener" that transcribes conversations (including Swiss German) into reports,
an Outlook add-in and an API. On its current website the vendor mostly refers
to the product as the AlpineAI platform; for doctors it is also offered with HIN
as Swiss HealthAssist.

The platform is not tied to a single model and uses open-source language models;
AlpineAI names Mistral Large 3 as its current primary model. The models run on
AlpineAI-owned servers in colocation data centres in Switzerland, while the
optional web search passes queries to an external search provider. AlpineAI AG
states it is certified to ISO 27001:2022 and under the Swiss data protection
certification ordinance (VDSZ).

Licences are sold per user with published prices on the sector pages and a free
trial; packages from ten users, including custom integrations, are quoted on
request. AlpineAI AG is registered in Davos and has an office in Zurich. Its
shareholders are not published.
