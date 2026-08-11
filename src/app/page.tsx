import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Mark } from "@/components/Mark";
import { projects } from "@/data/projects";

const impact = [
  { value: "24h -> 30m", label: "eligible GitLab access turnaround" },
  { value: "95%", label: "fewer Apps Script lock collisions" },
  { value: "25%", label: "CSAT improvement through process standardization" },
  { value: "100+", label: "new hires supported through onboarding" },
];

const experience = [
  {
    period: "Current",
    title: "Executive, Founder's Office",
    company: "CallHippo",
    summary: "Current role in the Founder's Office. Public scope details are intentionally limited to approved information.",
  },
  {
    period: "Previous role",
    title: "Executive Assistant to CEO | Founder's Office & Business Operations",
    company: "Sigma Solve",
    summary: "Requirements, leadership reporting, operational dashboards, process improvement, and automation across teams.",
  },
  {
    period: "Dec 2024 - Apr 2025",
    title: "IT Trainer",
    company: "Vagaro Technologies",
    summary: "Product training, documentation, SDLC coordination, and team mentoring.",
  },
  {
    period: "Aug 2020 - Feb 2024",
    title: "Customer Support Representative & SME",
    company: "TTEC India",
    summary: "Support process improvement, onboarding, software enablement, and subject-matter expertise.",
  },
];

const strengths = [
  "Executive operations and decision support",
  "Requirements gathering and stakeholder alignment",
  "Process standardization, SOPs, and SOWs",
  "Node.js automation and API integrations",
  "Google Apps Script, Sheets, and dashboards",
  "Asana, Google Workspace, SQL, Claude AI, and ChatGPT",
];

const credentials = [
  "Microsoft Azure Fundamentals (AZ-900)",
  "ICSI | CNSS Certified Network Security Specialist",
  "Six Sigma Yellow Belt",
  "SQL: Database Fundamentals",
  "Full Stack & Front-End Web Development",
  "Bachelor of Computer Application (BCA)",
];

export default function HomePage() {
  return (
    <>
      <section className="hero page-shell">
        <div className="hero-orbit" aria-hidden="true"><Mark /></div>
        <div className="hero-grid">
          <div className="hero-copy">
        <p className="eyebrow reveal">Executive operations · AI automation · digital products</p>
        <h1 className="reveal delay-1">I turn ambitious ideas into <em>clear, useful systems.</em></h1>
        <p className="hero-lede reveal delay-2">I&apos;m Nishant Jha, an Executive in the Founder&apos;s Office at CallHippo. I work across leadership, operations, engineering, and delivery to move important work from ambiguity to execution.</p>
        <div className="hero-actions reveal delay-3">
          <Link className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></Link>
          <Link className="button button-quiet" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-foot reveal delay-3"><span>Currently at CallHippo</span><span className="status-dot" /><span>Ahmedabad, India · open to thoughtful collaborations</span></div>
          </div>
          <aside className="hero-profile reveal delay-2" aria-label="About Nishant Jha">
            <div className="profile-frame"><Image src="/images/nishant-jha-profile.jpg" alt="Nishant Jha" fill priority sizes="(max-width: 760px) 82vw, 34vw" className="profile-photo" /></div>
            <div className="profile-caption"><span>01 / PROFILE</span><strong>Operator, builder, curious human.</strong></div>
          </aside>
        </div>
      </section>

      <section className="impact-strip page-shell" aria-label="Selected impact">
        {impact.map((item) => <div className="impact-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </section>

      <section className="section page-shell intro-grid">
        <div><p className="section-index">01 / THE THROUGH-LINE</p><h2>Make the complex <em>move.</em></h2></div>
        <div className="intro-copy"><p>My work sits at the intersection of executive leverage and hands-on building. I translate requirements into operating rhythms, dashboards, automations, and products that make the next decision easier.</p><p>Whether it is a leadership initiative, a cross-functional process, or a product I am building end to end, I care about the details that turn a promising idea into dependable daily use.</p></div>
      </section>

      <section id="work" className="section page-shell work-section">
        <div className="section-heading"><div><p className="section-index">02 / SELECTED WORK</p><h2>Things I&apos;ve <em>built.</em></h2></div><p className="section-note">A mix of operating systems, internal tools, and products designed from the ground up.</p></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>

      <section className="section page-shell experience-section">
        <div className="section-heading"><div><p className="section-index">03 / EXPERIENCE</p><h2>Close to the <em>work.</em></h2></div><p className="section-note">Roles shaped by ownership, coordination, and the habit of leaving systems clearer than I found them.</p></div>
        <div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.title}`}><span className="experience-period">{item.period}</span><div><h3>{item.title}</h3><p className="experience-company">{item.company}</p><p>{item.summary}</p></div></article>)}</div>
      </section>

      <section className="section page-shell capability-section">
        <p className="section-index">04 / HOW I WORK</p>
        <div className="capability-grid">
          <article><span>01</span><h3>See the system</h3><p>Map the people, decisions, dependencies, and friction before proposing a fix.</p></article>
          <article><span>02</span><h3>Build the bridge</h3><p>Connect tools and teams with automation that is documented, observable, and easy to hand over.</p></article>
          <article><span>03</span><h3>Make it last</h3><p>Measure the outcome, close the loop, and leave behind a process people can trust.</p></article>
        </div>
        <div className="strengths-grid"><div><p className="section-index">OPERATING STRENGTHS</p><ul>{strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul></div><div><p className="section-index">CREDENTIALS</p><ul>{credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul></div></div>
      </section>

      <section className="closing-cta page-shell"><p className="section-index">05 / NEXT STEP</p><h2>Have a messy problem<br /><em>worth solving?</em></h2><Link className="button button-primary" href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
