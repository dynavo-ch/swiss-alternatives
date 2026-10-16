---
name: Quad9
aliases: [9.9.9.9, Quad9 DNS]
company: quad9
tagline: Free public DNS resolver that blocks known malicious domains.
description: >-
  Quad9 is a free public DNS resolver run by a Zurich-based non-profit foundation.
  It blocks malicious domains, validates DNSSEC and supports DoH and DoT.
website: https://quad9.net
status: active
launched: 2017

categories: [dns-resolvers, network-security]
alternativesTo:
  - google-public-dns
  - cloudflare-dns

audience: [consumer, business]
deployment: [saas]

swiss:
  developed:
    value: unknown
    basis: inferred
    source: sponsors
    note: >-
      Quad9 is governed from Zurich, but its network infrastructure is provided
      by Packet Clearing House and other partners, and it does not publish
      where its engineering staff work.
  hosted:
    value: no
    basis: vendor
    source: data-2025
    note: >-
      Quad9 is an anycast service: queries are answered at the nearest of more
      than 245 locations in over 115 countries, so it is not hosted in
      Switzerland as such. Quad9 states that it does not record user IP
      addresses and that client IP data does not leave the location where the
      query is received, apart from limited data used to defend against attacks.
  infrastructure:
    provider: Packet Clearing House, with in-kind hosting partners
    providerCountry: US
    type: colocation
    swissOwned: no
    basis: vendor
    source: sponsors

openSource:
  value: partial
  repository: https://github.com/Quad9DNS
  basis: inferred
  source: isc
  note: >-
    The resolvers run open-source DNS software (dnsdist, PowerDNS Recursor,
    Unbound and, as of 2020, BIND 9). The threat-intelligence blocklists come
    from third-party partners and are not published.

pricing:
  model: free
  freePlan: yes
  url: https://quad9.net/about/sponsors/
  checked: 2026-10-15
  basis: vendor
  source: sponsors

features:
  encryptionInTransit: partial

tags:
  [
    dns,
    dns-over-https,
    dns-over-tls,
    dnscrypt,
    dnssec,
    malware-blocking,
    phishing-protection,
    non-profit,
  ]
affiliate: null
sponsored: false
added: 2026-10-15
updated: 2026-10-15
lastVerified: 2026-10-15
sources:
  - id: about
    title: About Quad9
    url: https://quad9.net/about/
    publisher: Quad9
    kind: vendor
    accessed: 2026-10-15
  - id: services
    title: Service addresses and features
    url: https://quad9.net/service/service-addresses-and-features/
    publisher: Quad9
    kind: documentation
    accessed: 2026-10-15
  - id: privacy
    title: Quad9 Data and Privacy Policy
    url: https://quad9.net/privacy/policy/
    publisher: Quad9
    kind: vendor
    accessed: 2026-10-15
  - id: data-2025
    title: How Quad9 handles your data (2025)
    url: https://quad9.net/news/blog/how-quad9-handles-your-data-2025/
    publisher: Quad9
    kind: vendor
    accessed: 2026-10-15
  - id: sponsors
    title: Sponsors
    url: https://quad9.net/about/sponsors/
    publisher: Quad9
    kind: vendor
    accessed: 2026-10-15
  - id: isc
    title: Quad9 and the BIND 9 Subscription Edition
    url: https://www.isc.org/blogs/quad9-2020-06/
    publisher: Internet Systems Consortium
    kind: independent
    accessed: 2026-10-15
  - id: wikipedia
    title: Quad9
    url: https://en.wikipedia.org/wiki/Quad9
    publisher: Wikipedia
    kind: independent
    accessed: 2026-10-15
  - id: canal
    title: Quad9 faces new DNS censorship legal challenge in France from Canal+
    url: https://quad9.net/news/press/quad9-faces-new-dns-censorship-legal-challenge-in-france-from-canal/
    publisher: Quad9
    kind: vendor
    accessed: 2026-10-15
i18n:
  de:
    tagline: 'Kostenloser öffentlicher DNS-Resolver, der bekannte schädliche Domains blockiert.'
    description: 'Quad9 ist ein kostenloser öffentlicher DNS-Resolver einer gemeinnützigen Stiftung mit Sitz in Zürich. Er blockiert schädliche Domains, validiert DNSSEC und unterstützt DoH und DoT.'
    notes:
      swiss.developed.note: 'Quad9 wird von Zürich aus geführt, die Netzwerkinfrastruktur stellen jedoch Packet Clearing House und weitere Partner bereit, und Quad9 veröffentlicht nicht, wo seine Engineering-Mitarbeitenden arbeiten.'
      swiss.hosted.note: 'Quad9 ist ein Anycast-Dienst: Anfragen werden am nächstgelegenen von über 245 Standorten in über 115 Ländern beantwortet, daher ist der Dienst nicht als solcher in der Schweiz gehostet. Quad9 gibt an, keine IP-Adressen von Benutzern zu erfassen und dass Client-IP-Daten den Standort, an dem die Anfrage eingeht, nicht verlassen, abgesehen von begrenzten Daten zur Abwehr von Angriffen.'
      openSource.note: 'Die Resolver laufen mit Open-Source-DNS-Software (dnsdist, PowerDNS Recursor, Unbound und, Stand 2020, BIND 9). Die Threat-Intelligence-Sperrlisten stammen von Drittpartnern und werden nicht veröffentlicht.'
---

Quad9 is a free public recursive DNS resolver operated by the Quad9 Foundation,
a not-for-profit foundation registered in Zurich. Its main address, 9.9.9.9,
validates DNSSEC and refuses to resolve domains that its threat-intelligence
partners flag as malicious, such as phishing or malware sites. Alternative
addresses offer resolution without blocking (9.9.9.10) or with EDNS Client
Subnet (9.9.9.11). Besides unencrypted DNS, the service supports DNS over HTTPS,
DNS over TLS and DNSCrypt. The service is free and needs no account; devices or
routers are configured to use the resolver directly.

Quad9 was set up by the Global Cyber Alliance, IBM and Packet Clearing House and
launched publicly in 2017. It moved its headquarters from California to Zurich
in 2021; the foundation is supervised by the Swiss Federal Department of Home
Affairs and is funded by sponsorships, grants and donations. Quad9 states that
it does not record user IP addresses and applies Swiss data protection law to
all users.

The resolvers are not concentrated in Switzerland: Quad9 operates an anycast
network of more than 245 locations in over 115 countries, built largely on
infrastructure from Packet Clearing House and other in-kind partners, and
queries are answered at the nearest location. Quad9 has contested court orders
to block copyright-infringing domains in Germany and France; because it cannot
limit blocking to one country, blocks it applies take effect for all users.
