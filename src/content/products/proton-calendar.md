---
name: Proton Calendar
aliases: [ProtonCalendar]
company: proton
tagline: Encrypted calendar included with every Proton account.
description: >-
  Proton Calendar is an encrypted calendar from Proton AG that encrypts event
  titles, descriptions, locations and participants, with web and mobile apps.
website: https://proton.me/calendar
status: active

categories: [calendars]
alternativesTo:
  - google-calendar
  - id: outlook
    note: Covers the calendar part of Outlook; email is provided separately by Proton Mail.

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
      Proton's Calendar privacy policy states that data is stored encrypted on
      Proton servers located exclusively in Switzerland, Germany or Norway,
      without a per-country breakdown. Since July 2025 Proton has been moving
      the majority of its physical infrastructure out of Switzerland, citing the
      proposed revision of the Swiss surveillance ordinance (VÜPF/OSCPT); its
      August 2026 incident report describes core databases split between
      Frankfurt and Zurich.
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
    The web client (in the ProtonMail/WebClients repository) and the Android app
    are published under GPL-3.0; the server side is not published.

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
    note: Mail Plus (includes Calendar), billed monthly; CHF and EUR prices also offered
  url: https://proton.me/mail/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: partial
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes

certifications: [iso-27001, soc-2]

tags: [encryption, events, invitations, calendar-sharing]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: privacy
    title: Proton Calendar privacy policy
    url: https://proton.me/calendar/privacy-policy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy-general
    title: Proton privacy policy
    url: https://proton.me/legal/privacy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: security-model
    title: Proton Calendar security model
    url: https://proton.me/blog/protoncalendar-security-model
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
  - id: pricing
    title: Proton Mail pricing
    url: https://proton.me/mail/pricing
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: download
    title: Download Proton Calendar apps
    url: https://proton.me/calendar/download
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
  - id: github-android
    title: ProtonMail/android-calendar
    url: https://github.com/ProtonMail/android-calendar
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

Proton Calendar is a calendar service included with every Proton account. Event
titles, descriptions, locations and participant lists are end-to-end encrypted
on the user's device. Start and end times, time zones, recurrence rules and
alarm times are signed but not end-to-end encrypted, because Proton's servers
need to read them. Invitations received from
other calendar providers arrive unencrypted and are encrypted by the server on
receipt.

The calendar is available on the web, as iOS and Android apps and in Proton's
desktop apps for Windows, macOS and Linux (beta). It is not sold
separately: the free plan includes a limited number of personal calendars, and
Mail Plus and Proton's bundled and business plans include more.

Proton states that calendar data is kept on Proton-owned servers in
Switzerland, Germany or Norway. Since 2025 the company has shifted
infrastructure away from Switzerland because of a proposed revision of the
Swiss surveillance ordinance, while the contracting entity remains Proton AG
under Swiss law.
