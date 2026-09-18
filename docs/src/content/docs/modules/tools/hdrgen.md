---
title: "Header / container generator"
description: "Scripts and base XML for GM download containers."
sidebar:
  label: "Header generator"
  order: 30
nav_order: 30
parent: "Modules"
---

![Origin: Custom](https://img.shields.io/badge/origin-Custom-green)
![Layer: Tools](https://img.shields.io/badge/layer-Tools-grey)

# Header / container generator

**Paths:** `Misc/HdrGen` (`_ModGenBase_without_cal.xml`, `_ModGenBase_2Part_3cal.xml`, `_ModGenBase_3Part_each_1Cal.xml`, `_Gen_All.bat`, `SignerInfoDummyKey.hex`) and per-variant copies under `Demo/DemoAppl/Appl/ApplHdr_*/` (`ModGenBase.xml`, `Gen_All.bat`).

**Purpose.** Build GM programmable-data files: combine `DemoAppl.hex` + calibration HEX files into `*_plain.gbf` (unsigned, sent to GM for signing) and wrap returned signatures into `*_sign.gbf` demo download containers.

**Usage.** Edit the variant `ModGenBase.xml` for part layout, run its `Gen_All.bat`, collect `GeneratedAndToSignedByGm/*_plain.gbf`. For local tests only, `SignerInfoDummyKey.hex` provides dummy signer info — never ship it.

See also [Ref: Containers](/modules/cdd/fbl/ref-containers/) and the [Demo application](/modules/asw/demo-appl/) page.

## Source

Browse `Misc/HdrGen` in the repository.

[Back to top](#header--container-generator)
