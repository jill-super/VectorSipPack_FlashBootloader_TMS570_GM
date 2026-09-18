---
title: "AUTOSAR layers"
description: "How this repository maps to AUTOSAR Classic layers."
sidebar:
  label: "Overview"
  order: 10
nav_order: 10
---

# AUTOSAR layers

This project follows **AUTOSAR Classic** layering. The table below is the normative mapping used across this site and the root `README.md`.

| Layer | Directories | Typical content | Origin |
|---|---|---|---|
| Application Software (ASW) | `Demo/DemoAppl/Appl/Source`, `Demo/DemoAppl/Appl/Include` | Demo app, `appl_*` callbacks, calibration containers | Custom (on Vector templates) |
| Complex Device Drivers (CDD) | `BSW/FBL` (`fbl_main/diag/tp/mem/hdr/can/hw/wd/mio/flio`) | Bootloader core, GM diagnostics, ISO-TP, memory abstraction | **Vector-provided** |
| BSW Services | `BSW/SecMod`, `BSW/WrapNv` | HIS Security Module, NV-Wrapper | **Vector-provided** |
| BSW ECU Abstraction | `BSW/Eep` | `EepIO` EEPROM wrapper | **Vector-provided** |
| BSW MCAL (+ base) | `BSW/Flash` (+ TI `F021_Flash_API`), `BSW/_Common/v_def.h`, `BSW/FBL/fbl_hw|fbl_can|fbl_wd` | Flash driver, platform types, CAN/HW/WD drivers | Vector + TI (third-party) |
| Integration (BSW config) | `Demo/DemoFbl/Appl/Gendata`, `Demo/DemoFbl/Appl/Source/fbl_ap*` | GENy output (`fbl_cfg`, `v_cfg`, `SecM_cfg`, `WrapNv_cfg`), `FblAppl*` callbacks | Vector-generated + customised |
| Tools & build | `Generators/`, `Makesupport/`, `Misc/HdrGen`, `Misc/HexView`, `FlashTool/` | GENy plugins, Make infra, container generator, HexView, vFlash | Mixed (see module pages) |

## Layer pages

- [Application Software (ASW)](/layers/asw/)
- [Complex Device Drivers (CDD)](/layers/cdd/)
- [BSW Services](/layers/bsw-services/)
- [BSW ECU Abstraction](/layers/bsw-ecuab/)
- [MCAL & platform base](/layers/mcal/)
- [Tools, build & integration](/layers/tools/)

## Conventions

- **Origin badges** on every module page: `Vector-provided` (do not edit), `Vector-generated` (GENy output, regenerate — don’t hand-edit), `Vector-provided, customised` (template edited for this ECU), `Custom` (in-house), `Third-party` (TI, GNU).
- **“Back to top”** links at the end of long pages.
- Converted references are marked **(converted)** and link back to the original file path.

[Back to top](#autosar-layers)
