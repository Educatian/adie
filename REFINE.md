# REFINE PASS — AdDIE Lab site (raise polish, fix lacking areas)

The site at this repo is already deployed (https://educatian.github.io/adie/). It is good, but a
critical review found specific underbaked areas. Refine them to a world-class standard, then leave the
working tree ready to commit. Keep all existing strengths (hero, research cards, mission, SEO). Do NOT
regress relative paths, dark/light themes, accessibility, or real-data wiring. Read `app.js`, `styles.css`,
`index.html` first.

## PRIORITY 1 — People section (biggest gap: cards are plain text-only boxes)
The People section currently renders flat white cards with no visual identity. Elevate it:
- Give every member an **elegant avatar treatment**. We do NOT have real member photos and must NOT
  fabricate faces. Instead, use **brand-styled monogram avatars**: each person's initials set in
  Newsreader/Inter over a **generated abstract texture tile**. Use your IMAGE-GENERATION ENGINE to
  create a small set (4–6) of cohesive abstract avatar background tiles (crimson + deep-ink + gold,
  same art direction as the existing motifs — soft data-constellation / mesh gradients, NO faces,
  NO text in the image). Save to `assets/img/avatar-tile-1.png` … and assign them round-robin to members
  (director gets the real `assets/img/moon-headshot.jpg`). Overlay the person's initials + a subtle ring.
- Redesign the person card: avatar (circle or rounded square) at top, name, role, chips, short bio,
  consistent card height within a row, refined hover (lift + crimson accent border), better group
  headers ("Director / PhD Students / MA Students") with counts.
- Verify chips render correctly (the director's third chip must read **XR**, not a stray value). Remove
  any empty/garbled chip.
- Make the grid responsive: 3-up desktop, 2-up tablet, 1-up mobile, with even gaps.

## PRIORITY 2 — Publications: no dead affordances
- The publication data has many entries with an EMPTY `link`. Currently a "DOI / link" affordance shows
  even when there is no URL. Only render the link/DOI control **when `pub.link` is a non-empty URL**;
  otherwise omit it (show venue + year + tags cleanly). Ensure tag filters still work and counts are right.
- Tighten card typography and spacing; ensure the featured grid + full list both look intentional.

## PRIORITY 3 — Research constellation (D3) is sparse/small
- Make it larger and more legible: more connective edges, gentle force layout, readable labels for the
  5 themes and the people, a clear legend, and graceful behavior on mobile (scrollable or simplified).
  Keep it driven by real themes/people/topics. Honor prefers-reduced-motion.

## PRIORITY 4 — Performance: optimize images (currently ~18 MB of PNGs)
- The generated PNGs are 1–2.5 MB each. Resize/recompress for web without visible quality loss:
  - hero-key-visual + og-image: max ~1800px wide; motifs: max ~1000px wide; avatar tiles: ~600px;
    background-mesh: ~1600px; monogram/favicon as needed.
  - Prefer converting large decorative PNGs to high-quality WebP (keep a PNG favicon) OR compress PNGs.
    Use Python Pillow (`pip install pillow` if needed) or ImageMagick (`magick`) — whichever is available.
  - Update all `src`/references and width/height attributes accordingly. Target total page weight well
    under ~4 MB. Keep `assets/img/` tidy (overwrite or replace; remove now-unused originals).

## PRIORITY 5 — General finish pass
- Add subtle polish: section dividers, consistent vertical rhythm, hover/focus states on all interactive
  elements, a slightly richer footer (quick links + university line + email), and a "back to top" affordance.
- Re-check mobile (360–414px): nav, hero, stat band, cards, forms all clean.
- Keep it fast and dependency-light.

## DONE = 
Site visibly more refined, People section transformed with avatars, no dead links, optimized images,
richer constellation. Print a summary + list any new/changed images. Do not deploy; leave changes staged
for the human to review. Be exacting and autonomous — do not ask questions.
