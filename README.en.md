# Instituto Dr. Rocha Lima Website

_Read this in other languages: [Português](README.md)_

![Tests](https://img.shields.io/badge/tests-184%20passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Vite](https://img.shields.io/badge/Vite-6-646CFF)

## 📋 About the Project

Institutional website for the **Dr. Rocha Lima Institute for Child Protection and Assistance**, a non-profit organization dedicated to protecting and assisting children and adolescents in situations of social vulnerability.

This project was developed with React and Vite, offering a modern and responsive experience to showcase the institute's social programs, team, mission, and ways to contribute.

Built for PEX I and improved during PEX V (extension projects of the Software Development program at Faculdade Descomplica).

## 🚀 Technologies Used

**Application**

- **React** 19 — Library for building user interfaces
- **Vite** 6 — Build tool and development server
- **React Router DOM** 7 — Page navigation with per-route code splitting
- **Tailwind CSS** 4 — Utility-first CSS framework
- **Swiper** — Testimonial and document carousels
- **React Hook Form** — Contact form with validation
- **EmailJS** — Backend-free form submission
- **React Hot Toast** — Notifications
- **React Modal** — Accessible modals
- **React Icons** — Icons
- **@fontsource-variable/nunito** — Self-hosted Nunito font

**Testing**

- **Vitest** 4 — Test runner (shares the Vite config)
- **Testing Library** (`react`, `user-event`, `jest-dom`) — User-centric testing
- **jsdom** — DOM environment
- **@vitest/coverage-v8** — Coverage reporting

**Build tooling**

- **sharp** — WebP conversion and resizing for images
- **ESLint** 9 — Static analysis

## 📁 Project Structure

```
irl/
├── public/                  # Served as-is (robots.txt, sitemap.xml, LCP banner)
├── scripts/
│   └── images-to-webp.js    # Converts src/assets to WebP (npm run images)
├── src/
│   ├── assets/              # Images (.webp) and video
│   │   ├── img/
│   │   │   ├── documentos/  # Certificates and legal documents
│   │   │   ├── elementos/   # Decorative graphics
│   │   │   ├── fotos/
│   │   │   ├── ods/
│   │   │   └── parceiros/
│   │   └── videos/
│   ├── components/          # 35 components plus their tests
│   ├── hooks/
│   │   ├── useSeo.js        # Per-route title, description and canonical
│   │   └── useRevelar.js    # Scroll-triggered section reveal
│   ├── pages/               # One per route
│   ├── test/
│   │   └── setup.js         # Global Vitest setup
│   ├── App.jsx              # Shell and routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind theme and animations
├── vercel.json              # SPA rewrites and /admin redirect
├── vite.config.js           # Vite + Vitest + coverage config
└── package.json
```

### Routes

| Route | Page | Notes |
| --- | --- | --- |
| `/` | Home | Statically imported (holds the LCP element) |
| `/programas` | Programs | Per-program anchors, reachable from the home cards |
| `/transparencia` | Transparency | Certificates and impact numbers |
| `/participe` | Get involved | Contact form and donation details |
| `/blog` | Blog | Lists posts published in Sanity |
| `/blog/:slug` | Post | A single post; `noindex` when the slug does not exist |
| `/obrigado` | Submission confirmation | `noindex` |
| `*` | 404 | `noindex` |

## 🎯 Features

- ✨ **Responsive Interface** — Adapts to desktop, tablet and mobile
- 📱 **Mobile Menu** — Touch-friendly navigation with current-route indication
- 🎠 **Interactive Carousels** — Testimonials and documents
- 📝 **Contact Form** — EmailJS integration with field validation
- 💰 **Donation System** — PIX drawer with QR code and bank details
- 📄 **Transparency Section** — Certificates and legal documents in a modal
- 🎯 **SDGs** — Alignment with the UN Sustainable Development Goals
- 📊 **Institute Numbers** — Animated counters
- ♿ **Accessibility** — Keyboard navigation, accessible names on every control, and `prefers-reduced-motion` support
- 🔍 **SEO** — Open Graph tags, structured data, `sitemap.xml`, `robots.txt`, and per-route title/canonical
- ⚡ **Performance** — WebP images, per-route code splitting, self-hosted font and lazy loading

## 🛠️ Installation and Execution

### Prerequisites

- Node.js 18 or later (Vite 6 dropped support for earlier versions)
- npm

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/flaviare1s/irl.git
   cd irl
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file at the project root:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_public_key

   # Sanity (see the Blog section)
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=production
   ```

   A template is available at [`.env.example`](.env.example).

   > EmailJS calls this value _Public Key_ in its dashboard, but the code reads
   > it as `VITE_EMAILJS_USER_ID`. Without these three variables the contact
   > form fails on submit.

4. **Run the project in development mode**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview the production build**

   ```bash
   npm run preview
   ```

   Available at `http://localhost:4173`.

   > Always audit performance (Lighthouse, PageSpeed) against the preview,
   > never against `npm run dev`. In development Vite serves every module
   > separately and unminified, which tanks the score in a way that has nothing
   > to do with the deployed site.

## 🧪 Testing

The suite runs on **Vitest** with **Testing Library**, querying the screen the
way a user would (roles and accessible names) rather than by CSS classes or
internal structure.

```bash
npm test              # run the suite once
npm run test:watch    # re-run on save
npm run test:coverage # generate the coverage report
```

### Coverage

| Metric | Coverage |
| --- | --- |
| Statements | 100% (380/380) |
| Branches | 94.9% (186/196) |
| Functions | 100% (126/126) |
| Lines | 100% (348/348) |

`npm run test:coverage` writes a browsable report to `coverage/index.html`,
with line-by-line detail per file. The folder is Git-ignored.

The config sets `include: ['src/**/*.{js,jsx}']` on purpose, so files with **no
tests at all** still count. Without it V8 would only measure what some test
imported, and the number would come out inflated.

### What the tests cover

- **Behaviour, not appearance** — what a component does, not how it is styled
- **Flows that span components** — for example, the "+" button on a home card navigates to `/programas` and the page scrolls to that program
- **Contact form** — field validation, the payload sent to EmailJS, and the failure path, where the user must not be sent to the thank-you page
- **Accessibility** — accessible names on controls, `aria-current` on the active route, `aria-expanded` on menus and drawers, and `inert` on whatever is closed
- **Performance decisions** — only the LCP image gets `fetchpriority="high"`, every other image gets `loading="lazy"`

### Writing new tests

Test files live next to the code as `Component.test.jsx`.
[`src/test/setup.js`](src/test/setup.js) runs first and handles two details:

- registers Testing Library's `cleanup` between tests;
- injects a `<div id="root">` into the document, because `react-modal` calls
  `Modal.setAppElement('#root')` at module scope and throws without that node.

## 📰 Blog (Sanity)

The blog reads posts from an external **Sanity** project so the Institute's team
can publish content without a developer. The site only consumes the public read
API — **no token ever reaches the frontend**, because a token in browser code is
public in practice.

The repository holds two parts:

- **the site** (this folder), which only reads;
- **[`studio/`](studio/)**, the editing panel the team writes in. It is a
  separate app, hosted for free by Sanity, and never enters the site bundle.

### 1. Get the Project ID

At [sanity.io/manage](https://sanity.io/manage), open the project and copy the
**Project ID**. It is not a secret: it appears in the public API URL.

### 2. Deploy the editing panel

```bash
cd studio
npm install
npx sanity login
npx sanity deploy
```

`deploy` asks for a name and returns the panel address
(`https://your-name.sanity.studio`). That is the link you hand to the Institute's
team — anyone publishing must be invited under **Members** in sanity.io/manage.

The Project ID sits literally in `studio/sanity.cli.js` and
`studio/sanity.config.js`. That is deliberate: it is **not a secret** (it shows
up in the public API URL), the CLI evaluates those files before loading any
`.env`, and `.env` is not versioned — leaving it there would break the panel for
anyone cloning the repo. To point at another project, change the value in both
files.

### 3. Allow public reads and the site origin

Under **sanity.io/manage → API**:

- **Dataset**: `production` must be set to **Public**. Otherwise the API answers
  401 and the site shows the unavailability notice.
- **CORS origins**: add `https://www.irl.org.br` and, for development,
  `http://localhost:5173`. Leave *Allow credentials* **unchecked** — reads are
  anonymous and do not need it.

Do not create an API token for the site. It reads as an anonymous visitor, and
that is what keeps the frontend free of secrets.

### 4. Point the site at the project

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

For production, register the same variables in the Vercel dashboard.

### 5. Publish a post

In the panel, **Post do blog → Create**. The fields:

| Field | Purpose |
| --- | --- |
| Título | Post title and browser tab title |
| Endereço da página | Generated from the title; it is the URL (`/blog/my-post`) |
| Data de publicação | Orders the listing, newest first |
| Resumo | Card text in the listing and the description on Google |
| Imagem de capa | Shown on the card and at the top of the post |
| Autor | Optional |
| Conteúdo | Post body |

The **image description** is required on purpose: it is what screen readers
announce. The content editor offers no "Heading 1" because the post title is
already the page `h1` — a second `h1` in the body would break the hierarchy.

Click **Publish**. Saving without publishing leaves a draft, and drafts do not
appear on the site.

### How the site behaves without Sanity

The blog never takes the site down. If the variables are missing, Sanity is
offline, or there are no posts yet, the page shows an explanatory notice and the
rest of the site keeps working.

## 🖼️ Images

Images under `src/assets` are committed already converted to WebP. To convert
new ones:

```bash
npm run images
```

[`scripts/images-to-webp.js`](scripts/images-to-webp.js) only processes images
actually imported by the code, resizes each one to the size it is displayed at
(2x for retina screens), rewrites the `import` statements and deletes the
original file. Unused images are listed at the end and left untouched.

## 🌐 Deployment

The project is configured for Vercel deployment through the `vercel.json` file.

To deploy:

1. Install the Vercel CLI

   ```bash
   npm install -g vercel
   ```

2. Run the deployment

   ```bash
   vercel
   ```

Remember to register the three `VITE_EMAILJS_*` variables in the Vercel
dashboard — the local `.env` is not used for production builds.

## 📜 Available Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server (`--host`, reachable on the local network) |
| `npm run build` | Production build |
| `npm run preview` | Serves the build at `http://localhost:4173` |
| `npm run lint` | ESLint |
| `npm test` | Test suite |
| `npm run test:watch` | Tests in watch mode |
| `npm run test:coverage` | Tests with coverage report |
| `npm run images` | Converts `src/assets` images to WebP |

## 📧 Contact

**Instituto Dr. Rocha Lima**

- Website: [www.irl.org.br](https://www.irl.org.br)
- Email: [irl@irl.org.br](mailto:irl@irl.org.br)
- Phone: +55 (85) 3243-6120
- Address: R. Eretides Martins, 977 — São Gerardo, Fortaleza/CE, 60320-350, Brazil
- Instagram: [@somosirl](https://instagram.com/somosirl)
- Facebook: [somosirl](https://facebook.com/somosirl)

## 💖 Support

If you would like to support Instituto Dr. Rocha Lima, visit the [donation page](https://www.irl.org.br/participe) or get in touch to learn more about how to contribute.

---

<div align="center">
  Developed for Instituto Dr. Rocha Lima
</div>
