---
name: Euria
aliases: [Infomaniak Euria]
company: infomaniak
tagline: AI assistant running open-weight models on Infomaniak's Swiss infrastructure.
description: >-
  Euria is Infomaniak's AI chat assistant, usable free on web and mobile and built
  into kSuite, running open-weight models in Infomaniak's Swiss data centres.
website: https://www.infomaniak.com/en/euria
status: active
launched: 2025

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: Runs open-weight models selected by Infomaniak rather than proprietary frontier models.
  - id: google-gemini
    note: Runs open-weight models selected by Infomaniak; integrated with kSuite instead of Google Workspace.
  - id: microsoft-copilot
    note: Integrated with kSuite apps (Mail, kDrive, kChat) rather than Microsoft 365.

audience: [consumer, business]
deployment: [saas]
platforms: [web, ios, android]

swiss:
  developed:
    value: partial
    basis: inferred
    source: faq
    note: >-
      The assistant and its integrations are built by Infomaniak, but the
      underlying language models come from third parties. Infomaniak names
      Mistral, Llama, DeepSeek, Granite and Whisper as defaults, plus the Swiss
      Apertus model as a selectable option.
  hosted:
    value: yes
    basis: vendor
    source: launch
    note: >-
      Infomaniak states that processing, storage and hosting take place only in
      its own data centres in Switzerland, without external providers. The launch
      release links Euria to its D4 data centre in Geneva.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak (self-operated data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    facility: Infomaniak D4, Geneva
    basis: vendor
    source: launch

openSource:
  value: partial
  license: GPL-3.0
  repository: https://github.com/Infomaniak/android-euria
  basis: vendor
  source: github
  note: >-
    The Android and iOS apps are GPL-3.0 and the models used are open-weight;
    the Euria service itself is not published.

pricing:
  model: freemium
  freePlan: yes
  chfBilling: yes
  startingPrice:
    amount: 19.00
    currency: CHF
    period: year
    note: Via my kSuite+ (unlimited projects and conversations), annual billing, incl. VAT
  url: https://www.infomaniak.com/en/ksuite/myksuite/prices
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionInTransit: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Euria runs in Infomaniak's D4 data centre in Geneva, which according to the
    vendor reuses all of the energy it consumes as heat for the district heating
    network.
  basis: vendor
  source: d4

tags: [ai, chatbot, llm, open-weight, transcription, apertus]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: euria
    title: Euria, the ethical AI assistant
    url: https://www.infomaniak.com/en/euria
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: launch
    title: Infomaniak lance Euria, une IA gratuite et souveraine qui respecte la vie privée
    url: https://www.presseportal.ch/pm/100057093/100937129?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
  - id: faq
    title: Getting started guide - Euria, the sovereign and free AI assistant
    url: https://www.infomaniak.com/en/support/faq/1369/getting-started-guide-euria-the-sovereign-and-free-ai-assistant
    publisher: Infomaniak Network SA
    kind: documentation
    accessed: 2026-10-15
  - id: apertus
    title: Discover Euria and the Apertus model
    url: https://www.infomaniak.com/en/support/faq/2924/discover-euria-and-the-apertus-model
    publisher: Infomaniak Network SA
    kind: documentation
    accessed: 2026-10-15
  - id: pricing
    title: my kSuite - Prices and characteristics
    url: https://www.infomaniak.com/en/ksuite/myksuite/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: certifications
    title: Certifications and labels
    url: https://www.infomaniak.com/en/certifications
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: d4
    title: 'Innovation : Infomaniak inaugure un data center revalorisant 100% de son énergie'
    url: https://www.presseportal.ch/pm/100057093/100928245?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
  - id: github
    title: Infomaniak/android-euria
    url: https://github.com/Infomaniak/android-euria
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

Euria is an AI chat assistant launched in December 2025. It can be used without
an account at euria.infomaniak.com or in the iOS and Android apps, and is also
built into kSuite services such as Mail, kDrive and kChat. Features include web
search, document and image analysis, audio transcription, projects and an
ephemeral mode in which conversations are not stored.

Euria runs several open-weight models on Infomaniak hardware rather than a
single in-house model; the vendor's documentation names Mistral, Llama,
DeepSeek, Granite and Whisper, and users can select the Swiss Apertus model.
Infomaniak states that prompts are processed only in Switzerland and are not
used to train models. Free use is subject to rolling 24-hour quotas, which are
raised with my kSuite+ or kSuite Pro plans, and the service is not offered in
some countries.
