---
title: "Tools, build & integration"
description: "Generators, make infrastructure and utilities."
sidebar:
  label: "Tools & build"
  order: 16
nav_order: 16
parent: "AUTOSAR layers"
---

# Tools, build & integration

| Area | Path | Origin |
|---|---|---|
| GENy / DaVinci plugins | `Generators/Components` | Vector tooling |
| Make infrastructure | `Makesupport/`, `*/Makefile*`, `*/m.bat|b.bat|q.bat` | Vector (+ custom project parts) |
| Container/header generator | `Misc/HdrGen`, `Demo/*/ApplHdr_*/Gen_All.bat`, `ModGenBase.xml` | Custom |
| HexView utility | `Misc/HexView` | Vector tooling (+ custom examples) |
| Flash tool | `FlashTool/` (`vFlashTemplateInstaller`, `seedkey.zip`) | Vector tooling |
| Demo keys / dummy config | `Misc/DemoKey_2048`, `Misc/Config` | Custom (demo only) |
| Integration Gendata | `Demo/DemoFbl/Appl/Gendata` | Vector-generated |

Build requires **Windows + TI CCS 4.9.5 + GNU Make** (a `make.exe` is vendored under `Makesupport/cmd`).

Module pages: [Generators](/modules/tools/generators/), [Make support](/modules/tools/makesupport/), [Header generator](/modules/tools/hdrgen/), [HexView](/modules/tools/hexview/), [vFlash tool](/modules/tools/flashtool/), [Demo keys & config](/modules/tools/config-keys/).

[Back to top](#tools-build--integration)
