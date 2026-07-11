# Nymphicus branding package

Design tokens and assets extracted from **The Platform** UI theme (`Platform/static/assets/scss/_variables.scss`, Vyzor admin template).

Use this folder as the single source of truth for the **marketing website** and future **Nymphicus rebrand** inside the product.

## Quick start

| File | Use for |
|------|---------|
| [`BRAND_GUIDE.md`](BRAND_GUIDE.md) | Colors, type, components, voice |
| [`css/tokens.css`](css/tokens.css) | Drop into any static site / HTML |
| [`tailwind/nymphicus.preset.js`](tailwind/nymphicus.preset.js) | Tailwind v3/v4 marketing site |
| [`tokens/colors.json`](tokens/colors.json) | Figma, design tools, JS |
| [`platform-links.json`](platform-links.json) | Login / signup URLs for CTAs |
| [`assets/`](assets/) | Logo placeholders, favicon, wave divider |

## Platform login (marketing CTAs)

```text
Local:  http://127.0.0.1:8000/auth/login/
Prod:   https://app.nymphicus.ai/auth/login/   ← set when domain is live
```

Sign up: `/auth/register/individual/` · Org signup: `/auth/register/organization/`

## Important notes

1. **Product name:** Use **Nymphicus** on the marketing site. The Django app still shows Vyzor/Spruko placeholder copy in templates — that is separate work (see KAN-50 area).
2. **Logos:** Templates reference `Platform/static/assets/images/brand-logos/*.png` but those files are **not in this repo**. SVG wordmark + icon placeholders are in `assets/` until a final logo is designed.
3. **Source of truth for colors:** `Platform/static/assets/scss/_variables.scss` — re-sync tokens if the app theme changes.

## For your marketing-site Cursor agent

Paste this into the new project brief:

```markdown
Branding: use ../branding/ from The_Platform repo (or copy the folder).
- Import css/tokens.css OR tailwind/nymphicus.preset.js
- Font: Space Grotesk (Google Fonts)
- Primary #985FFD, gradient to secondary #FF49CD
- Log in button → platform-links.json production URL
- Do not embed auth forms; link out only
```
