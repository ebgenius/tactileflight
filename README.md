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

1. Repo **Settings → Pages**: source *Deploy from a branch*, branch `main`, folder `/ (root)`. The `CNAME` file sets the custom domain `tactileflight.com`.
2. In Namecheap **Advanced DNS** for `tactileflight.com`:
   - four `A` records on `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - a `CNAME` record on `www` pointing to `ebgenius.github.io.`
3. Once DNS resolves, tick **Enforce HTTPS** in Pages settings.

## Content notes

- Figures in `assets/` come from Ye, de Croon & Hamaza, *Nature Communications* 17, 9743 (2026), licensed CC BY 4.0. Keep the attribution captions.
- Press news (`press.html`) mirrors the News list on [saluahamaza.eu](https://saluahamaza.eu/#one): add new items at the top of the list.
- Search the source for `TODO(project owner)`: the NRC and BBC press links, the ERC grant agreement number and the EU funding acknowledgement still need to be filled in.
