# Nội dung Portfolio — bản đồng bộ với website

File này là **bản phản chiếu nội dung hiện tại của website** (đọc từ `src/data/*.json`), dùng làm nơi
xem/sửa nội dung bằng tiếng Việt hoặc văn xuôi tự do, không cần đúng định dạng JSON.

Quy tắc đồng bộ: mỗi khi `src/data/*.json` đổi, file này phải được cập nhật theo — và ngược lại,
mỗi khi sửa file này, nội dung tương ứng trong `src/data/*.json` cũng phải được cập nhật. Xem quy tắc
đầy đủ trong `CLAUDE.md` → mục "Content sync policy".

Ảnh: các ảnh hiện tại đều là placeholder từ `picsum.photos` (trừ avatar, dùng seed `cam-huynh-phan`).
Portfolio hiện dùng icon (lucide) thay vì ảnh thật cho từng dự án — chưa có field ảnh riêng.

---

## 1. Profile (sidebar trái) — `src/data/profile.json`

- Tên: Cam Huynh Phan
- Initial (chữ cái hiển thị khi không có avatar): C
- Chức danh: Front-end Developer
- Email: cam.phan12993@gmail.com
- Vị trí (location): Base in Da Nang, Vietnam
- Copyright text: © 2026 Cam Huynh Phan. All Rights Reserved
- Nút "Hire Me!" → mailto:cam.phan12993@gmail.com
- Nút "Download CV" → /cv.pdf (TODO: cần file CV thật tại `public/cv.pdf`)
- Social links:
  - LinkedIn: https://www.linkedin.com/in/camphan12993
  - GitHub: https://github.com/camphan12993
- Ảnh đại diện (avatar): TODO — hiện là placeholder `https://picsum.photos/seed/cam-huynh-phan/400/500`

## 2. Hero / Introduce (mở đầu trang) — `src/data/hero.json`

- Câu chào: "Say Hi from **Cam**, Front-end Developer"
- Câu mô tả ngắn (subtitle): I believe an interface should be felt, not just used — and I chase that feeling in every pixel, every interaction, and every screen I get to shape. For me, front-end development and design aren't separate disciplines; they're two sides of the same craft.
- Số liệu nổi bật (stats):
  - "8+" — Years of experience
  - "20+" — Projects completed across 4+ countries

## 3. Resume / Experience (học vấn & kinh nghiệm) — `src/data/resume.json`

- 2021 - 2026 - Infostatus
  - Front-end Team Leader
  - UI/UX Designer
  - Mô tả: Led and grew a front-end team delivering production web applications in Angular and React for international clients, from architecture decisions to code review standards. Also acted as the company's UI/UX and branding lead — designing interfaces in Figma, defining the visual identity, and shaping the corporate website — so design and engineering decisions stayed consistent across every project the team shipped.
- 2017 - 2020 - Enouvo IT Solution
  - Angular Team Leader
  - Mô tả: Managed a team of Angular developers building enterprise-grade web applications for outsourcing clients, from technical architecture through delivery. Set coding conventions and reviewed pull requests to keep quality consistent across the codebase, coordinated sprint planning with product owners, and mentored junior engineers as the team scaled.
- 2016 - 2017 - FPT Software Da Nang
  - Java Developer
  - Mô tả: Built and maintained backend services in Java for outsourcing clients, working within an agile team to implement features, fix defects, and write unit tests. This role gave an early grounding in server-side logic and database design that later shaped how I approach full-stack collaboration as a front-end lead.
- 2011 - 2016 - Da Nang University of Technology
  - Bachelor of Information Technology
  - Mô tả: Studied software engineering fundamentals — data structures, algorithms, databases, and object-oriented design — with a growing focus on web development in the final years, which set the direction for a front-end-focused career afterward.

## 4. Certificates (chứng chỉ) — `src/data/certificates.json`

- AWS Cloud Practitioner — Amazon Web Services — Link: (chưa có)
- TOEIC 760 — IIG — Link: (chưa có)

## 5. Skills (kỹ năng, có % thành thạo) — `src/data/skills.json`

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

## 6. Portfolio (dự án nổi bật) — `src/data/portfolio.json`

