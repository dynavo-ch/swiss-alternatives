---
name: Keera
aliases: [Keera Gateway, Keera Chat, Keera AI]
company: bespinian
tagline: AI gateway and browser chat that sends requests to Swiss open or approved foreign models.
description: >-
  Keera is an AI gateway with a browser chat from bespinian in Bern that sends
  each request to Swiss-hosted open models or, if allowed, to foreign providers.
website: https://keera.ch/en/
status: active

categories: [ai-assistants]
alternativesTo:
  - id: chatgpt
    note: >-
      An organisation-wide gateway rather than a single assistant: administrators
      choose per team which models may be used, from open-weight models hosted
      by Swiss providers to OpenAI, Anthropic, Google or Mistral, with budgets and
      an audit log; chats are kept only in the browser.

audience: [business, enterprise, public-sector]
deployment: [saas, self-hosted]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: imprint
    note: >-
      bespinian states that it builds Keera Gateway and Keera Engine in Bern.
      The language models are third-party models.
  hosted:
    value: yes
    basis: vendor
    source: privacy
    note: >-
      The privacy policy states that the shared Swiss Cloud instance runs at
      Nine in Switzerland and that the gateway stores only request metadata
      (user, model, tokens, cost, decision), not prompts or answers. Prompts are
      forwarded to the model provider the organisation chooses: four providers in
      Switzerland (stepping stone, Infomaniak, Phoeniqs, CSCS) or, once released
      by an administrator, Mistral in the EU and Anthropic, OpenAI and Google in
      the US. Dedicated instances run at a Swiss cloud provider, Enterprise
      instances in the customer's own cluster.
  dataLocations: [CH]
  infrastructure:
    provider: Nine Internet Solutions AG (shared instance)
    providerCountry: CH
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: privacy

openSource:
  value: no
  basis: vendor
  source: licence
  note: >-
    The source code of Keera Gateway and Keera Chat is published on GitHub
    under the Keera Community Licence, a source-available licence that reserves
    production use by companies and public bodies for paid plans.

pricing:
  model: usage-based
  freePlan: no
  enterprise: yes
  chfBilling: yes
  url: https://keera.ch/en/pricing
  checked: 2026-11-08
  basis: vendor
  source: pricing

features:
  sso: yes
  api: yes

tags: [llm-gateway, ai-chat, open-weight, apertus, audit-log, budgets, kubernetes, vllm]
affiliate: null
sponsored: false
added: 2026-11-08
updated: 2026-11-08
lastVerified: 2026-11-08
sources:
  - id: home
    title: Keera - Sovereign AI platform for Switzerland
    url: https://keera.ch/en/
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: chat
    title: Keera Chat - the AI chat in the browser, through Keera Gateway
    url: https://keera.ch/en/chat
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: models
    title: Keera Gateway model catalogue - LLM prices in CHF
    url: https://keera.ch/en/models
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: sovereignty
    title: AI sovereignty in Switzerland - Keera
    url: https://keera.ch/en/sovereignty
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: pricing
    title: Keera Gateway pricing
    url: https://keera.ch/en/pricing
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: privacy
    title: Privacy policy - Keera by bespinian
    url: https://keera.ch/en/privacy
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: imprint
    title: Imprint - Keera by bespinian
    url: https://keera.ch/en/imprint
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: licence
    title: Keera Community Licence v1.0
    url: https://raw.githubusercontent.com/bespinian/keera-gateway/main/LICENSE
    publisher: bespinian GmbH
    kind: vendor
    accessed: 2026-11-08
  - id: swissmadesoftware
    title: bespinian — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/bespinian/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-08
i18n:
  de:
    tagline: 'KI-Gateway mit Browser-Chat, das Anfragen an offene Schweizer oder freigegebene ausländische Modelle leitet.'
    description: 'Keera ist ein KI-Gateway mit Browser-Chat von bespinian aus Bern, das jede Anfrage an in der Schweiz gehostete offene Modelle oder, falls erlaubt, an ausländische Anbieter sendet.'
    notes:
      swiss.developed.note: 'bespinian gibt an, Keera Gateway und Keera Engine in Bern zu bauen. Die Sprachmodelle stammen von Dritten.'
      swiss.hosted.note: 'Laut Datenschutzerklärung läuft die gemeinsame Swiss-Cloud-Instanz bei Nine in der Schweiz, und das Gateway speichert nur Metadaten der Anfragen (Benutzer, Modell, Tokens, Kosten, Entscheid), keine Prompts oder Antworten. Prompts werden an den Modellanbieter weitergeleitet, den die Organisation wählt: vier Anbieter in der Schweiz (stepping stone, Infomaniak, Phoeniqs, CSCS) oder, nach Freigabe durch eine Administratorin, Mistral in der EU sowie Anthropic, OpenAI und Google in den USA. Dedizierte Instanzen laufen bei einem Schweizer Cloud-Anbieter, Enterprise-Instanzen im eigenen Cluster der Kundschaft.'
      openSource.note: 'Der Quellcode von Keera Gateway und Keera Chat ist auf GitHub unter der Keera Community Licence veröffentlicht, einer Source-available-Lizenz, die den produktiven Einsatz durch Unternehmen und öffentliche Stellen den kostenpflichtigen Plänen vorbehält.'
      alternativesTo.chatgpt.note: 'Ein unternehmensweites Gateway statt eines einzelnen Assistenten: Administratoren legen pro Team fest, welche Modelle genutzt werden dürfen, von Open-Weight-Modellen bei Schweizer Anbietern bis zu OpenAI, Anthropic, Google oder Mistral, mit Budgets und Audit-Log; Chats werden nur im Browser gespeichert.'
---

Keera is a platform through which an organisation sends all its AI requests.
Keera Gateway offers one OpenAI- and Anthropic-compatible endpoint for chat,
agents and in-house applications, and applies rules per team, API key and data
class before a request reaches a model: budgets per team and cost centre,
filtering of secrets and personal data, blocking of foreign providers until
they are released, and an audit log that can be forwarded to a SIEM. Keera Chat
is a browser chat that uses the same gateway and keeps conversations only in
the user's browser; Keera Agents and Keera Engine, which serves open models with
vLLM on Kubernetes, are offered on request.

The model catalogue lists open-weight models such as Apertus, Qwen and Gemma
from four providers in Switzerland, and models from Mistral in the EU and from
Anthropic, OpenAI and Google in the US. The shared Swiss Cloud plan runs at Nine
in Switzerland and has no base fee; model usage is charged at the providers'
list prices. A dedicated instance costs CHF 890 per month, and Enterprise
customers run the gateway in their own cluster.

Keera is developed in Bern by bespinian, a Swiss-owned cloud-native engineering
firm. The gateway's source code is published under a source-available licence
that restricts commercial production use.
