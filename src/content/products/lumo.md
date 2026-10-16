---
name: Lumo
aliases: [Proton Lumo, Lumo by Proton, Lumo AI]
company: proton
tagline: AI chat assistant with encrypted chat history, run on Proton servers in Europe.
description: >-
  Lumo is Proton's AI assistant. It runs open-weight language models on
  Proton-controlled servers in Europe and stores saved chats with zero-access
  encryption.
website: https://lumo.proton.me
status: active
launched: 2025

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: Runs open-weight models (such as Qwen, GLM and Apertus) rather than OpenAI's own models.
  - id: google-gemini
    note: Covers the standalone chat assistant, not the Google Workspace integration.
  - id: microsoft-copilot
    note: Covers the standalone chat assistant, not the Microsoft 365 integration.

audience: [consumer, business]
deployment: [saas]
platforms: [web, ios, android]
languages:
  interface: [en, de, fr, it]

swiss:
  developed:
    value: partial
    basis: inferred
    source: privacy-general
    note: >-
      Developed by Proton AG, headquartered near Geneva. Proton's privacy policy
      also lists subsidiaries in North Macedonia and Taiwan as processors, and
      Proton runs an R&D office in Vilnius. Proton does not publish how
      development work is split between locations.
  hosted:
    value: no
    basis: vendor
    source: launch
    note: >-
      Proton's launch post (July 2025) says Lumo operates from Proton's European
      data centres and is the first product moved as Proton shifts most of its
      physical infrastructure out of Switzerland, citing the proposed revision
      of the Swiss surveillance ordinance (VÜPF/OSCPT). CEO Andy Yen told the
      Keystone-SDA news agency in July 2025 that Germany was chosen for Lumo's
      servers instead of Switzerland, with further capacity being built in
      Norway. Proton's current Lumo pages state only that
      Lumo runs on servers controlled entirely by Proton in Europe and give no
      per-country breakdown. The operator and contracting entity remain Proton
      AG under Swiss law.
  dataLocations: [DE, NO]
  infrastructure:
    provider: Proton AG (Proton-controlled servers in third-party data centres)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    basis: inferred
    source: outage-press
    note: >-
      Inferred from Proton's statement that Lumo runs on servers it controls in
      Europe and from an August 2026 watson.ch report that Proton rents secured
      space from data-centre operators rather than running its own data centres.

openSource:
  value: partial
  license: GPL-3.0
  repository: https://github.com/ProtonLumo
  basis: verified
  source: github
  note: >-
    The Android and iOS apps and the web client (in the ProtonMail/WebClients
    repository) are published under GPL-3.0. The server-side code is not
    published; the language models are open-weight models from third parties.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  chfBilling: yes
  startingPrice:
    amount: 12.99
    currency: USD
    period: month
    note: Lumo Plus, billed monthly (USD 119.88 per year billed annually); CHF and EUR prices also offered
  url: https://proton.me/lumo/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: partial
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes

