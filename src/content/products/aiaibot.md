---
name: aiaibot
company: swiss-moonshot
tagline: Chatbot, AI agent and e-mail automation platform for customer service teams.
description: >-
  aiaibot is a Swiss platform for customer-service chatbots, AI agents and e-mail
  automation, built on OpenAI GPT models with knowledge bases stored in Zurich.
website: https://www.aiaibot.com
status: active

categories: [crm]
alternativesTo:
  - id: intercom
    note: >-
      Focuses on automated answers and process automation from the customer's
      own documents; ticketing runs through connected systems such as
      ServiceNow or Jira.

audience: [business, enterprise, public-sector]
deployment: [saas]
platforms: [web]

swiss:
  developed:
    value: partial
    basis: inferred
    source: technology
    note: >-
      swiss moonshot AG develops the platform in Switzerland, but the language
      models are third-party: in most projects aiaibot uses GPT models from the
      US company OpenAI, run through Microsoft Azure.
  hosted:
    value: partial
    basis: vendor
    source: technology
    note: >-
      The knowledge base and customer and user data are stored on Google Cloud
      in the Zurich region. Prompts are processed by OpenAI models on Microsoft
      Azure; the Azure region is not stated, and the vendor says requests are
      not used for training and are deleted after at most 30 days. The platform
      page says the knowledge base is hosted in Switzerland "depending on
      requirements".
  dataLocations: [CH]
  infrastructure:
    provider: Google Cloud (Zurich region); Microsoft Azure for language models
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: privacy

features:
  encryptionInTransit: yes
  sso: yes

tags: [chatbot, ai-agent, customer-service, email-automation, rag, gpt, voice-assistant]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: aiaibot – Schweizer KI-Automatisierungsplattform für Unternehmen
    url: https://www.aiaibot.com/de/
    publisher: swiss moonshot AG
    kind: vendor
    accessed: 2026-10-16
  - id: technology
    title: 'Die KI-Technik hinter aiaibot: Sicherheit, Kontrolle und Schweizer Datenhaltung'
    url: https://www.aiaibot.com/de/ki-technologie
    publisher: swiss moonshot AG
    kind: vendor
    accessed: 2026-10-16
  - id: platform
    title: Die Schweizer KI-Plattform für intelligente Prozessautomatisierung
    url: https://www.aiaibot.com/de/produkt-plattform
    publisher: swiss moonshot AG
    kind: vendor
    accessed: 2026-10-16
  - id: features
    title: aiaibot - Funktionen
    url: https://www.aiaibot.com/de/produkt-funktionen
    publisher: swiss moonshot AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutzerklärung - aiaibot
    url: https://www.aiaibot.com/de/datenschutz
    publisher: swiss moonshot AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: swiss moonshot AG / aiaibot — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/swiss-moonshot-ag-aiaibot/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Plattform für Chatbots, KI-Agenten und E-Mail-Automatisierung für Kundenservice-Teams.'
    description: 'aiaibot ist eine Schweizer Plattform für Chatbots, KI-Agenten und E-Mail-Automatisierung im Kundenservice, basierend auf GPT-Modellen von OpenAI, mit in Zürich gespeicherten Wissensdatenbanken.'
    notes:
      swiss.developed.note: 'Die swiss moonshot AG entwickelt die Plattform in der Schweiz, die Sprachmodelle stammen jedoch von Dritten: In den meisten Projekten nutzt aiaibot GPT-Modelle des US-Unternehmens OpenAI, die über Microsoft Azure betrieben werden.'
      swiss.hosted.note: 'Die Wissensdatenbank sowie Kunden- und Benutzerdaten werden auf Google Cloud in der Region Zürich gespeichert. Prompts werden von OpenAI-Modellen auf Microsoft Azure verarbeitet; die Azure-Region wird nicht angegeben, und der Anbieter gibt an, dass Anfragen nicht für das Training verwendet und nach höchstens 30 Tagen gelöscht werden. Gemäss der Plattformseite wird die Wissensdatenbank «je nach Anforderungen» in der Schweiz gehostet.'
      alternativesTo.intercom.note: 'Konzentriert sich auf automatisierte Antworten und Prozessautomatisierung auf Basis der eigenen Dokumente des Kunden; das Ticketing läuft über angebundene Systeme wie ServiceNow oder Jira.'
---

aiaibot is a platform for automating routine customer and internal enquiries.
It combines a website chatbot with more than 20 interactive widgets, AI agents
that read and write data in connected systems, e-mail classification and
drafting, workflow automation and a voice assistant. Answers are generated from
documents the customer releases (retrieval-augmented generation), and the bot
hands over to a person with the conversation history when it finds no reliable
answer. Connectors cover, among others, Microsoft Teams, Slack, Exchange,
SharePoint, Confluence, ServiceNow, Jira and HubSpot, plus a REST API.

The platform is model-agnostic, but according to the vendor most projects use
GPT models from OpenAI, operated through Microsoft Azure rather than directly at
OpenAI; the Azure region is not disclosed. The knowledge base and customer data
are stored on Google Cloud in the Zurich region. aiaibot states that prompts are
not used for training and are deleted after at most 30 days, and offers single
sign-on and role-based access.

aiaibot is developed by swiss moonshot AG in Dübendorf, a subsidiary of the
POLYDATA group, and lists more than 200 organisations as users, including
cantons, hospitals, cantonal banks and transport companies. Prices are not
published on the vendor's website; projects start with a consultation and a
proof of concept.
