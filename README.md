# AegisAI Marketing Website

> **AegisAI: Shield Against Rogue AI** — The self-evolving guardian against rogue AI threats. AI-powered defensive software that detects and counters self-replicating AI agents in real-time.

## Tech Stack

- **Eleventy (11ty)** — Static site generator
- **Liquid** — Template engine (`.liquid` files)
- **Tailwind CSS** — Utility-first CSS (via PostCSS)
- **Inter & Roboto Mono** — Typography

## Getting Started

```bash
# Install dependencies
npm install

# Build CSS and site for production
npm run build

# Development with live reload
npm start
```

## Project Structure

```
src/
├── _includes/       # Reusable components
│   ├── header.liquid
│   └── footer.liquid
├── _layouts/
│   └── base.liquid
├── _data/           # Global data
├── assets/          # Images, fonts
├── css/
│   ├── input.css    # Tailwind source
│   └── styles.css   # Compiled output (generated)
├── blog/
│   ├── index.liquid # Blog listing
│   └── posts/       # Blog posts (markdown)
├── index.liquid     # Home
├── features.liquid
├── pricing.liquid
├── about.liquid
├── contact.liquid
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build CSS + generate static site |
| `npm start` | Build CSS + start dev server with live reload |
| `npm run css:build` | Compile Tailwind CSS only |
| `npm run css:watch` | Watch and recompile Tailwind on changes |

## GitHub Pages Deployment

A workflow at `.github/workflows/deploy.yml` deploys the site on push to `main`:

1. In your GitHub repo: **Settings → Pages → Build and deployment**: Source = **GitHub Actions**
2. Push to `main` to trigger deployment
3. Site will be at `https://<user>.github.io/<repo>/`

For user/org sites (`username.github.io`), edit the workflow and set `ELEVENTY_PATH_PREFIX: /`

## Configuration

- **eleventy.config.mjs** — `htmlTemplateEngine: "liquid"`, `markdownTemplateEngine: "liquid"`, `pathPrefix` for GitHub Pages
- **tailwind.config.js** — Custom AegisAI theme (blue/dark, aegis color palette)
- **postcss.config.js** — Tailwind + Autoprefixer
