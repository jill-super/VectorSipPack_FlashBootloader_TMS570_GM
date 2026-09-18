---
title: "FBL (SIP view)"
description: "SIP-focused view of the FBL core."
sidebar:
  label: "FBL"
  order: 32
nav_order: 32
parent: "Vector SIP"
---

![Origin: Vector-provided](https://img.shields.io/badge/origin-Vector--provided-red)

# FBL (SIP view)

This is the SIP-scoped view. Full reference: [FBL core](/modules/cdd/fbl/).

**SIP contents:** `BSW/FBL/*` (core, GM diagnostics, ISO-TP, memory, CAN/HW/WD) + `Demo/DemoFbl/Appl/Gendata/fbl_cfg.h`, `fbl_mtab.*`, `fbl_apfb.*`, `ftp_cfg.h`, `v_cfg.h`.

**SIP references (converted):** SLP5, containers, compression, TMSx70 HW, CANdesc app note — linked from the [full module page](/modules/cdd/fbl/).

**Rule:** customise via `fbl_ap*` callbacks and GENy; do not fork SIP sources.

[Back to top](#fbl-sip-view)
