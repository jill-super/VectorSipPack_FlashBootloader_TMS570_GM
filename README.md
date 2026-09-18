# TMS570 GM Flash Bootloader

![Language: C](https://img.shields.io/badge/language-C-blue)
![Platform: TI TMS570](https://img.shields.io/badge/platform-TI_TMS570-orange)
![OEM: GM SLP5](https://img.shields.io/badge/OEM-GM_SLP5-red)
![Standard: AUTOSAR Classic](https://img.shields.io/badge/standard-AUTOSAR_Classic-green)
![License: MIT](https://img.shields.io/badge/license-MIT-green)
![Docs: Astro Starlight](https://img.shields.io/badge/docs-Astro_Starlight-purple)

An AUTOSAR-based **flash bootloader** for the Texas Instruments **TMS570** (GM SLP5): UDS diagnostics over CAN, secure download containers, and on-chip flash programming. Ships as a **Vector Software Integration Package (SIP)** plus in-house demo/integration code.

> **Vector vs. custom — read before editing.**
> Files under `BSW/` and GENy output are **Vector-provided** (do not hand-edit; warranty void without written permission). Demo apps, header/container scripts and this documentation are **custom**. Every docs page carries an origin badge. Third-party code (TI F021 API, GNU tools, tool binaries) keeps its own license.

## Table of contents

- [Documentation site (GitHub Pages)](#documentation-site-github-pages)
- [Features](#features)
- [Repository structure](#repository-structure)
- [AUTOSAR layer & module map](#autosar-layer--module-map)
- [Prerequisites](#prerequisites)
- [Build instructions](#build-instructions)
- [Usage](#usage)
- [Vector SIP](#vector-sip)
- [Converted documentation](#converted-documentation)
- [License](#license)
- [Disclaimer](#disclaimer)

## Documentation site (GitHub Pages)

The `docs/` folder is an **[Astro Starlight](https://starlight.astro.build/)** site, ready for GitHub Pages (bring your own workflow).

- **Local preview:** `cd docs && npm ci && npm run dev` → `http://localhost:4321/`
- **Published URL (fork-compatible):** enable **Settings → Pages → Source: GitHub Actions**, then open the Pages URL shown under Settings → Pages / Deployments (no hardcoded URL in this repo so forks work unchanged).
- **Start pages:** `docs/src/content/docs/index.mdx` (landing) → `layers/`, `modules/`, `sip/`, `general/`.

<details>
<summary>Why Starlight and not “Just the Docs”?</summary>

The request named Jekyll themes (“Just the Docs” / “Minimal Mistakes”), which are **not Astro-compatible**. This repo uses **Starlight — the official, most popular Astro documentation theme** — as the Astro equivalent. Jekyll-style `parent` / `nav_order` keys are kept in frontmatter for familiarity, while Starlight’s `sidebar.label` / `sidebar.order` drives the actual sidebar. No `_config.yml` is needed (Pages deploys the Astro build artifact, not Jekyll).

</details>

## Features

- **Target:** TI TMS5700714PGEQQ1 (Cortex-R4, DCAN, F021 flash), TI CCS 4.9.5.
- **GM SLP5 bootloader:** UDS-on-CAN diagnostics, ISO-TP transport, stay-in-boot / jump-to-app.
- **Security:** HIS Security Module (CRC + verification classes incl. SHA-256/RSA paths); **demo-only** RSA-2048 keys.
- **Containers:** plain (`.gbf` for OEM signing) → signed download containers, 0–3 calibration parts.
- **Integration:** GENy project + CAN database, memory/NV/watchdog configuration, demo app + demo FBL.
- **Tooling:** vFlash template, HexView viewer, header generator, vendored GNU Make.

## Repository structure

```text
BSW/                 Basic Software (mostly Vector SIP — do not hand-edit)
  FBL/               Bootloader core: main/diag/TP/mem/hdr/CAN/HW/WD (+ _template/)
  SecMod/            HIS Security Module
  WrapNv/            NV-Wrapper (NVRAM abstraction)
  Eep/               EEPROM wrapper (EepIO)
  Flash/             Flash driver + TI F021 API (Build/ + F021_Flash_API_*)
  _Common/           Shared platform types (v_def.h)
Demo/                In-house integration examples
  DemoFbl/           Bootloader integration + GENy Gendata + CAN db
  DemoAppl/          Demo application + 4 container variants (ApplHdr_*)
Generators/          GENy/DaVinci plugins (Vector tooling)
Makesupport/         GNU Make infrastructure + vendored make/cmd tools
Misc/                Header generator, HexView tool, demo keys, dummy config
Doc/                 Original PDFs/HTML (sources for converted docs)
FlashTool/           vFlash template installer + seedkey placeholder
docs/                Astro Starlight documentation site (this README’s companion)
.github/             Dependency management (Renovate/Dependabot config)
```

<details>
<summary>Full top-level listing</summary>

```text
BSW/ Demo/ Doc/ FlashTool/ Generators/ Makesupport/ Misc/
README.md LICENSE docs/ .github/
```

Browse subdirectories for `Makefile*`, `m.bat`/`b.bat`/`q.bat`, `*.gny`, `*.dbc`, `ModGenBase.xml`, and per-module headers.

</details>

## AUTOSAR layer & module map

| Module | Path(s) | Layer | Origin |
|---|---|---|---|
| FBL core (main/diag/TP/mem/hdr/CAN/HW/WD) | `BSW/FBL` | CDD | Vector-provided |
| Security Module (HIS) | `BSW/SecMod` | BSW Services | Vector-provided |
| NV-Wrapper | `BSW/WrapNv` + `Demo/DemoFbl/Appl/Gendata/WrapNv_cfg.*` | BSW Services | Vector-provided (+ generated cfg) |
| Eep (EepIO) | `BSW/Eep` | ECU Abstraction | Vector-provided |
| Flash driver | `BSW/Flash/flashdrv.*`, `flashrom.*`, `Build/` | MCAL | Vector-provided (+ custom `flashrom`) |
| TI F021 Flash API | `BSW/Flash/Build/F021_Flash_API_v02.00.01` | MCAL (third-party) | Third-party (TI) |
| Common types | `BSW/_Common/v_def.h` | MCAL base | Vector-provided |
| Demo application | `Demo/DemoAppl/Appl` | ASW | Custom |
| Demo FBL integration | `Demo/DemoFbl` (incl. `Gendata/`) | Integration | Vector-generated + customised |
| GENy plugins | `Generators/Components` | Tools | Vector tooling |
| Make infrastructure | `Makesupport/`, `*/Makefile*`, `*/m.bat` | Tools | Vector + custom |
| Header/container generator | `Misc/HdrGen`, `Demo/*/ApplHdr_*/` | Tools | Custom |
| HexView viewer | `Misc/HexView` | Tools | Vector tooling |
| vFlash template | `FlashTool/` | Tools | Vector tooling |
| Demo keys / dummy cfg | `Misc/DemoKey_2048`, `Misc/Config` | Tools | Custom (demo only) |

Per-module details (purpose, key files, API, dependencies, converted refs): open the [docs site](#documentation-site-github-pages) → **Modules**, or read `docs/src/content/docs/modules/` directly.

## Prerequisites

- **Hardware:** TI TMS5700714PGEQQ1 target (or compatible TMS570 derivative).
- **OS for builds:** Windows (batch wrappers + CCS paths assume Windows).
- **Compiler:** TI Code Composer Studio **4.9.5**; set `COMPILER_BASE` in each `Makefile.Config`.
- **Build tools:** GNU Make (a Windows `make.exe` is vendored in `Makesupport/cmd/`), `sh`/`cat`/`cp` helpers from the same folder.
- **Config tools:** GENy 01.04.0043 (see `Generators/Components/version.info`) for `*.gny` changes.
- **Docs site:** Node.js ≥ 18.17 + npm (only for `docs/`).

## Build instructions

<details open>
<summary><b>Flash driver only</b></summary>

```bat
cd BSW\Flash\Build
m.bat
```

Outputs: `FlashDrv_F021.hex`, `.out`, `.map`, `.ini` (linker: `FlashDrv_F021.lcf`). Uses the little-endian Cortex-R4 F021 library variant.

</details>

<details>
<summary><b>Bootloader integration (Demo FBL)</b></summary>

```bat
cd Demo\DemoFbl\Appl
m.bat
```

Pulls `Makefile`, `Makefile.Config`, `Makefile.project.part.defines`, `Makefile.TMS470.TI.ALL.make`, `Makefile.derivative.memorymap` plus `Gendata/` configs. Regenerate `Gendata/` with GENy after `.gny`/`.dbc` edits.

</details>

<details>
<summary><b>Demo application</b></summary>

```bat
cd Demo\DemoAppl\Appl
m.bat
```

For signed-download tests, build a container variant:

```bat
cd ApplHdr_without_cal
Gen_All.bat
```

Collect `GeneratedAndToSignedByGm/*_plain.gbf` for OEM signing; the returned `*_sign.gbf` files are the downloadable images. `SignerInfoDummyKey.hex` is **test-only**.

</details>

<details>
<summary><b>Docs site</b></summary>

```bash
cd docs
npm ci
npm run dev      # local preview
npm run build    # static build -> docs/dist
npm run check-links  # markdown + internal-link check
```

Build and deploy the docs with your own GitHub Actions workflow (not included).

</details>

## Usage

1. Program the bootloader (and optionally the demo app) with a standard TMS570 flashing setup.
2. Connect CAN (see `Demo/DemoFbl/Config/demo_sw.dbc` for IDs/baud).
3. Use UDS services for fingerprint, erase/program/verify, checksum/signature verification, and reset-to-app.
4. For application development, start from `Demo/DemoAppl/Appl/Source/appl_main.c` and the `fbl_ap*` callback templates; for ECU integration, copy the `Demo/DemoFbl` structure and re-generate for your CAN/matrix.

## Vector SIP

The delivery is **SIP 05.03.02**, license serial **CBD1400501** (delivery 2014-12-24, package `FBL Gm SLP5 D00`). Pin: `BSW/FBL/v_ver.h` (`_VECTOR_SIP_*`), `Doc/DeliveryInformation/DeliveryDescription_*.html`, and the docs site’s [**Vector SIP** section](#documentation-site-github-pages) (`docs/src/content/docs/sip/`).

- SIP modules have mirrored pages under `docs/src/content/docs/sip/modules/` linking to the full references.
- SIP evidence (converted): delivery description, ReadMe, issue/test reports, GMW3110 procedures — see next section.
- Rules: customise via `fbl_ap*` + GENy; quote SIP version + serial when contacting support; demo keys never ship.

## Converted documentation

All PDFs/HTML/TXT docs are converted to searchable Markdown (text extraction; originals remain authoritative for layout/figures/signatures):

- **Module refs:** `docs/src/content/docs/modules/cdd/fbl/` (SLP5, containers, compression, TMSx70 HW, CANdesc note, SBA notes), `modules/bsw/secmod/`, `modules/bsw/wrapnv/`, `modules/mcal/flash/ti-f021-*/`, `modules/tools/hexview/`.
- **General:** `docs/src/content/docs/general/` (delivery description/ReadMe/addendum, issue/test reports, GMW3110, user manual, disclaimers, demo-keys note).
- **Sources:** `Doc/`, `Misc/HexView/ReferenceManual_HexView.pdf`, `BSW/Flash/Build/F021_Flash_API_v02.00.01/*.{pdf,txt}`.

No `.doc`/`.docx` files exist in this repo; every `.pdf`, `.html` (as documentation), and documentation `.txt` found has a converted page. The demo RSA key file is summarised (not reproduced) with a demo-only warning.

## License

Custom code and documentation in this repository use the **MIT License** — see [`LICENSE`](LICENSE).

Third-party deliveries keep their own terms and are **not** relicensed by the MIT file: Vector SIP (`BSW/`, GENy output, `Generators/`, `Makesupport/` build infra), TI F021 API, vendored GNU/Cygwin tools, tool binaries (vFlash, HexView), and original PDFs/HTML. See the scope note at the end of `LICENSE` and each module page’s origin badge.

## Disclaimer

Provided “as is”, without warranty. Demo keys, dummy configs and example containers are **test-only**. See [`Misc/HexView/disclaimer.txt`](Misc/HexView/disclaimer.txt) and the delivery documents before use in any vehicle or production context.

---

*Docs: [`docs/`](docs/) (Astro Starlight) · Build: `BSW/Flash/Build/m.bat`, `Demo/DemoFbl/Appl/m.bat`, `Demo/DemoAppl/Appl/m.bat` · [Back to top](#tms570-gm-flash-bootloader)*
