---
title: "Programmable Data File Creation — Containers (converted)"
description: "Converted container/download-format reference for GM SLP5."
sidebar:
  label: "Ref: Containers"
  order: 22
nav_order: 22
---


> **Source:** `Doc/TechnicalReferences/TechnicalReference_FBL_GM_Containers.pdf`  •  **Pages:** 17  •  **Converted to Markdown for search and web reading.**

> Original PDF is authoritative for layout, figures and tables. Text extraction cannot preserve images, exact table borders or fonts. See the PDF in this repository for the normative version.

## Document metadata

| Field | Value |
|---|---|
| Title | Flash Bootloader OEM |
| Author | Dennis O'Donnell |
| Creator | Microsoft® Word 2010 |
| Producer | Microsoft® Word 2010 |
| CreationDate | D:20141020163443+02'00' |
| ModDate | D:20141020163443+02'00' |

## Contents (extracted)

_Page-by-page text extraction. Headings/lists below reflect the PDF text order, not original styling._

### Page 1

Flash Bootloader OEM Technical Reference

CANfbl GM - Programmable Data File Creation

Version 1.1

Authors: Dennis O'Donnell, Andreas Wenckebach Status: Released


---

### Page 2

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 2 / 17 1 Document Information 1.1 History Author Date Version Remarks Dennis O’Donnell 2014-01-31 1.0 Creation Andreas Wenckebach 2014-10-20 1.1 Added Global B, update screenshots

1.2 Reference Documents No. Source Title Document No. Version [1]  GM For Global A: Global-A Secure Bootloader Specification

For Global B: GB6002 Bootloader Specification For Global A: N/A

For Global B: GB6002 For Global A: 3.1, July 29, 2013 For Global B: 0.9, May-192014 [2]  Vector For Global A: Technical Reference – CANfbl GM SLP5

For Global B: Technical Reference – CANfbl GM SLP6 For Global A: N/A

For Global B: N/A For Global A: 1.0

For Global B: 1.0 Table 1-1  References Documents


---

### Page 3

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 3 / 17 Contents 1 Document Information ................................ ................................ ................................ .. 2 1.1 History ................................ ................................ ................................ ............. 2 1.2 Reference Documents ................................ ................................ ..................... 2 2 Introduction ................................ ................................ ................................ ................... 5 3 General Description of Programmable Data Files................................ ....................... 6 4 Creating Programmable Data Files ................................ ................................ .............. 7 4.1 Determine logical configuration of the ECU ................................ ..................... 7 4.2 XML File Configuration ................................ ................................ .................... 7 4.3 Script File Configuration ................................ ................................ ................ 11 4.4 Generating and using Programmable Data Files. ................................ .......... 13 4.4.1 Switching from development keys to production keys ................................ .... 14 4.4.2 File Generation Issues ................................ ................................ .................. 15 5 Glossary ................................ ................................ ................................ ...................... 16 6 Contact................................ ................................ ................................ ......................... 17


---

### Page 4

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 4 / 17 Illustrations Figure 4-1 Example xml configuration. ................................ ................................ ............. 8 Figure 4-2  Example configuration of Gen_All.bat ................................ ........................... 12 Figure 4-3 Example function calls to generate programmable data files for 1 application and n-calibrations (generic) ................................ ......................... 13 Figure 4-4  Example function calls to generate programmable data files for 1 application and 2 explicit calibrations ................................ ............................ 13 Figure 4-5 Format of SBA ticket, the SignerInfo can be extracted using bytes 28-565 (there is 2 “data type” bytes in front of Module ID to be additionally removed). ................................ ................................ ................................ ...... 14


---

### Page 5

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 5 / 17 2 Introduction This document covers how to create Programmable Data Files as specified by GM (see [1]).  Adding data structure containers with the help of the Vector tool HexView is specifically covered.


---

### Page 6

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 6 / 17 3 General Description of Programmable Data Files A programmable data file is a container which includes content and information on how to process, program, and validate the content [1].  The content is either a single application or a single calibration module.   Each programmable data file will contain one or more enhancements, which are applied recursively to the content .  In general, each programmable data file will have at least two enhancements; plain and signed. More enhancements may be optionally used (e.g. compressed, encrypted, or difference). For more information on programmable data files please refer to [1] Chapter 10 Programmable Data Files and [2].


---

### Page 7

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 7 / 17 4 Creating Programmable Data Files Programmable data files can be created u sing the tool HexView along with an example script and xml file.  HexView is able to create plain and signed data types and add them to actual application and calibration data, effectively creating programmable data files.  The example script and xml file must be configured specifically for your ECU. The result of the process will give two sets of files.  One set of signed fil es and one set of plain files. The signed files can be used during development as inputs to the programming tool (e.g. vFlash). In this case the ECU will be configured with the example security keys provided by Vector. After switching to production key that changes (compare 4.4.1) The plain files can be used during production by passing them to GM to be sign ed. In this case the ECU will be configured with the production security keys provided by GM. 4.1 Determine logical configuration of the ECU The first step is to determine the logical configuration of the ECU. Determine the memory map. Determine where the appl ication will be located in memory. Decide how many calibrations are used and what partitions will be used to locate them. This information will be used to configure the XML and script files.

