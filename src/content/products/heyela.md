---
name: HeyEla
aliases: [HeyEla AI]
company: heyela
tagline: Board meeting recording, AI-drafted minutes and a document hub, hosted in Switzerland.
description: >-
  HeyEla is a Zurich-developed platform for boards that records meetings, drafts
  minutes with AI and keeps documents and tasks on Swiss infrastructure.
website: https://www.heyela.ai
status: active

categories: [document-management, ai-assistants]
alternativesTo:
  - id: diligent-boards
    note: >-
      Centred on recording meetings and drafting minutes with AI; signatures are
      simple electronic signatures, and no native mobile apps are listed.
  - id: microsoft-copilot
    note: >-
      Limited to meeting minutes, tasks and documents of boards and committees;
      it is not a general-purpose assistant for other Microsoft 365 apps.

audience: [business, enterprise]
deployment: [saas, on-premises]
platforms: [web]
languages:
  interface: [de, fr, en]

swiss:
  developed:
    value: partial
    basis: inferred
    source: ai
    note: >-
      HeyEla AI AG builds the platform and its AI orchestration in Zurich, and
      lists the Zurich studio mühlemann+popp as technology partner for
      development and operation. The language, speech-to-text, embedding and
      OCR models are third-party models, some of them open-weight; HeyEla does
      not train its own base model and does not name the models it uses.
  hosted:
    value: yes
    basis: vendor
    source: trust
    note: >-
      Platform data (recordings, transcripts, minutes, documents) is stored at
      Nine Internet Solutions AG in Zurich, with backups at separate sites of the
      same provider. AI inference runs in Switzerland on HeyEla's own GPUs and
      at PHOENIQS (Phoenix Technologies AG, Pfäffikon SZ), with Infomaniak as a
      fallback. Mistral AI in Paris is listed as an inactive emergency inference
      option, and transactional e-mails may be processed in the EEA.
  dataLocations: [CH]
  infrastructure:
    provider: Nine Internet Solutions AG (platform hosting); own GPUs and PHOENIQS (AI inference)
    providerCountry: CH
    type: mixed
    swissOwned: yes
    basis: vendor
    source: trust
    note: >-
      Refers to Nine, which states that it is employee-owned. The ownership of
      Phoenix Technologies AG, which runs part of the AI inference, was not
      verified.

pricing:
  enterprise: yes
  basis: vendor
  source: trust

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: yes
  dataExport: yes

tags: [board-portal, meeting-minutes, transcription, swiss-german, governance, ai]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: HeyEla - Your AI Board Assistant
    url: https://www.heyela.ai/
    publisher: HeyEla AI AG
    kind: vendor
    accessed: 2026-10-16
  - id: trust
    title: HeyEla Trust Center (subprocessors, security, data lifecycle)
    url: https://www.heyela.ai/trust
    publisher: HeyEla AI AG
    kind: vendor
    accessed: 2026-10-16
  - id: ai
    title: Swiss Made Software +AI | HeyEla
    url: https://www.heyela.ai/swiss-made-software-ai
    publisher: HeyEla AI AG
    kind: vendor
    accessed: 2026-10-16
  - id: recording
    title: Sitzungen transkribieren - auch auf Schweizerdeutsch | HeyEla
    url: https://www.heyela.ai/features/live-recording
    publisher: HeyEla AI AG
    kind: vendor
    accessed: 2026-10-16
  - id: signature
    title: Digitale Signatur für Sitzungsprotokolle | HeyEla
    url: https://www.heyela.ai/features/digital-signature
    publisher: HeyEla AI AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: HeyEla AI AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/heyela-ai-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Aufzeichnung von Verwaltungsratssitzungen, KI-Protokollentwürfe und Dokumentenablage, gehostet in der Schweiz.'
    description: 'HeyEla ist eine in Zürich entwickelte Plattform für Verwaltungsräte, die Sitzungen aufzeichnet, Protokolle mit KI entwirft und Dokumente und Aufgaben auf Schweizer Infrastruktur ablegt.'
    notes:
      swiss.developed.note: 'Die HeyEla AI AG entwickelt die Plattform und ihre KI-Orchestrierung in Zürich und nennt das Zürcher Studio mühlemann+popp als Technologiepartner für Entwicklung und Betrieb. Die Sprach-, Speech-to-Text-, Embedding- und OCR-Modelle sind Modelle von Drittanbietern, teilweise mit offenen Gewichten; HeyEla trainiert kein eigenes Basismodell und nennt die verwendeten Modelle nicht.'
      swiss.hosted.note: 'Plattformdaten (Aufnahmen, Transkripte, Protokolle, Dokumente) werden bei der Nine Internet Solutions AG in Zürich gespeichert, mit Backups an separaten Standorten desselben Anbieters. Die KI-Inferenz läuft in der Schweiz auf eigenen GPUs von HeyEla und bei PHOENIQS (Phoenix Technologies AG, Pfäffikon SZ), mit Infomaniak als Fallback. Mistral AI in Paris ist als inaktive Notfall-Inferenzoption aufgeführt, und transaktionale E-Mails können im EWR verarbeitet werden.'
      swiss.infrastructure.note: 'Bezieht sich auf Nine, das angibt, im Besitz der Mitarbeitenden zu sein. Die Eigentumsverhältnisse der Phoenix Technologies AG, die einen Teil der KI-Inferenz betreibt, wurden nicht verifiziert.'
      alternativesTo.diligent-boards.note: 'Auf die Aufzeichnung von Sitzungen und das Verfassen von Protokollen mit KI ausgerichtet; Signaturen sind einfache elektronische Signaturen, und native Mobile-Apps werden nicht aufgeführt.'
      alternativesTo.microsoft-copilot.note: 'Beschränkt auf Sitzungsprotokolle, Aufgaben und Dokumente von Verwaltungsräten und Gremien; kein allgemeiner Assistent für andere Microsoft-365-Apps.'
---

HeyEla is a meeting platform for boards of directors, executive committees and
other governing bodies. It records meetings in the browser, through a bot in
Microsoft Teams or Google Meet, or from uploaded audio, transcribes them with
speaker attribution (including Swiss German) and drafts minutes with agenda
items, decisions and action items. Minutes can be edited, signed with a simple
electronic signature and exported to Word or PDF in the organisation's own
layout. A document hub, task tracking and an AI chat that answers questions from
the organisation's minutes and documents complete the product, and one login
covers several boards. The interface is available in German, French and English.

HeyEla combines several third-party language, speech and embedding models,
some of them open-weight, and does not name them. According to the vendor, AI
inference runs in Switzerland on its own GPUs and at PHOENIQS, with Infomaniak
as a fallback, and customer data is contractually excluded from model training.
Platform data is hosted by Nine Internet Solutions AG in Zurich, and sign-in
runs through the St. Gallen identity provider Zitadel with mandatory two-factor
authentication. HeyEla states that ISO 27001 certification is in preparation;
the ISO certificates shown on its website belong to its hosting provider.

Prices are not published; the vendor offers demos on request. Enterprise
customers can request dedicated instances or on-premises deployment. HeyEla AI
AG was entered in the Zurich commercial register in September 2025.
