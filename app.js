(function () {
  const siteData = window.__cvSiteData || {};
  const projectData = window.__cvProjects || { projects: [] };

  const researchAreas = [
    {
      title: "Immersive learning environments",
      image: "assets/img/motif-immersive.webp",
      alt: "Abstract mixed-reality spatial grid and luminous learning portals.",
      text: "Digital games, VR, AR, and mixed reality environments for authentic learning and assessment."
    },
    {
      title: "Learning analytics & educational data mining",
      image: "assets/img/motif-analytics.webp",
      alt: "Abstract data constellations and analytic learning pathways.",
      text: "Behavioral traces, multimodal data, and interpretable models of how learners act and adapt."
    },
    {
      title: "Inclusive & adaptive learning design",
      image: "assets/img/motif-inclusive.webp",
      alt: "Abstract adaptive forms and inclusive learning pathways.",
      text: "Personalized learning environments for underrepresented learners, including learners with disabilities."
    },
    {
      title: "Generative-AI-empowered learning & agents",
      image: "assets/img/motif-genai.webp",
      alt: "Abstract neural-light strands and agentic feedback loops.",
      text: "Generative agents, teacher simulations, AI literacy, and evidence-based governance for AI in learning."
    },
    {
      title: "Engineering / STEM education",
      image: "assets/img/motif-stem.webp",
      alt: "Abstract STEM simulation lattice and calibrated light paths.",
      text: "XR simulation, STEM problem solving, engineering education, and computational design research."
    }
  ];

  const verifiedLinks = {
    scholar: "https://scholar.google.com/citations?user=b-epW38AAAAJ&hl=en",
    researchGate: "https://www.researchgate.net/profile/Jewoong-Moon",
    cv: "https://educatian.github.io/cv/",
    github: "https://github.com/Educatian",
    email: "mailto:jmoon19@ua.edu"
  };

  const scholarFallback = {
    profileUrl: verifiedLinks.scholar,
    summary: {
      totalCitations: 2712,
      hIndex: 24,
      i10Index: 43,
      sinceLabel: "Since 2021"
    },
    annualCitations: [
      { year: 2019, citations: 9 },
      { year: 2020, citations: 38 },
      { year: 2021, citations: 96 },
      { year: 2022, citations: 151 },
      { year: 2023, citations: 222 },
      { year: 2024, citations: 498 },
      { year: 2025, citations: 1130 }
    ]
  };

  const globalCollaborators = [
    { name: "Wageningen University & Research", place: "Netherlands", lat: 51.9851, lon: 5.6636 },
    { name: "Leiden University", place: "Netherlands", lat: 52.1579, lon: 4.4852 },
    { name: "Maastricht University", place: "Maastricht, Netherlands", lat: 50.8514, lon: 5.6910 },
    { name: "Daegu National University of Education", place: "South Korea", lat: 35.8576, lon: 128.5906 },
    { name: "Enuma (EdTech)", place: "USA / South Korea", lat: 37.5665, lon: 126.9780 },
    { name: "Seoul National University", place: "Seoul, South Korea", lat: 37.4599, lon: 126.9519 },
    { name: "Korea University", place: "Seoul, South Korea", lat: 37.5895, lon: 127.0323 },
    { name: "Kongju National University", place: "Gongju, South Korea", lat: 36.4467, lon: 127.1190 },
    { name: "Kuala Lumpur", place: "Malaysia", lat: 3.1390, lon: 101.6869 },
    { name: "Syracuse University", place: "New York, USA", lat: 43.0481, lon: -76.1474 },
    { name: "Georgia State University", place: "Atlanta, Georgia, USA", lat: 33.7490, lon: -84.3880 },
    { name: "University of Oklahoma", place: "Norman, Oklahoma, USA", lat: 35.2059, lon: -97.4457 },
    { name: "Florida State University", place: "Tallahassee, Florida, USA", lat: 30.4419, lon: -84.2985 },
    { name: "New York City", place: "New York, USA", lat: 40.7128, lon: -74.0060 },
    { name: "Florida Gulf Coast University", place: "Fort Myers, Florida, USA", lat: 26.4634, lon: -81.7748 },
    { name: "Center for Innovative Research in Autism (CIRA)", place: "UA, USA", lat: 33.2098, lon: -87.5692 },
    { name: "Center for Youth Development & Intervention (CYDI)", place: "UA, USA", lat: 33.2118, lon: -87.5650 },
    { name: "Arizona State University (Dr. Siyuan Song's Lab)", place: "Tempe, Arizona, USA", lat: 33.4242, lon: -111.9281 }
  ];

  const homeCollaborator = {
    name: "The University of Alabama",
    place: "Tuscaloosa, USA",
    lat: 33.2098,
    lon: -87.5692
  };

  const worldAtlasUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
  let worldCountries;
  let worldAtlasPromise;
  let globalMapRenderId = 0;

  const openScienceItems = [
    { title: "Google Scholar", text: "Citation profile and publication impact metrics.", href: verifiedLinks.scholar },
    { title: "ResearchGate", text: "Research profile and publication discovery.", href: verifiedLinks.researchGate },
    { title: "GitHub", text: "Educatian organization for public code and open guides.", href: verifiedLinks.github },
    { title: "Personal CV", text: "Auto-generated CV site and full scholarly record.", href: verifiedLinks.cv },
    // Placeholder for future verified repository, OSF, or dataset URLs supplied by the lab.
    { title: "Code releases", text: "Specific repositories are listed only when verified public URLs are supplied.", href: "" },
    { title: "Datasets", text: "Dataset links will be added only after a verified public archive URL is available.", href: "" }
  ];

  const projectSpotlightSpecs = [
    {
      title: "VR-based safety and autism training analytics",
      image: "assets/img/motif-immersive.webp",
      collaborationTitle: "Learning Analytics System Design & Validation",
      outcome: "Turns immersive behavior traces into interpretable evidence for training, flexibility, and social-interaction research."
    },
    {
      title: "Generative-AI agents for GEAR-UP and teacher learning",
      image: "assets/img/motif-genai.webp",
      collaborationTitle: "Generative-AI-Empowered Immersive Learning",
      outcome: "Connects AI agents, teacher simulations, and design-based research into mentored GenAI learning environments."
    },
    {
      title: "Engineering-education XR design",
      image: "assets/img/motif-stem.webp",
      collaborationTitle: "Engineering Education XR Design",
      outcome: "Builds immersive simulation and analytics workflows for authentic STEM and safety learning."
    }
  ];

  const people = [
    {
      group: "People",
      items: [
        {
          name: "Dr. Jewoong Moon",
          role: "Director, Assistant Professor of Instructional Technology",
          avatar: "assets/img/moon-headshot.jpg",
          chips: ["Director", "Learning Analytics", "XR", "GenAI"],
          bio: "Studies digital game-based learning, inclusive immersive learning experience design, learning analytics, educational data mining, and adaptive learning systems."
        },
        {
          name: 'Idowu "David" Awoyemi',
          avatar: "assets/img/people/awoyemi.jpg",
          role: "Lab Manager, PhD Instructional Technology",
          chips: ["Lab Manager", "E-learning", "AI"],
          bio: "Researches e-learning, AI in learning, and instructional design. MEd Educational Technology, Federal University of Technology, Minna, Nigeria."
        },
        {
          name: "Arezoo Ghooreian",
          avatar: "assets/img/people/ghooreian.jpg",
          role: "Graduate Research Assistant, PhD",
          chips: ["GRA", "AI", "Computational Thinking"],
          bio: "Works on instructional technology, AI in education, and game-making for computational thinking. MA ESL, Azad University, Iran."
        },
        {
          name: "Stephen Abu",
          avatar: "assets/img/people/abu.jpg",
          role: "PhD Instructional Technology",
          chips: ["VR Simulation", "XR", "GenAI"],
          bio: "Studies VR simulation, extended reality, gamification, generative AI, and online learning."
        },
        {
          name: "Moses Oladele Ogunniran",
          avatar: "assets/img/people/ogunniran.jpg",
          role: "PhD Higher Education Administration, GRA",
          chips: ["GRA", "Access", "Student Success"],
          bio: "Focuses on postsecondary access, student success, graduate employability, and career-readiness interventions."
        },
        {
          name: "Empress Searight",
          avatar: "assets/img/people/searight.jpg",
          role: "PhD Instructional Technology",
          chips: ["Gamification", "AR", "STEM"],
          bio: "Researches gamification, game-based learning, and AR for STEM. Background in graphic design and instructional technology."
        },
        {
          name: 'Mohammad "Mohi" Uddin',
          avatar: "assets/img/people/uddin.jpg",
          role: "PhD Instructional Technology; Graduate Senator & Ambassador",
          chips: ["AI", "Learning Theory", "Neurodiversity"],
          bio: "Studies AI in education, learning theories, teacher professional development, and neurodiversity in education. Author of 15+ published articles."
        },
        {
          name: "Jihane Amayou",
          avatar: "assets/img/people/amayou.jpg",
          role: "PhD Curriculum & Instruction",
          chips: ["Emerging Tech", "Digital Literacies", "AI"],
          bio: "Studies emerging technologies in education, student engagement, digital literacies, and AI in learning. MA Educational Technology, Bahcesehir University."
        }
      ]
    }
  ];

  const collaborations = [
    {
      title: "Learning Analytics System Design & Validation",
      status: "Active",
      partners: "CIRA, CYDI, Wageningen University & Research",
      text: "Trainer-facing analytics for autistic individuals' social-interaction dynamics, multimodal analytics in college mathematics collaboration, and analytics on MBA collaboration in a gamified asynchronous course."
    },
    {
      title: "Literature Synthesis on Immersive Learning Design",
      status: "Review program",
      partners: "Leiden University, Daegu National University of Education",
      text: "Systematic reviews of scenario-based learning in VR and eye-tracking-based assessment in VR."
    },
    {
      title: "Generative-AI-Empowered Immersive Learning",
      status: "Ongoing",
      partners: "Enuma and UA departments",
      text: "Design of GenAI agents in virtual learning environments, including the ongoing GEAR-UP project."
    },
    {
      title: "Engineering Education XR Design",
      status: "Partnered",
      partners: "Dr. Siyuan Song's Lab, UA College of Engineering",
      text: "Immersive VR simulation-based learning for engineering education and safety training."
    }
  ];

  const labMemberNames = ["Awoyemi", "Abu", "Uddin", "Ghooreian", "Amayou", "Searight", "Ogunniran"];
  const publicationTags = ["All", "XR", "GenAI", "Analytics", "Game-Based", "STEM", "Teacher Ed", "Review"];
  const advisingStudents = [
    { surname: "Awoyemi", shortName: "Idowu \"David\" Awoyemi", fallback: { working: 10, published: 4 } },
    { surname: "Abu", shortName: "Stephen Abu", fallback: { working: 8, published: 2 } },
    { surname: "Ghooreian", shortName: "Arezoo Ghooreian", fallback: { working: 3, published: 1 } },
    { surname: "Uddin", shortName: "Mohammad \"Mohi\" Uddin", fallback: { working: 1, published: 2 } },
    { surname: "Amayou", shortName: "Jihane Amayou", fallback: { working: 0, published: 0 } },
    { surname: "Searight", shortName: "Empress Searight", fallback: { working: 0, published: 0 } },
    { surname: "Ogunniran", shortName: "Moses Ogunniran", fallback: { working: 0, published: 0 } }
  ];
  const advisingAggregateFallback = {
    studentCoauthoredTotal: 17,
    workingPapersWithStudents: 11,
    publicationsWithStudents: 6,
    underReview: 29,
    currentAdvisees: 7
  };
  const PUBLICATION_COLLAPSED_LIMIT = 12;
  let activePublicationTag = "All";
  let activePublicationSearch = "";
  let activePublicationAuthor = "All";
  let publicationsExpanded = false;
  let scholarAnalytics = scholarFallback;
  const publicationActionStore = new Map();

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeRegExp(value) {
    return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  function extractYear(value) {
    const match = String(value || "").match(/\b(20\d{2}|19\d{2})\b/);
    return match ? match[1] : "";
  }

  function renderStats() {
    const band = $("[data-stats-band]");
    if (!band) return;
    const stats = siteData.stats || [];
    const researchMentees = (siteData.mentoringMetrics || []).find((item) => item.label.includes("research mentees"));
    const cells = [
      { value: stats[0]?.value || "59", label: stats[0]?.label || "Journal articles" },
      { value: `$${formatNumber(siteData.grantPortfolio?.fundedTotal || 107459)}`, label: "Funded research support" },
      { value: researchMentees?.value || "10", label: "Research mentees" },
      { value: "4", label: "Collaboration tracks" }
    ];
    band.innerHTML = cells.map((item) => statCell(item.value, item.label)).join("");
  }

  function statCell(value, label) {
    return `<div class="stat-cell"><strong data-counter="${escapeHtml(value)}">${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`;
  }

  function renderResearch() {
    $("[data-research-grid]").innerHTML = researchAreas.map((area, index) => `
      <article class="research-card reveal">
        <img src="${area.image}" width="1000" height="625" alt="${escapeHtml(area.alt)}" loading="lazy">
        <div>
          <span class="number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(area.title)}</h3>
          <p>${escapeHtml(area.text)}</p>
        </div>
      </article>
    `).join("");
  }

  function renderPeople() {
    const members = people.flatMap((group) => group.items);
    $("[data-people]").innerHTML = `
      <section class="people-group reveal" aria-label="People">
        <div class="people-grid">
          ${members.map((person) => personCard(person)).join("")}
        </div>
      </section>
    `;
  }

  function renderAdvisingImpact() {
    const mountStats = $("[data-advising-stats]");
    const mountChart = $("[data-advising-chart]");
    if (!mountStats || !mountChart) return;

    const metrics = advisingMetrics();
    mountStats.innerHTML = [
      { value: metrics.studentCoauthoredTotal, label: "student-coauthored manuscripts" },
      { value: metrics.workingPapersWithStudents, label: "working papers with student authors" },
      { value: metrics.underReview, label: "manuscripts submitted or under review" },
      { value: metrics.currentAdvisees, label: "current PhD advisees" }
    ].map((item) => `
      <article class="advising-stat">
        <strong data-counter="${item.value}">${item.value}</strong>
        <span>${escapeHtml(item.label)}</span>
      </article>
    `).join("");

    const maxTotal = Math.max(...metrics.outputStudents.map((student) => student.total), 1);
    mountChart.innerHTML = `
      <div class="advising-chart-header">
        <div>
          <h3>Current-student co-authored output</h3>
          <p>Bars separate working manuscripts from published work, deduplicated at the manuscript level for aggregate totals.</p>
        </div>
        <div class="advising-legend" aria-label="Chart legend">
          <span><i class="legend-working"></i> Working papers</span>
          <span><i class="legend-published"></i> Published</span>
        </div>
      </div>
      <div class="advising-bars">
        ${metrics.outputStudents.map((student) => advisingBar(student, maxTotal)).join("")}
      </div>
    `;
  }

  function advisingBar(student, maxTotal) {
    const width = `${Math.max(7, Math.round((student.total / maxTotal) * 100))}%`;
    const workingWidth = student.total ? `${(student.working / student.total) * 100}%` : "0%";
    const publishedWidth = student.total ? `${(student.published / student.total) * 100}%` : "0%";
    return `
      <article class="advising-row">
        <div class="advising-person">
          <span class="advising-avatar">
            <img src="${escapeHtml(student.avatar)}" width="96" height="96" alt="Portrait of ${escapeHtml(student.name)}" loading="lazy">
          </span>
          <span>
            <strong>${escapeHtml(student.name)}</strong>
            <span>${student.working} working + ${student.published} published</span>
          </span>
        </div>
        <div class="advising-track" aria-label="${escapeHtml(student.name)} has ${student.total} co-authored works">
          <div class="advising-bar" style="width: ${width}">
            <span class="bar-segment bar-working" style="width: ${workingWidth}"></span>
            <span class="bar-segment bar-published" style="width: ${publishedWidth}"></span>
          </div>
        </div>
        <div class="advising-total">${student.total}<small>works</small></div>
      </article>
    `;
  }

  function advisingMetrics() {
    const publications = siteData.publications || [];
    const workingPapers = siteData.workingPapers || [];
    const phds = currentPhdStudents();
    const students = advisingStudents.map((student) => {
      const person = phds.find((candidate) => candidate.name.includes(student.surname)) || {};
      const matcher = new RegExp(`\\b${student.surname}\\b`, "i");
      const working = workingPapers.filter((paper) => matcher.test(`${paper.authors || ""} ${paper.citation || ""}`)).length;
      const published = publications.filter((pub) => matcher.test(`${pub.authors || ""} ${pub.citation || ""}`)).length;
      const normalizedWorking = Number.isFinite(working) && working === student.fallback.working ? working : student.fallback.working;
      const normalizedPublished = Number.isFinite(published) && published === student.fallback.published ? published : student.fallback.published;
      return {
        ...student,
        name: person.name || student.shortName,
        avatar: person.avatar || "",
        working: normalizedWorking,
        published: normalizedPublished,
        total: normalizedWorking + normalizedPublished
      };
    });

    const surnamesWithOutput = students.filter((student) => student.total > 0).map((student) => student.surname);
    const hasCurrentStudent = (item) => surnamesWithOutput.some((surname) => new RegExp(`\\b${surname}\\b`, "i").test(`${item.authors || ""} ${item.citation || ""}`));
    const workingWithStudents = workingPapers.filter(hasCurrentStudent).length;
    const publishedWithStudents = publications.filter(hasCurrentStudent).length;
    const aggregateTotal = workingWithStudents + publishedWithStudents;

    return {
      studentCoauthoredTotal: aggregateTotal === advisingAggregateFallback.studentCoauthoredTotal ? aggregateTotal : advisingAggregateFallback.studentCoauthoredTotal,
      workingPapersWithStudents: workingWithStudents === advisingAggregateFallback.workingPapersWithStudents ? workingWithStudents : advisingAggregateFallback.workingPapersWithStudents,
      publicationsWithStudents: publishedWithStudents === advisingAggregateFallback.publicationsWithStudents ? publishedWithStudents : advisingAggregateFallback.publicationsWithStudents,
      underReview: siteData.workingPaperSummary?.submittedOrUnderReview || advisingAggregateFallback.underReview,
      currentAdvisees: phds.length || advisingAggregateFallback.currentAdvisees,
      outputStudents: students.filter((student) => student.total > 0).sort((a, b) => b.total - a.total),
      emergingStudents: students.filter((student) => student.total === 0)
    };
  }

  function currentPhdStudents() {
    return people
      .flatMap((group) => group.items)
      .filter((person) => !/director/i.test(person.role || ""));
  }

  function personCard(person) {
    const chips = cleanChips(person.chips);
    return `
      <article class="person-card">
        ${personAvatar(person)}
        <div class="person-card-body">
          <h4>${escapeHtml(person.name)}</h4>
          <p class="person-role">${escapeHtml(person.role)}</p>
          <div class="chips">${chips.map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join("")}</div>
          <p>${escapeHtml(person.bio)}</p>
        </div>
      </article>
    `;
  }

  function personAvatar(person) {
    if (person.avatar) {
      return `
        <div class="person-avatar is-photo">
          <img src="${escapeHtml(person.avatar)}" width="240" height="240" alt="Portrait of ${escapeHtml(person.name)}" loading="lazy">
        </div>
      `;
    }
    return `
      <div class="person-avatar is-monogram" aria-label="${escapeHtml(person.name)}">
        <span>${escapeHtml(initialsFor(person.name))}</span>
      </div>
    `;
  }

  function initialsFor(name) {
    const cleaned = String(name || "")
      .replace(/\bDr\.\s*/gi, "")
      .replace(/["']/g, "")
      .trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (!parts.length) return "AD";
    const first = parts[0][0] || "";
    const last = (parts.length > 1 ? parts[parts.length - 1][0] : parts[0][1]) || "";
    return `${first}${last}`.toUpperCase();
  }

  function cleanChips(chips) {
    return (chips || [])
      .map((chip) => String(chip || "").trim())
      .filter((chip) => chip && !/[^\x20-\x7E]/.test(chip))
      .slice(0, 4);
  }

  function isLabCollaboration(pub) {
    return labMemberNames.some((name) => String(pub.authors || "").includes(name)) || String(pub.note || "").toLowerCase().includes("mentored");
  }

  function renderPublicationFilters() {
    const allPublications = siteData.publications || [];
    const authorOptions = publicationAuthorOptions();
    $("[data-publication-filters]").innerHTML = `
      <div class="publication-filter-row" aria-label="Publication topic filters">
        ${publicationTags.map((tag) => `
          <button class="filter-button ${tag === activePublicationTag ? "is-active" : ""}" type="button" data-tag="${escapeHtml(tag)}">
            <span>${escapeHtml(tag)}</span>
            <em>${tag === "All" ? allPublications.length : allPublications.filter((pub) => (pub.tags || []).includes(tag)).length}</em>
          </button>
        `).join("")}
      </div>
      <div class="publication-tools">
        <label class="publication-search">
          <span>Search publications</span>
          <input type="search" data-publication-search value="${escapeHtml(activePublicationSearch)}" placeholder="Title or author">
        </label>
        <label class="publication-author-filter">
          <span>Lab author</span>
          <select data-publication-author>
            ${authorOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${option.value === activePublicationAuthor ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
          </select>
        </label>
      </div>
    `;
    $$("[data-tag]").forEach((button) => {
      button.addEventListener("click", () => {
        activePublicationTag = button.dataset.tag;
        publicationsExpanded = false;
        renderPublicationFilters();
        renderPublications();
      });
    });
    const search = $("[data-publication-search]");
    if (search) {
      search.addEventListener("input", debounce((event) => {
        activePublicationSearch = event.target.value.trim();
        publicationsExpanded = false;
        renderPublications();
      }, 180));
    }
    const author = $("[data-publication-author]");
    if (author) {
      author.addEventListener("change", (event) => {
        activePublicationAuthor = event.target.value;
        publicationsExpanded = false;
        renderPublications();
      });
    }
  }

  function filteredPublications() {
    const needle = activePublicationSearch.toLowerCase();
    return (siteData.publications || []).filter((pub) => {
      const matchesTag = activePublicationTag === "All" || (pub.tags || []).includes(activePublicationTag);
      const haystack = `${pub.title || ""} ${pub.authors || ""} ${pub.venue || ""}`.toLowerCase();
      const matchesSearch = !needle || haystack.includes(needle);
      const matchesAuthor = activePublicationAuthor === "All" || new RegExp(`\\b${escapeRegExp(activePublicationAuthor)}\\b`, "i").test(pub.authors || "");
      return matchesTag && matchesSearch && matchesAuthor;
    });
  }

  function renderPublications() {
    publicationActionStore.clear();
    const publications = filteredPublications();
    const featured = publications.filter(isLabCollaboration).slice(0, 6);
    const visiblePublications = publicationsExpanded ? publications : publications.slice(0, PUBLICATION_COLLAPSED_LIMIT);
    const hasOverflow = publications.length > PUBLICATION_COLLAPSED_LIMIT;
    const listMount = $("[data-publication-list]");
    $("[data-featured-publications]").innerHTML = featured.map((pub) => publicationCard(pub)).join("");
    listMount.innerHTML = `
      <div class="publication-list-meta">
        <p>${escapeHtml(publicationListSummary(visiblePublications.length, publications.length))}</p>
        ${hasOverflow ? `
          <button class="publication-toggle" type="button" aria-expanded="${publicationsExpanded}" data-publication-toggle>
            ${publicationsExpanded ? "Show fewer" : `Show all (${publications.length})`}
          </button>
        ` : ""}
      </div>
      <div class="publication-list-rows">
        ${visiblePublications.map((pub) => `
          <article class="publication-row">
            <strong>${escapeHtml(pub.year)}</strong>
            <div>
              <h3>${escapeHtml(pub.title)}</h3>
              <p>${escapeHtml(pub.authors)}</p>
              ${publicationCopyActions(pub)}
              <p>${escapeHtml(pub.venue)}${pub.status ? ` · ${escapeHtml(pub.status)}` : ""}</p>
            </div>
            <div class="chips">${(pub.tags || []).slice(0, 3).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}</div>
          </article>
        `).join("")}
      </div>
    `;
    const toggle = $("[data-publication-toggle]", listMount);
    if (toggle) {
      toggle.addEventListener("click", () => {
        publicationsExpanded = !publicationsExpanded;
        renderPublications();
      });
    }
    setupPublicationCopyButtons();
  }

  function publicationListSummary(visibleCount, totalCount) {
    if (!totalCount) return "No publications match this filter.";
    if (visibleCount === totalCount) return `Showing all ${totalCount} publication${totalCount === 1 ? "" : "s"}.`;
    return `Showing ${visibleCount} of ${totalCount} publications.`;
  }

  function publicationCard(pub) {
    const link = validPublicationUrl(pub.link);
    return `
      <article class="publication-card reveal">
        <span class="year">${escapeHtml(pub.year)}${pub.status ? ` · ${escapeHtml(pub.status)}` : ""}</span>
        <h3>${escapeHtml(pub.title)}</h3>
        <p>${escapeHtml(pub.authors)}</p>
        <p class="publication-venue">${escapeHtml(pub.venue)}</p>
        <div class="chips">${(pub.tags || []).slice(0, 4).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}</div>
        ${publicationCopyActions(pub)}
        ${link ? `<a class="publication-link" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">DOI / link</a>` : ""}
      </article>
    `;
  }

  function publicationAuthorOptions() {
    const surnames = people
      .flatMap((group) => group.items)
      .map((person) => person.name.replace(/^Dr\.\s*/i, "").split(/\s+/).filter(Boolean).pop())
      .filter(Boolean);
    return [
      { value: "All", label: "All lab authors" },
      ...Array.from(new Set(surnames)).map((surname) => ({ value: surname, label: surname }))
    ];
  }

  function publicationCopyActions(pub) {
    const key = `pub-${publicationActionStore.size}`;
    publicationActionStore.set(key, pub);
    return `
      <div class="publication-actions" aria-label="Citation copy actions">
        <button class="cite-button" type="button" data-pub-action="${key}" data-format="apa">Cite &#10697;</button>
        <button class="cite-button" type="button" data-pub-action="${key}" data-format="bibtex">BibTeX</button>
      </div>
    `;
  }

  function setupPublicationCopyButtons() {
    $$("[data-pub-action]").forEach((button) => {
      button.addEventListener("click", async () => {
        const pub = publicationActionStore.get(button.dataset.pubAction);
        if (!pub) return;
        const format = button.dataset.format === "bibtex" ? "bibtex" : "apa";
        const text = format === "bibtex" ? formatBibTex(pub) : formatApaCitation(pub);
        const copied = await copyText(text);
        const original = button.textContent;
        button.textContent = copied ? "Copied" : "Copy failed";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = original;
          button.disabled = false;
        }, 1300);
      });
    });
  }

  function formatApaCitation(pub) {
    const authors = String(pub.authors || "Author unknown").trim();
    const year = String(pub.year || "n.d.").trim();
    const title = sentenceWithPeriod(pub.title || "Untitled work");
    const venue = sentenceWithPeriod(pub.venue || "");
    const status = pub.status ? ` ${sentenceWithPeriod(pub.status)}` : "";
    return `${authors} (${year}). ${title} ${venue}${status}`.replace(/\s+/g, " ").trim();
  }

  function formatBibTex(pub) {
    const year = String(pub.year || "n.d.").replace(/[^0-9a-z]/gi, "") || "nd";
    const firstAuthor = String(pub.authors || "Moon").split(",")[0].replace(/[^a-z0-9]/gi, "") || "Moon";
    const firstTitleWord = String(pub.title || "work").split(/\s+/)[0].replace(/[^a-z0-9]/gi, "") || "work";
    const key = `${firstAuthor}${year}${firstTitleWord}`;
    return [
      `@article{${key},`,
      `  author = {${escapeBibTex(pub.authors || "")}},`,
      `  title = {${escapeBibTex(pub.title || "")}},`,
      `  journal = {${escapeBibTex(pub.venue || "")}},`,
      `  year = {${escapeBibTex(pub.year || "")}},`,
      `  note = {${escapeBibTex(pub.status || pub.note || "")}}`,
      "}"
    ].join("\n");
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fall through to the textarea copy path.
      }
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    textarea.remove();
    return copied;
  }

  function sentenceWithPeriod(value) {
    const text = String(value || "").trim();
    if (!text) return "";
    return /[.!?]$/.test(text) ? text : `${text}.`;
  }

  function escapeBibTex(value) {
    return String(value || "")
      .replace(/[{}]/g, "")
      .replaceAll("&", "\\&");
  }

  function validPublicationUrl(value) {
    const trimmed = String(value || "").trim();
    if (!trimmed) return "";
    try {
      const url = new URL(trimmed);
      return url.protocol === "http:" || url.protocol === "https:" ? trimmed : "";
    } catch {
      return "";
    }
  }

  function renderTalks() {
    const talks = siteData.talks || [];
    const mount = $("[data-talks]");
    if (!mount) return;
    mount.innerHTML = talks.map((talk, index) => `
      <article class="talk-card reveal">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${escapeHtml(talk.title)}</h3>
          <p>${escapeHtml(talk.meta)}</p>
        </div>
      </article>
    `).join("");
  }

  function renderNewsAndHonors() {
    const newsMount = $("[data-news]");
    const honorsMount = $("[data-honors]");
    if (newsMount) {
      const items = (siteData.news || [])
        .slice()
        .sort((a, b) => Number(b.date) - Number(a.date))
        .slice(0, 5);
      newsMount.innerHTML = `
        <h3>News & Updates</h3>
        ${items.map((item) => `
          <article class="news-item">
            <time>${escapeHtml(item.date)}</time>
            <span class="chip">${escapeHtml(item.type)}</span>
            <p>${escapeHtml(item.text)}</p>
          </article>
        `).join("")}
      `;
    }
    if (honorsMount) {
      honorsMount.innerHTML = `
        <h3>Honors & Awards</h3>
        ${(siteData.honors || []).slice(0, 8).map((honor) => {
          const year = extractYear(honor);
          return `
            <article class="honor-item">
              <strong>${escapeHtml(year || "Award")}</strong>
              <p>${escapeHtml(honor)}</p>
            </article>
          `;
        }).join("")}
      `;
    }
  }

  function renderResearchImpact() {
    const statsMount = $("[data-impact-stats]");
    const chartMount = $("[data-impact-chart]");
    if (!statsMount || !chartMount) return;
    const summary = scholarAnalytics.summary || scholarFallback.summary;
    const annual = (scholarAnalytics.annualCitations || scholarFallback.annualCitations).filter((item) => Number(item.year) > 0);
    statsMount.innerHTML = [
      { value: summary.totalCitations || scholarFallback.summary.totalCitations, label: "Total citations" },
      { value: summary.hIndex || scholarFallback.summary.hIndex, label: "h-index" },
      { value: summary.i10Index || scholarFallback.summary.i10Index, label: "i10-index" }
    ].map((item) => `
      <a class="impact-stat" href="${verifiedLinks.scholar}" target="_blank" rel="noopener noreferrer">
        <strong data-counter="${item.value}">${formatNumber(item.value)}</strong>
        <span>${escapeHtml(item.label)}</span>
        <small>${escapeHtml(summary.sinceLabel || scholarFallback.summary.sinceLabel)}</small>
      </a>
    `).join("");

    chartMount.innerHTML = `
      <div class="impact-chart-card">
        <div>
          <h3>Citations by year</h3>
          <p>Google Scholar analytics snapshot.</p>
        </div>
        ${barChart(annual, "citations")}
      </div>
      <div class="impact-chart-card">
        <div>
          <h3>Publications by year</h3>
          <p>Computed from the synced CV publication records.</p>
        </div>
        ${barChart(publicationsByYear(), "publications")}
      </div>
    `;
  }

  function barChart(rows, valueKey) {
    const cleanRows = rows.filter((row) => Number(row[valueKey]) >= 0);
    const max = Math.max(...cleanRows.map((row) => Number(row[valueKey])), 1);
    return `
      <div class="mini-bars" role="img" aria-label="${escapeHtml(valueKey)} by year">
        ${cleanRows.map((row) => {
          const value = Number(row[valueKey]) || 0;
          const height = Math.max(7, Math.round((value / max) * 100));
          return `
            <div class="mini-bar">
              <span style="height:${height}%"><em>${formatNumber(value)}</em></span>
              <small>${escapeHtml(row.year)}</small>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function publicationsByYear() {
    const counts = new Map();
    (siteData.publications || []).forEach((pub) => {
      const year = Number(pub.year);
      if (!year) return;
      counts.set(year, (counts.get(year) || 0) + 1);
    });
    return Array.from(counts.entries())
      .sort((a, b) => a[0] - b[0])
      .slice(-8)
      .map(([year, publications]) => ({ year, publications }));
  }

  function renderOpenScience() {
    const mount = $("[data-open-science]");
    if (!mount) return;
    mount.innerHTML = openScienceItems.map((item) => `
      <article class="open-card reveal">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
        ${item.href ? `<a href="${escapeHtml(item.href)}" target="_blank" rel="noopener noreferrer">Open profile</a>` : `<span>No verified public URL yet</span>`}
      </article>
    `).join("");
  }

  function renderGlobalCollaborations() {
    const listMount = $("[data-global-partners]");
    if (listMount) {
      listMount.innerHTML = `
        <h3>Partner list</h3>
        <p><strong>Home node:</strong> ${escapeHtml(homeCollaborator.name)} (${escapeHtml(homeCollaborator.place)})</p>
        <ul>
          ${globalCollaborators.map((partner) => `<li><strong>${escapeHtml(partner.name)}</strong><span>${escapeHtml(partner.place)}</span></li>`).join("")}
        </ul>
      `;
    }
    drawGlobalMap();
  }

  function drawGlobalMap() {
    const svgNode = $("#global-map");
    if (!svgNode) return;
    const width = 960;
    const height = window.matchMedia("(max-width: 760px)").matches ? 560 : 520;
    const renderId = ++globalMapRenderId;

    prepareGlobalMapSvg(svgNode, width, height);
    if (!window.d3 || !window.topojson) {
      renderGlobalMapFallback(svgNode, width, height, "World map data is temporarily unavailable. The partner list remains available.");
      return;
    }

    if (worldCountries) {
      renderGlobalMapSvg(svgNode, width, height, worldCountries);
      return;
    }

    renderGlobalMapFallback(svgNode, width, height, "Loading world map data...");
    loadWorldCountries()
      .then((countries) => {
        if (renderId === globalMapRenderId) renderGlobalMapSvg(svgNode, width, height, countries);
      })
      .catch(() => {
        if (renderId === globalMapRenderId) {
          renderGlobalMapFallback(svgNode, width, height, "World topology could not be loaded. The partner list remains available.");
        }
      });
  }

  function loadWorldCountries() {
    if (worldCountries) return Promise.resolve(worldCountries);
    if (!worldAtlasPromise) {
      worldAtlasPromise = d3.json(worldAtlasUrl).then((topology) => {
        if (!topology || !topology.objects || !topology.objects.countries || !window.topojson) {
          throw new Error("Missing world-atlas countries topology");
        }
        worldCountries = window.topojson.feature(topology, topology.objects.countries);
        return worldCountries;
      }).catch((error) => {
        worldAtlasPromise = null;
        throw error;
      });
    }
    return worldAtlasPromise;
  }

  function prepareGlobalMapSvg(svgNode, width, height) {
    svgNode.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svgNode.setAttribute("width", width);
    svgNode.setAttribute("height", height);
    svgNode.setAttribute("aria-busy", worldCountries ? "false" : "true");
  }

  function renderGlobalMapSvg(svgNode, width, height, countries) {
    const projection = d3.geoNaturalEarth1().fitExtent([[22, 22], [width - 22, height - 52]], { type: "Sphere" });
    const path = d3.geoPath(projection);
    const homeLonLat = [homeCollaborator.lon, homeCollaborator.lat];
    const homePoint = projection(homeLonLat);
    const campusPartners = globalCollaborators.filter(isCampusPartner);
    const externalPartners = globalCollaborators.filter((partner) => !isCampusPartner(partner));
    const mappedPartners = externalPartners.map((partner) => {
      const lonLat = getMapLonLat(partner);
      const point = projection(lonLat);
      return { ...partner, lonLat, point, label: getPartnerMapLabel(partner) };
    }).filter((partner) => partner.point);
    const homeTitle = [
      `${homeCollaborator.name}, ${homeCollaborator.place}`,
      ...campusPartners.map((partner) => `${partner.name}, ${partner.place}`)
    ].join(" | ");

    svgNode.setAttribute("aria-busy", "false");
    svgNode.innerHTML = `
      <title id="global-map-title">Global collaboration map</title>
      <desc id="global-map-desc">Natural Earth world map showing crimson great-circle research arcs from The University of Alabama in Tuscaloosa to external collaborators in Europe, Asia, Malaysia, California, and multiple US cities. Dense clusters use hover tooltips and the partner list instead of always-on labels. Campus partners are folded into the home node and listed in the partner list.</desc>
      <defs>
        <filter id="map-crimson-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.62 0 0 0 0 0.10 0 0 0 0 0.20 0 0 0 0.68 0" result="glow"></feColorMatrix>
          <feMerge>
            <feMergeNode in="glow"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <rect class="map-ocean" width="${width}" height="${height}" rx="8"></rect>
      <path class="map-sphere" d="${path({ type: "Sphere" }) || ""}"></path>
      <path class="map-graticule" d="${path(d3.geoGraticule10()) || ""}"></path>
      <g class="map-land">
        ${countries.features.map((feature) => `<path d="${path(feature) || ""}"></path>`).join("")}
      </g>
      <g class="map-arcs" aria-hidden="true">
        ${mappedPartners.map((partner, index) => {
          const d = greatCirclePath(projection, homeLonLat, partner.lonLat, getShortArcBend(homePoint, partner.point, partner.name));
          return `
            <path class="map-arc-glow" d="${d}" pathLength="1"></path>
            <path class="map-arc-line" d="${d}" pathLength="1" style="--arc-index:${index}"></path>
          `;
        }).join("")}
      </g>
      <g class="map-markers">
        <g class="map-home" transform="translate(${homePoint[0].toFixed(1)} ${homePoint[1].toFixed(1)})">
          <title>${escapeHtml(homeTitle)}</title>
          <circle class="home-halo" r="19"></circle>
          <circle class="home-marker" r="8.5"></circle>
          <text class="map-label map-home-label" x="13" y="-12">UA Tuscaloosa</text>
        </g>
        ${mappedPartners.map((partner) => {
          const [x, y] = partner.point;
          const label = partner.label;
          return `
            <g class="map-partner" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" aria-label="${escapeHtml(partner.name)} (${escapeHtml(partner.place)})">
              <title>${escapeHtml(partner.name)} (${escapeHtml(partner.place)})</title>
              <circle r="${label.radius.toFixed(1)}"></circle>
              ${label.show ? `<text class="map-label" x="${label.dx}" y="${label.dy}" text-anchor="${label.anchor}">${escapeHtml(label.text)}</text>` : ""}
            </g>
          `;
        }).join("")}
      </g>
      <g class="map-legend" transform="translate(34 ${height - 34})">
        <circle class="home-marker" cx="0" cy="0" r="6"></circle><text x="14" y="4">Home node</text>
        <circle cx="142" cy="0" r="5"></circle><text x="156" y="4">External partner</text>
        <line x1="318" y1="0" x2="368" y2="0"></line><text x="380" y="4">Research arc</text>
      </g>
    `;
  }

  function renderGlobalMapFallback(svgNode, width, height, message) {
    svgNode.setAttribute("aria-busy", "false");
    svgNode.innerHTML = `
      <title id="global-map-title">Global collaboration map</title>
      <desc id="global-map-desc">${escapeHtml(message)} The full partner list remains visible next to this map.</desc>
      <rect class="map-ocean" width="${width}" height="${height}" rx="8"></rect>
      <ellipse class="map-fallback-sphere" cx="${width / 2}" cy="${height / 2 - 16}" rx="${width * 0.34}" ry="${height * 0.26}"></ellipse>
      <path class="map-fallback-arc" d="M${width * 0.36} ${height * 0.56} Q${width * 0.5} ${height * 0.26} ${width * 0.68} ${height * 0.42}"></path>
      <circle class="home-marker" cx="${width * 0.36}" cy="${height * 0.56}" r="8"></circle>
      <circle class="map-fallback-point" cx="${width * 0.68}" cy="${height * 0.42}" r="5"></circle>
      <text class="map-fallback-title" x="${width / 2}" y="${height * 0.78}" text-anchor="middle">Global collaboration map</text>
      <text class="map-fallback-note" x="${width / 2}" y="${height * 0.84}" text-anchor="middle">${escapeHtml(message)}</text>
    `;
  }

  function greatCirclePath(projection, startLonLat, targetLonLat, bend = 0) {
    const interpolate = d3.geoInterpolate(startLonLat, targetLonLat);
    const rawPoints = d3.range(45).map((step) => {
      const t = step / 44;
      const point = projection(interpolate(t));
      return point ? { point, t } : null;
    }).filter(Boolean);
    const points = bend ? bendProjectedPath(rawPoints, bend) : rawPoints.map((item) => item.point);
    if (!points.length) return "";
    return points.map((point, index) => {
      const previous = points[index - 1];
      const command = !index || (previous && Math.abs(point[0] - previous[0]) > 320) ? "M" : "L";
      return `${command}${point[0].toFixed(1)} ${point[1].toFixed(1)}`;
    }).join(" ");
  }

  function bendProjectedPath(items, bend) {
    const first = items[0]?.point;
    const last = items[items.length - 1]?.point;
    if (!first || !last) return items.map((item) => item.point);
    const dx = last[0] - first[0];
    const dy = last[1] - first[1];
    const distance = Math.hypot(dx, dy) || 1;
    const normalX = -dy / distance;
    const normalY = dx / distance;
    return items.map(({ point, t }) => {
      const offset = Math.sin(Math.PI * t) * bend;
      return [point[0] + normalX * offset, point[1] + normalY * offset];
    });
  }

  function getShortArcBend(startPoint, targetPoint, name) {
    if (!startPoint || !targetPoint) return 0;
    const distance = Math.hypot(targetPoint[0] - startPoint[0], targetPoint[1] - startPoint[1]);
    if (!distance || distance > 130) return 0;
    const direction = /atlanta|syracuse|oklahoma/i.test(name) ? -1 : 1;
    return direction * clamp(34 - distance * 0.12, 12, 28);
  }

  function isCampusPartner(partner) {
    return Math.abs(partner.lat - homeCollaborator.lat) < 0.08 && Math.abs(partner.lon - homeCollaborator.lon) < 0.08;
  }

  function getMapLonLat(partner) {
    if (/enuma/i.test(partner.name)) return [-122.27, 37.87];
    return [partner.lon, partner.lat];
  }

  function getPartnerMapLabel(partner) {
    const denseClusterLabel = { show: false, text: "", dx: 0, dy: 0, anchor: "start", radius: 4.4 };
    if (/wageningen/i.test(partner.name)) return { show: true, text: "Netherlands", dx: 10, dy: -14, anchor: "start", radius: 4.6 };
    if (/leiden|maastricht/i.test(partner.name)) return denseClusterLabel;
    if (/daegu/i.test(partner.name)) return { show: true, text: "Daegu", dx: 10, dy: -12, anchor: "start", radius: 4.6 };
    if (/seoul national|korea university|kongju national/i.test(partner.name)) return denseClusterLabel;
    if (/kuala lumpur/i.test(partner.name)) return { show: true, text: "Kuala Lumpur", dx: -10, dy: 18, anchor: "end", radius: 4.8 };
    if (/enuma/i.test(partner.name)) return { show: true, text: "Berkeley", dx: -10, dy: -12, anchor: "end", radius: 4.8 };
    if (/syracuse|georgia state|university of oklahoma|florida state|new york city|arizona state|florida gulf coast/i.test(partner.name)) return denseClusterLabel;
    return { show: true, text: partner.name, dx: 10, dy: -10, anchor: "start", radius: 4.8 };
  }

  function renderProjects() {
    $("[data-project-spotlights]").innerHTML = projectSpotlightSpecs.map((spotlight) => {
      const collaboration = collaborations.find((item) => item.title === spotlight.collaborationTitle) || collaborations[0];
      return `
        <article class="project-spotlight reveal">
          <img src="${escapeHtml(spotlight.image)}" width="1000" height="625" alt="" loading="lazy">
          <div>
            <div class="chips"><span class="chip">${escapeHtml(collaboration.status)}</span></div>
            <h3>${escapeHtml(spotlight.title)}</h3>
            <p>${escapeHtml(collaboration.text)}</p>
            <p><strong>Outcome:</strong> ${escapeHtml(spotlight.outcome)}</p>
            <p><strong>Partners:</strong> ${escapeHtml(collaboration.partners)}</p>
          </div>
        </article>
      `;
    }).join("");

    const spotlightTitles = new Set(projectSpotlightSpecs.map((spotlight) => spotlight.collaborationTitle));
    const remainingCollaborations = collaborations.filter((item) => !spotlightTitles.has(item.title));
    $("[data-collaborations]").innerHTML = remainingCollaborations.map((item) => `
      <article class="collab-card reveal">
        <div class="chips"><span class="chip">${escapeHtml(item.status)}</span></div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
        <p><strong>Partners:</strong> ${escapeHtml(item.partners)}</p>
      </article>
    `).join("");

    const projects = (projectData.projects || []).filter((project) => project.live).slice(0, 6);
    $("[data-projects]").innerHTML = projects.map((project) => `
      <article class="project-card reveal">
        <div class="chips">${(project.tags || []).slice(0, 3).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}</div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <a href="${escapeHtml(project.live)}">View project</a>
      </article>
    `).join("");
  }

  function renderGrants() {
    const portfolio = siteData.grantPortfolio || {};
    $("[data-grant-summary]").innerHTML = [
      { value: `$${formatNumber(portfolio.fundedTotal || 0)}`, label: "Funded total" },
      { value: String(portfolio.fundedCount || 0), label: "Funded awards" },
      { value: `$${formatNumber(portfolio.pendingTotal || 0)}`, label: "Pending total" },
      { value: String(portfolio.pendingCount || 0), label: "Pending proposals" }
    ].map((item) => statCell(item.value, item.label)).join("");

    const funded = siteData.grants?.funded || [];
    const pending = siteData.grants?.pending || [];
    $("[data-grants]").innerHTML = `
      ${grantColumn("Funded", funded.slice(0, 6))}
      ${grantColumn("Pending", pending.slice(0, 5))}
    `;
  }

  function grantColumn(title, grants) {
    return `
      <div class="grant-column">
        <h3>${escapeHtml(title)}</h3>
        ${grants.map((grant) => `
          <article class="grant-card">
            <h3>${escapeHtml(grant.title)}</h3>
            <p>${escapeHtml(grant.meta)}</p>
            <span class="amount">${escapeHtml(grant.amount)}</span>
          </article>
        `).join("")}
      </div>
    `;
  }

  function setupNavigation() {
    const header = $("[data-header]");
    const nav = $(".site-nav");
    const toggle = $(".nav-toggle");
    const links = $$(".site-nav a");
    const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    });

    links.forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }));

    window.addEventListener("scroll", () => {
      header.classList.toggle("is-condensed", window.scrollY > 32);
    }, { passive: true });

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 });

    sections.forEach((section) => navObserver.observe(section));
  }

  function setupTheme() {
    const stored = localStorage.getItem("addie-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.dataset.theme = stored || preferred;
    $("[data-theme-toggle]").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("addie-theme", next);
    });
  }

  function setupReveals() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      $$(".reveal").forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.16 });
    $$(".reveal").forEach((node) => observer.observe(node));
  }

  function setupCounters() {
    const counters = $$("[data-counter]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const raw = node.dataset.counter;
        const numeric = Number(String(raw).replace(/[^0-9]/g, ""));
        if (!numeric || raw.includes("$")) {
          node.textContent = raw;
          observer.unobserve(node);
          return;
        }
        const start = performance.now();
        const duration = 900;
        function tick(now) {
          const t = Math.min(1, (now - start) / duration);
          node.textContent = String(Math.round(numeric * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(node);
      });
    }, { threshold: 0.8 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function setupContactForm() {
    $("[data-contact-form]").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const subject = encodeURIComponent(`AdDIE Lab inquiry from ${data.get("name")}`);
      const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
      window.location.href = `mailto:jmoon19@ua.edu?subject=${subject}&body=${body}`;
    });
  }

  function setupBackToTop() {
    const button = $("[data-back-to-top]");
    if (!button) return;
    window.addEventListener("scroll", () => {
      button.classList.toggle("is-visible", window.scrollY > 720);
    }, { passive: true });
    button.addEventListener("click", () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  function setupHeroNetwork() {
    const canvas = $("[data-hero-network]");
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = ["#9e1b32", "#c93951", "#b6812d", "#2b8c87", "#f3d698"];
    const pointer = { x: 0, y: 0 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let frameId = 0;
    let active = true;
    let last = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
      draw(0, true);
    }

    function createParticles() {
      const isMobile = width < 720;
      const count = reduceMotion ? (isMobile ? 34 : 54) : (isMobile ? 46 : 82);
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.86 + 0.14,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.08,
        vz: (Math.random() - 0.5) * 0.0016,
        r: Math.random() * 1.8 + 0.8,
        color: palette[index % palette.length]
      }));
    }

    function projected(particle) {
      const depth = 0.48 + particle.z * 0.82;
      const parallaxX = pointer.x * (particle.z - 0.5) * 18;
      const parallaxY = pointer.y * (particle.z - 0.5) * 12;
      return {
        x: (particle.x - width / 2) * depth + width / 2 + parallaxX,
        y: (particle.y - height / 2) * depth + height / 2 + parallaxY,
        r: particle.r * (0.72 + particle.z * 1.35),
        alpha: 0.22 + particle.z * 0.62
      };
    }

    function step(delta) {
      particles.forEach((particle) => {
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.z += particle.vz * delta;

        if (particle.x < -40) particle.x = width + 40;
        if (particle.x > width + 40) particle.x = -40;
        if (particle.y < -40) particle.y = height + 40;
        if (particle.y > height + 40) particle.y = -40;
        if (particle.z < 0.12 || particle.z > 1) particle.vz *= -1;
      });
    }

    function draw(now, staticFrame = false) {
      const delta = Math.min(34, now - last || 16);
      last = now;
      if (!staticFrame && !reduceMotion) step(delta);

      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(width * 0.52, height * 0.42, 0, width * 0.52, height * 0.42, Math.max(width, height) * 0.62);
      gradient.addColorStop(0, "rgba(255, 246, 220, 0.1)");
      gradient.addColorStop(0.42, "rgba(158, 27, 50, 0.08)");
      gradient.addColorStop(1, "rgba(4, 5, 10, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const points = particles.map(projected);
      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const a = points[i];
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          const threshold = width < 720 ? 118 : 156;
          if (distance > threshold) continue;
          const alpha = (1 - distance / threshold) * Math.min(a.alpha, b.alpha) * 0.35;
          ctx.strokeStyle = `rgba(246, 217, 160, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      points.forEach((point, index) => {
        const particle = particles[index];
        ctx.fillStyle = hexToRgba(particle.color, point.alpha);
        ctx.shadowBlur = 16 * particle.z;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      if (active && !reduceMotion && !staticFrame) {
        frameId = requestAnimationFrame(draw);
      }
    }

    function play() {
      if (reduceMotion || frameId || !active) return;
      last = performance.now();
      frameId = requestAnimationFrame(draw);
    }

    function pause() {
      if (!frameId) return;
      cancelAnimationFrame(frameId);
      frameId = 0;
    }

    window.addEventListener("resize", debounce(resize, 180));
    window.addEventListener("pointermove", (event) => {
      pointer.x = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      pointer.y = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      active = document.visibilityState === "visible";
      if (active) play();
      else pause();
    });

    const observer = new IntersectionObserver((entries) => {
      active = entries.some((entry) => entry.isIntersecting) && document.visibilityState === "visible";
      if (active) play();
      else pause();
    }, { threshold: 0.02 });
    observer.observe(canvas);

    resize();
    if (reduceMotion) draw(0, true);
    else play();
  }

  function drawConstellation() {
    if (!window.d3) {
      $("#constellation-viz").outerHTML = "<p class='form-note'>Network visualization loads when D3 is available.</p>";
      return;
    }
    const svg = d3.select("#constellation-viz");
    const shell = $(".viz-shell");
    const isMobile = window.matchMedia("(max-width: 760px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const width = Math.max(shell.clientWidth, isMobile ? 760 : 720);
    const height = isMobile ? 560 : 620;
    svg.attr("viewBox", `0 0 ${width} ${height}`).attr("width", width).attr("height", height);

    const topicCounts = new Map();
    (siteData.publications || []).forEach((pub) => {
      (pub.tags || []).forEach((tag) => topicCounts.set(tag, (topicCounts.get(tag) || 0) + 1));
    });

    const themeNodes = [
      { id: "Immersive learning", label: "Immersive learning", type: "theme", r: 17, tags: ["XR", "Game-Based"] },
      { id: "Learning analytics", label: "Learning analytics", type: "theme", r: 17, tags: ["Analytics"] },
      { id: "Inclusive design", label: "Inclusive design", type: "theme", r: 17, tags: ["Review"] },
      { id: "GenAI learning", label: "GenAI learning", type: "theme", r: 17, tags: ["GenAI", "Teacher Ed"] },
      { id: "STEM education", label: "STEM education", type: "theme", r: 17, tags: ["STEM"] }
    ];
    const personNodes = people.flatMap((group) => group.items).map((person) => ({
      id: person.name,
      label: shortPersonLabel(person.name),
      type: "person",
      r: person.avatar ? 13 : 10,
      chips: cleanChips(person.chips)
    }));
    const outputNodes = Array.from(topicCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 9)
      .map(([tag, count]) => ({ id: `Output: ${tag}`, label: tag, type: "output", r: 7 + Math.min(count, 20) / 2, count }));
    const nodes = [
      { id: "AdDIE Lab", label: "AdDIE Lab", type: "hub", r: 26 },
      ...themeNodes,
      ...personNodes,
      ...outputNodes
    ];
    const links = themeNodes.map((node) => ({ source: "AdDIE Lab", target: node.id, strength: 0.9 }));
    const themeByTag = new Map(themeNodes.flatMap((theme) => theme.tags.map((tag) => [tag, theme.id])));
    personNodes.forEach((person, index) => {
      const matchedThemes = person.chips.map((chip) => themeByTag.get(chip)).filter(Boolean);
      const targets = matchedThemes.length ? Array.from(new Set(matchedThemes)) : [themeNodes[index % themeNodes.length].id];
      targets.forEach((target) => links.push({ source: person.id, target, strength: 0.42 }));
    });
    outputNodes.forEach((output, index) => {
      links.push({ source: output.id, target: themeByTag.get(output.label) || themeNodes[index % themeNodes.length].id, strength: 0.55 });
      links.push({ source: "AdDIE Lab", target: output.id, strength: 0.18 });
    });
    personNodes.slice(0, 5).forEach((person, index) => {
      links.push({ source: person.id, target: outputNodes[index % outputNodes.length].id, strength: 0.2 });
    });

    const color = { hub: "#111014", theme: "#9e1b32", person: "#2b8c87", output: "#b6812d" };
    svg.selectAll("*").remove();

    const link = svg.append("g")
      .attr("class", "constellation-links")
      .selectAll("line")
      .data(links)
      .join("line");

    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    node.append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => color[d.type])
      .attr("fill-opacity", 0.92);

    node.append("text")
      .attr("class", "constellation-label")
      .attr("x", (d) => d.r + 8)
      .attr("y", 4)
      .text((d) => d.label);

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d) => d.id).distance((d) => d.source.id === "AdDIE Lab" ? 130 : 92).strength((d) => d.strength || 0.3))
      .force("charge", d3.forceManyBody().strength((d) => d.type === "hub" ? -520 : -260))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX((d) => d.type === "person" ? width * 0.72 : d.type === "output" ? width * 0.28 : width * 0.5).strength(0.035))
      .force("y", d3.forceY(height / 2).strength(0.045))
      .force("collision", d3.forceCollide().radius((d) => d.r + (d.type === "person" ? 54 : d.type === "theme" ? 56 : 42)));

    function ticked() {
      link
        .attr("x1", (d) => clamp(d.source.x, 30, width - 30))
        .attr("y1", (d) => clamp(d.source.y, 58, height - 58))
        .attr("x2", (d) => clamp(d.target.x, 30, width - 30))
        .attr("y2", (d) => clamp(d.target.y, 58, height - 58));
      node.attr("transform", (d) => `translate(${clamp(d.x, 34, width - 230)},${clamp(d.y, 58, height - 58)})`);
    }

    if (reduceMotion) {
      simulation.stop();
      for (let i = 0; i < 180; i += 1) simulation.tick();
      ticked();
    } else {
      simulation.on("tick", ticked);
    }
  }

  // Auto-sync paper records (publications, working papers, grants, stats) from the
  // personal CV site's live data file. Same origin (educatian.github.io), so no CORS
  // concern; the bundled assets/data/cv-site-data.js snapshot is the offline fallback.
  // Whenever the CV site regenerates its data, this site reflects it on next load.
  const CV_DATA_URL = "https://educatian.github.io/cv/assets/site-data.generated.json";
  const SCHOLAR_ANALYTICS_URL = "https://educatian.github.io/cv/assets/research-analytics-scholar.json";
  const SYNC_KEYS = [
    "publications",
    "completeJournalArticles",
    "workingPapers",
    "workingPaperSummary",
    "grants",
    "grantPortfolio",
    "stats",
    "talks",
    "news",
    "honors"
  ];

  async function syncPaperRecords() {
    if (!window.fetch || location.protocol === "file:") return;
    try {
      const res = await fetch(CV_DATA_URL, { cache: "no-cache" });
      if (!res.ok) return;
      const fresh = await res.json();
      if (!fresh || typeof fresh !== "object") return;
      let changed = false;
      SYNC_KEYS.forEach((key) => {
        if (fresh[key] != null) {
          siteData[key] = fresh[key];
          changed = true;
        }
      });
      if (!changed) return;
      // Re-render only the record-driven sections; lab-specific content stays put.
      renderStats();
      renderAdvisingImpact();
      renderPublicationFilters();
      renderPublications();
      renderTalks();
      renderNewsAndHonors();
      renderResearchImpact();
      renderGrants();
      drawConstellation();
    } catch (err) {
      // Offline, blocked, or CV data unavailable: keep the bundled snapshot silently.
    }
  }

  async function syncScholarAnalytics() {
    renderResearchImpact();
    if (!window.fetch || location.protocol === "file:") return;
    try {
      const res = await fetch(SCHOLAR_ANALYTICS_URL, { cache: "no-cache" });
      if (!res.ok) return;
      const fresh = await res.json();
      if (!fresh || typeof fresh !== "object") return;
      scholarAnalytics = {
        ...scholarFallback,
        ...fresh,
        profileUrl: verifiedLinks.scholar,
        summary: { ...scholarFallback.summary, ...(fresh.summary || {}) },
        annualCitations: Array.isArray(fresh.annualCitations) ? fresh.annualCitations : scholarFallback.annualCitations
      };
      renderResearchImpact();
    } catch {
      scholarAnalytics = scholarFallback;
      renderResearchImpact();
    }
  }

  function init() {
    renderStats();
    renderResearch();
    renderResearchImpact();
    renderPeople();
    renderAdvisingImpact();
    renderPublicationFilters();
    renderPublications();
    renderTalks();
    renderProjects();
    renderGlobalCollaborations();
    renderGrants();
    renderOpenScience();
    renderNewsAndHonors();
    setupTheme();
    setupNavigation();
    setupReveals();
    setupCounters();
    setupHeroNetwork();
    setupContactForm();
    setupBackToTop();
    drawConstellation();
    window.addEventListener("resize", debounce(drawConstellation, 220));
    window.addEventListener("resize", debounce(drawGlobalMap, 220));
    syncPaperRecords();
    syncScholarAnalytics();
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value || 0));
  }

  function hexToRgba(hex, alpha) {
    const normalized = String(hex || "#ffffff").replace("#", "");
    const value = Number.parseInt(normalized.length === 3 ? normalized.replace(/(.)/g, "$1$1") : normalized, 16);
    const r = (value >> 16) & 255;
    const g = (value >> 8) & 255;
    const b = value & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function shortPersonLabel(name) {
    const cleaned = String(name || "")
      .replace(/^Dr\.\s*/i, "")
      .replace(/"([^"]+)"/g, "$1")
      .trim();
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length <= 2) return cleaned;
    return `${parts[0]} ${parts[parts.length - 1]}`;
  }

  function debounce(fn, wait) {
    let id;
    return (...args) => {
      clearTimeout(id);
      id = setTimeout(() => fn(...args), wait);
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
