---
name: Apertus
aliases: [Apertus LLM, Apertus 1.5]
company: swiss-ai-initiative
tagline: Open multilingual language models (8B and 70B) with published weights, data and code.
description: >-
  Apertus is a family of open multilingual language models (8B and 70B) from
  EPFL, ETH Zurich and CSCS, released under Apache 2.0 with documented training.
website: https://www.apertus-ai.org
status: active
launched: 2025

categories: [language-models]
alternativesTo:
  - id: meta-llama
    note: Available in 8B and 70B sizes only; training data reconstruction scripts and training code are also published.

audience: [developer, business, public-sector]
deployment: [self-hosted]

swiss:
  developed:
    value: yes
    basis: vendor
    source: eth-press
    note: Developed by researchers at EPFL, ETH Zurich and the Swiss National Supercomputing Centre (CSCS) within the Swiss AI Initiative.
  hosted:
    value: optional
    basis: vendor
    source: inference
    note: >-
      Apertus is distributed as downloadable weights and runs wherever it is
      deployed. Hosted APIs from Swiss data centres are listed for Swisscom,
      Infomaniak, PHOENIQS, Safe Swiss Cloud, OnPrem.ai and stepping stone, with
      deployment guides for Exoscale; Public AI, Featherless and the large US
      cloud platforms also offer it. The infrastructure below refers to model
      training.
  infrastructure:
    provider: Swiss National Supercomputing Centre (CSCS)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    facility: Alps supercomputer, CSCS Lugano
    basis: vendor
    source: eth-press
    note: >-
      Apertus 1.0 was trained with more than 10 million GPU hours on Alps,
      using up to 4,096 NVIDIA GH200 GPUs.

openSource:
  value: yes
  license: Apache-2.0
  repository: https://github.com/swiss-ai
  basis: vendor
  source: hf-v15
  note: >-
    Model weights are published on Hugging Face under Apache 2.0; downloading
    requires accepting an acceptable use policy. The technical report, training
    code (a Megatron-LM fork) and pretraining data reconstruction scripts are
    published on GitHub.

pricing:
  model: free
  freePlan: yes
  url: https://huggingface.co/swiss-ai
  checked: 2026-10-15
  basis: vendor
  source: hf-v15
  note: Weights are free to download; hosted APIs from third-party providers are priced by each provider.

tags: [llm, open-weights, multilingual, open-data, sovereign-ai, swiss-german, romansh]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: eth-press
    title: 'Apertus: a fully open, transparent, multilingual language model (press release, 2 September 2025)'
    url: https://ethz.ch/en/news-and-events/eth-news/news/2025/09/press-release-apertus-a-fully-open-transparent-multilingual-language-model.html
    publisher: ETH Zurich
    kind: vendor
    accessed: 2026-10-15
  - id: hf-v10
    title: swiss-ai/Apertus-70B-Instruct-2509 - model card
    url: https://huggingface.co/swiss-ai/Apertus-70B-Instruct-2509
    publisher: Swiss AI Initiative (Hugging Face)
    kind: documentation
    accessed: 2026-10-15
  - id: hf-v15
    title: swiss-ai/Apertus-v1.5-70B - model card
    url: https://huggingface.co/swiss-ai/Apertus-v1.5-70B
    publisher: Swiss AI Initiative (Hugging Face)
    kind: documentation
    accessed: 2026-10-15
  - id: v15
    title: Apertus 1.5
    url: https://www.apertus-ai.org/articles/2026-07-apertus-1-5/
    publisher: Swiss AI Initiative
    kind: vendor
    accessed: 2026-10-15
  - id: inference
    title: Apertus inference ecosystem (general availability guide)
    url: https://www.apertus-ai.org/articles/2026-09-apertus-1-5-ga/
    publisher: Swiss AI Initiative
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: swiss-ai on GitHub
    url: https://github.com/swiss-ai
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Offene mehrsprachige Sprachmodelle (8B und 70B) mit veröffentlichten Gewichten, Daten und Code.'
    description: 'Apertus ist eine Familie offener mehrsprachiger Sprachmodelle (8B und 70B) von EPFL, ETH Zürich und CSCS, veröffentlicht unter Apache 2.0 mit dokumentiertem Training.'
---

Apertus is a family of open large language models developed by EPFL, ETH Zurich
and CSCS as part of the Swiss AI Initiative. The first release in September 2025
comprised base and instruction-tuned models with 8 and 70 billion parameters,
trained on 15 trillion tokens covering more than 1,000 languages, about 40% of
them non-English, including Swiss German and Romansh. Apertus 1.5, with weights
released in July 2026 and documented in October 2026, extends both sizes with
image and audio input, an optional reasoning mode and a context window of up to
262,144 tokens.

The weights are published on Hugging Face under the Apache 2.0 licence, and the
project also publishes its technical report, training code and the scripts used
to reconstruct the training data. Apertus 1.0 was trained on the Alps
supercomputer operated by CSCS in Lugano. Apertus is a set of models rather than
a finished chat product; the Apertus 1.0 model card notes that no output filter
is provided.

Apertus can be run on one's own hardware or used through third-party APIs
listed by the project, several of which are hosted in Swiss data centres (for
example Swisscom, Infomaniak and PHOENIQS).
Apertus 1.5 is also offered in the Proton Lumo and Infomaniak Euria assistants.
