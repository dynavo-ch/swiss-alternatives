---
name: Certifaction
company: certifaction
tagline: E-signatures (SES, AES, QES) with local document processing and optional E2E encryption.
description: >-
  Certifaction is a Zurich-developed e-signature service for SES, AES and QES
  that processes documents locally; storage in Switzerland, the EU or on-premises.
website: https://certifaction.com
status: active

categories: [e-signatures]
alternativesTo:
  - docusign
  - adobe-acrobat-sign

audience: [business, enterprise, public-sector]
deployment: [saas]
platforms: [web, api]
languages:
  interface: [de, en, fr, it]

swiss:
  developed:
    value: yes
    basis: vendor
    source: security
    note: >-
      Certifaction states that the solution is built in Switzerland with a local
      development and support team. The company also has a subsidiary in Munich.
  hosted:
    value: optional
    basis: vendor
    source: home
    note: >-
      Certifaction offers document storage in ISO 27001-certified data centres
      in Switzerland or the EU, or at the customer's premises. The default
      location and the data centre operators are not published. Its privacy
      policy states that personal data may be transferred to service providers
      in the EU/EEA and the USA.

openSource:
  value: no
  basis: inferred
  note: >-
    The signing platform is proprietary. Certifaction publishes some auxiliary
    components on GitHub, for example a verification tool and a PDF viewer
    under the MIT licence.

pricing:
  model: quote
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: unknown
  url: https://certifaction.com/pricing/
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Prices are not published; the pricing page asks for a customised quote.
    The terms describe a free trial with temporary, credit-based access, and
    all plans include an unlimited number of users.

features:
  e2ee: partial
  encryptionInTransit: yes
  mfa: yes
  api: yes

certifications: [iso-27001]

tags: [e-signature, qualified-electronic-signature, qes, zertes, eidas, white-label, zero-knowledge]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: home
    title: Privacy-first eSigning from Switzerland - Certifaction
    url: https://certifaction.com/
    publisher: Certifaction AG
    kind: vendor
    accessed: 2026-10-16
  - id: security
    title: Privacy-first secure eSigning - Certifaction
    url: https://certifaction.com/security-esigning-and-data/
    publisher: Certifaction AG
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Pricing - Certifaction
    url: https://certifaction.com/pricing/
    publisher: Certifaction AG
    kind: vendor
    accessed: 2026-10-16
  - id: terms
    title: General Terms and Conditions - Certifaction
    url: https://certifaction.com/terms-and-conditions/
    publisher: Certifaction AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Privacy Policy - Certifaction
    url: https://certifaction.com/privacy-policy/
    publisher: Certifaction AG
    kind: vendor
    accessed: 2026-10-16
  - id: github
    title: Certifaction on GitHub
    url: https://github.com/certifaction
    publisher: Certifaction AG
    kind: vendor
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Elektronische Signaturen (SES, AES, QES) mit lokaler Dokumentverarbeitung und optionaler E2E-Verschlüsselung.'
    description: 'Certifaction ist ein in Zürich entwickelter Dienst für elektronische Signaturen (SES, AES, QES), der Dokumente lokal verarbeitet; Speicherung in der Schweiz, in der EU oder On-Premises.'
    notes:
      swiss.developed.note: 'Certifaction gibt an, dass die Lösung in der Schweiz mit einem lokalen Entwicklungs- und Supportteam gebaut wird. Das Unternehmen hat zudem eine Tochtergesellschaft in München.'
      swiss.hosted.note: 'Certifaction bietet Dokumentenspeicherung in ISO 27001-zertifizierten Rechenzentren in der Schweiz oder der EU oder beim Kunden vor Ort an. Der Standardstandort und die Betreiber der Rechenzentren werden nicht veröffentlicht. Gemäss Datenschutzerklärung können Personendaten an Dienstleister in der EU/im EWR und in den USA übermittelt werden.'
      openSource.note: 'Die Signaturplattform ist proprietär. Certifaction veröffentlicht einige Hilfskomponenten auf GitHub, etwa ein Verifizierungstool und einen PDF-Viewer unter der MIT-Lizenz.'
---

Certifaction is an electronic signature service for simple (SES), advanced
(AES) and qualified electronic signatures (QES) and organisational seals. The
company states that its signatures comply with the Swiss ZertES and EU eIDAS
rules as well as the US ESIGN and UETA acts. Features include signing order,
guest signatures without an account, bulk signing, PDF form filling, signing
templates and team spaces, plus a "digital twin" that lets printed copies of
signed documents be verified.

Its distinguishing approach, which it calls Zero Document Knowledge, is that
documents are processed locally on the user's device. When password
protection is enabled in the web app, or when the API integration is used,
documents are encrypted before upload so that Certifaction cannot read their
content. Customers can choose document storage in Switzerland, the EU or on
their own premises. Certifaction holds ISO 27001:2022 certification from TÜV
SÜD.

Certifaction is also sold as a white-label product through partners, including
HIN Sign for the Swiss healthcare sector, Switch Sign for Swiss universities
and Deutsche Telekom Security's Magenta Security Sign. Prices are available on
request only.
