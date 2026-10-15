---
name: Infomaniak Mail
aliases: [Mail Service, Service Mail, Infomaniak Mail Service, ik.me, etik.com]
company: infomaniak
tagline: Email hosting with calendar and contacts, for free addresses or your own domain.
description: >-
  Infomaniak Mail is an email service with calendar and contacts, offered as free
  addresses or paid custom-domain mailboxes, hosted in Switzerland by Infomaniak.
website: https://www.infomaniak.com/en/ksuite/service-mail
status: active

categories: [email, calendars]
alternativesTo:
  - gmail
  - outlook

audience: [consumer, business]
deployment: [saas]
platforms: [web, ios, android]

swiss:
  developed:
    value: yes
    basis: vendor
    source: mail
  hosted:
    value: yes
    basis: vendor
    source: mail
    note: >-
      Infomaniak states that mailboxes are stored in two of its data centres and
      that the data is located exclusively in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak (self-operated data centres)
    providerCountry: CH
    type: self-operated
    swissOwned: yes
    basis: vendor
    source: certifications

openSource:
  value: partial
  license: GPL-3.0
  repository: https://github.com/Infomaniak/android-kMail
  basis: vendor
  source: github
  note: The Android and iOS apps are open source under GPL-3.0; the webmail and mail servers are not published.

pricing:
  model: freemium
  freePlan: yes
  freeTrial: unknown
  chfBilling: yes
  startingPrice:
    amount: 2.29
    currency: CHF
    period: month
    note: Mail Service for custom-domain addresses, from price, excl. VAT
  url: https://www.infomaniak.com/en/ksuite/service-mail/prices
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: no
  mfa: yes
  sso: yes
  dataExport: yes

certifications: [iso-27001, iso-9001, iso-14001, iso-50001]

sustainability:
  summary: >-
    Infomaniak states its data centres run on renewable electricity without air
    conditioning, and that its D4 data centre in Geneva feeds all of its waste
    heat into the district heating network.
  basis: vendor
  source: d4

tags: [email, custom-domain, calendar, contacts, encryption, imap]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: mail
    title: Mail Service - The secure messaging service
    url: https://www.infomaniak.com/en/ksuite/service-mail
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Mail Service - Prices and characteristics
    url: https://www.infomaniak.com/en/ksuite/service-mail/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: free
    title: my kSuite - Prices and characteristics
    url: https://www.infomaniak.com/en/ksuite/myksuite/prices
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: encryption
    title: Email encryption at Infomaniak
    url: https://news.infomaniak.com/en/email-encryption
    publisher: Infomaniak
    kind: vendor
    accessed: 2026-10-15
  - id: apps
    title: Download the Infomaniak Mail app
    url: https://www.infomaniak.com/en/apps/download-infomaniak-mail
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: certifications
    title: Certifications and labels
    url: https://www.infomaniak.com/en/certifications
    publisher: Infomaniak Network SA
    kind: vendor
    accessed: 2026-10-15
  - id: d4
    title: 'Innovation : Infomaniak inaugure un data center revalorisant 100% de son énergie'
    url: https://www.presseportal.ch/pm/100057093/100928245?langid=2
    publisher: Infomaniak
    kind: press
    accessed: 2026-10-15
  - id: github
    title: Infomaniak/android-kMail
    url: https://github.com/Infomaniak/android-kMail
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
---

Infomaniak Mail is the email service behind both the free my kSuite addresses
(@ik.me, @etik.com or @ikmail.com, with 20 GB of mail storage) and the paid Mail
Service for addresses on a customer's own domain. It includes webmail, calendar
and contacts, IMAP access, mobile apps for iOS and Android, attachments up to
3 GB, spam and virus filtering, and optional AI writing help
from Infomaniak's own hosted models. The Mail Service can be ordered on its own
or as part of the kSuite plans.

Since 2025 all addresses can send encrypted messages; recipients outside
Infomaniak read them on a password-protected web page. The scheme is based on
OpenPGP, but private keys remain on Infomaniak's infrastructure, so it is not
end-to-end encryption in the strict sense. Infomaniak states that mail data is
stored only in Switzerland, in two of its own data centres.
