---
name: aplixERP
aliases: [Aplix, Aplix ERP, boreas]
company: boreas
tagline: Process-oriented ERP for Swiss SMEs in food, trade and production.
description: >-
  aplixERP is a browser-based ERP for Swiss SMEs in food, trade and production
  from boreas in Gossau ZH, run in a Swiss cloud or installed on premises.
website: https://boreas.ch
status: active

categories: [erp]
alternativesTo:
  - id: sap
    note: >-
      Aimed at SMEs in food, trade and production; full financial accounting
      and payroll come from connected systems such as Abacus, Topal, Infoniqa
      or bexio.
  - id: microsoft-dynamics-365
    note: >-
      Covers purchasing, sales, production, warehouse, batch tracing and
      contact management, but not full financial accounting.

audience: [business]
deployment: [saas, on-premises]
platforms: [web, api]
languages:
  interface: [de]

swiss:
  developed:
    value: yes
    basis: vendor
    source: home
    note: >-
      boreas states that aplixERP is developed entirely in Switzerland. The
      company is based in Gossau ZH.
  hosted:
    value: yes
    basis: vendor
    source: home
    note: >-
      boreas states that aplixERP runs in the Swiss cloud, with hosting and data
      storage in a Swiss data centre in the Zurich region. According to its
      swiss made software profile, the software can alternatively be installed
      on the customer's own systems.
  dataLocations: [CH]
  infrastructure:
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: home
    note: The data-centre operator for the hosted service is not named.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: quote
  url: https://boreas.ch/
  checked: 2026-10-16
  basis: vendor
  source: home
  note: No prices are published; boreas offers an initial consultation.

features:
  api: yes

tags: [erp, food-industry, wholesale, production, batch-tracing, pim, point-of-sale, warehouse]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: home
    title: aplixERP – Schweizer ERP für Lebensmittel, Handel und Produktion
    url: https://boreas.ch/
    publisher: boreas ag
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: boreas ag — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/boreas-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Prozessorientiertes ERP für Schweizer KMU in Lebensmittelbranche, Handel und Produktion.'
    description: 'aplixERP ist ein browserbasiertes ERP für Schweizer KMU in Lebensmittelbranche, Handel und Produktion von boreas in Gossau ZH, betrieben in einer Schweizer Cloud oder vor Ort installiert.'
    notes:
      swiss.developed.note: 'boreas gibt an, dass aplixERP vollständig in der Schweiz entwickelt wird. Das Unternehmen hat seinen Sitz in Gossau ZH.'
      swiss.hosted.note: 'boreas gibt an, dass aplixERP in der Schweizer Cloud betrieben wird, mit Hosting und Datenhaltung in einem Schweizer Rechenzentrum in der Region Zürich. Gemäss seinem Profil bei swiss made software kann die Software alternativ auf eigenen Systemen der Kunden installiert werden.'
      swiss.infrastructure.note: 'Der Betreiber des Rechenzentrums für den gehosteten Dienst wird nicht genannt.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      alternativesTo.sap.note: 'Auf KMU in Lebensmittelbranche, Handel und Produktion ausgerichtet; vollständige Finanz- und Lohnbuchhaltung kommen aus angebundenen Systemen wie Abacus, Topal, Infoniqa oder bexio.'
      alternativesTo.microsoft-dynamics-365.note: 'Deckt Einkauf, Verkauf, Produktion, Lager, Chargenrückverfolgung und Kontaktverwaltung ab, aber keine vollständige Finanzbuchhaltung.'
---

aplixERP is an ERP system developed by boreas ag in Gossau ZH for Swiss small
and medium-sized companies in food production, trade and manufacturing. It
organises purchasing, sales, production and internal processes as defined
business cases with steps, responsibilities and follow-up tasks, and covers
contacts, product information, prices and conditions, multi-warehouse stock, batches and
serial numbers, recipes and bills of materials, point of sale, mobile scanning
and reporting. Customisations are applied as an "overlay" on the standard so
that they survive releases, and the data model is accessible through an API.

The current generation runs in the browser; boreas lists German, French,
Italian and English as planned interface languages but notes that the
translation status should be checked. Full financial accounting, fixed assets
and payroll are normally provided by connected systems such as Abacus, Topal,
Infoniqa or bexio.

boreas states that the software is developed entirely in Switzerland and hosted
in a Swiss data centre in the Zurich region; the operator of that data centre
is not named. The software can also be installed on the customer's own
systems. Prices are not published.
