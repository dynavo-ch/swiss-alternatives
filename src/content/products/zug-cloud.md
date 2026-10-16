---
name: zug.cloud
aliases: [zugcloud, compliag zug.cloud]
company: compliag
tagline: Email, Nextcloud and Paperless packages run on own hardware in the canton of Zug.
description: >-
  zug.cloud from compliag in Zug bundles email, calendar, Nextcloud file storage
  and Paperless document management, operated on own servers in the canton of Zug.
website: https://www.compliag.ch/produkte/zug.cloud/
status: active

categories: [office-suites, email, file-sharing]
alternativesTo:
  - id: microsoft-365
    note: >-
      Combines email and calendar with Nextcloud and Paperless rather than
      desktop Office apps; larger packages add modules such as GitLab, XWiki,
      Moodle and video conferencing.
  - id: google-workspace
    note: >-
      Built from open-source tools (Nextcloud, Paperless) and operated in the
      canton of Zug; aimed at small businesses, practices and associations.

audience: [consumer, business]
deployment: [saas, managed]
platforms: [web]

swiss:
  developed:
    value: no
    basis: vendor
    source: product
    note: >-
      zug.cloud is assembled from established open-source tools such as
      Nextcloud (developed by the German Nextcloud GmbH) and Paperless; compliag
      configures and operates them in Zug.
  hosted:
    value: yes
    basis: vendor
    source: product
    note: >-
      compliag states that all data is stored and processed exclusively in the
      canton of Zug under Swiss law, on infrastructure it operates there, with an
      off-site backup in Switzerland.
  dataLocations: [CH]
  infrastructure:
    provider: compliag AG (own hardware)
    providerCountry: CH
    type: self-operated
    swissOwned: unknown
    basis: vendor
    source: infrastructure
    note: >-
      compliag describes zug.cloud as highly available infrastructure on its own
      hardware in the canton of Zug; the data-centre facility is not named.
      compliag's shareholders are not published.

openSource:
  value: partial
  basis: vendor
  source: product
  note: >-
    Nextcloud and Paperless are open-source software; the email software and
    compliag's own configuration are not named or published.

pricing:
  model: subscription
  freePlan: no
  chfBilling: yes
  startingPrice:
    amount: 5
    currency: CHF
    period: month
    note: zug.cloud E-Mail, including 8.1% VAT; the Team package with Nextcloud and Paperless starts at CHF 38 per month
  url: https://www.compliag.ch/produkte/zug.cloud/
  checked: 2026-10-16
  basis: vendor
  source: product

tags: [nextcloud, paperless, email-hosting, sovereign-cloud, kanton-zug]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: product
    title: zug.cloud - compliag
    url: https://www.compliag.ch/produkte/zug.cloud/
    publisher: compliag AG
    kind: vendor
    accessed: 2026-10-16
  - id: infrastructure
    title: Souveräne IT-Infrastruktur - compliag
    url: https://www.compliag.ch/leistungen/souverane-it-loesungen/
    publisher: compliag AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutz - compliag
    url: https://www.compliag.ch/datenschutz/
    publisher: compliag AG
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: compliag AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/compliag-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'E-Mail-, Nextcloud- und Paperless-Pakete, betrieben auf eigener Hardware im Kanton Zug.'
    description: 'zug.cloud von compliag aus Zug bündelt E-Mail, Kalender, Nextcloud-Dateiablage und Paperless-Dokumentenverwaltung, betrieben auf eigenen Servern im Kanton Zug.'
    notes:
      swiss.developed.note: 'zug.cloud setzt sich aus etablierten Open-Source-Werkzeugen wie Nextcloud (entwickelt von der deutschen Nextcloud GmbH) und Paperless zusammen; compliag konfiguriert und betreibt sie in Zug.'
      swiss.hosted.note: 'compliag gibt an, dass alle Daten unter Schweizer Recht ausschliesslich im Kanton Zug gespeichert und verarbeitet werden, auf dort von compliag betriebener Infrastruktur, mit einem Offsite-Backup in der Schweiz.'
      swiss.infrastructure.note: 'compliag beschreibt zug.cloud als hochverfügbare Infrastruktur auf eigener Hardware im Kanton Zug; das Rechenzentrum wird nicht genannt. Die Aktionäre von compliag werden nicht veröffentlicht.'
      openSource.note: 'Nextcloud und Paperless sind Open-Source-Software; die E-Mail-Software und die eigene Konfiguration von compliag werden weder genannt noch veröffentlicht.'
      pricing.startingPrice.note: 'zug.cloud E-Mail, inklusive 8,1 % MWST; das Team-Paket mit Nextcloud und Paperless kostet ab CHF 38 pro Monat'
      alternativesTo.microsoft-365.note: 'Kombiniert E-Mail und Kalender mit Nextcloud und Paperless statt Desktop-Office-Apps; grössere Pakete ergänzen Module wie GitLab, XWiki, Moodle und Videokonferenzen.'
      alternativesTo.google-workspace.note: 'Aus Open-Source-Werkzeugen (Nextcloud, Paperless) aufgebaut und im Kanton Zug betrieben; richtet sich an kleine Unternehmen, Praxen und Vereine.'
---

zug.cloud is a set of hosted packages from compliag AG for email, file storage,
collaboration and document management. The E-Mail package provides a mailbox
with calendar, webmail and IMAP access. The Team package adds Nextcloud for
file storage, sharing, synchronisation and joint document editing, and
Paperless for scanning, tagging and archiving documents. A Business package can
be extended with modules such as GitLab, end-to-end encrypted SecureMail,
SwissSign certificates, video conferencing, XWiki and Moodle, and an NGO
package adds membership management for associations.

compliag states that zug.cloud runs on its own hardware in the canton of Zug,
that all data is stored and processed there under Swiss law with an off-site
backup in Switzerland, and that the offers carry the Swiss Cloud Hosting label.
Administration can be done by the customer or as a managed service.

Prices are published in CHF including VAT, starting at CHF 5 per month for
email and CHF 38 per month for the Team package. The software is largely
open-source; compliag develops its own medical-device and compliance products
but not the collaboration tools themselves.
