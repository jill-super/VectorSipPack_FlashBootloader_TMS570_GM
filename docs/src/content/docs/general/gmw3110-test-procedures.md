---
title: "GMW3110 Test Procedures (converted)"
description: "Converted GMW3110 test procedure document."
sidebar:
  label: "GMW3110 procedures"
  order: 16
nav_order: 16
---

> **Source:** `Doc/DeliveryInformation/GMW3110_TestProcedures.html` • Converted from HTML for web reading. Original file remains authoritative.

html, body {
          font-family: Verdana, Helvetica, sans-serif;
          font-size: 9pt;
          margin: 10px;
          }

          div.title {
          background:#909090;
          font-size: 16pt;
          text-align: center;
          padding: 20px 10px 20px 10px;
          }

          h1 {
          background: #909090;
          font-weight: bold;
          font-size: 12pt;
          margin-top: 30px;
          margin-bottom: 10px;
          padding: 4px;
          border-bottom-style: solid;
          border-bottom-width: thin;
          }

          h2 {
          background: #BEBEBE;
          font-weight: bold;
          font-size: 10pt;
          margin-top: 30px;
          margin-bottom: 10px;
          padding: 4px;
          border-bottom-style: solid;
          border-bottom-width: thin;
          }

          a:link {
          color:#000000;
          }
          a:hover {
          color:#FF0000;
          }
          a:visited {
          color:#000000;
          }

          table {
          border-spacing: 2px;
          }
          table.full {
          width: 100%;
          }
          table.preparation, table.completion, table.teststeps, table.checkstatistic {
          width:100%;
          margin-top:10px;
          }
          table.testcase, table.testgroup {
          width:100%;
          margin-top:30px;
          }

          td {
          vertical-align: middle;
          font-size: 9pt;
          padding: 4px;
          background: #DDDDDD;
          }
          th {
          vertical-align: middle;
          font-size: 9pt;
          padding: 4px;
          background: #DDDDDD;
          font-weight:bold;
          }
          td.title {
          font-size:11pt;
          font-weight: bold;
          padding: 10px 2px;
          background:#BEBEBE;
          }
          td.desc {
          padding: 4px 2px;
          background:#DDDDDD;
          }
          td.header {
          font-weight: bold;
          background: #909090;
          }
          td.checkheader {
          width: 40%;
          font-weight: bold;
          background: #909090;
          }
          td.verdict {
          width: 6em;
          font-weight: bold;
          text-align: center;
          }
          td.ident {
          width: 10em;
          font-weight: bold;
          background: #909090;
          }
          td.number {
          text-align:right;
          width: 4em;
          }
          td.fixed {
          width: 10em;
          }
          td.pass {
          background: green;
          }
          td.fail {
          background: red;
          }
          td.warn
          {
          background: yellow;
          }
          td.skip
          {
          background: #909090;
          }
          td.empty {
          background: white;
          }

XML

XML

# Test Verdict

| Test Verdict | pass |
| --- | --- |

# Test Results Summary

| 1. Initialisierung |  | pass |
| 2. $1A - ReadDataByIdentifier |  | pass |
| 3. $20 - ReturnToNormalMode |  | pass |
| 4. $27 - SecurityAccess |  | pass |
| 5. $28 - DisableNormalCommunication |  | pass |
| 6. $34 - RequestDownload |  | pass |
| 7. $36 - TransferData |  | pass |
| 8. $3E - TesterPresent |  | pass |
| 9. $A2 - ReportProgrammedState |  | pass |
| 10. $A5 - ProgrammingMode |  | pass |

# Statistics

| Test Cases Executed |
| Test Cases Executed | 123 | 100% |
| Test Cases Not Executed | 0 | 0% |
| Test Case Verdicts |
| Test Cases Passed | 123 | 100% |
| Test Cases Failed | 0 | 0% |
| Test Step Warnings | 0 |  |

# Test Execution Time

| Event | Time | Timestamp |
| Begin | 2015-02-19 14:13:36 | 29.630706 |
| End | 2015-02-19 14:25:49 | 762.836577 |

# Test Engineer

| Windows Login Name | vadjle |

# Test Setup

| Version | CANoe 8.2.98 (SP4) |
| Configuration | D:\usr\usage\Delivery\CBD14x\CBD1400501\D00\internal\Tsi\_TsiStandard\CANoe\CAPL.cfg |
| Configuration Comment |  |
| Test Module Name | XML |
| Test Module File | D:\usr\usage\Delivery\CBD14x\CBD1400501\D00\internal\Tsi\_TsiStandard\CANoe\Nodes\AutomaticTests\XML.vxt |
| Last modification of Test Module File | 2015-02-10, 17:39:13 |
| Test Module Library (CAPL) | D:\usr\usage\Delivery\CBD14x\CBD1400501\D00\internal\Tsi\_TsiStandard\CANoe\Nodes\AutomaticTests\XML.can |
| Variant | SPS_TYPE_B on Dual Wire ECUs (CAN) |
| Windows Computer Name | JLE01080NBH |
| Nodelayer Module VBrsLog | CANtate Logging DLL (NLS/TFS) Version 1.2.0, D:\usr\usage\Delivery\CBD14x\CBD1400501\D00\internal\Tsi\_TsiStandard\CANoe\Exec32\VBrsLog.dll |

# Test Groups Overview

