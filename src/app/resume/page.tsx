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
    summary: "Translate business needs into internal tools, evidence-led dashboards, AI adoption, and better operating processes with technical teams.",
  },
  {
    period: "Previous role",
    title: "Executive Assistant to CEO | Founder's Office & Business Operations",
    company: "Sigma Solve",
    summary: "Led requirements, leadership reporting, operational dashboards, process improvement, and automation across teams.",
  },
  {
    period: "Dec 2024 - Apr 2025",
    title: "IT Trainer",
    company: "Vagaro Technologies",
    summary: "Delivered product training and documentation while supporting SDLC coordination and team mentoring.",
  },
  {
    period: "Aug 2020 - Feb 2024",
    title: "Customer Support Representative & SME",
    company: "TTEC India",
    summary: "Improved support processes and supported onboarding, software enablement, and subject-matter expertise.",
  },
];

const skills = [
  "Problem discovery and stakeholder alignment",
  "End-to-end workflow and product delivery",
  "AI adoption with human review and source checks",
  "Business intelligence, dashboards, and analytics",
  "Process improvement, SOPs, and handover",
  "Node.js, APIs, Google Apps Script, SQL, and Google Workspace",
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
      <p className="detail-summary">Forward-deployed builder and Founder&apos;s Office professional in Ahmedabad. I turn business problems into working tools, AI workflows, analytics, and processes teams can adopt.</p>

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
              <div><h3>{item.title}</h3><p className="experience-company">{item.company}</p><p>{item.summary}</p></div>
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
        <p className="section-index">03 / SELECTED OUTCOMES</p>
        <h2 id="resume-projects">Selected projects and impact</h2>
        <ul>
          <li><strong>Operational automation:</strong> reduced eligible GitLab access turnaround from up to 24 hours to a maximum 30-minute processing window.</li>
          <li><strong>Fast, safe AI adoption:</strong> identified the Lead Cleanup use case on Jev AI&apos;s second day after launch and kept its suggestions behind deterministic rules and human review.</li>
          <li><strong>Knowledge and analytics:</strong> designed source-backed company answers and an evidence-led meeting dashboard that helps reviewers separate actual lateness from incomplete records.</li>
          <li><strong>End-to-end systems:</strong> built a pre-launch purchase workflow, reporting tools, and live digital products from requirements through implementation.</li>
        </ul>
        <Link className="text-link" href="/#work">Explore Nishant Jha&apos;s portfolio and case studies →</Link>
      </section>

      <p className="fine-print">The downloadable PDF contains the complete contact information intended for recruiting use. Personal phone details are not displayed in public page markup.</p>
    </article>
  );
}
