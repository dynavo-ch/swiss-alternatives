---
name: Unchained Engine
aliases: [Unchained Commerce, Unchained, unchained.shop]
company: unchained-commerce
tagline: Open-source headless e-commerce framework with a GraphQL API, built in Zurich.
description: >-
  Unchained Engine is an open-source headless e-commerce framework from Zurich
  for Node.js and MongoDB, self-hosted or operated by its developer in Switzerland.
website: https://unchained.shop
status: active

categories: [e-commerce]
alternativesTo:
  - id: shopify
    note: >-
      A headless framework rather than a hosted shop builder: storefronts are
      built separately (a Next.js template is provided) and the software is
      self-hosted or operated by Unchained Commerce, without licence or
      per-transaction fees.

audience: [business, developer]
deployment: [self-hosted, managed]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: website
    note: >-
      The engine is developed and maintained by Unchained Commerce GmbH in
      Zurich, which describes it as Swiss made.
  hosted:
    value: optional
    basis: vendor
    source: agency
    note: >-
      As self-hosted software, the engine runs wherever the operator installs
      it; a one-click deployment to Railway is offered. Unchained Commerce
      states that it hosts the shops it operates for customers in Switzerland
      rather than on AWS, Google Cloud or Azure; the data-centre operator is
      not named.
  dataLocations: [CH]

openSource:
  value: yes
  license: EUPL-1.2
  repository: https://github.com/unchainedshop/unchained
  basis: verified
  source: github

pricing:
  model: free
  freePlan: yes
  freeTrial: unknown
  enterprise: unknown
  chfBilling: unknown
  basis: vendor
  source: website
  note: >-
    The engine is free under the EUPL-1.2 licence with no per-transaction
    fees; implementation and operation services are offered on request.

features:
  api: yes

tags: [headless-commerce, graphql, nodejs, mongodb, b2b, ticketing, nextjs, self-hosted]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: Unchained Commerce - The Open E-Commerce Platform You Truly Own
    url: https://unchained.shop/
    publisher: Unchained Commerce GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: agency
    title: Unchained - E-Commerce & Digitalagentur Zürich
    url: https://unchained.ch/
    publisher: Unchained Commerce GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: privacy-agency
    title: Datenschutz - Unchained
    url: https://unchained.ch/datenschutz
    publisher: Unchained Commerce GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: github
    title: unchainedshop/unchained on GitHub
    url: https://github.com/unchainedshop/unchained
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-16
  - id: docs
    title: Unchained Engine documentation
    url: https://docs.unchained.shop
    publisher: Unchained Commerce GmbH
    kind: documentation
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Unchained Commerce — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/unchained-commerce/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Open-Source-Framework für Headless E-Commerce mit GraphQL-API, entwickelt in Zürich.'
    description: 'Unchained Engine ist ein Open-Source-Framework für Headless E-Commerce aus Zürich für Node.js und MongoDB, selbst gehostet oder vom Entwickler in der Schweiz betrieben.'
    notes:
      swiss.developed.note: 'Die Engine wird von der Unchained Commerce GmbH in Zürich entwickelt und gepflegt, die sie als Swiss made bezeichnet.'
      swiss.hosted.note: 'Als selbst gehostete Software läuft die Engine dort, wo der Betreiber sie installiert; ein One-Click-Deployment auf Railway wird angeboten. Unchained Commerce gibt an, die Shops, die es für Kunden betreibt, in der Schweiz statt auf AWS, Google Cloud oder Azure zu hosten; der Rechenzentrumsbetreiber wird nicht genannt.'
      alternativesTo.shopify.note: 'Ein Headless-Framework statt eines gehosteten Shop-Baukastens: Storefronts werden separat gebaut (eine Next.js-Vorlage wird bereitgestellt), und die Software wird selbst gehostet oder von Unchained Commerce betrieben, ohne Lizenz- oder Transaktionsgebühren.'
---

Unchained Engine is an open-source e-commerce framework developed by
Unchained Commerce GmbH in Zurich. It runs on Node.js and MongoDB and exposes
products, carts, orders and users through a GraphQL API, so that the shop
front end can be built independently; a Next.js storefront template, an admin
interface for products and orders and an AI assistant for store management are
provided. Unchained Commerce uses the engine for retail, B2B and event-ticketing
projects.

The source code is published on GitHub under the EUPL-1.2 licence. The engine
can be installed on any infrastructure, and the vendor offers a one-click
deployment to Railway. Unchained Commerce also works as an agency: it builds
shops, integrates ERP and PIM systems and operates shops for its customers,
which it states are hosted in Switzerland rather than on AWS, Google Cloud or
Azure.

Setting up a shop requires development work, since the storefront is built
separately from the engine. There are no licence or per-transaction fees;
implementation and hosting services are offered on request.
