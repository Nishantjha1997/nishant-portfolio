import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishant.top";

export const metadata: Metadata = {
  title: { absolute: "Nishant Jha Resume | Forward-Deployed Builder" },
  description: "Nishant Jha's resume: end-to-end AI adoption, automation, business intelligence, process improvement, and Founder's Office work in Ahmedabad.",
  alternates: { canonical: "/resume" },
  openGraph: {
    url: "/resume",
    title: "Nishant Jha Resume | Forward-Deployed Builder",
    description: "Experience and selected work across AI adoption, automation, analytics, and operational delivery.",
  },
};

const experience = [
  {
    period: "Current",
    title: "Executive, Founder's Office",
    company: "CallHippo",
    details: [
      "Partner with leadership, operations, and engineering to turn business needs into requirements, internal tools, and reviewable workflows.",
      "Own knowledge structure and assistant behavior for source-backed internal answers, working with the technical team on implementation and hosting.",
      "Design evidence-led meeting reviews and a pre-launch purchase platform with clear ownership, audit records, and human checks.",
    ],
  },
  {
    period: "Previous role",
    title: "Executive Assistant to CEO | Founder's Office & Business Operations",
    company: "Sigma Solve",
    details: [
      "Acted as the CEO's operational right hand, owning priorities and cross-functional follow-through across engineering, delivery, HR, and leadership; supported business-transformation work from intake to closure.",
      "Gathered, analyzed, and documented business requirements, prepared executive briefings and leadership updates, and drove decisions and action items to closure across departments.",
      "Built and maintained workload dashboards, operational reports, and activity logs that gave leadership real-time visibility into capacity, assignments, and delivery risk.",
      "Standardized operating processes, SOPs, and Statements of Work; monitored efficiency and recommended improvements that clarified scope between business and engineering.",
      "Designed and deployed automation across HR systems, Asana, Gmail, Google Sheets, and GitLab, with monitoring, retries, and escalation to reduce manual work and keep records in sync.",
      "Ran the cadence of meetings, reviews, and stakeholder communications; coordinated day-to-day operations and acted as liaison to clients and partners.",
    ],
  },
  {
    period: "Dec 2024 - Apr 2025",
    title: "IT Trainer",
    company: "Vagaro Technologies",
    details: [
      "Delivered training and documentation on proprietary products; coordinated schedules and progress tracking across departments in Asana.",
      "Supported SDLC adherence and reviewed and approved SRS and SDD documents.",
      "Mentored a team of trainers and drove continuous-improvement practices.",
    ],
  },
  {
    period: "Aug 2020 - Feb 2024",
    title: "Customer Support Representative & SME",
    company: "TTEC India",
    details: [
      "Improved CSAT by 25% and reduced resolution time by 25% by standardizing support processes across teams.",
      "Managed onboarding for more than 100 new hires using Asana and learning-management platforms.",
      "Served as a subject-matter expert on software tools.",
    ],
  },
];

const skills = [
  "Problem discovery and stakeholder alignment",
  "AI-assisted implementation with Claude Code and Codex",
  "Architecture, integration, and generated-code review",
  "Workflow, access, and data-safety checks before deployment",
  "Vercel and Netlify deployment; Supabase, Resend, and Clerk integrations",
  "Working understanding of Next.js, Node.js, TypeScript, APIs, Apps Script, and SQL",
  "Business intelligence, process improvement, SOPs, and handover",
];

const credentials = [
  "Microsoft Azure Fundamentals (AZ-900)",
  "ICSI | CNSS Certified Network Security Specialist",
  "Six Sigma Yellow Belt",
  "SQL: Database Fundamentals",
  "Full Stack & Front-End Web Development",
  "Bachelor of Computer Application (BCA)",
];

export default function ResumePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/resume#webpage`,
    url: `${siteUrl}/resume`,
    name: "Nishant Jha Resume",
    description: "Professional resume of Nishant Jha, covering Founder's Office work, executive operations, AI automation, skills, projects, and credentials.",
    about: { "@id": `${siteUrl}/#person` },
    isPartOf: { "@id": `${siteUrl}/#website` },
    inLanguage: "en-IN",
  };

  return (
    <article className="page-shell simple-page resume-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Link className="back-link" href="/">← Back home</Link>
      <p className="eyebrow">NISHANT JHA / RESUME</p>
      <h1>Nishant Jha <em>Resume.</em></h1>
      <p className="detail-summary">Forward-deployed builder and Founder&apos;s Office professional in Ahmedabad. I use Claude Code and Codex to implement business tools, then review the architecture, integrations, and release checks before deployment.</p>

      <div className="resume-panel">
        <div><span className="file-mark">PDF</span><div><strong>Nishant Jha — Resume</strong><p>Business problem → working system → adoption</p></div></div>
        <a className="button button-primary" href="/api/resume" download>Download PDF resume <span aria-hidden="true">↓</span></a>
      </div>

      <section className="resume-section" aria-labelledby="resume-experience">
        <p className="section-index">01 / EXPERIENCE</p>
        <h2 id="resume-experience">Professional experience</h2>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.company}-${item.title}`}>
              <span className="experience-period">{item.period}</span>
              <div><h3>{item.title}</h3><p className="experience-company">{item.company}</p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="resume-skills">
        <p className="section-index">02 / CAPABILITIES</p>
        <h2 id="resume-skills">Skills and credentials</h2>
        <div className="strengths-grid resume-strengths">
          <div><p className="section-index">CORE SKILLS</p><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>
          <div><p className="section-index">EDUCATION & CERTIFICATIONS</p><ul>{credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul></div>
        </div>
      </section>

      <section className="resume-section resume-projects" aria-labelledby="resume-projects">
        <p className="section-index">03 / SELECTED IMPACT</p>
        <h2 id="resume-projects">What the work changed</h2>
        <ul>
          <li><strong>GitLab access:</strong> connected HR, project-assignment, and repository checks in an auditable approval workflow, moving normal eligible requests from up to 24 hours to a maximum 30-minute processing window.</li>
          <li><strong>Early AI adoption:</strong> identified a Lead Cleanup use case on Jev AI&apos;s second day after launch and integrated suggestions into an existing qualification flow, with deterministic rules and human review controlling decisions.</li>
          <li><strong>Operational visibility:</strong> brought workload, delivery signals, and meeting join evidence into reviewable dashboards so leaders can see capacity risk and reviewers can separate a client wait from missing attendance data.</li>
        </ul>
        <Link className="text-link" href="/#work">Explore Nishant Jha&apos;s portfolio and case studies →</Link>
      </section>

      <p className="fine-print">The downloadable PDF contains the complete contact information intended for recruiting use. Personal phone details are not displayed in public page markup.</p>
    </article>
  );
}
