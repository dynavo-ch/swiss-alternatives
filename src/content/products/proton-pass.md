---
name: Proton Pass
aliases: [ProtonPass]
company: proton
tagline: End-to-end encrypted password manager with passkeys and email aliases.
description: >-
  Proton Pass is an end-to-end encrypted password manager from Proton AG with
  passkey support, built-in 2FA codes and hide-my-email aliases on all platforms.
website: https://proton.me/pass
status: active
launched: 2023

categories: [password-managers]
alternativesTo:
  - 1password
  - lastpass
  - bitwarden
  - dashlane

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android, browser-extension, cli]
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
      Proton's Pass privacy policy states that data is stored encrypted on Proton
      servers located exclusively in Switzerland, Germany or Norway, without a
      per-country breakdown. Hide-my-email alias forwarding partly runs on
      European cloud servers contracted through Proton's French subsidiary
      SimpleLogin SAS; these relay mail and do not store it. Since July 2025
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
  repository: https://github.com/protonpass
  basis: verified
  source: github
  note: >-
    The Android and iOS apps and the web app and browser extensions (in the
    ProtonMail/WebClients repository) are published under GPL-3.0; the server
    side is not published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  chfBilling: yes
  startingPrice:
    amount: 35.88
    currency: USD
    period: year
    note: Pass Plus, billed annually (USD 2.99/month); CHF and EUR prices also offered
  url: https://proton.me/pass/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: yes
  encryptionAtRest: yes
  encryptionInTransit: yes
  mfa: yes
  sso: yes
  scim: yes
  dataExport: yes

certifications: [iso-27001, soc-2]

tags: [passkeys, totp, email-aliases, autofill, password-sharing]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: privacy
    title: Proton Pass privacy policy
    url: https://proton.me/pass/privacy-policy
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy-general
    title: Proton privacy policy
    url: https://proton.me/legal/privacy
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
    title: Proton Pass pricing
    url: https://proton.me/pass/pricing
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: download
    title: Download Proton Pass apps
    url: https://proton.me/pass/download
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: sso
    title: How to set up single sign-on (SSO)
    url: https://proton.me/support/sso
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: scim
    title: How to set up SCIM provisioning with Microsoft Entra ID for Proton Pass
    url: https://proton.me/support/pass-set-up-scim-microsoft-entra
    publisher: Proton AG
    kind: vendor
    accessed: 2026-10-15
  - id: export
    title: How to export from Proton Pass
    url: https://proton.me/support/pass-export
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
    title: protonpass on GitHub
    url: https://github.com/protonpass
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Ende-zu-Ende-verschlüsselter Passwort-Manager mit Passkeys und E-Mail-Aliassen.'
    description: 'Proton Pass ist ein Ende-zu-Ende-verschlüsselter Passwort-Manager der Proton AG mit Passkey-Unterstützung, integrierten 2FA-Codes und Hide-my-email-Aliassen auf allen Plattformen.'
---

Proton Pass is a password manager that encrypts logins, notes, credit cards and
other items on the user's device. It supports passkeys, stores and fills
two-factor (TOTP) codes, and can create hide-my-email aliases that forward mail
to a real inbox, based on the SimpleLogin service Proton acquired in 2022.
Vaults can be shared with other users.

The free plan includes unlimited logins and devices, 10 aliases and two
vaults. Paid plans raise these limits and add further features; business plans
add SAML single sign-on and SCIM provisioning.
Data can be exported as encrypted or plain JSON or as CSV from the browser
extensions, web app and Windows app, but not from the mobile apps.

Proton states that Pass data is kept on Proton-owned servers in Switzerland,
Germany or Norway. Since 2025 the company has shifted infrastructure away from
Switzerland because of a proposed revision of the Swiss surveillance ordinance,
while the contracting entity remains Proton AG under Swiss law.
