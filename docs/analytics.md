# Analytics Setup

This document describes the analytics integration for the Bagelwolf website.

---

## Overview

The site uses two analytics tools:

- **Google Analytics 4 (GA4)** — pageviews, traffic sources, user engagement
- **Microsoft Clarity** — heatmaps, scroll maps, session recordings

Both scripts load asynchronously and do not block page rendering.

---

## Google Analytics 4

**Measurement ID:** `G-0ZT1PZ1PR7`

**Integration file:** `src/layouts/BaseLayout.astro`

**Script location:** In the `<head>`, loaded with `async` attribute.

### Enhanced Measurement

GA4's Enhanced Measurement should be enabled in the GA4 dashboard to automatically track:

- `page_view` — every page load
- `scroll` — when user scrolls 90% of page
- `click` — outbound link clicks (including "Order Online" buttons)
- `file_download` — clicks on downloadable files
- `video_start`, `video_progress`, `video_complete` — embedded video engagement

To verify Enhanced Measurement is enabled:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Admin → Data Streams → select the web stream
3. Ensure "Enhanced measurement" is toggled ON

### UTM Campaign Tracking

GA4 automatically captures UTM parameters from URLs. No additional code is required.

Example campaign URL:
```
https://bagelwolf.com/?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale
```

---

## Microsoft Clarity

**Project ID:** `ujyyq6cqdg`

**Integration file:** `src/layouts/BaseLayout.astro`

**Script location:** In the `<head>`, loaded asynchronously.

### What Clarity Provides

- **Heatmaps** — click and scroll patterns
- **Session recordings** — anonymized playback of user sessions
- **Insights** — automatic detection of rage clicks, dead clicks, excessive scrolling

### Dashboard

View data at: [clarity.microsoft.com](https://clarity.microsoft.com)

---

## Verifying Analytics Work

### GA4

1. Visit the production site
2. Open GA4 → Reports → Realtime
3. Confirm your session appears with correct page paths
4. Check browser console for any JS errors

### Clarity

1. Visit the production site and interact (scroll, click)
2. Wait a few minutes
3. Open Clarity dashboard → Recordings
4. Confirm a session appears with your activity

---

## Privacy Notes

- No personally identifiable information (PII) is collected
- No ad/retargeting pixels are used
- Only GA4 and Clarity are included
- Both tools are industry-standard and privacy-conscious

---

## Troubleshooting

**No data in GA4 Realtime:**
- Verify the Measurement ID is correct
- Check browser console for blocked scripts (ad blockers)
- Confirm Enhanced Measurement is enabled

**No sessions in Clarity:**
- Verify the Project ID is correct
- Allow a few minutes for data to appear
- Check browser console for errors

**Performance concerns:**
- Both scripts load async and should not impact Core Web Vitals
- Run Lighthouse audit to verify performance score

---

## Files Reference

| Purpose | File |
|---------|------|
| Analytics scripts | `src/layouts/BaseLayout.astro` |
| This documentation | `docs/analytics.md` |
