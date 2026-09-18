---
title: "Common types (v_def)"
description: "Shared Vector platform types."
sidebar:
  label: "Common types"
  order: 25
nav_order: 25
parent: "Modules"
---

![Origin: Vector-provided](https://img.shields.io/badge/origin-Vector--provided-red)
![Layer: MCAL base](https://img.shields.io/badge/layer-MCAL_base-blue)

# Common types (`v_def.h`)

**Path:** `BSW/_Common/v_def.h`.

**Purpose.** Common module type definitions for all Vector CANbedded modules (`vuint8/16/32`, `vsint*`, memory qualifiers `V_MEMROM*`/`V_MEMRAM*`, compiler switches). Hardware-specific — never mix copies from other platforms.

**Usage.** Included transitively via `fbl_inc.h` / module headers; do not include directly in application code.

## Source

Browse `BSW/_Common` in the repository.

[Back to top](#common-types-v_def)
