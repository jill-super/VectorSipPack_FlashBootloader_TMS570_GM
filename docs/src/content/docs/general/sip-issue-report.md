---
title: "SIP Issue Report CBD1400501 (converted)"
description: "Converted issue report for SIP 05.03.02 (FBL GM SLP5, TMS570)."
sidebar:
  label: "Issue report"
  order: 14
nav_order: 14
---


> **Source:** `Doc/DeliveryInformation/IssueReport_CBD1400501.pdf`  •  **Pages:** 10  •  **Converted to Markdown for search and web reading.**

> Original PDF is authoritative for layout, figures and tables. Text extraction cannot preserve images, exact table borders or fonts. See the PDF in this repository for the normative version.

## Document metadata

| Field | Value |
|---|---|
| Producer | iText® 5.4.1 ©2000-2012 1T3XT BVBA (AGPL-version) |
| CreationDate | D:20150225150707-05'00' |
| ModDate | D:20150225150707-05'00' |

## Contents (extracted)

_Page-by-page text extraction. Headings/lists below reflect the PDF text order, not original styling._

### Page 1

Issue Report 1 License Number Customer CBD1400501 Nexteer Automotive Corporation Package: FBL Gm SLP5 Micro: TMS5700714PGEQQ1 Compiler: TI Code Composer 4.9.5 Maintenance Expiry Date 2015-02-01 SIP Delivery Date SIP Version 2014-12-24 05.03.02 SLP Delivery Number FBL Gm SLP5 D00 Report Creation Date 2015-02-25 Contact In case of questions or the need for an update of the basic software delivery, please contact fblsupport@us.vector.com or your Vector contact person. Table of Contents 1. Introduction 1.1 Resolving Issues 1.2 Issue Classification 2. New Issues 2.1 Runtime Issues without Workaround: 0 2.2 Runtime Issues with Workaround: 1 2.3 Apparent Issues: 0 2.4 Compiler Warnings: 2 3. New Issues for Information: 0 4. Report Legend 5. Quality Management Contact


---

### Page 2

Issue Report 2 1. Introduction 1.1 Resolving Issues Reported issues are not necessarily fixed automatically by the next update delivery. If some of the reported issues shall be fixed, please contact Vector to establish an agreement about issues that shall be fixed in upcoming deliveries. Please note that Vector may fix additional issues without explicit request. 1.2 Issue Classification This Issue Report provides issues that have been detected since the last report. The issues have been classified to facilitate the assessment of their impact: The chapter 'New Issues' lists issues that have been detected since the last report and which could not be excluded based on the use-case defined in the questionnaire. The issues are classified as follows: • Runtime Issues without Workaround: Runtime issues without a workaround require an update of the basic software delivery in case the issue affects the ECU overall functionality. The effect of an issue to the ECU functionality has to be analyzed by the customer as the basic software usage and its configuration is not known by Vector. The risk of change has also to be taken into account. • Runtime Issues with Workaround: It is not recommended to update a delivery due to a runtime issue with a documented workaround. The effect of an issue to the ECU functionality has to be analyzed by the customer as the basic software usage and its configuration is not known by Vector. The risk of change has also to be taken into account. • Compiler Warnings: As a service we report the known compiler warnings. The occurrence of a compiler warning may depend on the used configuration and compiler settings. The chapter 'New Issues for Information' lists issues that are not relevant for the use case that has been documented in the questionnaire provided to Vector. The issues may, however, be relevant for other use cases. Additionally, issues that have been accepted or are tolerated by the OEM (as defined in the questionnaire) are reported here.


---

### Page 3

Issue Report 3 2. New Issues 2.1 Runtime Issues without Workaround The lists contain issues that have been detected since the last report and which could not be excluded based on the use-cases defined in the questionnaire (see chapter ‘New Issues for Information’). 2.2 Runtime Issues with Workaround It is not recommended to update a delivery due to a runtime issue with a documented workaround. The effect of an issue to the ECU functionality has to be analyzed by the customer as the basic software usage and its configuration is not known by Vector. Thereby the risk of change has also to be taken into account. Index ESCAN00078391 Tester timeout when no response pending from application previous to $34 while parsing Sba ticket in bootloader FBL_TechRef_Gm@Doc_TechRef


---

### Page 4

