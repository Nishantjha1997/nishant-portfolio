export type Project = {
  slug: string;
  updatedAt?: string;
  title: string;
  kicker: string;
  summary: string;
  description: string;
  tags: string[];
  accent: string;
  metric: string;
  links?: { label: string; href: string }[];
  details: { label: string; value: string }[];
  flow?: { label: string; value: string }[];
  flowDiagram?: boolean;
  fleet?: { name: string; role: string; guardrail: string }[];
  caseStudy: {
    challenge: string;
    decisions: string[];
    outcomes: string[];
    disclosure?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "grokbot-rollout",
    updatedAt: "2026-11-11",
    title: "GrokBot Rollout",
    kicker: "Company-wide AI adoption",
    summary: "Took AI agents from one idea to a company-wide practice: 20+ bots live across departments, 40+ people trained, and 80+ automations logged in one shared register.",
    description: "I proposed GrokBot to leadership as a team of specialised work agents, then ran the rollout end to end: hands-on training, a reusable 'team of agents' setup, shared department-head bots, an internal adoption campaign, and a register that keeps every shared automation visible. The bots now cover business and data analytics, finance, SEO and marketing analytics, internal operations, and support.",
    tags: ["AI adoption", "Agent teams", "Change management", "Training", "Automation governance"],
    accent: "violet",
    metric: "20+ bots · 40+ trained",
    details: [
      { label: "Role", value: "Rollout owner: evaluation, training, bot design, governance, and vendor escalation" },
      { label: "Business question", value: "How do we turn repeat manual work in every department into bot work, without losing control of what the bots do?" },
      { label: "Scale", value: "20+ bots live, 40+ people trained, 80+ shared automations logged with owner, schedule, and status" },
      { label: "Impact", value: "Support and refund handling time down by about 90% with the Support Head and Refund bots" },
    ],
    flow: [
      { label: "01", value: "Evaluate and pitch the agent model" },
      { label: "02", value: "Train teams and share a setup prompt" },
      { label: "03", value: "Publish shared department-head bots" },
      { label: "04", value: "Register every automation and keep a human approval step" },
    ],
    flowDiagram: true,
    fleet: [
      { name: "Executive Assistant", role: "Front door and orchestrator: breaks work into tasks, hands them to the right specialist bot, and tracks progress.", guardrail: "Reports back to its owner; specialists do the work." },
      { name: "Support Head", role: "Answers support and general company questions from the company knowledge library, with sources.", guardrail: "Cites the source so the answer can be checked." },
      { name: "Refund bot", role: "Reviews refund requests against account usage and subscription history before a decision.", guardrail: "Recommends; a person approves the refund." },
      { name: "Business Analyst", role: "Builds the Monday management report packs from dashboards and source sheets, with week-over-week analysis.", guardrail: "Sends a preview first; posts to leadership only after approval." },
      { name: "Marketing & SEO leads", role: "Paid-ads scorecards, tracking health checks, negative-keyword audits, technical SEO audits, and SEO/AEO ideas.", guardrail: "Read-only: suggests changes, never edits the ad account." },
      { name: "Finance & tax desk", role: "Deadline enforcement, billing and books audits, and tax compliance alerts for the finance team.", guardrail: "Flags and reminds; finance owners act." },
      { name: "CH-Booking Agent", role: "Compares flight options across booking sites, presents two or three choices, and books the one picked.", guardrail: "Checks every detail against the request; payment always stays manual." },
      { name: "Hunter Bot", role: "Collects public competitor complaints daily and drafts clearly disclosed replies for review.", guardrail: "Drafts only; nothing is posted without review." },
    ],
    caseStudy: {
      challenge: "Every department had repeat manual work: weekly reports, audits, tracking checks, routine questions, and bookings. Individual AI chat licences helped people one at a time, but nothing was shared, scheduled, or visible to the rest of the company.",
      decisions: [
        "Pitched GrokBot to leadership as a team of specialised agents with distinct roles, not another chat tool.",
        "Ran hands-on training sessions, then shared one setup prompt: an Executive Assistant bot leads a team of specialist bots, so each person could build their own team the same way.",
        "Published shared Team Bots for department heads so a whole team uses the same bot, skills, and schedule instead of private copies.",
        "Built a shared register of every team automation (bot, schedule, last and next run, where results go, status, and skill doc), collected by asking each person's lead bot to report its own automations.",
        "Kept a human step in the loop: read-only checks, suggestions instead of changes, previews before posting, and manual payment.",
        "Moved the non-technical team from Claude to Grok with a clear exception path for tool-building work, so licences followed real needs.",
        "Ran an internal adoption campaign ('Today manual. Tomorrow Grokbot.') with 21 print-ready office danglers, and handled vendor plan and outage issues directly with the provider.",
      ],
      outcomes: [
        "20+ bots live across business and data analytics, finance, SEO and marketing analytics, internal automation, and support.",
        "40+ people trained to set up and run their own agent teams.",
        "80+ shared automations logged with an owner, schedule, and status, so leadership can see what runs and where its results go.",
        "Support and refund handling time cut by about 90%.",
      ],
      disclosure: "Bot links, prompts, skill docs, internal data, employee names, and system access details are not published. Figures are rounded.",
    },
  },
  {
    slug: "hippomeet",
    updatedAt: "2026-11-11",
    title: "HippoMeet",
    kicker: "Sales demo scheduling platform",
    summary: "A self-hosted scheduling platform that books sales demos straight from the website and routes each lead to the right sales team.",
    description: "I customised and self-hosted an open-source scheduling platform for the sales team. Leads pick a slot from a demo form on the company website, and the booking is routed to the right team based on the lead's segment. Every sales rep can have their own hours for each event. I also set up the deployment so updates go live from the main branch.",
    tags: ["Scheduling", "Lead routing", "Self-hosted", "Deployment", "Sales ops"],
    accent: "blue",
    metric: "Live for sales",
    details: [
      { label: "Role", value: "Product owner and builder: requirements, customisation, testing, and deployment" },
      { label: "Business question", value: "Can a qualified lead book the right sales demo in one step, without back-and-forth?" },
      { label: "Architecture", value: "Open-source scheduling platform, team events per sales segment, embedded demo form, and push-to-deploy" },
    ],
    flow: [
      { label: "01", value: "Lead fills the embedded demo form" },
      { label: "02", value: "Routing picks the right sales team event" },
      { label: "03", value: "Lead books a slot in that rep's hours" },
      { label: "04", value: "Confirmation and hand-off to sales" },
    ],
    flowDiagram: true,
    caseStudy: {
      challenge: "Demo booking was split across tools, team events weren't available for routing, and the booking form didn't fit inside the website on every screen.",
      decisions: [
        "Added per-rep hours for each event, so every sales rep keeps their own schedule without a shared calendar.",
        "Made team events selectable in routing, so the lead-handover form sends each lead to the right segment's demo.",
        "Rebuilt the demo form to fit the website frame on laptops, tablets, and phones, with tap-to-pick countries and a pinned booking button on mobile.",
        "Fixed the post-booking redirect so leads land on a working thank-you page.",
        "Moved the code to the company's repository and set up a one-command deploy with automatic database migrations and a health check.",
      ],
      outcomes: [
        "Sales demos are booked from the website and routed to the right team in one flow.",
        "Sales leadership can change each rep's hours themselves, without engineering help.",
        "Updates ship with a repeatable deploy instead of manual server work.",
      ],
      disclosure: "Internal URLs, server details, routing rules, and lead data are not published.",
    },
  },
  {
    slug: "tools-hub",
    updatedAt: "2026-11-11",
    title: "Tools Hub",
    kicker: "One home for internal tools",
    summary: "One Google sign-in home for the company's internal tools, plus a step-by-step map of each automated workflow.",
    description: "As the number of internal tools grew, people had to remember separate links and ask how each automation worked. Tools Hub puts them in one place behind company Google sign-in: revenue signals, purchase management, a talent console, the punctuality and compliance dashboard, demo scheduling, and knowledge-transfer capture. An Automated workflows section explains each process automation step by step, with its purpose.",
    tags: ["Internal platform", "Google sign-in", "Workflow documentation", "Vercel"],
    accent: "teal",
    metric: "6 tools · 1 sign-in",
    details: [
      { label: "Role", value: "Builder and owner" },
      { label: "Business question", value: "How do people find, trust, and understand the internal tools and automations they depend on?" },
      { label: "Includes", value: "Signals, Purchase Manager, Talent Console, Punctuality & Compliance Dashboard, HippoMeet, and KT capture" },
    ],
    flow: [
      { label: "01", value: "Sign in with company Google account" },
      { label: "02", value: "Open any internal tool from one place" },
      { label: "03", value: "Read how each automated workflow runs" },
    ],
    caseStudy: {
      challenge: "Internal tools and automations were spread across separate links and scripts, so people struggled to find them, and nobody could easily see how an automation worked.",
      decisions: [
        "Kept access behind company Google sign-in instead of building separate logins.",
        "Documented each automated workflow as plain steps with its purpose, next to the tools.",
        "Hosted it where the team can deploy directly, without waiting on DevOps.",
      ],
      outcomes: [
        "Six internal tools in one place.",
        "A readable map of how each automation runs, for users and for whoever maintains it next.",
      ],
      disclosure: "Tool URLs, data, and access rules are not published.",
    },
  },
  {
    slug: "ai-builders-team",
    updatedAt: "2026-11-11",
    title: "AI Builders Team",
    kicker: "Designing an AI-first team",
    summary: "Set up an internal AI builders function: an agent team that prepares the ground, and a hiring process that only screens in people who have built things.",
    description: "Before the first human AI builders joined, I set up an agent team with a written mission brief to find and size automation opportunities across the company. Alongside it I wrote the hiring guide, build-task tests, and interview approach for the human hires.",
    tags: ["Team design", "Hiring", "Agent teams", "Opportunity discovery"],
    accent: "amber",
    metric: "Agents + people",
    details: [
      { label: "Role", value: "Function designer and hiring lead" },
      { label: "Business question", value: "How do we hire people who can turn manual work into working automations, and give them a head start on day one?" },
      { label: "Approach", value: "Agent team with a mission brief, a proof-of-work screen, and build-task assessments" },
    ],
    flow: [
      { label: "01", value: "Agent team maps automation opportunities" },
      { label: "02", value: "Screen candidates on work they've built" },
      { label: "03", value: "Assess with a real build task and its AI chat history" },
      { label: "04", value: "New hires start from a ready backlog" },
    ],
    caseStudy: {
      challenge: "Job titles and certificates said little about whether someone could actually build useful automations, and new hires would otherwise spend their first weeks just finding the work.",
      decisions: [
        "Wrote a mission brief for an agent team to find and size automation opportunities, so human hires start with a ready backlog.",
        "Set a hiring rule: screen in side projects, hackathon builds, and automations with results; screen out profiles that only list certificates or prompt-engineering titles.",
        "Designed build-task tests (for example, a call-insights tool from sample transcripts), with AI tools allowed and the candidate's AI chat history reviewed as part of the assessment.",
        "Asked candidates for a first-week plan: shadow the team, document steps and time, set a baseline, and confirm findings with process owners.",
        "Required each automation proposal to be measured against its business impact before build effort is spent.",
      ],
      outcomes: [
        "A repeatable way to hire for building ability rather than titles.",
        "A backlog of sized opportunities ready for new builders from day one.",
      ],
      disclosure: "Candidate details, interview transcripts, and internal opportunity lists are not published.",
    },
  },
  {
    slug: "revenue-churn-signals",
    updatedAt: "2026-11-11",
    title: "Revenue & Churn Signals",
    kicker: "Commercial early warnings",
    summary: "Spotted at-risk paying accounts before renewal and designed a controlled way to measure the real effect of a price change.",
    description: "Using account usage and billing data, I flagged paying accounts whose usage had dropped far below what they pay for, and the upsell renewals that needed a conversation before they renewed. For a planned price change, I designed a test with a control group so the team could see the real effect in real time and be sure it came from the price.",
    tags: ["Churn risk", "Usage analysis", "Pricing experiment", "Revenue"],
    accent: "green",
    metric: "~$10K MRR flagged",
    details: [
      { label: "Role", value: "Analyst and decision owner for the alert; experiment designer" },
      { label: "Business question", value: "Which paying customers are likely to churn, and how do we know a price change is what moved the numbers?" },
      { label: "Finding", value: "Six low-usage paying accounts above a set revenue floor, about $10K MRR combined, flagged before renewal" },
    ],
    flow: [
      { label: "01", value: "Compare usage with what each account pays" },
      { label: "02", value: "Flag low-usage and renewal-window accounts" },
      { label: "03", value: "Hand the list to account owners with a deadline" },
      { label: "04", value: "Test price changes against a control group" },
    ],
    caseStudy: {
      challenge: "Churn usually showed up only after a customer left, and pricing changes were judged on numbers that could have moved for other reasons.",
      decisions: [
        "Only included accounts above a set revenue floor so the team focused on what mattered most.",
        "Asked account owners to confirm the data before acting, and set clear deadlines tied to renewal dates.",
        "Designed the price test with a control group (new pricing for one group first, compared with a similar group on the old price) to separate the price effect from noise.",
      ],
      outcomes: [
        "About $10K MRR of at-risk revenue put in front of account owners before renewal.",
        "A test design that lets leadership judge a price change on evidence, not on one or two numbers.",
      ],
      disclosure: "Customer names, exact revenue figures, and pricing details are not published. Figures are rounded.",
    },
  },
  {
    slug: "ai-video-ad-pipeline",
    updatedAt: "2026-11-11",
    title: "AI Video Ad Pipeline",
    kicker: "Bulk ad creative in two clicks",
    summary: "A two-click pipeline that generates ad ideas, then turns the chosen ones into short social video ads for every product launch.",
    description: "The first click generates ad ideas; the second turns them into videos. The team picks which ones to run, so launches get a steady supply of creative to test instead of waiting on one or two hand-made ads.",
    tags: ["Generative video", "Marketing automation", "Ad creative"],
    accent: "violet",
    metric: "Ideas → videos",
    details: [
      { label: "Role", value: "Builder; handover to the AI team" },
      { label: "Business question", value: "Can every launch ship with many ad variations to test, quickly?" },
      { label: "Constraint", value: "Video generation needs GPU hardware, so the pipeline is scoped for a dedicated machine" },
    ],
    flow: [
      { label: "01", value: "Generate ad ideas" },
      { label: "02", value: "Generate videos from the picked ideas" },
      { label: "03", value: "Team selects which ads to run" },
    ],
    caseStudy: {
      challenge: "Each launch had only a few hand-made ads, which limited how much the team could test.",
      decisions: [
        "Split the pipeline into two steps so people choose ideas before spending compute on video.",
        "Kept the final choice of which ads to run with the team.",
      ],
      outcomes: [
        "A repeatable way to produce bulk ad variations for each launch.",
        "A clear hardware requirement and handover plan for the AI team.",
      ],
      disclosure: "Prompts, model setup, and unreleased creative are not published.",
    },
  },
  {
    slug: "competitor-talent-map",
    updatedAt: "2026-11-11",
    title: "Competitor Talent Map",
    kicker: "Recruiting from a mapped talent pool",
    summary: "A talent map and console that lets the hiring team reach proven people at competitor companies as soon as a matching role opens.",
    description: "I scoped a pilot to map India-based sales and customer success people at competitor companies, sorted into tiers, and built an internal console the talent acquisition team uses to reach the right people when a matching role opens.",
    tags: ["Talent acquisition", "Data sourcing", "Internal tool"],
    accent: "teal",
    metric: "Pilot: sales & CS",
    details: [
      { label: "Role", value: "Project owner: scope, data sourcing plan, and tool" },
      { label: "Business question", value: "Can we reach experienced people the moment a role opens, instead of starting every search from zero?" },
      { label: "Scope", value: "India-based Sales (SDR, BDR, inside sales, AE, managers) and Customer Success / Support, starting with Tier 1 companies" },
    ],
    flow: [
      { label: "01", value: "Tier competitor companies" },
      { label: "02", value: "Map people in matching roles" },
      { label: "03", value: "Reach out when a role opens" },
    ],
    caseStudy: {
      challenge: "Every new role started a fresh search, even though people with directly relevant experience worked at known competitor companies.",
      decisions: [
        "Started with a narrow pilot (two functions, one country, Tier 1 companies) before widening.",
        "Gave the talent acquisition team a console instead of a static spreadsheet.",
      ],
      outcomes: [
        "A ready talent pool for the most frequent sales and support roles.",
      ],
      disclosure: "Company lists, people data, and sourcing methods are not published.",
    },
  },
  {
    slug: "flowcreate",
    title: "MakeCV — FlowCreate",
    kicker: "AI resume builder & Master Profiles",
    summary: "An AI-assisted resume and cover-letter workspace with ATS-focused templates, reusable Master Profiles, and multi-format export.",
    description: "MakeCV is the current live experience for FlowCreate. It combines ATS-optimized templates, an AI Assistant for improving content and surfacing achievements, cover-letter workflows, live previews, and PDF, DOCX, and TXT exports. Its Master Profiles area is designed to keep a reusable career source of truth for future documents and is sign-in protected in the live product.",
    tags: ["AI product", "Resume UX", "Master Profiles", "ATS workflows"],
    accent: "coral",
    metric: "AI + reusable profile",
    links: [{ label: "Open MakeCV live", href: "https://makecv.site/" }],
    details: [
      { label: "Role", value: "Product owner and builder" },
      { label: "Focus", value: "AI assistance, ATS templates, Master Profiles" },
      { label: "Product", value: "Resume and cover-letter creation with PDF, DOCX, and TXT export" },
      { label: "Access", value: "Master Profiles require sign-in in the live app" },
    ],
    flow: [
      { label: "01", value: "Build a reusable Master Profile from career information" },
      { label: "02", value: "Choose an ATS-aware template and improve content with AI assistance" },
      { label: "03", value: "Preview, customize, and export a resume or cover letter" },
    ],
    caseStudy: {
      challenge: "Job seekers repeatedly rewrite the same career information across resumes and cover letters, while still needing to satisfy ATS parsing and communicate achievements clearly. MakeCV needed to make that workflow structured without taking ownership away from the user.",
      decisions: [
        "Made the AI Assistant a practical writing layer for improving content and highlighting achievements, not a replacement for user judgment.",
        "Used ATS-focused templates, live previews, and multiple export formats to connect creation with application-ready output.",
        "Introduced Master Profiles as a reusable career source of truth for future resume and cover-letter work, with sign-in protection for saved data.",
      ],
      outcomes: [
        "A current live product experience spanning resume creation, cover letters, templates, AI assistance, and export.",
        "A reusable product pattern for turning one structured career profile into multiple polished application documents.",
      ],
      disclosure: "Feature descriptions are based on the public MakeCV experience. Master Profiles are sign-in protected, and no private account data is included in this case study.",
    },
  },
  {
    slug: "streamfree",
    title: "StreamFree",
    kicker: "Media discovery platform",
    summary: "A responsive movie, television, and anime discovery experience with resilient player orchestration.",
    description: "StreamFree brings catalog discovery, title detail views, watch history, mobile-first player controls, and provider-aware source selection into a single product. The work emphasizes fast first render, accessible controls, and graceful recovery when a source is unavailable.",
    tags: ["Full-stack web", "Playback UX", "Mobile", "Vercel"],
    accent: "violet",
    metric: "Live on streamfree.online",
    links: [{ label: "Open live project", href: "https://streamfree.online/" }],
    details: [
      { label: "Role", value: "Product, UX, and engineering" },
      { label: "Focus", value: "Navigation, playback flows, responsive UI" },
      { label: "Outcome", value: "A polished, installable web experience with a branded domain" },
    ],
    flow: [
      { label: "01", value: "Discover a title across Movies, TV, or Anime" },
      { label: "02", value: "Resolve a responsive player and source choice" },
      { label: "03", value: "Track history and recover gracefully" },
    ],
    caseStudy: {
      challenge: "A catalog experience feels broken when discovery is slow, mobile controls fight the embedded player, or a provider becomes unavailable. StreamFree needed one coherent experience across browsing, playback, account history, and installation.",
      decisions: [
        "Built responsive discovery, search, title detail, and playback flows for Movies, TV, and Anime.",
        "Created provider-aware source controls that preserve user choice without hiding reliability limits.",
        "Added PWA installation, authentication, watch history, SEO, analytics, and an admin view as one product system.",
      ],
      outcomes: [
        "A branded, mobile-first web product deployed on StreamFree's own domain.",
        "A reusable player shell and operating model for multiple media types and source providers.",
      ],
      disclosure: "StreamFree is a discovery and playback interface. It does not claim to host the third-party media files surfaced by external providers.",
    },
  },
  {
    slug: "yt-transcriber",
    title: "YT Transcriber",
    kicker: "Caption-aware transcript tool",
    summary: "A browser-first utility that turns available YouTube caption tracks into searchable, timestamped text and exportable files.",
    description: "YT Transcriber pairs a focused transcript workspace with strict video validation, language selection, search, timestamp links, and TXT, SRT, and WebVTT exports. It is a public beta: availability depends on whether YouTube exposes captions to the request source, and it does not bypass private or restricted media.",
    tags: ["Vite", "Node.js", "YouTube captions", "Product UX"],
    accent: "teal",
    metric: "Public beta",
    links: [
      { label: "Open live beta", href: "https://youtube-scripto-scribe.vercel.app/" },
      { label: "View GitHub repository", href: "https://github.com/Nishantjha1997/youtube-scripto-scribe" },
    ],
    details: [
      { label: "Role", value: "Product, UX, and full-stack implementation" },
      { label: "Focus", value: "Caption extraction, search, export, resilient errors" },
      { label: "Outcome", value: "A compact transcript workflow that stays clear about caption availability" },
    ],
    flow: [
      { label: "01", value: "Validate a YouTube URL or video ID" },
      { label: "02", value: "Choose an exposed caption language and search the transcript" },
      { label: "03", value: "Jump by timestamp or export TXT, SRT, and WebVTT" },
    ],
    caseStudy: {
      challenge: "Transcript tools often hide whether a result is real, which language was selected, or why a video cannot be extracted. The product needed a fast, readable flow with honest failure states.",
      decisions: [
        "Replaced placeholder success states with a same-origin Node extraction route backed by a community caption package.",
        "Added language selection, transcript search, timestamp navigation, bounded responses, caching, and rate limits.",
        "Kept the interface explicit about public-beta limits: caption availability varies by video and request origin.",
      ],
      outcomes: [
        "A focused workflow from video URL to searchable transcript and download-ready caption formats.",
        "A reusable example of pairing a polished interface with transparent upstream reliability boundaries.",
      ],
      disclosure: "This is a public beta. It only works when a caption track is exposed to the service; it does not bypass private videos, restricted captions, or YouTube access controls.",
    },
  },
  {
    slug: "gitlab-access-automation",
    title: "GitLab Access Automation",
    kicker: "Internal operations system",
    summary: "A validation and provisioning workflow that turns repository-access requests into an auditable, mostly automatic process.",
    description: "The system connects request intake with layered employee, project, identity, and repository checks before granting or escalating access. It includes scheduled processing, retry logic, audit trails, expiry handling, maintainer approval flows, and operational documentation.",
    tags: ["Google Apps Script", "API integrations", "Process design", "Automation"],
    accent: "amber",
    metric: "Up to 24h → max 30m",
    details: [
      { label: "Role", value: "End-to-end system owner" },
      { label: "Checks", value: "HR, project assignment, identity, permissions" },
      { label: "Impact", value: "Reduced normal eligible-request turnaround from up to 24 hours to a maximum 30-minute processing window" },
    ],
    flow: [
      { label: "01", value: "Structured request intake" },
      { label: "02", value: "Layered validation and 2FA check" },
      { label: "03", value: "Provision, escalate, expire, and audit" },
    ],
    caseStudy: {
      challenge: "Repository-access requests depended on repeated manual checks across HR, project assignment, GitLab identity, 2FA status, repository scope, and requested role. Normal fulfilment could take up to 24 hours.",
      decisions: [
        "Connected a structured request sheet to HR, project, GitLab, Asana, and Gmail validation workflows.",
        "Used allowlists, namespace restrictions, idempotent fingerprints, locks, retries, circuit breakers, and a dead-letter path to make automatic processing safe.",
        "Automatically granted only eligible time-bound roles; elevated access always entered an approval path and Owner/Admin was never auto-granted.",
      ],
      outcomes: [
        "Reduced normal eligible-request turnaround from up to 24 hours to a maximum 30-minute processing window.",
        "Added expiration handling, requester notifications, an audit trail, and operational dashboard visibility.",
      ],
      disclosure: "This is a sanitized case study. Source code, internal URLs, production configuration, company namespaces, employee data, and credentials are intentionally not published.",
    },
  },
  {
    slug: "claude-usage-uploader",
    title: "Claude Usage Uploader",
    kicker: "Cross-platform telemetry utility",
    summary: "A zero-dependency desktop utility that collects usage telemetry and reliably syncs it for team visibility.",
    description: "Built as a cross-platform Node.js service for Windows, macOS, and Linux, the uploader uses an offline-first outbox, retry backoff, idempotent sync, signed webhooks, and a lightweight administrative dashboard. The public releases project focuses on reliable handover, recovery, and transparent distribution.",
    tags: ["Node.js", "Desktop tooling", "Reliability", "Release engineering"],
    accent: "blue",
    metric: "Windows · macOS · Linux",
    links: [{ label: "View public releases", href: "https://github.com/Nishantjha1997/claude-uploader-releases" }],
    details: [
      { label: "Role", value: "Architecture, implementation, and release workflow" },
      { label: "Focus", value: "Offline durability, secure sync, operations" },
      { label: "Outcome", value: "Portable binaries with checksums, recovery tooling, and update handover" },
    ],
    flow: [
      { label: "01", value: "Collect usage locally" },
      { label: "02", value: "Queue and retry safely offline" },
      { label: "03", value: "Sync idempotently with dashboard visibility" },
    ],
    caseStudy: {
      challenge: "A cross-platform usage utility had to continue collecting safely through network loss, application restarts, and temporary backend failures while remaining straightforward to install and support.",
      decisions: [
        "Designed an offline-first durable outbox with idempotent uploads and retry backoff.",
        "Separated write streams to reduce Apps Script lock contention and added health, repair, and update workflows.",
        "Packaged smoke-gated releases for Windows, Linux, macOS Intel, and Apple Silicon with checksums.",
      ],
      outcomes: [
        "Reduced Apps Script lock collisions by 95% through separated write paths.",
        "Created a resilient release and handover model with cross-platform binaries and recovery tooling.",
      ],
      disclosure: "The linked repository contains public release artifacts. Private source code, internal infrastructure, confidential endpoints, and telemetry data are not published.",
    },
  },
  {
    slug: "my-fitness-blueprint",
    title: "My Fitness Blueprint",
    kicker: "AI-driven web application",
    summary: "A personal fitness-planning workspace for goals, workouts, progress, and data-informed adjustments.",
    description: "This end-to-end web application explores how a focused product can turn goals into an actionable routine. It combines planning, tracking, and progress views in a practical interface built around consistent follow-through.",
    tags: ["Web application", "Tracking", "Product thinking", "AI-assisted build"],
    accent: "green",
    metric: "Live prototype",
    links: [{ label: "Open live project", href: "https://myfittracker.netlify.app/" }],
    details: [
      { label: "Role", value: "Product, design, and implementation" },
      { label: "Focus", value: "Goals, routines, tracking, progress" },
      { label: "Outcome", value: "A usable blueprint for consistent personal progress" },
    ],
    flow: [
      { label: "01", value: "Set a goal and baseline" },
      { label: "02", value: "Plan routines and track workouts" },
      { label: "03", value: "Review progress and adjust" },
    ],
    caseStudy: {
      challenge: "Fitness plans are easy to create and difficult to follow. The product needed to connect goals, workouts, and progress in a way that made the next action obvious.",
      decisions: [
        "Organized planning around goals, repeatable routines, and clear progress views.",
        "Used an AI-assisted build workflow while keeping the final product decisions and implementation ownership end to end.",
        "Kept the interface focused on practical tracking rather than an overloaded health dashboard.",
      ],
      outcomes: [
        "A live personalized fitness-planning prototype with workout and progress workflows.",
        "A practical product experiment in turning broad goals into repeatable daily actions.",
      ],
    },
  },
  {
    slug: "operations-insights-dashboard",
    title: "Operations Insights Dashboard",
    kicker: "Leadership visibility system",
    summary: "A real-time operating pulse that brings workload, delivery, and risk signals into one leadership view.",
    description: "This internal reporting system aggregates project activity and workload signals into practical KPIs, helping leadership see capacity constraints and execution risk earlier. The public case study stays intentionally high-level and contains no internal data or company identifiers.",
    tags: ["Google Apps Script", "Google Sheets", "Reporting", "Decision support"],
    accent: "teal",
    metric: "Real-time operating pulse",
    details: [
      { label: "Role", value: "System designer and builder" },
      { label: "Focus", value: "Workload, activity, capacity, risk" },
      { label: "Outcome", value: "Clearer leadership visibility into priorities and execution" },
    ],
    flow: [
      { label: "01", value: "Aggregate activity and workload signals" },
      { label: "02", value: "Normalize records into usable KPIs" },
      { label: "03", value: "Surface constraints and decisions" },
    ],
    caseStudy: {
      challenge: "Leadership signals were spread across operational systems, making workload, capacity, delivery risk, and emerging bottlenecks difficult to see in one place.",
      decisions: [
        "Normalized project and workload activity into a small set of decision-oriented indicators.",
        "Designed views around capacity, delivery, and exceptions instead of raw activity volume.",
        "Kept the public explanation generic so internal data and company operating details remain private.",
      ],
      outcomes: [
        "A real-time operating pulse that shortened the path from activity data to leadership action.",
        "A reusable reporting pattern for translating fragmented operational records into practical decisions.",
      ],
      disclosure: "The public case study contains no company identifiers, employee information, production data, or internal dashboard links.",
    },
  },
  {
    slug: "lead-cleanup",
    updatedAt: "2026-10-01",
    title: "Lead Cleanup",
    kicker: "Early Jev AI use case",
    summary: "An early Jev AI use case that turns messy contact exports into reviewed, outreach-ready leads while keeping decisions explainable.",
    description: "On Jev AI's second day after launch, I identified lead qualification as a practical use case and integrated it into an existing workflow. Lead Cleanup accepts CSV or XLSX contact exports, applies clear rules, finds duplicates, and sends uncertain cases for human review.",
    tags: ["Jev AI", "CSV and XLSX", "Policy rules", "Review queue"],
    accent: "green",
    metric: "Jev AI + human review",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Product and implementation" },
      { label: "Business question", value: "Which contacts fit our outreach criteria, and which need a person to decide?" },
      { label: "Architecture", value: "Vite browser app, Node and Netlify Functions, deterministic rules, server-side Jev suggestions" },
    ],
    flow: [
      { label: "01", value: "Upload and map a contact export without changing its source rows" },
      { label: "02", value: "Apply versioned rules, duplicate checks, and company-level checks" },
      { label: "03", value: "Review uncertain leads and export ready contacts with an audit file" },
    ],
    caseStudy: {
      challenge: "Contact exports contain inconsistent job titles, duplicates, and old qualification labels that cannot be trusted as final decisions. Sales teams need to know which leads are ready for outreach and why.",
      decisions: [
        "Kept explicit policy rules and duplicate handling deterministic so the same input gets the same decision.",
        "Integrated Jev AI quickly into the existing flow for typed suggestions on ambiguous seniority and function; people approve or reject those suggestions.",
        "Separated the ready-to-contact export from the audit and review queue so provisional leads are not sent out as approved.",
      ],
      outcomes: [
        "A concrete early Jev AI use case that fits into an existing, explainable lead workflow.",
        "A review queue and audit file that show why each contact was accepted, rejected, or held.",
      ],
      disclosure: "Private contact exports and credentials are not published. AI suggestions remain provisional until reviewed.",
    },
  },
  {
    slug: "callhippo-purchase-management",
    updatedAt: "2026-10-01",
    title: "CallHippo Purchase Management",
    kicker: "Internal procurement platform",
    summary: "A pre-launch workflow for purchase requests, quotes, approvals, orders, receipts, invoices, and payment tracking.",
    description: "This pre-launch internal build brings the purchase journey into one place. Requesters can raise a need, teams can compare quotes and approve it, and finance can follow the order through receipt, invoice checks, and payment.",
    tags: ["Next.js", "PostgreSQL", "Procurement", "Audit trails"],
    accent: "amber",
    metric: "Pre-launch build",
    flowDiagram: true,
    details: [
      { label: "Role", value: "SOP author, product owner, and builder" },
      { label: "Business question", value: "What should we buy, who approved it, and is the invoice safe to pay?" },
      { label: "Architecture", value: "Next.js and TypeScript, PostgreSQL with Prisma, role-based workflows, background jobs" },
    ],
    flow: [
      { label: "01", value: "Capture a request and compare supplier quotes" },
      { label: "02", value: "Route approvals and issue a purchase order" },
      { label: "03", value: "Record receipt, match the invoice, and track payment" },
    ],
    caseStudy: {
      challenge: "Purchase information was spread across requests, supplier quotes, approvals, orders, receipts, and invoices. Teams needed a reliable way to see the current state and catch mismatches before payment.",
      decisions: [
        "Modeled each step as a role-checked state transition with an audit record.",
        "Used configurable rules for approvals and a three-way match across purchase order, goods receipt, and invoice.",
        "Kept the purchase history and follow-up jobs tied to the same record so handoffs remain visible.",
      ],
      outcomes: [
        "A working pre-launch request-to-payment flow with clearer ownership at each stage.",
        "A traceable record for comparing what was ordered, received, invoiced, and paid.",
      ],
      disclosure: "The system is a pre-launch build. This public case study omits supplier records, spend data, employee access, private documents, and internal links.",
    },
  },
  {
    slug: "sales-meeting-punctuality",
    updatedAt: "2026-10-01",
    title: "Sales Meeting Punctuality",
    kicker: "Client meeting audit and reviewer dashboard",
    summary: "Shows whether a salesperson joined a client meeting on time using measured join evidence, with uncertain cases sent for review.",
    description: "The system compares a meeting's scheduled start with actual participant joins. It helps managers distinguish an employee joining late while a client waits from a client arriving late or an attendance record that is simply incomplete.",
    tags: ["Apps Script", "Calendar and Meet", "Google Sheets", "Review workflow"],
    accent: "blue",
    metric: "Measured joins + review",
    flowDiagram: true,
    details: [
      { label: "Role", value: "System owner for rules, data model, and dashboard" },
      { label: "Business question", value: "Did a salesperson join after the start while a confirmed client was waiting?" },
      { label: "Architecture", value: "Apps Script reads Calendar and Meet audit data, writes Sheets, and serves a reviewer dashboard" },
    ],
    flow: [
      { label: "01", value: "Find scheduled client-candidate meetings in verified calendars" },
      { label: "02", value: "Compare measured employee and invited-client join times" },
      { label: "03", value: "Keep an audit row and send uncertain cases to review" },
    ],
    caseStudy: {
      challenge: "A recording start time does not show when a salesperson joined, and an invitation does not prove attendance. Managers needed a fair way to spot meetings where a client actually waited.",
      decisions: [
        "Used Calendar for scheduled times and Meet audit events for measured joins; optional Teams reports follow the same evidence rules.",
        "Applied deterministic timing rules only when the invited client and employee joins could be matched to the same meeting.",
        "Kept missing or ambiguous evidence visible as unverified instead of turning it into a lateness finding.",
      ],
      outcomes: [
        "A Sheet-backed reviewer dashboard with traceable meeting evidence.",
        "A more careful answer to which client meetings may need follow-up, without treating a flag as an employee verdict.",
      ],
      disclosure: "This is a sanitized internal case study. Employee identities, meeting details, private dashboards, and operational data are not published.",
    },
  },

  {
    slug: "ask-callhippo",
    updatedAt: "2026-10-01",
    title: "Ask CallHippo",
    kicker: "Source-backed company answers",
    summary: "A way for colleagues to find answers to routine company questions with a source they can check.",
    description: "The project organizes approved knowledge and checks authorized sources when an answer needs current information.",
    tags: ["Knowledge base", "Source citations", "Internal search"],
    accent: "blue",
    metric: "Cited answers",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Product owner and knowledge architecture" },
      { label: "Business question", value: "Can employees find reliable answers without repeatedly asking colleagues?" },
      { label: "Architecture", value: "Curated knowledge index, an AI assistant, and authorized source retrieval" },
    ],
    flow: [
      { label: "01", value: "Organize approved knowledge" },
      { label: "02", value: "Check the relevant source" },
      { label: "03", value: "Answer with a citation" },
    ],
    caseStudy: {
      challenge: "Company knowledge can be scattered across documents and tools, making a simple question slow to answer.",
      decisions: [
        "Kept source attribution beside the answer so people can verify it.",
        "Separated stable reference material from questions that need a current source check.",
      ],
      outcomes: [
        "A clearer path from a question to a checkable answer.",
        "A reusable way to maintain the knowledge behind routine answers.",
      ],
      disclosure: "Private sources, access rules, implementation details, and company records are not published. The internal technical team supported server implementation and hosting.",
    },
  },
  {
    slug: "ai-licence-tiering",
    updatedAt: "2026-10-01",
    title: "AI Licence Tiering",
    kicker: "Right-sized AI access",
    summary: "A review process for matching paid AI access to the work people actually need to do.",
    description: "The project used licence records, usage patterns, and role needs to guide access decisions and make exceptions visible.",
    tags: ["SaaS governance", "Usage review", "Decision record"],
    accent: "green",
    metric: "Access review",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Assessment and rollout owner" },
      { label: "Business question", value: "Which paid AI seats are justified by actual work needs?" },
      { label: "Architecture", value: "Access inventory, review criteria, and a decision register" },
    ],
    flow: [
      { label: "01", value: "Review access and use" },
      { label: "02", value: "Discuss role needs and exceptions" },
      { label: "03", value: "Record the access decision" },
    ],
    caseStudy: {
      challenge: "Paid seats can remain assigned by habit, while a simple removal rule can interrupt useful work.",
      decisions: [
        "Used a reviewable decision for each access type.",
        "Kept exceptions visible for follow-up.",
      ],
      outcomes: [
        "A repeatable way to evaluate paid access.",
        "A clearer record for future licence reviews.",
      ],
      disclosure: "Employee activity, seat counts, costs, and specific access decisions are not published.",
    },
  },
  {
    slug: "software-utilization-toolkit",
    updatedAt: "2026-10-01",
    title: "Software Utilization Toolkit",
    kicker: "Repeatable software assessment",
    summary: "A reusable toolkit for asking whether a software product delivers enough value for its cost.",
    description: "It brings assessment questions, scoring, and comparison material into one review process.",
    tags: ["Assessment", "SaaS", "Decision support"],
    accent: "amber",
    metric: "Reusable toolkit",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Toolkit designer and builder" },
      { label: "Business question", value: "Are we using each software product enough to justify it?" },
      { label: "Architecture", value: "Assessment workbook, scoring checklist, and generated comparison material" },
    ],
    flow: [
      { label: "01", value: "Gather usage and workflow evidence" },
      { label: "02", value: "Review value and alternatives" },
      { label: "03", value: "Record the decision" },
    ],
    caseStudy: {
      challenge: "Renewal discussions are hard to compare when each tool is assessed differently.",
      decisions: [
        "Used the same questions across products.",
        "Recorded the evidence behind each recommendation.",
      ],
      outcomes: [
        "A consistent review format for software decisions.",
        "Less repetitive preparation for the next assessment.",
      ],
      disclosure: "Vendor quotes, internal scores, contracts, and specific decisions are not published.",
    },
  },
  {
    slug: "pricing-leverage-model",
    updatedAt: "2026-10-01",
    title: "Pricing Leverage Decision Model",
    kicker: "Market research into reviewable options",
    summary: "A model that keeps observed pricing patterns separate from ideas under consideration.",
    description: "Research entries feed a decision sheet, with summaries that update as reviewers change an item's status.",
    tags: ["Market research", "Decision model", "Pricing"],
    accent: "blue",
    metric: "Decision model",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Research and model owner" },
      { label: "Business question", value: "Which market pricing patterns deserve further evaluation?" },
      { label: "Architecture", value: "Evidence register linked to a spreadsheet decision view" },
    ],
    flow: [
      { label: "01", value: "Record observed patterns and ideas separately" },
      { label: "02", value: "Review each option" },
      { label: "03", value: "Update the summary from decisions" },
    ],
    caseStudy: {
      challenge: "Pricing research becomes hard to use when observations and proposals are mixed together.",
      decisions: [
        "Kept evidence distinct from potential changes.",
        "Made review states drive the summary.",
      ],
      outcomes: [
        "A more structured review of pricing options.",
        "A clear connection between research and next-step discussion.",
      ],
      disclosure: "Competitor findings, specific options, recommendations, and commercial strategy are not published.",
    },
  },
  {
    slug: "reports-automation-audit",
    updatedAt: "2026-10-01",
    title: "Reports Automation Audit",
    kicker: "Reporting inventory and build plan",
    summary: "An audit of recurring reports to decide which should be retained, retired, or considered for automation.",
    description: "The work maps report purpose, ownership, and source questions into a handover that engineers can evaluate.",
    tags: ["Reporting", "Process audit", "Automation"],
    accent: "green",
    metric: "Audit and handover",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Audit and specification owner" },
      { label: "Business question", value: "Which manual reports still matter, and what would reliable automation require?" },
      { label: "Architecture", value: "Report registry, source map, decision workbook, and engineering handover" },
    ],
    flow: [
      { label: "01", value: "Inventory reports and their purpose" },
      { label: "02", value: "Map sources and automation feasibility" },
      { label: "03", value: "Hand over prioritized requirements" },
    ],
    caseStudy: {
      challenge: "Automating a report without knowing its purpose and source can preserve unnecessary work.",
      decisions: [
        "Clarified purpose and ownership before recommending automation.",
        "Kept unresolved source questions visible in the handover.",
      ],
      outcomes: [
        "A clearer basis for report decisions.",
        "Practical requirements for a later engineering build.",
      ],
      disclosure: "Report contents, internal data, decisions, and delivery status of later automation are not published.",
    },
  },
  {
    slug: "us-voip-licensing-roadmap",
    updatedAt: "2026-10-01",
    title: "US VoIP Carrier Licensing Roadmap",
    kicker: "Launch dependency research",
    summary: "A research roadmap that helps a team plan the sequence of work for a proposed voice offering.",
    description: "The project organizes regulatory questions and dependencies into a planning document for specialist review.",
    tags: ["Research", "Telecom", "Dependency map"],
    accent: "amber",
    metric: "Planning roadmap",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Research and roadmap author" },
      { label: "Business question", value: "What dependencies need to be understood before planning a carrier launch?" },
      { label: "Architecture", value: "Research notes, requirement tracker, dependency map, and readable roadmap" },
    ],
    flow: [
      { label: "01", value: "Gather requirements and open questions" },
      { label: "02", value: "Map dependencies" },
      { label: "03", value: "Prepare a roadmap for specialist review" },
    ],
    caseStudy: {
      challenge: "A list of requirements does not show a team the order in which work should happen.",
      decisions: [
        "Presented dependencies as a sequence.",
        "Kept open questions separate from confirmed research.",
      ],
      outcomes: [
        "A clearer way to plan a proposed launch.",
        "A shared document for professional review.",
      ],
      disclosure: "The roadmap is research, not a licence, approval, or current legal guidance. Internal plans are not published.",
    },
  },
  {
    slug: "compliance-overlap-workbook",
    updatedAt: "2026-10-01",
    title: "Multi-Framework Compliance Workbook",
    kicker: "Reusing control evidence",
    summary: "A workbook for spotting when different compliance frameworks ask for similar evidence.",
    description: "It maps related questions across SOC 2, ISO 27001, HIPAA, and DPDPA to help plan interviews and evidence collection.",
    tags: ["Compliance", "Control mapping", "Evidence"],
    accent: "blue",
    metric: "Evidence map",
    flowDiagram: true,
    details: [
      { label: "Role", value: "Workbook and mapping designer" },
      { label: "Business question", value: "Where can one control interview support several framework reviews?" },
      { label: "Architecture", value: "Spreadsheet control crosswalk, evidence register, and gap tracker" },
    ],
    flow: [
      { label: "01", value: "Collect control questions" },
      { label: "02", value: "Map overlapping evidence needs" },
      { label: "03", value: "Track gaps and owners" },
    ],
    caseStudy: {
      challenge: "Teams can be asked for similar proof several times under different framework names.",
      decisions: [
        "Grouped overlap while retaining each framework's distinct question.",
        "Kept evidence ownership visible for review.",
      ],
      outcomes: [
        "A simpler preparation process for several reviews.",
        "A reusable map of overlapping evidence needs.",
      ],
      disclosure: "The workbook does not establish compliance or certification. Internal controls and evidence are not published.",
    },
  },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
