---
name: Doodle
company: doodle
tagline: Group polls, booking pages and sign-up sheets for finding meeting times.
description: >-
  Doodle is a scheduling service from Zurich-based Doodle AG for group polls,
  booking pages and sign-up sheets; data is hosted on AWS in Ireland and the EU.
website: https://doodle.com
status: active
launched: 2007

categories: [scheduling]
alternativesTo:
  - id: calendly
    note: Also offers group polls for finding a common date; the free plan is ad-supported.

audience: [consumer, business, enterprise]
deployment: [saas]
platforms: [web]

swiss:
  developed:
    value: partial
    basis: vendor
    source: team
    note: >-
      Doodle's headquarters is in Zurich, with further offices in Berlin,
      Belgrade and the US; the team of nearly 80 people is spread across four
      countries.
  hosted:
    value: no
    basis: vendor
    source: privacy
    note: >-
      Doodle stores production data in Ireland and pre-production data in
      Germany, on Amazon Web Services; MongoDB Atlas (Germany, Ireland) is used
      as the cloud database. Several subprocessors, including payment
      processing, analytics and one e-mail delivery provider, are located in
      the USA.
  dataLocations: [IE, DE]
  infrastructure:
    provider: Amazon Web Services
    providerCountry: US
    type: public-cloud
    swissOwned: no
    basis: vendor
    source: subprocessors

openSource:
  value: no
  basis: inferred
  note: Proprietary cloud service; no source code is published.

pricing:
  model: freemium
  freePlan: yes
  enterprise: yes
  startingPrice:
    amount: 11
    currency: USD
    period: month
    note: Pro plan, per seat, billed annually; shown in USD with a currency selector
  url: https://doodle.com/en/premium/
  checked: 2026-10-15
  basis: vendor
  source: pricing
  note: >-
    The free plan includes one group poll, one booking page and one 1:1 and
    shows ads. Team costs USD 16 per seat per month (annual billing);
    Enterprise starts at USD 15,000 per year.

features:
  encryptionInTransit: yes
  sso: yes

certifications: [soc-2]

tags: [scheduling, meeting-polls, booking-pages, sign-up-sheets]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: privacy
    title: Privacy policy - Doodle
    url: https://doodle.com/en/privacy-policy/
    publisher: Doodle AG
    kind: vendor
    accessed: 2026-10-15
  - id: subprocessors
    title: List of data subprocessors - Doodle
    url: https://doodle.com/en/data-subprocessors
    publisher: Doodle AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: Security - Doodle
    url: https://doodle.com/en/features/security/
    publisher: Doodle AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: Plans and pricing - Doodle
    url: https://doodle.com/en/premium/
    publisher: Doodle AG
    kind: vendor
    accessed: 2026-10-15
  - id: team
    title: Who develops and operates Doodle?
    url: https://help.doodle.com/en/articles/9457354-who-develops-and-operates-doodle
    publisher: Doodle AG
    kind: documentation
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Gruppenumfragen, Buchungsseiten und Anmeldelisten zur Terminfindung.'
    description: 'Doodle ist ein Terminplanungsdienst der Zürcher Doodle AG für Gruppenumfragen, Buchungsseiten und Anmeldelisten; die Daten werden auf AWS in Irland und der EU gehostet.'
    notes:
      swiss.developed.note: 'Der Hauptsitz von Doodle ist in Zürich, mit weiteren Büros in Berlin, Belgrad und den USA; das Team von knapp 80 Personen verteilt sich auf vier Länder.'
      swiss.hosted.note: 'Doodle speichert Produktivdaten in Irland und Vorproduktionsdaten in Deutschland, auf Amazon Web Services; als Cloud-Datenbank wird MongoDB Atlas (Deutschland, Irland) genutzt. Mehrere Unterauftragsverarbeiter, darunter für Zahlungsabwicklung, Analytics und ein E-Mail-Versanddienst, befinden sich in den USA.'
      openSource.note: 'Proprietärer Cloud-Dienst; es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: 'Pro-Plan, pro Platz, bei jährlicher Abrechnung; in USD angezeigt, mit Währungsauswahl'
      alternativesTo.calendly.note: 'Bietet zusätzlich Gruppenumfragen zur Terminfindung; der kostenlose Plan ist werbefinanziert.'
---

Doodle is a web-based scheduling service. Its group polls let participants vote
on proposed dates, and it also offers booking pages for one-to-one appointments
and sign-up sheets. The service was created in Zurich in 2007 and has been
majority owned by TX Group (formerly Tamedia) since 2014.

Although the company is based in Zurich, the service runs on Amazon Web
Services: production data is stored in Ireland and pre-production data in
Germany. Doodle states that it has completed a SOC 2 Type II examination.
Several subprocessors, for example for payment processing, analytics and
e-mail delivery, are located in the USA.

The free plan is limited and ad-supported. Paid plans remove ads and add more
polls and booking pages; Team adds an admin console, and Enterprise adds single
sign-on via SAML or OIDC. The pricing page shows prices in USD, with a currency
selector.
