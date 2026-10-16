---
name: narrowin Diode
aliases: [Diode, narrowin endpoint segmentation]
company: narrowin
tagline: Plug-and-play microsegmentation appliance for legacy, medical and OT devices.
description: >-
  narrowin Diode is an inline appliance from Liestal that microsegments devices
  which cannot be patched, such as medical, lab and OT equipment, managed centrally.
website: https://narrowin.com/en/diode
status: active

categories: [network-security]
alternativesTo:
  - id: illumio
    note: Enforces segmentation with a hardware appliance in front of each device, aimed at equipment that cannot run software agents.

audience: [business, enterprise, public-sector]
deployment: [on-premises]

swiss:
  developed:
    value: yes
    basis: vendor
    source: home
    note: >-
      narrowin describes its products as Swiss-made network and security tools
      built by its own team; the company is based in Liestal.
  hosted:
    value: unknown
    note: >-
      Diode is a hardware appliance installed in the customer's network, and
      the narrowin controller that manages it can run in the cloud or
      on-premises. Where the cloud controller is hosted is not stated.

openSource:
  value: no
  basis: inferred
  note: >-
    No source code of Diode is published; narrowin publishes other tools
    (networka, ansible-mikrotik) under Apache-2.0.

pricing:
  model: quote
  url: https://narrowin.com/en/diode
  checked: 2026-10-16
  basis: vendor
  source: product
  note: No prices are published; demos are offered on request.

tags: [microsegmentation, ot-security, medical-devices, iot, zero-trust, industrial]
affiliate: null
sponsored: false
added: 2026-10-16
updated: 2026-10-16
lastVerified: 2026-10-16
sources:
  - id: product
    title: narrowin Diode — Protect the devices you can't touch
    url: https://narrowin.com/en/diode
    publisher: narrowin GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: home
    title: narrowin — Network visibility, segmentation & security for OT
    url: https://narrowin.com/en/
    publisher: narrowin GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: open
    title: narrowin — Free tools and open source
    url: https://narrowin.com/en/open
    publisher: narrowin GmbH
    kind: vendor
    accessed: 2026-10-16
  - id: swissmadesoftware
    title: narrowin — swiss made software member profile
    url: https://www.swissmadesoftware.org/en/companies/narrowin/home.html
    publisher: swiss made software
    kind: independent
    accessed: 2026-10-16
i18n:
  de:
    tagline: 'Plug-and-play-Appliance zur Mikrosegmentierung von Legacy-, Medizin- und OT-Geräten.'
    description: 'narrowin Diode ist eine Inline-Appliance aus Liestal, die nicht patchbare Geräte wie Medizin-, Labor- und OT-Geräte mikrosegmentiert, zentral verwaltet.'
    notes:
      alternativesTo.illumio.note: 'Setzt die Segmentierung mit einer Hardware-Appliance vor jedem Gerät durch, ausgerichtet auf Geräte, auf denen keine Software-Agenten laufen können.'
      swiss.developed.note: 'narrowin bezeichnet seine Produkte als in der Schweiz hergestellte Netzwerk- und Sicherheitswerkzeuge, die vom eigenen Team gebaut werden; das Unternehmen hat seinen Sitz in Liestal.'
      swiss.hosted.note: 'Diode ist eine Hardware-Appliance, die im Netzwerk der Kundschaft installiert wird, und der narrowin-Controller, der sie verwaltet, kann in der Cloud oder vor Ort laufen. Wo der Cloud-Controller gehostet wird, wird nicht angegeben.'
      openSource.note: 'Von Diode wird kein Quellcode veröffentlicht; narrowin veröffentlicht andere Werkzeuge (networka, ansible-mikrotik) unter Apache-2.0.'
---

narrowin Diode is a small network appliance placed between a switch and a
device that cannot protect itself, such as medical equipment, research
instruments, PLCs and HMIs, legacy Windows machines or building IoT. It runs
as a transparent Layer 2 bridge without an IP address, so neither the device
nor the switch needs reconfiguring, and filters traffic in both directions by
IP, port and protocol based on an allow-list profile.

On first boot a Diode finds its controller and pulls its policy. The
narrowin controller, which can run in the cloud or on-premises, manages a fleet
of Diodes and is shared with narrowin's network discovery product Explorer.
Allowed and blocked flows are logged locally and centrally and can be
forwarded to a syslog target, and certificate-based remote access for vendors
can be switched on per device. Diode is not a data diode in the one-way sense.

narrowin is a university spin-off from Liestal that also offers network
assessment, design and automation services. Prices are not published.