- Tên dự án: DTI
  - Mô tả: A real-time monitoring and operations platform used by tram operators in Melbourne, Australia, tracking vehicle status, schedules, and incidents across the network.
  - Công nghệ: Angular, .NET
  - Quy mô: 8 people
  - Vai trò: Front-end Lead & Project Manager — Served as technical lead and primary front-end developer, translating the client's operational requirements into a scalable Angular architecture. Acted as the main point of contact with the Australian client for solution alignment and release planning, managed the project roadmap, and mentored new members joining the 8-person team.
  - Icon: tram-front

- Tên dự án: Staff Management System
  - Mô tả: An in-house HR management platform built by Enouvo — covering employee records, attendance, and payroll workflows — later packaged and resold as a configurable product to multiple external clients.
  - Công nghệ: Angular, .NET, SQL Server
  - Quy mô: 5 people
  - Vai trò: Front-end Team Leader — Directed a 5-person front-end team in designing a single codebase that could be configured per client rather than forked and rebuilt each time. Defined the module structure and coding standards that kept the shared codebase maintainable as more clients came on board, and worked directly with client stakeholders to scope customization requests before implementation began.
  - Icon: users

- Tên dự án: Investor Zero
  - Mô tả: A startup platform helping first-time investors put together pitches and raise funding online, connecting founders with early-stage backers.
  - Công nghệ: Angular, Node.js, Postgres
  - Quy mô: 6 people
  - Vai trò: Front-end Team Leader & UI/UX Designer — Led a 6-person front-end team through the startup's MVP phase, where priorities shifted week to week and speed mattered as much as quality. Worked directly with the founder to turn early product ideas into shippable features, iterating the UI/UX design based on user feedback while keeping the Angular front-end structured enough to support fast changes.
  - Icon: trending-up

- Tên dự án: PayLocker
  - Mô tả: A startup platform built by Infostatus that connects contractors and homeowners to manage payments and construction progress with full transparency for both sides.
  - Công nghệ: Angular, .NET, SQL Server
  - Quy mô: 5 people
  - Vai trò: Front-end Team Leader & UI/UX Designer — Owned the payment and construction-progress tracking flows end to end, from wireframes to production UI, designing them to stay clear and trustworthy for homeowners with no construction background. Set the Angular front-end architecture for the wider product, mentored newer members of the 5-person team, and stayed accountable for the overall quality bar as the product moved from MVP to a client-facing release.
  - Icon: hard-hat

- Tên dự án: HallyuClass
  - Mô tả: An online Korean-learning app for beginner-to-advanced learners, combining structured lessons, vocabulary practice, and progress tracking.
  - Công nghệ: Flutter, Node.js, Postgres
  - Quy mô: 3 people
  - Vai trò: Mobile Developer — Built the app end to end in Flutter as part of a 3-person team, from the first screens through release, including setting up the build pipeline and publishing to the App Store and Google Play.
  - Icon: languages

- Tên dự án: NGK Spark Plug
  - Mô tả: An internal inventory app for a Japanese client, tracking electronic components on a spark plug production line at a factory to reduce manual counting errors.
  - Công nghệ: Flutter, Firebase, PHP, MySQL
  - Quy mô: 4 people
  - Vai trò: Mobile Developer — Worked as part of a 4-person team embedded with a Japanese client, building the component-tracking app in Flutter against tight factory-floor requirements. Handled QA cycles directly with the client and coordinated release timing to the App Store and Google Play around production schedule constraints.
  - Icon: factory

## 7. Nav (menu điều hướng bên phải) — `src/data/nav.json`

Menu hiện khớp với các section thực tế trên trang (không còn mục "About" — section About đã bị xoá khỏi
site, nav trỏ tới `#about` là link chết nên đã được gỡ khi đồng bộ file này):

- Introduce → #introduce
- Resume → #resume
- Certificates → #certificates
- Skills → #skills
- Portfolio → #portfolio

---

Các section **About, Services, Testimonials, Brands, Pricing** đã bị xoá khỏi site (component + data file)
trong lần refactor gần nhất và không còn tồn tại — không cần điền nội dung cho các mục này nữa.

Muốn sửa nội dung: sửa trực tiếp file này (tiếng Việt/văn xuôi tự do đều được), tôi sẽ đọc và cập nhật
`src/data/*.json` tương ứng. Ngược lại, nếu nội dung trong code (`src/data/*.json`) đổi trước, file này
cũng sẽ được cập nhật lại để khớp — xem `CLAUDE.md`.
