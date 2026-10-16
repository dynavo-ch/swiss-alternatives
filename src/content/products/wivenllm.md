---
name: WivenLLM
aliases: [Wiven, Wiven AI, Wiven AgentHub, AgentHub]
company: wiven-ai
tagline: Private AI assistant and agent platform that runs open-weight models on your hardware.
description: >-
  WivenLLM from Wiven AI in Eysins VD is a private AI assistant with agents that
  runs on a workstation or local server, or as an instance hosted in Switzerland.
website: https://www.wiven.ai/wiven-llm/
status: active

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: >-
      Runs open-weight models such as Mistral, Llama, Qwen or Kimi locally;
      connecting an external AI provider is optional.
  - id: microsoft-copilot
    note: >-
      Agents connect to business software such as Abacus, bexio, SAP Business
      One, Odoo, M-Files and Microsoft 365 rather than being built into one
      office suite.

audience: [business, enterprise]
deployment: [self-hosted, managed]
platforms: [windows, macos, linux]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Wiven AI names its premises in Eysins, between Geneva and Lausanne, as
      the place where its AI agents are built, and states that they are built
      and hosted in Switzerland. Of the three co-founders, the CTO lives in
      Geneva and the CEO in France.
  hosted:
    value: optional
    basis: vendor
    source: security
    note: >-
      WivenLLM runs on the customer's workstation or server, where documents,
      indexes and conversations are stored, and can work without an internet
      connection. Wiven AI also offers dedicated instances that it hosts and
      maintains in Switzerland, with no data shared between customers. The
      AgentHub platform runs in the Swiss cloud of Exoscale or on premises.
  dataLocations: [CH]
  infrastructure:
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: agenthub
    note: >-
      The data centre for dedicated WivenLLM instances is not named. For
      AgentHub, Wiven names Exoscale, which belongs to Austria's A1 Telekom
      Austria Group.

openSource:
  value: no
  basis: inferred
  source: security
  note: >-
    No source code of WivenLLM is published; it runs open-weight models such as
    Mistral, Llama, Qwen and Kimi.

pricing:
  model: freemium
  freePlan: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 70
    currency: CHF
    period: year
    note: Business licence per user, excl. VAT; sold in lots of ten users
  url: https://www.wiven.ai/tarifs/
  checked: 2026-10-16
  basis: vendor
  source: pricing

features:
  encryptionAtRest: partial
  encryptionInTransit: yes
  sso: yes

tags: [local-ai, on-premises-ai, ai-agents, rag, open-weight-models, mcp, private-ai]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: product
    title: WivenLLM - IA privée sur votre infrastructure
    url: https://www.wiven.ai/wiven-llm/
    publisher: Wiven AI Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: security
    title: Sécurité de WivenLLM - IA locale et souveraineté
    url: https://www.wiven.ai/securite-wivenllm/
    publisher: Wiven AI Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: download
    title: Télécharger WivenLLM
    url: https://www.wiven.ai/installer-wivenllm/
    publisher: Wiven AI Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Tarifs - Wiven AI
    url: https://www.wiven.ai/tarifs/
    publisher: Wiven AI Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: agenthub
    title: Wiven AgentHub
    url: https://www.wiven.ai/agenthub/
    publisher: Wiven AI Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: About — Wiven AI, sovereign AI in Switzerland
    url: https://www.wiven.ai/en/a-propos/
    publisher: Wiven AI Sàrl
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Wiven AI — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/wiven-ai/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Privater KI-Assistent und Agentenplattform, die Open-Weight-Modelle auf eigener Hardware betreibt.'
    description: 'WivenLLM von Wiven AI aus Eysins VD ist ein privater KI-Assistent mit Agenten, der auf einem Arbeitsplatz oder lokalen Server oder als in der Schweiz gehostete Instanz läuft.'
    notes:
      swiss.developed.note: 'Wiven AI nennt seine Räumlichkeiten in Eysins zwischen Genf und Lausanne als Ort, an dem seine KI-Agenten entstehen, und gibt an, dass sie in der Schweiz entwickelt und gehostet werden. Von den drei Mitgründern wohnt der CTO in Genf und der CEO in Frankreich.'
      swiss.hosted.note: 'WivenLLM läuft auf dem Arbeitsplatzrechner oder Server der Kunden, wo Dokumente, Indizes und Unterhaltungen gespeichert werden, und funktioniert auch ohne Internetverbindung. Wiven AI bietet zudem dedizierte Instanzen an, die es in der Schweiz hostet und wartet, ohne dass Daten zwischen Kunden geteilt werden. Die Plattform AgentHub läuft in der Schweizer Cloud von Exoscale oder vor Ort.'
      swiss.infrastructure.note: 'Das Rechenzentrum für dedizierte WivenLLM-Instanzen wird nicht genannt. Für AgentHub nennt Wiven Exoscale, das zur österreichischen A1 Telekom Austria Group gehört.'
      openSource.note: 'Der Quellcode von WivenLLM wird nicht veröffentlicht; es nutzt Open-Weight-Modelle wie Mistral, Llama, Qwen und Kimi.'
      pricing.startingPrice.note: 'Business-Lizenz pro Person, exkl. MWST; Verkauf in Paketen zu zehn Personen'
      alternativesTo.chatgpt.note: 'Betreibt Open-Weight-Modelle wie Mistral, Llama, Qwen oder Kimi lokal; die Anbindung eines externen KI-Anbieters ist optional.'
      alternativesTo.microsoft-copilot.note: 'Die Agenten verbinden sich mit Unternehmenssoftware wie Abacus, bexio, SAP Business One, Odoo, M-Files und Microsoft 365, statt in eine einzelne Office-Suite eingebaut zu sein.'
---

WivenLLM is a private AI application from Wiven AI Sàrl in Eysins, installed on
a Windows, macOS or Linux computer, on a server on the customer's premises or
as a dedicated instance hosted by Wiven in Switzerland. It offers a chat
assistant that drafts, translates and summarises and answers questions from
the customer's documents with citations, plus agents that read mailboxes,
extract invoice data, query databases and prepare entries in business software
for human approval. It runs open-weight models such as Mistral, Llama, Qwen and
Kimi; web search or an external AI provider are used only if switched on.

A free edition for a single user has no user sharing, connectors or logging.
The Business licence costs CHF 70 per user per year excluding VAT, sold in
lots of ten, and adds multi-user access with OpenID Connect single sign-on,
roles, connectors and an audit log. Transport is encrypted with TLS; stored
content relies on full-disk encryption, which is checked at installation.

Wiven AI was founded in 2025. Its separate AgentHub platform, priced per
agent, orchestrates the same agents in the Swiss cloud of Exoscale or on
premises. The Linux build supports RHEL-based distributions only.
