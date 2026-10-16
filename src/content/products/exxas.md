---
name: Exxas
aliases: [Exxas Business Plattform]
company: exxas
tagline: Cloud ERP and CRM platform for Swiss SMEs, run in Swiss data centres.
description: >-
  Exxas is a cloud business platform from Schlieren ZH that combines ERP, CRM,
  accounting, payroll and service management for SMEs, hosted in Switzerland.
website: https://www.exxas.net/
status: active
launched: 2011

categories: [erp, crm, accounting, payroll]
alternativesTo:
  - id: microsoft-dynamics-365
    note: >-
      Cloud service only, aimed at Swiss SMEs; licensed per concurrent user
      with published prices.
  - id: salesforce
    note: >-
      CRM is one part of a platform that also covers accounting, payroll,
      projects and inventory; aimed at Swiss SMEs.

audience: [business]
deployment: [saas]
platforms: [web, ios, android, api]
languages:
  interface: [de, fr, en, es, it, nl]
  support: [de, fr, en]

swiss:
  developed:
    value: yes
    basis: inferred
    source: about
    note: >-
      Exxas AG, based in Schlieren ZH, describes itself as the manufacturer and
      operator of Exxas; its development team is led by co-founder Pascal Jenni.
      The company does not publish where all of its developers work.
  hosted:
    value: yes
    basis: vendor
    source: technology
    note: >-
      Exxas states that the application, database and storage clusters run
      geo-redundantly in data centres in Dielsdorf (Zürich-Nord) and Gland, with
      a hot-standby site in Lupfig AG and backups at further Swiss locations.
      Its privacy policy states that personal data collected by Exxas is stored
      and processed in Switzerland, while website analytics and newsletter data
      may be processed in any country. All traffic to Exxas is routed through
      Cloudflare.
  dataLocations: [CH]
  infrastructure:
    type: unknown
    swissOwned: unknown
    facility: >-
      ZH01 in Dielsdorf, operated by Green Datacenter AG, and GE01 in Gland as
      primary sites; CH02 in Lupfig (Green Datacenter AG) as hot standby
    basis: vendor
    source: technology
    note: >-
      Exxas states that it is responsible for operations and works with partners
      under enterprise agreements, but does not say whether it runs its own
      hardware or names the operator of the Gland site.

openSource:
  value: no
  basis: inferred
  note: Proprietary cloud service; an API is offered but no source code is published.

pricing:
  model: subscription
  freePlan: no
  freeTrial: yes
  enterprise: yes
  chfBilling: yes
  startingPrice:
    amount: 19
    currency: CHF
    period: month
    note: Basic plan, per concurrent user, incl. 5,000 bookings
  url: https://www.exxas.net/preise
  checked: 2026-10-16
  basis: vendor
  source: pricing
  note: >-
    Pro costs 39, Commerce and Service 69 and Enterprise 89 per concurrent
    user and month. Any number of named users and clients can be created; only
    the number of simultaneous sign-ins is limited. Each subscribed user adds
    5 GB of storage; 500 API calls a day are included, further calls cost CHF
    0.002 each. The Swiss pricing page shows amounts without a currency symbol;
    the swiss made software listing gives the starting price in CHF. Whether
    VAT is included is not stated. The platform can be tested free of charge.

features:
  encryptionInTransit: yes
  api: yes
  dataExport: yes

certifications: [iso-27001]

