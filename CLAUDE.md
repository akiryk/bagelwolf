# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

**Bagelwolf** is a static marketing website for an artisanal bagel bakery.
The site is built with Astro and Tailwind, deployed on Netlify, and designed to be fast, clean, and easy to maintain.

A full description of the project goals, requirements, and non-goals is located in:

👉 **`PROJECT_GOALS.md` (authoritative source)**

Claude should refer to that file whenever making architectural decisions, proposing changes, or evaluating tradeoffs.

## How Claude Should Operate

When working in this codebase:

1. **Favor simplicity.**
   Keep the project easy to understand and modify. Avoid unnecessary abstractions.

2. **Prefer minimal diffs.**
   Modify only what is needed. Do not rewrite entire files unless explicitly requested.

3. **Keep the site lightweight.**
   Use minimal JavaScript, defer heavy assets, and preserve Astro’s static-first approach.

4. **Respect existing design decisions.**
   - Styling uses Tailwind.
   - Fonts: Open Sans (sans) and Spectral (serif).
   - Brand color: `#db5009`.
   - Subtle parallax is allowed, but large animation libraries are not.

5. **Honor constraints defined in PROJECT_GOALS.md.**
   For example:
   - Site must remain portable across static hosts.
   - Email capture should remain simple (MailerLite).
   - Ordering is handled externally (Hotplate or similar).
   - Accessibility and SEO should be maintained.

6. **When in doubt, ask before restructuring.**
   Claude Code should request confirmation for large refactors, new dependencies, or changes affecting architecture.

## Repository Notes

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Deployment:** Netlify
- **Assets:** Stored locally under `/public`
- **Email:** MailerLite embed form
- **Analytics:** GA4 + Microsoft Clarity (see `docs/analytics.md`)
- **SEO:** Reusable SEO component (see `docs/seo.md`)

## File Types & Structure Guidance

Claude Code should keep the following conventions:

- Pages live in `src/pages/`
- Shared layouts live in `src/layouts/`
- Components live in `src/components/`
- Global styles remain within Tailwind config or `src/styles/`
- Images should be optimized on import when practical
- Documentation lives in `docs/`

## Content Management (Decap CMS)

This project is moving toward **Decap CMS as the canonical interface for all site content**.

Claude Code should assume that:

- Human-editable content (copy, images, captions, page sections) should live in **Decap-managed content files**
- Astro components and pages should **consume content**, not own it
- “Making content dynamic” means **CMS-managed**, not JS-driven or hardcoded

### Rules of thumb

When asked to:

- “Make this editable”
- “Move this content out of the component”
- “Add a new section that marketing can update”

Claude should:

1. Propose or extend a **Decap collection or file**
2. Define clear frontmatter / fields in `config.yml`
3. Update Astro code to read from those fields
4. Avoid introducing content duplication or fallback hardcoding

### Constraints

- Decap content should remain compatible with Astro’s static build
- Prefer file-based collections (`files:`) for singleton pages
- Prefer markdown content + frontmatter over JSON unless structure demands otherwise
- Do not bypass Decap by introducing parallel content systems

If a change would significantly restructure existing content or collections, **ask before proceeding**.

## When Editing Content

- Maintain brand tone and clarity.
- Ensure markup is accessible (alt text, semantic elements, keyboard-friendly nav).
- Preserve fast load times.

## Current Assets

- `bagel-wolf-logo-80.jpg` — compressed logo
- `bagel-wolf-logo.png` — original logo

## Grid + Breakpoints

Breakpoints (Tailwind v4 CSS-first config)

We use Tailwind v4 with breakpoints defined via @theme in src/styles/global.css (no tailwind.config.\*).

Do not introduce new breakpoint definitions or assume Tailwind defaults.

Current breakpoints:
sm: 640px (Tailwind default)
md: 840px
lg: 1100px
xl: 1320px

When writing responsive utilities, md:, lg:, and xl: correspond to the values above.

**Custom grid system**

Layout uses a custom grid wrapper pattern:
`.grid-container` (centering / max width)
`.grid-9` (a 9-column grid)

Grid children use Tailwind’s `col-span-*` and `col-start-*` utilities.

**Critical rule: always “lock” grid placement at larger breakpoints**
CSS Grid auto-placement can shift elements unexpectedly when spans change across breakpoints. Whenever a block:

- changes col-span-\* at md, lg, or xl, and
- must remain aligned with other blocks,

always specify col-start-\* explicitly at the same breakpoints.

✅ Good (locked placement):

<div class="col-span-9 col-start-1
            md:col-span-6 md:col-start-4
            lg:col-span-5 lg:col-start-4
            xl:col-span-4 xl:col-start-4">
  ...
</div>

❌ Risky (auto-placement may shift at xl):

<div class="col-span-9 col-start-1
            md:col-span-6 md:col-start-4
            lg:col-span-5 lg:col-start-4
            xl:col-span-4">
  ...
</div>

Rule of thumb for alignment

If two sections should align at large sizes, they must share the same col-start-_ and compatible col-span-_ values at lg and xl.

Example: Story section and Signup section aligned on wide screens:

<!-- Story -->
<div class="... lg:col-start-4 xl:col-start-4">...</div>

<!-- Signup -->
<div class="... lg:col-start-4 xl:col-start-4">...</div>

How to verify breakpoints are actually applied

If there’s any doubt, verify against compiled CSS output:

npm run build
grep -R "@media(min-width:1100px)" dist/\_astro/_.css | head
grep -R "@media(min-width:840px)" dist/\_astro/_.css | head
grep -R "@media(min-width:1320px)" dist/\_astro/\*.css | head

You should see .md\:_ under 840, .lg\:_ under 1100, .xl\:\* under 1320.

Don’t “refactor” breakpoints or grid abstractions without explicit request

Avoid broad changes like “cleaning up breakpoints” or changing grid semantics. Make the smallest possible change to achieve the requested layout behavior, and keep diffs tight.

## Summary

Claude Code should:

- Keep changes focused and minimal
- Maintain the lightweight static-site architecture
- Follow the branding and styling rules
- Refer to `PROJECT_GOALS.md` for all strategic decisions

This file is intentionally brief so that it remains stable and easy to follow over time.
