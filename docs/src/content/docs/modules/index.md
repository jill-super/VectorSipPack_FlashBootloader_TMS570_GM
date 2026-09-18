---
title: "Modules"
description: "Per-module reference: purpose, origin, files, API, dependencies."
sidebar:
  label: "Overview"
  order: 20
nav_order: 20
---

# Modules

Every module page states **purpose**, **origin badge**, **key files**, **public API**, **usage**, **dependencies**, **build notes**, and **converted references**.

## Origin legend

- `Vector-provided` — SIP file, do not hand-edit.
- `Vector-generated` — GENy/DaVinci output, regenerate instead of editing.
- `Vector-provided, customised` — Vector template edited for this ECU.
- `Custom` — in-house code/scripts.
- `Third-party` — TI, GNU, etc. (their own licenses).

## Index

| Module | Layer | Origin |
|---|---|---|
| [FBL core](/modules/cdd/fbl/) | CDD | Vector-provided |
| [Security Module](/modules/bsw/secmod/) | BSW Services | Vector-provided |
| [NV-Wrapper](/modules/bsw/wrapnv/) | BSW Services | Vector-provided |
| [Eep](/modules/bsw/eep/) | ECU Abstraction | Vector-provided |
| [Flash driver + TI F021](/modules/mcal/flash/) | MCAL | Vector + Third-party (TI) |
| [Common types](/modules/mcal/common/) | MCAL base | Vector-provided |
| [Demo application](/modules/asw/demo-appl/) | ASW | Custom |
| [Demo FBL integration](/modules/asw/demo-fbl/) | Integration | Vector-generated + customised |
| [Generators (GENy plugins)](/modules/tools/generators/) | Tools | Vector tooling |
| [Make support](/modules/tools/makesupport/) | Tools | Vector + custom |
| [Header/container generator](/modules/tools/hdrgen/) | Tools | Custom |
| [HexView](/modules/tools/hexview/) | Tools | Vector tooling |
| [vFlash tool](/modules/tools/flashtool/) | Tools | Vector tooling |
| [Demo keys & config](/modules/tools/config-keys/) | Tools | Custom (demo only) |

[Back to top](#modules)
