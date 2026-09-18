---
title: "Complex Device Drivers (CDD)"
description: "Bootloader core as a CDD."
sidebar:
  label: "CDD"
  order: 12
nav_order: 12
parent: "AUTOSAR layers"
---

# Complex Device Drivers (CDD)

The Vector **FBL core** (`BSW/FBL`) is documented as a CDD: it bypasses the standard BSW stack for direct CAN / memory / flash control, as is normal for bootloaders.

Sub-modules: `fbl_main` (scheduler), `fbl_diag` (GM UDS), `fbl_tp` (ISO-TP), `fbl_mem`/`fbl_flio` (memory/flash abstraction), `fbl_hdr` (container/header parsing), `fbl_can`/`fbl_hw`/`fbl_wd`/`fbl_mio` (drivers).

See [FBL core module](/modules/cdd/fbl/).

Related converted references live under that module (SLP5, containers, compression, TMSx70 HW, CANdesc app note).

[Back to top](#complex-device-drivers-cdd)
