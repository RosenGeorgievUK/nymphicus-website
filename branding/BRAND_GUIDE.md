# Nymphicus brand guide (extracted from platform)

**Version:** 2026-07-11 · **Source:** `Platform/static/assets/scss/_variables.scss`, auth & landing templates

---

## Brand identity

| Item | Value |
|------|-------|
| **Product / company name** | Nymphicus |
| **Category** | AI agent builder platform (B2B SaaS) |
| **Visual baseline** | Purple-forward, clean dashboard aesthetic (Vyzor theme) |
| **Personality** | Capable, modern, approachable — not corporate-gray |

---

## Color palette

### Core brand

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Primary | `#985FFD` | 152, 95, 253 | Buttons, links, active nav, key accents |
| Secondary | `#FF49CD` | 255, 73, 205 | Gradients, highlights, marketing hero |
| Primary gradient | `linear-gradient(to bottom right, #985FFD 0%, #FF49CD 100%)` | — | Hero backgrounds, CTA bands, auth panel |

### Neutrals (light mode — default for marketing)

| Token | Hex | Usage |
|-------|-----|-------|
| Body background | `#F8F9FD` | Page background |
| Surface / card | `#FFFFFF` | Cards, header |
| Alt surface | `#F9F7FC` | Subtle sections |
| Text primary | `#011A42` | Headlines, body |
| Text muted | `#5D6576` | Supporting copy |
| Border | `#E2E8EE` | Dividers, inputs |
| Menu / nav text | `#302D36` | Navigation labels |
| Icon muted | `#6C7E96` | Secondary icons |

### Semantic

| Token | Hex | Usage |
|-------|-----|-------|
| Success | `#32D484` | Positive states |
| Warning | `#FDAF22` | Caution |
| Danger | `#FF6757` | Errors |
| Info | `#00C9FF` | Informational |

### Dark mode (product UI — optional on marketing)

| Token | Hex | Usage |
|-------|-----|-------|
| Body | `#161623` | App dark background |
| Surface | `#262634` | Elevated panels |
| Text | `rgba(255,255,255,0.8)` | Primary text on dark |

---

## Typography

| Role | Family | Weight | Size (app base) | Notes |
|------|--------|--------|-----------------|-------|
| **UI & marketing** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | 300–700 | 14px base (`0.875rem`) | Loaded via Google Fonts |
| **Headings** | Space Grotesk | 600 (`fw-semibold`) | Bootstrap scale | Color `#011A42` |
| **Body** | Space Grotesk | 400 | 14–16px | Muted body `#5D6576` |
| **Labels / small** | Space Grotesk | 500 | 13px (`fs-13`) | Form labels, captions |

**Google Fonts import:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
```

**Suggested marketing scale (not in app — recommended for website):**

| Element | Size | Weight |
|---------|------|--------|
| Hero H1 | 48–56px | 600 |
| Section H2 | 32–40px | 600 |
| H3 | 24px | 600 |
| Body | 16–18px | 400 |
| Small / caption | 13–14px | 400–500 |

---

## Layout & shape

| Token | Value | Source |
|-------|-------|--------|
| Border radius (default) | `0.3rem` (~4.8px) | `$default-radius` |
| Card radius (common) | `0.5rem` (8px) | Headers, breadcrumbs |
| Button radius | Bootstrap default + theme | `.btn-primary` |
| Box shadow (subtle) | `0 2px 4px rgba(0,0,0,0.05)` | Cards |
| Primary glow | `0 4px 12px rgba(152,95,253,0.3)` | Primary buttons (hover) |
| Max content width | 1440px | Org admin / Figma reference |

---

## Components (match platform)

### Primary button

- Background: `#985FFD`
- Text: white
- Hover: same hue, slight shadow `rgba(152,95,253,0.3)`
- Full width on mobile forms: `.d-grid` pattern from login

### Secondary / outline button

- White background, `#E2E8EE` border
- Text: `#011A42`
- Used for OAuth-style buttons on login (Google/Facebook)

### Links

- Default text color with **primary** for emphasis (`text-primary`)
- Example: “Register Here” on sign-in page

### Cards

- White background, light border or borderless with no shadow on auth (`border-0 shadow-none`)
- Product dashboards use `.custom-card` with subtle borders

### Auth / marketing split layout

From `templates/authentication/sign_in.html`:

- **Left (~75%):** Form on white
- **Right (~25%):** Cover panel with soft background image at 15% opacity + gradient content
- Cover headline pattern: `fw-semibold` H3 + muted subtitle

---

## Imagery & decoration

| Asset | Path in repo | Notes |
|-------|--------------|-------|
| Wave divider | `assets/wave-divider.svg` | From `backgrounds/10.svg`, fill `#985FFD` |
| Auth background | `media/backgrounds/9.png` | Referenced in login — **not in repo** |
| Hero illustration | `media/media-72.png` | Referenced in login — **not in repo** |

**Marketing recommendation:** Use gradient meshes + wave SVG + product screenshots once available. Avoid stock “generic dashboard” art long term.

---

## Logo system

**Status:** PNG logos are referenced in app templates but **missing from git**.

Expected filenames (when added):

| File | Use |
|------|-----|
| `desktop-logo.png` | Sidebar expanded, light bg |
| `desktop-dark.png` | Sidebar expanded, dark bg |
| `toggle-logo.png` | Sidebar collapsed |
| `toggle-dark.png` | Collapsed dark |
| `favicon.ico` | Browser tab |

**Interim placeholders:** `assets/logo-wordmark.svg`, `assets/logo-icon.svg`, `assets/favicon.svg`

**Clear space:** Height of icon mark on all sides  
**Minimum height:** 32px digital (matches `.desktop-logo { height: 2rem }`)

---

## Iconography

Platform uses **Remix Icon** and **Tabler Icons** (`static/assets/css/icons.css`). For marketing, **Lucide** or **Heroicons** are fine if stroke weight matches (~1.5px) and color uses `#6C7E96` or primary.

---

## Voice & copy (from current UI — to replace)

Current login copy is generic theme placeholder:

- “Hi, Welcome back!”
- “Welcome to Dashboard”
- “Manage your website and content with ease…”

**Marketing should use Nymphicus-specific copy**, e.g.:

- Hero: “Build AI agents your team can trust”
- Sub: “Design workflows, connect tools via MCP, and run agents at scale”
- CTA primary: “Get started” / “Log in”

---

## Do / don’t

| Do | Don’t |
|----|-------|
| Use primary purple + gradient for brand moments | Use Spruko / Vyzor name on public site |
| Link “Log in” to platform URL | Embed login form on marketing domain |
| Match Space Grotesk + palette for app continuity | Introduce a second primary color family |
| Keep marketing light-mode first | Copy Bootstrap admin layout wholesale for landing |

---

## File map (platform source)

```
Platform/static/assets/scss/_variables.scss   ← color & font tokens
Platform/static/assets/css/styles.css         ← compiled CSS
Platform/templates/authentication/sign_in.html ← auth layout reference
Platform/templates/components/landing-base.html ← unused landing shell
Platform/static/assets/scss/pages/_landing.scss
Platform/static/assets/scss/custom/_authentication.scss
```
