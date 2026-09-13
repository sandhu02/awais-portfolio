# Muhammad Awais — Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Play](https://img.shields.io/badge/Google_Play-Developer-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/dev?id=8090709539067395999)

A modern, high-performance portfolio web application showcasing the engineering work, native Android applications, backend systems, and technical skill set of **Muhammad Awais Amjad** — Native Android Developer & Full-Stack Mobile Engineer.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, featuring an editorial color-blocked layout, custom SVG wireframe illustrations, interactive project modals, and a dark aesthetic accented with brand emerald green (`#169458`).

---

## 🌟 Key Highlights & Features

- **Editorial Hero & Navigation**:
  - Distinctive brand logo with customizable bracket accents.
  - Live availability badge (`Available for Android & Backend Projects`).
  - Smooth in-page anchor navigation to Services, Skills, and Projects.
- **About & Professional Background**:
  - Highlights experience in native Android development, backend architecture, and Requirements & QA Engineering (Splenify).
  - High-resolution workspace visuals and developer bio.
- **Services Offered**:
  - Color-blocked service cards with custom vector motifs (`Wave`, `Stairs`, `Loop`).
  - Spans **Native Android Development** (Kotlin & Compose), **Front-End Development**, and **Back-End Development** (Node.js/Express, WebSockets, WebRTC).
- **Technical Skills Matrix**:
  - 4-quadrant breakdown covering:
    - **Android & Mobile Core** (Kotlin, Jetpack Compose, Coroutines & Flow, Material 3)
    - **Architecture & System APIs** (MVVM/Clean Arch, Hilt, LauncherApps API, NotificationListener, Glance)
    - **Backend & Real-Time** (Node.js, Express, Socket.IO, WebRTC, Firebase, MongoDB, Cloudinary)
    - **Testing, DevOps & QA** (Play Console, Git/GitHub, Docker, SRS & SDLC)
- **Interactive Projects Showcase & Modal Deep-Dive**:
  - Custom wireframe geometry icons for each project (`Polyhedron`, `Octahedron`, `Hourglass`).
  - Clickable project cards opening rich detail modals (`ProjectModal.tsx`).
  - Displays key features, architectural notes, metrics, tech tags, and links to source code and Google Play releases.
- **Interactive Contact & Quick-Copy Footer**:
  - One-click copy-to-clipboard for email and phone number with instant feedback toast.
  - Direct links to GitHub, LinkedIn, Google Play Developer console, and WhatsApp.

---

## 📱 Featured Projects Showcased

| Project | Type | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- |
| **[JsonLauncher](https://play.google.com/store/apps/details?id=com.awais.jsonlauncher)** | Native Android App | Kotlin, Jetpack Compose, MVVM, Hilt, LauncherApps API | Minimalist launcher rendering phone telemetry as live JSON; instant fuzzy search; Google Play Alpha testing. |
| **[Signstream](https://github.com/sandhu02/Signstream)** | Full-Stack Mobile & Cloud | Kotlin, Jetpack Compose, Node.js, Socket.IO, WebRTC | Real-time social feed, short videos, sub-100ms bidirectional chat, peer-to-peer audio calling via WebRTC. |
| **[JsonClock](https://github.com/sandhu02/JsonClock)** | Android Glance Widget | Kotlin, Jetpack Compose Glance, WorkManager, Material 3 | Declarative home screen widget displaying date, time, and battery telemetry in JSON format; ultra-low battery footprint. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Typography**: [Geist & Geist Mono](https://vercel.com/font) via `next/font`
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Code Quality**: ESLint 9 (`eslint-config-next`)
- **Icons & Graphics**: Custom inline SVG wireframes and responsive vectors (`Vectors.tsx`)

---

## 📂 Project Structure

```text
awais-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Global styles & Tailwind CSS v4 setup
│   ├── layout.tsx          # Root layout, metadata & Geist font configuration
│   └── page.tsx            # Main portfolio page composing all sections
├── components/
│   ├── HeaderHero.tsx      # Top branding bar and hero section
│   ├── AboutSection.tsx    # Professional bio and workspace imagery
│   ├── ServicesSection.tsx # 3-column color-blocked services showcase
│   ├── SkillsSection.tsx   # Categorized technical competencies matrix
│   ├── ProjectsSection.tsx # Projects list with 3D wireframe indicators
│   ├── ProjectModal.tsx    # Detailed project modal with architecture deep-dives
│   ├── ContactFooter.tsx   # Interactive contact footer with copy actions
│   └── Vectors.tsx         # Handcrafted geometric SVG wireframes & arrows
├── data/
│   └── portfolio.ts        # Central source of truth for bio, skills, services & projects
├── public/
│   └── images/             # Visual assets, app screenshots, and project previews
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sandhu02/awais-portfolio.git
   cd awais-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts the Next.js development server with hot-reloading |
| **Build** | `npm run build` | Compiles and builds the production-ready optimized application |
| **Production Start** | `npm run start` | Serves the production build locally |
| **Linting** | `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## ⚙️ Customization & Updating Content

All data is decoupled from presentation and stored in [`data/portfolio.ts`](data/portfolio.ts):

- **Personal Info & Bio**: Update `PERSONAL_INFO` (name, titles, phone, email, socials).
- **Services**: Modify `SERVICES` to adjust service titles, color themes, and descriptions.
- **Skills**: Edit `SKILL_CATEGORIES` to update technical proficiencies and categories.
- **Projects**: Add or edit entries in `PROJECTS` (title, summary, tech stack, images, key features, metrics, architecture notes, and URLs).

---

## 📬 Contact & Connect

**Muhammad Awais Amjad**  
Native Android Developer & Full-Stack Mobile Engineer — Islamabad, Pakistan

- **GitHub**: [@sandhu02](https://github.com/sandhu02)
- **LinkedIn**: [in/awais02](https://www.linkedin.com/in/awais02/)
- **Google Play**: [Developer Page](https://play.google.com/store/apps/dev?id=8090709539067395999)
- **Email**: [awaissandhu1026r@gmail.com](mailto:awaissandhu1026r@gmail.com)
- **WhatsApp**: [+92 319 6137128](https://wa.me/923196137128)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
