# BUILD BRIEF — AdDIE Lab Research Group Website

You are building a **world-class, sophisticated research-group website** for the
**Adaptive Design of Immersive E-Learning Lab (AdDIE Lab)** at The University of Alabama,
directed by **Dr. Jewoong Moon**. This is a static site that will deploy to GitHub Pages at
**https://educatian.github.io/adie/** (project page — all asset paths must be relative, e.g.
`assets/...`, never root-absolute `/assets/...`).

Build everything inside this working directory. Do not touch any folder outside it.

---

## 0. NON-NEGOTIABLE QUALITY BAR

The director already has a stunning personal CV site at https://educatian.github.io/cv/.
**This lab site must match or EXCEED it in polish.** Reference world-class academic lab sites for
layout, motion, and typographic sophistication — e.g. MIT Media Lab, Stanford HCI Group, CMU HCII,
Google DeepMind, Stanford SVL. Aim for: confident editorial typography, generous whitespace, tasteful
scroll-reveal motion, a cohesive symbolic visual identity, dark/light themes, and flawless responsive
behavior. **No template/Bootstrap look. No lorem ipsum. No placeholder boxes shipped to production.**

Sophistication checklist (the user explicitly asked for these):
- 세련되고 멋진 (refined, striking) overall feel.
- The **lab title and research direction must be symbolically expressed** through custom generated
  imagery and a coherent visual motif (see §3 Imagery).

---

## 1. TECH CONSTRAINTS

- Pure static site: semantic HTML5 + modern CSS (custom properties, grid, clamp() fluid type) + vanilla JS.
  You may use D3 v7 via CDN for one tasteful data/network visual, and a tiny scroll-reveal via
  IntersectionObserver. No heavy frameworks, no build step required to view (open index.html works).
- Multi-page OR a polished single-page-with-sections + a couple of sub-pages — your call, but navigation
  must be clean and anchored. Recommended pages/sections: Home/Hero, About & Mission, Research (focus
  areas), People, Publications, Projects & Collaborations, Join the Lab, Contact.
- Include: `.nojekyll` (already present), `robots.txt`, `sitemap.xml`, favicon, Open Graph + Twitter
  meta, JSON-LD (`@type: ResearchOrganization` for the lab, `Person` for the director), `theme-color`.