Note When designing the logical configuration of the ECU it is necessary to reserve space at the lowest address of a module for the plain header.  This is because the plain header must be sent before any other data that is programmed to flash.

4.2 XML File Configuration An example XML file (_ModGenBase.xml) is provided with Vector bootloader deliveries for GM Cyber Security ECUs.  This file must be configured with information such as ECU ID, ECU Name, number of partitions, and number of calibration modules.  The configuration must be set to meet your specific ECU requirements.


---

### Page 8

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 8 / 17

Figure 4-1 Example xml configuration.


---

### Page 9

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 9 / 17 XML Element Description GmProject The attribute “Name” can be any string to describe the name of the project. Required child elements: HeaderVersion SignedHeaderInfo ApplHeaderInfo CalHeaderInfo (if ApplHeaderInfo defines any calibrations) HeaderVersion Version of the GM header format.  Currently should always be 1.00. SignedHeaderInfo Information for the signed header info.Required child elements: image EcuId EcuName image Filename of a hex file containing the signer information for the ECU. An example hex file is provided (SignerInfoDummyKey.hex) that may be used with the example keys that are also provided in the Vector delivery. This is intended for use during development. For production ECUs GM will provide the signed header. In this case, the hex file specified here is not important, so best just keep it. If you want to use the SBA ticket inside the Fbl you need to configure a valid GM SignerInfo, check 4.4.1 EcuId ECU ID as specified by GM.  Generally this is set to zero (as shown in figure 4-1), meaning that the file can be downloaded to any ECU. EcuName ECU Name as specified by GM. ApplHeaderInfo Information for the application header. The attribute “name” must be equivalent to <module name> in the script file (e.g. Gen_All.bat) that will generate this application module. Required child elements: HeaderAddress ModuleId BCID NBID DLS PartNumber MessageDigestDataProcessing Partitions HeaderAddress Address of the application plain header. This determines where the plain header will be generated to. ModuleId ID of the current module as specified by GM. BCID Bootloader compatibility identifier. This must match what is stored in the bootloader


---

### Page 10

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 10 / 17 XML Element Description NBID Application not before identifier. DLS Design Level Suffix. PartNumber Part number of the module. MessageDigestDataProces sing Data processing algorithm number to be used by HexView. Currently this should be 32. Partitions The attribute “NumberOfPartitions” must be set to the number of calibration partitions to be used. Required child elements (if “NumberOfPartitions” greater than 0): Partition Partition This element must be present the number of times specified by “NumberOfPartitions” in the element “Partitions”. The attribute “NumberOfRegions” must be set to the number of address regions used within this partition. Required child elements: Region CalFiles Region This element must be present the number of times specified by “NumberOfRegions” in the element “Partition”. The attribute “start” must be set to the start address of this region. The attribute “length” must be set to the length of this region (i.e. end address – start address + 1).

Caution Regions must be listed in ascending order by starting address.

CalFiles The attribute “NumberOfCalFiles” must be set to the number of calibration files within this partition. Required child elements: Image Image This element must be present the number of times specified by “NumberOfCalFiles” in the element “CalFiles” The attribute “BaseAddress” must be set to the address of the plain header in the calibration file. Filename of calibration file that has already been populated with the plain header.

Caution Calibration files must be listed in ascending order by “BaseAddress”.


---

### Page 11

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 11 / 17 XML Element Description CalHeaderInfo Information for the calibration header. This element must be present for each calibration file that is specified by the application. The attribute “name” must be equivalent to <module name> in the script file (e.g. Gen_All.bat) that will generate this calibration module. Required child elements: ModuleId CCID DLS PartNumber CCID Calibration compatibility identifier. Table 4-1  Description of XML elements in _ModGenBase.xml. 4.3 Script File Configuration An example script file ( _Gen_All.bat) is provided with Vector bootloader deliveries for GM Cyber Security ECUs.  This file must be configured to create the programmable data f iles required for your ECU.  Several parameters must be set based on requirements and local machine.


---

### Page 12

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 12 / 17 Figure 4-2  Example configuration of Gen_All.bat

Script file parameter Description HEXVIEW_EXE Path and filename of HexView executable file. XML_MOD_DEF Path and filename of the xml file that contains information for your ECU (e.g. ModGenBase.xml). PRIVATE_KEY_SOURCE Text file containing 2048 bit RSA key (private key).  The delivery includes a valid demo key (rsakeys_2048.txt) that can be used during development to create development suited signed header containers.

