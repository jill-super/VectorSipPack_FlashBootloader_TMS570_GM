---
title: "Make support & build system"
description: "GNU Make infrastructure and project makefiles."
sidebar:
  label: "Make support"
  order: 29
nav_order: 29
parent: "Modules"
---

![Origin: Vector + custom](https://img.shields.io/badge/origin-Vector_+_custom-orange)
![Layer: Tools](https://img.shields.io/badge/layer-Tools-grey)

# Make support & build system

**Paths:** `Makesupport/Global.Makefile.target.make.3`, `Makesupport/cmd/` (vendored `make.exe` + Cygwin tools), plus per-project `Makefile`, `Makefile.Config`, `Makefile.project.part.defines`, `Makefile.TMS470.TI.ALL.make`, `Makefile.derivative.memorymap`, and `m.bat` / `b.bat` / `q.bat` wrappers.

**Purpose.** Vector MakeSupport v3 (sub-version 11) driving CCS builds: compiler/assembler/linker flag groups (`xFLAGS_VECTOR_MAKESUPPORT`, `xFLAGS_VECTOR_OPTIONS`, `xFLAGS_CUSTOMER_OPTIONS`), library generation, resource scanning, and derivative memory maps.

**Usage.**

```bat
REM from any Appl/ or Build/ dir:
m.bat     &:: full build
b.bat     &:: build variant (see file)
q.bat     &:: clean/quick (demo projects)
```

`Makefile.Config` sets `COMPILER_BASE` (CCS 4.9.5 install). `Makefile.project.part.defines` holds project defines; `Makefile.derivative.memorymap` maps TMS570 derivatives to families.

**Notes.** Vendored `Makesupport/cmd` tools are GPL/Cygwin-licensed (see their `GPL_*.txt`, `CYGWIN_LICENSE.txt`) — third-party, not MIT.

## Source

Browse `Makesupport` and any `Makefile*` in the repository.

[Back to top](#make-support--build-system)
