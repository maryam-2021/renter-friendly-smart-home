# The Reversible Home — Renter-Friendly Smart Home Upgrades

A static website in the nano-niche of **renter-friendly smart home upgrades** — zero drilling, fully reversible, high-end aesthetic.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Blog hub | `blog/index.html` |
| **7 Aesthetic Smart Lighting Upgrades** (featured post) | `blog/7-aesthetic-smart-lighting-upgrades.html` |
| Ultimate Guide to Smart Lighting | `blog/ultimate-guide-renter-smart-lighting.html` |
| Smart Security Without Drilling | `blog/renter-friendly-smart-security.html` |
| Smart Climate Control | `blog/smart-climate-control.html` |
| Smart Home Automation for Renters | `blog/smart-home-automation-renters.html` |
| Shop My Rental | `shop-my-rental.html` |
| About | `about.html` |
| Contact | `contact.html` |
| Privacy & Affiliate Disclaimer | `privacy.html` |

## Tech

Plain HTML + CSS, no build step. Fonts via Google Fonts (Playfair Display + Inter). Mobile-responsive with a single shared stylesheet (`assets/style.css`) and a tiny nav script (`assets/nav.js`).

## Before going live — replace the placeholders

- `[INSERT AFFILIATE LINK: ...]` — swap each for your real affiliate URL (the dashed pill buttons).
- `hello@yourdomain.com` — your real contact email.
- `[Date]` in `privacy.html` — the publish/update date.
- Pinterest / Instagram links in the footer and contact page.
- Hook up the contact form (`contact.html`) and the checklist signup (`index.html#checklist`) to your email/form provider (e.g. Formspree, Netlify Forms, ConvertKit).
- Add real photography to the blog cards and posts for SEO + Pinterest.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy

Works on any static host. For GitHub Pages: enable Pages on the `main` branch (root) in repo settings.
