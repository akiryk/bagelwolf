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

## When Editing Content

- Maintain brand tone and clarity.
- Ensure markup is accessible (alt text, semantic elements, keyboard-friendly nav).
- Preserve fast load times.

## Current Assets

- `bagel-wolf-logo-80.jpg` — compressed logo
- `bagel-wolf-logo.png` — original logo

## Summary

Claude Code should:

- Keep changes focused and minimal
- Maintain the lightweight static-site architecture
- Follow the branding and styling rules
- Refer to `PROJECT_GOALS.md` for all strategic decisions

This file is intentionally brief so that it remains stable and easy to follow over time.