CAL_FOLDER Folder containing all calibration files. The script will add the enhancements to all files found in this folder that are referenced by the XML configuration also. OUTFORMAT File extension of output files (e.g. gbf or bin). PEXT Sub-name of output files that contain only the plain header. PLAIN_FOLDER Path to place output files that contain only the plain header. These files can be passed to GM to be signed. SEXT Sub-name of output files that contain the signed header. ALIGN Alignment options for HexView.  This is used to pad data before adding plain and signed headers. CS Checksum algorithm to be used to calculate the checksum of the data that is programmed.  The checksum is placed in the first two bytes of the plain header.  Cs5 should be used for big endian ECUs and Cs6 should be used for little endian ECUs. FILL Fill options for HexView.  This is used to fill gaps in between data before adding plain and signed headers. SILENT This can be used to call HexView silently (use –s) or not (leave blank). Table 4-2  Description of Gen_All.bat configurations The header generation func tion must be called for each module used by the ECU.  For application modules, the GenAppHeaders function should be called. For calibration modules, the GenCalHeaders function should be called. All required modules should be handlded in  Gen_All.bat. The De mo will use a “for loop” to call GenCalHeaders for all modules (files) found in %CAL_FOLDER%. Use the same <module name> as used in the XML configuration file. Specify the path and filename of the hex file that will be used for each module.


---

### Page 13

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 13 / 17

Figure 4-3 Example function calls to generate programmable data files for 1 application and n-calibrations (generic)

Figure 4-4  Example function calls to generate programmable data files for 1 application and 2 explicit calibrations

Caution Calibration files should be generated before application files because the application file generation depends on the calibration files.

Caution The functions GenCalHeaders and GenAppHeaders used in Gen_All.bat are designed to generate programmable data files that are sufficient in most cases.  Please contact Vector for further assistance in case the generated files are not suitable for your use case.

4.4 Generating and using Programmable Data Files. Once the XLM file and script file are configured properly the programmable data files can be generated. The files are generated by running the script file (Gen_All.bat).  The script file will call HexView to generate the f iles.  The file generation will produce a set of files that contain only the plain header and a set of files that contai n the plain and signed headers. The signed files can be downloaded to an ECU that uses the example keys from Vector. Specifically, the bootloader is configured to use the example public key that matches the example private key specified in the script file and through the signer info hex file. The plain files can be passed to GM for signing. In this case, the private key configured in the script file is not used. The files signed by GM can be used with a bootloader configured with the public key that is given by GM.


---

### Page 14

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 14 / 17 4.4.1 Switching from development keys to production keys When switching from development keys (provided by Vector) to production key s (provided by GM) it is not always necessary to change the XML or script files described in this document. The keys themselves only affect the signed header and do not affect the plain header. This means that changing the keys in the XML or script files d oes not affect the generation of the plain files. Therefore, without making any changes, the plain files still can be provided to GM for signing.

The plain files only need to be regenerated for the following reasons:  There is a general ECU change that affects the plain header (e.g. application/calibration update/rebuild, partition/memory map change, etc.)  The App-NBID needs to be updated (e.g. this may be requested by GM  even if the application/calibration data has not changed in any way). The signed files  generally are not needed any more after switching to production keys. However, with loaded SBA ticket ( this way by-passing the Security mechanism ) you can use the script again to generate a signed header correctly formatted . The signature can be wrong in this use case because it is not validated by the FBL.  Note that you will have to configure a GM SignerInfo (XML element “image”) file in this case to our environment , as the signature within the SignerInfo has still to be valid. A valid SignerInfo can e.g.  be extracted from GM’s SBA ticket, compare ).

Figure 4-5 Format of SBA ticket, the SignerInfo can be extracted using bytes 28-565 (there is 2 “data type” bytes in front of Module ID to be additionally removed). For a given SBA ticket SBAT.bin and a resulting binary output SingerInfo.bin can be retrieved by using the below command: hexview.exe  SBAT.bin -cr:0-27:566-821 -XB -o SignerInfo.bin (cuts out 28 bytes at the beginning and 256 bytes at the end)


---

### Page 15

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 15 / 17 4.4.2 File Generation Issues In case the XML or script file is not configured properly, HexView will not report an error while attempting to generate the files.  Because of this, it is important to check that the intended files were actually generated and that they generated correctly.  This can be done, for example, by checking the timestamps of the files and testing them by programming them with the bootloader.

Note In some instances HexView will generate an error if something is wrong with the XML configuration.  Check the folder where Gen_All.bat is located for any .err files.  Because HexView does not generate an error in all failure cases this method cannot be solely relied upon.  It is still necessary to check if the files generated correctly.

In case the files did not generate correctly, it is recommended to briefly check the files and then contact Vector if the issue cannot be quickly resolved.  When contacting Vector for support with programmable data file generation please provide the following.  Description of the observed issue (e.g. the files do not generate).  The XML file used.  The script file used.  The application and calibration hex/s19 files that are used as inputs.

Caution HexView version 1.08.03 or greater is required.  Please check your HexView version in case of error.


---

### Page 16

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 16 / 17 5 Glossary Abbreviations and Expressions Explanation HexView Vector provided PC tool that is used to manipulate hex and s19 files. vFlash Programming test tool available from Vector.


---

### Page 17

Technical Reference Flash Bootloader OEM 2014, Vector Informatik GmbH Version: 1.1 based on template version 3.2 17 / 17 6 Contact FblSupport@vector-informatik.de

Visit our website for more information on

>   News >   Products >   Demo software >   Support >   Training data >   Addresses

www.vector-informatik.com


---
