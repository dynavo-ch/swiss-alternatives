---
name: Whisperit
aliases: [Whisperit AI, whisperit.ai]
company: whisperit
tagline: AI workspace for lawyers with dictation, drafting, case analysis and legal research.
description: >-
  Whisperit is an AI workspace for lawyers and notaries from Prilly VD, with
  dictation, drafting and legal research and client data stored in Switzerland.
website: https://whisperit.ai
status: active

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: >-
      Built for legal work, with dictation, case files, templates and cited
      legal research; in the Swiss Only tier, language models run on Swiss
      infrastructure.
  - id: microsoft-copilot
    note: >-
      A separate legal workspace with add-ins for Word and Outlook rather than
      an assistant built into Microsoft 365.

audience: [business, enterprise]
deployment: [saas]
platforms: [web]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Whisperit states that its team, infrastructure and legal entity are
      Swiss; the team is based at the Unlimitrust campus in Prilly. One team
      member is listed for market development in Portugal.
  hosted:
    value: yes
    basis: vendor
    source: subprocessors
    note: >-
      Persistent client data (documents, conversations, transcripts, accounts)
      and backups are stored in Switzerland on Microsoft Azure and Infomaniak
      in all tiers. Language-model processing depends on the contracted tier:
      Swiss Only uses Swisscom and Infomaniak in Switzerland, while EU and
      Global tiers use providers in the EU or worldwide. Audio transcription
      may run in Sweden, and some operational services are in the US.
  dataLocations: [CH]
  infrastructure:
    provider: Microsoft Azure (Switzerland) and Infomaniak
    type: public-cloud
    swissOwned: partial
    basis: vendor
    source: subprocessors
    note: >-
      Microsoft Azure provides compute, document storage, search and speech
      services; Infomaniak hosts the PostgreSQL database and the web
      application in Geneva.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 300
    currency: CHF
    period: month
    note: Per user, billed monthly; annual billing saves 17%
  url: https://whisperit.ai/en/pricing
  checked: 2026-10-16
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  sso: yes

tags: [legal-tech, dictation, transcription, legal-research, document-drafting, llm]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: about
    title: About - Whisperit
    url: https://whisperit.ai/en/about
    publisher: Whisperit SA
    kind: vendor
    accessed: 2026-10-16
  - id: subprocessors
    title: Sub-processor List - Whisperit (February 2026)
    url: https://whisperit.ai/legal/subprocessors?lang=en
    publisher: Whisperit SA
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Pricing - Whisperit
    url: https://whisperit.ai/en/pricing
    publisher: Whisperit SA
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Whisperit SA — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/whisperit-sa/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'KI-Arbeitsbereich für Anwälte mit Diktat, Entwurf, Fallanalyse und juristischer Recherche.'
    description: 'Whisperit ist ein KI-Arbeitsbereich für Anwälte und Notare aus Prilly VD, mit Diktat, Dokumententwurf und juristischer Recherche; Kundendaten liegen in der Schweiz.'
    notes:
      swiss.developed.note: 'Whisperit gibt an, dass Team, Infrastruktur und Rechtseinheit schweizerisch sind; das Team arbeitet auf dem Unlimitrust-Campus in Prilly. Ein Teammitglied ist für die Marktentwicklung in Portugal aufgeführt.'
      swiss.hosted.note: 'Persistente Kundendaten (Dokumente, Unterhaltungen, Transkripte, Konten) und Backups werden in allen Stufen in der Schweiz bei Microsoft Azure und Infomaniak gespeichert. Die Verarbeitung durch Sprachmodelle hängt von der vertraglich vereinbarten Stufe ab: «Swiss Only» nutzt Swisscom und Infomaniak in der Schweiz, die Stufen «EU» und «Global» nutzen Anbieter in der EU oder weltweit. Audiotranskription kann in Schweden erfolgen, und einige Betriebsdienste befinden sich in den USA.'
      swiss.infrastructure.note: 'Microsoft Azure stellt Rechenleistung, Dokumentenspeicher, Suche und Sprachdienste bereit; Infomaniak hostet die PostgreSQL-Datenbank und die Webanwendung in Genf.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Pro Person, monatliche Abrechnung; bei jährlicher Abrechnung 17 % günstiger'
      alternativesTo.chatgpt.note: 'Für juristische Arbeit gebaut, mit Diktat, Falldossiers, Vorlagen und juristischer Recherche mit Quellenangaben; in der Stufe «Swiss Only» laufen die Sprachmodelle auf Schweizer Infrastruktur.'
      alternativesTo.microsoft-copilot.note: 'Ein separater juristischer Arbeitsbereich mit Add-ins für Word und Outlook statt eines in Microsoft 365 integrierten Assistenten.'
---

Whisperit is an AI workspace for law firms, notaries and in-house legal teams,
developed by Whisperit SA in Prilly near Lausanne. It combines voice dictation
and transcription in French, German, Italian and English, drafting of
documents from voice or notes using the firm's own templates, AI case
management with parties and timelines, legal research with source citations
and a shared document workspace with version history. It integrates with Word,
Outlook, Google Drive, OneDrive and DocuSign.

According to its sub-processor list, persistent client data is stored in
Switzerland on Microsoft Azure and Infomaniak. Customers choose a data
residency tier: in the Swiss Only tier, language models run at Swisscom and
Infomaniak in Switzerland, while the EU and Global tiers route requests to
models such as Claude and GPT through providers in the EU or worldwide.

There is a single plan at CHF 300 per user per month, with a seven-day free
trial and annual or firm-wide enterprise licences.
