---
title: "Demo application (ASW)"
description: "Example application and calibration containers."
sidebar:
  label: "Demo application"
  order: 26
nav_order: 26
parent: "Modules"
---

![Origin: Custom](https://img.shields.io/badge/origin-Custom-green)
![Layer: ASW](https://img.shields.io/badge/layer-ASW-blue)

# Demo application (ASW)

**Path:** `Demo/DemoAppl/Appl` — `Source/` (`appl_main.c`, `appl_ap.c`, `appl_diag.c`, `appl_flio.c`, `applvect.c`, `fbl_demoAppl.c`, `fbl_jmpToBoot.c`), `Include/` (`fbl_ap*.h`, `appl_flio.h`, `memmap.h`, …), `Makefile*`, `m.bat/b.bat/q.bat`, plus four container variants:

- `ApplHdr_without_cal/` — single-part download, no calibration.
- `ApplHdr_1Part_each_1Cal/`, `ApplHdr_3Part_each_1Cal/`, `ApplHdr_2Part_3cal/` — with calibration parts.

Each variant holds `ModGenBase.xml`, `Gen_All.bat`, `GeneratedAndToSignedByGm/*_plain.gbf` (to send to GM for signing) and `*_sign.gbf` demo-signed containers + `SignerInfoDummyKey.hex`.

**Purpose.** Shows how an application coexists with the bootloader: vector handover, `appl_*` callbacks, flash I/O from app context, jump-to-boot, and how to build GM download containers (plain → signed).

**Key callbacks.** `ApplFblStartup`, `ApplFbl*` diagnostic helpers, `appl_flio` flash hooks — see `Include/fbl_ap*.h` and `Source/appl_*.c`.

**Build.**

```bat
cd Demo\DemoAppl\Appl
m.bat
```

Variant containers: run the variant’s `Gen_All.bat` (needs the `Misc/HdrGen` chain), send `*_plain.gbf` for signing, place returned `*_sign.gbf` for download tests.

**Dependencies.** FBL headers, `WrapNv` config, `memmap.h` sections, Make infra.

## Source

Browse `Demo/DemoAppl/Appl` in the repository.

[Back to top](#demo-application-asw)
