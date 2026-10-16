---
name: CMI
aliases: [CMI Lösungsplattform, CMI Dossier, CMI Protokoll, CMI GEVER, CM Informatik]
company: cmi
tagline: Records, meeting and case management platform for Swiss public administrations.
description: >-
  CMI is a records, meeting and case management platform for Swiss cantons,
  municipalities, schools and archives from Schwerzenbach ZH, with a Swiss cloud.
website: https://cmi.ch
status: active

categories: [document-management]
alternativesTo:
  - id: microsoft-365
    note: >-
      A specialised platform for dossiers, minutes and specialist processes in
      Swiss public administrations, not an office suite.

audience: [public-sector]
deployment: [saas, on-premises]
platforms: [web]

swiss:
  developed:
    value: yes
    basis: inferred
    source: swissmadesoftware
    note: >-
      CMI is based in Schwerzenbach and holds the swiss made software label,
      which requires at least 60% of production costs to be incurred in
      Switzerland.
  hosted:
    value: yes
    basis: vendor
    source: cloud-terms
    note: >-
      In the CMI Cloud, operation and backups take place exclusively in a
      certified Swiss data centre, and the cloud terms commit CMI to keeping
      all data in Switzerland, including for its AI applications. Customers can
      alternatively run the software on their own servers; CMI publishes system
      requirements for this.
  dataLocations: [CH]
  infrastructure:
    type: unknown
    swissOwned: unknown
    basis: vendor
    source: cloud
    note: >-
      CMI operates the cloud service but does not name the data-centre
      operator.

openSource:
  value: no
  basis: inferred
  note: No source code is published.

pricing:
  model: quote
  chfBilling: yes
  url: https://cmi.ch/cloud/
  checked: 2026-10-16
  basis: vendor
  source: cloud-terms
  note: No prices are published; the cloud terms state that prices are in CHF.

certifications: [iso-27001]

tags: [gever, records-management, e-government, minutes, archives, schools, public-sector]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: cloud
    title: CMI Cloud (SaaS)
    url: https://cmi.ch/cloud/
    publisher: CM Informatik AG
    kind: vendor
    accessed: 2026-10-16
  - id: cloud-terms
    title: Allgemeine Geschäftsbedingungen CMI Cloud
    url: https://link.cmi.ch/agb-cloud
    publisher: CM Informatik AG
    kind: vendor
    accessed: 2026-10-16
  - id: municipalities
    title: CMI - die Lösung für Städte und Gemeinden
    url: https://cmi.ch/stadt-gemeinde/
    publisher: CM Informatik AG
    kind: vendor
    accessed: 2026-10-16
  - id: sysreq
    title: CMI Systemvoraussetzungen 2026
    url: https://cmi.ch/wp-content/uploads/2026/03/Systemvoraussetzungen-2026.pdf
    publisher: CM Informatik AG
    kind: documentation
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: CM Informatik AG — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/cm-informatik-ag/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Plattform für Geschäftsverwaltung, Sitzungen und Dossiers in Schweizer Verwaltungen.'
    description: 'CMI ist eine Plattform für Geschäftsverwaltung, Sitzungen und Dossiers für Schweizer Kantone, Gemeinden, Schulen und Archive aus Schwerzenbach ZH, mit Schweizer Cloud.'
    notes:
      swiss.developed.note: 'CMI hat seinen Sitz in Schwerzenbach und trägt das Label swiss made software, das voraussetzt, dass mindestens 60 % der Herstellungskosten in der Schweiz anfallen.'
      swiss.hosted.note: 'In der CMI Cloud erfolgen Betrieb und Backups ausschliesslich in einem zertifizierten Schweizer Rechenzentrum, und die Cloud-AGB verpflichten CMI, sämtliche Daten in der Schweiz zu halten, auch für die KI-Anwendungen. Alternativ können Kunden die Software auf eigenen Servern betreiben; CMI veröffentlicht dafür Systemvoraussetzungen.'
      swiss.infrastructure.note: 'CMI betreibt den Cloud-Dienst selbst, nennt aber den Betreiber des Rechenzentrums nicht.'
      openSource.note: 'Es wird kein Quellcode veröffentlicht.'
      alternativesTo.microsoft-365.note: 'Eine spezialisierte Plattform für Dossiers, Protokolle und Fachprozesse in Schweizer Verwaltungen, keine Office-Suite.'
---

CMI is a software platform for the digital administration of Swiss cantons,
cities and municipalities, schools and historical archives, developed by
CM Informatik AG. Its modules cover dossiers and document management, minutes
and meetings of executive bodies, directories of authorities, contracts,
building permits and other specialist processes, as well as an archive
information system and AI features. CMI reports customers in more than 1,000
cities and municipalities, 22 cantonal administrations and 2,400 schools.

The CMI Cloud runs the applications as software as a service; according to
CMI, operation and backups take place exclusively in a certified data centre in
Switzerland, and the company holds ISO 27001 certification. The data-centre
operator is not named. Customers can also operate the software themselves.

Implementation and support are provided by CMI and its partners. Prices are
not published.
