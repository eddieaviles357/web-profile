# Eduardo Aviles — Web Dev Profile

A small, static portfolio site built with vanilla HTML, CSS (Sass) and JavaScript. This repository contains the source for a personal web developer profile with a responsive layout, project gallery, about section, and contact footer.

## What this project contains

- `index.html` — the single-page HTML for the portfolio.
- `sass/` — Sass source files organized into `abstracts`, `base`, `components`, `layout`, and `pages` partials. Entry: `sass/main.scss`.
- `css/` — compiled CSS and variations (development `style.css`, compiled `style.comp.css`, concatenated/prefixed/compressed outputs).
- `js/` — small vanilla JS modules (menu behavior in `index.js`, `intersectionObserver.js`).
- `img/` — images used by the site.
- `package.json` — development scripts and devDependencies for Sass, PostCSS (autoprefixer), concat, and small helpers for building CSS.

## Features

- Responsive layout with a header, projects gallery, about section and contact footer.
- CSS architecture using Sass partials and a clear folder structure (abstracts, base, components, layout, pages).
- CSS build pipeline available via npm scripts: compile Sass, concat, autoprefix, and compress.
- Lightweight vanilla JS for UI behavior (mobile nav/hamburger toggle, intersection observer for scroll animations).
- External icons via Font Awesome (loaded from a CDN) and inline SVG logo assets.

## Tech / Dependencies

- HTML5
- Sass (Dart Sass)
- PostCSS + Autoprefixer
- concat (CLI)
- live-server (for local static serving)
- npm-run-all (to run build steps)

Dev dependencies are declared in `package.json`:

- `sass` (compile Sass)
- `postcss-cli` and `autoprefixer` (prefix compiled CSS)
- `concat` (concatenate CSS files)
- `npm-run-all` (run multiple npm scripts)

## Scripts (from package.json)

- `npm run watch:sass` — watch `sass/main.scss` and compile to `css/style.css` (developer mode).
- `npm run devserver` — start `live-server` (serve the folder for local testing).
- `npm run compile:sass` — compile `sass/main.scss` to `css/style.comp.css`.
- `npm run concat:css` — concatenate `css/style.comp.css` into `css/style.concat.css`.
- `npm run prefix:css` — run Autoprefixer against `css/style.concat.css` and output `css/style.prefix.css`.
- `npm run compress:css` — compress `sass` output to `css` (uses sass --style=compressed sass:css).
- `npm run build:css` — runs the full CSS build pipeline (compile, concat, prefix, compress) using `npm-run-all`.

Example (dev workflow):

```bash
# install dev deps
npm install

# watch sass and serve in separate terminals
npm run watch:sass
npm run devserver
```

After `watch:sass` you can open `index.html` in your browser (or use the `devserver`).

## Project structure (high level)

- `index.html` — page markup and SVG logo.
- `sass/` — source styles split by concerns:
  - `abstracts/` — functions, variables, mixins, helpers.
  - `base/` — base typography, animations, utilities.
  - `components/` — small reusable UI pieces (button, gallery, parallax).
  - `layout/` — page layout partials (header, footer, navigation, grid, about, projects).
  - `pages/` — page specific styles (home).
- `css/` — compiled results and intermediate files.
- `js/` — `index.js` contains navigation/hamburger logic and utilities; `intersectionObserver.js` contains scroll-in-view logic.
- `img/` — images used in gallery and hero.

## Notes for developers

- The header uses an inline SVG logo and Font Awesome via the CDN (see `index.html`).
- Responsive breakpoints and utility classes live in the compiled CSS from `sass/main.scss`.
- The navigation implements a mobile hamburger behavior in `js/index.js` — the script toggles classes and appends a close button to the nav when the viewport is phone-sized (<= 600px).
- The gallery items link to external project pages and open in new tabs (`target="_blank"` with `rel="noopener"`).

### Building CSS

Use the `build:css` script to produce concatenated, prefixed and compressed CSS ready for production:

```bash
npm run build:css
```

After build the production-ready files are under `css/` (look for `style.prefix.css` / compressed outputs). The `index.html` currently references `css/style.css` for development — swap to your production file (for example `css/style.prefix.css` or `css/style.concat.css`) when deploying.

## Accessibility & performance

- Images include `alt` attributes in `index.html`.
- The layout is responsive and uses semantic elements (header, main, section, footer).
- For production, use the compressed/prefixed CSS output and consider optimizing large images (in `img/`) to reduce page load time.

## Customization / Deployment

- To change content, edit `index.html` and the images in `img/`.
- To change styles, edit `sass/` partials and re-run the build/watch scripts.
- This is a static site — it can be deployed to Netlify, GitHub Pages, Vercel (static), or any static host.

## Contact / Author

Eduardo Aviles — author: `eduardo aviles` (see social links embedded in the footer of the site)

## License

This project is published under the ISC license (see `package.json`).

---

If you'd like, I can also:

- add a small CONTRIBUTING.md with local dev steps and git conventions,
- add a minimal GitHub Pages workflow, or
- optimize the `package.json` scripts into a single `dev` command that runs both the server and watch in parallel.

Tell me which of those you'd like next.
\*\*Profile