Issue Report 4 ESCAN00078391 Tester timeout when no response pending from application previous to $34 while parsing Sba ticket in bootloader Component@Subcomponent: FBL_TechRef_Gm@Doc_TechRef First affected version: 5.00.00 Fixed in versions: 5.01.00 Problem Description: What happens (symptoms): ------------------------------------------------------------------- When updating the application, the tester connection may be lost due to P2 response pending timeout. When does this happen: ------------------------------------------------------------------- This may happen if the SBA-ticket signature is verified while transitioning from application to bootloader. Note: Signature verification will only be done, if the verification entry checks for e.g. valid Module ID, ECU-ID succeed (COND_SBA_TICKET_LOADED). The $36 response has to come within 100ms. This can be hold for some controller if COND_SBA_TICKET_LOADED does not apply. Therefore you might have such a configuration in theory. If COND_SBA_TICKET_LOADED applies connection will be lost if your controller requires more than some ms for verification (usually the case), however. In which configuration does this happen: ------------------------------------------------------------------- Always, when COND_SBA_TICKET_LOADED applies.

Resolution Description: Workaround: ------------------------------------------------------------------- Send a response pending message from application previous to $34. Resolution: ------------------------------------------------------------------- No resolution in bootloader possible (only in application user code implementation of transition ). 2.3 Apparent Issues Apparent issues are detected immediately when using the basic software. If an issue does not show up while working with the basic software the ECU project is not affected by the issue. Apparent issues may or may not have workarounds. No issue to be reported.


---

### Page 5

Issue Report 5 2.4 Compiler Warnings As a service we also provide the known compiler warnings. The occurrence of a compiler warning may depend on the used basic software configuration and compiler settings. Index ESCAN00064938 Compiler warning: implicit arithmetic conversion from 'unsigned int' to 'unsigned char' FblTp_Iso@Implementation ESCAN00077761 Compiler warning: Conversion from integer to smaller pointer SysService_SecModHis@Impl_Verification


---

### Page 6

Issue Report 6 ESCAN00064938 Compiler warning: implicit arithmetic conversion from 'unsigned int' to 'unsigned char' Component@Subcomponent: FblTp_Iso@Implementation First affected version: 3.00.00 Fixed in versions: Problem Description: What happens (symptoms): ------------------------------------------------------------------- Compiler warns of implicit arithmetic conversion from 'unsigned int' to 'unsigned char' When does this happen: ------------------------------------------------------------------- The warning is issued by the compiler during compilation of the code in case the configuration is as described below. In which configuration does this happen: ------------------------------------------------------------------- When FBL_TP_ENABLE_TX_FRAME_PADDING or FBL_TP_ENABLE_VARIABLE_TX_DLC is enabled

Resolution Description: Workaround: ------------------------------------------------------------------- No workaround available. Resolution: ------------------------------------------------------------------- The described issue is corrected by modification of all affected work-products.


---

### Page 7

Issue Report 7 ESCAN00077761 Compiler warning: Conversion from integer to smaller pointer Component@Subcomponent: SysService_SecModHis@Impl_Verification First affected version: 2.00.00 Fixed in versions: Problem Description: What happens (symptoms): ------------------------------------------------------------------- Compiler warns: Conversion from integer to smaller pointer Example for IAR compiler: pWorkspace = (V_MEMRAM1 SEC_VERIFY_CLASS_CCC_WORKSPACE_TYPE V_MEMRAM2 V_MEMRAM3 *)pVerifyParam->currentHash.sigResultBuffer; D:\usr\usage\Delivery\CBD14x\CBD1400332\D01\external\BSW\SecMod\Sec_Verification.c",1335 Warning[Pe1053]: conversion from integer to smaller pointer When does this happen: ------------------------------------------------------------------- The warning is issued by the compiler during compilation of the code in case the configuration is as described below. In which configuration does this happen: ------------------------------------------------------------------- Always.

Resolution Description: Workaround: ------------------------------------------------------------------- No workaround available. Resolution: ------------------------------------------------------------------- The described issue is corrected by modification of all affected work-products.


---

### Page 8

Issue Report 8 3. New Issues for Information Issues which should not have an effect on the usage of the license as the issues are relevant for use cases other than those defined in the questionnaire. The list contains issues that have been detected since the last report. Issues listed in this section are not relevant for the use case that has been documented in the questionnaire provided to Vector. However, the issues may be relevant for other use cases.  Also issues that have been accepted or are tolerated by the OEM (as defined in the questionnaire) are reported here. No issue to be reported.


---

### Page 9

Issue Report 9 4. Report Legend


---

### Page 10

Issue Report 10 5. Quality Management Contact Diemo Krüger PES Quality Management Engineer Productline Embedded Software (PES)

Vector Informatik GmbH Ingersheimer Str. 24 D-70499 Stuttgart

Phone: +49 711 80670-3477 Fax: +49 711 80670-399 eMail: diemo.krueger@vector.com


---
