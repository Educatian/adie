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

  const people = [
    {
      group: "Director",
      items: [
        {
          name: "Dr. Jewoong Moon",
          role: "Director, Assistant Professor of Instructional Technology",
          avatar: "assets/img/moon-headshot.jpg",
          chips: ["Director", "Learning Analytics", "XR", "GenAI"],
          bio: "Studies digital game-based learning, inclusive immersive learning experience design, learning analytics, educational data mining, and adaptive learning systems."
        }
      ]
    },
    {
      group: "PhD Students",
      items: [
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
  let publicationsExpanded = false;

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

  function formatNumber(value) {
    return new Intl.NumberFormat("en-US").format(value);
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
    $("[data-people]").innerHTML = people.map((group) => `
      <section class="people-group reveal" aria-label="${escapeHtml(group.group)}">
        <div class="people-group-heading">
          <h3>${escapeHtml(group.group)}</h3>
          <span>${group.items.length} ${group.items.length === 1 ? "member" : "members"}</span>
        </div>
        <div class="people-grid">
          ${group.items.map((person) => personCard(person)).join("")}
        </div>
      </section>
    `).join("");
  }

  function renderAdvisingImpact() {
    const mountStats = $("[data-advising-stats]");
    const mountChart = $("[data-advising-chart]");
    const mountEmerging = $("[data-advising-emerging]");
    if (!mountStats || !mountChart || !mountEmerging) return;

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

    mountEmerging.innerHTML = `
      <div>
        <h3>Emerging contributors</h3>
        <p>Newest advisees are entering the lab's mentorship pipeline through project scoping, methods apprenticeship, and early design research roles.</p>
      </div>
      <div class="emerging-list">
        ${metrics.emergingStudents.map((student) => `
          <span class="emerging-chip">
            <img src="${escapeHtml(student.avatar)}" width="68" height="68" alt="" loading="lazy" aria-hidden="true">
            ${escapeHtml(student.name)}
          </span>
        `).join("")}
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
    return people.find((group) => group.group === "PhD Students")?.items || [];
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
    $("[data-publication-filters]").innerHTML = publicationTags.map((tag) => `
      <button class="filter-button ${tag === activePublicationTag ? "is-active" : ""}" type="button" data-tag="${escapeHtml(tag)}">
        <span>${escapeHtml(tag)}</span>
        <em>${tag === "All" ? allPublications.length : allPublications.filter((pub) => (pub.tags || []).includes(tag)).length}</em>
      </button>
    `).join("");
    $$("[data-tag]").forEach((button) => {
      button.addEventListener("click", () => {
        activePublicationTag = button.dataset.tag;
        publicationsExpanded = false;
        renderPublicationFilters();
        renderPublications();
      });
    });
  }

  function filteredPublications() {
    const publications = siteData.publications || [];
    if (activePublicationTag === "All") return publications;
    return publications.filter((pub) => (pub.tags || []).includes(activePublicationTag));
  }

  function renderPublications() {
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
        ${link ? `<a class="publication-link" href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">DOI / link</a>` : ""}
      </article>
    `;
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

  function renderProjects() {
    $("[data-collaborations]").innerHTML = collaborations.map((item) => `
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
  const SYNC_KEYS = [
    "publications",
    "completeJournalArticles",
    "workingPapers",
    "workingPaperSummary",
    "grants",
    "grantPortfolio",
    "stats",
    "talks"
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
      renderGrants();
      drawConstellation();
    } catch (err) {
      // Offline, blocked, or CV data unavailable: keep the bundled snapshot silently.
    }
  }

  function init() {
    renderStats();
    renderResearch();
    renderPeople();
    renderAdvisingImpact();
    renderPublicationFilters();
    renderPublications();
    renderProjects();
    renderGrants();
    setupTheme();
    setupNavigation();
    setupReveals();
    setupCounters();
    setupHeroNetwork();
    setupContactForm();
    setupBackToTop();
    drawConstellation();
    window.addEventListener("resize", debounce(drawConstellation, 220));
    syncPaperRecords();
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
    return () => {
      clearTimeout(id);
      id = setTimeout(fn, wait);
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
