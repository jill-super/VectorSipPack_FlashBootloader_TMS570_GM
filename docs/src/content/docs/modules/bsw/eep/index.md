---
title: "Eep (EEPROM abstraction)"
description: "EepIO wrapper functions."
sidebar:
  label: "Eep"
  order: 23
nav_order: 23
parent: "Modules"
---

![Origin: Vector-provided](https://img.shields.io/badge/origin-Vector--provided-red)
![Layer: ECU Abstraction](https://img.shields.io/badge/layer-ECU_Abstraction-blue)

# Eep (EEPROM abstraction)

**Path:** `BSW/Eep` — `EepIO.c`, `EepIO.h`, `EepInc.h`.

**Purpose.** EEPROM driver wrapper (`eepmemcpy`, `EepromDriver_VerifySync`-family, `eepData` handling) used by the NV path. Long revision history in the headers (2004–2014, multi-compiler support); the copy in this repo is the Vector CANbedded EEPROM wrapper configured for TMS570.

**Usage.** Consumed via `WrapNv`; application code does not call `EepIO` directly. See header comments for per-compiler sections (`C_COMP_*`).

**Dependencies.** `v_def.h`, platform memory sections.

## Source

Browse `BSW/Eep` in the repository.

[Back to top](#eep-eeprom-abstraction)
