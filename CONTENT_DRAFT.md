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
  - Mô tả: Led the front-end team building web applications with Angular and React, while owning the company's UI/UX, branding, and website design — bridging engineering and design across projects.
- 2017 - 2020 - Enouvo IT Solution
  - Angular Team Leader
  - Mô tả: Led a team of Angular developers delivering enterprise web applications, owning technical decisions and code quality.
- 2016 - 2017 - FPT Software Da Nang
  - Java Developer
  - Mô tả: Developed and maintained backend services in Java as part of a software outsourcing team.
- 2011 - 2016 - Da Nang University of Technology
  - Bachelor of Information Technology
  - Mô tả: Focused on software engineering and web development fundamentals.

## 4. Certificates (chứng chỉ) — `src/data/certificates.json`

- AWS Cloud Practitioner — Amazon Web Services — Link: (chưa có)
- TOEIC 760 — IIG — Link: (chưa có)

## 5. Skills (kỹ năng, có % thành thạo) — `src/data/skills.json`

### Coding

- HTML/CSS/JavaScript — 90%
- Angular — 90%
- Flutter — 80%
- Astro.js — 80%
- Tailwind CSS — 70%
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
  - Mô tả: A monitoring and operations system for tram services in Melbourne, Australia.
  - Công nghệ: Angular, .NET
  - Quy mô: 8 people
  - Vai trò: Front-end Lead & Project Manager — Technical lead and Front-end developer. Main point of contact with the Australian client to align on solutions and plan feature rollouts, while also mentoring new team members and owning the overall quality of the project.
  - Icon: tram-front

- Tên dự án: Staff Management System
  - Mô tả: An in-house HR management system built by Enouvo and sold to multiple clients.
  - Công nghệ: Angular, .NET, SQL Server
  - Quy mô: 5 people
  - Vai trò: Front-end Team Leader — Guided the team to build the product in a way that can be customized for different clients. Owned the shared codebase quality and Front-end architecture direction, while working directly with each client to clarify customization requirements before implementation.
  - Icon: users

- Tên dự án: Investor Zero
  - Mô tả: A startup product helping first-time investors pitch ideas and raise funding online.
  - Công nghệ: Angular, Node.js, Postgres
  - Quy mô: 6 people
  - Vai trò: Front-end Team Leader & UI/UX Designer — Led the Front-end team during the startup's early product (MVP) phase, quickly turning ideas into features. Owned the Front-end technical direction and worked closely with the founder to iterate the product based on market feedback, while also owning the product's UI/UX design.
  - Icon: trending-up

- Tên dự án: PayLocker
  - Mô tả: A startup platform built by Infostatus connecting contractors and homeowners to manage payments and construction progress transparently.
  - Công nghệ: Angular, .NET, SQL Server
  - Quy mô: 5 people
  - Vai trò: Front-end Team Leader & UI/UX Designer — Responsible for building payment and construction-progress tracking flows that are transparent and easy to understand for non-technical users. Managed product quality, set the Front-end technical direction, and mentored new team members. Also owned the end-to-end UI/UX design for these flows, from wireframes to final interface.
  - Icon: hard-hat

- Tên dự án: HallyuClass
  - Mô tả: An online Korean-learning app for beginners, with lessons ranging from basic to advanced.
  - Công nghệ: Flutter, Node.js, Postgres
  - Quy mô: 3 people
  - Vai trò: Mobile Developer — Built the app end-to-end with Flutter from development through release, including publishing to the App Store and Google Play.
  - Icon: languages

- Tên dự án: NGK Spark Plug
  - Mô tả: An internal app for managing electronic components on a spark plug production line at a factory in Japan.
  - Công nghệ: Flutter, Firebase, PHP, MySQL
  - Quy mô: 4 people
  - Vai trò: Mobile Developer — Member of the internal project team for a Japanese client, building the component-management app in Flutter, handling QA, and coordinating app releases to the stores.
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
