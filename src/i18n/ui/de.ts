/**
 * German (Switzerland) UI dictionary. Keys missing here fall back to English.
 * Swiss orthography: «ss» instead of Eszett, Swiss quotation marks «…».
 */
import type { Dictionary } from './en';

export const de: Dictionary = {
  /* Navigation ------------------------------------------------------ */
  'nav.main': 'Hauptnavigation',
  'nav.explore': 'Entdecken',
  'nav.products': 'Alle Produkte',
  'nav.categories': 'Kategorien',
  'nav.alternatives': 'Alternativen',
  'nav.companies': 'Unternehmen',
  'nav.latest': 'Neu',
  'nav.about': 'Über uns',
  'nav.methodology': 'Methodik',
  'nav.suggest': 'Produkt vorschlagen',
  'nav.favourites': 'Favoriten',
  'nav.compare': 'Vergleichen',
  'nav.contact': 'Kontakt',
  'nav.contribute': 'Mitwirken',
  'nav.sponsors': 'Sponsoren & Partner',
  'nav.menu': 'Menü',
  'nav.closeMenu': 'Menü schliessen',
  'nav.skip': 'Zum Inhalt springen',
  'nav.home': 'Startseite',
  'nav.breadcrumbs': 'Brotkrümelnavigation',
  'nav.onThisPage': 'Auf dieser Seite',

  /* Search ---------------------------------------------------------- */
  'search.label': 'Verzeichnis durchsuchen',
  'search.placeholder': 'Suche nach Gmail, Cloud-Hosting, Passwort-Managern…',
  'search.placeholderShort': 'Suchen…',
  'search.open': 'Suchen',
  'search.close': 'Suche schliessen',
  'search.loading': 'Suchindex wird geladen…',
  'search.empty': 'Keine Treffer für «{query}».',
  'search.emptyHint':
    'Versuchen Sie einen Produktnamen wie «Dropbox» oder eine Kategorie wie «E-Mail».',
  'search.suggestLink': 'Produkt vorschlagen',
  'search.type.alternative': 'Alternative zu',
  'search.type.product': 'Produkt',
  'search.type.category': 'Kategorie',
  'search.type.company': 'Unternehmen',
  'search.group.alternative': 'Schweizer Alternativen zu',
  'search.group.product': 'Produkte',
  'search.group.category': 'Kategorien',
  'search.group.company': 'Unternehmen',
  'search.hint.navigate': 'navigieren',
  'search.hint.open': 'öffnen',
  'search.hint.close': 'schliessen',
  'search.tryLabel': 'Zum Beispiel',
  'search.results': { one: '{count} Treffer', other: '{count} Treffer' },
  'search.page.title': 'Suche & Index',
  'search.page.description':
    'Durchsuchen Sie alle Schweizer Produkte, Kategorien, Unternehmen und ausländischen Produkte im Verzeichnis – oder blättern Sie im vollständigen A–Z-Index.',
  'search.page.index': 'A–Z-Index',

  /* Counts ---------------------------------------------------------- */
  'count.products': { one: '{count} Produkt', other: '{count} Produkte' },
  'count.swissAlternatives': {
    one: '{count} Schweizer Alternative',
    other: '{count} Schweizer Alternativen',
  },
  'count.categories': { one: '{count} Kategorie', other: '{count} Kategorien' },
  'count.companies': { one: '{count} Unternehmen', other: '{count} Unternehmen' },

  /* Theme ----------------------------------------------------------- */
  'theme.toggle': 'Farbschema wechseln',
  'theme.light': 'Hell',
  'theme.dark': 'Dunkel',

  /* Generic --------------------------------------------------------- */
  'common.viewProduct': 'Zum Produkt',
  'common.viewAll': 'Alle anzeigen',
  'common.visitWebsite': 'Website besuchen',
  'common.website': 'Website',
  'common.new': 'Neu',
  'common.updated': 'Aktualisiert',
  'common.added': 'Hinzugefügt',
  'common.since': 'seit {year}',
  'common.founded': 'Gegründet',
  'common.unknown': 'Unbekannt',
  'common.notVerified': 'Nicht verifiziert',
  'common.none': 'Keine erfasst',
  'common.and': 'und',
  'common.more': '+{count} weitere',
  'common.learnMore': 'Mehr erfahren',
  'common.copyLink': 'Link kopieren',
  'common.linkCopied': 'Link kopiert',
  'common.copied': 'In die Zwischenablage kopiert',
  'common.externalLink': '(öffnet externe Website)',
  'common.discontinued': 'Eingestellt',
  'common.beta': 'Beta',
  'common.sponsored': 'Gesponsert',
  'common.affiliate': 'Affiliate-Link',
  'common.lastVerified': 'Zuletzt verifiziert',
  'common.random': 'Etwas Schweizerisches entdecken',
  'common.randomShort': 'Zufälliges Produkt',

  /* Badges (signals) ------------------------------------------------ */
  'signal.swiss-company': 'Schweizer Unternehmen',
  'signal.swiss-company.desc':
    'Das betreibende Unternehmen hat seinen Hauptsitz in der Schweiz und ist nach Schweizer Recht gegründet.',
  'signal.swiss-owned': 'In Schweizer Besitz',
  'signal.swiss-owned.desc':
    'Die oberste beherrschende Eigentümerschaft ist schweizerisch (Schweizer Personen, Unternehmen, Stiftungen oder öffentlich-rechtliche Körperschaften).',
  'signal.swiss-developed': 'In der Schweiz entwickelt',
  'signal.swiss-developed.desc':
    'Das Produkt wird hauptsächlich von einem Team entwickelt, das von der Schweiz aus arbeitet.',
  'signal.swiss-hosted': 'In der Schweiz gehostet',
  'signal.swiss-hosted.desc':
    'Zentrale Kundendaten und Workloads werden standardmässig in der Schweiz gehostet.',
  'signal.swiss-residency': 'Schweizer Datenoption',
  'signal.swiss-residency.desc':
    'Hosting in der Schweiz ist als Option oder für einen Teil des Dienstes verfügbar, aber nicht für alles der Standard.',
  'signal.swiss-infrastructure': 'Schweizer Infrastruktur',
  'signal.swiss-infrastructure.desc':
    'In der Schweiz gehostet, auf Infrastruktur, die von einem Anbieter in Schweizer Besitz (oder vom Unternehmen selbst) betrieben wird – nicht von einem ausländischen Hyperscaler.',
  'signal.open-source': 'Open Source',
  'signal.open-source.desc':
    'Der Quellcode des Produkts ist unter einer Open-Source-Lizenz veröffentlicht (Client und Server).',
  'signal.self-hostable': 'Selbst hostbar',
  'signal.self-hostable.desc': 'Kann auf eigenen Servern oder On-Premises installiert werden.',
  'signal.free-plan': 'Kostenloser Plan',
  'signal.free-plan.desc':
    'Ein dauerhaft kostenloser Plan ist verfügbar (nicht nur eine Testphase).',

  /* Classification -------------------------------------------------- */
  'class.label': 'Klassifizierung',
  'class.swiss-native': 'Schweizer Ursprung',
  'class.swiss-native.desc':
    'Unternehmen mit Hauptsitz in der Schweiz und in Schweizer Besitz; Produkt (ganz oder grösstenteils) in der Schweiz entwickelt.',
  'class.swiss-company': 'Schweizer Unternehmen',
  'class.swiss-company.desc':
    'Unternehmen mit Hauptsitz in der Schweiz. Die Eigentümerschaft ist gemischt oder nicht vollständig verifiziert, oder die Entwicklung erfolgt hauptsächlich im Ausland.',
  'class.swiss-company-foreign-parent': 'Schweizer Unternehmen · ausländische Muttergesellschaft',
  'class.swiss-company-foreign-parent.desc':
    'Hauptsitz in der Schweiz, aber letztlich von einem Unternehmen ausserhalb der Schweiz kontrolliert.',
  'class.swiss-open-source': 'Open Source, in der Schweiz entwickelt',
  'class.swiss-open-source.desc':
    'Open-Source-Projekt, das hauptsächlich in der Schweiz entwickelt wird, ohne Betreiberunternehmen mit Hauptsitz in der Schweiz.',
  'class.swiss-hosted-foreign': 'In der Schweiz gehostet · ausländisches Unternehmen',
  'class.swiss-hosted-foreign.desc':
    'Ausländisches Unternehmen, dessen Dienst in der Schweiz gehostet wird. Nur wegen des Datenstandorts aufgeführt – kein Schweizer Unternehmen.',

  /* Footprint ------------------------------------------------------- */
  'footprint.title': 'Schweizer Fussabdruck',
  'footprint.lead':
    'Fünf voneinander unabhängige Fragen. Ein Schweizer Unternehmen ist nicht automatisch in der Schweiz gehostet – und umgekehrt.',
  'footprint.headquarters': 'Hauptsitz',
  'footprint.ownership': 'Eigentümerschaft',
  'footprint.development': 'Entwicklung',
  'footprint.hosting': 'Hosting',
  'footprint.infrastructure': 'Infrastruktur',
  'footprint.headquarters.q': 'Hat das betreibende Unternehmen seinen Hauptsitz in der Schweiz?',
  'footprint.ownership.q': 'Ist das Unternehmen letztlich in Schweizer Besitz?',
  'footprint.development.q': 'Wird das Produkt in der Schweiz entwickelt?',
  'footprint.hosting.q': 'Werden Kundendaten in der Schweiz gehostet?',
  'footprint.infrastructure.q':
    'Wird die Hosting-Infrastruktur von einem Anbieter in Schweizer Besitz betrieben?',
  'footprint.aria': 'Schweizer Fussabdruck: {summary}',
  'footprint.legend': 'Legende',
  'footprint.howAssessed': 'Wie der Fussabdruck bewertet wird',

  /* Fact states ----------------------------------------------------- */
  'state.yes': 'Ja',
  'state.no': 'Nein',
  'state.partial': 'Teilweise',
  'state.optional': 'Optional',
  'state.unknown': 'Unbekannt / nicht verifiziert',
  'state.unknownShort': 'Unbekannt',

  /* Provenance ------------------------------------------------------ */
  'basis.verified': 'Verifiziert',
  'basis.verified.desc':
    'Durch eine unabhängige oder amtliche Quelle bestätigt, etwa das Handelsregister.',
  'basis.vendor': 'Herstellerangabe',
  'basis.vendor.desc':
    'Vom Hersteller selbst angegeben – in seiner Dokumentation, auf seiner Website oder in seinen rechtlichen Bedingungen.',
  'basis.inferred': 'Abgeleitet',
  'basis.inferred.desc': 'Von der Redaktion aus indirekten Hinweisen abgeleitet – siehe Anmerkung.',
  'basis.none': 'Nicht angegeben',
  'basis.source': 'Quelle',

  /* Product attributes --------------------------------------------- */
  'audience.consumer': 'Privatpersonen',
  'audience.business': 'Unternehmen',
  'audience.enterprise': 'Grossunternehmen',
  'audience.public-sector': 'Öffentliche Hand',
  'audience.developer': 'Entwicklerteams',
  'deployment.saas': 'Cloud (SaaS)',
  'deployment.self-hosted': 'Selbst gehostet',
  'deployment.on-premises': 'On-Premises',
  'deployment.managed': 'Managed Service',
  'platform.web': 'Web',
  'platform.windows': 'Windows',
  'platform.macos': 'macOS',
  'platform.linux': 'Linux',
  'platform.ios': 'iOS',
  'platform.android': 'Android',
  'platform.browser-extension': 'Browser-Erweiterung',
  'platform.cli': 'CLI',
  'platform.api': 'API',
  'feature.e2ee': 'Ende-zu-Ende-Verschlüsselung',
  'feature.encryptionAtRest': 'Verschlüsselung gespeicherter Daten',
  'feature.encryptionInTransit': 'Transportverschlüsselung',
  'feature.mfa': 'Multi-Faktor-Authentifizierung',
  'feature.sso': 'Single Sign-on (SAML/OIDC)',
  'feature.scim': 'SCIM-Provisionierung',
  'feature.api': 'Öffentliche API',
  'feature.dataExport': 'Datenexport',
  'pricing.model.free': 'Kostenlos',
  'pricing.model.freemium': 'Freemium',
  'pricing.model.subscription': 'Abonnement',
  'pricing.model.usage-based': 'Nutzungsbasiert',
  'pricing.model.one-time': 'Einmalkauf',
  'pricing.model.quote': 'Auf Anfrage',
  'pricing.model.donation': 'Spendenfinanziert',
  'pricing.period.month': 'Monat',
  'pricing.period.year': 'Jahr',
  'pricing.period.one-time': 'einmalig',
  'pricing.period.hour': 'Stunde',
  'pricing.period.usage': 'nutzungsbasiert',
  'pricing.model': 'Preismodell',
  'pricing.tier': 'Preise',
  'pricing.tier.free': 'Kostenlos',
  'pricing.tier.freemium': 'Freemium',
  'pricing.tier.paid': 'Kostenpflichtig',
  'pricing.tier.unknown': 'Unbekannt',
  'oss.yes': 'Ja',
  'oss.partial': 'Teilweise (z. B. Apps)',
  'oss.no': 'Nein',
  'oss.unknown': 'Unbekannt',
  'license.osi': 'OSI-anerkannte Lizenz',
  'license.sourceAvailable': 'Quellcode verfügbar, aber nicht Open Source',
  'repo.github': 'GitHub',
  'repo.stars': 'Sterne',
  'repo.forks': 'Forks',
  'repo.archived': 'Archiviert',
  'repo.publicRepos': 'öffentliche Repositories',
  'repo.lastPush': 'letzter Commit',
  'repo.fetched': 'Statistiken von GitHub, abgerufen am {date}.',
  'pricing.startingAt': 'Bezahlpläne ab',
  'pricing.freePlan': 'Kostenloser Plan',
  'pricing.freeTrial': 'Kostenlose Testphase',
  'pricing.enterprise': 'Enterprise-Plan',
  'pricing.chfBilling': 'Abrechnung in CHF',
  'pricing.checked':
    'Preise geprüft am {date}. Prüfen Sie die aktuellen Preise immer auf der Website des Herstellers.',
  'pricing.page': 'Preisseite',
  'company.type.company': 'Unternehmen',
  'company.type.foundation': 'Stiftung',
  'company.type.association': 'Verein',
  'company.type.cooperative': 'Genossenschaft',
  'company.type.public-institution': 'Öffentliche Institution',

  /* Product page ---------------------------------------------------- */
  'product.overview': 'Übersicht',
  'product.atAGlance': 'Auf einen Blick',
  'product.whySwiss': 'Warum es eine Schweizer Alternative sein kann',
  'product.metaTitle': '{name} – Schweizer {noun}',
  'product.metaDescription': '{description} Eine Schweizer Alternative zu {alternatives}.',
  'product.operatedBySwiss': '{product} wird von {company} mit Hauptsitz in {place} betrieben.',
  'product.operatedBy': '{product} wird von {company} betrieben (Hauptsitz: {place}).',
  'product.why.hosted':
    'Gemäss den von uns gefundenen Angaben werden zentrale Kundendaten in der Schweiz gehostet.',
  'product.why.residency':
    'Hosting in der Schweiz ist für einen Teil des Dienstes oder als Option verfügbar – prüfen Sie die Hosting-Details unten, bevor Sie sich darauf verlassen.',
  'product.why.notePrefix': 'Hinweis:',
  'product.why.notHosted':
    'Obwohl es sich um ein Schweizer Unternehmen handelt, werden die Kundendaten nicht in der Schweiz gehostet.',
  'product.why.unknown': 'Wir konnten nicht verifizieren, wo die Kundendaten gehostet werden.',
  'product.englishOnly': 'Die ausführliche Beschreibung ist nur auf Englisch verfügbar.',
  'product.replaces': 'Kann ersetzen',
  'product.replacesLead':
    'Ausländische Produkte mit sich überschneidendem Funktionsumfang. Eine Alternative ist nicht zwingend ein Eins-zu-eins-Ersatz.',
  'product.footprint': 'Schweizer Fussabdruck',
  'product.hosting': 'Hosting & Infrastruktur',
  'product.dataLocations': 'Kundendaten gespeichert in',
  'product.infraProvider': 'Betreiber der Infrastruktur',
  'product.infraType': 'Art der Infrastruktur',
  'product.infraType.self-operated': 'Selbst betrieben',
  'product.infraType.colocation': 'Eigene Hardware in Colocation',
  'product.infraType.public-cloud': 'Public Cloud',
  'product.infraType.mixed': 'Gemischt',
  'product.infraType.unknown': 'Unbekannt',
  'product.facility': 'Rechenzentrum',
  'product.features': 'Funktionen & Plattformen',
  'product.platforms': 'Plattformen',
  'product.deployment': 'Bereitstellung',
  'product.audience': 'Zielgruppe',
  'product.languages': 'Sprachen der Oberfläche',
  'product.supportLanguages': 'Support-Sprachen',
  'product.security': 'Datenschutz & Sicherheit',
  'product.certifications': 'Zertifizierungen',
  'product.pricing': 'Preise',
  'product.openSource': 'Open Source',
  'product.license': 'Lizenz',
  'product.repository': 'Quellcode',
  'product.sustainability': 'Nachhaltigkeit',
  'product.company': 'Unternehmen',
  'product.similar': 'Ähnliche Schweizer Produkte',
  'product.sources': 'Quellen & Verifizierung',
  'product.sourcesLead':
    'Jede Angabe auf dieser Seite ist als «Verifiziert», «Herstellerangabe» oder «Abgeleitet» gekennzeichnet. «Unbekannt» bedeutet, dass wir sie nicht bestätigen konnten – nicht, dass die Antwort «Nein» lautet.',
  'product.reportIssue': 'Fehler melden',
  'product.editEntry': 'Eintrag bearbeiten',
  'product.alsoFrom': 'Mehr von {company}',
  'product.status.discontinued': 'Dieses Produkt wurde eingestellt.',
  'product.status.beta': 'Dieses Produkt befindet sich in der Beta-Phase.',
  'product.launched': 'Lanciert',
  'product.categories': 'Kategorien',

  /* Company --------------------------------------------------------- */
  'company.headquarters': 'Hauptsitz',
  'company.canton': 'Kanton',
  'company.jurisdiction': 'Rechtsordnung',
  'company.ownership': 'Eigentümerschaft',
  'company.parent': 'Beherrschende Eigentümerschaft',
  'company.swissFounded': 'In der Schweiz gegründet',
  'company.registry': 'Handelsregister',
  'company.products': 'Produkte',
  'company.type': 'Organisationsform',
  'company.labels': 'Labels',
  'company.labelsNote':
    'Labels von Dritten, vergeben von den jeweiligen Label-Organisationen nach deren eigenen Kriterien. Zur Information aufgeführt; nicht von uns verifiziert.',
  'label.swiss-made-software': 'swiss made software',
  'label.swiss-hosting': 'swiss hosting',

  /* Actions --------------------------------------------------------- */
  'fav.add': 'Zu Favoriten hinzufügen',
  'fav.remove': 'Aus Favoriten entfernen',
  'compare.add': 'Zum Vergleich hinzufügen',
  'compare.remove': 'Aus Vergleich entfernen',
  'compare.limit': 'Sie können bis zu {count} Produkte vergleichen.',
  'compare.tray': 'Vergleich',
  'compare.cta': 'Vergleichen',
  'compare.clear': 'Leeren',

  /* Filters --------------------------------------------------------- */
  'filter.label': 'Filter',
  'filter.more': 'Weitere Filter',
  'filter.clear': 'Alle zurücksetzen',
  'filter.apply': '{count} Treffer anzeigen',
  'filter.close': 'Filter schliessen',
  'filter.showing': '{shown} von {total} angezeigt',
  'filter.noResults': 'Keine Produkte entsprechen diesen Filtern.',
  'filter.noResultsHint': 'Entfernen Sie einen Filter, um mehr Ergebnisse zu sehen.',
  'filter.share': 'Link zu dieser Ansicht kopieren',
  'filter.search': 'Nach Name filtern',
  'filter.group.company': 'Unternehmen',
  'filter.group.infrastructure': 'Hosting & Infrastruktur',
  'filter.group.product': 'Produkt',
  'filter.group.audience': 'Zielgruppe',
  'filter.group.platform': 'Plattformen',
  'filter.group.classification': 'Klassifizierung',
  'filter.group.canton': 'Kanton',
  'filter.group.category': 'Kategorie',
  'filter.group.pricing': 'Preise',
  'filter.saas': 'Cloud (SaaS)',
  'filter.ossPartial': 'Teilweise Open Source (z. B. Apps)',
  'filter.freeTrial': 'Kostenlose Testphase',
  'filter.enterprise': 'Enterprise-Plan',
  'sort.label': 'Sortieren',
  'sort.name': 'A–Z',
  'sort.added': 'Zuletzt hinzugefügt',
  'sort.footprint': 'Schweizer Fussabdruck',
  'sort.verified': 'Zuletzt verifiziert',

  /* Statistics ------------------------------------------------------ */
  'stats.products': 'Schweizer Produkte',
  'stats.companies': 'Unternehmen',
  'stats.categories': 'Kategorien',
  'stats.swissHosted': 'In der Schweiz gehostet',
  'stats.openSource': 'Open Source',
  'stats.cantons': 'Kantone',

  /* Sources --------------------------------------------------------- */
  'source.kind.vendor': 'Hersteller',
  'source.kind.registry': 'Register',
  'source.kind.documentation': 'Dokumentation',
  'source.kind.press': 'Presse',
  'source.kind.independent': 'Unabhängig',

  /* Alternatives ---------------------------------------------------- */
  'alt.srPrefix': 'Schweizer Alternativen zu',

  /* Home ------------------------------------------------------------ */
  'home.titleSuffix': 'Schweizer Software, Cloud-Dienste und digitale Produkte',
  'home.description':
    'Ein unabhängiges Verzeichnis für Software, Cloud-Dienste und digitale Produkte von Schweizer Unternehmen – mit transparenten Angaben zu Eigentümerschaft, Hosting und Datenstandort.',
  'home.eyebrow': 'Unabhängiges Verzeichnis · {count} Schweizer Produkte',
  'home.title1': 'Finden Sie die',
  'home.title2': 'Schweizer Alternative',
  'home.lead':
    'Software, Cloud-Dienste und digitale Produkte von Schweizer Unternehmen – mit transparenten Angaben dazu, wem sie gehören, wo sie entwickelt werden und wo Ihre Daten gehostet sind.',
  'home.specimenLabel': 'So lesen Sie einen Eintrag',
  'home.specimenTitle': '«Schweizerisch» ist nicht ein Häkchen, sondern fünf separate Fragen.',
  'home.specimenLink': 'Zur Methodik',
  'home.popularEyebrow': 'Alternativen zu',
  'home.popularTitle': 'Ersetzen, was Sie heute nutzen',
  'home.popularLead':
    'Beginnen Sie bei einem Produkt, das Sie kennen, und sehen Sie, welche Schweizer Dienste denselben Bereich abdecken.',
  'home.categoriesTitle': 'Nach Kategorie durchsuchen',
  'home.categoriesLink': 'Alle {count} Kategorien',
  'home.hostedTitle': 'In der Schweiz gehostet',
  'home.hostedLead':
    'Produkte, deren zentrale Kundendaten standardmässig in der Schweiz gehostet werden – nicht bloss ein Schweizer Unternehmen auf einer ausländischen Cloud.',
  'home.hostedLink': 'Alle {count} in der Schweiz gehosteten Produkte',
  'home.whyEyebrow': 'Warum Schweizer Anbieter?',
  'home.whyTitle': 'Weshalb Menschen nach Schweizer Anbietern suchen',
  'home.whyLead':
    'Ein Schweizer Anbieter ist nicht automatisch besser. Dies sind die praktischen Unterschiede, die es abzuwägen gilt.',
  'home.why.jurisdiction': 'Schweizer Recht',
  'home.why.jurisdiction.text':
    'Verträge nach Schweizer Recht und dem revidierten Bundesgesetz über den Datenschutz (DSG), in Kraft seit September 2023.',
  'home.why.location': 'Bekannter Datenstandort',
  'home.why.location.text':
    'Viele Schweizer Anbieter betreiben eigene Server in Schweizer Rechenzentren. Wir zeigen genau, wo – und weisen darauf hin, wenn das nicht der Fall ist.',
  'home.why.support': 'Support in der Nähe',
  'home.why.support.text':
    'Support auf Deutsch, Französisch oder Italienisch, in Ihrer Zeitzone, von Leuten, die lokale Anforderungen wie QR-Rechnungen kennen.',
  'home.why.chf': 'Abrechnung in CHF',
  'home.why.chf.text':
    'Wo angeboten: Preise in Schweizer Franken und Rechnungen mit Schweizer MWST, ohne Währungsumrechnung.',
  'home.why.economy': 'Lokale Wirtschaft',
  'home.why.economy.text':
    'Ausgaben fliessen an Unternehmen, die in der Schweiz Menschen beschäftigen und Steuern zahlen.',
  'home.why.sovereignty': 'Weniger Klumpenrisiko',
  'home.why.sovereignty.text':
    'Wer sich weniger auf einige wenige globale Plattformen stützt, ist Änderungen bei deren Preisen, Richtlinien oder beim anwendbaren Recht weniger stark ausgesetzt.',
  'home.whyNote':
    'Schweizer Anbieter unterliegen Schweizer Recht, einschliesslich der Überwachungsgesetzgebung, und manche hosten Daten im Ausland. Prüfen Sie den Fussabdruck jedes Produkts.',
  'home.ossTitle': 'Open-Source-Software aus der Schweiz',
  'home.ossLead':
    'Produkte, deren Quellcode veröffentlicht ist – vollständig oder für ihre Client-Apps.',
  'home.recentTitle': 'Zuletzt hinzugefügt',
  'home.exploreTitle': 'Alle {count} Produkte entdecken',
  'home.exploreLead':
    'Filtern Sie nach Hosting, Eigentümerschaft, Open Source, Plattform oder Kanton – und teilen Sie die genaue Ansicht per Link.',

  /* Index pages ----------------------------------------------------- */
  'products.title': 'Alle Schweizer Produkte',
  'products.heading': 'Alle Schweizer Software & Dienste',
  'products.description':
    'Durchsuchen Sie {count} Softwareprodukte und Cloud-Dienste von Schweizer Unternehmen – {hosted} davon in der Schweiz gehostet. Filter nach Hosting, Eigentümerschaft, Open Source und Plattform.',
  'products.lead':
    'Alle Produkte im Verzeichnis. Grenzen Sie die Auswahl mit den Filtern nach Hosting, Eigentümerschaft, Open Source, Zielgruppe oder Plattform ein – die URL wird angepasst, sodass Sie die Ansicht teilen können.',
  'categories.title': 'Kategorien',
  'categories.heading': 'Kategorien',
  'categories.description':
    'Schweizer Software und Cloud-Dienste in {count} Kategorien – von E-Mail und Cloud-Speicher bis zu ERP, VPN und KI.',
  'categories.lead':
    'Gruppiert nach dem, was Sie erledigen möchten. Die Zahlen zeigen, wie viele Schweizer Produkte wir verifiziert haben.',
  'categories.jump': 'Zur Gruppe springen',
  'category.related': 'Verwandte Kategorien',
  'category.metaTitle': {
    one: 'Schweizer {name} – {count} Schweizer Alternative',
    other: 'Schweizer {name} – {count} Schweizer Alternativen',
  },
  'category.heading': 'Schweizer {name}',
  'category.metaDescription': '{noun} von Schweizer Unternehmen: {count}',
  'category.metaDescriptionHosted': ', davon {count} in der Schweiz gehostet',
  'category.metaDescriptionAlternatives': '. Alternativen zu {names}',
  'category.metaDescriptionEnd': '. Eigentümerschaft, Hosting und Preise im Vergleich.',
  'category.metaDescriptionEmpty':
    'Wir haben im Bereich {noun} noch kein Schweizer Angebot verifiziert – schlagen Sie eines vor.',
  'category.emptyTitle': 'Noch keine verifizierten Schweizer Angebote: {noun}',
  'category.emptyText':
    'Wir führen Produkte erst auf, nachdem wir geprüft haben, wo das Unternehmen ansässig ist und wo die Daten gehostet werden. Kennen Sie ein Schweizer Produkt, das hierher gehört?',
  'alternatives.title': 'Schweizer Alternativen zu verbreiteter Software',
  'alternatives.heading': 'Schweizer Alternativen zu bekannten Tools',
  'alternatives.eyebrow': '{count} Produkte mit Schweizer Alternativen',
  'alternatives.description':
    'Schweizer Alternativen zu Google Workspace, Microsoft 365, AWS, Dropbox, Slack, 1Password und {count} weiteren verbreiteten Produkten.',
  'alternatives.lead':
    'Wählen Sie das Produkt, das Sie heute nutzen. Jede Seite listet Schweizer Dienste mit sich überschneidendem Funktionsumfang auf und erklärt, wie sie sich unterscheiden.',
  'alternatives.missing': 'Noch keine verifizierte Schweizer Alternative',
  'alternatives.missingLead':
    'Für diese Produkte haben wir noch kein Schweizer Produkt gefunden, das die Kriterien erfüllt. Kennen Sie eines?',
  'alt.lead':
    'Sie suchen {noun}, betrieben von einem Schweizer Unternehmen oder gehostet in der Schweiz? Diese {count} Produkte überschneiden sich mit {name}. Nicht jede Alternative ist ein Eins-zu-eins-Ersatz – prüfen Sie die Unterschiede unten.',
  'alt.leadEmpty': 'Wir haben noch kein Schweizer Produkt verifiziert, das {name} ersetzt.',
  'alt.replacing': 'Sie ersetzen',
  'alt.vendor': 'Hersteller',
  'alt.vendorCountry': 'Land des Herstellers',
  'alt.listLead':
    'Sortiert nach Schweizer Fussabdruck, dann alphabetisch. Keine Rangliste der Qualität.',
  'alt.glance': 'Auf einen Blick',
  'alt.glanceLead':
    'Die wichtigsten Fakten nebeneinander und, soweit bekannt, wie sich jedes Produkt von {name} unterscheidet.',
  'alt.colProduct': 'Produkt',
  'alt.colDiffers': 'Im Vergleich zu {name}',
  'alt.noNote': 'Noch keine Anmerkungen',
  'alt.compareAll': 'Die ersten {count} im Detail vergleichen',
  'alt.emptyTitle': 'Noch keine verifizierte Schweizer Alternative zu {name}',
  'alt.emptyText':
    'Wir führen Produkte erst auf, nachdem wir Eigentümerschaft und Hosting geprüft haben. Wenn Sie ein Schweizer Produkt kennen, das dasselbe leistet, schlagen Sie es bitte vor.',
  'alt.browseCategory': 'Kategorie «{category}» ansehen',
  'alt.related': 'Verwandte Alternativen',
  'alt.metaTitle': 'Schweizer Alternativen zu {name}',
  'alt.metaDescription': {
    one: '{count} Schweizer Alternative zu {name}: {products}. Vergleichen Sie Eigentümerschaft, Hosting in der Schweiz, Preise und Open Source.',
    other:
      '{count} Schweizer Alternativen zu {name}: {products}. Vergleichen Sie Eigentümerschaft, Hosting in der Schweiz, Preise und Open Source.',
  },
  'alt.metaDescriptionEmpty':
    'Wir haben noch keine Schweizer Alternative zu {name} verifiziert. Schlagen Sie ein Schweizer Produkt vor, das {name} ersetzt.',
  'companies.title': 'Schweizer Softwareunternehmen',
  'companies.heading': 'Unternehmen',
  'companies.description':
    '{count} Unternehmen hinter den Produkten im Verzeichnis – mit Hauptsitz, Kanton, Gründungsjahr und Eigentümerschaft.',
  'companies.lead':
    'Unternehmensangaben werden einmal erfasst und gelten für alle Produkte eines Unternehmens. Die Eigentümerschaft wird getrennt vom Hauptsitz ausgewiesen.',
  'companies.all': 'Alle Unternehmen',
  'companies.byCanton': 'Nach Kanton',
  'companies.byCantonLead':
    'Hauptsitze der aufgeführten Unternehmen in {count} Kantonen. Wählen Sie einen Kanton, um die Produkte zu filtern.',
  'company.facts': 'Fakten',
  'company.metaProducts': 'Aufgeführte Produkte: {names}.',
  'latest.title': 'Neue Einträge',
  'latest.heading': 'Neue Einträge & Aktualisierungen',
  'latest.description':
    'Kürzlich hinzugefügte Schweizer Produkte, aktualisierte Einträge und neu verifizierte Angaben.',
  'latest.lead':
    'Was sich im Verzeichnis geändert hat, das Neueste zuerst. Die Datumsangaben stammen aus den Metadaten der Einträge.',
  'latest.rss': 'RSS-Feed',
  'latest.added': 'Kürzlich hinzugefügte Produkte',
  'latest.updated': 'Kürzlich aktualisiert',
  'latest.verified': 'Kürzlich verifiziert',
  'latest.verifiedLead': 'Einträge, deren Fakten zuletzt mit ihren Quellen abgeglichen wurden.',
  'latest.categories': 'Kategorien',

  /* Compare ---------------------------------------------------------- */
  'compare.title': 'Schweizer Produkte vergleichen',
  'compare.heading': 'Vergleich',
  'compare.description':
    'Schweizer Software im direkten Vergleich: Eigentümerschaft, Hosting, Open Source, Preise und Sicherheit.',
  'compare.lead':
    'Bis zu {count} Produkte nebeneinander. Ihre Auswahl ist im Link gespeichert – kopieren Sie ihn, um diesen Vergleich zu teilen.',
  'compare.addProduct': 'Produkt hinzufügen',
  'compare.diffOnly': 'Identische Zeilen ausblenden',
  'compare.emptyTitle': 'Noch nichts zu vergleichen',
  'compare.emptyText':
    'Fügen Sie Produkte über die Vergleichen-Schaltfläche auf einer Produktkarte hinzu oder wählen Sie sie oben im Menü aus.',
  'compare.noJs': 'Diese Funktion benötigt JavaScript',
  'compare.noJsText':
    'Der Vergleich wird in Ihrem Browser erstellt. Jede Produktseite zeigt dieselben Fakten auch ohne JavaScript.',
  'compare.errorTitle': 'Der Vergleich konnte nicht geladen werden',
  'compare.errorText':
    'Bitte laden Sie die Seite neu. Wenn das Problem weiterhin besteht, geben Sie uns Bescheid.',
  'compare.retry': 'Neu laden',
  'compare.group.overview': 'Übersicht',
  'compare.group.product': 'Produkt',
  'compare.row.category': 'Kategorie',

  /* Favourites ------------------------------------------------------- */
  'fav.title': 'Favoriten',
  'fav.heading': 'Ihre Favoriten',
  'fav.eyebrow': 'Auf diesem Gerät gespeichert',
  'fav.description':
    'Von Ihnen gespeicherte Produkte – nur in Ihrem Browser abgelegt, kein Konto nötig.',
  'fav.lead':
    'Nur in diesem Browser gespeichert. Es wird nichts an uns übermittelt. Teilen Sie eine Liste per Link oder vergleichen Sie Ihre Favoriten nebeneinander.',
  'fav.compare': 'Favoriten vergleichen',
  'fav.share': 'Link zum Teilen kopieren',
  'fav.clear': 'Favoriten löschen',
  'fav.emptyTitle': 'Noch keine Favoriten',
  'fav.emptyText': 'Mit dem Herz bei einem Produkt merken Sie es sich hier für später.',
  'fav.recent': 'Zuletzt angesehen',
  'fav.recentLead': 'Die zuletzt geöffneten Produkte auf diesem Gerät.',
  'fav.recentClear': 'Verlauf löschen',
  'fav.sharedTitle': 'Eine geteilte Liste',
  'fav.sharedLead': 'Jemand hat diese Produkte mit Ihnen geteilt.',
  'fav.import': 'Alle zu meinen Favoriten hinzufügen',
  'fav.noJs': 'Favoriten werden in Ihrem Browser gespeichert und benötigen JavaScript.',

  /* Methodology ------------------------------------------------------ */
  'methodology.title': 'Methodik & Aufnahmekriterien',
  'methodology.heading': 'Wie wir entscheiden, was schweizerisch ist',
  'methodology.description':
    'Wer in das Verzeichnis aufgenommen wird, wie Produkte klassifiziert werden, was jedes Badge bedeutet und wie Fakten verifiziert werden.',

  'meth.toc.summary': 'Zusammenfassung',
  'meth.toc.criteria': 'Aufnahmekriterien',
  'meth.toc.tiers': 'Klassifizierung',
  'meth.toc.footprint': 'Schweizer Fussabdruck',
  'meth.toc.badges': 'Badges',
  'meth.toc.verification': 'Verifizierung',
  'meth.toc.ordering': 'Reihenfolge & Unabhängigkeit',
  'meth.toc.limits': 'Grenzen',
  'meth.toc.corrections': 'Korrekturen',
  'meth.col.meaning': 'Bedeutung',
  'meth.col.rule': 'Regel',
  'meth.col.listed': 'Aufgeführt',
  'meth.col.badge': 'Badge',
  'meth.rule.swiss-native':
    'Hauptsitz in der Schweiz und nach Schweizer Recht gegründet · oberste Eigentümerschaft schweizerisch (ja) · in der Schweiz entwickelt (ja oder teilweise)',
  'meth.rule.swiss-company':
    'Hauptsitz in der Schweiz und nach Schweizer Recht gegründet · Eigentümerschaft gemischt oder nicht verifiziert, oder Entwicklung hauptsächlich im Ausland',
  'meth.rule.swiss-company-foreign-parent':
    'Hauptsitz in der Schweiz und nach Schweizer Recht gegründet · oberste Eigentümerschaft ausserhalb der Schweiz',
  'meth.rule.swiss-open-source':
    'Kein Schweizer Betreiberunternehmen · Open-Source-Lizenz · hauptsächlich in der Schweiz entwickelt',
  'meth.rule.swiss-hosted-foreign':
    'Ausländisches Unternehmen · zentrale Kundendaten standardmässig in der Schweiz gehostet',
  'meth.signalRule.swiss-company': 'Hauptsitz des Unternehmens = CH und Rechtsordnung = CH',
  'meth.signalRule.swiss-owned': 'Unternehmen: ownership.swissOwned = yes',
  'meth.signalRule.swiss-developed': 'Produkt: swiss.developed = yes',
  'meth.signalRule.swiss-hosted': 'Produkt: swiss.hosted = yes',
  'meth.signalRule.swiss-residency': 'Produkt: swiss.hosted = optional oder partial',
  'meth.signalRule.swiss-infrastructure':
    'swiss.hosted = yes und Infrastrukturbetreiber in Schweizer Besitz = yes',
  'meth.signalRule.open-source': 'openSource = yes (Client und Server)',
  'meth.signalRule.self-hostable': 'Bereitstellung umfasst «Selbst gehostet» oder «On-Premises»',
  'meth.signalRule.free-plan': 'pricing.freePlan = yes',

  /* Suggest ---------------------------------------------------------- */
  'suggest.title': 'Produkt vorschlagen',
  'suggest.heading': 'Ein Schweizer Produkt vorschlagen',
  'suggest.description':
    'Kennen Sie ein Schweizer Produkt, das aufgeführt werden sollte – oder eine Korrektur? Ein Konto auf dieser Website ist nicht nötig.',
  'suggest.ways': 'Drei Möglichkeiten zum Mitwirken',
  'suggest.github': 'GitHub-Issue erstellen',
  'suggest.githubText':
    'Füllen Sie ein strukturiertes Formular auf GitHub aus. Vorschläge werden öffentlich geprüft.',
  'suggest.githubCta': 'Issue-Formular öffnen',
  'suggest.email': 'E-Mail senden',
  'suggest.emailText':
    'Lieber per E-Mail? Verwenden Sie die Vorlage – wir erstellen den Eintrag für Sie.',
  'suggest.pr': 'Pull Request einreichen',
  'suggest.prText':
    'Fügen Sie den Eintrag selbst als Markdown-Datei hinzu. Der Build prüft jede Referenz.',
  'suggest.prCta': 'Inhaltsleitfaden',
  'suggest.helper': 'Vorschlag vorbereiten',
  'suggest.helperText':
    'Füllen Sie aus, was Sie wissen. Dieses Formular sendet nichts – es bereitet ein GitHub-Issue, eine E-Mail oder eine Inhaltsdatei für Sie vor.',
  'suggest.check1':
    'Das betreibende Unternehmen hat seinen Hauptsitz in der Schweiz und ist dort eingetragen (oder siehe die übrigen Stufen).',
  'suggest.check2':
    'Sie können Quellen zu Eigentümerschaft und Hosting angeben – idealerweise die rechtlichen Seiten oder die Datenschutzerklärung des Herstellers.',
  'suggest.check3': 'Das Produkt wird der Kundschaft in der Schweiz aktiv angeboten.',
  'suggest.f.name': 'Produktname',
  'suggest.f.url': 'Website des Produkts',
  'suggest.f.company': 'Unternehmen (rechtlicher Name)',
  'suggest.f.companyHint': 'Wie im Handelsregister eingetragen, z. B. «Beispiel AG».',
  'suggest.f.city': 'Ort des Hauptsitzes',
  'suggest.f.category': 'Kategorie',
  'suggest.f.why': 'Warum es die Kriterien erfüllt',
  'suggest.f.hosting': 'Wo werden die Kundendaten gehostet?',
  'suggest.f.sources': 'Quellen',
  'suggest.f.sourcesHint':
    'Eine URL pro Zeile: Impressum, Datenschutzerklärung, Angaben zum Rechenzentrum oder zur Eigentümerschaft.',
  'suggest.openIssue': 'GitHub-Issue öffnen',
  'suggest.sendEmail': 'E-Mail verfassen',
  'suggest.copyYaml': 'Inhaltsdatei kopieren',
  'suggest.privacy': 'Von dieser Seite wird nichts gesendet. GitHub-Issues sind öffentlich.',
  'suggest.noJs': 'Ohne JavaScript verwenden Sie bitte die GitHub- oder E-Mail-Links oben.',

  /* Contact, contribute, sponsors ------------------------------------- */
  'contact.title': 'Kontakt',
  'contact.heading': 'Kontakt aufnehmen',
  'contact.description':
    'Kontakt zu Swiss Alternatives – Vorschläge, Korrekturen, Anfragen von Herstellern, Presse und Partnerschaften.',
  'contact.lead':
    'Eine Adresse für alles: Vorschläge, Korrekturen, Anfragen von Herstellern, Presse und Partnerschaften. Öffentliche Vorschläge auf GitHub sind ebenso willkommen.',
  'contact.topics': 'Wobei können wir helfen?',
  'contact.note':
    'Wir lesen alles, können aber keine individuelle Antwort versprechen. Nachrichten zu Einträgen werden wie jeder andere Beitrag behandelt: Es entscheiden die veröffentlichten Kriterien und Quellen.',
  'contact.topic.suggest.title': 'Produkt vorschlagen',
  'contact.topic.suggest.text':
    'Kennen Sie ein Schweizer Produkt, das aufgeführt werden sollte? Die Vorschlagsseite bereitet ein GitHub-Issue oder eine E-Mail mit allen nötigen Angaben vor.',
  'contact.topic.suggest.label': 'Produkt vorschlagen',
  'contact.topic.correction.title': 'Fehler melden',
  'contact.topic.correction.text':
    'Jede Produktseite hat einen Link «Fehler melden». Bitte geben Sie eine Quelle an – wir passen Einträge an, wenn die Belege dies stützen.',
  'contact.topic.correction.label': 'Korrektur melden',
  'contact.topic.vendor.title': 'Hersteller',
  'contact.topic.vendor.text':
    'Korrigieren Sie Ihren Eintrag, senden Sie ein offizielles Logo oder informieren Sie uns über Änderungen beim Hosting. Einträge sind kostenlos und können nicht gekauft werden; bitte legen Sie offen, dass Sie den Hersteller vertreten.',
  'contact.topic.vendor.label': 'E-Mail als Hersteller senden',
  'contact.topic.sponsor.title': 'Sponsoring & Partnerschaften',
  'contact.topic.sponsor.text':
    'Unterstützen Sie das Projekt, ohne es zu beeinflussen. Sponsoring hat nie Einfluss auf Aufnahme, Klassifizierung oder Reihenfolge.',
  'contact.topic.sponsor.label': 'Sponsoring-Richtlinien',
  'contact.topic.press.title': 'Presse',
  'contact.topic.press.text': 'Fragen zum Projekt, zu den Daten oder zur Methodik.',
  'contact.topic.press.label': 'E-Mail an das Team',
  'contact.topic.security.title': 'Sicherheit',
  'contact.topic.security.text':
    'Haben Sie eine Schwachstelle auf dieser Website gefunden? Bitte melden Sie sie vertraulich per E-Mail, bevor Sie sie veröffentlichen.',
  'contact.topic.security.label': 'Vertraulich melden',
  'contribute.title': 'Mitwirken',
  'contribute.heading': 'Helfen Sie beim Aufbau des Verzeichnisses',
  'contribute.description':
    'Wie Sie Produkte vorschlagen, Einträge korrigieren, Daten per Pull Request ergänzen, die Website übersetzen oder die offenen Daten weiterverwenden.',
  'contribute.lead':
    'Das Verzeichnis ist Open Source und besteht aus einfachen Textdateien. Bisher {count} Produkte – jeder neue Eintrag macht es nützlicher.',
  'contribute.repo': 'Repository auf GitHub',
  'contribute.ways': 'Möglichkeiten zum Mitwirken',
  'contribute.flowTitle': 'Von der URL zum Pull Request',
  'contribute.flowLead':
    'Mit dem Import-Helfer ist ein Eintrag in wenigen Minuten erstellt. Die Fakten zu verifizieren, dauert länger – und ist wichtiger.',
  'contribute.dataTitle': 'Offene Daten',
  'contribute.dataLead':
    'Alle Inhalte dieser Website gibt es auch als statisches JSON, bei jedem Build neu erzeugt. Weiterverwendung mit Namensnennung.',
  'contribute.license': 'Lizenz',
  'contribute.licenseText':
    'Verzeichnisdaten: CC BY 4.0 · Code: MIT · Logos und Produktnamen bleiben Marken ihrer Inhaber.',
  'contribute.way.suggest.title': 'Produkt vorschlagen',
  'contribute.way.suggest.text':
    'Kein Git nötig. Das Formular bereitet ein GitHub-Issue oder eine E-Mail vor. Geben Sie an, wo das Unternehmen eingetragen ist und wo die Daten gehostet werden.',
  'contribute.way.suggest.label': 'Produkt vorschlagen',
  'contribute.way.correct.title': 'Eintrag korrigieren',
  'contribute.way.correct.text':
    'Verwenden Sie «Fehler melden» auf einer Produktseite oder bearbeiten Sie die Datei direkt auf GitHub. Korrekturen brauchen eine Quelle.',
  'contribute.way.correct.label': 'Korrektur melden',
  'contribute.way.entries.title': 'Einträge hinzufügen oder bearbeiten',
  'contribute.way.entries.text':
    'Jedes Produkt, jedes Unternehmen und jede Kategorie ist eine kleine Textdatei. Kopieren Sie die Vorlage, füllen Sie aus, was Sie verifizieren können, und eröffnen Sie einen Pull Request. Der Build prüft jede Referenz.',
  'contribute.way.entries.label': 'Inhaltsleitfaden',
  'contribute.way.logos.title': 'Logos',
  'contribute.way.logos.text':
    'Hersteller und Mitwirkende können offizielle Logos bereitstellen (vorzugsweise SVG). Sie werden in ein einheitliches Format gebracht.',
  'contribute.way.logos.label': 'Logo-Richtlinien',
  'contribute.way.translate.title': 'Übersetzen',
  'contribute.way.translate.text':
    'Die Website ist auf Englisch und Deutsch verfügbar und für Französisch und Italienisch vorbereitet. Die Texte der Oberfläche liegen in einem Wörterbuch pro Sprache.',
  'contribute.way.translate.label': 'Übersetzungsleitfaden',
  'contribute.way.code.title': 'Code verbessern',
  'contribute.way.code.text':
    'Astro, TypeScript und reines CSS – kein Framework, minimales JavaScript. Führen Sie npm run verify aus, bevor Sie einen Pull Request eröffnen.',
  'contribute.way.code.label': 'Leitfaden für Mitwirkende',
  /* Rich text: may contain <strong>, <code> and <em>. */
  'contribute.flow.1':
    '<strong>Mit einer URL beginnen.</strong> <code>npm run new -- https://example.ch</code> liest die Website (und ein GitHub-Repository, falls angegeben) und erstellt einen Entwurf: Name, Beschreibung, Sprachen, Links zu Impressum und Datenschutzerklärung, die Nummer im Schweizer Handelsregister und den eingetragenen Sitz.',
  'contribute.flow.2':
    '<strong>Verifizieren und ergänzen.</strong> Ergänzen Sie Eigentümerschaft, Entwicklung und Hosting anhand der rechtlichen Seiten des Herstellers. Kennzeichnen Sie jede Angabe als <em>verified</em>, <em>vendor</em> oder <em>inferred</em> und verlinken Sie die Quelle. Was Sie nicht bestätigen können, belassen Sie als <em>unknown</em>.',
  'contribute.flow.3':
    '<strong>Prüfen.</strong> <code>npm run verify</code> validiert das Schema, jede Referenz und die Aufnahmekriterien und prüft die Texte mit einem Linter.',
  'contribute.flow.4':
    '<strong>Pull Request eröffnen.</strong> Ein Mitglied des Projektteams prüft die Quellen. Automatisierte Recherchehilfe lässt sich in einem Issue anfordern, indem Sie <code>@claude</code> erwähnen.',
  'contribute.endpoint.products':
    'Alle Produkte mit Unternehmen, Fussabdruck, Hosting, Preisen, Open-Source-Status und Funktionen.',
  'contribute.endpoint.directory':
    'Der vollständige Graph: Produkte, Unternehmen, Kategorien, Gruppen und die ausländischen Produkte, die sie ersetzen.',
  'contribute.endpoint.search': 'Der Suchindex, den die Website verwendet.',
  'contribute.endpoint.rss': 'RSS-Feed der neuen Einträge.',
  'sponsors.title': 'Sponsoren & Partner',
  'sponsors.heading': 'Sponsoren & Partner',
  'sponsors.description':
    'Wie Swiss Alternatives unterstützt wird – und warum Sponsoring nie Einfluss auf Einträge, Klassifizierungen oder Reihenfolge hat.',
  'sponsors.lead':
    'Sponsoren helfen, Hosting und Recherchezeit zu finanzieren. Sie erhalten keine bessere Platzierung, keine andere Klassifizierung und kein Mitspracherecht bei den Daten.',
  'sponsors.current': 'Aktuelle Sponsoren und Partner',
  'sponsors.none':
    'Es gibt noch keine Sponsoren oder Partner. Das Projekt wird unabhängig betrieben und auf eigene Kosten gehostet.',
  'sponsors.kind.sponsor': 'Sponsor',
  'sponsors.kind.partner': 'Partner',
  'sponsors.since': 'seit {date}',
  'sponsors.policy': 'Sponsoring-Richtlinien',
  'sponsors.policyLead':
    'Unabhängigkeit ist der Grund, weshalb dieses Verzeichnis nützlich ist. Diese Regeln sind nicht verhandelbar.',
  'sponsors.cta': 'Sprechen Sie uns auf Sponsoring an',

  'sponsors.rule.1.title': 'Einträge sind nicht käuflich.',
  /* Rich text: {methodology} is the methodology URL. */
  'sponsors.rule.1.text':
    'Die Aufnahme richtet sich ausschliesslich nach den veröffentlichten <a href="{methodology}">Aufnahmekriterien</a>.',
  'sponsors.rule.2.title': 'Kein Einfluss auf Daten oder Reihenfolge.',
  'sponsors.rule.2.text':
    'Sponsoren können weder Klassifizierungen noch Badges, Fakten zum Fussabdruck oder die Sortierung ändern. Korrekturen brauchen Quellen – wie bei allen anderen auch.',
  'sponsors.rule.3.title': 'Immer gekennzeichnet.',
  'sponsors.rule.3.text':
    'Sponsoren erscheinen auf dieser Seite und in der Fusszeile, als Sponsoren gekennzeichnet. Jeder gesponserte oder Affiliate-Link auf einer Produktseite wird direkt neben dem Link offengelegt.',
  'sponsors.rule.4.title': 'Kein Tracking.',
  'sponsors.rule.4.text':
    'Sponsoring fügt der Website nie Cookies, Tracker oder Skripte von Dritten hinzu.',
  'sponsors.rule.5.title': 'Öffentlich dokumentiert.',
  'sponsors.rule.5.text':
    'Sponsoren und Partner werden hier mit Datum und Art der Unterstützung aufgeführt.',
  /* 404 ---------------------------------------------------------------- */
  'notFound.title': 'Diese Seite ist nicht im Verzeichnis',
  'notFound.text':
    'Der Link ist möglicherweise veraltet, oder der Eintrag wurde verschoben. Versuchen Sie es stattdessen mit der Suche.',

  /* Footer ---------------------------------------------------------- */
  'footer.mission':
    'Ein unabhängiges, offenes Verzeichnis von Schweizer Software und Cloud-Diensten – mit transparenten Angaben zu Eigentümerschaft, Hosting und Datenstandort.',
  'footer.explore': 'Entdecken',
  'footer.project': 'Projekt',
  'footer.legal': 'Rechtliches',
  'footer.connect': 'Kanäle',
  'footer.rss': 'RSS-Feed',
  'footer.privacy': 'Datenschutz',
  'footer.imprint': 'Impressum',
  'imprint.operator': 'Betreiber',
  'imprint.email': 'E-Mail',
  'footer.source': 'Quellcode auf GitHub',
  'footer.noTracking': 'Keine Cookies. Keine Tracker.',
  'footer.hosting': 'Gehostet bei Cloudflare – warum?',
  'footer.disclaimer':
    'Angaben ohne Gewähr. Produktnamen, Logos und Marken gehören ihren Inhabern und werden nur zur Kennzeichnung ihrer Produkte verwendet; damit ist weder eine Verbindung noch eine Empfehlung impliziert.',
  'footer.dataAsOf': 'Datenstand: {date}',
};
