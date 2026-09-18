---
title: "Generators (GENy / DaVinci plugins)"
description: "Configuration generator plugins."
sidebar:
  label: "Generators"
  order: 28
nav_order: 28
parent: "Modules"
---

![Origin: Vector tooling](https://img.shields.io/badge/origin-Vector_tooling-red)
![Layer: Tools](https://img.shields.io/badge/layer-Tools-grey)

# Generators (GENy / DaVinci plugins)

**Path:** `Generators/Components` — e.g. `FblCan_Gm_SLP5.pco`, `FblCan_14230_Gm.dll`, `FblDrvCan_Tms470DcanCrx.dll`, `FblTp_Iso.dll`, `GenTool_GenyFblCanBase.dll`, `SysService_SecModHis.dll`, `SysService_WrapperNv.dll`, `Hw_Tms470*.dll`, `TMS570_0714BPGEQQ1.pcu`, plus BSWMD ARXML under `_Schemes/`.

**Purpose.** GENy plugins that generate `Demo/DemoFbl/Appl/Gendata` from `DemoFbl.gny` + `demo_sw.dbc`. `version.info` records the plugin set.

**Usage.** Open `Demo/DemoFbl/Config/DemoFbl.gny` in GENy with these components on the search path, generate, then rebuild. Never commit generated output without noting the GENy version (01.04.0043 per the test report).

## Source

Browse `Generators/Components` in the repository.

[Back to top](#generators-geny--davinci-plugins)
