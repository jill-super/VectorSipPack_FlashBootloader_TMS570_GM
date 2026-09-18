---
title: "MCAL & platform base"
description: "Flash driver, TI F021 API and common types."
sidebar:
  label: "MCAL"
  order: 15
nav_order: 15
parent: "AUTOSAR layers"
---

# MCAL & platform base

| Module | Path | Origin |
|---|---|---|
| Flash driver | `BSW/Flash/flashdrv.*`, `flashrom.*`, `Build/` | **Vector-provided** (+ custom `flashrom`) |
| TI F021 Flash API | `BSW/Flash/Build/F021_Flash_API_v02.00.01` | **Third-party (TI)** |
| Common types | `BSW/_Common/v_def.h` | **Vector-provided** |
| HW/CAN/WD drivers | `BSW/FBL/fbl_hw.*`, `fbl_can.h`, `fbl_wd.*` | **Vector-provided** |

See [Flash driver](/modules/mcal/flash/) and [Common types](/modules/mcal/common/).

[Back to top](#mcal--platform-base)
