---
name: SwissSign Signature Service
aliases: [SwissSign, SwissSign Sign, SwissID Sign, SwissSign digital signatures]
company: swisssign
tagline: Qualified electronic signatures under Swiss law from a Swiss Post trust service provider.
description: >-
  SwissSign's signature service, from a Swiss Post subsidiary, issues qualified
  and simple electronic signatures via web, REST API or on-premises integration.
website: https://www.swisssign.com/en/digital-signatures.html
status: active

categories: [e-signatures]
alternativesTo:
  - id: docusign
    note: >-
      Focused on qualified signatures under Swiss law; signers need a SwissID
      account, and agreement workflow and contract management features are
      not listed.
  - id: adobe-acrobat-sign
    note: Focused on qualified signatures under Swiss law; eIDAS signatures in the web service are listed as planned.

audience: [consumer, business, enterprise, public-sector]
deployment: [saas, on-premises]
platforms: [web, ios, android, api]

swiss:
  developed:
    value: yes
    basis: inferred
    source: ai-info
    note: >-
      SwissSign lists only Glattbrugg and Lausanne as company locations and
      describes its infrastructure as self-managed; whether parts of the
      software development are outsourced is not published.
  hosted:
    value: yes
    basis: vendor
    source: ai-info
    note: >-
      SwissSign states that its self-managed, geo-redundant infrastructure is
      located exclusively in Switzerland and that certificate and customer
      data are processed only in Swiss data centres. The data-centre facility
      operators are not named.
  dataLocations: [CH]
  infrastructure:
    provider: SwissSign AG (self-managed)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    basis: vendor
    source: ai-info
    note: Facility operators are not published.

openSource:
  value: no
  basis: inferred
  note: Proprietary service; no source code is published.

pricing:
  model: usage-based
  freePlan: no
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  url: https://www.swisssign.com/en/digital-signatures/web-service.html
  checked: 2026-10-15
  basis: vendor
  source: web-service
  note: >-
    The web service sells prepaid packages of qualified signatures, starting
    with 10 signatures; SwissSign's own pages gave both CHF 24.95 and CHF
    26.20 for this package at the time of checking, so no starting price is
    recorded. Packages expire after 24 months, and new customers receive five
    free signatures. Business plans are priced per user or per signature
    volume with set-up and annual fees, on request.

features:
  mfa: yes
  api: yes

certifications: [iso-27001]

tags:
  [e-signature, qualified-electronic-signature, qes, zertes, esiga, swissid, trust-service-provider]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: digital-signatures
    title: Digital signatures overview
    url: https://www.swisssign.com/en/digital-signatures.html
    publisher: SwissSign AG
    kind: vendor
    accessed: 2026-10-15
  - id: web-service
    title: 'Digital signatures: web service'
    url: https://www.swisssign.com/en/digital-signatures/web-service.html
    publisher: SwissSign AG
    kind: vendor
    accessed: 2026-10-15
  - id: integration
    title: 'Digital signatures: REST API'
    url: https://swisssign.com/en/digital-signatures/integration.html
    publisher: SwissSign AG
    kind: vendor
    accessed: 2026-10-15
  - id: on-premises
    title: 'Digital signatures: on-premises'
    url: https://www.swisssign.com/en/digital-signatures/on-premises.html
    publisher: SwissSign AG
    kind: vendor
    accessed: 2026-10-15
  - id: terms
    title: SwissSign Terms and Conditions of Use for Qualified Electronic Signature and Simple Electronic Signature (v1.6)
    url: https://www.swisssign.com/en/dam/jcr:9b8a5d50-5fe4-4dd0-b666-81b215334cf8/Terms%20of%20Use%20SwissSign%20Signature%20Service%20V1.6%20ESigA.pdf
    publisher: SwissSign AG
    kind: vendor
    accessed: 2026-10-15
  - id: ai-info
    title: SwissSign AI info page
    url: https://www.swisssign.com/en/ai-info-page.html
    publisher: SwissSign AG
    kind: vendor
    accessed: 2026-10-15
  - id: iot-certificates
    title: Device certificates for IoT
    url: https://www.swisssign.com/en/pki-zertifikate/iot-geraete-zertifikate
    publisher: SwissSign AG
    kind: vendor
    accessed: 2026-10-15
---

SwissSign's signature service lets people and organisations sign PDF documents
electronically. SwissSign AG, a subsidiary of Swiss Post, is a certification
service provider recognised in Switzerland under the Federal Act on Electronic
Signatures (ZertES/ESigA) and issues the qualified certificates itself,
generating the signing keys in a hardware security module. Under Swiss law, a
qualified electronic signature with a qualified time stamp is equivalent to a
handwritten signature. Business customers can also use simple electronic
signatures issued in SwissSign's name. Signatures can be created in a web-based
signing room, integrated into business applications through a REST API, or run
in an on-premises setup.

Qualified signatures require a SwissID account at the appropriate security
level and a secure second factor, such as a smartphone running iOS 17.6 or
Android 9 or later, to trigger each signature. Signers must first verify their
identity in person or through an equivalent online process, using a passport or
an identity card recognised in Switzerland; the identification is valid for
five years. SwissSign states that its signatures are certified under ZertES and
the EU eIDAS regulation, but it lists eIDAS signatures in the web service as
planned, so documents governed by other countries' law may not meet local
formal requirements.

SwissSign states that its infrastructure is self-managed and located only in
Switzerland, and that it is ISO/IEC 27001 certified. Signature data and
identification records are kept for 11 years after the certificates expire.
Individuals buy prepaid signature packages in CHF, which expire after 24
months; organisations can choose per-user or volume-based plans.
