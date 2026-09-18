---
title: "Flash driver + TI F021 API"
description: "Vector flash driver on top of the TI F021 Flash API for TMS570."
sidebar:
  label: "Flash driver"
  order: 24
nav_order: 24
parent: "Modules"
---

![Origin: Vector + Third-party (TI)](https://img.shields.io/badge/origin-Vector_+_TI-orange)
![Layer: MCAL](https://img.shields.io/badge/layer-MCAL-blue)

# Flash driver + TI F021 API

**Paths:**

- Vector wrapper: `BSW/Flash/flashdrv.c/.h`, `flashdrv_cfg.h`, `flashrom.c/.h`, `Build/` (`Makefile`, `Makefile.config`, `m.bat`/`b.bat`, `MkFlashRom.bat`, `FlashDrv_F021.*`).
- TI third-party: `BSW/Flash/Build/F021_Flash_API_v02.00.01` (`Include/`, `Libraries/`, `Source/Fapi_UserDefinedFunctions.c`, docs).

**Purpose.** Erase/program the TMS570 on-chip flash (F021 bank). `flashdrv` exposes the Vector `ExpFlash*` interface to `fbl_mem`/`fbl_flio`; `flashrom` holds the resident flash routine; the TI F021 library does the low-level FSM sequences.

## Public API

```c
/* flashdrv.h — called by the FBL memory path */
int ExpFlashInit(void);
int ExpFlashDeinit(void);
int ExpFlashErase(/* region */);
int ExpFlashWrite(/* address/buffer/len */);
```

TI API (`F021.h`, `FapiFunctions.h`): `Fapi_initializeFlashBanks`, `Fapi_issueProgrammingCommand`, `Fapi_doBlankCheck`, `Fapi_doVerify`, `Fapi_calculatePsa`, etc. Largest stack user is `Fapi_initializeFlashBanks` (144 bytes worst case — see release notes).

## Build

```bat
cd BSW\Flash\Build
m.bat
```

Outputs `FlashDrv_F021.hex/.out/.map` plus `FlashDrv_F021.ini`. Linker config `FlashDrv_F021.lcf`. The `F021_API_CortexR4_LE*.lib` variant matches this little-endian Cortex-R4 target.

## Dependencies

TI CCS 4.9.5, `Makesupport` infra, correct `F021` library variant for the derivative.

## Converted references (in this folder)

- [TI F021 release notes](/modules/mcal/flash/ti-f021-release-notes/)
- [TI F021 API guide](/modules/mcal/flash/ti-f021-api-guide/)
- [TI SPNA148](/modules/mcal/flash/ti-f021-appnote/) · [TI SPNZ210](/modules/mcal/flash/ti-f021-errata/)
- [TI F021 license](/modules/mcal/flash/ti-f021-license/) · [readme.txt](/modules/mcal/flash/ti-f021-readme/) · [build info](/modules/mcal/flash/ti-f021-build-info/)

> TI documents and libraries keep TI’s license; the MIT `LICENSE` at the repo root does not relicense them.

## Source

Browse `BSW/Flash` in the repository.

[Back to top](#flash-driver--ti-f021-api)
