---
name: eSignR
aliases: [eSignR Desktop, Open eGov LocalSigner]
company: glue
tagline: Qualified electronic signatures under ZertES and eIDAS without uploading the document.
description: >-
  eSignR is desktop and on-premises software from Glue in Bern for qualified
  electronic signatures that sends only a document hash to Swisscom Trust Services.
website: https://www.esignr.ch/en/
status: active

categories: [e-signatures]
alternativesTo:
  - id: docusign
    note: >-
      Signs locally and sends only a hash to the signature service instead of
      uploading the document; offers qualified signatures only, issued by
      Swisscom Trust Services.
  - id: adobe-acrobat-sign
    note: >-
      Desktop software for Windows, macOS and Linux with a REST API, command
      line and on-premises option; each signer identifies with Swisscom Mobile ID.

audience: [business, enterprise, public-sector]
deployment: [saas, on-premises]
platforms: [windows, macos, linux, api, cli]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Glue states that eSignR is developed exclusively in Switzerland by its
      staff in Bern. It is the successor of the Open eGov LocalSigner, which Glue
      developed for the Swiss Confederation.
  hosted:
    value: yes
    basis: vendor
    source: privacy
    note: >-
      Documents are signed on the user's device or on the customer's own server;
      only a hash value is sent to the signing service of Swisscom Trust Services
      AG in Zurich. Account and administrative data of the online portal are
      hosted on servers in Switzerland operated by fence IT AG in Bern, a former
      sister company that merged into Glue AG in 2025. In the "full"
      on-premises option all eSignR components run at the customer.
  dataLocations: [CH]
  infrastructure:
    provider: Glue AG (formerly fence IT AG)
    providerCountry: CH
    type: unknown
    swissOwned: yes
    basis: vendor
    source: privacy
    note: >-
      The privacy policy names fence IT AG, Bern, as operator of the server-side
      infrastructure and states that it is ISO 27001 certified; the data centre
      is not named.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 20
    currency: CHF
    period: month
    note: Personal plan for one user with 10 qualified signatures per month, incl. VAT; annual or monthly billing
  url: https://www.esignr.ch/en/prices/
  checked: 2026-11-08
  basis: vendor
  source: home

features:
  mfa: yes
  sso: yes
  api: yes

tags: [qualified-signature, zertes, eidas, pdf, mobile-id, on-premises, notaries]
affiliate: null
sponsored: false
added: 2026-11-08
updated: 2026-11-08
lastVerified: 2026-11-08
sources:
  - id: home
    title: Qualified Electronic Signature Switzerland | eSignR
    url: https://www.esignr.ch/en/
    publisher: Glue AG
    kind: vendor
    accessed: 2026-11-08
  - id: about
    title: 'eSignR: Software für rechtsgültige digitale Signaturen (about us)'
    url: https://www.esignr.ch/en/about-us/
    publisher: Glue AG
    kind: vendor
    accessed: 2026-11-08
  - id: onprem
    title: On-Premises | Elektronische Unterschrift | eSignR
    url: https://www.esignr.ch/en/on-premises-solutions/
    publisher: Glue AG
    kind: vendor
    accessed: 2026-11-08
  - id: pricing
    title: 'eSignR: Software für rechtsgültige digitale Signaturen (prices)'
    url: https://www.esignr.ch/en/prices/
    publisher: Glue AG
    kind: vendor
    accessed: 2026-11-08
  - id: privacy
    title: Datenschutz EN | eSignR
    url: https://www.esignr.ch/en/privacy-policy/
    publisher: Glue AG
    kind: vendor
    accessed: 2026-11-08
  - id: swissmadesoftware
    title: Glue AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/glue-software-engineering-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-08
i18n:
  de:
    tagline: 'Qualifizierte elektronische Signaturen nach ZertES und eIDAS, ohne das Dokument hochzuladen.'
    description: 'eSignR ist Desktop- und On-Premises-Software von Glue aus Bern für qualifizierte elektronische Signaturen, die nur einen Hashwert an Swisscom Trust Services sendet.'
    notes:
      swiss.developed.note: 'Glue gibt an, dass eSignR ausschliesslich in der Schweiz von den eigenen Mitarbeitenden in Bern entwickelt wird. Es ist der Nachfolger des Open eGov LocalSigner, den Glue für die Schweizerische Eidgenossenschaft entwickelt hat.'
      swiss.hosted.note: 'Dokumente werden auf dem Gerät der Benutzerin oder auf dem eigenen Server der Kundschaft signiert; nur ein Hashwert wird an den Signaturdienst der Swisscom Trust Services AG in Zürich gesendet. Konto- und Verwaltungsdaten des Online-Portals liegen auf Servern in der Schweiz, die von der fence IT AG in Bern betrieben werden, einer früheren Schwestergesellschaft, die 2025 in die Glue AG fusioniert wurde. In der Variante «On-Premises full» laufen alle Komponenten von eSignR bei der Kundschaft.'
      swiss.infrastructure.note: 'Die Datenschutzerklärung nennt die fence IT AG, Bern, als Betreiberin der serverseitigen Infrastruktur und gibt an, dass sie nach ISO 27001 zertifiziert ist; das Rechenzentrum wird nicht genannt.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Personal-Plan für eine Person mit 10 qualifizierten Signaturen pro Monat, inkl. MWST; jährliche oder monatliche Abrechnung'
      alternativesTo.docusign.note: 'Signiert lokal und sendet statt des Dokuments nur einen Hashwert an den Signaturdienst; bietet ausschliesslich qualifizierte Signaturen, ausgestellt von Swisscom Trust Services.'
      alternativesTo.adobe-acrobat-sign.note: 'Desktop-Software für Windows, macOS und Linux mit REST-API, Kommandozeile und On-Premises-Variante; jede unterzeichnende Person identifiziert sich mit Swisscom Mobile ID.'
---

eSignR creates qualified electronic signatures (QES), the form that Swiss law
(ZertES) treats as equivalent to a handwritten signature, and also signs under
the EU eIDAS regulation. Users open a PDF in the desktop application for
Windows, macOS or Linux or trigger signing from a business application, and
confirm each signature with the Mobile ID app on their phone. Only the
document's hash value is sent to Swisscom Trust Services, which issues the
signature; the document stays on the user's system. Features include signature
templates, visual signatures, PDF/A checks and electronic public deeds for
notaries.

Companies can run eSignR on their own server as a Docker deployment, either
with the server-side components at Glue or with all components in-house, and
integrate it through a REST API, a command-line interface or batch signing.
Single sign-on through Microsoft Entra ID and LDAP or Active Directory are
offered for business customers.

Plans include 10 qualified signatures per user and month and start at CHF 20
per month for one user; larger teams pay less per user, and signature packages
can be added. eSignR is developed by Glue in Bern, which also built the Open
eGov LocalSigner and the federal signature validator.
