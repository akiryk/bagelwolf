# Bagelwolf

A static marketing site for a bagel bakery.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) – static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) – utility-first CSS framework

**Why this stack?** Goal is a fast, content-first marketing site with minimal JavaScript. Astro's static-first approach and Tailwind's utility classes provide a lean, performant foundation without the overhead of heavier frameworks like Next.js or full React SPAs.

## Requirements

- Node.js 18+

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Visit http://localhost:4321 to view the site.

## Build & Preview

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Other Scripts

Format code with Prettier:

```bash
npm run format
```

## Deployment

**Host:** [Netlify](https://app.netlify.com/projects/bagelwolf/overview)

**Why Netlify?**

- Generous free tier (100GB bandwidth/month)
- Git-based CI: push to `main` → automatic build → deploy
- Built-in form handling (useful for email signup)
- Free HTTPS with automatic certificate management
- Preview deployments for branches/PRs

**Deployment workflow:**

1. Edit code locally
2. Commit and push to a feature branch
3. Netlify creates a preview deployment (unique URL)
4. Review changes at the preview URL
5. Merge to `main`
6. Netlify automatically deploys to production

**Build settings:**

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

**Environment variables:**
Configure in Netlify dashboard under Site Settings → Environment Variables.

## Status

Future epics will add:

- Analytics (GA4, Clarity)
- Email integration (MailerLite)
- Ordering system (Hotplate)
