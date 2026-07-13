# Nymphi Marketing Website

Static marketing site for [Nymphi](https://www.nymphi.ai) — visual AI agent builder platform.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS + Nymphi brand tokens (`branding/`)
- Static export (`output: "export"`) — deploy-ready for Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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
| `/pricing` | Plans + FAQ |
| `/security` | Governance & compliance |
| `/compare` | vs copilots & DIY |
| `/templates` | Starter workflows |
| `/integrations` | MCP registry |
| `/use-cases` | Industry cards |
| `/customers` | Example workflows |
| `/blog` | Guides |
| `/changelog` | Product updates |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Branding

- Tokens: `branding/css/tokens.css`
- Tailwind preset: `branding/tailwind/nymphicus.preset.js`
- Assets: `branding/assets/` (also served from `public/branding/assets/`)
