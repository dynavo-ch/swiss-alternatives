---
name: Nevis ID
aliases: [Nevis, Nevis Identity Suite, Nevis Authentication Cloud, Nevis Security]
company: nevis
tagline: Customer identity and access management with passwordless login, on-premises or SaaS.
description: >-
  Nevis ID is a customer identity and access management platform from Zurich's
  Nevis Security, used mainly by banks, insurers and public authorities.
website: https://www.nevis.net/en/nevis-id
status: active

categories: [iam, authentication]
alternativesTo:
  - id: auth0
    note: >-
      Aimed at regulated enterprises, often installed on customer
      infrastructure; no self-service plans or published prices.
  - id: okta
    note: Positioned for customer identity (CIAM) rather than workforce identity.

audience: [business, enterprise, public-sector]
deployment: [saas, on-premises, self-hosted]
platforms: [web, linux, ios, android, api]

swiss:
  developed:
    value: partial
    basis: inferred
    source: iso-certificate
    note: >-
      Nevis is headquartered in Zurich. Its ISO/IEC 27001 certificate covers
      secure software development and SaaS operation at Zurich, Budapest
      (Nevis Security Kft.) and London, and the head of engineering represents
      the Hungarian subsidiary. How development work is split between the
      locations is not published.
  hosted:
    value: unknown
    note: >-
      The Nevis Identity Suite is usually installed by the customer, on Linux
      servers, OpenShift or Microsoft Azure, so the data location depends on
      the deployment. For the vendor-operated Authentication Cloud, Nevis
      names Microsoft Azure, Cloudflare and Google Firebase Cloud Messaging as
      sub-processors but does not publish the hosting region. The
      infrastructure details below refer to the Authentication Cloud.
  infrastructure:
    provider: Microsoft Azure
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: authcloud-faq

openSource:
  value: no
  basis: inferred
  note: Commercially licensed software; no source code is published.

pricing:
  model: quote
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  chfBilling: unknown
  checked: 2026-10-15
  basis: inferred
  source: nevis-id
  note: No prices are published; Nevis sells directly and through partners.

features:
  mfa: yes
  sso: yes
  api: yes

certifications: [iso-27001, soc-2]

tags: [ciam, iam, sso, mfa, passwordless, passkeys, fido2, transaction-confirmation, banking]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: nevis-id
    title: Nevis ID platform - Customer Identity and Access Management
    url: https://www.nevis.net/en/nevis-id
    publisher: Nevis Security AG
    kind: vendor
    accessed: 2026-10-15
  - id: authcloud
    title: Nevis Authentication Cloud
    url: https://www.nevis.net/en/authentication-cloud
    publisher: Nevis Security AG
    kind: vendor
    accessed: 2026-10-15
  - id: authcloud-faq
    title: Authentication Cloud - Operator FAQ
    url: https://docs.nevis.net/authcloud/operator-faq
    publisher: Nevis Security AG
    kind: documentation
    accessed: 2026-10-15
  - id: kuppingercole
    title: Nevis Identity Suite and Authentication Cloud - Executive View
    url: https://www.kuppingercole.com/research/ev81371/nevis-identity-suite-and-authentication-cloud
    publisher: KuppingerCole Analysts AG
    kind: independent
    accessed: 2026-10-15
  - id: iso-certificate
    title: ISO/IEC 27001:2022 certificate, NEVIS Security AG
    url: https://www.nevis.net/hubfs/2023/Images/ISO/NEVIS%20AG%20-%20IWS%20Certificate_2024.pdf
    publisher: IWS Solutions Ltd.
    kind: independent
    accessed: 2026-10-15
  - id: soc2
    title: 'Trust Verified: Nevis Achieves SOC 2 Type II Certification'
    url: https://www.nevis.net/en/blog/nevis-soc-2-type-2
    publisher: Nevis Security AG
    kind: vendor
    accessed: 2026-10-15
  - id: management
    title: Nevis management team
    url: https://www.nevis.net/en/management-team
    publisher: Nevis Security AG
    kind: vendor
    accessed: 2026-10-15
  - id: about
    title: About us
    url: https://www.nevis.net/en/about-us
    publisher: Nevis Security AG
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Customer Identity and Access Management mit passwortloser Anmeldung, On-Premises oder als SaaS.'
    description: 'Nevis ID ist eine Plattform für Customer Identity and Access Management der Zürcher Nevis Security, die vor allem von Banken, Versicherungen und Behörden genutzt wird.'
---

Nevis ID is a customer identity and access management (CIAM) platform from
Nevis Security AG in Zurich. It handles registration, login, single sign-on,
identity management and access control for web portals and APIs, with
passwordless and usernameless login, passkeys (FIDO2), multi-factor and
adaptive authentication, identity orchestration and fraud detection. End users
confirm logins and transactions in a mobile access app that customers can brand
or build with the Nevis SDK. Nevis states that its technology secures more than
80 per cent of online banking transactions in Switzerland; customer stories on
its site include UBS, PostFinance and the cantons of Zug and Zurich.

The platform grew out of the Nevis Identity Suite, which Nevis describes as its
on-premises CIAM application; KuppingerCole lists on-premises Linux, private
cloud on OpenShift and Microsoft Azure as deployment options. Nevis also sells
Nevis ID as a SaaS offering and runs the separate Authentication Cloud, a
hosted service for passwordless and multi-factor authentication that can be
added to existing logins such as Azure AD B2C. The Authentication Cloud runs on
Microsoft Azure with Cloudflare and Google Firebase as further sub-processors;
the hosting region is not published.

Nevis holds an ISO/IEC 27001:2022 certificate valid until November 2027 and
reported a SOC 2 Type II attestation in February 2026. Prices are not
published, and the products are sold to organisations rather than individuals.
Nevis was a business unit of AdNovum until it became an independent company at
the start of 2020; it remains owned by the Zurich-based IHAG Holding.
