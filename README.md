# Jade Collins — Personal Portfolio

Student portfolio site

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
  resume.pdf        # Downloadable CV
```


## Run locally

```sh
bun install
bun run dev
```

Then open `http://localhost:5173`.

## Build for production

```sh
bun run build
```

This prerenders every route to plain HTML/CSS/JS in `dist/client/`.

## Design notes

- Palette: forest green `#3A6341`, deep rust `#63241C`, plum `#633A5B`, peach `#FFBA7D`, pale yellow `#FCFCA7`, plus black and white.
