---
title: "Dummy SBA — Template ReadMe (converted)"
description: "Notes on SBA test/bypass templates."
sidebar:
  label: "SBA dummy note"
  order: 27
nav_order: 27
---

> **Source:** `BSW/FBL/_template/_dummySba_Readme.txt` • Converted to Markdown.

```text
Andreas Wenckebach, Stuttgart 07.08.2013

These files can be used to test the SBA-ticket functionality without an application supporting it yet.
Add the following macro to your configuration:
#define FBL_TEST_SBA_TICKET

The files can also be used to bypass signature/digest calculation during developmenmt. Note that still a valid SignerInfo is expected.
```
