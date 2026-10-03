window.__featuredProjects = [
{
  "id": "cobot-lab",
  "title": "Cobot Lab: Embodied Engineering with an AI Coworker",
  "shortTitle": "Cobot Lab",
  "image": "cobotlab-bolt-20261003.webp",
  "imageAlt": "Actual Cobot Lab headset view: BOLT, a yellow collaborative robot, waves beside the parts bench and conveyor in the arm-repair bay.",
  "audience": "First- and second-year mechanical engineering undergraduates",
  "role": "Principal investigator, learning design, and Unity XR development",
  "status": "Unity XR development build · Meta Quest",
  "researchArea": "Embodied learning · Human–AI collaboration · Engineering mechanics",
  "outcome": "Students feel stiffness, damping, speed, acceleration and load with their hands before they predict, test and explain.",
  "summary": "A Job Simulator–style VR factory where engineering students work beside BOLT, a rookie collaborative robot whose models are often wrong. Across three bays they repair BOLT's spring–damper arm, tune an eddy-current can cannon, and teach and carry with the robot — feeling the physics with their hands before they predict, test and explain.",
  "details": [
    "Embodiment comes first: a feel rig loads BOLT's actual spring, shock and mass so stiffness pushes back, damping drags and mass lags; a damper pump makes F = c·v felt; students wind their own spring (k = Gd⁴/8D³n), torque the elbow pin, crank the rotor whose eddy-current brake grows with speed, and teach BOLT to carry coffee — jerky demonstrations slosh (tan θ = a/g) and BOLT copies the spill. Controller pseudo-haptics (glove offset plus vibration) carry weight and resistance.",
    "Students predict by sketching the expected motion x(t) in the air; the real response is drawn over their sketch. BOLT states its assumptions and gets corrected, so learners sense, judge and lead while the AI computes and copies. Bets, sketches, explanations and goggles use are logged for evidence-centered assessment. Built in Unity 6 with XR Interaction Toolkit; an autopilot plays the full shift for verification, and headset playtesting is the next step."
  ],
  "live": "",
  "repo": "",
  "trailer": "assets/video/cobotlab-trailer.mp4",
  "imageCaption": "Actual headset-camera capture · Bay 1 · Arm repair",
  "gallery": [
    {
      "image": "cobotlab-feel-rig-20261003.webp",
      "label": "Feel rig",
      "alt": "Actual Cobot Lab capture: the student's glove pulls the feel-rig handle down against BOLT's spring and damper on the assembly bench.",
      "caption": "Feel rig · spring, damper and mass in your hand"
    },
    {
      "image": "cobotlab-sketch-20261003.webp",
      "label": "Predict by sketching",
      "alt": "Actual Cobot Lab capture: the prediction pad shows the student's sketched arm motion with the measured response drawn over it in teal.",
      "caption": "Gesture prediction · sketch vs. actual response"
    },
    {
      "image": "cobotlab-crank-20261003.webp",
      "label": "Your hand is the rotor",
      "alt": "Actual Cobot Lab capture: the student cranks the red rotor wheel of the eddy-current can cannon while BOLT watches.",
      "caption": "Can cannon · crank speed sets the rotor"
    },
    {
      "image": "cobotlab-torque-20261003.webp",
      "label": "Torque the pin",
      "alt": "Actual Cobot Lab capture: a pin driver seated on BOLT's elbow after the student installs a custom spring and large shock.",
      "caption": "Rebuild · torque BOLT's elbow pin, then retest"
    }
  ],
  "current": true
},
{
  "id": "competent-person",
  "title": "Competent Person: Construction Safety Serious Game",
  "shortTitle": "Competent Person",
  "image": "competent-person-site-20261003.webp",
  "imageAlt": "Actual Competent Person gameplay: an Alabama lift-station jobsite at golden hour with a crane lifting steel, a crew, and a roof deck.",
  "audience": "Construction workers, supervisors and safety students learning the OSHA competent-person role",
  "role": "Principal investigator, serious-game design, and Unity development",
  "status": "Playable web edition · 5 episodes",
  "researchArea": "Workplace safety · Serious games · Evidence-centered design",
  "outcome": "Turns hazard recognition, risk rating, control choice, stop-work and speak-up into scored, inspectable evidence.",
  "summary": "Over one week on a municipal lift-station job in Alabama, the learner is the new OSHA competent person. Each day they walk a changing site, find hazards nobody has highlighted, rate the risk, choose and install controls, stop work when they must, hold the line when the foreman pushes back, and brief the crew for tomorrow.",
  "details": [
    "Every verb is evidence: photograph any surface (the tablet shows only a neutral name until you report), tag the energy source and rate probability × severity, measure with a laser, GFCI tester, penetrometer or dust monitor, then eliminate, engineer, assign or use PPE — weak controls lapse later in the shift. Radio stop-work leads to a speak-up exchange with the foreman, and the next day's toolbox talk asks learners to select, order and justify their findings.",
    "Five episodes on one evolving site add weather calls, heat strain, near-miss stop-downs, per-area mastery and a branching Friday capstone. Built in Unity 6 (URP) for the browser and desktop with Microsoft Rocketbox crew; play events leave the device only after research opt-in. A training record only — it does not issue an OSHA card or a competent-person designation."
  ],
  "live": "https://competent-person.pages.dev/",
  "repo": "https://github.com/Educatian/vr-safety-training",
  "imageCaption": "Actual gameplay capture · Episode 4 · Crane lift over the roof deck",
  "gallery": [
    {
      "image": "competent-person-hunt-20261003.webp",
      "label": "Hazard hunt",
      "alt": "Actual Competent Person gameplay: first-person hazard hunt beside a trench shoring box with the shift clock, points and site map.",
      "caption": "First-person hazard hunt · 3:00 on the clock"
    },
    {
      "image": "competent-person-roof-20261003.webp",
      "label": "Roof edge",
      "alt": "Actual Competent Person gameplay: a worker near an unprotected roof edge marked by red stakes on the jobsite deck.",
      "caption": "Episode 4 · roof-edge fall hazard"
    },
    {
      "image": "competent-person-deck-20261003.webp",
      "label": "Evolving site",
      "alt": "Actual Competent Person gameplay: overhead view of the roof deck, excavator and crew on day three.",
      "caption": "One site that changes across the week"
    }
  ],
  "current": true
},
{
  "id": "ethobot-vr",
  "title": "ETHOBOT VR",
  "shortTitle": "ETHOBOT VR",
  "image": "ethobot-vr-20260908.png",
  "imageAlt": "Actual ETHOBOT VR gameplay: meeting a harbor resident beside the waterfront in Harbor Echo.",
  "audience": "Learners exploring AI ethics through situated decision making",
  "role": "Research and immersive learning design",
  "status": "Playable development edition",
  "researchArea": "AI ethics · Immersive learning · Evidence-centered design",
  "outcome": "Connects exploration, stakeholder dialogue, source inspection, and justified revision.",
  "summary": "An immersive AI ethics game where learners investigate dilemmas, hear different perspectives, and revise decisions with evidence. Three playable episodes connect situated inquiry with a record of the learner’s reasoning.",
  "details": [
    "In Harbor Echo, learners explore a coastal town, meet its residents, and trace apparently independent robot claims back to their sources. The investigation makes evidence quality and accountability part of the action.",
    "Built in Unity with browser and Windows development editions alongside the VR project. Current browser play uses desktop controls; headset validation and empirical evaluation remain next steps."
  ],
  "live": "https://ethobot3d.pages.dev/",
  "repo": "",
  "imageCaption": "Actual gameplay · Harbor Echo · English development build",
  "gallery": [
    {
      "image": "ethobot-vr-interior-20260908.png",
      "label": "Inside Tide Cafe",
      "alt": "Actual Harbor Echo gameplay inside Tide Cafe, with the player and residents in a furnished interior.",
      "caption": "Actual browser gameplay · Tide Cafe interior"
    }
  ],
  "current": true
},
{
  "id": "campus-digital-twin",
  "title": "Common Ground: Campus Digital Twin",
  "shortTitle": "Campus Digital Twin",
  "image": "campus-map-20260908.png",
  "imageAlt": "Actual Common Ground gameplay showing the University of Alabama Quad, mapped paths, campus landmarks, and four investigation sites.",
  "audience": "University learners investigating spatial decisions and AI services",
  "role": "Research, game design, and interactive prototype development",
  "status": "Playable spatial-learning prototype",
  "researchArea": "Spatial learning · Digital twins · Situated AI ethics",
  "outcome": "Turns campus exploration into a cycle of finding clues, testing strategies, and explaining a choice.",
  "summary": "A campus digital-twin research project with a playable 3D prototype of the University of Alabama Quad. Big Al’s Campus Quest invites learners to explore buildings, compare route strategies, and reason about how design choices affect different visitors.",
  "details": [
    "The public prototype combines OpenStreetMap geometry, recognizable campus landmarks, character exploration, four investigation sites, and replayable choices. Learners collect clues, compare strategies, and record their reasons.",
    "Campus architecture is approximate. Visitor scenarios, access conditions, and outcomes are simulated for learning; the prototype is not an official campus navigation service."
  ],
  "live": "https://ethobot-common-ground.pages.dev/quest",
  "repo": "",
  "imageCaption": "Actual gameplay · UA Quad overview · OpenStreetMap-based geometry",
  "gallery": [
    {
      "image": "campus-explore-20260908.png",
      "label": "Explore with Big Al",
      "alt": "Actual Common Ground gameplay showing Big Al and a visitor beside Oliver-Barnard Hall.",
      "caption": "Actual gameplay · Big Al’s Campus Quest"
    }
  ],
  "current": true
},
{
  "id": "design-tension",
  "title": "Design Tension Studio",
  "shortTitle": "Design Tension Studio",
  "image": "design-tension-map-20260908.png",
  "imageAlt": "Actual English Design Tension Studio sample workspace with an interactive issue map and teacher, student, IT systems, and administrator perspectives.",
  "audience": "Instructional designers, educators, and graduate students",
  "role": "Research and learning experience design",
  "status": "Live bilingual design studio",
  "researchArea": "Instructional design · Perspective taking · Reflective practice",
  "outcome": "Makes competing priorities visible through issue maps, stakeholder lenses, and evidence-based reflection.",
  "summary": "An interactive studio for examining the competing values, constraints, and stakeholder priorities behind a learning design. Learners explore a case, compare teacher, student, IT, and administrator perspectives, then explain and revise their thinking.",
  "details": [
    "The current experience guides learners from a home workspace to an issue map and a reflection. A map-focused view, list companion, contextual guidance, and reflection coach support exploration without hiding the underlying design tensions.",
    "English and Korean editions share the same learning workflow. The public sample workspace uses demonstration data and resets on reload; screenshots show the sample, not student research records."
  ],
  "live": "https://swarm-id-en.pages.dev/",
  "repo": "https://github.com/Educatian/Swarm_ID",
  "imageCaption": "Actual English interface · Public sample data",
  "gallery": [],
  "current": true
},
{
  "id": "reboot-seoul-2050",
  "title": "Reboot Seoul 2050",
  "shortTitle": "Reboot Seoul 2050",
  "image": "reboot-school-20260908.png",
  "imageAlt": "Actual English Reboot Seoul 2050 gameplay showing a robot investigator in the three-dimensional Faceless School episode.",
  "audience": "Pre-service teachers and learners studying AI ethics and computational thinking",
  "role": "Research and educational game development",
  "status": "Playable research game",
  "researchArea": "AI ethics · Computational thinking · Game-based assessment",
  "outcome": "Connects narrative choices, spatial investigation, and code debugging with inspectable learning evidence.",
  "summary": "A story-driven learning game set in a future Seoul shaped by AI. Learners investigate neighborhood and school dilemmas, examine stakeholder perspectives, debug solutions, and explore the consequences of their choices.",
  "details": [
    "The 3D episodes combine movement, clue inspection, carrying and placing evidence, dialogue, and branching decisions. The Faceless School asks learners to reconstruct how earlier choices shaped a school in 2050.",
    "An evidence-centered design framework connects selected interactions to research questions about ethical reasoning and computational thinking. Recorded actions provide evidence for analysis, not a validated automatic mastery score."
  ],
  "live": "https://reboot2050.pages.dev/",
  "repo": "",
  "imageCaption": "Actual gameplay · The Faceless School · English interface",
  "gallery": [
    {
      "image": "reboot-classroom-20260908.png",
      "label": "Investigate the classroom",
      "alt": "Actual Reboot Seoul 2050 gameplay at the classroom evidence station, with a robot investigator and student characters.",
      "caption": "Actual gameplay · Classroom investigation · Bilingual environmental signs"
    }
  ],
  "current": true
},
{
  "id": "forma",
  "title": "FORMA: Learning Design Atelier",
  "shortTitle": "FORMA",
  "image": "forma-studio-20260908.webp",
  "imageAlt": "Actual FORMA engine scene showing the Prototype Studio, work areas, evidence boards, and the player among virtual colleagues.",
  "audience": "Instructional design students and emerging learning designers",
  "role": "Research, learning design, and simulation development",
  "status": "Playable development edition",
  "researchArea": "Instructional design · Professional simulation · Evidence-based practice",
  "outcome": "Lets learners rehearse design decisions through cases, colleague dialogue, evidence review, and portfolio work.",
  "summary": "A 3D learning-design studio where learners step into the role of an instructional designer. Six cases connect workplace exploration, conversations with virtual colleagues, evidence review, and iterative design decisions.",
  "details": [
    "The current development edition includes distinct studio spaces, a cast of virtual colleagues, design-review tasks, and a portfolio progression system. Learners inspect evidence and justify choices as they work through each case.",
    "Built with Godot and Blender, with a public browser edition. The scenes shown are actual engine captures; learning outcomes have not yet been established."
  ],
  "live": "https://forma-play.pages.dev/index.html",
  "repo": "",
  "imageCaption": "Actual engine capture · Prototype Studio",
  "gallery": [
    {
      "image": "forma-calibration-20260908.webp",
      "label": "Evidence and calibration",
      "alt": "Actual FORMA engine scene in the calibration studio with virtual colleagues and work areas.",
      "caption": "Actual engine capture · Case 6 studio"
    }
  ],
  "current": true
},
{
    id: "tina",
    title: "TINA — Teacher Identity Navigation Assistant",
    image: "tina.png",
    imageAlt: "TINA welcome screen showing guided reflection features beside a teacher sign-in form.",
    audience: "Pre-service and practicing teachers",
    role: "Principal investigator and lead designer",
    status: "Research prototype",
    researchArea: "Teacher identity · AI in education",
    outcome: "Structures reflection into guided prompts, actionable debriefs, and exportable records.",
    summary: "A conversational assistant that guides teachers through professional-identity reflection and turns the session into a practical next-step record.",
    live: "https://tina-adie1.netlify.app",
    repo: "https://github.com/Educatian/TINA1.01"
  },
  {
    id: "teachplay",
    title: "TeachPlay — AI-Enhanced Educational Game Design",
    image: "teachplay.webp",
    imageAlt: "TeachPlay learner workspace introducing the AI-enhanced educational game design microcredential.",
    audience: "Educators and instructional designers building defensible learning games",
    role: "Principal investigator, learning architect, and platform designer",
    status: "Live microcredential platform",
    researchArea: "Game-based learning · Competency credentials",
    outcome: "Connects 12 sessions, five non-compensatory deliverables, and evidence-based credential review.",
    summary: "A complete microcredential handbook and learner platform for designing serious learning games that educators can explain, test, and defend.",
    live: "https://teachplay.dev/",
    repo: "https://github.com/Educatian/TeachPlay"
  },
    {
    id: "korean-vr-teacher-sim",
    title: "Korean Classroom VR Teacher Response Simulator",
    image: "korean-vr-teacher-sim.webp",
    imageAlt: "Teacher-view classroom simulation showing Korean student dialogue, strategy choices, and affect indicators.",
    audience: "Pre-service and practicing elementary teachers",
    role: "Principal investigator and immersive teacher-education designer",
    status: "Active Unity/Quest research prototype",
    researchArea: "Teacher education · Social-emotional learning · XR",
    outcome: "Supports structured response practice with 15 student avatars, affect dynamics, and evidence-centered debriefing.",
    summary: "A realistic Korean classroom simulation for rehearsing teacher responses to students showing emotional and behavioral distress.",
    live: "",
    repo: "https://github.com/Educatian/korean-classroom-ai-teacher-training-sim"
  },
  {
    id: "counselcue",
    title: "CounselCue — VR Counselor Training",
    image: "counselcue.webp",
    imageAlt: "CounselCue virtual counseling session showing a client avatar, dialogue controls, and relational feedback.",
    audience: "Counselor trainees and professional-skills researchers",
    role: "Principal investigator and simulation designer",
    status: "Live Unity WebGL research prototype",
    researchArea: "Counselor education · Embodied interaction",
    outcome: "Supports full-session and focused micro-skill practice with replay, self-assessment, and relational evidence.",
    summary: "A Korean counselor-training simulation focused on how counseling micro-skills, gaze, facial movement, posture, and timing work together.",
    live: "https://educatian.github.io/counselcue/",
    repo: "https://github.com/Educatian/counselcue"
  },
  {
    id: "chalk-and-chance",
    title: "Chalk & Chance — Teacher Simulation",
    image: "chalk-and-chance.png",
    imageAlt: "Chalk and Chance classroom simulation showing student dialogue, engagement indicators, and teaching-move controls.",
    audience: "Pre-service and practicing teachers",
    role: "Principal investigator and lead designer",
    status: "Playable research prototype",
    researchArea: "Teacher education · Simulation",
    outcome: "Creates low-stakes rehearsal around seven evidence-informed teaching moves.",
    summary: "A browser-playable classroom simulation where teachers surface student thinking through dialogue with LLM-driven students.",
    live: "https://chalk-and-chance.pages.dev/",
    repo: ""
  },
  {
    id: "datasandbox",
    title: "DataSandbox Toolkit",
    image: "datasandbox-toolkit.png",
    imageAlt: "DataSandbox activity dashboard showing nine scaffolded data-literacy activities.",
    audience: "Graduate students and emerging researchers",
    role: "Principal investigator and curriculum designer",
    status: "Live instructional toolkit",
    researchArea: "Data literacy · Learning analytics",
    outcome: "Scaffolds nine activities from question framing to dashboard critique.",
    summary: "An evidence-centered sequence that keeps learners working with real data while they frame, build, inspect, and critique a dashboard.",
    live: "https://datasandbox-toolkit.pages.dev",
    repo: "https://github.com/Educatian/datasandbox3.1"
  },
  {
    id: "fieldexplorer",
    title: "FieldExplorer",
    image: "fieldexplorer.png",
    imageAlt: "FieldExplorer landing screen introducing a navigable map of the Learning Sciences alongside account access.",
    audience: "Novice and cross-disciplinary researchers",
    role: "Principal investigator and lead designer",
    status: "Live research-discovery tool",
    researchArea: "Learning sciences · Research discovery",
    outcome: "Connects 64 journals, 23 conferences, and 18 categories in one navigable field map.",
    summary: "A digital curator that helps researchers explore a scholarly field as a connected space instead of a flat list of venues.",
    live: "https://fieldexplorer10.vercel.app",
    repo: "https://github.com/Educatian/fieldexplorer1.0"
  },
  {
    id: "policy-observatory",
    title: "AI Education Policy Observatory",
    image: "aiedobservatory.png",
    imageAlt: "AI Education Policy Observatory interface for exploring state guidance and source policy documents.",
    audience: "Researchers, educators, and policy analysts",
    role: "Principal investigator and lead designer",
    status: "Live policy atlas",
    researchArea: "AI policy · Educational governance",
    outcome: "Tracks guidance across 51 states with more than 248 source documents.",
    summary: "An independent policy-surveillance workspace that makes guidance on AI use, assessment, privacy, and implementation easier to compare.",
    live: "https://aiedobservatory-five.vercel.app",
    repo: "https://github.com/Educatian/aiedobservatory"
  }
];
