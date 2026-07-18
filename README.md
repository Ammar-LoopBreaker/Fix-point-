<div align="center">

# FixPoint

### Point your camera. Know if it's worth fixing.

A concept homepage for a live repair-diagnosis platform — real-time AI triage, live technician matching, and a running impact ledger, built as a single responsive front end.

[![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](#)
[![Made with CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](#)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](#)
[![No build step](https://img.shields.io/badge/build-none%20required-7A9467?style=flat)](#)
[![Status](https://img.shields.io/badge/status-concept%20%2F%20front--end%20only-C1673D?style=flat)](#)

</div>

---

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Git workflow](#git-workflow)
- [Design system](#design-system)
- [Roadmap](#roadmap)
- [Acknowledgments](#acknowledgments)

---

## About

**FixPoint** is a concept platform for a market gap that mainstream repair services don't address: most people throw broken items away not because they're unfixable, but because they don't know if it's *worth* fixing, don't know who to trust, and can't find the right part without hours of research.

This repository contains the **marketing homepage** for that concept — a fully responsive, front-end-only build that demonstrates the product's core interactions (live diagnostic scanning, real-time technician matching, animated impact metrics) without a backend attached.

> **Note:** This is a front-end concept and design demonstration. The live features shown (AI diagnosis, technician matching, parts availability) are visually simulated with CSS/JS animation — there is no server, database, or API behind them yet. See [Roadmap](#roadmap) for what a full build would require.

---

## Features

-  **Animated diagnostic scan** — a scan-line sweep over a circuit-board illustration in the hero, pulsing simulated fault markers as it passes
-  **Live-style impact counters** — count-up animation for repairs completed, CO2 avoided, e-waste diverted, and money saved, triggered on scroll
-  **Simulated technician matching queue** — styled live-status cards (available / busy / offline) demonstrating the real-time dispatch concept
-  **Fully responsive** — mobile-first layout with a working hamburger menu below 900px
-  **Accessible by default** — semantic HTML, visible keyboard focus states, and full `prefers-reduced-motion` support (all animation gracefully degrades to static states)
-  **Custom design system** — no UI framework; hand-built design tokens for color, type, spacing, and motion

---

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Markup | **HTML5** | Semantic structure, no framework |
| Styling | **CSS3** | Custom properties (design tokens), CSS Grid & Flexbox, no preprocessor or utility framework |
| Behavior | **Vanilla JavaScript (ES6+)** | IIFE module pattern, no dependencies or bundler |
| Fonts | **Google Fonts** — Fraunces, Inter, JetBrains Mono | Loaded via CDN `<link>` |
| Version control | **Git & GitHub** | Source control, issue tracking, and collaboration |
| Hosting (recommended) | **GitHub Pages / Netlify / Vercel** | Static site, zero build step |

No package manager, bundler, or build tooling is required — this is intentional, to keep the project easy to clone, read, and deploy.

---

## Project structure

```
fixpoint-project/
├── index.html          # Page markup — links css/styles.css and js/script.js
├── css/
│   └── styles.css       # Design tokens, layout, components, responsive rules
├── js/
│   └── script.js         # Nav state, scroll-reveal, animated counters
└── README.md
```

`index.html` depends on the `css/` and `js/` folders sitting next to it via relative paths — keep the folder structure intact when cloning, moving, or deploying.

---

## Getting started

### Prerequisites

Nothing to install — this is a static site. You only need a modern browser. A local server (Option B below) is optional but recommended if you plan to edit the code, since some browsers restrict relative-path loading when a file is opened directly.

### Clone the repository

```bash
git clone https://github.com/<your-username>/fixpoint-project.git
cd fixpoint-project
```

### Option A — open directly

Double-click `index.html`, or open it via `File > Open` in your browser.

### Option B — run a local dev server (recommended)

```bash
# Python 3
python3 -m http.server 8000

# or, with Node installed
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## Usage

Once running, the page is fully interactive:

- Scroll to trigger the impact counter animations and section reveals
- Resize the browser below `900px` to see the mobile navigation menu
- Toggle **Reduce motion** in your OS accessibility settings to see all animation fall back to static, instant states

---

## Git workflow

This project uses a simple trunk-based workflow suited to a small, fast-moving front-end repo.

**Branch naming:**

```
main                 # always deployable
feat/<short-name>     # new feature or section, e.g. feat/matching-queue
fix/<short-name>       # bug fix, e.g. fix/mobile-nav-overlap
chore/<short-name>     # tooling, docs, cleanup
```

**Typical flow:**

```bash
git checkout -b feat/your-feature
# make your changes
git add .
git commit -m "feat: add live parts availability section"
git push -u origin feat/your-feature
```

Then open a pull request into `main` for review before merging — avoid pushing directly to `main` once the project has more than one contributor.

**Commit message convention** ([Conventional Commits](https://www.conventionalcommits.org/)):

| Prefix | Use for |
|---|---|
| `feat:` | a new feature or section |
| `fix:` | a bug fix |
| `style:` | formatting/visual changes with no logic change |
| `refactor:` | code change that isn't a fix or a feature |
| `docs:` | documentation only, e.g. this README |
| `chore:` | tooling, config, maintenance |

---

## Design system

Key design tokens (defined as CSS custom properties in `css/styles.css`):

| Token | Value | Used for |
|---|---|---|
| `--bg` | `#1B1815` | Base background (warm near-black) |
| `--accent` | `#C1673D` | Primary actions, links, highlights (copper) |
| `--moss` | `#7A9467` | Live/impact/sustainability data only |
| `--font-display` | Fraunces | Headings |
| `--font-body` | Inter | Body copy, UI |
| `--font-mono` | JetBrains Mono | Live data, statuses, technical labels |

All spacing, type scale, and radii are also token-driven — see the `:root` block at the top of `styles.css` before making visual changes.

---

## Roadmap

This repo currently covers the front-end concept only. A production build would additionally need:

- [ ] Backend API (matching engine, parts aggregation, user accounts)
- [ ] WebSocket layer for real-time technician status and parts stock updates
- [ ] WebRTC integration for live diagnostic video calls
- [ ] On-device or server-side computer vision model for fault detection
- [ ] Database schema for repairs, technicians, and impact tracking
- [ ] Authentication and technician verification flow

---

## Acknowledgments

- Fonts by [Google Fonts](https://fonts.google.com/) — Fraunces, Inter, JetBrains Mono
- Built as a design and front-end architecture concept exercise
