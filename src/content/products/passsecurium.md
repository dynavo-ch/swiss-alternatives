---
name: PassSecurium
aliases: [Pass Securium, PassSecurium™]
company: alpein
tagline: Password manager for individuals and businesses, hosted in Swiss data centres.
description: >-
  PassSecurium is a password manager from ALPEIN Software in Stein am Rhein, with
  apps, browser extensions and business features, hosted in Switzerland.
website: https://www.pass-securium.ch
status: active

categories: [password-managers]
alternativesTo:
  - lastpass
  - id: 1password
    note: The free plan for individuals is limited to 50 passwords.
  - id: bitwarden
    note: Not open source and not self-hostable.

audience: [consumer, business, enterprise]
deployment: [saas]
platforms: [web, ios, android, browser-extension]
languages:
  interface: [en, de, fr, it, es]

swiss:
  developed:
    value: yes
    basis: vendor
    source: appstore
    note: >-
      ALPEIN describes PassSecurium as made, secured and hosted in Switzerland.
      Its data processing agreement names the group company ALPEIN Software
      GmbH & Co. KG in Munich as a subcontractor for technical support in
      operating the product infrastructure.
  hosted:
    value: yes
    basis: vendor
    source: dpa
    note: >-
      ALPEIN states that all data is stored exclusively on servers in data
      centres in central Switzerland. The data processing agreement lists rack
      space at ewl Rechenzentrum AG in Lucerne and data11 (BSE Software GmbH) in
      Solothurn.
  dataLocations: [CH]
  infrastructure:
    provider: ALPEIN Software SWISS AG (own servers in colocation)
    providerCountry: CH
    type: colocation
    swissOwned: unknown
    facility: ewl Rechenzentrum AG, Lucerne, and data11 (BSE Software GmbH), Solothurn
    basis: vendor
    source: dpa
    note: >-
      The data-centre operators provide racks only. Whether ALPEIN Software
      SWISS AG is Swiss-owned is not published.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: yes
  enterprise: yes
  url: https://www.pass-securium.ch/en/prices
  checked: 2026-10-16
  basis: vendor
  source: faq
  note: >-
    The free plan for individuals is limited to 50 passwords. Business packages
    (Premium and Corporate) can be tested for 14 days. The pricing page loads
    its prices dynamically; they were not recorded here.

features:
  e2ee: yes
  mfa: yes
  sso: yes

tags: [password-manager, zero-knowledge, autofill, active-directory, entra-id]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: faq
    title: PassSecurium FAQ
    url: https://www.pass-securium.ch/en/faq
    publisher: ALPEIN Software SWISS AG
    kind: vendor
    accessed: 2026-10-16
  - id: dpa
    title: PassSecurium data processing agreement (DPA)
    url: https://www.pass-securium.ch/en/dpa
    publisher: ALPEIN Software SWISS AG
    kind: vendor
    accessed: 2026-10-16
  - id: appstore
    title: PassSecurium Password Manager - App Store
    url: https://apps.apple.com/app/id1159065748
    publisher: ALPEIN Software SWISS AG
    kind: vendor
    accessed: 2026-10-16
  - id: business
    title: PassSecurium for businesses
    url: https://www.pass-securium.ch/
    publisher: ALPEIN Software SWISS AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: ALPEIN Software SWISS AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/alpein-software-swiss-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Passwort-Manager für Privatpersonen und Unternehmen, gehostet in Schweizer Rechenzentren.'
    description: 'PassSecurium ist ein Passwort-Manager von ALPEIN Software aus Stein am Rhein, mit Apps, Browser-Erweiterungen und Business-Funktionen, gehostet in der Schweiz.'
    notes:
      swiss.developed.note: 'ALPEIN bezeichnet PassSecurium als in der Schweiz hergestellt, gesichert und gehostet. Sein Auftragsverarbeitungsvertrag nennt die Gruppengesellschaft ALPEIN Software GmbH & Co. KG in München als Unterauftragnehmerin für technischen Support beim Betrieb der Produktinfrastruktur.'
      swiss.hosted.note: 'ALPEIN gibt an, dass alle Daten ausschliesslich auf Servern in Rechenzentren in der Zentralschweiz gespeichert werden. Der Auftragsverarbeitungsvertrag führt Rackflächen bei der ewl Rechenzentrum AG in Luzern und bei data11 (BSE Software GmbH) in Solothurn auf.'
      swiss.infrastructure.note: 'Die Rechenzentrumsbetreiber stellen nur Racks zur Verfügung. Ob die ALPEIN Software SWISS AG in Schweizer Besitz ist, wird nicht veröffentlicht.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      alternativesTo.1password.note: 'Der Gratis-Plan für Privatpersonen ist auf 50 Passwörter beschränkt.'
      alternativesTo.bitwarden.note: 'Nicht quelloffen und nicht selbst hostbar.'
---

PassSecurium is a password manager developed by ALPEIN Software SWISS AG in
Stein am Rhein. It is available as a web app, as apps for iOS and Android, and
as browser extensions for Chrome, Firefox and Edge, and stores credentials
encrypted according to the zero-knowledge principle. Users can generate
passwords, use autofill and work offline on mobile devices; two-factor
authentication is available for web access.

For individuals there is a free plan limited to 50 passwords and a paid
Standard plan without that limit. Business packages (Premium and Corporate) add
user, group and role management, shared folders and integration with LDAP,
Active Directory and Entra ID for single sign-on, and can be tested free of
charge for 14 days.

ALPEIN states that all data is stored on servers in Swiss data centres; its
data processing agreement lists rack space at ewl in Lucerne and data11 in
Solothurn, and a Munich group company providing technical support for the
infrastructure. The company also offers SAP consulting and IT services.
