---
name: Deeplink
aliases: [Deeplink.ai, Deeplink Internal GPT, Deeplink Studio]
company: deeplink
tagline: AI platform with internal GPT, document search, meeting minutes and chatbots.
description: >-
  Deeplink is an AI platform from Lausanne for SMEs and public bodies, with an
  internal GPT, document search and chatbots on open-source models in Switzerland.
website: https://www.deeplink.ai
status: active

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: >-
      Aimed at organisations rather than individuals; runs open-source models
      on Swiss infrastructure and can answer from the organisation's own
      documents.
  - id: microsoft-copilot
    note: >-
      Not integrated into Microsoft 365 apps; offered as a separate platform
      with document search, meeting minutes, agents and website chatbots.

audience: [business, public-sector]
deployment: [saas, managed, on-premises]
platforms: [web]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Deeplink describes its platform as designed and built in Switzerland by a
      team of seven in Prilly near Lausanne.
  hosted:
    value: yes
    basis: vendor
    source: about
    note: >-
      Deeplink states that its infrastructure is hosted entirely in Switzerland.
      Customers can choose between shared and dedicated cloud deployments run
      by Deeplink or an on-premises installation in their own data centre.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak
    providerCountry: CH
    type: public-cloud
    swissOwned: yes
    basis: vendor
    source: privacy
    note: >-
      The privacy policy, dated 2019, states that personal data is stored with
      Infomaniak cloud services in Geneva. It does not say whether the GPU
      servers used for the language models are also provided by Infomaniak.

openSource:
  value: no
  basis: inferred
  note: The platform is proprietary; it uses open-source language models.

pricing:
  model: quote
  url: https://www.deeplink.ai/en/products/
  checked: 2026-10-16
  basis: vendor
  source: products
  note: >-
    Deployment models range from Standard (shared, 14-billion-parameter model)
    to Performance, Private Cloud and on-premises; no prices are published.

tags: [llm, rag, chatbot, meeting-minutes, ai-agents, public-sector, b-corp]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: about
    title: About Us - Deeplink.ai
    url: https://www.deeplink.ai/en/about-us/
    publisher: Deeplink SA
    kind: vendor
    accessed: 2026-10-16
  - id: products
    title: Products - Deeplink.ai
    url: https://www.deeplink.ai/en/products/
    publisher: Deeplink SA
    kind: vendor
    accessed: 2026-10-16
  - id: internal-gpt
    title: Internal GPT - Deeplink.ai
    url: https://www.deeplink.ai/en/products/internal-gpt/
    publisher: Deeplink SA
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Privacy Policy - Deeplink.ai
    url: https://www.deeplink.ai/en/privacy/
    publisher: Deeplink SA
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Deeplink — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/deeplink/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'KI-Plattform mit internem GPT, Dokumentensuche, Sitzungsprotokollen und Chatbots.'
    description: 'Deeplink ist eine KI-Plattform aus Lausanne für KMU und öffentliche Stellen, mit internem GPT, Dokumentensuche und Chatbots auf Open-Source-Modellen in der Schweiz.'
    notes:
      swiss.developed.note: 'Deeplink beschreibt seine Plattform als in der Schweiz konzipiert und gebaut, von einem siebenköpfigen Team in Prilly bei Lausanne.'
      swiss.hosted.note: 'Deeplink gibt an, dass seine Infrastruktur vollständig in der Schweiz gehostet wird. Kunden können zwischen geteilten und dedizierten, von Deeplink betriebenen Cloud-Bereitstellungen oder einer On-Premises-Installation im eigenen Rechenzentrum wählen.'
      swiss.infrastructure.note: 'Die Datenschutzerklärung von 2019 gibt an, dass Personendaten bei den Cloud-Diensten von Infomaniak in Genf gespeichert werden. Ob auch die GPU-Server für die Sprachmodelle von Infomaniak bereitgestellt werden, wird nicht angegeben.'
      openSource.note: 'Die Plattform ist proprietär; sie verwendet Open-Source-Sprachmodelle.'
      alternativesTo.chatgpt.note: 'Richtet sich an Organisationen statt an Einzelpersonen; betreibt Open-Source-Modelle auf Schweizer Infrastruktur und kann aus den eigenen Dokumenten der Organisation antworten.'
      alternativesTo.microsoft-copilot.note: 'Nicht in die Microsoft-365-Apps integriert; wird als separate Plattform mit Dokumentensuche, Sitzungsprotokollen, Agenten und Website-Chatbots angeboten.'
---

Deeplink is an AI platform developed by Deeplink SA for small and medium-sized
businesses, associations and public administrations. It combines an internal
GPT-style assistant for writing, summarising and translating, a search tool that
answers questions from the organisation's own documents (retrieval-augmented
generation), automatic meeting minutes, AI agents for business processes and
chatbots for websites. A focus mode restricts answers to the documents
provided; an optional web search extends them to external sources.

The platform uses open-source language models. Deeplink offers four deployment
models: a shared Standard environment, a Performance tier with a larger model,
a dedicated Private Cloud managed by Deeplink, and an on-premises installation
on the customer's hardware. Deeplink states that its infrastructure is hosted
entirely in Switzerland; its privacy policy names Infomaniak as the cloud
provider for personal data.

Published references include the Canton of Vaud, the City of Morges and
Lausanne's public transport operator. The company has been a certified B Corp
since 2022. Prices are not published.
