---
title: "NV-Wrapper (WrapNv)"
description: "ID-based NVRAM access wrapper."
sidebar:
  label: "NV-Wrapper"
  order: 22
nav_order: 22
parent: "Modules"
---

![Origin: Vector-provided](https://img.shields.io/badge/origin-Vector--provided-red)
![Layer: BSW Services](https://img.shields.io/badge/layer-BSW_Services-blue)

# NV-Wrapper (WrapNv)

**Path:** `BSW/WrapNv` (`WrapNv.h`, `_WrapNv_inc.h`) + generated `Demo/DemoFbl/Appl/Gendata/WrapNv_cfg.*` + `Demo/DemoAppl/Appl/Include/WrapNv_inc.h`.

**Purpose.** ID-based read/write access to non-volatile memory (NV records). Version `SYSSERVICE_WRAPPERNV 01.02`. Supports address-lookup-table mode (`NV_ENABLE_ADDRESS_LOOKUP`) or EEPROM-manager mode (`FBL_ENABLE_EEPMGR`) — exactly one must be selected in `WrapNv_cfg.h`.

## Public API

```c
#include "WrapNv.h"
/* ID helpers */
#define NV_MK_STRUCT_ID(structure, id)  /* ... */
#define NV_GET_STRUCT_ID(id)
#define NV_GET_STRUCT_HANDLE(id)

typedef vuint32 tNvRecId;
typedef vuint32 tNvRecLen;
/* record table (lookup mode) */
extern const tNvRecordTbl kNvRecordTbl[];
extern const vuint8 kNvNoOfNvRecords;
```

Actual read/write goes through the configured NV backend (see reference).

## Dependencies

`WrapNv_cfg.h`, `Eep`/`EepIO` or EEPROM manager, `v_def.h`.

## Converted reference

- [Ref: NV-Wrapper](/modules/bsw/wrapnv/ref-nvwrapper/)

## Source

Browse `BSW/WrapNv` in the repository.

[Back to top](#nv-wrapper-wrapnv)
