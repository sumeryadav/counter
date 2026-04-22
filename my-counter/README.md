# My Counter

A small counter app built with React and Vite.

## Requirements

- Node.js 20.19.0 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

## Quality check

```bash
npm run check
```

This runs linting and a production build so you can catch deployment issues before shipping.

## Deployment

### Vercel

This project is ready for Vercel as a static Vite app.

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

The included [vercel.json](/D:/Javascript/Counter/my-counter/vercel.json) keeps SPA routes pointed at `index.html` and adds a few basic security headers.

### GitHub Pages

Use the deploy script after configuring the repository remote:

```bash
npm run deploy
```

That script builds with relative asset paths and publishes `dist` through `gh-pages`, which avoids broken assets when the app is served from a repository subpath.

### Custom hosting

For hosts that need a custom base path, Vite supports it directly:

```bash
vite build --base=/my-app/
```

## Included readiness updates

- Production build works out of the box for root-hosted static deploys
- GitHub Pages deploy uses relative asset paths
- Vercel routing is configured for a single-page app
- Basic metadata and security headers are included
