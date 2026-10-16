---
name: DeepSign
company: deepcloud
tagline: Simple, advanced and qualified e-signatures under ZertES and eIDAS, hosted in Switzerland.
description: >-
  DeepSign is an e-signature service from DeepCloud, an Abacus spin-off in
  Wittenbach SG, with pay-per-use SES, AES and QES and data hosted in Switzerland.
website: https://www.deepsign.swiss/en/
status: active

categories: [e-signatures]
alternativesTo:
  - docusign
  - adobe-acrobat-sign

audience: [business, enterprise, public-sector]
deployment: [saas, on-premises]
platforms: [web, ios, android, api]
languages:
  interface: [de, en, fr, it]

swiss:
  developed:
    value: yes
    basis: vendor
    source: security
    note: >-
      DeepCloud lists software engineering, project management and support at
      its Wittenbach headquarters and identity verification in Lugano.
  hosted:
    value: yes
    basis: vendor
    source: privacy
    note: >-
      DeepCloud states that the hosting and service providers used for DeepSign
      use server locations in Switzerland. Its security page names data centre
      and backup sites in Biel/Bienne, Gland, Plan-les-Ouates (Geneva) and
      Morbio Inferiore, with an off-site backup in Bern. The providers are not
      named. Qualified and advanced certificates are issued by recognised trust
      service providers that DeepCloud does not name on these pages.
  dataLocations: [CH]

openSource:
  value: no
  basis: inferred
  note: Proprietary cloud service; no source code is published.

pricing:
  model: usage-based
  freePlan: yes
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 0.50
    currency: CHF
    period: usage
    note: Per simple electronic signature (SES), pay-per-use, excl. VAT
  url: https://www.deepsign.swiss/en/pricing/
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Pay-per-use prices are CHF 0.50 per SES, CHF 1.00 per AES and CHF 1.80 per
    QES; the free DeepCloud plan (up to 3 users) includes 5 SES free of charge. Prepaid
    signature packages valid for 12 months require a paid DeepCloud plan, which
    starts at CHF 19 per month for up to 10 users. Prices exclude VAT.

features:
  mfa: yes
  sso: yes
  api: yes

certifications: [iso-27001]

tags: [e-signature, qualified-electronic-signature, qes, zertes, eidas, electronic-seal]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: home
    title: DeepSign - Digital signatures
    url: https://www.deepsign.swiss/en/
    publisher: DeepCloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: DeepSign pricing
    url: https://www.deepsign.swiss/en/pricing/
    publisher: DeepCloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: legal-validity
    title: DeepSign - Legal validity
    url: https://www.deepsign.swiss/en/features/legal-validity/
    publisher: DeepCloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Privacy Policy - DeepCloud
    url: https://www.deepcloud.swiss/en/privacy-policy/
    publisher: DeepCloud AG
    kind: vendor
    accessed: 2026-10-16
  - id: security
    title: DeepCloud security
    url: https://www.deepcloud.swiss/en/security/
    publisher: DeepCloud AG
    kind: vendor
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Einfache, fortgeschrittene und qualifizierte E-Signaturen nach ZertES und eIDAS, in der Schweiz gehostet.'
    description: 'DeepSign ist ein Dienst für elektronische Signaturen von DeepCloud, einem Abacus-Spin-off in Wittenbach SG, mit SES, AES und QES nach Verbrauch und in der Schweiz gehosteten Daten.'
    notes:
      swiss.developed.note: 'DeepCloud führt Software-Engineering, Projektmanagement und Support an seinem Hauptsitz in Wittenbach sowie die Identitätsprüfung in Lugano auf.'
      swiss.hosted.note: 'DeepCloud gibt an, dass die für DeepSign eingesetzten Hosting- und Dienstleister Serverstandorte in der Schweiz nutzen. Die Sicherheitsseite nennt Rechenzentrums- und Backup-Standorte in Biel/Bienne, Gland, Plan-les-Ouates (Genf) und Morbio Inferiore sowie ein externes Backup in Bern. Die Anbieter werden nicht genannt. Qualifizierte und fortgeschrittene Zertifikate werden von anerkannten Vertrauensdiensteanbietern ausgestellt, die DeepCloud auf diesen Seiten nicht nennt.'
      openSource.note: 'Proprietärer Cloud-Dienst; es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Pro einfacher elektronischer Signatur (EES), Pay-per-Use, exkl. MWST'
---

DeepSign is a web-based service for signing PDF documents electronically. It
offers simple (SES), advanced (AES) and qualified electronic signatures (QES)
and electronic seals, and DeepCloud states that the signatures meet the Swiss
ZertES and EU eIDAS requirements. Signers who need an AES or QES verify their
identity with DeepCloud's free DeepID app using a passport or ID card; the
Mobile ID app is listed as an alternative for QES. Mobile apps for iOS and Android,
a tablet signing station (DeepSign Desk) and an on-premises edition for large
organisations are also offered.

DeepCloud AG is a subsidiary of the ERP vendor Abacus Research, and DeepSign is
integrated with Abacus software and DeepCloud's document platform DeepBox, but
can be used on its own. DeepCloud states that DeepSign data is hosted only on
servers in Switzerland and that its cloud services are ISO/IEC 27001:2022
certified. The hosting providers are not named.

Pricing is per signature in CHF, without a mandatory subscription. Paid
DeepCloud plans add team features such as branding, domain verification and
single sign-on, and allow the purchase of discounted signature packages.
