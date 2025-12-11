# 🥯 Bagelwolf Website — Project Goals

## 1. Core Purpose

- Deliver a modern, high-quality website for an artisanal bagel bakery.
- Establish a flexible foundation that is easy to update, extend, and maintain long-term.

---

## 2. User Experience & Frontend Requirements

- Fully responsive and reliable across all modern browsers.
- Fast-loading, smooth user experience; avoid unnecessary heavy assets.
- Support optional subtle parallax effects for large background imagery.
- Ship with four initial pages:
  - Home
  - About
  - Bagels
  - Bread
- The site structure must allow easy addition, removal, or reorganization of pages.

---

## 3. Content & Asset Flexibility

- Support text, images, videos, and future asset types (e.g., PDFs).
- Content updates (text, images, and other assets) must be easy to perform.
- Asset hosting should be inexpensive and simple, without reliance on a specific vendor.

---

## 4. Analytics & User Insight

- Provide robust visitor analytics:
  - Pageviews and visit flow
  - Engagement with key content and imagery
  - Scroll depth and click behavior
- Support tools like GA4 and Microsoft Clarity.

---

## 5. Ordering & eCommerce Integration

- Include clear “Order Online” functionality.
- Initially link to Hotplate or a similar service.
- Critical requirement: the ordering service must allow access to customer data for marketing.
- If Hotplate does not allow this, switch to an alternative provider.

---

## 6. Email Capture & Light CRM

- Capture user name and email for a bakery mailing list.
- Prefer simple, low-overhead solutions (MailerLite, Google Sheets integration, flat-file export).
- Avoid complex databases (SQL, MongoDB, etc.) unless required later.

---

## 7. Accessibility & SEO

- Meet reasonable accessibility standards (e.g., basic WCAG principles).
- Provide proper keyboard navigation, alt text, and readable contrast.
- Implement essential SEO:
  - Page titles and meta descriptions
  - Open Graph tags
  - XML sitemap
  - Basic local SEO support

---

## 8. Brand Consistency

- Maintain a cohesive design system:
  - Typography
  - Spacing
  - Color palette
  - Reusable layout components
- Ensure a consistent visual identity aligned with the Bagelwolf brand.

---

## 9. Development Environment & Tooling

- Build with VS Code.
- Maintain a simple, clear project structure that works well for both humans and AI assistants.
- Prefer minimal abstractions; prioritize clarity and maintainability.

---

## 10. Deployment & Hosting Requirements

- Hosting must be inexpensive or free-tier friendly.
- Prefer hosts that:
  - Integrate with GitHub
  - Auto-deploy on push
  - Provide HTTPS automatically
  - Offer good caching for assets
- The site must remain portable and deployable to any modern static host without major changes.

---

# 🚫 Non-Goals

These are intentionally not part of the project’s initial scope:

- Complex CMS builds (WordPress, Sanity, Contentful, etc.).
- Backend database infrastructure (SQL, MongoDB, authentication systems).
- Custom eCommerce platform — ordering is handled externally.
- Advanced animations, heavy UI libraries, or elaborate parallax systems.
- Overly abstracted frontend architecture — keep it simple and maintainable.
- Full-scale CRM or email automation tool beyond basic mailing list capture.
- Support for outdated or legacy browsers.
