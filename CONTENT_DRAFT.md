# Portfolio content — synced with the website

This file is a **mirror of the website's current content** (read from `src/data/*.json`), used as a
free-text place to view/edit copy without needing to touch raw JSON.

Sync rule: whenever this file changes, the matching `src/data/*.json` file(s) must be updated to match —
and whenever `src/data/*.json` changes, this file must be updated too. See the full rule in `CLAUDE.md` →
"Content sync policy" section.

Images: all current images are placeholders from `picsum.photos` (except the avatar, which uses seed
`cam-huynh-phan`). Portfolio currently uses icons (lucide) instead of real images per project — there's no
dedicated image field yet.

---

## 1. Profile (left sidebar) — `src/data/profile.json`

- Name: Cam Huynh Phan
- Initial (letter shown when there's no avatar): C
- Title: Front-end Developer
- Email: cam.phan12993@gmail.com
- Location: Base in Da Nang, Vietnam
- Copyright text: © 2026 Cam Huynh Phan. All Rights Reserved
- "Hire Me!" button → mailto:cam.phan12993@gmail.com
- "Download CV" button → /CamPhan-CV.pdf
- Social links:
  - LinkedIn: https://www.linkedin.com/in/camphan12993
  - GitHub: https://github.com/camphan12993
- Avatar: TODO — currently a placeholder at `https://picsum.photos/seed/cam-huynh-phan/400/500`

## 2. Hero / Introduce (page opener) — `src/data/hero.json`

- Greeting: "Say Hi from **Cam**, Front-end Developer"
- Subtitle: I believe an interface should be felt, not just used — and I chase that feeling in every pixel, every interaction, and every screen I get to shape. For me, front-end development and design aren't separate disciplines; they're two sides of the same craft.
- Stats:
  - "8+" — Years of experience
  - "20+" — Projects completed across 4+ countries

## 3. Resume / Experience (education & work history) — `src/data/resume.json`

- 2021 - 2026 - Infostatus
  - Front-end Team Leader
  - UI/UX Designer
  - Description: Led and grew a front-end team delivering production web applications in Angular and React for international clients, from architecture decisions to code review standards. Also acted as the company's UI/UX and branding lead — designing interfaces in Figma, defining the visual identity, and shaping the corporate website — so design and engineering decisions stayed consistent across every project the team shipped.
- 2017 - 2020 - Enouvo IT Solution
  - Angular Team Leader
  - Description: Managed a team of Angular developers building enterprise-grade web applications for outsourcing clients, from technical architecture through delivery. Set coding conventions and reviewed pull requests to keep quality consistent across the codebase, coordinated sprint planning with product owners, and mentored junior engineers as the team scaled.
- 2016 - 2017 - FPT Software Da Nang
  - Java Developer
  - Description: Built and maintained backend services in Java for outsourcing clients, working within an agile team to implement features, fix defects, and write unit tests. This role gave an early grounding in server-side logic and database design that later shaped how I approach full-stack collaboration as a front-end lead.
- 2011 - 2016 - Da Nang University of Technology
  - Bachelor of Information Technology
  - Description: Studied software engineering fundamentals — data structures, algorithms, databases, and object-oriented design — with a growing focus on web development in the final years, which set the direction for a front-end-focused career afterward.

## 4. Certificates — `src/data/certificates.json`

- AWS Cloud Practitioner — Amazon Web Services — Link: (none yet)
- TOEIC 760 — IIG — Link: (none yet)

## 5. Skills (with proficiency %) — `src/data/skills.json`

### Coding

- HTML/CSS/JavaScript — 90%
- Angular — 90%
- Flutter — 80%
- Astro.js — 80%
- Next.js — 50%
- React — 55%
- Node.js — 45%

### Design

- Figma — 80%
- Branding & Visual Design — 75%

### Soft Skill

- Leadership — 80%
- Communication — 90%
- Teamwork — 90%
- Problem Solving — 85%
- English — 75%

## 6. Portfolio (featured projects) — `src/data/portfolio.json`

- Project name: DTI
  - Description: A real-time monitoring and operations platform used by tram operators in Melbourne, Australia, tracking vehicle status, schedules, and incidents across the network.
  - Tech stack: Angular, Material, OpenStreetMap, NgRx
  - Angular formed the backbone of the app, styled with Angular Material for a clean, consistent interface. A WebSocket connection kept vehicle positions and incident data flowing in real time straight onto the map, which was built on OpenStreetMap and customized to match the product's visual language. NgRx tied it all together, keeping state predictable as data streamed in continuously from across the tram network.
  - Team size: 8 people
  - Role: Front-end Lead & Project Manager — Served as technical lead and primary front-end developer, translating the client's operational requirements into a scalable Angular architecture. Acted as the main point of contact with the Australian client for solution alignment and release planning, managed the project roadmap, and mentored new members joining the 8-person team.
  - Icon: tram-front

- Project name: Staff Management System
  - Description: An in-house HR management platform built by Enouvo — covering employee records, attendance, and payroll workflows — later packaged and resold as a configurable product to multiple external clients.
  - Tech stack: Angular, CoreUI, Chart.js, NGXS
  - Angular paired with CoreUI gave the interface a clean, enterprise-ready feel across every client configuration. Chart.js brought the dashboards to life with attendance and payroll trends at a glance, while NGXS kept state management lean and predictable as the same codebase flexed to fit each client's needs.
  - Team size: 5 people
  - Role: Front-end Team Leader — Directed a 5-person front-end team in designing a single codebase that could be configured per client rather than forked and rebuilt each time. Defined the module structure and coding standards that kept the shared codebase maintainable as more clients came on board, and worked directly with client stakeholders to scope customization requests before implementation began.
  - Icon: users

- Project name: Investor Zero
  - Description: A startup platform helping first-time investors put together pitches and raise funding online, connecting founders with early-stage backers.
  - Tech stack: Angular, PrimeNG, Angular Universal, NGXS, PDF.js
  - Angular and PrimeNG formed the foundation of the UI, fast to iterate on as product priorities shifted week to week. Angular Universal added server-side rendering for fast first loads and better SEO, NGXS kept state manageable through rapid MVP changes, and PDF.js powered in-browser document viewing and e-signatures — letting founders and backers review and sign pitch documents without ever leaving the app.
  - Team size: 6 people
  - Role: Front-end Team Leader & UI/UX Designer — Led a 6-person front-end team through the startup's MVP phase, where priorities shifted week to week and speed mattered as much as quality. Worked directly with the founder to turn early product ideas into shippable features, iterating the UI/UX design based on user feedback while keeping the Angular front-end structured enough to support fast changes.
  - Icon: trending-up

- Project name: PayLocker
  - Description: A startup platform built by Infostatus that connects contractors and homeowners to manage payments and construction progress with full transparency for both sides.
  - Tech stack: Angular, PrimeNG, Tailwind CSS, Sumsub SDK
  - Angular, PrimeNG, and Tailwind CSS combined to give contractors and homeowners an interface that felt clear and trustworthy at every step. State flowed through Angular services paired with signals for fine-grained reactivity, and the Sumsub SDK was woven in to handle KYB/KYC verification, keeping both sides of every transaction accountable.
  - Team size: 5 people
  - Role: Front-end Team Leader & UI/UX Designer — Owned the payment and construction-progress tracking flows end to end, from wireframes to production UI, designing them to stay clear and trustworthy for homeowners with no construction background. Set the Angular front-end architecture for the wider product, mentored newer members of the 5-person team, and stayed accountable for the overall quality bar as the product moved from MVP to a client-facing release.
  - Icon: hard-hat

- Project name: HallyuClass
  - Description: An online Korean-learning app for beginner-to-advanced learners, combining structured lessons, vocabulary practice, and progress tracking.
  - Tech stack: Flutter, Riverpod, Google Speech, Codemagic
  - Flutter Material shaped a clean, lesson-friendly interface, with Riverpod keeping state predictable across screens. A WebSocket connection streamed learners' voice recordings to the server and back in real time, powering a Google Speech-driven pronunciation feature that gave instant feedback on Korean pronunciation. Codemagic handled CI/CD end to end, automating builds and releases straight to the App Store and Google Play.
  - Team size: 3 people
  - Role: Mobile Developer — Built the app end to end in Flutter as part of a 3-person team, from the first screens through release, including setting up the build pipeline and publishing to the App Store and Google Play.
  - Icon: languages

- Project name: NGK Spark Plug
  - Description: An internal inventory app for a Japanese client, tracking electronic components on a spark plug production line at a factory to reduce manual counting errors.
  - Tech stack: Flutter, Provider, Sqflite, Firebase Cloud Messaging, Codemagic
  - Flutter Material kept the interface simple and functional for factory-floor use, with Provider managing state throughout the app. Sqflite gave the app offline-first local storage, so staff could keep counting components even through patchy factory Wi-Fi, while Firebase Cloud Messaging pushed real-time alerts the moment they were needed. Built strictly for internal use, the app shipped as Ad Hoc builds distributed through Codemagic rather than published to the public app stores.
  - Team size: 4 people
  - Role: Mobile Developer — Worked as part of a 4-person team embedded with a Japanese client, building the component-tracking app in Flutter against tight factory-floor requirements. Handled QA cycles directly with the client and coordinated release timing to the App Store and Google Play around production schedule constraints.
  - Icon: factory

## 7. Nav (right-side navigation menu) — `src/data/nav.json`

The menu currently matches the actual sections on the page (no more "About" entry — the About section was
removed from the site, so the `#about` link, which had gone dead, was removed when this file was synced):

- Introduce → #introduce
- Resume → #resume
- Certificates → #certificates
- Skills → #skills
- Portfolio → #portfolio

---

The **About, Services, Testimonials, Brands, Pricing** sections were removed from the site (component +
data file) in a previous refactor and no longer exist — no need to fill in content for these anymore.

To change content: edit this file directly (free-text prose is fine), and the matching
`src/data/*.json` file(s) will be read and updated. Conversely, if the content in code (`src/data/*.json`)
changes first, this file will be updated to match — see `CLAUDE.md`.
