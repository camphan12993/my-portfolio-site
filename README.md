# Cam Huynh Phan — Portfolio

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). A three-column dark-themed layout showcasing resume, certificates, skills, and projects.

**Live site:** [camphan.netlify.app](https://camphan.netlify.app)

## Stack

- **[Astro](https://astro.build)** (v7) — static site framework, file-based routing
- **Tailwind CSS v4** via `@tailwindcss/vite` — theme tokens defined in `src/styles/global.css`
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** + `@iconify-json/lucide` — icon system
- **[AOS](https://michalsnik.github.io/aos/)** — scroll animations
- **TypeScript** (strict)

## Project structure

```text
/
├── public/                    # static assets (favicons, avatar, CV, etc.)
├── src/
│   ├── components/
│   │   ├── sections/          # Hero, Resume, Certificates, Skills, Portfolio
│   │   ├── PortfolioFrame.astro  # three-column app shell
│   │   ├── Sidebar.astro      # left column — profile card
│   │   └── SideNav.astro      # right column — icon nav
│   ├── data/                  # *.json — all page copy, one file per section
│   ├── layouts/
│   │   └── Layout.astro       # HTML shell, meta tags, Open Graph/Twitter cards
│   ├── pages/
│   │   └── index.astro        # assembles sections into the page
│   └── styles/
│       └── global.css         # Tailwind v4 @theme tokens (colors, etc.)
├── CONTENT_DRAFT.md           # free-text source of truth for copy, mirrored into src/data/*.json
└── astro.config.mjs
```

## Design system

Dark-only theme, colors defined as Tailwind v4 `@theme` tokens:

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#141414` | page background |
| `panel` / `panel-2` | `#1a1a1a` / `#1f1f1f` | cards, avatar frame |
| `line` | `#2b2b2b` | borders |
| `accent` / `accent-ink` | `#2fe6a6` / `#0b0f0d` | highlight text, active nav, buttons |
| `ink` / `muted` / `faint` | `#f5f5f5` / `#9a9a9a` / `#6b6b6b` | text hierarchy |

## Getting started

```sh
npm install
npm run dev       # dev server at localhost:4321
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run any Astro CLI command, e.g. `astro check` |
| `npm run stop` | Stop a background dev server |

## Editing content

All page copy lives in `src/data/*.json`, one file per section. `CONTENT_DRAFT.md` is a free-text mirror of the same content and is treated as the source of truth — edit it first, then propagate the change into the matching JSON file(s).

## Deployment

The site is deployed to [Netlify](https://www.netlify.com) from the `main` branch.
