---
name: DigLM
aliases: [Dig LM]
company: dn-solution
tagline: AI workspace and API for Swiss SMEs on a self-hosted open-weight model in Switzerland.
description: >-
  DigLM is an AI chat platform and OpenAI-compatible API from DN Solution in
  Lausanne that runs an open-weight model on Exoscale servers in Geneva and Zurich.
website: https://www.diglm.ch
status: active

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: >-
      Runs one self-hosted open-weight model (Qwen at the time of writing)
      instead of OpenAI's models, adds company-wide document memory and
      profession-specific skills calibrated on Swiss practice, and is aimed at
      businesses only; the website is in French.
  - id: microsoft-copilot
    note: >-
      A separate browser workspace and API rather than an assistant built into
      Microsoft 365 apps.

audience: [business, public-sector]
deployment: [saas]
platforms: [web, api]
languages:
  support: [fr]

swiss:
  developed:
    value: yes
    basis: vendor
    source: home
    note: >-
      DigLM states that the platform is designed and operated in Switzerland by
      a team based in Lausanne, and carries the swiss made software label. The
      language model itself is a third-party open-weight model; DigLM states
      that it does not fine-tune or otherwise modify it.
  hosted:
    value: yes
    basis: vendor
    source: privacy
    note: >-
      The privacy policy states that hosting, AI processing and storage of
      customer content take place only in Switzerland, at Akenes SA (Exoscale) in
      data centres in Geneva and Zurich. DigLM states that inference runs on its
      own vLLM deployment on dedicated GPU servers and that no call is made to an
      AI service outside Switzerland. Ancillary functions such as authentication
      and transactional e-mail may involve transfers abroad; the marketing
      website is hosted by a separate web host.
  dataLocations: [CH]
  infrastructure:
    provider: Exoscale (Akenes SA, Lausanne)
    providerCountry: AT
    type: public-cloud
    swissOwned: no
    facility: Exoscale data centres in Geneva and Zurich
    basis: vendor
    source: exoscale
    note: >-
      Exoscale is a trademark of Akenes SA, a member of A1 Digital, which is part
      of the Austrian A1 Telekom Austria Group.

openSource:
  value: no
  basis: inferred
  note: >-
    The platform is proprietary; the language model it runs is an open-weight
    model published by third parties.

pricing:
  model: usage-based
  freePlan: no
  freeTrial: yes
  chfBilling: yes
  startingPrice:
    amount: 20
    currency: CHF
    period: usage
    note: Prepaid top-up of CHF 20 for the whole company (CHF 15 per 1,000 credits); a subscription block costs CHF 99 per month with 20,000 credits, prices incl. VAT
  url: https://www.diglm.ch/tarifs
  checked: 2026-11-08
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  api: yes

tags: [llm, open-weight, chat, api, openai-compatible, sme, french]
affiliate: null
sponsored: false
added: 2026-11-08
updated: 2026-11-08
lastVerified: 2026-11-08
sources:
  - id: home
    title: Plateforme IA pour PME en Suisse Romande | DigLM
    url: https://www.diglm.ch
    publisher: DN Solution SA
    kind: vendor
    accessed: 2026-11-08
  - id: security
    title: Sécurité IA - données hébergées en Suisse | DigLM
    url: https://www.diglm.ch/securite
    publisher: DN Solution SA
    kind: vendor
    accessed: 2026-11-08
  - id: privacy
    title: Politique de confidentialité | DigLM
    url: https://www.diglm.ch/politique-de-confidentialite
    publisher: DN Solution SA
    kind: vendor
    accessed: 2026-11-08
  - id: pricing
    title: Tarifs plateforme IA suisse | DigLM
    url: https://www.diglm.ch/tarifs
    publisher: DN Solution SA
    kind: vendor
    accessed: 2026-11-08
  - id: api
    title: API IA souveraine suisse pour vos logiciels | DigLM
    url: https://www.diglm.ch/api
    publisher: DN Solution SA
    kind: vendor
    accessed: 2026-11-08
  - id: exoscale
    title: About Us - Exoscale and the A1 Group
    url: https://www.exoscale.com/about/
    publisher: Akenes SA
    kind: vendor
    accessed: 2026-11-08
  - id: swissmadesoftware
    title: DN Solution SA / DigLM — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/dn-solution-sa/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-08
