---
name: SecureSafe
aliases: [SecureSafe Pass, SecureSafe Files, DSwiss SecureSafe, DataInherit]
company: dswiss
tagline: Encrypted password manager and document vault hosted in Switzerland.
description: >-
  SecureSafe from Zurich-based DSwiss is a password manager and encrypted file
  vault for individuals and organisations, hosted in Swiss data centres.
website: https://securesafe.com
status: active
launched: 2011

categories: [password-managers, cloud-storage]
alternativesTo:
  - 1password
  - lastpass
  - dashlane
  - id: bitwarden
    note: Proprietary and without a free plan.

audience: [consumer, business, enterprise]
deployment: [saas]
platforms: [web, ios, android, browser-extension, windows, macos]
languages:
  interface: [en, de, fr, it]

swiss:
  developed:
    value: yes
    basis: vendor
    source: brand-2026
    note: DSwiss states that the platform has been developed in Zurich since 2008.
  hosted:
    value: yes
    basis: vendor
    source: security
    note: >-
      DSwiss states that data is stored and processed exclusively in data
      centres in Switzerland, with a backup location in a former military
      facility in the Alps. The data centre operators are not named.
  dataLocations: [CH]

openSource:
  value: no
  basis: inferred
  source: security
  note: No source code for the apps or the platform has been published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 21.60
    currency: CHF
    period: year
    note: Pass Solo (passwords only, one user), billed yearly; the page also lists CHF 2.40 per user per month
  url: https://securesafe.com/pricing-personal
  checked: 2026-10-15
  basis: vendor
  source: pricing-personal

features:
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: yes

certifications: [iso-27001]

tags: [password-vault, document-vault, encryption, digital-inheritance]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: home
    title: SecureSafe
    url: https://securesafe.com/
    publisher: DSwiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: SecureSafe security
    url: https://securesafe.com/security
    publisher: DSwiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: certifications
    title: SecureSafe certifications
    url: https://securesafe.com/certifications
    publisher: DSwiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: brand-2026
    title: DSwiss AG unifies brands under SecureSafe
    url: https://securesafe.com/news/securesafe-brand-unification-2026
    publisher: DSwiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing-personal
    title: SecureSafe pricing (personal)
    url: https://securesafe.com/pricing-personal
    publisher: DSwiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing-business
    title: SecureSafe pricing (business)
    url: https://securesafe.com/pricing
    publisher: DSwiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: plans
    title: SecureSafe next generation product plans
    url: https://help.securesafe.com/securesafe-next-generation-pricing-plans
    publisher: DSwiss AG
    kind: documentation
    accessed: 2026-10-15
  - id: free-pass
    title: Is there a free version of SecureSafe Pass?
    url: https://www.securesafe.com/en/faq/gibt-es-eine-kostenlose-version-von-securesafe-pass
    publisher: DSwiss AG
    kind: vendor
    accessed: 2026-10-15
  - id: inheritance
    title: Data inheritance - how it works
    url: https://help.securesafe.com/data-inheritance
    publisher: DSwiss AG
    kind: documentation
    accessed: 2026-10-15
  - id: launch-2011
    title: DSwiss bringt SecureSafe auf den Markt
    url: https://www.prnewswire.com/news-releases/dswiss-bringt-securesafe-auf-den-markt-und-kombiniert-damit-verbesserten-online-speicher-mit-dem-beliebten-datainherit-dienst-132120988.html
    publisher: DSwiss AG via PR Newswire
    kind: press
    accessed: 2026-10-15
---

SecureSafe is an online vault for passwords and documents operated by DSwiss AG
in Zurich. Since a brand consolidation in July 2026 it is organised into four
modules: Pass (password management), Files (encrypted document storage),
Postbox (secure document delivery) and Exchange (encrypted file transfer).
Personal plans cover Pass and Files for single users and families; Postbox and
Exchange are offered to enterprise customers.

A new product generation replaced the original service for accounts created
from June 2025; existing accounts continue on SecureSafe Classic. The data
inheritance function, which lets account holders pass data to designated
beneficiaries, is available in Classic and was not yet part of the new version
according to the vendor's help pages. There is no free plan; all plans include
a 14-day trial.

DSwiss states that all data is hosted in Switzerland, with geo-redundant
backups and a disaster recovery site in a former military facility. The company
holds ISO 27001 certification. Organisations can use single sign-on via SAML 2.0
or OpenID Connect.
