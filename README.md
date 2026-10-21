# Jade Collins — Personal Portfolio

A warm, rounded, color-blocked portfolio site for a software engineer, UX/UI designer, and biology researcher. Built as a static site so it can be hosted on GitHub Pages.

## Tech stack

- **TanStack Start** — full-stack React framework configured for static prerendering
- **React + TypeScript**
- **Tailwind CSS v4** with custom design tokens in `src/styles.css`
- **Fira Sans** from Google Fonts
- **Lucide** icons

## Project structure

```text
src/
  components/       # Shared UI pieces (Nav, Footer, cards, tags)
  data/             # All editable content lives here
    site.ts         # Name, email, links, resume PDF path
    home.ts         # Hero text, "What I'm looking for", skills, quick links
    research.ts     # Research projects + conference presentations
    projects.ts     # Computer science projects
    design.ts       # UX/UI case studies
    about.ts        # Bio, awards, interests
  routes/           # One file per page
  assets/           # Profile photo and CV preview image
  styles.css        # Palette, fonts, spacing tokens
public/
  resume.pdf        # Downloadable CV (replace with your own)
```

## Customize the content

All placeholder copy is centralized in `src/data/`. Edit those files and the site updates everywhere automatically.

- `src/data/site.ts` — your name, email, GitHub/LinkedIn URLs, and the resume PDF path.
- `src/data/home.ts` — hero text, skills, and the three colored quick-link buttons.
- `src/data/research.ts`, `src/data/projects.ts`, `src/data/design.ts`, `src/data/about.ts` — page-specific content.

## Replace the images

1. Swap `src/assets/profile.png` with your own headshot (keep the filename or update the import in `src/routes/index.tsx`).
2. Swap `src/assets/cv-preview.png` with a screenshot of your actual CV.
3. Replace `public/resume.pdf` with your real multi-page CV.

## Run locally

```sh
bun install
bun run dev
```

Then open `http://localhost:8080`.

## Build for production

```sh
bun run build
```

This prerenders every route to plain HTML/CSS/JS in `dist/client/`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` will build and deploy the site automatically on every push to `main`.

If your repo is at `username.github.io/repo-name`, set the `base` path in `vite.config.ts` to `/repo-name/` so asset links resolve correctly.

## Design notes

- Palette: forest green `#3A6341`, deep rust `#63241C`, plum `#633A5B`, peach `#FFBA7D`, pale yellow `#FCFCA7`, plus black and white.
- Rounded corners, soft shadows, and subtle scale-up hover effects on cards.
- Fully responsive: desktop nav collapses to a hamburger menu on mobile.
