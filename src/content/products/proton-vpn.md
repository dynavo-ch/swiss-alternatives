---
name: Proton VPN
aliases: [ProtonVPN]
company: proton
tagline: No-logs VPN with a free tier, open-source apps and multi-hop Secure Core routing.
description: >-
  Proton VPN is a VPN service from Proton AG with a free plan, open-source apps,
  annual no-logs audits and servers in more than 140 countries.
website: https://protonvpn.com
status: active
launched: 2017

categories: [vpn]
alternativesTo:
  - nordvpn
  - expressvpn

audience: [consumer, business]
deployment: [saas]
platforms: [windows, macos, linux, ios, android, browser-extension]
languages:
  interface: [en, de, fr, it]

swiss:
  developed:
    value: partial
    basis: inferred
    source: privacy-general
    note: >-
      Developed by Proton AG, headquartered near Geneva. Proton's privacy policy
      also lists subsidiaries in North Macedonia and Taiwan as processors, and
      Proton runs an R&D office in Vilnius. Proton does not publish how
      development work is split between locations.
  hosted:
    value: partial
    basis: vendor
    source: privacy
    note: >-
      Hosting here refers to account data and core systems, not VPN exit
      servers, which are located in more than 140 countries by design. Proton's
      VPN privacy policy states that account data is stored encrypted on Proton
      servers located exclusively in Switzerland, Germany or Norway, without a
      per-country breakdown. Secure Core entry servers, which Proton says it owns
      and operates, are in Switzerland, Iceland and Sweden. Since July 2025
      Proton has been moving the majority of its physical infrastructure out of
      Switzerland, citing the proposed revision of the Swiss surveillance
      ordinance (VÜPF/OSCPT).
  dataLocations: [CH, DE, NO]
  infrastructure:
    provider: Proton AG (Proton-owned servers in third-party data centres)
    providerCountry: CH
    type: colocation
    swissOwned: yes
    basis: vendor
    source: outage-press
    note: >-
      Proton says it owns its server hardware. According to a watson.ch report
      (August 2026) it rents secured space from data-centre operators it does
      not name, rather than running its own data centres in Switzerland,
      Germany or Norway.

openSource:
  value: partial
  license: GPL-3.0
  repository: https://github.com/ProtonVPN
  basis: verified
  source: github
  note: >-
    The Windows, macOS/iOS and Android apps are published under GPL-3.0; the
    server-side systems are not published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  url: https://protonvpn.com/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  encryptionInTransit: yes
  mfa: yes
  sso: yes
  scim: yes

certifications: [iso-27001, soc-2]

tags: [no-logs, secure-core, wireguard, netshield, multi-hop]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: privacy
    title: Proton VPN privacy policy
    url: https://protonvpn.com/privacy-policy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy-general
    title: Proton privacy policy
    url: https://proton.me/legal/privacy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: secure-core
    title: How Secure Core defends your data
    url: https://protonvpn.com/features/secure-core
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: about
    title: About Proton VPN
    url: https://protonvpn.com/about
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: no-logs-audit
    title: Proton VPN no-logs audit
    url: https://protonvpn.com/blog/no-logs-audit
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: infra-move
    title: 'Introducing Lumo: AI where every conversation is confidential'
    url: https://proton.me/blog/lumo-ai
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: outage-press
    title: Hitzebedingter Server-Ausfall bei Schweizer Cloud-Firma Proton
    url: https://www.watson.ch/wirtschaft/digital/192121021-hitzebedingter-server-ausfall-bei-schweizer-cloud-firma-proton
    publisher: watson.ch
    kind: press
    accessed: 2026-10-15
  - id: ceo-statement
    title: Proton-Chef Andy Yen zum Ausbau der staatlichen Überwachung
    url: https://watson.ch/digital/wirtschaft/517198902-proton-schweiz-chef-andy-yen-zum-ausbau-der-staatlichen-ueberwachung
    publisher: watson.ch
    kind: press
    accessed: 2026-10-15
  - id: pricing
    title: Proton VPN pricing
    url: https://protonvpn.com/pricing
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: download
    title: Download Proton VPN
    url: https://protonvpn.com/download
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: sso
    title: How to set up single sign-on (SSO)
    url: https://proton.me/support/sso
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: soc2
    title: Proton completes SOC 2 Type II audit
    url: https://proton.me/blog/soc-2
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: github
    title: ProtonVPN on GitHub
    url: https://github.com/ProtonVPN
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'No-Logs-VPN mit kostenloser Version, Open-Source-Apps und Multi-Hop-Routing über Secure Core.'
    description: 'Proton VPN ist ein VPN-Dienst der Proton AG mit kostenlosem Plan, Open-Source-Apps, jährlichen No-Logs-Audits und Servern in mehr als 140 Ländern.'
    notes:
      swiss.developed.note: 'Entwickelt von der Proton AG mit Hauptsitz bei Genf. Die Datenschutzerklärung von Proton führt zudem Tochtergesellschaften in Nordmazedonien und Taiwan als Auftragsverarbeiter auf, und Proton betreibt ein F&E-Büro in Vilnius. Proton veröffentlicht nicht, wie die Entwicklungsarbeit auf die Standorte verteilt ist.'
      swiss.hosted.note: 'Hosting bezieht sich hier auf Kontodaten und Kernsysteme, nicht auf VPN-Exit-Server, die sich bewusst in mehr als 140 Ländern befinden. Gemäss der VPN-Datenschutzerklärung von Proton werden Kontodaten verschlüsselt auf Proton-Servern gespeichert, die sich ausschliesslich in der Schweiz, in Deutschland oder in Norwegen befinden, ohne Aufschlüsselung nach Land. Secure-Core-Eingangsserver, die Proton nach eigenen Angaben besitzt und betreibt, befinden sich in der Schweiz, in Island und in Schweden. Seit Juli 2025 verlagert Proton den Grossteil seiner physischen Infrastruktur aus der Schweiz und verweist dabei auf die geplante Revision der Schweizer Überwachungsverordnung (VÜPF/OSCPT).'
      swiss.infrastructure.note: 'Proton gibt an, seine Server-Hardware zu besitzen. Gemäss einem Bericht von watson.ch (August 2026) mietet Proton gesicherte Flächen bei nicht genannten Rechenzentrumsbetreibern, statt eigene Rechenzentren in der Schweiz, in Deutschland oder in Norwegen zu betreiben.'
      openSource.note: 'Die Apps für Windows, macOS/iOS und Android werden unter GPL-3.0 veröffentlicht; die serverseitigen Systeme sind nicht veröffentlicht.'
---

Proton VPN is a VPN service with apps for Windows, macOS, Linux, iOS, Android
and Chromebook, browser extensions for Chrome and Firefox, and apps for Android
TV, Apple TV and Fire TV. Secure Core routes traffic through a first server in
Switzerland, Iceland or Sweden before it exits in another country. The free
plan has no data limit but is restricted to one device, medium speed and
servers in a limited number of countries.

Proton describes Proton VPN as a no-logs service. The auditing firm Securitum
has reviewed the no-logs policy annually since 2022, with the fifth audit
published in 2026. Business plans add VPN gateways, SAML single sign-on and
SCIM provisioning. Paid plan prices on the pricing page vary
with the billing term and introductory discounts.

Account data is stored on Proton servers in Switzerland, Germany or Norway,
while VPN exit servers are spread worldwide. The contracting entity is Proton
AG under Swiss law. Proton's CEO has said the company would move out of
Switzerland if the proposed revision of the Swiss surveillance ordinance, which
would extend identification and data-retention duties to VPN providers, came
into force in its consulted form.
