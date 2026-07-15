# Nymphi Marketing Website

Static marketing site for [Nymphi](https://www.nymphi.ai) — visual AI agent builder platform.

**Repo:** https://github.com/RosenGeorgievUK/nymphicus-website

## Stack

- Next.js 15 (App Router)
- Tailwind CSS + Nymphi brand tokens (`branding/`)
- Static export (`output: "export"`) — deploy-ready for Vercel

## Development

```bash
npm install
npm run dev:3001
```

Open [http://localhost:3001](http://localhost:3001).

`npm run dev:3001` (via `scripts/dev.ps1`) stops any running Next.js dev processes, clears `.next`, and starts a clean server — use this instead of raw `next dev` to avoid stale chunk errors.

Other scripts:

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on port 3000 |
| `npm run dev:3001` | Dev server on port 3001 (recommended) |
| `npm run build` | Production static export to `out/` |
| `npm run lint` | ESLint |

## Build

```bash
npm run build
```

Outputs static files to `out/` for Vercel or any static host.

## Platform URLs

CTAs read from `branding/platform-links.json`. Production URLs point to **app.nymphi.ai**.

To change URLs, edit `branding/platform-links.json` under `environments.production`.

## Product screenshots

Place JPEG captures in `public/branding/screenshots/` (see `branding/screenshots/README.md`).

## Deploy

1. Run `npm run build`
2. Deploy the `out/` directory (Vercel auto-detects Next.js static export)
3. Point `www.nymphi.ai` to the deployment (`vercel.json` redirects apex → www)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/features` | Product deep-dives |
| `/pricing` | Plans + seat-based pricing |
| `/security` | Security & compliance |
| `/compare` | vs n8n, Zapier, copilots |
| `/templates` | Starter workflows |
| `/integrations` | App directory |
| `/use-cases` | Industry cards |
| `/customers` | Example workflows |
| `/blog` | Guides |
| `/changelog` | Product updates |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Key copy & data sources

| Area | File(s) |
|------|---------|
| Site copy (EN) | `lib/dictionaries/en.ts` |
| Pricing tiers & math | `lib/pricing-page.ts` |
| FAQ | `lib/faq.ts` |
| Case studies | `lib/case-studies.ts` |
| Blog posts | `lib/blog-posts.ts` |
| Comparison table | `lib/comparison.ts` |

## Branding

- Tokens: `branding/css/tokens.css`
- Tailwind preset: `branding/tailwind/nymphicus.preset.js`
- Assets: `branding/assets/` (also served from `public/branding/assets/`)
