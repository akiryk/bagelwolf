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

- GA4 + Microsoft Clarity (to be added).

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
├─ public/              # Static assets served at root
├─ src/
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
6. Netlify deploys to production automatically

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

## 📌 Roadmap

Future additions:

- Analytics (GA4 + Clarity)
- Enhanced email capture & welcome flow
- Hotplate ordering integration
- More content pages & bakery updates
- Improved accessibility & SEO refinements

---

## 🧩 Contributing

This project uses both manual development and AI-assisted workflows (Claude Code, ChatGPT).
Guidelines for AI tools live in:
🔗 **[`CLAUDE.md`](./CLAUDE.md)**

---

## 🥯 About Bagelwolf

Bagelwolf is a small artisanal bakery dedicated to slow-fermented bagels and breads, crafted in Durango, Colorado.
This site exists to share the story, explain the craft, and make it easy to order fresh baked goods.
