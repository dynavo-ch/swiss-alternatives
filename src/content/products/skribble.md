---
name: Skribble
company: skribble
tagline: Electronic signatures (SES, AES, QES) under Swiss ZertES and EU eIDAS rules.
description: >-
  Skribble is a Zurich-based e-signature service for simple, advanced and
  qualified signatures; accounts with the Swiss entity are hosted in Zurich.
website: https://www.skribble.com
status: active

categories: [e-signatures]
alternativesTo:
  - docusign
  - adobe-acrobat-sign

audience: [business, enterprise]
deployment: [saas]
platforms: [web, api]
languages:
  interface: [de, en, fr]

swiss:
  developed:
    value: partial
    basis: vendor
    source: dpa
    note: >-
      Skribble AG is based in Zurich; its subsidiary Skribble Deutschland GmbH
      in Karlsruhe is listed as a subprocessor for research and development and
      support.
  hosted:
    value: yes
    basis: vendor
    source: dpa
    note: >-
      For customers contracting with Skribble AG (Switzerland), hosting and
      infrastructure are provided by cloudscale.ch AG and VSHN AG in Zurich.
      Customers of Skribble Deutschland GmbH are hosted by IONOS SE in Germany
      (available since September 2024). Auxiliary services such as notification
      e-mail, CRM, billing and network protection use providers in the EU, UK
      and USA.
  dataLocations: [CH, DE]
  infrastructure:
    provider: cloudscale.ch AG and VSHN AG
    providerCountry: CH
    type: public-cloud
    swissOwned: yes
    basis: vendor
    source: dpa
    note: >-
      Applies to accounts with Skribble AG. Both providers are Zurich-based
      companies. Skribble describes its hosting as two geo-redundant Tier IV
      data centres in Switzerland with ISO 27001 certification.

openSource:
  value: no
  basis: inferred
  note: Proprietary cloud service; no source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 23
    currency: CHF
    period: month
    note: Team plan, per user, billed annually, excl. VAT
  url: https://www.skribble.com/de-ch/preise/
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    A Starter plan without base fee charges per signature (CHF 1 per simple,
    CHF 3 per advanced and CHF 5 per qualified signature). Qualified signatures
    require a one-time identification for CHF 22.50, valid for five years. The
    trial lasts 14 days.

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: yes
  api: yes

certifications: [iso-27001, iso-9001]

tags: [e-signature, qualified-electronic-signature, qes, zertes, eidas]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: dpa
    title: Auftragsverarbeitungsvertrag (ADV) mit Unterauftragsbearbeitern - Skribble
    url: https://www.skribble.com/de-ch/dpa/
    publisher: Skribble AG
    kind: vendor
    accessed: 2026-10-15
  - id: local
    title: Lokal - Skribble
    url: https://www.skribble.com/de-ch/lokal/
    publisher: Skribble AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Datenschutzbestimmungen - Skribble
    url: https://www.skribble.com/de-ch/datenschutz/
    publisher: Skribble AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Be on the safe side - Skribble security
    url: https://www.skribble.com/en-eu/security/
    publisher: Skribble AG
    kind: vendor
    accessed: 2026-10-15
  - id: comparison
    title: Skribble in comparison
    url: https://www.skribble.com/en-eu/skribble-in-comparison/
    publisher: Skribble AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Preise - Skribble
    url: https://www.skribble.com/de-ch/preise/
    publisher: Skribble AG
    kind: vendor
    accessed: 2026-10-15
  - id: api
    title: Skribble API documentation
    url: https://api.docs.skribble.com/introduction
    publisher: Skribble AG
    kind: documentation
    accessed: 2026-10-15
---

Skribble is a web-based service for signing PDF documents electronically. It
supports simple (SES), advanced (AES) and qualified electronic signatures (QES)
and states that its signatures meet the requirements of the Swiss ZertES and
the EU eIDAS regulation. Qualified signatures are issued in cooperation with
trust service providers including Swisscom, A-Trust and GlobalSign and require a
one-time identification of the signer. A REST API and connectors for Microsoft
365, Google Drive, SAP and Salesforce are available.

Hosting depends on the contracting entity: accounts with Skribble AG are hosted
by the Swiss providers cloudscale.ch and VSHN in Zurich, while accounts with
Skribble Deutschland GmbH are hosted by IONOS in Germany. Documents are
encrypted at rest with a separate key per document, and single sign-on via SAML
or OpenID Connect is supported. Some supporting services, such as notification
e-mail delivery, payments and CRM, rely on providers outside Switzerland.

Pricing is in CHF for Swiss customers. Team and Pro plans include a yearly
quota of advanced or qualified signatures, and additional signatures are billed
per use. After the trial, a free version lets users sign documents they are
invited to and access signed documents; sending signature requests requires the
pay-per-use Starter plan or a subscription.
