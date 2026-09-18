---
title: "SIP Delivery ReadMe (converted)"
description: "Converted delivery information: target, compiler, components."
sidebar:
  label: "Delivery ReadMe"
  order: 12
nav_order: 12
---


> **Source:** `Doc/DeliveryInformation/ReadMe.pdf`  •  **Pages:** 6  •  **Converted to Markdown for search and web reading.**

> Original PDF is authoritative for layout, figures and tables. Text extraction cannot preserve images, exact table borders or fonts. See the PDF in this repository for the normative version.

## Document metadata

| Field | Value |
|---|---|
| Title | Technical Reference |
| Author | Frank Voorburg |
| Subject | Vector CANfbl |
| Creator | Microsoft® Word 2010 |
| Producer | Microsoft® Word 2010 |
| CreationDate | D:20150224194220-05'00' |
| ModDate | D:20150224194220-05'00' |

## Contents (extracted)

_Page-by-page text extraction. Headings/lists below reflect the PDF text order, not original styling._

### Page 1

Flash Bootloader Delivery Information 1 General Target Processor: TMS570LS0714PGEQQ1 Compiler Software Version: TI CCS v4.9.5 OEM: GM Software License Package: SLP5 2 Software Components The following components can be found in found the FBL folder of your delivery.  Do not modify the contents of these files without prior written permission from Vector (modification of these files will void your warranty).

Component Description fbl_diag Module implements diagnosis service functions. The implementation is specific to requirements defined the OEM. fbl_flio Flash I/O routines provide interface to flash driver fbl_hdr Secure Fbl header parsing module fbl_hw Hardware dependent code (CAN communication and H/W Timer) fbl_main Main module with main loop fbl_mem Library containing common functionality for memory programming fbl_mio General purpose API to device -drivers (MIO == Memory Input/Output) fbl_tp Transport Layer – Combines (and splits) diagnostics requests (and responses) across multiple CAN message frames. fbl_vect FBL vector table – defines all Interrupt Service vectors (usually this cannot be modified fbl_wd Watchdog support module

The following components must be adapted by the customer and are located in the FBL\_Template directory of your delivery.

Component Description _applvect _fbl_applvect Application vector table – Jump table to all Interrupt Service Routines in Operating Software. _fbl_ap Hardware specific callback routines _fbl_apdi  Application specific diagnostic routines _fbl_apnv Nonvolatile memory access routines, e.g. for presence-pattern handling. _fbl_apwd Application specific watchdog routines


---

### Page 2

Flash Bootloader Readme 2015, Vector Informatik GmbH Version: 1.0 based on template version 1.1 2 / 6 3 Documentation Documentation concerning the Flash Bootloader can be found in the _Doc folder of your delivery.

File Description AN-ISC-21011_CANfblGM_CALL_From_CANdesc.pdf Calling the Bootloader from applications using CANdesc. TechnicalReference_FBL_GM_CMPR.pdf Technical Reference for GM compression interface TechnicalReference_FBL_TMSx70.pdf Hardware specific Flash Bootloader reference guide TechnicalReference_FBL_GM_SLP5.pdf Technical Reference for the Flash Bootloader TechnicalReference_FBL_GM_Containers.pdf  Technical Reference describing downloadable container file creation UserManual_FlashBootloader.pdf Getting started with the Flash Bootloader TechnicalReference_SecurityModule.pdf Technical Reference for the Security Module Software TechnicalReference_NvWrapper.pdf Technical Reference for the non-volatile wrapper component TestReport.pdf Flash Bootloader Integration Test Report.

UserManual_FlashBootloader.pdf Getting started with the Flash Bootloader DeliveryDescription_CBD1400501.html Version information for delivered components

4 Software Tools The following Vector tools are included in your Flash Bootloader package.

Name Description GENy Code generation tool which auto generates parameter files for the Flash Bootloader based on customer input. vFlash Flash tool which is capable of downloading application as well as calibration data to an ECU running the Flash Bootloader. Hexview Viewer and editor of container files. May be used to edit & create required containers.

GENy configuration When creating your own GENy configuration please use the following settings.


---

### Page 3

Flash Bootloader Readme 2015, Vector Informatik GmbH Version: 1.0 based on template version 1.1 3 / 6 5 Build The Bootloader supports the Texas Instruments  compiler version 4.9.5 of the command line tools.

Compiler and Linker Options

The Compiler and Linker Options used in this Bootloader can be found in DeliveryDescription_CBD1400501.html.

Compiler Warnings

Vector develops software that leads to as few compiler warnings as possible.  It is unfortunately impossible to write  platform-independent software that is functional on small 8-bit micro-controllers and powerful 32 -bit micro-controllers and does not lead to compiler warnings. Changes to reduce the number of warnings for one compil er sometimes increase the number of warnings for another compiler.

The following compiler warnings occurred during integration and do no harm:

"../../../demo/demofbl/appl/include/MemMap.h", line 182: warning: pragma can only be applied to a file level symbol, not 'fblStartMagicFlag'

"../../../bsw/fbl/fbl_flio.h", line 95: remark: zero used for undefined preprocessing identifier

"../../../demo/demofbl/appl/include/MemMap.h", line 200: warning: pragma DATA_SECTION can only be applied to a file level symbol definition, not "eepData" (declared at line 154 of "..\..\..\bsw\eep\EepIO.h")

"../../../BSW/FBL/fbl_hw.c", line 161: warning: nonstandard conversion between pointer to function and pointer to data

"../../../BSW/FBL/fbl_mem.c", line 1525: remark: controlling expression is constant


---

### Page 4

Flash Bootloader Readme 2015, Vector Informatik GmbH Version: 1.0 based on template version 1.1 4 / 6 Demo Application The demo application DemoAppl is in principle a flash Bootloader with a few modifications and different linkage than the DemoFbl. The jump from the application into the flash Bootloader is prepared and executed in fbl_jmpToBoot.c.

Please check TechnicalReference_FBL_GM_Containers.pdf for detailed information on creating downloadable container files.


---

### Page 5

Flash Bootloader Readme 2015, Vector Informatik GmbH Version: 1.0 based on template version 1.1 5 / 6 6 Known Issues See IssueReport_CBD1400501.pdf.


---

### Page 6

Flash Bootloader Readme 2015, Vector Informatik GmbH Version: 1.0 based on template version 1.1 6 / 6 7 Contact Any questions concerning the Flash Bootloader package should be sent to the following email address.

fbl_support@us.vector.com

Visit our website for more information on

>   News >   Products >   Demo software >   Support >   Training data >   Addresses

www.vector-informatik.com


---
