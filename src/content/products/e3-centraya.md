---
name: e3 Centraya
aliases: [Centraya, Centraya AI, Centraya CASB]
company: e3
tagline: Gateway that encrypts sensitive data fields before they reach cloud and AI services.
description: >-
  e3 Centraya is an encryption gateway from Zurich's e3 that encrypts sensitive
  data fields before they reach SaaS applications, cloud services or AI models.
website: https://www.e3ag.ch/e3-centraya/
status: active

categories: [network-security]
alternativesTo:
  - id: netskope
    note: >-
      Covers the data protection side of a CASB: field-level encryption with
      customer-held keys in front of cloud applications, without Netskope's web
      gateway, threat protection or global network.
  - id: zscaler
    note: >-
      Comparable only to the CASB and data protection functions; no secure web
      gateway, zero-trust access or cloud-delivered network.

audience: [business, enterprise]
deployment: [on-premises, managed]
platforms: [api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: company
    note: >-
      e3 describes its security products as developed in Switzerland and states
      that its ISO 27001 certification covers the software development of e3
      Centraya and e3 DLP. e3 also has offices in Germany and the Netherlands;
      where individual developers work is not stated.
  hosted:
    value: unknown
    note: >-
      Centraya runs as a forward or reverse proxy, mail gateway or encryption
      appliance between the customer and the cloud services it protects; the
      customer keeps the keys and decides where the encryption runs. e3 also
      operates the solution as a managed service. The swiss made software
      profile lists hosting as available in Switzerland; where e3-operated
      instances run is not stated.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: quote
  url: https://www.e3ag.ch/centraya-ai/
  checked: 2026-11-08
  basis: vendor
  source: product

features:
  api: yes

certifications: [iso-27001]

tags:
  [
    casb,
    cloud-data-protection-gateway,
    field-level-encryption,
    tokenisation,
    hold-your-own-key,
    ai-prompt-protection,
    proxy,
  ]
affiliate: null
sponsored: false
added: 2026-11-08
updated: 2026-11-08
lastVerified: 2026-11-08
sources:
  - id: product
    title: e3 Centraya - e3 AG
    url: https://www.e3ag.ch/e3-centraya/
    publisher: e3 AG
    kind: vendor
    accessed: 2026-11-08
  - id: casb
    title: Centraya - e3 AG
    url: https://www.e3ag.ch/centraya-casb/
    publisher: e3 AG
    kind: vendor
    accessed: 2026-11-08
  - id: ai
    title: Centraya AI - e3 AG
    url: https://www.e3ag.ch/centraya-ai/
    publisher: e3 AG
    kind: vendor
    accessed: 2026-11-08
  - id: factsheet
    title: 'Centraya AI: The secure path to scalable AI adoption (factsheet v6.2)'
    url: https://www.e3ag.ch/wp-content/uploads/2026/04/e3_Centraya_AI_C-Level_v6.2_EN.pdf
    publisher: e3 AG
    kind: documentation
    accessed: 2026-11-08
  - id: company
    title: Unternehmen - e3 AG
    url: https://www.e3ag.ch/unternehmen/
    publisher: e3 AG
    kind: vendor
    accessed: 2026-11-08
  - id: managed
    title: Managed Services - e3 AG
    url: https://www.e3ag.ch/managed-services/
    publisher: e3 AG
    kind: vendor
    accessed: 2026-11-08
  - id: swissmadesoftware
    title: e3 AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/e3-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-11-08
i18n:
  de:
    tagline: 'Gateway, das sensible Datenfelder verschlüsselt, bevor sie Cloud- und KI-Dienste erreichen.'
    description: 'e3 Centraya ist ein Verschlüsselungs-Gateway der Zürcher e3, das sensible Datenfelder verschlüsselt, bevor sie SaaS-Anwendungen, Cloud-Dienste oder KI-Modelle erreichen.'
    notes:
      swiss.developed.note: 'e3 bezeichnet seine Sicherheitsprodukte als in der Schweiz entwickelt und gibt an, dass seine ISO-27001-Zertifizierung die Softwareentwicklung von e3 Centraya und e3 DLP umfasst. e3 hat auch Standorte in Deutschland und den Niederlanden; wo einzelne Entwicklerinnen und Entwickler arbeiten, wird nicht angegeben.'
      swiss.hosted.note: 'Centraya läuft als Forward- oder Reverse-Proxy, Mail-Gateway oder Verschlüsselungs-Appliance zwischen der Kundschaft und den geschützten Cloud-Diensten; die Kundschaft behält die Schlüssel und bestimmt, wo die Verschlüsselung läuft. e3 betreibt die Lösung auch als Managed Service. Das Profil bei swiss made software nennt Hosting in der Schweiz als verfügbar; wo von e3 betriebene Instanzen laufen, wird nicht angegeben.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      alternativesTo.netskope.note: 'Deckt die Datenschutzseite eines CASB ab: Verschlüsselung auf Feldebene mit Schlüsseln bei der Kundschaft vor Cloud-Anwendungen, ohne das Web-Gateway, den Bedrohungsschutz oder das globale Netzwerk von Netskope.'
      alternativesTo.zscaler.note: 'Nur mit den CASB- und Datenschutzfunktionen vergleichbar; kein Secure Web Gateway, kein Zero-Trust-Zugriff und kein aus der Cloud bereitgestelltes Netzwerk.'
---

e3 Centraya is software that sits between an organisation's users or
applications and the cloud services they use, and encrypts or tokenises
sensitive data at field level before it leaves the organisation. Authorised
users see clear text, while the SaaS provider stores only encrypted values. e3
positions it as a cloud access security broker (CASB) or cloud data protection
gateway for CRM, HR and service management applications such as Salesforce,
ServiceNow and Microsoft Dynamics, and as a layer for exchanging health data
over the FHIR standard.

A newer extension, Centraya AI, detects personal and other sensitive information in
prompts, encrypts it before the prompt is sent to a cloud language model and
decrypts the answer. The product is sold in editions from PURE AI to EXPERT
Encryption, integrated through forward or reverse proxies, a mail gateway, an
encryption API or database drivers. Prices are given on request.

The developer, e3 AG in Zurich, also offers data loss prevention add-ons for
products from Broadcom, Forcepoint, Microsoft and others, security consulting
and managed operation of these systems.
