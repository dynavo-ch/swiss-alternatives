---
name: Airlock IAM
aliases: [Airlock, Airlock IAM as a Service, Airlock Secure Access Hub, Ergon Airlock]
company: ergon
tagline: Customer identity and access management, self-hosted or as a Swiss-hosted service.
description: >-
  Airlock IAM is a customer identity and access management product from Zurich's
  Ergon Informatik, run on customer infrastructure or as a managed cloud service.
website: https://www.airlock.com/en/secure-access-hub/components/iam
status: active

categories: [iam, authentication]
alternativesTo:
  - id: auth0
    note: >-
      Mainly installed and operated by the customer; the managed SaaS edition
      launched in April 2026 and is sold mainly through partners.
  - id: okta
    note: Positioned for customer identity (cIAM) rather than workforce identity.

audience: [business, enterprise, public-sector]
deployment: [on-premises, self-hosted, saas]
platforms: [web, linux, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: press-saas
    note: Developed by Ergon Informatik AG in Zurich.
  hosted:
    value: optional
    basis: vendor
    source: iam-saas
    note: >-
      Airlock IAM is mostly installed on infrastructure chosen by the customer
      or a partner, so the hosting location depends on the deployment. The
      vendor-operated Airlock IAM as a Service (since April 2026) is hosted in
      Switzerland; IT-Reseller reported, citing Airlock, that it runs on
      Microsoft Azure's Swiss region. The infrastructure details below refer to
      this SaaS edition.
  dataLocations: [CH]
  infrastructure:
    provider: Microsoft Azure (Switzerland region)
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: itreseller-saas

openSource:
  value: no
  basis: vendor
  source: license
  note: >-
    Airlock IAM is part of the commercially licensed Premium Edition. Only
    Airlock Microgateway is offered as a free Community Edition.

pricing:
  model: quote
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  chfBilling: unknown
  url: https://www.airlock.com/en/airlock-license
  checked: 2026-10-15
  basis: vendor
  source: license

features:
  mfa: yes
  sso: yes
  api: yes

certifications: [iso-27001]

tags: [ciam, iam, sso, mfa, passkeys, fido2, saml, oidc, oauth, federation]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: iam
    title: Airlock IAM - Customer Identity and Access Management
    url: https://www.airlock.com/en/secure-access-hub/components/iam
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: iam-saas
    title: Airlock IAM as a Service
    url: https://www.airlock.com/en/secure-access-hub/components/iam/airlock-iam-as-a-service
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: factsheet
    title: Factsheet Airlock IAM as a Service
    url: https://www.airlock.com/fileadmin/content/07_Airlock-PDFs/Factsheet_Airlock_IAM_as_a_Service.pdf
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: press-saas
    title: Airlock lanciert IAM as a Service für sichere Zugriffe auf digitale Services
    url: https://www.airlock.com/fileadmin/content/07_Airlock-PDFs/Presse/260420_Airlock_Pressemitteilung_IAM_as_a_Service.pdf
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: itreseller-saas
    title: Airlock führt As-a-Service-Modell für IAM ein
    url: https://www.itreseller.ch/Artikel/105295/Airlock_fuehrt_As-a-Service-Modell_fuer_IAM_ein.html
    publisher: IT-Reseller
    kind: press
    accessed: 2026-10-15
  - id: license
    title: Airlock licence
    url: https://www.airlock.com/en/airlock-license
    publisher: Ergon Informatik AG
    kind: vendor
    accessed: 2026-10-15
  - id: requirements
    title: Airlock IAM 8.5 - System requirements
    url: https://docs.airlock.com/iam/8.5/index/1579527945261.html
    publisher: Ergon Informatik AG
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Identitäts- und Zugriffsmanagement für Kunden, selbst gehostet oder als in der Schweiz gehosteter Dienst.'
    description: 'Airlock IAM ist ein Produkt für Customer Identity and Access Management der Zürcher Ergon Informatik, betrieben auf Kundeninfrastruktur oder als Managed Cloud Service.'
    notes:
      swiss.developed.note: 'Entwickelt von der Ergon Informatik AG in Zürich.'
      swiss.hosted.note: 'Airlock IAM wird meist auf einer vom Kunden oder einem Partner gewählten Infrastruktur installiert, der Hosting-Standort hängt daher vom Deployment ab. Das vom Anbieter betriebene Airlock IAM as a Service (seit April 2026) wird in der Schweiz gehostet; IT-Reseller berichtete unter Berufung auf Airlock, dass es in der Schweizer Region von Microsoft Azure läuft. Die untenstehenden Angaben zur Infrastruktur beziehen sich auf diese SaaS-Edition.'
      openSource.note: 'Airlock IAM ist Teil der kommerziell lizenzierten Premium Edition. Nur Airlock Microgateway wird als kostenlose Community Edition angeboten.'
      alternativesTo.auth0.note: 'Hauptsächlich vom Kunden installiert und betrieben; die verwaltete SaaS-Edition wurde im April 2026 lanciert und wird hauptsächlich über Partner verkauft.'
      alternativesTo.okta.note: 'Eher auf Kundenidentitäten (cIAM) als auf Mitarbeiteridentitäten ausgerichtet.'
---

Airlock IAM is a customer identity and access management (cIAM) product from
Ergon Informatik AG in Zurich, sold under the Airlock brand as part of the
Airlock Secure Access Hub together with the Airlock Gateway web application and
API firewall and the Airlock Microgateway. It handles registration, login,
single sign-on and access control for web applications and APIs. Supported
methods include FIDO/WebAuthn and passkeys, one-time passwords, SMS codes,
client certificates and the Airlock 2FA smartphone app, with risk-based and
step-up authentication. Federation is available via SAML 2.0, OAuth 2.0,
OpenID Connect and Kerberos, and the product includes self-service, social
login, consent management, delegated administration and a REST API.

Most customers run Airlock IAM themselves, as a Docker image or as a
self-contained application on supported Linux distributions, backed by a
relational database. Since April 2026 Airlock also offers Airlock IAM as a
Service, a managed SaaS edition operated by Airlock and hosted in Switzerland,
built on the same software core as the self-hosted version. It is billed as a
subscription with a fixed base fee and a component based on monthly active
users and is sold mainly through partners; no prices are published.

In January 2026 the private equity investor Afinum became the majority
shareholder of Ergon, replacing the founder and long-standing anchor
shareholders. Management and many employees remain shareholders, and Ergon
states that the company continues with its existing team and offering.
