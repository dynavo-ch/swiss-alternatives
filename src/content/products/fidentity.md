---
name: fidentity
aliases: [fidentity IDENT, fidentity SIGN, fidentity ONBOARD, simpleSIGN]
company: fidentity
tagline: Automated online identity verification and qualified e-signatures for regulated firms.
description: >-
  fidentity is a Bern-developed service for automated identity verification and
  qualified electronic signatures, used by banks and hosted in Switzerland.
website: https://fidentity.ch/en/
status: active

categories: [e-signatures, authentication]
alternativesTo:
  - id: docusign
    note: >-
      Signs only with qualified electronic signatures, with identity
      verification built in, and is integrated into a company's own processes
      via API; no standalone document workflow or template management is
      described.
  - id: onfido
    note: >-
      Aimed at the Swiss and EU markets, with KPMG audits against FINMA
      circulars, and combines identification with qualified signatures.
  - id: idnow
    note: >-
      Identification decisions are made by an automated AI engine; agent-led
      video identification is not described.

audience: [business, enterprise]
deployment: [saas]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: ident
    note: >-
      fidentity states that all development and maintenance is done in its
      offices near Bern without near- or offshoring. Its partner list also
      names external firms for app development (Approppo) and software
      development (XToniq).
  hosted:
    value: yes
    basis: vendor
    source: ident
    note: >-
      fidentity states that data and processes never leave its Swiss data
      centre and names BEGASOFT AG in Bern as its hosting and operations
      partner. Its general privacy policy also lists Exoscale and Microsoft
      Azure as infrastructure providers without stating which services use
      them.
  dataLocations: [CH]
  infrastructure:
    provider: BEGASOFT AG (hosting and operations partner)
    providerCountry: CH
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: company

features:
  api: yes

certifications: [iso-27001]

tags: [identity-verification, kyc, qes, zertes, eidas, finma, onboarding, nfc, liveness]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: Online identification and digital signatures - fidentity
    url: https://fidentity.ch/en/
    publisher: fidentity AG
    kind: vendor
    accessed: 2026-10-16
  - id: ident
    title: IDENT - automated identification - fidentity
    url: https://fidentity.ch/en/solutions/ident
    publisher: fidentity AG
    kind: vendor
    accessed: 2026-10-16
  - id: sign
    title: SIGN - qualified electronic signature - fidentity
    url: https://fidentity.ch/en/solutions/sign
    publisher: fidentity AG
    kind: vendor
    accessed: 2026-10-16
  - id: company
    title: Company - fidentity (milestones and partners)
    url: https://fidentity.ch/en/company
    publisher: fidentity AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Privacy Policy - fidentity
    url: https://fidentity.ch/en/data-protection
    publisher: fidentity AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: fidentity AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/fidentity-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Automatisierte Online-Identitätsprüfung und qualifizierte E-Signaturen für regulierte Unternehmen.'
    description: 'fidentity ist ein in Bern entwickelter Dienst für automatisierte Identitätsprüfung und qualifizierte elektronische Signaturen, der von Banken genutzt und in der Schweiz gehostet wird.'
    notes:
      swiss.developed.note: 'fidentity gibt an, dass die gesamte Entwicklung und Wartung in seinen Büros bei Bern erfolgt, ohne Near- oder Offshoring. Die Partnerliste nennt zudem externe Firmen für App-Entwicklung (Approppo) und Softwareentwicklung (XToniq).'
      swiss.hosted.note: 'fidentity gibt an, dass Daten und Prozesse das Schweizer Rechenzentrum nie verlassen, und nennt die BEGASOFT AG in Bern als Hosting- und Betriebspartner. Die allgemeine Datenschutzerklärung führt zudem Exoscale und Microsoft Azure als Infrastrukturanbieter auf, ohne anzugeben, welche Dienste diese nutzen.'
      alternativesTo.docusign.note: 'Signiert nur mit qualifizierten elektronischen Signaturen, mit integrierter Identitätsprüfung, und wird über eine API in die eigenen Prozesse eines Unternehmens eingebunden; ein eigenständiger Dokumenten-Workflow oder eine Vorlagenverwaltung wird nicht beschrieben.'
      alternativesTo.onfido.note: 'Auf den Schweizer und den EU-Markt ausgerichtet, mit KPMG-Prüfungen gemäss FINMA-Rundschreiben, und kombiniert Identifikation mit qualifizierten Signaturen.'
      alternativesTo.idnow.note: 'Identifikationsentscheide trifft eine automatisierte KI-Engine; eine von Mitarbeitenden geführte Videoidentifikation wird nicht beschrieben.'
---

fidentity provides identification and signing services that banks and other
regulated companies build into their own onboarding and contract processes.
IDENT verifies a person in the browser: the user scans an identity document,
optionally has its NFC chip read through an Android Instant App or iOS App Clip,
and completes a liveness check. An AI engine makes the decision within seconds
and documents it as PDF, video and JSON. SIGN adds qualified electronic
signatures (QES) under Swiss ZertES and EU eIDAS, with identification built in,
and ONBOARD supplies further onboarding checks. simpleSIGN offers the same
qualified signature to individual signers. The services are white-label and
integrated via API; end users need no app download or registration.

fidentity states that it develops all components itself near Bern and that data
is processed only in its Swiss data centre, with BEGASOFT AG as hosting and
operations partner; it lists Swisscom as its certified trust service provider
partner. Its general privacy policy also names Exoscale and Microsoft Azure as
infrastructure providers without assigning them to specific services. The
company holds ISO/IEC 27001 certification and ETSI TS 119 461 identity-proofing
certificates under ZertES and eIDAS, and KPMG has audited the services against
FINMA circulars 2016/7, 2018/3 and 2008/21.

Prices are not published; the services are sold to businesses on request.
fidentity AG was founded in 2016 and is registered in Köniz; Thorsten Hau and
Edgar Spring, who have run the company since its registration, sit on its board.
