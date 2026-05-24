# AdDIE Lab Website

Static research-group website for the Adaptive Design of Immersive E-Learning Lab at The University of Alabama.

## Structure

- `index.html` contains the semantic page shell, SEO metadata, Open Graph/Twitter cards, favicon, and JSON-LD.
- `styles.css` defines the light/dark design system, responsive layout, and motion rules.
- `app.js` renders people, research areas, publications, projects, grants, counters, filters, theme state, contact mailto handling, and the D3 constellation.
- `assets/data/cv-site-data.json` is the canonical CV-derived content source.
- `assets/data/cv-site-data.js` wraps the JSON for direct `file://` viewing.
- `assets/data/cv-projects-data.js` provides project/prototype data.
- `assets/img/` contains the generated visual identity assets and director headshot.

## Local Viewing

Open `index.html` directly in a browser. A local server is optional:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

Publish the directory contents to the `adie` GitHub Pages repository or branch used for `https://educatian.github.io/adie/`. Keep paths relative, as the site is deployed from a project subdirectory.
