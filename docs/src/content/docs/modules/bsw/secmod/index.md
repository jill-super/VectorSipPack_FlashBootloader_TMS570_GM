---
title: "Security Module (HIS SecMod)"
description: "HIS-compliant security module: CRC, verification classes, RSA demo."
sidebar:
  label: "Security Module"
  order: 21
nav_order: 21
parent: "Modules"
---

![Origin: Vector-provided](https://img.shields.io/badge/origin-Vector--provided-red)
![Layer: BSW Services](https://img.shields.io/badge/layer-BSW_Services-blue)

# Security Module (HIS SecMod)

**Path:** `BSW/SecMod` — `Sec.c/.h`, `Sec_Verification.c/.h`, `Sec_Crc.h`, `Sec_Types.h`, `Sec_Workspace.h`, `SecM.h`, `Sec_Inc.h`, `SecM_Inc.h`, `_SecM_cfg.h`, `_SecMPar.h`, `ESLib_version.h`, `actVersion.h`, plus `libSYSSERVICE_SECMODHIS_LIB.lib` and GENy `SecMPar.c`, `SecM_cfg.h`.

**Purpose.** HIS Security Module API subset (v2.3, API compatible with HIS 1.1): CRC, seed/key timer stubs, and **verification classes** (incl. SHA-256 / RSA paths used for signed GM containers). `Sec_Verification.c` implements `SecM_Verification*` / `SecM_Verify*` for classes CCC/DDD/vendor.

## Public API (selected)

```c
#include "Sec.h"
SecM_StatusType SecM_InitPowerOn(SecM_InitType initParam);
void SecM_Task(void);

/* verification (Sec_Verification.h) */
SecM_StatusType SecM_InitVerification(void);
SecM_StatusType SecM_Verification(/* ... */);
SecM_StatusType SecM_VerifySignature(/* ... */);
SecM_StatusType SecM_VerifyHashSha256(/* ... */);
SecM_StatusType SecM_VerifySigSha256(/* ... */);
```

Key timers are stubbed (`SecM_StartKeyTimer` etc. are no-ops; `SecM_GetKeyTimer()` returns 1).

## Usage

Configured via `_SecM_cfg.h` / `SecM_cfg.h` (GENy). The FBL calls verification during download; application code rarely calls SecMod directly. Demo RSA-2048 material lives under `Misc/DemoKey_2048` — **demo only**.

## Dependencies

`v_def.h`, `Sec_Inc.h` chain, FBL memory path, compiler lib. No OS required (polled `SecM_Task`).

## Converted reference

- [Ref: Security Module](/modules/bsw/secmod/ref-security-module/)

## Source

Browse `BSW/SecMod` in the repository.

[Back to top](#security-module-his-secmod)
