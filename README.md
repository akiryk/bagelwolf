# 🥯 Bagelwolf

A fast, modern, static marketing site for an artisanal bagel bakery.

Bagelwolf is built with **Astro** and **Tailwind CSS** to deliver a lightweight, content-focused website optimized for speed, accessibility, and easy long-term maintenance. The site is deployed on **Netlify** with automated Git-based deployments.

For the full project vision and constraints, see:

🔗 **[`PROJECT_GOALS.md`](./PROJECT_GOALS.md)**
🔗 **[`CLAUDE.md`](./CLAUDE.md)** (guidance for AI-assisted development)

---

## 🚀 Tech Stack

**Framework:**

- [Astro](https://astro.build/) — static-first site generator with minimal JavaScript by default.

**Styling:**

- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling for consistent UI and fast iteration.

**Deployment:**

- [Netlify](https://www.netlify.com/) — free-tier friendly hosting with automatic HTTPS and Git-based CI.

**Email Capture:**

- [MailerLite](https://www.mailerlite.com/) embedded forms.

**Analytics:**

- [GA4](https://analytics.google.com/analytics/web/#/a377510954p516152057/reports/intelligenthome)
- [Microsoft Clarity](https://clarity.microsoft.com/projects)

**Ordering:**

- [Hotplate](https://www.hotplate.com/bagelwolf) — online ordering platform

---

## 📦 Requirements

- **Node.js 18+**
- **npm** (bundled with Node)

---

## 🛠️ Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Then visit:
http://localhost:4321

Astro automatically reloads when you edit files.

---

## 🏗️ Build & Preview

Create a production build:

```bash
npm run build
```

Preview the optimized site locally:

```bash
npm run preview
```

The output will be generated in the `dist/` directory.

---

## 🧹 Other Scripts

Format code with Prettier:

```bash
npm run format
```

---

## 📁 Project Structure (Simplified)

```
/
├─ docs/                # Documentation
│  ├─ analytics.md      # GA4 + Clarity setup
│  ├─ seo.md            # SEO & accessibility guide
│  └─ pages.md          # Content structure
├─ public/              # Static assets served at root
├─ src/
│  ├─ components/       # Reusable Astro components
│  ├─ data/             # Typescript data
│  ├─ layouts/          # Shared layouts (header, footer, wrappers)
│  ├─ pages/            # `.astro` pages routed by filename
│  └─ styles/           # Global styles (if needed beyond Tailwind)
├─ astro.config.mjs     # Astro configuration
├─ tailwind.config.cjs  # Tailwind setup
└─ package.json
```

This structure may evolve, but simplicity is preferred.

---

## 🌐 Deployment

**Host:** Netlify

**Production URL:** configured via Netlify

## 📝 Content Management

All site content is intended to be managed via **Decap CMS** (formerly Netlify CMS).

Decap provides a browser-based editing interface backed by Git, allowing non-technical updates while preserving a fully versioned content history.

### Accessing the CMS

The admin interface lives at:

https://bagelwolfbakery.com/admin

Authentication is handled via **Netlify Identity**. Only invited users with appropriate roles can log in.

### How content changes work

Decap is a Git-backed CMS. When you save content in the admin UI:

1. Decap commits changes directly to the GitHub repository
2. The commit triggers a Netlify build
3. The site is redeployed automatically

This means:

- Content edits **modify the Git repository**
- Local development branches may become out of sync after CMS edits
- Developers should `git pull` (or `git pull --rebase`) before pushing local changes

This is expected and intentional.

### Editing content locally (advanced)

While Decap is the preferred interface, content files live in the repository and can still be edited manually by developers when needed.

If you edit content locally and also use Decap:

- Always pull latest changes first
- Treat Decap as another Git client committing to `main`

Over time, all editable site content should be represented in Decap collections.
v

### Why Netlify?

- Free tier with generous bandwidth
- Automatic deploys from GitHub
- Preview deployments for branches
- Free HTTPS with automatic certificates
- Fast CDN-backed asset delivery

### Deployment Workflow

1. Edit code locally
2. Commit and push to a feature branch
3. Netlify builds a preview URL
4. Review changes
5. Merge to `main`
6. Netlify deploys to production automatically. See https://app.netlify.com/projects/bagelwolf/

### Build Settings

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

Environment variables are managed in:
**Netlify → Site Settings → Environment Variables**

---

## ✉️ Forms

Subscriber forms use **MailerLite** embeds.
Dashboard: https://dashboard.mailerlite.com/

---

## 📚 Documentation

Detailed guides live in the `docs/` folder:

- **[Analytics](./docs/analytics.md)** — GA4 and Microsoft Clarity setup, verification steps
- **[SEO & Accessibility](./docs/seo.md)** — Meta tags, Open Graph, sitemap, accessibility checklist
- **[Pages](./docs/pages.md)** — Content structure and page descriptions

---

## 📌 Roadmap

Future additions:

- Enhanced email capture & welcome flow
- Hotplate ordering integration
- More content pages & bakery updates

---

## 🧩 Contributing

This project uses both manual development and AI-assisted workflows (Claude Code, ChatGPT).
Guidelines for AI tools live in:
🔗 **[`CLAUDE.md`](./CLAUDE.md)**

---

## 🥯 About Bagelwolf

Bagelwolf is a small artisanal bakery dedicated to slow-fermented bagels and breads, crafted in Durango, Colorado.
This site exists to share the story, explain the craft, and make it easy to order fresh baked goods.

## Typography

Fonts used in the size are Open Sans and Spectral, which are both available on Google Fonts.
h1: Open Sans 300, 36px
h2: Open Sans 300, 32px
Body: Spectral 500, 20px
Highlighted body sections: Spectral 500, 24px

## Grid/Layout

Refer to docs/layout-patterns.
This repo also includes a dev-only grid overlay tool. See docs/dev/grid-overlay.md.
