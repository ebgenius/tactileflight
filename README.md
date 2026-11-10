# Tactile Flight

Source of [tactileflight.com](https://tactileflight.com), the website of the Tactile Flight ERC Starting Grant project (Prof. Salua Hamaza, BioMorphic Intelligence Lab, TU Delft).

Plain static site, no build step. One page per tab:

| Tab | File |
|---|---|
| The idea | `index.html` |
| The origins | `origins.html` |
| Publications | `publications.html` |
| Press | `press.html` |
| The team | `team.html` |

Shared styles in `styles.css`, shared behaviour in `script.js`. The header nav is repeated in every page: when you add or rename a tab, update it in all five files (and in `sitemap.xml`).

## Preview locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy (GitHub Pages + Namecheap)

1. Repo **Settings → Pages**: source *Deploy from a branch*, branch `main`, folder `/ (root)`. The `CNAME` file sets the custom domain `tactileflight.com`; keep it in the repo, as removing it drops the domain on the next Pages build.
2. In Namecheap **Advanced DNS** for `tactileflight.com`:
   - four `A` records on `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - a `CNAME` record on `www` pointing to `ebgenius.github.io.`
3. Once DNS resolves, tick **Enforce HTTPS** in Pages settings.

## Content notes

- Figures in `assets/` come from Ye, de Croon & Hamaza, *Nature Communications* 17, 9743 (2026), licensed CC BY 4.0. Keep the attribution captions.
- Press news (`press.html`) mirrors the News list on [saluahamaza.eu](https://saluahamaza.eu/#one): add new items at the top of the list.
- Search the source for `TODO(project owner)`: the BBC article link on the Press page is still to be added.

## SEO

- Each page has a unique title and description, a canonical URL, Open Graph and Twitter tags, and JSON-LD structured data (project, person, scholarly articles, breadcrumbs) in its `<head>`.
- `sitemap.xml` lists every page with a `lastmod` date; update the date when a page changes, and add new pages to both the sitemap and the canonical link.
- `404.html` is served by GitHub Pages for unknown URLs and is marked `noindex`.
- Social card: `assets/og-image.jpg` (1200×630). Icons: `favicon.ico`, `assets/favicon.svg`, `assets/icon-192.png`, `assets/icon-512.png`, `assets/apple-touch-icon.png`.
- Google Search Console: add `tactileflight.com` as a *Domain* property (verified with a DNS TXT record in Namecheap), then submit `https://tactileflight.com/sitemap.xml`.