tags: [erp, crm, accounting, payroll, hr, projects, inventory, service-management, fiduciaries, sme]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: website
    title: Exxas - Business Plattform für KMU
    url: https://www.exxas.net/
    publisher: Exxas AG
    kind: vendor
    accessed: 2026-10-16
  - id: pricing
    title: Pakete und Preise für die Business Plattform - Exxas
    url: https://www.exxas.net/preise
    publisher: Exxas AG
    kind: vendor
    accessed: 2026-10-16
  - id: technology
    title: Technologisch führende Business Plattform in Europa - Exxas
    url: https://www.exxas.net/plattform/technologie
    publisher: Exxas AG
    kind: vendor
    accessed: 2026-10-16
  - id: privacy
    title: Datenschutzerklärung - Exxas
    url: https://www.exxas.net/legal-pages/datenschutzerklaerung
    publisher: Exxas AG
    kind: vendor
    accessed: 2026-10-16
  - id: about
    title: Das Unternehmen hinter der Business Plattform - Exxas
    url: https://www.exxas.net/unternehmen
    publisher: Exxas AG
    kind: vendor
    accessed: 2026-10-16
  - id: iso27001
    title: ISO/IEC 27001:2022 certificate, Exxas AG (registration no. 22-118-716)
    url: https://cdn.prod.website-files.com/66fab42a1422b41e45f941e0/68496bb7ebc16dc0f63cb88b_Exxas-Zertifikat-ISO-IEC-27001.pdf
    publisher: Swiss Safety Center AG
    kind: independent
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: Exxas — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/exxas/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Cloud-ERP- und CRM-Plattform für Schweizer KMU, betrieben in Schweizer Rechenzentren.'
    description: 'Exxas ist eine Cloud-Unternehmensplattform aus Schlieren ZH, die ERP, CRM, Buchhaltung, Lohn und Servicemanagement für KMU vereint, gehostet in der Schweiz.'
    notes:
      swiss.developed.note: 'Die Exxas AG mit Sitz in Schlieren ZH bezeichnet sich als Herstellerin und Betreiberin von Exxas; ihr Entwicklungsteam wird von Mitgründer Pascal Jenni geleitet. Das Unternehmen veröffentlicht nicht, wo alle seine Entwickler arbeiten.'
      swiss.hosted.note: 'Exxas gibt an, dass die Applikations-, Datenbank- und Speichercluster georedundant in Rechenzentren in Dielsdorf (Zürich-Nord) und Gland laufen, mit einem Hot-Standby-Standort in Lupfig AG und Backups an weiteren Schweizer Standorten. Gemäss Datenschutzerklärung werden die von Exxas erhobenen Personendaten in der Schweiz gespeichert und verarbeitet, während Daten aus der Website-Analyse und dem Newsletter in jedem Land verarbeitet werden können. Der gesamte Datenverkehr zu Exxas wird über Cloudflare geleitet.'
      swiss.infrastructure.note: 'Exxas gibt an, für den Betrieb verantwortlich zu sein und mit Partnern unter Enterprise-Verträgen zusammenzuarbeiten, sagt aber nicht, ob es eigene Hardware betreibt, und nennt den Betreiber des Standorts Gland nicht.'
      openSource.note: 'Proprietärer Cloud-Dienst; eine API wird angeboten, aber es wird kein Quellcode veröffentlicht.'
      pricing.startingPrice.note: "Basic-Plan, pro gleichzeitigem Benutzer, inkl. 5'000 Buchungen"
      alternativesTo.microsoft-dynamics-365.note: 'Nur als Cloud-Dienst, auf Schweizer KMU ausgerichtet; Lizenzierung pro gleichzeitigem Benutzer mit veröffentlichten Preisen.'
      alternativesTo.salesforce.note: 'CRM ist ein Teil einer Plattform, die auch Buchhaltung, Lohn, Projekte und Lager abdeckt; auf Schweizer KMU ausgerichtet.'
---

Exxas is a cloud business platform for small and medium-sized companies that
brings eight areas into one application: central functions such as tasks,
documents and team workspaces, sales and CRM, marketing, service, projects,
products and inventory, HR with time tracking, absences, payroll and expenses,
and finance with accounting, budgets and VAT returns. Apps for iOS and Android,
an Outlook add-in and an API with an app marketplace are available, and Exxas
offers packages for fiduciaries, IT companies, law firms, agencies, trade and
building technology.

Exxas is licensed per concurrent user: any number of users can be created, but
only as many can be signed in at once as have been subscribed. Plans range from
19 (Basic) to 89 (Enterprise) per concurrent user and month. Exxas states that
more than 10,000 users work with the platform, and the interface is available
in German, French, English, Spanish, Italian and Dutch.

The platform runs in Swiss data centres in Dielsdorf, Gland and Lupfig, with
all traffic routed through Cloudflare. Exxas AG holds an ISO/IEC 27001:2022
certificate from Swiss Safety Center for the development and operation of the
platform, valid until November 2027.
