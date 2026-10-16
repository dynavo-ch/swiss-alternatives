/**
 * English UI dictionary — the reference for all other locales.
 *
 * Keys are flat and dot-separated. Values may contain `{placeholders}`.
 * Plural-sensitive values are objects keyed by Intl.PluralRules categories.
 */
export const en = {
  /* Navigation ------------------------------------------------------ */
  'nav.main': 'Main',
  'nav.explore': 'Explore',
  'nav.products': 'All products',
  'nav.categories': 'Categories',
  'nav.alternatives': 'Alternatives',
  'nav.companies': 'Companies',
  'nav.latest': 'Latest',
  'nav.about': 'About',
  'nav.methodology': 'Methodology',
  'nav.suggest': 'Suggest a product',
  'nav.favourites': 'Favourites',
  'nav.compare': 'Compare',
  'nav.contact': 'Contact',
  'nav.contribute': 'Contribute',
  'nav.sponsors': 'Sponsors & partners',
  'nav.menu': 'Menu',
  'nav.closeMenu': 'Close menu',
  'nav.skip': 'Skip to content',
  'nav.home': 'Home',
  'nav.breadcrumbs': 'Breadcrumb',
  'nav.onThisPage': 'On this page',

  /* Search ---------------------------------------------------------- */
  'search.label': 'Search the directory',
  'search.placeholder': 'Search for Gmail, cloud hosting, password managers…',
  'search.placeholderShort': 'Search…',
  'search.open': 'Search',
  'search.close': 'Close search',
  'search.loading': 'Loading index…',
  'search.empty': 'No matches for “{query}”.',
  'search.emptyHint': 'Try a product name such as “Dropbox”, or a category such as “email”.',
  'search.suggestLink': 'Suggest a product',
  'search.type.alternative': 'Alternative to',
  'search.type.product': 'Product',
  'search.type.category': 'Category',
  'search.type.company': 'Company',
  'search.group.alternative': 'Swiss alternatives to',
  'search.group.product': 'Products',
  'search.group.category': 'Categories',
  'search.group.company': 'Companies',
  'search.hint.navigate': 'navigate',
  'search.hint.open': 'open',
  'search.hint.close': 'close',
  'search.tryLabel': 'Try',
  'search.results': { one: '{count} result', other: '{count} results' },
  'search.page.title': 'Search & index',
  'search.page.description':
    'Search every Swiss product, category, company and foreign product in the directory — or browse the full A–Z index.',
  'search.page.index': 'A–Z index',

  /* Counts ---------------------------------------------------------- */
  'count.products': { one: '{count} product', other: '{count} products' },
  'count.swissAlternatives': {
    one: '{count} Swiss alternative',
    other: '{count} Swiss alternatives',
  },
  'count.categories': { one: '{count} category', other: '{count} categories' },
  'count.companies': { one: '{count} company', other: '{count} companies' },

  /* Theme ----------------------------------------------------------- */
  'theme.toggle': 'Switch colour theme',
  'theme.light': 'Light',
  'theme.dark': 'Dark',

  /* Generic --------------------------------------------------------- */
  'common.viewProduct': 'View product',
  'common.viewAll': 'View all',
  'common.visitWebsite': 'Visit website',
  'common.website': 'Website',
  'common.new': 'New',
  'common.updated': 'Updated',
  'common.added': 'Added',
  'common.since': 'since {year}',
  'common.founded': 'Founded',
  'common.unknown': 'Unknown',
  'common.notVerified': 'Not verified',
  'common.none': 'None listed',
  'common.and': 'and',
  'common.more': '+{count} more',
  'common.learnMore': 'Learn more',
  'common.copyLink': 'Copy link',
  'common.linkCopied': 'Link copied',
  'common.copied': 'Copied to clipboard',
  'common.externalLink': '(opens external site)',
  'common.discontinued': 'Discontinued',
  'common.beta': 'Beta',
  'common.sponsored': 'Sponsored',
  'common.affiliate': 'Affiliate link',
  'common.lastVerified': 'Last verified',
  'common.random': 'Discover something Swiss',
  'common.randomShort': 'Random product',

  /* Badges (signals) ------------------------------------------------ */
  'signal.swiss-company': 'Swiss Company',
  'signal.swiss-company.desc':
    'The operating company is headquartered and legally incorporated in Switzerland.',
  'signal.swiss-owned': 'Swiss Owned',
  'signal.swiss-owned.desc':
    'The ultimate controlling owner is Swiss (Swiss persons, companies, foundations or public bodies).',
  'signal.swiss-developed': 'Swiss Developed',
  'signal.swiss-developed.desc':
    'The product is primarily developed by a team operating from Switzerland.',
  'signal.swiss-hosted': 'Hosted in Switzerland',
  'signal.swiss-hosted.desc':
    'Core customer data and workloads are hosted in Switzerland by default.',
  'signal.swiss-residency': 'Swiss Data Option',
  'signal.swiss-residency.desc':
    'Swiss hosting is available as an option or for part of the service, but is not the default for everything.',
  'signal.swiss-infrastructure': 'Swiss Infrastructure',
  'signal.swiss-infrastructure.desc':
    'Hosted in Switzerland on infrastructure operated by a Swiss-owned provider (or the company itself) — not a foreign hyperscaler.',
  'signal.open-source': 'Open Source',
  'signal.open-source.desc':
    'The product’s source code is published under an open-source licence (client and server).',
  'signal.self-hostable': 'Self-hostable',
  'signal.self-hostable.desc': 'Can be installed on your own servers or on-premises.',
  'signal.free-plan': 'Free Plan',
  'signal.free-plan.desc': 'A permanently free plan is available (not just a trial).',

  /* Classification -------------------------------------------------- */
  'class.label': 'Classification',
  'class.swiss-native': 'Swiss native',
  'class.swiss-native.desc':
    'Swiss-headquartered, Swiss-owned company; product developed (wholly or largely) in Switzerland.',
  'class.swiss-company': 'Swiss company',
  'class.swiss-company.desc':
    'Swiss-headquartered company. Ownership is mixed or not fully verified, or development happens mainly abroad.',
  'class.swiss-company-foreign-parent': 'Swiss company · foreign parent',
  'class.swiss-company-foreign-parent.desc':
    'Headquartered in Switzerland, but ultimately controlled by a company outside Switzerland.',
  'class.swiss-open-source': 'Swiss-developed open source',
  'class.swiss-open-source.desc':
    'Open-source project developed primarily in Switzerland, without a Swiss-headquartered operating company.',
  'class.swiss-hosted-foreign': 'Swiss-hosted · foreign company',
  'class.swiss-hosted-foreign.desc':
    'Foreign company whose service is hosted in Switzerland. Listed for data residency only — not a Swiss company.',

  /* Footprint ------------------------------------------------------- */
  'footprint.title': 'Swiss footprint',
  'footprint.lead':
    'Five independent questions. A Swiss company is not automatically Swiss-hosted — and vice versa.',
  'footprint.headquarters': 'Headquarters',
  'footprint.ownership': 'Ownership',
  'footprint.development': 'Development',
  'footprint.hosting': 'Hosting',
  'footprint.infrastructure': 'Infrastructure',
  'footprint.headquarters.q': 'Is the operating company headquartered in Switzerland?',
  'footprint.ownership.q': 'Is the company ultimately Swiss-owned?',
  'footprint.development.q': 'Is the product developed in Switzerland?',
  'footprint.hosting.q': 'Is customer data hosted in Switzerland?',
  'footprint.infrastructure.q': 'Is the hosting infrastructure operated by a Swiss-owned provider?',
  'footprint.aria': 'Swiss footprint: {summary}',
  'footprint.legend': 'Legend',
  'footprint.howAssessed': 'How the footprint is assessed',

  /* Fact states ----------------------------------------------------- */
  'state.yes': 'Yes',
  'state.no': 'No',
  'state.partial': 'Partly',
  'state.optional': 'Optional',
  'state.unknown': 'Unknown / not verified',
  'state.unknownShort': 'Unknown',

  /* Provenance ------------------------------------------------------ */
  'basis.verified': 'Verified',
  'basis.verified.desc':
    'Confirmed by an independent or official source such as the commercial register.',
  'basis.vendor': 'Vendor claim',
  'basis.vendor.desc': 'Stated by the vendor in its own documentation, website or legal terms.',
  'basis.inferred': 'Inferred',
  'basis.inferred.desc': 'Derived by the editors from indirect evidence — see the note.',
  'basis.none': 'Not specified',
  'basis.source': 'Source',

  /* Product attributes --------------------------------------------- */
  'audience.consumer': 'Consumers',
  'audience.business': 'Business',
  'audience.enterprise': 'Enterprise',
  'audience.public-sector': 'Public sector',
  'audience.developer': 'Developers',
  'deployment.saas': 'Cloud (SaaS)',
  'deployment.self-hosted': 'Self-hosted',
  'deployment.on-premises': 'On-premises',
  'deployment.managed': 'Managed service',
  'platform.web': 'Web',
  'platform.windows': 'Windows',
  'platform.macos': 'macOS',
  'platform.linux': 'Linux',
  'platform.ios': 'iOS',
  'platform.android': 'Android',
  'platform.browser-extension': 'Browser extension',
  'platform.cli': 'CLI',
  'platform.api': 'API',
  'feature.e2ee': 'End-to-end encryption',
  'feature.encryptionAtRest': 'Encryption at rest',
  'feature.encryptionInTransit': 'Encryption in transit',
  'feature.mfa': 'Multi-factor authentication',
  'feature.sso': 'Single sign-on (SAML/OIDC)',
  'feature.scim': 'SCIM provisioning',
  'feature.api': 'Public API',
  'feature.dataExport': 'Data export',
  'pricing.model.free': 'Free',
  'pricing.model.freemium': 'Freemium',
  'pricing.model.subscription': 'Subscription',
  'pricing.model.usage-based': 'Usage-based',
  'pricing.model.one-time': 'One-time purchase',
  'pricing.model.quote': 'On request',
  'pricing.model.donation': 'Donation-funded',
  'pricing.period.month': 'month',
  'pricing.period.year': 'year',
  'pricing.period.one-time': 'one-time',
  'pricing.period.hour': 'hour',
  'pricing.period.usage': 'usage-based',
  'pricing.model': 'Pricing model',
  'pricing.tier': 'Pricing',
  'pricing.tier.free': 'Free',
  'pricing.tier.freemium': 'Freemium',
  'pricing.tier.paid': 'Paid',
  'pricing.tier.unknown': 'Unknown',
  'oss.yes': 'Yes',
  'oss.partial': 'Partly (e.g. apps)',
  'oss.no': 'No',
  'oss.unknown': 'Unknown',
  'license.osi': 'OSI-approved licence',
  'license.sourceAvailable': 'Source-available, not open source',
  'repo.github': 'GitHub',
  'repo.stars': 'stars',
  'repo.forks': 'forks',
  'repo.archived': 'Archived',
  'repo.publicRepos': 'public repositories',
  'repo.lastPush': 'last commit',
  'repo.fetched': 'Statistics from GitHub, fetched {date}.',
  'pricing.startingAt': 'Paid plans from',
  'pricing.freePlan': 'Free plan',
  'pricing.freeTrial': 'Free trial',
  'pricing.enterprise': 'Enterprise plan',
  'pricing.chfBilling': 'Billing in CHF',
  'pricing.checked': 'Prices checked {date}. Always confirm on the vendor’s site.',
  'pricing.page': 'Pricing page',
  'company.type.company': 'Company',
  'company.type.foundation': 'Foundation',
  'company.type.association': 'Association',
  'company.type.cooperative': 'Cooperative',
  'company.type.public-institution': 'Public institution',

  /* Product page ---------------------------------------------------- */
  'product.overview': 'Overview',
  'product.atAGlance': 'At a glance',
  'product.whySwiss': 'Why it may be a Swiss alternative',
  'product.metaTitle': '{name} — Swiss {noun}',
  'product.metaDescription': '{description} A Swiss alternative to {alternatives}.',
  'product.operatedBySwiss':
    '{product} is operated by {company}, which is headquartered in {place}.',
  'product.operatedBy': '{product} is operated by {company}, which is headquartered in {place}.',
  'product.why.hosted':
    'According to the information we found, core customer data is hosted in Switzerland.',
  'product.why.residency':
    'Swiss hosting is available for part of the service or as an option — check the hosting details below before relying on it.',
  'product.why.notePrefix': 'Note:',
  'product.why.notHosted':
    'although the company is Swiss, customer data is not hosted in Switzerland.',
  'product.why.unknown': 'We could not verify where customer data is hosted.',
  'product.englishOnly': 'The detailed description is available in English only.',
  'product.replaces': 'May replace',
  'product.replacesLead':
    'Foreign products with overlapping functionality. An alternative is not necessarily a one-to-one replacement.',
  'product.footprint': 'Swiss footprint',
  'product.hosting': 'Hosting & infrastructure',
  'product.dataLocations': 'Customer data stored in',
  'product.infraProvider': 'Infrastructure operator',
  'product.infraType': 'Infrastructure type',
  'product.infraType.self-operated': 'Self-operated',
  'product.infraType.colocation': 'Own hardware in colocation',
  'product.infraType.public-cloud': 'Public cloud',
  'product.infraType.mixed': 'Mixed',
  'product.infraType.unknown': 'Unknown',
  'product.facility': 'Data-centre facility',
  'product.features': 'Features & platforms',
  'product.platforms': 'Platforms',
  'product.deployment': 'Deployment',
  'product.audience': 'Made for',
  'product.languages': 'Interface languages',
  'product.supportLanguages': 'Support languages',
  'product.security': 'Privacy & security',
  'product.certifications': 'Certifications',
  'product.pricing': 'Pricing',
  'product.openSource': 'Open source',
  'product.license': 'Licence',
  'product.repository': 'Source code',
  'product.sustainability': 'Sustainability',
  'product.company': 'Company',
  'product.similar': 'Similar Swiss products',
  'product.sources': 'Sources & verification',
  'product.sourcesLead':
    'Every claim on this page is marked as verified, vendor claim or inferred. Unknown means we could not confirm it — not that the answer is “no”.',
  'product.reportIssue': 'Report an error',
  'product.editEntry': 'Edit this entry',
  'product.alsoFrom': 'More from {company}',
  'product.status.discontinued': 'This product has been discontinued.',
  'product.status.beta': 'This product is in beta.',
  'product.launched': 'Launched',
  'product.categories': 'Categories',

  /* Company --------------------------------------------------------- */
  'company.headquarters': 'Headquarters',
  'company.canton': 'Canton',
  'company.jurisdiction': 'Legal jurisdiction',
  'company.ownership': 'Ownership',
  'company.parent': 'Controlling owner',
  'company.swissFounded': 'Founded in Switzerland',
  'company.registry': 'Commercial register',
  'company.products': 'Products',
  'company.type': 'Organisation type',
  'company.labels': 'Labels',
  'company.labelsNote':
    'Third-party labels awarded by their label organisations on their own criteria. Listed for information; not verified by us.',
  'label.swiss-made-software': 'swiss made software',
  'label.swiss-hosting': 'swiss hosting',

  /* Actions --------------------------------------------------------- */
  'fav.add': 'Save to favourites',
  'fav.remove': 'Remove from favourites',
  'compare.add': 'Add to comparison',
  'compare.remove': 'Remove from comparison',
  'compare.limit': 'You can compare up to {count} products.',
  'compare.tray': 'Comparison',
  'compare.cta': 'Compare',
  'compare.clear': 'Clear',

  /* Filters --------------------------------------------------------- */
  'filter.label': 'Filters',
  'filter.more': 'More filters',
  'filter.clear': 'Clear all',
  'filter.apply': 'Show {count} results',
  'filter.close': 'Close filters',
  'filter.showing': 'Showing {shown} of {total}',
  'filter.noResults': 'No products match these filters.',
  'filter.noResultsHint': 'Remove a filter to see more results.',
  'filter.share': 'Copy link to this view',
  'filter.search': 'Filter by name',
  'filter.group.company': 'Company',
  'filter.group.infrastructure': 'Hosting & infrastructure',
  'filter.group.product': 'Product',
  'filter.group.audience': 'Audience',
  'filter.group.platform': 'Platforms',
  'filter.group.classification': 'Classification',
  'filter.group.canton': 'Canton',
  'filter.group.category': 'Category',
  'filter.group.pricing': 'Pricing',
  'filter.saas': 'Cloud (SaaS)',
  'filter.ossPartial': 'Partly open source (e.g. apps)',
  'filter.freeTrial': 'Free trial',
  'filter.enterprise': 'Enterprise plan',
  'sort.label': 'Sort',
  'sort.name': 'A–Z',
  'sort.added': 'Recently added',
  'sort.footprint': 'Swiss footprint',
  'sort.verified': 'Recently verified',

  /* Statistics ------------------------------------------------------ */
  'stats.products': 'Swiss products',
  'stats.companies': 'Companies',
  'stats.categories': 'Categories',
  'stats.swissHosted': 'Hosted in Switzerland',
  'stats.openSource': 'Open source',
  'stats.cantons': 'Cantons',

  /* Sources --------------------------------------------------------- */
  'source.kind.vendor': 'Vendor',
  'source.kind.registry': 'Registry',
  'source.kind.documentation': 'Documentation',
  'source.kind.press': 'Press',
  'source.kind.independent': 'Independent',

  /* Alternatives ---------------------------------------------------- */
  'alt.srPrefix': 'Swiss alternatives to',

  /* Home ------------------------------------------------------------ */
  'home.titleSuffix': 'Swiss software, cloud services and digital products',
  'home.description':
    'An independent directory of software, cloud services and digital products from Swiss companies — with transparent information about ownership, hosting and data residency.',
  'home.eyebrow': 'Independent directory · {count} Swiss products',
  'home.title1': 'Find the',
  'home.title2': 'Swiss alternative',
  'home.lead':
    'Software, cloud services and digital products from Swiss companies — with transparent information about who owns them, where they are built and where your data is hosted.',
  'home.specimenLabel': 'How to read an entry',
  'home.specimenTitle': '“Swiss” is five separate questions, not one checkbox.',
  'home.specimenLink': 'Read the methodology',
  'home.popularEyebrow': 'Alternatives to',
  'home.popularTitle': 'Replace what you use today',
  'home.popularLead':
    'Start from a product you know and see which Swiss services cover the same ground.',
  'home.categoriesTitle': 'Browse by category',
  'home.categoriesLink': 'All {count} categories',
  'home.hostedTitle': 'Hosted in Switzerland',
  'home.hostedLead':
    'Products whose core customer data is hosted in Switzerland by default — not just a Swiss company on a foreign cloud.',
  'home.hostedLink': 'All {count} Swiss-hosted products',
  'home.whyEyebrow': 'Why Swiss?',
  'home.whyTitle': 'Reasons people look for Swiss providers',
  'home.whyLead':
    'A Swiss provider is not automatically better. These are the practical differences worth weighing.',
  'home.why.jurisdiction': 'Swiss jurisdiction',
  'home.why.jurisdiction.text':
    'Contracts under Swiss law and the revised Federal Act on Data Protection (FADP), in force since September 2023.',
  'home.why.location': 'Known data location',
  'home.why.location.text':
    'Many Swiss providers run their own servers in Swiss data centres. We show exactly where — and say so when they don’t.',
  'home.why.support': 'Support nearby',
  'home.why.support.text':
    'Support in German, French or Italian, in your time zone, from people who know local requirements such as QR-bills.',
  'home.why.chf': 'Billing in CHF',
  'home.why.chf.text':
    'Where offered: prices in Swiss francs and Swiss VAT invoices, without currency conversion.',
  'home.why.economy': 'Local economy',
  'home.why.economy.text':
    'Spending goes to companies that employ people and pay taxes in Switzerland.',
  'home.why.sovereignty': 'Fewer single points of dependence',
  'home.why.sovereignty.text':
    'Diversifying away from a few global platforms reduces exposure to changes in their pricing, policies or applicable law.',
  'home.whyNote':
    'Swiss providers are subject to Swiss law, including surveillance legislation, and some host data abroad. Check the footprint of each product.',
  'home.ossTitle': 'Open-source Swiss software',
  'home.ossLead': 'Products whose source code is published — fully, or for their client apps.',
  'home.recentTitle': 'Recently added',
  'home.exploreTitle': 'Explore all {count} products',
  'home.exploreLead':
    'Filter by hosting, ownership, open source, platform or canton — and share the exact view by link.',

  /* Index pages ----------------------------------------------------- */
  'products.title': 'All Swiss products',
  'products.heading': 'All Swiss software & services',
  'products.description':
    'Browse {count} software products and cloud services from Swiss companies — {hosted} hosted in Switzerland. Filter by hosting, ownership, open source and platform.',
  'products.lead':
    'Every product in the directory. Use the filters to narrow down by hosting, ownership, open source, audience or platform — the URL updates so you can share the view.',
  'categories.title': 'Categories',
  'categories.heading': 'Categories',
  'categories.description':
    'Swiss software and cloud services in {count} categories — from email and cloud storage to ERP, VPNs and AI.',
  'categories.lead':
    'Grouped by what you need to get done. Numbers show how many Swiss products we have verified.',
  'categories.jump': 'Jump to group',
  'category.related': 'Related categories',
  'category.metaTitle': {
    one: 'Swiss {name} — {count} Swiss alternative',
    other: 'Swiss {name} — {count} Swiss alternatives',
  },
  'category.heading': 'Swiss {name}',
  'category.metaDescription': '{count} {noun} from Swiss companies',
  'category.metaDescriptionHosted': ', {count} hosted in Switzerland',
  'category.metaDescriptionAlternatives': '. Alternatives to {names}',
  'category.metaDescriptionEnd': '. Ownership, hosting and pricing compared.',
  'category.metaDescriptionEmpty': 'We have not yet verified a Swiss {noun} — suggest one.',
  'category.emptyTitle': 'No verified Swiss {noun} yet',
  'category.emptyText':
    'We only list products after checking where the company is based and where data is hosted. Know a Swiss product that belongs here?',
  'alternatives.title': 'Swiss alternatives to popular software',
  'alternatives.heading': 'Swiss alternatives to the tools you know',
  'alternatives.eyebrow': '{count} products with Swiss alternatives',
  'alternatives.description':
    'Swiss alternatives to Google Workspace, Microsoft 365, AWS, Dropbox, Slack, 1Password and {count} other popular products.',
  'alternatives.lead':
    'Pick the product you use today. Each page lists Swiss services with overlapping functionality and explains how they differ.',
  'alternatives.missing': 'No verified Swiss alternative yet',
  'alternatives.missingLead':
    'We have not yet found a Swiss product that qualifies for these. Know one?',
  'alt.lead':
    'Looking for {noun} operated by a Swiss company or hosted in Switzerland? These {count} products overlap with {name}. Not every alternative is a one-to-one replacement — check the differences below.',
  'alt.leadEmpty': 'We have not yet verified a Swiss product that replaces {name}.',
  'alt.replacing': 'You are replacing',
  'alt.vendor': 'Vendor',
  'alt.vendorCountry': 'Vendor country',
  'alt.listLead': 'Ordered by Swiss footprint, then alphabetically. Not a ranking of quality.',
  'alt.glance': 'At a glance',
  'alt.glanceLead':
    'Key facts side by side, and where we know them, how each product differs from {name}.',
  'alt.colProduct': 'Product',
  'alt.colDiffers': 'Compared with {name}',
  'alt.noNote': 'No notes yet',
  'alt.compareAll': 'Compare top {count} in detail',
  'alt.emptyTitle': 'No verified Swiss alternative to {name} yet',
  'alt.emptyText':
    'We list products only after checking ownership and hosting. If you know a Swiss product that does what this one does, please suggest it.',
  'alt.browseCategory': 'Browse {category}',
  'alt.related': 'Related alternatives',
  'alt.metaTitle': 'Swiss alternatives to {name}',
  'alt.metaDescription': {
    one: '{count} Swiss alternative to {name}: {products}. Compare ownership, hosting in Switzerland, pricing and open source.',
    other:
      '{count} Swiss alternatives to {name}: {products}. Compare ownership, hosting in Switzerland, pricing and open source.',
  },
  'alt.metaDescriptionEmpty':
    'We have not yet verified a Swiss alternative to {name}. Suggest a Swiss product that replaces it.',
  'companies.title': 'Swiss software companies',
  'companies.heading': 'Companies',
  'companies.description':
    '{count} companies behind the products in the directory — with headquarters, canton, founding year and ownership.',
  'companies.lead':
    'Company facts are recorded once and shared by all of a company’s products. Ownership is shown separately from headquarters.',
  'companies.all': 'All companies',
  'companies.byCanton': 'By canton',
  'companies.byCantonLead':
    'Headquarters of listed companies across {count} cantons. Select a canton to filter products.',
  'company.facts': 'Facts',
  'company.metaProducts': 'Products listed: {names}.',
  'latest.title': 'Latest additions',
  'latest.heading': 'Latest additions & updates',
  'latest.description':
    'Recently added Swiss products, updated entries and newly verified information.',
  'latest.lead':
    'What changed in the directory, newest first. Dates come from each entry’s metadata.',
  'latest.rss': 'RSS feed',
  'latest.added': 'Recently added products',
  'latest.updated': 'Recently updated',
  'latest.verified': 'Recently verified',
  'latest.verifiedLead': 'Entries whose facts were most recently checked against their sources.',
  'latest.categories': 'Categories',

  /* Compare ---------------------------------------------------------- */
  'compare.title': 'Compare Swiss products',
  'compare.heading': 'Compare',
  'compare.description':
    'Compare Swiss software side by side: ownership, hosting, open source, pricing and security.',
  'compare.lead':
    'Up to {count} products side by side. Your selection is stored in the link — copy it to share this comparison.',
  'compare.addProduct': 'Add a product',
  'compare.diffOnly': 'Hide identical rows',
  'compare.emptyTitle': 'Nothing to compare yet',
  'compare.emptyText':
    'Add products with the compare button on any product card, or pick them from the menu above.',
  'compare.noJs': 'This feature needs JavaScript',
  'compare.noJsText':
    'The comparison is built in your browser. Every product page lists the same facts without JavaScript.',
  'compare.errorTitle': 'The comparison could not be loaded',
  'compare.errorText': 'Please reload the page. If the problem persists, let us know.',
  'compare.retry': 'Reload',
  'compare.group.overview': 'Overview',
  'compare.group.product': 'Product',
  'compare.row.category': 'Category',

  /* Favourites ------------------------------------------------------- */
  'fav.title': 'Favourites',
  'fav.heading': 'Your favourites',
  'fav.eyebrow': 'Stored on this device',
  'fav.description': 'Products you saved — stored only in your browser, no account needed.',
  'fav.lead':
    'Saved in this browser only. Nothing is sent to us. Share a list by link, or compare your favourites side by side.',
  'fav.compare': 'Compare favourites',
  'fav.share': 'Copy share link',
  'fav.clear': 'Clear favourites',
  'fav.emptyTitle': 'No favourites yet',
  'fav.emptyText': 'Use the heart on any product to keep it here for later.',
  'fav.recent': 'Recently viewed',
  'fav.recentLead': 'The last products you opened on this device.',
  'fav.recentClear': 'Clear history',
  'fav.sharedTitle': 'A shared list',
  'fav.sharedLead': 'Someone shared these products with you.',
  'fav.import': 'Save all to my favourites',
  'fav.noJs': 'Favourites are stored in your browser and need JavaScript.',

  /* Methodology ------------------------------------------------------ */
  'methodology.title': 'Methodology & listing criteria',
  'methodology.heading': 'How we decide what is Swiss',
  'methodology.description':
    'Who qualifies for the directory, how products are classified, what every badge means and how facts are verified.',

  'meth.toc.summary': 'Summary',
  'meth.toc.criteria': 'Who qualifies',
  'meth.toc.tiers': 'Classification',
  'meth.toc.footprint': 'Swiss footprint',
  'meth.toc.badges': 'Badges',
  'meth.toc.verification': 'Verification',
  'meth.toc.ordering': 'Ordering & independence',
  'meth.toc.limits': 'Limitations',
  'meth.toc.corrections': 'Corrections',
  'meth.col.meaning': 'Meaning',
  'meth.col.rule': 'Rule',
  'meth.col.listed': 'Listed',
  'meth.col.badge': 'Badge',
  'meth.rule.swiss-native':
    'Swiss headquarters and incorporation · Swiss ultimate owner (yes) · developed in Switzerland (yes or partly)',
  'meth.rule.swiss-company':
    'Swiss headquarters and incorporation · ownership mixed or unverified, or development mainly abroad',
  'meth.rule.swiss-company-foreign-parent':
    'Swiss headquarters and incorporation · ultimate owner outside Switzerland',
  'meth.rule.swiss-open-source':
    'No Swiss operating company · open-source licence · primarily developed in Switzerland',
  'meth.rule.swiss-hosted-foreign':
    'Foreign company · core customer data hosted in Switzerland by default',
  'meth.signalRule.swiss-company': 'Company headquarters = CH and legal jurisdiction = CH',
  'meth.signalRule.swiss-owned': 'Company ownership.swissOwned = yes',
  'meth.signalRule.swiss-developed': 'Product swiss.developed = yes',
  'meth.signalRule.swiss-hosted': 'Product swiss.hosted = yes',
  'meth.signalRule.swiss-residency': 'Product swiss.hosted = optional or partial',
  'meth.signalRule.swiss-infrastructure':
    'swiss.hosted = yes and infrastructure operator Swiss-owned = yes',
  'meth.signalRule.open-source': 'openSource = yes (client and server)',
  'meth.signalRule.self-hostable': 'Deployment includes self-hosted or on-premises',
  'meth.signalRule.free-plan': 'pricing.freePlan = yes',

  /* Suggest ---------------------------------------------------------- */
  'suggest.title': 'Suggest a product',
  'suggest.heading': 'Suggest a Swiss product',
  'suggest.description':
    'Know a Swiss product that should be listed — or a correction? No account on this site is needed.',
  'suggest.ways': 'Three ways to contribute',
  'suggest.github': 'Open a GitHub issue',
  'suggest.githubText': 'Fill in a structured form on GitHub. Suggestions are reviewed in public.',
  'suggest.githubCta': 'Open issue form',
  'suggest.email': 'Send an email',
  'suggest.emailText': 'Prefer email? Use the template — we will create the entry for you.',
  'suggest.pr': 'Submit a pull request',
  'suggest.prText':
    'Add the entry yourself as a Markdown file. The build validates every reference.',
  'suggest.prCta': 'Content guide',
  'suggest.helper': 'Prepare your suggestion',
  'suggest.helperText':
    'Fill in what you know. This form does not send anything — it prepares a GitHub issue, an email or a content file for you.',
  'suggest.check1':
    'The operating company is headquartered and registered in Switzerland (or see the other tiers).',
  'suggest.check2':
    'You can point to sources for ownership and hosting — ideally the vendor’s legal or privacy pages.',
  'suggest.check3': 'The product is actively offered to customers in Switzerland.',
  'suggest.f.name': 'Product name',
  'suggest.f.url': 'Product website',
  'suggest.f.company': 'Company (legal name)',
  'suggest.f.companyHint': 'As listed in the commercial register, e.g. “Example AG”.',
  'suggest.f.city': 'Headquarters city',
  'suggest.f.category': 'Category',
  'suggest.f.why': 'Why it qualifies',
  'suggest.f.hosting': 'Where is customer data hosted?',
  'suggest.f.sources': 'Sources',
  'suggest.f.sourcesHint':
    'One URL per line: imprint, privacy policy, data-centre or ownership information.',
  'suggest.openIssue': 'Open GitHub issue',
  'suggest.sendEmail': 'Write email',
  'suggest.copyYaml': 'Copy content file',
  'suggest.privacy': 'Nothing is sent from this page. GitHub issues are public.',
  'suggest.noJs': 'Without JavaScript, please use the GitHub or email links above.',

  /* Contact, contribute, sponsors ------------------------------------- */
  'contact.title': 'Contact',
  'contact.heading': 'Get in touch',
  'contact.description':
    'Contact Swiss Alternatives — suggestions, corrections, vendor requests, press and partnerships.',
  'contact.lead':
    'One mailbox for everything: suggestions, corrections, vendor requests, press and partnerships. Public suggestions on GitHub are just as welcome.',
  'contact.topics': 'What can we help with?',
  'contact.note':
    'We read everything but cannot promise individual replies. Messages about listings are handled like any contribution: the published criteria and sources decide.',
  'contact.topic.suggest.title': 'Suggest a product',
  'contact.topic.suggest.text':
    'Know a Swiss product that should be listed? The suggestion page prepares a GitHub issue or an email with everything we need.',
  'contact.topic.suggest.label': 'Suggest a product',
  'contact.topic.correction.title': 'Report an error',
  'contact.topic.correction.text':
    'Every product page has a “Report an error” link. Please include a source — we update entries when the evidence supports it.',
  'contact.topic.correction.label': 'Open a correction',
  'contact.topic.vendor.title': 'Vendors',
  'contact.topic.vendor.text':
    'Correct your listing, send an official logo or tell us about hosting changes. Listings are free and cannot be bought; please disclose that you represent the vendor.',
  'contact.topic.vendor.label': 'Email us as a vendor',
  'contact.topic.sponsor.title': 'Sponsorship & partnerships',
  'contact.topic.sponsor.text':
    'Support the project without influencing it. Sponsorship never affects inclusion, classification or ordering.',
  'contact.topic.sponsor.label': 'Sponsorship policy',
  'contact.topic.press.title': 'Press',
  'contact.topic.press.text': 'Questions about the project, the data or the methodology.',
  'contact.topic.press.label': 'Email the team',
  'contact.topic.security.title': 'Security',
  'contact.topic.security.text':
    'Found a vulnerability in this website? Please report it privately by email before disclosing it.',
  'contact.topic.security.label': 'Report privately',
  'contribute.title': 'Contribute',
  'contribute.heading': 'Help build the directory',
  'contribute.description':
    'How to suggest products, correct entries, add data through pull requests, translate the site or reuse the open data.',
  'contribute.lead':
    'The directory is open source and lives in plain text files. {count} products so far — every addition makes it more useful.',
  'contribute.repo': 'Repository on GitHub',
  'contribute.ways': 'Ways to contribute',
  'contribute.flowTitle': 'From URL to pull request',
  'contribute.flowLead':
    'Adding an entry takes a few minutes with the import helper. Verifying the facts takes longer — and matters more.',
  'contribute.dataTitle': 'Open data',
  'contribute.dataLead':
    'Everything on this site is also available as static JSON, regenerated with every build. Reuse it with attribution.',
  'contribute.license': 'Licence',
  'contribute.licenseText':
    'Directory data: CC BY 4.0 · Code: MIT · Logos and product names remain trademarks of their owners.',
  'contribute.way.suggest.title': 'Suggest a product',
  'contribute.way.suggest.text':
    'No Git needed. The form prepares a GitHub issue or an email. Include where the company is registered and where data is hosted.',
  'contribute.way.suggest.label': 'Suggest a product',
  'contribute.way.correct.title': 'Correct an entry',
  'contribute.way.correct.text':
    'Use “Report an error” on any product page, or edit the file directly on GitHub. Corrections need a source.',
  'contribute.way.correct.label': 'Report a correction',
  'contribute.way.entries.title': 'Add or edit entries',
  'contribute.way.entries.text':
    'Every product, company and category is one small text file. Copy the template, fill in what you can verify, open a pull request. The build checks every reference.',
  'contribute.way.entries.label': 'Content guide',
  'contribute.way.logos.title': 'Logos',
  'contribute.way.logos.text':
    'Vendors and contributors can provide official logos (SVG preferred). They are normalised to a common format.',
  'contribute.way.logos.label': 'Logo guidelines',
  'contribute.way.translate.title': 'Translate',
  'contribute.way.translate.text':
    'The site is available in English and German and prepared for French and Italian. Interface text lives in one dictionary per language.',
  'contribute.way.translate.label': 'Translation guide',
  'contribute.way.code.title': 'Improve the code',
  'contribute.way.code.text':
    'Astro, TypeScript and plain CSS — no framework, minimal JavaScript. Run npm run verify before opening a pull request.',
  'contribute.way.code.label': 'Contributing guide',
  /* Rich text: may contain <strong>, <code> and <em>. */
  'contribute.flow.1':
    '<strong>Start from a URL.</strong> <code>npm run new -- https://example.ch</code> reads the website (and a GitHub repository, if given) and drafts an entry: name, description, languages, imprint and privacy links, the Swiss company register number and its registered seat.',
  'contribute.flow.2':
    '<strong>Verify and complete.</strong> Fill in ownership, development and hosting from the vendor’s legal pages. Mark each claim as <em>verified</em>, <em>vendor</em> or <em>inferred</em> and link the source. Leave anything you cannot confirm as <em>unknown</em>.',
  'contribute.flow.3':
    '<strong>Check.</strong> <code>npm run verify</code> validates the schema, every reference and the listing criteria, and lints the text.',
  'contribute.flow.4':
    '<strong>Open a pull request.</strong> A maintainer reviews the sources. Automated research help can be requested on an issue by mentioning <code>@claude</code>.',
  'contribute.endpoint.products':
    'All products with company, footprint, hosting, pricing, open-source status and features.',
  'contribute.endpoint.directory':
    'The full graph: products, companies, categories, groups and the foreign products they replace.',
  'contribute.endpoint.search': 'The search index used by the site.',
  'contribute.endpoint.rss': 'RSS feed of new entries.',
  'sponsors.title': 'Sponsors & partners',
  'sponsors.heading': 'Sponsors & partners',
  'sponsors.description':
    'How Swiss Alternatives is supported — and why sponsorship never influences listings, classifications or ordering.',
  'sponsors.lead':
    'Sponsors help cover hosting and research time. They do not get better placement, a different classification or a say in the data.',
  'sponsors.current': 'Current sponsors and partners',
  'sponsors.none':
    'There are no sponsors or partners yet. The project is run independently and hosted at its own cost.',
  'sponsors.kind.sponsor': 'Sponsor',
  'sponsors.kind.partner': 'Partner',
  'sponsors.since': 'since {date}',
  'sponsors.policy': 'Sponsorship policy',
  'sponsors.policyLead':
    'Independence is the reason this directory is useful. These rules are not negotiable.',
  'sponsors.cta': 'Talk to us about sponsoring',

  'sponsors.rule.1.title': 'Listings cannot be bought.',
  /* Rich text: {methodology} is the methodology URL. */
  'sponsors.rule.1.text':
    'Inclusion follows the published <a href="{methodology}">listing criteria</a> only.',
  'sponsors.rule.2.title': 'No influence on data or order.',
  'sponsors.rule.2.text':
    'Sponsors cannot change classifications, badges, footprint facts or sort order. Corrections need sources, like everyone else’s.',
  'sponsors.rule.3.title': 'Always labelled.',
  'sponsors.rule.3.text':
    'Sponsors appear on this page and in the footer, marked as sponsors. Any sponsored or affiliate link on a product page is disclosed next to the link.',
  'sponsors.rule.4.title': 'No tracking.',
  'sponsors.rule.4.text':
    'Sponsorship never adds cookies, trackers or third-party scripts to the site.',
  'sponsors.rule.5.title': 'Public record.',
  'sponsors.rule.5.text':
    'Sponsors and partners are listed here with the date and the kind of support.',
  /* 404 ---------------------------------------------------------------- */
  'notFound.title': 'This page is not in the directory',
  'notFound.text': 'The link may be outdated, or the entry may have moved. Try searching instead.',

  /* Footer ---------------------------------------------------------- */
  'footer.mission':
    'An independent, open directory of Swiss software and cloud services — with transparent information about ownership, hosting and data residency.',
  'footer.explore': 'Explore',
  'footer.project': 'Project',
  'footer.legal': 'Legal',
  'footer.connect': 'Connect',
  'footer.rss': 'RSS feed',
  'footer.privacy': 'Privacy',
  'footer.imprint': 'Imprint',
  'imprint.operator': 'Operator',
  'imprint.email': 'Email',
  'footer.source': 'Source on GitHub',
  'footer.noTracking': 'No cookies. No trackers.',
  'footer.hosting': 'Hosted on Cloudflare — why?',
  'footer.disclaimer':
    'Information is provided without warranty. Product names, logos and trademarks belong to their owners and are used only to identify their products; no affiliation or endorsement is implied.',
  'footer.dataAsOf': 'Data as of {date}',
} as const;

export type UIKey = keyof typeof en;
export type UIValue = string | Partial<Record<Intl.LDMLPluralRule, string>>;
export type Dictionary = Partial<Record<UIKey, UIValue>>;
