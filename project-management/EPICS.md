# 🥯 Bagelwolf — Project Epics (Refined)

These epics define the major functional areas of the Bagelwolf website.
They are aligned with the long-term goals in `PROJECT_GOALS.md`.

---

## 1. Repo & Tooling

Set up a clean, stable development environment and project structure.

### Goals

- Initialize Astro + Tailwind.
- Configure project tooling (Prettier, Tailwind config, `.gitignore`).
- Establish a clear folder structure for pages, components, layouts, and assets.
- Document conventions in `CLAUDE.md` and `README.md`.

---

## 2. Pages & Content Structure

Create the initial set of site pages with consistent layout and organization.

### Goals

- Build four core pages:
  - **Home:** hero, bakery story, featured bagels, CTA.
  - **About:** history, process, images.
  - **Bagels:** flavors, ingredients, bagel philosophy.
  - **Bread:** loaves, schedule, descriptions.
- Implement global navigation + footer.
- Ensure content is easy to update (simple `.astro` pages, reusable components).

---

## 3. Design System & Branding

Implement styling and layout that reflects the Bagelwolf brand.

### Goals

- Apply brand colors, typography (Open Sans + Spectral), spacing.
- Create reusable UI components (buttons, cards, hero sections).
- Maintain strong visual consistency across all pages.
- Uphold readability and accessibility principles.

---

## 4. Analytics & User Insight

Add tracking to understand visitor behavior and engagement.

### Goals

- Integrate Google Analytics 4 (GA4).
- Enable Enhanced Measurement (scroll depth, outbound clicks, engagement).
- Add Microsoft Clarity for heatmaps/session recordings.
- Keep scripts lightweight and performance-friendly.

---

## 5. Email Capture & Mailing List

Provide a simple way for visitors to join the bakery mailing list.

### Goals

- Integrate MailerLite embedded forms.
- Style the embed to match the site (within iframe constraints).
- Ensure email submissions appear in MailerLite subscriber lists.
- Avoid building custom backend or database systems.

---

## 6. Ordering Integration

Offer visitors a clear path to ordering bakery products.

### Goals

- Add consistent “Order Online” buttons and links.
- Link to Hotplate or a similar service.
- Ensure the ordering platform allows export/access to customer data.
- Swap providers if customer data is restricted.

---

## 7. Deployment & Hosting

Deploy the site reliably using inexpensive, modern static hosting.

### Goals

- Deploy to Netlify with Git-based CI and preview deploys.
- Configure:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: 18+
- Support a custom domain if desired.
- Ensure hosting portability (should also work on Vercel or Cloudflare Pages).

---

## 8. Accessibility & SEO (Cross-Cutting)

Ensure the site is usable and discoverable.

### Goals

- Implement semantic HTML, alt text, and keyboard navigation.
- Maintain good Lighthouse scores.
- Add basic SEO:
  - Meta titles/descriptions
  - Open Graph tags
  - XML sitemap
  - Local business metadata (optional)

---

## 9. Asset Pipeline & Performance

Support flexible media usage while maintaining fast performance.

### Goals

- Organize `/public` and `/src/images` cleanly.
- Use Astro’s image optimizations where helpful.
- Keep images and media lightweight.
- Ensure assets are easy to update or add.

---

# Summary

These epics represent all major areas of the Bagelwolf website.
They guide project planning and AI-assisted development without over-specifying implementation details.
