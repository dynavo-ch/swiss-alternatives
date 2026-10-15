---
name: Futurae
aliases: [Futurae Platform, Futurae Authentication Suite, Futurae App]
company: futurae
tagline: Multi-factor authentication and transaction confirmation for banks and fintechs.
description: >-
  Futurae is a Zurich-developed authentication platform for banks and fintechs,
  offering push, QR, TOTP and FIDO2 login plus transaction signing via app or SDK.
website: https://www.futurae.com
status: active

categories: [authentication]
alternativesTo:
  - id: duo-security
    note: >-
      Covers push, one-time-code, FIDO2 and hardware-token MFA through an API,
      but is aimed at customer-facing apps in financial services; no workforce
      SSO or device-trust features are listed.

audience: [business, enterprise]
deployment: [saas]
platforms: [web, ios, android, api]
languages:
  interface: [en, de, fr, it, es]

swiss:
  developed:
    value: yes
    basis: vendor
    source: website
    note: >-
      Futurae describes the product as "crafted in Zurich", where the company
      and its management are based.
  hosted:
    value: yes
    basis: vendor
    source: subprocessors
    note: >-
      The service runs on Google Cloud Platform; Futurae's subprocessor list
      gives Switzerland as the processing location for hosting and its security
      page states data residency in Switzerland. Cloudflare (global network)
      provides DDoS protection and a web application firewall, and SMS codes
      are sent through providers in Poland and Denmark.
  dataLocations: [CH]
  infrastructure:
    provider: Google Cloud Platform (Google Cloud EMEA Limited)
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: subprocessors

pricing:
  model: usage-based
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 0.25
    currency: CHF
    period: month
    note: Integrated plan, per monthly active user, for 1,000 to 10,000 MAU
  url: https://www.futurae.com/pricing/
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  api: yes

certifications: [iso-27001]

tags: [mfa, 2fa, passwordless, fido2, push-authentication, transaction-signing, psd2, banking]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: website
    title: Futurae - authentication and fraud prevention platform
    url: https://www.futurae.com/
    publisher: Futurae Technologies AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Security at Futurae
    url: https://www.futurae.com/security/
    publisher: Futurae Technologies AG
    kind: vendor
    accessed: 2026-10-15
  - id: subprocessors
    title: Subprocessors
    url: https://www.futurae.com/legal/subprocessors-v1.4/
    publisher: Futurae Technologies AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Pricing
    url: https://www.futurae.com/pricing/
    publisher: Futurae Technologies AG
    kind: vendor
    accessed: 2026-10-15
  - id: terms
    title: General Terms of Use
    url: https://www.futurae.com/legal/terms-v1.7/
    publisher: Futurae Technologies AG
    kind: vendor
    accessed: 2026-10-15
  - id: app-store
    title: Futurae on the App Store
    url: https://apps.apple.com/ch/app/futurae/id1069858990
    publisher: Apple
    kind: documentation
    accessed: 2026-10-15
---

Futurae is an authentication platform from Futurae Technologies AG in Zurich,
used mainly by banks, payment providers, insurers and fintechs to secure logins
and confirm transactions in their own customer-facing services. Supported
methods include push approval, QR codes, app-generated one-time codes (TOTP),
SMS codes, FIDO2/passwordless login and hardware tokens. End users authenticate
either with the Futurae app, a white-label app or a mobile SDK embedded in the
customer's own app; integration runs through the Auth, Admin, Log and Trust
Signals APIs, and the platform adds risk and fraud signals.

The service is offered only as a hosted service; no self-hosted version is
listed. It runs on Google Cloud Platform, and Futurae states that data resides
in Switzerland. Cloudflare provides DDoS protection, and SMS delivery uses
providers in Poland and Denmark. Futurae states that it holds ISO/IEC 27001:2022
certification, and its terms of use are governed by Swiss law. Futurae's
product overview lists no single sign-on or user directory functions; the
platform is designed to be added to an existing login.

The published Integrated plan costs CHF 0.25 per monthly active user for 1,000
to 10,000 users; users who do not authenticate in a given month are not
charged. Larger deployments use a customised plan on request.
