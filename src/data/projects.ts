export type Project = {
  slug: string;
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
  caseStudy: {
    challenge: string;
    decisions: string[];
    outcomes: string[];
    disclosure?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "flowcreate",
    title: "FlowCreate",
    kicker: "AI resume builder",
    summary: "A guided, ATS-aware workspace that turns career information into polished, export-ready resumes.",
    description: "FlowCreate combines structured prompts, reusable layouts, live preview, and export workflows into one focused experience. It is designed to remove the blank-page problem while keeping the user in control of the final story.",
    tags: ["Product design", "AI workflows", "Next.js", "UX systems"],
    accent: "coral",
    metric: "30+ templates",
    links: [{ label: "Open live project", href: "https://flowcreate-similar-dream.vercel.app/" }],
    details: [
      { label: "Role", value: "Product owner and builder" },
      { label: "Focus", value: "Guided creation, preview, export" },
      { label: "Outcome", value: "A faster path from raw experience to a strong first draft" },
    ],
    flow: [
      { label: "01", value: "Capture experience and intent" },
      { label: "02", value: "Guide content with structured prompts" },
      { label: "03", value: "Edit, preview, and export" },
    ],
    caseStudy: {
      challenge: "Resume tools often force people to choose between generic templates and a blank page. FlowCreate needed to provide enough structure to create momentum without taking ownership of the user's story.",
      decisions: [
        "Designed a guided content flow around the decisions applicants actually make.",
        "Built more than 30 ATS-aware layouts with live editing and preview.",
        "Kept export and customization inside the same focused workspace.",
      ],
      outcomes: [
        "A complete journey from raw career information to an export-ready resume.",
        "Reusable product patterns for guided AI assistance, preview, and document generation.",
      ],
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
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
