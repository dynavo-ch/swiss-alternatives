---
name: waave
aliases: [waave IAM, Razoon waave]
company: razoon
tagline: Identity lifecycle and access rights management for Active Directory and Microsoft 365.
description: >-
  waave is an identity and access management solution from Razoon in Winterthur,
  run as a managed service in the customer's own Microsoft Azure tenant.
website: https://www.razoon.com/en/iam-solution/overview
status: active

categories: [iam]
alternativesTo:
  - id: microsoft-entra-id
    note: >-
      Adds joiner, mover and leaver processes, role-based access rights and
      auditing on top of Active Directory and Microsoft 365; it is not itself a
      single sign-on identity provider.
  - id: okta
    note: >-
      Focused on identity lifecycle and access rights in Microsoft-centred
      environments; no single sign-on or MFA service is described.

audience: [enterprise]
deployment: [managed]
platforms: [web, api]

swiss:
  developed:
    value: yes
    basis: vendor
    source: about
    note: >-
      Razoon states that it has been developing waave in Winterthur since 2017
      and holds the swiss made software label.
  hosted:
    value: optional
    basis: vendor
    source: swissmadesoftware
    note: >-
      waave is installed in the customer's own Microsoft Azure tenant, so the
      customer's choice of Azure region determines where data is stored. The
      swiss made software profile lists hosting as available in Switzerland.
  infrastructure:
    provider: Microsoft Azure (customer tenant)
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: technology

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: quote
  url: https://www.razoon.com/en/iam-solution/technology
  checked: 2026-10-16
  basis: vendor
  source: technology
  note: >-
    Offered as a rented subscription with installation and updates by Razoon;
    no prices are published.

features:
  api: yes

tags: [identity-governance, provisioning, active-directory, microsoft-365, rbac, abac, azure]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: overview
    title: waave - IAM solution overview
    url: https://www.razoon.com/en/iam-solution/overview
    publisher: Razoon AG
    kind: vendor
    accessed: 2026-10-16
  - id: technology
    title: waave - Cloud IAM solution technology
    url: https://www.razoon.com/en/iam-solution/technology
    publisher: Razoon AG
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: About us - Razoon
    url: https://www.razoon.com/en/about-us/overview
    publisher: Razoon AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Razoon AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/razoon-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Verwaltung von Identitäts-Lebenszyklen und Zugriffsrechten für Active Directory und Microsoft 365.'
    description: 'waave ist eine Lösung für Identitäts- und Zugriffsmanagement von Razoon aus Winterthur, betrieben als Managed Service im eigenen Microsoft-Azure-Tenant des Kunden.'
    notes:
      swiss.developed.note: 'Razoon gibt an, waave seit 2017 in Winterthur zu entwickeln, und trägt das Label swiss made software.'
      swiss.hosted.note: 'waave wird im eigenen Microsoft-Azure-Tenant des Kunden installiert, sodass die vom Kunden gewählte Azure-Region bestimmt, wo die Daten gespeichert werden. Das swiss made software-Profil führt Hosting in der Schweiz als verfügbar auf.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      alternativesTo.microsoft-entra-id.note: 'Ergänzt Active Directory und Microsoft 365 um Eintritts-, Wechsel- und Austrittsprozesse, rollenbasierte Zugriffsrechte und Audit-Funktionen; ist selbst kein Identitätsanbieter für Single Sign-on.'
      alternativesTo.okta.note: 'Ausgerichtet auf Identitäts-Lebenszyklen und Zugriffsrechte in Microsoft-zentrierten Umgebungen; ein Single-Sign-on- oder MFA-Dienst wird nicht beschrieben.'
---

waave is an identity and access management (IAM) solution developed by Razoon
AG in Winterthur. Identities are kept in a central directory and provisioned
automatically to connected systems such as Active Directory, Microsoft 365,
Microsoft Teams, Domino and SAP. Joiner, mover and leaver processes can be
triggered from HR systems such as SAP SuccessFactors or Workday, and access
rights are assigned through role-based and attribute-based rules, with logging
and auditing for compliance.

waave runs on Platform-as-a-Service components in Microsoft Azure and is
installed in the customer's own Azure tenant, where Razoon handles installation
and updates. Where the data is stored therefore depends on the Azure region the
customer uses. An agent on a Windows server provisions on-premises systems such
as Active Directory or Exchange.

The software is sold together with Razoon's IAM implementation and operations
services, mainly to large organisations. No prices are published.
