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
          role: "Lab Manager, PhD Instructional Technology",
          chips: ["Lab Manager", "E-learning", "AI"],
          bio: "Researches e-learning, AI in learning, and instructional design. MEd Educational Technology, Federal University of Technology, Minna, Nigeria."
        },
        {
          name: "Arezoo Ghooreian",
          role: "Graduate Research Assistant, PhD",
          chips: ["GRA", "AI", "Computational Thinking"],
          bio: "Works on instructional technology, AI in education, and game-making for computational thinking. MA ESL, Azad University, Iran."
        },
        {
          name: "Stephen Abu",
          role: "PhD Instructional Technology",
          chips: ["VR Simulation", "XR", "GenAI"],
          bio: "Studies VR simulation, extended reality, gamification, generative AI, and online learning."
        },
        {
          name: "Moses Oladele Ogunniran",
          role: "PhD Higher Education Administration, GRA",
          chips: ["GRA", "Access", "Student Success"],
          bio: "Focuses on postsecondary access, student success, graduate employability, and career-readiness interventions."
        },
        {
          name: "Empress Searight",
          role: "PhD Instructional Technology",
          chips: ["Gamification", "AR", "STEM"],
          bio: "Researches gamification, game-based learning, and AR for STEM. Background in graphic design and instructional technology."
        },
        {
          name: 'Mohammad "Mohi" Uddin',
          role: "PhD Instructional Technology; Graduate Senator & Ambassador",
          chips: ["AI", "Learning Theory", "Neurodiversity"],
          bio: "Studies AI in education, learning theories, teacher professional development, and neurodiversity in education. Author of 15+ published articles."
        },
        {
          name: "Jihane Amayou",
          role: "PhD Curriculum & Instruction",
          chips: ["Emerging Tech", "Digital Literacies", "AI"],
          bio: "Studies emerging technologies in education, student engagement, digital literacies, and AI in learning. MA Educational Technology, Bahcesehir University."
        }
      ]
    },
    {
      group: "MA Students",
      items: [
        {
          name: "Mina Tran",
          role: "Research & Teaching Assistant, MA TESOL/Applied Linguistics",
          chips: ["TESOL", "GenAI Agents", "Teacher Training"],
          bio: "Works on AI-driven learning environments and generative agents in teacher training."
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

  const labMemberNames = ["Awoyemi", "Abu", "Uddin", "Ghooreian", "Tran", "Amayou", "Searight", "Ogunniran"];
  const publicationTags = ["All", "XR", "GenAI", "Analytics", "Game-Based", "STEM", "Teacher Ed", "Review"];
  const avatarTiles = [
    "assets/img/avatar-tile-1.png",
    "assets/img/avatar-tile-2.png",
    "assets/img/avatar-tile-3.png",
    "assets/img/avatar-tile-4.png"
  ];
  let activePublicationTag = "All";

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
    const stats = siteData.stats || [];
    const researchMentees = (siteData.mentoringMetrics || []).find((item) => item.label.includes("research mentees"));
    const cells = [
      { value: stats[0]?.value || "59", label: stats[0]?.label || "Journal articles" },
      { value: `$${formatNumber(siteData.grantPortfolio?.fundedTotal || 107459)}`, label: "Funded research support" },
      { value: researchMentees?.value || "10", label: "Research mentees" },
      { value: "4", label: "Collaboration tracks" }
    ];
    $("[data-stats-band]").innerHTML = cells.map((item) => statCell(item.value, item.label)).join("");
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
    let tileCursor = 0;
    $("[data-people]").innerHTML = people.map((group) => `
      <section class="people-group reveal" aria-label="${escapeHtml(group.group)}">
        <div class="people-group-heading">
          <h3>${escapeHtml(group.group)}</h3>
          <span>${group.items.length} ${group.items.length === 1 ? "member" : "members"}</span>
        </div>
        <div class="people-grid">
          ${group.items.map((person) => {
            const tileIndex = person.avatar ? 0 : tileCursor++;
            return personCard(person, tileIndex);
          }).join("")}
        </div>
      </section>
    `).join("");
  }

  function personCard(person, tileIndex) {
    const chips = cleanChips(person.chips);
    return `
      <article class="person-card">
        ${personAvatar(person, tileIndex)}
        <div class="person-card-body">
          <h4>${escapeHtml(person.name)}</h4>
          <p class="person-role">${escapeHtml(person.role)}</p>
          <div class="chips">${chips.map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join("")}</div>
          <p>${escapeHtml(person.bio)}</p>
        </div>
      </article>
    `;
  }

  function personAvatar(person, tileIndex) {
    if (person.avatar) {
      return `
        <div class="person-avatar is-photo">
          <img src="${escapeHtml(person.avatar)}" width="240" height="240" alt="Portrait of ${escapeHtml(person.name)}" loading="lazy">
        </div>
      `;
    }
    const tile = avatarTiles[tileIndex % avatarTiles.length];
    return `
      <div class="person-avatar is-monogram" style="--avatar-image: url('${escapeHtml(tile)}')">
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
    $("[data-featured-publications]").innerHTML = featured.map((pub) => publicationCard(pub)).join("");
    $("[data-publication-list]").innerHTML = publications.map((pub) => `
      <article class="publication-row">
        <strong>${escapeHtml(pub.year)}</strong>
        <div>
          <h3>${escapeHtml(pub.title)}</h3>
          <p>${escapeHtml(pub.authors)}</p>
          <p>${escapeHtml(pub.venue)}${pub.status ? ` · ${escapeHtml(pub.status)}` : ""}</p>
        </div>
        <div class="chips">${(pub.tags || []).slice(0, 3).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}</div>
      </article>
    `).join("");
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

  function init() {
    renderStats();
    renderResearch();
    renderPeople();
    renderPublicationFilters();
    renderPublications();
    renderProjects();
    renderGrants();
    setupTheme();
    setupNavigation();
    setupReveals();
    setupCounters();
    setupContactForm();
    setupBackToTop();
    drawConstellation();
    window.addEventListener("resize", debounce(drawConstellation, 220));
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value || 0));
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