i18n:
  de:
    tagline: 'KI-Arbeitsplatz und API für Schweizer KMU auf einem selbst gehosteten Open-Weight-Modell in der Schweiz.'
    description: 'DigLM ist eine KI-Chat-Plattform mit OpenAI-kompatibler API von DN Solution aus Lausanne, die ein Open-Weight-Modell auf Exoscale-Servern in Genf und Zürich betreibt.'
    notes:
      swiss.developed.note: 'DigLM gibt an, dass die Plattform von einem Team in Lausanne in der Schweiz konzipiert und betrieben wird, und trägt das Label swiss made software. Das Sprachmodell selbst ist ein Open-Weight-Modell eines Drittanbieters; DigLM gibt an, es weder nachzutrainieren noch anderweitig zu verändern.'
      swiss.hosted.note: 'Laut Datenschutzerklärung erfolgen Hosting, KI-Verarbeitung und Speicherung der Kundeninhalte ausschliesslich in der Schweiz, bei Akenes SA (Exoscale) in Rechenzentren in Genf und Zürich. DigLM gibt an, dass die Inferenz auf einer eigenen vLLM-Installation auf dedizierten GPU-Servern läuft und kein KI-Dienst ausserhalb der Schweiz aufgerufen wird. Nebenfunktionen wie Authentifizierung und Transaktions-E-Mails können Übermittlungen ins Ausland umfassen; die Marketing-Website wird bei einem separaten Webhoster betrieben.'
      swiss.infrastructure.note: 'Exoscale ist eine Marke der Akenes SA, die zu A1 Digital gehört, einem Teil der österreichischen A1 Telekom Austria Group.'
      openSource.note: 'Die Plattform ist proprietär; das verwendete Sprachmodell ist ein von Dritten veröffentlichtes Open-Weight-Modell.'
      pricing.startingPrice.note: 'Vorausbezahltes Guthaben ab CHF 20 für das ganze Unternehmen (CHF 15 pro 1000 Credits); ein Abo-Block kostet CHF 99 pro Monat mit 20 000 Credits, Preise inkl. MWST'
      alternativesTo.chatgpt.note: 'Betreibt ein einzelnes selbst gehostetes Open-Weight-Modell (derzeit Qwen) statt der Modelle von OpenAI, ergänzt ein unternehmensweites Dokumentengedächtnis und berufsspezifische Skills, die auf die Schweizer Praxis abgestimmt sind, und richtet sich nur an Unternehmen; die Website ist französischsprachig.'
      alternativesTo.microsoft-copilot.note: 'Ein separater Browser-Arbeitsplatz mit API statt eines in Microsoft-365-Apps integrierten Assistenten.'
---

DigLM is a browser-based AI workspace for small and medium-sized companies,
public administrations and regulated professions in French-speaking
Switzerland. Teams share conversations, index contracts, procedures and notes as
a company knowledge base, and activate profession-specific skills, for example
for fiduciaries, lawyers, HR or marketing, that use Swiss legal references and
terminology. An OpenAI-compatible API gives other software access to the same
model and skills, and custom AI agents are built on request from CHF 5,000.

DigLM runs a single open-weight model with vLLM on dedicated GPU servers at
Exoscale in Geneva and Zurich; in September 2026 this was a Qwen model. The
vendor states that the model is not fine-tuned on customer data and that no
request is passed to an AI provider outside Switzerland. Exoscale is a Swiss
cloud provider owned by the Austrian A1 Telekom Austria Group.

Usage is billed in prepaid credits, from CHF 20 per top-up, or as a monthly
subscription of CHF 99 per block of 20,000 credits; 1,000 free credits are
included when an account is opened. DigLM is operated by DN Solution, a
company founded in Lausanne in 2024.