tags: [chatbot, llm, open-weight-models, image-generation, web-search, apertus]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: launch
    title: 'Introducing Lumo: AI where every conversation is confidential'
    url: https://proton.me/blog/lumo-ai
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: How Lumo keeps AI chats private and secure
    url: https://proton.me/lumo/security
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: support-privacy
    title: Lumo privacy
    url: https://proton.me/support/lumo-privacy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Lumo privacy policy
    url: https://proton.me/lumo/privacy-policy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy-general
    title: Proton privacy policy
    url: https://proton.me/legal/privacy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: sda
    title: Techfirma verlagert Server ins Ausland
    url: https://www.persoenlich.com/digital/techfirma-verlagert-server-ins-ausland
    publisher: persoenlich.com (Keystone-SDA)
    kind: press
    accessed: 2026-10-15
  - id: swissinfo
    title: Proton does not trust Switzerland to host its AI servers
    url: https://www.swissinfo.ch/eng/ai-governance/proton-does-not-trust-switzerland-to-host-its-ai-servers/89727842
    publisher: SWI swissinfo.ch
    kind: press
    accessed: 2026-10-15
  - id: heise
    title: 'Surveillance: Proton relocates parts of its infrastructure from Switzerland'
    url: https://www.heise.de/en/news/Surveillance-Proton-relocates-parts-of-its-infrastructure-from-Switzerland-10538664.html
    publisher: heise online
    kind: press
    accessed: 2026-10-15
  - id: outage-press
    title: Hitzebedingter Server-Ausfall bei Schweizer Cloud-Firma Proton
    url: https://www.watson.ch/wirtschaft/digital/192121021-hitzebedingter-server-ausfall-bei-schweizer-cloud-firma-proton
    publisher: watson.ch
    kind: press
    accessed: 2026-10-15
  - id: apertus
    title: Proton partners with the team behind Apertus
    url: https://proton.me/blog/lumo-apertus-partnership
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: lumo2
    title: Proton Lumo 2.0 adds image generation, memory, stronger web search
    url: https://www.macrumors.com/2026/06/30/proton-lumo-version-2-new-features/
    publisher: MacRumors
    kind: press
    accessed: 2026-10-15
  - id: pricing
    title: Lumo pricing
    url: https://proton.me/lumo/pricing
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: download
    title: Download Lumo
    url: https://proton.me/lumo/download
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: business
    title: Proton for Business plans
    url: https://proton.me/business/plans
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: ProtonLumo on GitHub
    url: https://github.com/ProtonLumo
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'KI-Chat-Assistent mit verschlüsseltem Chatverlauf, betrieben auf Proton-Servern in Europa.'
    description: 'Lumo ist der KI-Assistent von Proton. Er führt Open-Weight-Sprachmodelle auf von Proton kontrollierten Servern in Europa aus und speichert gesicherte Chats mit Zero-Access-Verschlüsselung.'
    notes:
      swiss.developed.note: 'Entwickelt von der Proton AG mit Firmensitz bei Genf. Die Datenschutzerklärung von Proton führt zudem Tochtergesellschaften in Nordmazedonien und Taiwan als Auftragsverarbeiter auf, und Proton betreibt ein F&E-Büro in Vilnius. Proton veröffentlicht nicht, wie die Entwicklungsarbeit auf die Standorte verteilt ist.'
      swiss.hosted.note: 'Gemäss Protons Lancierungsbeitrag (Juli 2025) wird Lumo aus Protons europäischen Rechenzentren betrieben und ist das erste Produkt, das verlagert wird, während Proton den Grossteil seiner physischen Infrastruktur aus der Schweiz abzieht; als Grund nennt Proton die geplante Revision der Schweizer Überwachungsverordnung (VÜPF/OSCPT). CEO Andy Yen sagte der Nachrichtenagentur Keystone-SDA im Juli 2025, dass für die Server von Lumo Deutschland statt der Schweiz gewählt wurde und weitere Kapazitäten in Norwegen aufgebaut werden. Protons aktuelle Lumo-Seiten geben nur an, dass Lumo auf Servern in Europa läuft, die vollständig von Proton kontrolliert werden, und nennen keine Aufteilung nach Ländern. Betreiberin und Vertragspartnerin bleibt die Proton AG nach Schweizer Recht.'
      swiss.infrastructure.note: 'Abgeleitet aus Protons Aussage, dass Lumo auf von Proton kontrollierten Servern in Europa läuft, sowie aus einem Bericht von watson.ch vom August 2026, wonach Proton gesicherte Flächen bei Rechenzentrumsbetreibern mietet, statt eigene Rechenzentren zu betreiben.'
      openSource.note: 'Die Android- und iOS-Apps sowie der Web-Client (im Repository ProtonMail/WebClients) sind unter GPL-3.0 veröffentlicht. Der serverseitige Code ist nicht veröffentlicht; bei den Sprachmodellen handelt es sich um Open-Weight-Modelle von Dritten.'
      pricing.startingPrice.note: 'Lumo Plus, monatliche Abrechnung (USD 119.88 pro Jahr bei jährlicher Abrechnung); Preise in CHF und EUR ebenfalls verfügbar'
      alternativesTo.chatgpt.note: 'Nutzt Open-Weight-Modelle (etwa Qwen, GLM und Apertus) statt der eigenen Modelle von OpenAI.'
      alternativesTo.google-gemini.note: 'Deckt den eigenständigen Chat-Assistenten ab, nicht die Integration in Google Workspace.'
      alternativesTo.microsoft-copilot.note: 'Deckt den eigenständigen Chat-Assistenten ab, nicht die Integration in Microsoft 365.'
---

Lumo is an AI chat assistant launched by Proton in July 2025. Proton lists the
models currently in use as Qwen 3.5, GLM 5.3 and Apertus 1.5, the open model
from EPFL, ETH Zurich and the Swiss National Supercomputing Centre, plus
separate image models. The models run on Proton-controlled servers rather than
through third-party AI APIs; when web search is enabled, simplified queries are
sent to partner search APIs. Version 2.0 (June 2026) added image generation
and recognition and a memory feature.

Lumo can be used without an account, with limits on messages and model usage.
Saved chats require a Proton account and are stored with zero-access
encryption; Proton states it keeps no logs of conversations and does not use
them for model training. Prompts are decrypted on Lumo's GPU servers for
processing, so the service is not end-to-end encrypted in the sense of hiding
content from the server. Lumo Plus raises usage limits, and Proton's business
plans include Lumo for Business.

Unlike Proton's other services, Lumo is not hosted in Switzerland: Proton chose
Germany and Norway for its servers in response to the proposed revision of the
Swiss surveillance ordinance. The service is operated by Proton AG under Swiss
law.