- Accessibility: skip link, aria labels, color-contrast AA, prefers-reduced-motion honored, keyboard nav.
- Fonts via Google Fonts (match the CV site's family for brand continuity): **Inter** (UI/body),
  **Newsreader** (editorial serif for display headings), **JetBrains Mono** (accent/labels).
- Brand color: University of Alabama **crimson `#9e1b32`** as the primary accent, on a refined
  near-black/ivory neutral system. Define a full token palette (light + dark).

## 2. SOURCE-OF-TRUTH CONTENT

Real data has been copied into this repo — **use it, do not invent publications**:
- `assets/data/cv-site-data.json` — has keys: `profile, contact, overview, stats, focusAreas,
  affiliations, news, publications (59 real entries: year/title/authors/venue/tags), grants,
  grantPortfolio, talks`. Pull the lab director's real publications, focus areas, grants, and stats
  from here. Feature publications co-authored with lab members prominently.
- `assets/data/cv-projects-data.js` — real project/initiative descriptions.
- `assets/img/moon-headshot.jpg` — director portrait (real).

Lab facts (verbatim source — the official lab site):
- **Name:** Adaptive Design of Immersive E-Learning Lab (AdDIE Lab), University of Alabama.
- **Mission:** Immersive learning research & development examining how to promote students' learning
  engagement and knowledge development in digital learning environments. Work sits at the intersection
  of **inclusive learning, immersive environments (digital games, VR, AR, mixed reality), and learning
  analytics** — personalizing these environments for underrepresented learners, including learners with
  disabilities.
- **Research areas:** (1) Immersive learning environments — games, VR, AR, mixed reality;
  (2) Learning analytics & educational data mining; (3) Inclusive & adaptive learning design;
  (4) Generative-AI-empowered learning & agents; (5) Engineering / STEM education.
- **Director — Dr. Jewoong Moon**, Assistant Professor of Instructional Technology, Dept. of
  Educational Leadership, Policy, and Technology Studies. Ph.D. Instructional Systems & Learning
  Technologies, Florida State University. jmoon19@ua.edu · Autherine Lucy Hall 315E, Tuscaloosa, AL.
  Google Scholar + ResearchGate links exist on the CV JSON. Personal site: https://educatian.github.io/cv/

### People (render as elegant cards with role chips; group: Director → PhD students → MA students)
- **Idowu "David" Awoyemi** — Lab Manager, PhD Instructional Technology. E-learning, AI in learning,
  instructional design. MEd Educational Technology (Federal Univ. of Technology, Minna, Nigeria).
- **Arezoo Ghooreian** — Graduate Research Assistant, PhD. Instructional technology, AI in education,
  game-making for computational thinking. MA ESL (Azad University, Iran).
- **Stephen Abu** — PhD Instructional Technology. VR simulation, extended reality, gamification,
  generative AI, online learning. MA Educational Media Resource Management (Nigeria).
- **Moses Oladele Ogunniran** — PhD Higher Education Administration, GRA. Postsecondary access,
  student success, graduate employability, career-readiness interventions.
- **Empress Searight** — PhD Instructional Technology. Gamification, game-based learning, AR for STEM.
  BA Graphic Design (UAB), MA (Alabama State), EdS Instructional Technology.
- **Mohammad "Mohi" Uddin** — PhD Instructional Technology; Graduate Senator & Ambassador. AI in
  education, learning theories, teacher PD, neurodiversity in education. 15+ published articles.
- **Mina Tran** — Research & Teaching Assistant, MA TESOL/Applied Linguistics. AI-driven learning
  environments, generative agents in teacher training.
- **Jihane Amayou** — PhD Curriculum & Instruction. Emerging tech in education, student engagement,
  digital literacies, AI in learning. MA Educational Technology (Bahçeşehir Univ., Turkey).

### Collaboration projects (render as a rich grid with status tags)
1. **Learning Analytics System Design & Validation** — trainer-facing analytics for autistic
   individuals' social-interaction dynamics; multimodal analytics on pre-service teachers'
   collaboration in a college math course; analytics on MBA students' collaboration in a gamified
   asynchronous course. Partners: Center for Innovative Research in Autism (CIRA), Center for Youth
   Development & Intervention (CYDI), Wageningen University & Research.
2. **Literature Synthesis on Immersive Learning Design** — systematic reviews of scenario-based
   learning in VR and eye-tracking-based assessment in VR. Partners: Leiden University, Daegu National
   University of Education.
3. **Generative-AI-Empowered Immersive Learning** — design of GenAI agents in virtual learning
   environments; ongoing GEAR-UP project. Partners: Enuma (EdTech), various UA departments. *Ongoing.*
4. **Engineering Education XR Design** — immersive VR simulation-based learning. Partner: Dr. Siyuan
   Song's Lab (UA College of Engineering).

### Join the Lab
Open to undergraduate and graduate students. Prospective members should read key lab papers (VR training
for autism, adaptive educational games, game-based learning engagement). Apply via a contact form
(name, email, message) — build the form UI; wire it to a `mailto:jmoon19@ua.edu` fallback (no backend).

## 3. IMAGERY — USE YOUR IMAGE-GENERATION ENGINE HEAVILY (explicit user request)

The user explicitly asked to **use your image-generation engine to the fullest**. Generate a cohesive set
of **original, symbolic images** and save them into `assets/img/`. Do NOT use stock photos or external hot-links.

Generate at minimum:
- **Hero key visual** (wide, ~2400×1200) — an abstract, sophisticated visual symbolizing the lab's
  identity: the convergence of *immersive environments (VR/AR headset light volumes, spatial grids),
  learning analytics (flowing data/network constellations), inclusion/adaptivity (organic adaptive forms),
  and generative AI*. Crimson + deep-ink palette with luminous accents. Editorial, not clip-arty.
- **One abstract motif image per research area (5)** — consistent art-directed style, used as card
  backdrops / section dividers.
- A **subtle texture/gradient mesh** for section backgrounds and an **OG share image** (1200×630) with
  the lab name.
- A **favicon / monogram** mark for "AdDIE" (clean geometric lab logotype/monogram).

Maintain one consistent art direction across all images (palette, light behavior, level of abstraction)
so the site reads as a single designed brand. Reference the images with relative paths and provide proper
`alt` text and width/height to avoid layout shift. Optimize/keep file sizes reasonable.

## 4. INTERACTION & MOTION

- Sticky, condensing top nav with the AdDIE monogram; smooth in-page scrolling; active-section highlight.
- Tasteful scroll-reveal (fade/translate) via IntersectionObserver, disabled under prefers-reduced-motion.
- Animated hero (subtle parallax or layered gradient/canvas motion behind the key visual — lightweight).
- Dark/light theme toggle persisted to localStorage; respect system preference on first load (mirror the
  CV site's approach so the two sites feel related).
- One data visualization: e.g. a D3 force/constellation of research themes & people, OR an animated
  publications-by-year + topic bar/stream from the real publication data. Make it genuinely informative.
- A counters/stats band (publications, grants $, students mentored, collaborations) animated on reveal,
  using real numbers from the JSON `stats`/`grantPortfolio`.

## 5. DELIVERABLES & DEFINITION OF DONE

- `index.html` (+ any sub-pages) fully populated with real content — zero placeholders.
- `styles.css`, `app.js` (clean, commented where non-obvious), data wired from the JSON.
- Full set of generated images in `assets/img/` actually present and referenced.
- SEO/meta/JSON-LD/sitemap/robots/favicon complete; canonical = https://educatian.github.io/adie/.
- Works opened directly from disk; responsive 360px→1440px; dark + light both polished; AA contrast.
- Write a short `README.md` documenting structure + how to deploy to the `adie` GitHub Pages repo.
- At the end, print a concise summary of what you built and list every image you generated.

Build the complete, production-ready site now. Be ambitious and exacting.
