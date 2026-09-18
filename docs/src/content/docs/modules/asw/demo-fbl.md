---
title: "Demo FBL integration"
description: "Bootloader integration example with GENy Gendata."
sidebar:
  label: "Demo FBL integration"
  order: 27
nav_order: 27
parent: "Modules"
---

![Origin: Vector-generated + customised](https://img.shields.io/badge/origin-Vector--generated_+_customised-yellow)
![Layer: Integration](https://img.shields.io/badge/layer-Integration-blue)

# Demo FBL integration

**Path:** `Demo/DemoFbl` — `Appl/Source` (`fbl_ap.c`, `fbl_apdi.c`, `fbl_apnv.c`, `fbl_apwd.c`, `dummySba.c`, `startup.c`, `stack.asm`), `Appl/Include`, `Appl/Gendata` (`fbl_cfg.h`, `fbl_mtab.*`, `fbl_apfb.*`, `v_cfg.h`, `v_inc.h`, `v_par.*`, `ftp_cfg.h`, `SecMPar.*`, `SecM_cfg.h`, `WrapNv_cfg.*`, `BrsVInfo.h`), `Config/` (`DemoFbl.gny`, `DummyInitPreconfig.cfg`, `demo_sw.dbc`), `Appl/Makefile*`.

**Purpose.** Reference integration: how GENy output plus `fbl_ap*` callbacks bind the Vector FBL core to this ECU (CAN IDs, memory table, NV records, watchdog, diagnostics). `demo_sw.dbc` is the CAN database; `DemoFbl.gny` is the GENy project.

**Customisation points.** `fbl_ap.c` (general), `fbl_apdi.c` (diagnostics), `fbl_apnv.c` (NV), `fbl_apwd.c` (watchdog), `dummySba.c` (SBA stub). Regenerate `Gendata` with GENy after `.gny`/`.dbc` changes — do not hand-edit generated files except via the documented custom sections.

**Build.**

```bat
cd Demo\DemoFbl\Appl
m.bat
```

**Dependencies.** FBL core, SecMod/WrapNv configs, `Makesupport`, CCS 4.9.5.

## Source

Browse `Demo/DemoFbl` in the repository.

[Back to top](#demo-fbl-integration)
