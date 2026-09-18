---
title: "Application Software (ASW)"
description: "Demo application layer."
sidebar:
  label: "ASW"
  order: 11
nav_order: 11
parent: "AUTOSAR layers"
---

# Application Software (ASW)

Demo and example application code that runs **above** the bootloader.

| Module | Path | Origin |
|---|---|---|
| Demo application | `Demo/DemoAppl/Appl/Source`, `Demo/DemoAppl/Appl/Include` | Custom (on Vector templates) |
| Bootloader integration app callbacks | `Demo/DemoFbl/Appl/Source/fbl_ap*.c`, `Demo/DemoAppl/Appl/Source/appl_*.c` | Vector template, customised |

Key files: `appl_main.c`, `appl_diag.c`, `appl_flio.c`, `appl_ap.c`, `applvect.c`, `fbl_demoAppl.c`, `fbl_jmpToBoot.c`.

See [Demo application module](/modules/asw/demo-appl/) and [Demo FBL integration](/modules/asw/demo-fbl/).

[Back to top](#application-software-asw)
