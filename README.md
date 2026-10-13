# Your static website

A minimal static site built with [Astro](https://astro.build). The homepage is ordinary Markdown; Astro turns it into static HTML with no client-side JavaScript.

## Get started

Requires Node.js 18.17.1 or newer.

```sh
npm install
npm run dev
```

Edit `src/pages/index.md` to update the site. Its frontmatter sets the page title and description. Shared markup and styles live in `src/layouts/BaseLayout.astro`.

## Build and publish

```sh
npm run build
```

The finished site is written to `dist/`. Deploy that directory to any static host (for example, GitHub Pages, Netlify, or Cloudflare Pages). To test the production build locally, run `npm run preview`.
