# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a new/empty project called "bagelwolf". The point of this project is to create a web page for an artisanal bakery that makes bagels and breads. As of December 9, 2025, the objectives for this website:

I want to build a modern website for my artisinal bagel bakery. The requirements:

- work on modern browsers
- be responsive/work well on phone or desktop screens
- have good tracking -- I want to know how many people visit the site and what they do when they get there; Ideally, I'd like to know what images or content they respond to the most — what do they skip over and what do they seem to care about?
- load quickly and feel zippy
- include parallax effects on large background images (but nothing crazy, just modest parallax)
- include four pages to start but it should be easy to update and add/subtract in the future. The 4 starting pages: homepage, about page, bagels, bread.
- feature a link to order online. I imagine this will link to a page on hotplate or something similar that I have not yet created. Hotplate is a service that helps purveyors sell food items. One caveat is that I need this service to give me the ability to know who buys products from me so that I can market to them. If it turns out that hotplate holds onto that information for itself, I don't think I would use it and would need to find another service

Some other salient facts:

- I have VS Code and would like to use that to build the site
- I want to be able to host the site easily and cheaply
- I'll have a varying range of image and video assets
- I'd like to be able to capture user name and email address in order to send updates. I'd like this to be automated but it could be very simple to start out. If necessary, I'd use a simple db, but I'd consider saving data straight to a google spreadsheet if that's possible. Or perhaps names could be added to a simple text file that I import into a google sheet. Basically, I'd rather avoid starting a new mongodb database, sql db, or other complicated data storage option.

Working with Claude and ChatGPT, I came up with these epics:

Repo & tooling
Create GitHub repo bagel-bakery-site.
Choose Astro + Tailwind (my recommendation) or plain HTML + Tailwind.

Pages & structure
Home: big hero image, short story, best-selling bagels, “Order Online” CTA.
About: your story, process, photos.
Bagels: flavors, ingredients, bagel “philosophy”.
Bread: loaves, schedule, details.
Global nav, footer with signup form and contact info.

Parallax
One hero section with large background photo using light parallax effect.
Keep it subtle, test on phone & desktop.

Analytics
Set up GA4 property, add tag, enable Enhanced Measurement (scrolls, outbound clicks).Google Help+1
Add Microsoft Clarity script for heatmaps/session recordings.Microsoft Clarity+1

Email capture
Use MailerLite because it's cheap and comes with a good free tier option

Ordering integration
When you’re ready, create Hotplate storefront and plug the link into “Order Online” buttons.
Confirm customer-data export ability with Hotplate support first.

Deploy
Push to GitHub, hook repo to Netlify/Vercel/Cloudflare Pages.
Configure custom domain (bagelwolf.com or whatever you pick), HTTPS, automatic deploys

## Current Assets

- `bagel-wolf-logo-80.jpg` - Logo image (compressed)
- `bagel-wolf-logo.png` - Logo image (PNG format)

## Design Details

Brand color (red/orange): #db5009
Sanserif font: Lato
Serif font: Spectral

## Getting Started

This project needs to be initialized. When setting up:

1. Determine the project type and initialize accordingly (e.g., `npm init`, `cargo init`, etc.)
2. Add appropriate build tooling and configuration
3. Update this file with build commands and architecture details
