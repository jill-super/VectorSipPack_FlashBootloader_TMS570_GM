---
title: "Vector SIP (Software Integration Package)"
description: "What the Vector SIP delivery contains, versions, and rules."
sidebar:
  label: "Overview"
  order: 30
nav_order: 30
---

![Package: FBL GM SLP5](https://img.shields.io/badge/package-FBL_GM_SLP5-red)
![SIP: 05.03.02](https://img.shields.io/badge/SIP-05.03.02-blue)
![License serial: CBD1400501](https://img.shields.io/badge/license-CBD1400501-green)

# Vector SIP (Software Integration Package)

The **entire `BSW/` tree plus GENy `Gendata` and tooling** is a Vector **Software Integration Package (SIP)**: a tested, versioned delivery customised for one ECU/compiler/OEM.

| Field | Value |
|---|---|
| License serial | CBD1400501 |
| Customer | Nexteer Automotive Corporation (see addendum) |
| Package | FBL GM SLP5 (`FBL Gm SLP5 D00`), OEM GM |
| MCU / derivative | TMS5700714PGEQQ1 (TMS570LS0714PGEQQ1), CAN cell DCAN |
| Compiler | TI Code Composer 4.9.5 |
| SIP version | **05.03.02** (`_VECTOR_SIP 05.03.02` in `BSW/FBL/v_ver.h`), delivery 2014-12-24 |
| GENy | 01.04.0043.0000 (per test report) |
| Maintenance expiry | 2015-02-01 (per issue report — historical delivery) |

## What counts as SIP

- `BSW/FBL`, `BSW/SecMod`, `BSW/WrapNv`, `BSW/Eep`, `BSW/Flash` (Vector wrapper parts), `BSW/_Common`
- GENy output `Demo/DemoFbl/Appl/Gendata` (regenerate, don’t hand-edit)
- `Generators/Components`, `Makesupport` infra
- SIP docs under `Doc/` (delivery description, ReadMe, issue/test reports, technical references)

**Not SIP:** demo application logic, `Misc/HdrGen` scripts, dummy/demo keys, and this `docs/` site (custom, MIT).

## Rules

1. Do not modify SIP files without Vector’s written permission (warranty void — see ReadMe).
2. Customise via `fbl_ap*` callbacks and GENy configuration, not by forking SIP sources.
3. Report issues against the SIP version + license serial (see [Issue report](/general/sip-issue-report/)).

## SIP module pages (this section)

Mirrored, SIP-focused views that link to the full module reference:

- [FBL (SIP)](/sip/modules/cdd/fbl/)
- [SecMod (SIP)](/sip/modules/bsw/secmod/)
- [WrapNv (SIP)](/sip/modules/bsw/wrapnv/)
- [Eep (SIP)](/sip/modules/bsw/eep/)
- [Flash driver (SIP)](/sip/modules/mcal/flash/)
- [Common types (SIP)](/sip/modules/mcal/common/)

SIP-level documents: [SIP general](/sip/general/).

Full delivery evidence: [Delivery description](/general/sip-delivery-description/), [Delivery ReadMe](/general/sip-delivery-readme/), [Test report](/general/sip-test-report/), [Issue report](/general/sip-issue-report/).

[Back to top](#vector-sip-software-integration-package)
