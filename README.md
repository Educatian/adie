# AdDIE Lab Website

Static research-group website for the Adaptive Design of Immersive E-Learning Lab at The University of Alabama.

## Site Sections

- Hero with animated canvas network, static image fallback, theme toggle, and above-the-fold lab title.
- Mission and director profile.
- Research directions, research constellation, people, Advising Impact, publications, projects and collaborations, funding portfolio, and join/contact sections.
- Publications include a featured lab-collaboration grid and a capped full-record list with tag filters, show-all toggle, and a link to Dr. Moon's CV.

## Structure

- `index.html` contains the semantic page shell, SEO metadata, Open Graph/Twitter cards, favicon, and JSON-LD.
- `styles.css` defines the light/dark design system, responsive layout, motion rules, hero contrast scrim, and CSS-only initials fallback for people without photos.
- `app.js` renders people, research areas, Advising Impact, publications, projects, grants, counters, filters, theme state, contact mailto handling, the animated hero canvas, and the D3 constellation.
- `assets/data/cv-site-data.json` is the bundled CV-derived snapshot.
- `assets/data/cv-site-data.js` wraps the snapshot for direct `file://` viewing and offline fallback.
- `assets/data/cv-projects-data.js` provides project/prototype data.
- `assets/img/people/` contains real student photo avatars; `assets/img/moon-headshot.jpg` is the director photo.
- `assets/img/addie-symbol.svg` and the matching lockups are the Figma-exported Immersive Frame identity assets; `assets/img/og-image-immersive-frame.png` is the 1200×630 social preview.

## CV Auto-Sync

On normal hosted page loads, `syncPaperRecords()` fetches `https://educatian.github.io/cv/assets/site-data.generated.json` with `cache: "no-cache"` and refreshes publications, working papers, grants, stats, and related record-driven sections. If the fetch is unavailable, blocked, or the site is opened from `file://`, the bundled `assets/data/cv-site-data.js` snapshot remains in use.

## Local Viewing

Open `index.html` directly in a browser. A local server is optional:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

Deploy from the `Educatian/adie` GitHub Pages repository with the `main` branch publishing from the repository root. Keep paths relative, as the site is served at `https://educatian.github.io/adie/`.
