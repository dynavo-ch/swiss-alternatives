---
name: Proton Mail
aliases: [ProtonMail]
company: proton
tagline: Encrypted email with end-to-end encryption between Proton users.
description: >-
  Proton Mail is an encrypted email service from Proton AG near Geneva, with web,
  mobile and desktop apps. Data is stored in Switzerland, Germany and Norway.
website: https://proton.me/mail
status: active
launched: 2014

categories: [email]
alternativesTo:
  - gmail
  - outlook

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android]
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
      Proton's Mail privacy policy (last modified September 2026) states that
      data is stored encrypted on Proton servers located exclusively in
      Switzerland, Germany or Norway, without a per-country breakdown. Proton's
      incident report of August 2026 describes primary databases split between
      Frankfurt and Zurich. Since July 2025 Proton has been moving the majority
      of its physical infrastructure out of Switzerland, citing the proposed
      revision of the Swiss surveillance ordinance (VÜPF/OSCPT); as of early
      2026 that revision was awaiting a second consultation.
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
  repository: https://github.com/ProtonMail/WebClients
  basis: verified
  source: github
  note: >-
    The web client, Android app and Proton Mail Bridge are published under
    GPL-3.0; the server side is not published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 4.99
    currency: USD
    period: month
    note: Mail Plus, billed monthly (USD 3.99/month billed annually); CHF and EUR prices also offered
  url: https://proton.me/mail/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: partial
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  dataExport: yes

certifications: [iso-27001, soc-2]

tags: [encryption, pgp, zero-access-encryption, custom-domains, imap-bridge]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: privacy
    title: Proton Mail privacy policy
    url: https://proton.me/mail/privacy-policy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy-general
    title: Proton privacy policy
    url: https://proton.me/legal/privacy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: incident
    title: August 27 outage incident report
    url: https://proton.me/blog/august-27-outage-incident-report
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
  - id: vupf-status
    title: 'VÜPF: Neue Vernehmlassung für geplante Verschärfung der Überwachung'
    url: https://www.watson.ch/wirtschaft/digital/999868136-vuepf-neue-vernehmlassung-fuer-geplante-verschaerfung-der-ueberwachung
    publisher: watson.ch
    kind: press
    accessed: 2026-10-15
  - id: encryption
    title: What is encrypted within Proton Mail?
    url: https://proton.me/support/what-is-encrypted-within-protonmail
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Proton Mail pricing
    url: https://proton.me/mail/pricing
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: download
    title: Download Proton Mail apps
    url: https://proton.me/mail/download
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: export
    title: How to import and export emails
    url: https://proton.me/support/export-import-emails
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
    title: ProtonMail/WebClients
    url: https://github.com/ProtonMail/WebClients
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Verschlüsselte E-Mail mit Ende-zu-Ende-Verschlüsselung zwischen Proton-Nutzenden.'
    description: 'Proton Mail ist ein verschlüsselter E-Mail-Dienst der Proton AG bei Genf mit Web-, Mobile- und Desktop-Apps. Die Daten werden in der Schweiz, in Deutschland und in Norwegen gespeichert.'
    notes:
      swiss.developed.note: 'Entwickelt von der Proton AG mit Hauptsitz bei Genf. Die Datenschutzerklärung von Proton führt zudem Tochtergesellschaften in Nordmazedonien und Taiwan als Auftragsverarbeiter auf, und Proton betreibt ein F&E-Büro in Vilnius. Proton veröffentlicht nicht, wie die Entwicklungsarbeit auf die Standorte verteilt ist.'
      swiss.hosted.note: 'Die Datenschutzerklärung von Proton Mail (zuletzt geändert im September 2026) gibt an, dass die Daten verschlüsselt auf Proton-Servern gespeichert werden, die sich ausschliesslich in der Schweiz, in Deutschland oder in Norwegen befinden, ohne Aufschlüsselung nach Land. Protons Vorfallbericht vom August 2026 beschreibt primäre Datenbanken, die auf Frankfurt und Zürich verteilt sind. Seit Juli 2025 verlagert Proton den Grossteil seiner physischen Infrastruktur aus der Schweiz und verweist dabei auf die geplante Revision der Schweizer Überwachungsverordnung (VÜPF/OSCPT); Anfang 2026 wartete diese Revision auf eine zweite Vernehmlassung.'
      swiss.infrastructure.note: 'Proton sagt, dass ihm seine Server-Hardware gehört. Gemäss einem Bericht von watson.ch (August 2026) mietet es gesicherte Flächen bei Rechenzentrumsbetreibern, die es nicht nennt, statt eigene Rechenzentren in der Schweiz, in Deutschland oder in Norwegen zu betreiben.'
      openSource.note: 'Der Web-Client, die Android-App und Proton Mail Bridge sind unter GPL-3.0 veröffentlicht; die Serverseite ist nicht veröffentlicht.'
      pricing.startingPrice.note: 'Mail Plus, bei monatlicher Abrechnung (USD 3.99/Monat bei jährlicher Abrechnung); auch Preise in CHF und EUR'
---

Proton Mail is an email service operated by Proton AG. Messages between Proton
addresses are end-to-end encrypted with OpenPGP. Mail exchanged with other
providers is protected by TLS in transit and stored with zero-access
encryption, but is not end-to-end encrypted unless the sender uses a
password-protected email or PGP. Subject lines and sender and recipient
addresses are encrypted at rest but not end-to-end.

The service is available on the web, as iOS and Android apps and as desktop
apps for Windows, macOS and Linux (beta); free accounts get the desktop apps
as a trial. Proton Mail Bridge, which provides IMAP and SMTP access for clients
such as Outlook or Thunderbird, requires a paid plan. Paid plans add storage,
more addresses and custom domains; Proton Calendar is included with every
account. A command-line export tool saves mailboxes as EML files.

Proton states that mail data is kept on Proton-owned servers in Switzerland,
Germany or Norway. Since 2025 the company has shifted infrastructure away from
Switzerland because of a proposed revision of the Swiss surveillance ordinance,
while the contracting entity remains Proton AG under Swiss law. In August 2026
a cooling failure at a Frankfurt data centre caused a service outage of
roughly two hours.
