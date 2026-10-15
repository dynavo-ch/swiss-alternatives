---
name: pCloud
aliases: [pCloud Drive, pCloud Encryption, pCloud Crypto]
company: pcloud
tagline: Cloud storage with lifetime plans and optional client-side encryption, stored in EU or US.
description: >-
  pCloud is a cloud storage and file sharing service from a company registered in
  Baar, with data stored in Luxembourg or Texas and optional paid encryption.
website: https://www.pcloud.com
status: active
launched: 2013

categories: [cloud-storage, file-sharing, backup]
alternativesTo:
  - dropbox
  - id: google-drive
    note: No built-in office document editor comparable to Google Docs.
  - id: onedrive
    note: No Microsoft 365 integration or co-authoring.

audience: [consumer, business]
deployment: [saas]
platforms: [web, windows, macos, linux, ios, android]

swiss:
  developed:
    value: no
    basis: inferred
    source: wikipedia
    note: >-
      pCloud operates out of Sofia, Bulgaria, and was built by a Bulgarian team;
      the Swiss companies in Baar are the legal and contracting entities.
  hosted:
    value: no
    basis: vendor
    source: regions
    note: >-
      Customers choose one storage region at sign-up: European Union
      (Luxembourg) or United States (Dallas, Texas). No Swiss region is offered.
      Changing the region later costs a one-time fee.
  dataLocations: [LU, US]
  infrastructure:
    type: colocation
    basis: vendor
    source: terms

openSource:
  value: no
  basis: inferred
  source: github
  note: >-
    The current apps and the service are proprietary. pCloud publishes some
    older client components, documentation and plugins on GitHub.

pricing:
  model: freemium
  freePlan: yes
  url: https://www.pcloud.com/cloud-storage-pricing-plans.html
  checked: 2026-10-15
  basis: vendor
  source: pricing

features:
  e2ee: partial
  encryptionInTransit: yes
  mfa: yes

tags: [lifetime-plan, client-side-encryption, sync, backup]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: regions
    title: pCloud data regions
    url: https://www.pcloud.com/data-regions/
    publisher: pCloud International AG
    kind: vendor
    accessed: 2026-10-15
  - id: terms
    title: pCloud terms and conditions
    url: https://www.pcloud.com/terms_and_conditions.html
    publisher: pCloud International AG
    kind: vendor
    accessed: 2026-10-15
  - id: privacy
    title: pCloud privacy policy
    url: https://www.pcloud.com/privacy_policy/
    publisher: pCloud International AG
    kind: vendor
    accessed: 2026-10-15
  - id: pricing
    title: pCloud pricing plans
    url: https://www.pcloud.com/cloud-storage-pricing-plans.html
    publisher: pCloud International AG
    kind: vendor
    accessed: 2026-10-15
  - id: encryption
    title: pCloud Encryption
    url: https://www.pcloud.com/encrypted-cloud-storage.html
    publisher: pCloud International AG
    kind: vendor
    accessed: 2026-10-15
  - id: security
    title: pCloud security features
    url: https://www.pcloud.com/features/security.html
    publisher: pCloud International AG
    kind: vendor
    accessed: 2026-10-15
  - id: free-plan
    title: pCloud help center - plan details
    url: https://help.pcloud.com/article/plan-details
    publisher: pCloud International AG
    kind: documentation
    accessed: 2026-10-15
  - id: 2fa
    title: pCloud help center - Two-factor authentication
    url: https://help.pcloud.com/article/two-factor-authentication
    publisher: pCloud International AG
    kind: documentation
    accessed: 2026-10-15
  - id: github
    title: pcloudcom on GitHub
    url: https://github.com/pcloudcom
    publisher: GitHub
    kind: documentation
    accessed: 2026-10-15
  - id: wikipedia
    title: pCloud
    url: https://en.wikipedia.org/wiki/PCloud
    publisher: Wikipedia
    kind: independent
    accessed: 2026-10-15
---

pCloud offers cloud storage with desktop sync, a virtual drive, mobile apps with
automatic photo upload, file sharing via links and computer backup. Paid
storage is sold as subscriptions or as one-time "lifetime" plans; a free plan
offers up to 10 GB, part of which is unlocked by completing setup steps or
inviting others.

Files are encrypted in transit, but end-to-end (client-side) encryption is only
available for a dedicated folder through the separately paid pCloud Encryption
add-on. In 2024, researchers at ETH Zurich published attacks on this optional
encryption scheme.

The contracting entity is pCloud International AG in Baar, and contracts are
governed by Swiss law, with exceptions for EU consumers. Customer data is not
stored in Switzerland: users choose between data centres in Luxembourg and the
United States at sign-up. The company operates mainly from Bulgaria, and its
ownership is not published.
