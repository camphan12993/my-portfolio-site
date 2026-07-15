# Project status

Personal portfolio site with a working design scaffold (dark theme, three-column layout) cloned structurally from a reference design (a "Drake" Framer-style portfolio template). Content is placeholder, copied from that same reference — replace it with real bio/projects/testimonials in `src/data/*.json` when available. Images are dummy (`picsum.photos`); swap for real assets later.

## Stack

- **Astro** (latest, v7) — static site framework, file-based routing under `src/pages/`
- **Tailwind CSS v4** via `@tailwindcss/vite` — no `tailwind.config.js`; theme tokens live in `src/styles/global.css` under `@theme` (Tailwind v4 syntax, not v3)
- **astro-icon** + **@iconify-json/lucide** — icon system; don't hand-roll SVGs, add new icons through `src/components/Icon.astro`'s `iconMap`
- **TypeScript**, `strict` config (`astro/tsconfigs/strict`)
- No test runner, linter, or formatter configured yet.

## Design system

Dark-only theme, colors defined as Tailwind v4 `@theme` tokens in `src/styles/global.css`:

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#141414` | page background |
| `panel` / `panel-2` | `#1a1a1a` / `#1f1f1f` | cards, avatar frame |
| `line` | `#2b2b2b` | borders |
| `accent` / `accent-ink` | `#2fe6a6` / `#0b0f0d` | highlight text, active nav, buttons |
| `ink` / `muted` / `faint` | `#f5f5f5` / `#9a9a9a` / `#6b6b6b` | text hierarchy |

Used as Tailwind utilities: `bg-canvas`, `bg-panel`, `border-line`, `text-accent`, `text-muted`, etc. No font pairing has been chosen yet (system sans for now).

## Architecture

Three-column app shell (`src/components/PortfolioFrame.astro`), fixed on desktop (`lg:` breakpoint) and stacked on mobile:

- **Left** — `Sidebar.astro`: profile card (avatar, contact, socials, "Hire Me") built from `src/data/profile.json`.
- **Center** — `<slot />`, the scrollable page content: an ordered list of section components from `src/components/sections/`.
- **Right** — `SideNav.astro`: vertical icon nav built from `src/data/nav.json`.

Each section in `src/components/sections/` (`Hero`, `About`, `Resume`, `Services`, `Skills`, `Portfolio`, `Testimonials`, `Brands`, `Pricing`) pulls its copy from a matching JSON file in `src/data/` and is assembled in order in `src/pages/index.astro`. Most sections share `SectionHeading.astro` (tag + `prefix`/`highlight`/`suffix` heading) for a consistent look — edit content by editing the JSON, not the section markup, unless the structure itself changes.

- `src/layouts/Layout.astro` — outer HTML shell (head, meta, imports `src/styles/global.css`, sets the dark body background).
- `src/data/*.json` — all page copy, one file per section; this is what to edit when real content arrives.
- `public/` — static assets served as-is (favicons, etc.).
- No content collections or server-side framework adapters are configured — this is a fully static site.

## Claude Code project config

- `.claude/agents/` — project-specific subagents (none defined yet; see its README for the format).
- `.claude/commands/` — project-specific slash commands (none defined yet; see its README for the format).

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Commands

```sh
npm run dev       # dev server at localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build locally
npm run astro ... # run any Astro CLI command, e.g. `npm run astro check`
```

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
