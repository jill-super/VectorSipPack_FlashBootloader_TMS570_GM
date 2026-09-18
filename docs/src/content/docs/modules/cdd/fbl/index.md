---
title: "FBL core (bootloader)"
description: "Vector FBL core for GM SLP5 on TMS570: main, diagnostics, transport, memory, drivers."
sidebar:
  label: "FBL core"
  order: 20
nav_order: 20
parent: "Modules"
---

![Origin: Vector-provided](https://img.shields.io/badge/origin-Vector--provided-red)
![Layer: CDD](https://img.shields.io/badge/layer-CDD-blue)
![Language: C](https://img.shields.io/badge/language-C-blue)

# FBL core (bootloader)

**Path:** `BSW/FBL` (+ templates in `BSW/FBL/_template`, integration callbacks in `Demo/DemoFbl/Appl/Source/fbl_ap*.c`)

**Purpose.** GM SLP5 flash bootloader: startup/validation (`fbl_main`), GM diagnostics (`fbl_diag`), ISO-TP transport (`fbl_tp`), download-container/header parsing (`fbl_hdr`), logical-memory and flash abstraction (`fbl_mem`, `fbl_flio`, `fbl_mio`), and TMS570 CAN/HW/watchdog drivers (`fbl_can.h`, `fbl_hw.*`, `fbl_wd.*`, `fbl_vect.*`, `applvect.h`).

> **Do not hand-edit** SIP files. Application behaviour is customised through `fbl_ap*` / `fbl_apdi` / `fbl_apnv` / `fbl_apwd` callbacks and GENy configuration (`Demo/DemoFbl/Appl/Gendata/fbl_cfg.h`, `fbl_mtab.*`).

## Key files

| File | Role |
|---|---|
| `fbl_main.c` | `FblStart`, `FblInit/Deinit`, `FblRepeat`, `FblStartAppl`, boot/app handover |
| `fbl_diag.c/.h` | GM diagnostic services (`FblDiagInit`, `FblDiagTimerTask`, `DiagResponseProcessor`, `FblHandleRxMsg`) |
| `fbl_tp.c/.h` | ISO-TP (`FblTpInitPowerOn`, `FblTpTransmit/Task/Confirmation`, addressing helpers) |
| `fbl_mem.c/.h`, `fbl_flio.c/.h`, `fbl_mio.c/.h` | Erase/program/verify pipeline (`FblMemEraseRegion`, `FblMemProgramBuffer`, `FblMemTask`, `FblMemDataIndication`) |
| `fbl_hdr.c/.h` | Download header / container parsing, `FblHdrGetParsedModPartId`-family |
| `fbl_can.h`, `fbl_hw.c/.h`, `fbl_wd.c/.h` | DCAN driver adaptation, HW init, watchdog |
| `fbl_vect.c/.asm`, `applvect.h`, `fbl_applvect.c` | Vector tables / appl-vector handover |
| `fbl_def.h`, `fbl_inc.h` (integration), `v_ver.h` | Project defines, include bundle, SIP/component versions |
| `fbl_assert.h`, `fbl_assert_oem.h`, `iotypes.h` | Assertions, OEM asserts, IO types |
| `_template/_fbl_ap*.c/.h`, `_appParseSba.*`, `_dummySba.*` | Customisation templates (SBA tickets, dummy SBA) |

## Public API (selected)

```c
/* lifecycle (fbl_main) */
void FblStart(void);
void FblInit(void);  void FblDeinit(void);
void FblRepeat(void); void FblStartAppl(void);

/* diagnostics (fbl_diag) */
void FblDiagInit(void);
void FblDiagTimerTask(void);
void FblHandleRxMsg(void);  void FblDataInd(void);

/* transport (fbl_tp) */
void FblTpInitPowerOn(void);
void FblTpTask(void);  void FblTpTransmit(void);

/* memory (fbl_mem / flio) */
void FblMemTask(void);
int  FblMemEraseRegion(/* addr/len */);
int  FblMemProgramBuffer(/* ... */);
```

Confirm exact signatures in the headers — integration code must include `fbl_inc.h`, not individual headers directly.

## Usage example

```c
#include "fbl_inc.h"

int main(void)
{
  FblHardwareInit();   /* clocks, CAN pins, watchdog basis */
  FblPreInit();
  FblInit();           /* diag + TP + memory */
  for (;;)
  {
    FblRepeat();       /* poll CAN, run diag/TP/memory tasks */
    FblMemTask();
    FblTpTask();
    FblDiagTimerTask();
  }
}
```

Stay-in-boot / start-from-app flows use `FblDiagInitStartFromAppl` and the `fbl_apdi` callbacks; see the SLP5 reference.

## Dependencies

- `SecMod` (signature/CRC verification), `WrapNv`/`Eep` (persistent data), `Flash` driver + TI F021 API (erase/program), `v_def.h` types, GENy `Gendata` (`fbl_cfg.h`, `fbl_mtab.*`, `v_cfg.h`, `ftp_cfg.h`).
- Toolchain: TI CCS 4.9.5; CAN database `Demo/DemoFbl/Config/demo_sw.dbc`; GENy project `DemoFbl.gny`.

## Build

Via `Demo/DemoFbl/Appl/m.bat` (which pulls `Makefile`, `Makefile.Config`, `Makefile.project.part.defines`, `Makefile.TMS470.TI.ALL.make`, `Makefile.derivative.memorymap`). Flash-driver-only builds use `BSW/Flash/Build/m.bat`.

## Converted references (in this folder)

- [Ref: GM SLP5](/modules/cdd/fbl/ref-slp5/) — 131-page technical reference.
- [Ref: Containers](/modules/cdd/fbl/ref-containers/) — programmable data file creation.
- [Ref: Compression](/modules/cdd/fbl/ref-compression/) — compression interface.
- [Ref: TMSx70 HW](/modules/cdd/fbl/ref-tmsx70/) — TMS470/TMS570 specifics.
- [App note: CANdesc](/modules/cdd/fbl/appnote-call-from-candesc/) — calling the bootloader from CANdesc apps.
- [SBA app-parse note](/modules/cdd/fbl/readme-app-parse-sba/) · [SBA dummy note](/modules/cdd/fbl/readme-dummy-sba/)

## Source

Browse `BSW/FBL` in the repository. Original PDFs remain under `Doc/`.

[Back to top](#fbl-core-bootloader)
