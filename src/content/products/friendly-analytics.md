---
name: Friendly Analytics
aliases: [Friendly, friendly.ch]
company: friendly
tagline: Matomo-based web analytics hosted in Switzerland, cookieless by default.
description: >-
  Friendly Analytics is a web analytics service built on open-source Matomo, run
  by Friendly GmbH in Hergiswil and hosted in Swiss data centres.
website: https://friendly.ch/en/analytics
status: active
launched: 2020

categories: [web-analytics]
alternativesTo:
  - id: google-analytics
    note: >-
      Based on Matomo; importing historical Google Analytics data is a manual
      service billed by time.

audience: [business, enterprise, public-sector]
deployment: [saas, on-premises]
platforms: [web]

swiss:
  developed:
    value: partial
    basis: inferred
    source: analytics
    note: >-
      Friendly GmbH in Switzerland develops and operates the service, but its
      core is the open-source Matomo platform, which is developed by the
      international Matomo project.
  hosted:
    value: yes
    basis: vendor
    source: analytics
    note: >-
      Friendly states that the service is hosted exclusively in Swiss data
      centres operated by Infomaniak, Netstream and Hosttech. The Enterprise
      plan can instead use EU hosting, a dedicated instance or on-premises
      installation.
  dataLocations: [CH]
  infrastructure:
    provider: Infomaniak, Netstream and Hosttech
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: analytics

openSource:
  value: partial
  license: GPL-3.0
  basis: vendor
  source: analytics
  note: >-
    The service is built on Matomo, which is open source under GPL-3.0.
    Friendly does not state whether its own extensions are published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: no
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 59
    currency: CHF
    period: month
    note: Essential plan, billed monthly, excl. VAT; up to 100,000 hits per month, one website
  url: https://friendly.ch/en/pricing
  checked: 2026-10-15
  basis: vendor
  source: pricing

tags: [matomo, cookieless, tag-manager, privacy, gdpr, fadp]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: analytics
    title: Friendly Analytics
    url: https://friendly.ch/en/analytics
    publisher: Friendly GmbH
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Pricing
    url: https://friendly.ch/en/pricing
    publisher: Friendly GmbH
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: Privacy policy
    url: https://friendly.ch/en/privacy
    publisher: Friendly GmbH
    kind: vendor
    accessed: 2026-10-15
  - id: launch
    title: Wordplay launches Google Analytics alternative
    url: https://www.markt-kom.com/en/digital/wortspiel-lanciert-google-analytics-alternative
    publisher: Markt & Kommunikation
    kind: press
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Webanalyse auf Basis von Matomo, gehostet in der Schweiz, standardmässig ohne Cookies.'
    description: 'Friendly Analytics ist ein Webanalyse-Dienst auf Basis von Open-Source-Matomo, betrieben von der Friendly GmbH in Hergiswil und gehostet in Schweizer Rechenzentren.'
---

Friendly Analytics is a web analytics service from Friendly GmbH in Hergiswil
(Nidwalden), built on the open-source analytics platform Matomo. It was
announced in March 2020 by the digital agency Wortspiel. In its default
configuration it works without cookies, so a consent banner is usually not
needed; enabling cookie-based features changes that. It includes a tag manager
and can import most historical Google Analytics data as a paid, manual service.
Listed customers include Swiss federal and cantonal offices and companies.

Friendly states that all analytics data is stored in Switzerland, in data
centres operated by Infomaniak, Netstream and Hosttech. The Enterprise plan
also offers EU hosting, a dedicated instance or on-premises installation.

Plans start at CHF 59 per month (Essential, one website, up to 100,000 hits per
month); Professional costs CHF 129 per month and Enterprise starts at CHF 999
per month, all excluding VAT. Yearly billing is about 17% cheaper. There is no
free plan or trial; a 30-day money-back guarantee is offered instead. Because
the service builds on Matomo, its feature set largely follows Matomo, which
organisations can also host themselves.