| 1. Initialisierung |
|  | Init | pass |
| 2. $1A - ReadDataByIdentifier |
| 2.1. Procedure 1 |
|  | Step 1 | pass |
| 2.2. Procedure 2 |
|  | Step1 | pass |
|  | Step2 | pass |
|  | Step3 | pass |
|  | Step4 | pass |
| 2.3. Procedure 3 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
|  | Step 4 | pass |
| 2.4. Procedure 4 |
|  | Step 2 | pass |
| 2.5. Procedure 5 |
|  | Step1 | pass |
|  | Step2 | pass |
|  | Step3 | pass |
|  | Step4 | pass |
| 3. $20 - ReturnToNormalMode |
| 3.1. Procedure 1 |
|  | Step 1 | pass |
|  | Step 2 | pass |
| 3.2. Procedure 2 |
|  | Step 1 | pass |
| 3.3. Procedure 3 |
|  | Step1 | pass |
|  | Step2 | pass |
|  | Step3 | pass |
| 3.4. Procedure 4 |
|  | Step1 | pass |
| 3.5. Procedure 5 |
|  | Step1 | pass |
| 3.6. Procedure 6 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
| 3.7. Procedure 7 |
|  | Step1 | pass |
|  | Step7 | pass |
| 3.8. Procedure 8 |
|  | Step1 | pass |
| 3.9. Procedure 9 |
|  | Step1 | pass |
|  | Step2 | pass |
| 4. $27 - SecurityAccess |
| 4.1. General Procedure |
| 4.1.1. Procedure 1 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
| 4.2. Procedure $01 / $02 |
| 4.2.1. Procedure 1 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
|  | Step 4 | pass |
| 4.2.2. Procedure 2 |
|  | Step 1 Round 1 | pass |
|  | Step 1 Round 2 | pass |
|  | Step 2 Round 1 | pass |
|  | Step 2 Round 2 | pass |
|  | Step 2 Round 1 | pass |
|  | Step 2 Round 2 | pass |
| 4.2.3. Procedure 3 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
| 4.2.4. Procedure 4 |
|  | Round 1 | pass |
|  | Round 2 | pass |
| 4.2.5. Procedure 5 |
|  | Step1 + 2 | pass |
|  | Step3 + 4 | pass |
| 4.3. Procedure $03 / $04 |
| 4.3.1. Procedure 1 |
|  | Procedure 1 | pass |
| 4.3.2. Procedure 2 |
|  | Procedure 2 | pass |
| 4.3.3. Procedure 3 |
|  | Procedure 3 | pass |
| 4.3.4. Procedure 4 |
|  | Procedure 4 | pass |
| 4.3.5. Procedure 5 |
|  | Procedure 5 | pass |
| 4.3.6. Procedure 6 |
|  | Procedure 6 | pass |
| 5. $28 - DisableNormalCommunication |
| 5.1. Procedure 1 |
|  | Procedure 1 | pass |
| 5.2. Procedure 2 |
|  | Procedure 2 | pass |
| 5.3. Procedure 4 |
|  | Step 1 | pass |
| 6. $34 - RequestDownload |
| 6.1. Procedure 1 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
| 6.2. Procedure 2 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
|  | Step 4 | pass |
|  | Step 5 | pass |
|  | Step 6 | pass |
|  | Step 7 | pass |
|  | Step 8 | pass |
|  | Step 9 | pass |
|  | Step 10 | pass |
| 6.3. Procedure 3 |
|  | Step 1 | pass |
|  | Step 2 | pass |
| 7. $36 - TransferData |
| 7.1. Procedure 1 |
|  | Procedure 1 | pass |
| 7.2. Procedure 2 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
|  | Step 4 | pass |
| 7.3. Procedure 3 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
|  | Step 4 | pass |
|  | Step 5 | pass |
|  | Step 6 | pass |
|  | Step 7 | pass |
|  | Step 8 | pass |
| 7.4. Procedure 4 |
|  | Procedure 4 | pass |
| 7.5. Procedure 5 |
|  | Step 1 | pass |
| 7.6. Procedure 6 |
|  | Procedure 6 | pass |
| 7.7. Procedure 7 |
|  | Step 1 | pass |
| 8. $3E - TesterPresent |
| 8.1. Procedure 1 |
|  | Step 1 | pass |
| 8.2. Procedure 2 |
|  | Procedure 2 | pass |
| 8.3. Procedure 3 |
|  | Procedure 3 | pass |
| 8.4. Procedure 4 |
|  | Procedure 3 | pass |
| 8.5. Procedure 5 |
|  | Procedure 5 | pass |
| 8.6. Procedure 6 |
|  | Procedure 6 | pass |
| 9. $A2 - ReportProgrammedState |
| 9.1. Procedure 1 |
|  | Step1 | pass |
|  | Step 2 | pass |
| 9.2. Procedure 2 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
|  | Step 4 | pass |
|  | Step 4 | pass |
| 10. $A5 - ProgrammingMode |
| 10.1. General Procedures |
| 10.1.1. Procedure 1 |
|  | Procedure 1 Step 1 - 6 | pass |
|  | Procedure 1 Step 7 | pass |
|  | Procedure 1 Step 8 | pass |
| 10.1.2. Procedure 2 |
|  | Step 1 | pass |
|  | Step 2 | pass |
|  | Step 3 | pass |
|  | Step 4 | pass |
|  | Step 5 | pass |
|  | Step 6 | pass |
|  | Step 7 | pass |
|  | Step 8 | pass |
|  | Step 9 sub parameter 0x01 | pass |
|  | Step 9 sub parameter 0x02 | pass |
|  | Step 9 sub parameter 0x03 | pass |
|  | Step 10 | pass |
| 10.1.3. Procedure 3 |
|  | Procedure 3 Step 1 - 2 | pass |
|  | Step 3 | pass |
| 10.2. Normal Speed |
| 10.2.1. Procedure 1 |
|  | Step 1 | pass |
