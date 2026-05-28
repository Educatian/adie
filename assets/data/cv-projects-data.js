window.__cvProjects = {
  "categories": [
    {
      "id": "agents",
      "label": "AI agents & adaptive systems",
      "summary": "Tutors, advisors, and conversational interfaces built for graduate-level instruction and research support."
    },
    {
      "id": "immersive-analytics",
      "label": "Immersive & analytics prototypes",
      "summary": "VR research prototypes, interactive visualizations, and discourse / video analytics pipelines."
    },
    {
      "id": "ethics-infra",
      "label": "AI ethics & teaching infrastructure",
      "summary": "Open guides, fine-tuning recipes, and instructional surfaces for safe AI use in higher education."
    }
  ],
  "projects": [
    {
      "name": "thecrimsonthread",
      "title": "The Crimson Thread",
      "category": "agents",
      "language": "TypeScript",
      "summary": "PhD program planner: Gemini-generated milestone timelines, Gantt chart view, ICS calendar export, and history persistence. Designed for Instructional Leadership doctoral students at the University of Alabama.",
      "tags": ["PhD planning", "Gantt", "Gemini", "ICS export"],
      "repo": "https://github.com/Educatian/thecrimsonthread",
      "live": "https://thecrimsonthread.vercel.app",
      "thumb": "assets/img/projects/thecrimsonthread.png"
    },
    {
      "name": "ThinkMethod",
      "title": "ThinkMethod",
      "category": "agents",
      "language": "TypeScript",
      "summary": "AI-powered research design and methodology advisor: interrogates a draft research question, then recommends data, design, measurement, and validity strategies.",
      "tags": ["methodology", "research design", "agent"],
      "repo": "https://github.com/Educatian/ThinkMethod",
      "live": ""
    },
    {
      "name": "bamatext",
      "title": "BamaText — Adaptive Physics Textbook",
      "category": "agents",
      "language": "TypeScript",
      "summary": "Adaptive Physics textbook that retunes to each learner in real time: mastery tracking, interactive simulations, and a Socratic AI tutor that probes reasoning rather than handing out answers. React + Vite + Supabase + Google Gemini.",
      "tags": ["adaptive learning", "Physics", "Socratic AI tutor"],
      "repo": "https://github.com/Educatian/bamatext",
      "live": ""
    },
    {
      "name": "BamaTide",
      "title": "UA Game Design Microcredential",
      "category": "agents",
      "language": "TypeScript",
      "summary": "MOOC-style platform for the University of Alabama Educational Game Design microcredential program. Lesson sequencing, evidence submission editor, certificate issuance, discussion board, and a Gemini-powered course tutor scoped per view.",
      "tags": ["microcredential", "MOOC", "game design", "Gemini tutor"],
      "repo": "https://github.com/Educatian/BamaTide",
      "live": ""
    },
    {
      "name": "ETHOBOT_ENG",
      "title": "Ethobot — AI Ethics Education Chatbot",
      "category": "agents",
      "language": "JavaScript",
      "summary": "Firebase-backed AI ethics chatbot for graduate-level instruction. English deployment of the Ethobot research line (with 3.1 and 3.2 follow-ups), Express server with Firestore-stored conversations and Analytics instrumentation.",
      "tags": ["AI ethics", "chatbot", "Firebase"],
      "repo": "https://github.com/Educatian/ETHOBOT_ENG",
      "live": "https://educatian.github.io/ETHOBOT_ENG/",
      "thumb": "assets/img/projects/ethobot-eng.png"
    },
    {
      "name": "TINA1.01",
      "title": "TINA — Teacher Identity Navigation Assistant",
      "category": "agents",
      "language": "TypeScript",
      "summary": "Conversational assistant that walks pre-service and in-service teachers through reflective prompts on professional identity formation, with voice input, Hugging Face inference fallback, and PDF/DOCX export of the reflection record.",
      "tags": ["teacher identity", "reflection", "voice + LLM"],
      "repo": "https://github.com/Educatian/TINA1.01",
      "live": "https://tina-adie1.netlify.app",
      "thumb": "assets/img/projects/tina.png"
    },
    {
      "name": "virtual-makerspace",
      "title": "Virtual Makerspace",
      "category": "immersive-analytics",
      "language": "TypeScript",
      "summary": "VR research prototype built on the Meta Immersive Web SDK. Captures learning-behavior telemetry in a maker setting for downstream multimodal learning analytics.",
      "tags": ["VR", "Meta IWSDK", "MMLA"],
      "repo": "https://github.com/Educatian/virtual-makerspace",
      "live": "https://virtual-makerspace.pages.dev",
      "thumb": "assets/img/projects/virtual-makerspace.png"
    },
    {
      "name": "discourse-lens",
      "title": "Discourse Lens",
      "category": "immersive-analytics",
      "language": "Python",
      "summary": "Cross-field discourse map of Learning Sciences vs Educational Technology journal abstracts (2015–2025). MPNet embeddings, BERTopic, LLM-tagged threads, bootstrap inference, sensitivity sweeps.",
      "tags": ["BERTopic", "MPNet", "bibliometrics"],
      "repo": "https://github.com/Educatian/discourse-lens",
      "live": "https://educatian.github.io/discourse-lens/",
      "thumb": "assets/img/projects/discourse-lens.png"
    },
    {
      "name": "learning-theories-timeline",
      "title": "Learning Theories Timeline",
      "category": "immersive-analytics",
      "language": "JavaScript",
      "summary": "Interactive D3 timeline of learning theories, instructional design, AIED, learning analytics, EDM, QE, VR, and agentic AI. Built for graduate seminar onboarding.",
      "tags": ["D3", "history of learning", "interactive viz"],
      "repo": "https://github.com/Educatian/learning-theories-timeline",
      "live": "https://educatian.github.io/learning-theories-timeline/",
      "thumb": "assets/img/projects/learning-theories-timeline.png"
    },
    {
      "name": "counseling-graph-cscl",
      "title": "Counseling-Graph CSCL",
      "category": "immersive-analytics",
      "language": "TypeScript",
      "summary": "Knowledge-graph CSCL tool (Korean) for counseling and clinical psychology training. Renders concept networks from coursework artifacts and supports collaborative annotation.",
      "tags": ["CSCL", "knowledge graph", "counseling ed"],
      "repo": "https://github.com/Educatian/counseling-graph-cscl",
      "live": "https://educatian.github.io/counseling-graph-cscl/",
      "thumb": "assets/img/projects/counseling-graph-cscl.png"
    },
    {
      "name": "videoanalysis",
      "title": "Multimodal Video Analysis Kit",
      "category": "immersive-analytics",
      "language": "Python",
      "summary": "Research kit for multimodal video analysis: timestamped pose/speech/affect features, exporters for downstream sequence and process-mining workflows.",
      "tags": ["multimodal", "pose", "MMLA"],
      "repo": "https://github.com/Educatian/videoanalysis",
      "live": ""
    },
    {
      "name": "ethicsedullm",
      "title": "Ethics-Ed LLM",
      "category": "ethics-infra",
      "language": "Python",
      "summary": "Small LLM fine-tuning recipe specialized for AI ethics in educational design. Includes evaluation prompts and refusal-style probes calibrated for graduate coursework.",
      "tags": ["LLM fine-tuning", "AI ethics"],
      "repo": "https://github.com/Educatian/ethicsedullm",
      "live": ""
    },
    {
      "name": "cybersentinel",
      "title": "CyberSentinel",
      "category": "ethics-infra",
      "language": "HTML",
      "summary": "Reachy Mini WiFi treated as a cybersecurity teaching surface. Module builder's guide for graduate-student instructional designers, with task scaffolds and reflection prompts.",
      "tags": ["Reachy Mini", "cybersecurity teaching", "ID guide"],
      "repo": "https://github.com/Educatian/cybersentinel",
      "live": "https://educatian.github.io/cybersentinel/",
      "thumb": "assets/img/projects/cybersentinel.png"
    },
    {
      "name": "research-assistant-ai-workflow-en",
      "title": "Research-Assistant AI Workflow",
      "category": "ethics-infra",
      "language": "HTML",
      "summary": "Obsidian × Claude Code 7-day setup guide for PhDs and researchers. Daily lessons, code snippets, and reproducible folder layouts for an AI-augmented research stack.",
      "tags": ["Obsidian", "Claude Code", "research workflow"],
      "repo": "https://github.com/Educatian/research-assistant-ai-workflow-en",
      "live": "https://educatian.github.io/research-assistant-ai-workflow-en/",
      "thumb": "assets/img/projects/research-assistant-ai-workflow-en.png"
    },
    {
      "name": "educatian.github.io",
      "title": "Educatian — Open Guides",
      "category": "ethics-infra",
      "language": "HTML",
      "summary": "Hub of self-contained guides covering education data × analysis matrix, RQ fit, LAK vs EDM, telemetry design, agentic XR workflow, ISD to LDT, and more. Each guide is a single static HTML page.",
      "tags": ["open guides", "hub", "research methods"],
      "repo": "https://github.com/Educatian/educatian.github.io",
      "live": "https://educatian.github.io/",
      "thumb": "assets/img/projects/educatian-hub.png"
    },
    {
      "name": "Swarm_ID",
      "title": "Design Tension Studio",
      "category": "immersive-analytics",
      "language": "JavaScript",
      "summary": "Instructional-design studio that turns design tension into a living network. Maps human judgment, institutional friction, and AI reasoning across policy, platform, evidence, and scale on one responsive D3 force graph.",
      "tags": ["D3 network", "design tensions", "ID studio"],
      "repo": "https://github.com/Educatian/Swarm_ID",
      "live": "https://swarmid.vercel.app",
      "thumb": "assets/img/projects/swarm-id.png"
    },
    {
      "name": "aiedobservatory",
      "title": "AI Education Policy Observatory",
      "category": "ethics-infra",
      "language": "HTML",
      "summary": "Independent policy-surveillance workspace making AI-in-education policy legible: state-by-state guidance on AI use, assessment, privacy, and implementation, traced back to source documents. 51 states and 248+ documents tracked.",
      "tags": ["AI policy", "policy atlas", "K-12 + HE"],
      "repo": "https://github.com/Educatian/aiedobservatory",
      "live": "https://aiedobservatory-five.vercel.app",
      "thumb": "assets/img/projects/aiedobservatory.png"
    },
    {
      "name": "fieldexplorer1.0",
      "title": "FieldExplorer",
      "category": "immersive-analytics",
      "language": "TypeScript",
      "summary": "Digital curator for the Learning Sciences: explore the academic field as a navigable research space rather than a flat list, linking journals, conferences, topics, and comparison metrics in one canvas. 64 journals, 23 conferences, 18 categories.",
      "tags": ["field map", "Learning Sciences", "research network"],
      "repo": "https://github.com/Educatian/fieldexplorer1.0",
      "live": "https://fieldexplorer10.vercel.app",
      "thumb": "assets/img/projects/fieldexplorer.png"
    },
    {
      "name": "code-defense-lab-mvp",
      "title": "Code Defense Lab",
      "category": "ethics-infra",
      "language": "JavaScript",
      "summary": "Academic-integrity surface for the AI era: 'AI use is allowed, understanding is required.' Six short checkpoints help students defend the code they submit even when AI helped write it, with professor and student workspaces and a results view.",
      "tags": ["academic integrity", "AI use", "CS education"],
      "repo": "https://github.com/Educatian/code-defense-lab-mvp",
      "live": "https://educatian.github.io/code-defense-lab-mvp/",
      "thumb": "assets/img/projects/code-defense-lab.png"
    },
    {
      "name": "peerpilot-mvp",
      "title": "PeerPilot",
      "category": "agents",
      "language": "JavaScript",
      "summary": "Peer-review training ground for graduate researchers. Read a manuscript, write a structured review, and compare with experts; Reviewer Mode and Author Mode rehearse both sides of editorial critique, with an instructor portal.",
      "tags": ["peer review", "researcher training", "blind review"],
      "repo": "https://github.com/Educatian/peerpilot-mvp",
      "live": "https://educatian.github.io/peerpilot-mvp/",
      "thumb": "assets/img/projects/peerpilot.png"
    },
    {
      "name": "datasandbox-toolkit",
      "title": "DataSandbox Toolkit",
      "category": "immersive-analytics",
      "language": "TypeScript",
      "summary": "Build a dashboard, build data literacy. Nine scaffolded activities take graduate students from framing an answerable data question to a live Vega-Lite workbench and an AI stakeholder critic, authored over real data the whole way (TAMU EHRD 689).",
      "tags": ["data literacy", "Vega-Lite", "dashboard authoring"],
      "repo": "https://github.com/Educatian/datasandbox3.1",
      "live": "https://datasandbox-toolkit.pages.dev",
      "thumb": "assets/img/projects/datasandbox-toolkit.png"
    }
  ]
};
