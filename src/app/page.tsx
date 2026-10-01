import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { SylvaPortfolio } from "@/components/SylvaPortfolio";
import { projects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishant.top";

export const metadata: Metadata = {
  title: "Nishant Jha in Ahmedabad | Founder's Office & AI Automation",
  description: "Nishant Jha is a Founder's Office executive at CallHippo in Ahmedabad, India, building AI automations, operating systems, and useful digital products.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const impact = [
  { value: "24h → 30m", label: "Eligible access turnaround" },
  { value: "95%", label: "Fewer lock collisions" },
  { value: "25%", label: "CSAT improvement" },
  { value: "100+", label: "New hires supported" },
];

const experience = [
  { period: "Now", title: "Executive, Founder's Office", company: "CallHippo", summary: "Working across leadership, operations, engineering, and delivery to turn important priorities into dependable execution." },
  { period: "Previous", title: "Executive Assistant to CEO", company: "Sigma Solve", summary: "Built leadership reporting, operating rhythms, dashboards, process improvements, and cross-functional automations." },
  { period: "2024—25", title: "IT Trainer", company: "Vagaro Technologies", summary: "Delivered product training and documentation while supporting SDLC coordination and team mentoring." },
  { period: "2020—24", title: "Customer Support Representative & SME", company: "TTEC India", summary: "Improved support processes and enabled onboarding, software adoption, and subject-matter excellence." },
];

const strengths = [
  "Executive operations and decision support",
  "Requirements and stakeholder alignment",
  "Process design, SOPs, and SOWs",
  "AI automation and internal tools",
  "Node.js, APIs, Apps Script, and SQL",
  "Dashboards and operating systems",
];

const credentials = [
  "Microsoft Azure Fundamentals (AZ-900)",
  "CNSS Certified Network Security Specialist",
  "Six Sigma Yellow Belt",
  "SQL: Database Fundamentals",
  "Full Stack & Front-End Development",
  "Bachelor of Computer Application",
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Nishant Jha", inLanguage: "en-IN" },
      { "@type": "Person", "@id": `${siteUrl}/#person`, name: "Nishant Jha", alternateName: "Nishant", url: siteUrl, image: `${siteUrl}/images/nishant-jha-profile.jpg`, email: "nishant@nishant.top", jobTitle: "Executive, Founder's Office", homeLocation: { "@type": "Place", name: "Ahmedabad, Gujarat, India" }, sameAs: ["https://www.linkedin.com/in/nishant-jha-059828104/", "https://github.com/Nishantjha1997"] },
    ],
  };

  return (
    <div className="sylva-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SylvaPortfolio />

      <section className="sylva-hero page-shell" id="home">
        <div className="sylva-hero-copy">
          <p className="sylva-kicker"><span /> Founder&apos;s Office · AI automation · product systems</p>
          <h1>Nishant Jha.<br /><em>I make complex work feel clear.</em></h1>
          <p className="sylva-lede">I work where leadership, operations, and technology meet—turning ambitious ideas into operating systems, automations, and digital products people can rely on.</p>
          <div className="sylva-actions">
            <Link className="sylva-button sylva-button-dark glass-button" href="#work"><span aria-hidden="true">☰</span> Explore my work</Link>
            <a className="sylva-button sylva-button-light glass-button" href="/api/resume" download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <div className="sylva-availability"><i /><span>Currently at CallHippo</span><b>·</b><span>Ahmedabad, India</span></div>
        </div>

        <div className="sylva-hero-cards" aria-label="Nishant Jha profile and impact">
          <article className="profile-specimen sylva-float-card">
            <div className="profile-photo-wrap"><Image src="/images/nishant-jha-profile.jpg" alt="Nishant Jha" fill priority sizes="(max-width: 720px) 72vw, 340px" /></div>
            <p>Profile / 01</p>
            <h2>Operator.<br />Builder.<br />Curious human.</h2>
            <Link href="#about" aria-label="Read about Nishant Jha">↘</Link>
          </article>
          <article className="field-note sylva-float-card">
            <p>Current field note</p>
            <h2>Turning ambiguity into momentum.</h2>
            <span>Founder&apos;s Office</span>
          </article>
          <div className="hero-metric hero-metric-one"><span>Products shipped</span><strong>6+</strong></div>
          <div className="hero-metric hero-metric-two"><span>Primary mode</span><strong>Build + operate</strong></div>
        </div>
      </section>

      <section className="sylva-impact page-shell" aria-label="Selected impact">
        {impact.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.value}</strong><p>{item.label}</p></article>)}
      </section>

      <section className="sylva-section sylva-surface glass-surface" id="about">
        <div className="page-shell sylva-about-grid">
          <div><p className="sylva-index">01 / ABOUT</p><h2>Close to the decision.<br /><em>Close to the work.</em></h2></div>
          <div className="sylva-prose"><p>I&apos;m a Founder&apos;s Office and business operations professional who also builds. I translate requirements into operating rhythms, dashboards, AI automations, and digital products that make the next decision easier.</p><p>I care about the details between a promising idea and dependable daily use: ownership, handoffs, failure states, documentation, measurement, and the people who need the system to work.</p><Link href="/resume">Read the full résumé <span>↗</span></Link></div>
        </div>
      </section>

      <section className="sylva-section sylva-work glass-surface" id="work">
        <div className="page-shell">
          <div className="sylva-section-head"><div><p className="sylva-index">02 / SELECTED WORK</p><h2>Things I&apos;ve <em>built.</em></h2></div><p>Products and operating systems designed to remove friction, surface decisions, and keep working after handoff.</p></div>
          <div className="sylva-project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>

      <section className="sylva-section sylva-surface glass-surface" id="experience">
        <div className="page-shell">
          <div className="sylva-section-head"><div><p className="sylva-index">03 / EXPERIENCE</p><h2>A career built around <em>useful change.</em></h2></div><p>Roles shaped by ownership, coordination, and leaving systems clearer than I found them.</p></div>
          <div className="sylva-experience-list">{experience.map((item, index) => <article key={`${item.company}-${item.title}`}><span>{item.period}</span><b>{String(index + 1).padStart(2, "0")}</b><div><p>{item.company}</p><h3>{item.title}</h3><small>{item.summary}</small></div></article>)}</div>
        </div>
      </section>

      <section className="sylva-section sylva-capabilities">
        <div className="page-shell">
          <p className="sylva-index">04 / FIELD KIT</p>
          <div className="sylva-section-head"><h2>How I turn intent<br />into <em>execution.</em></h2><p>Strategy is useful when it becomes a rhythm, a tool, or a decision someone can actually use.</p></div>
          <div className="capability-cards"><article><span>01</span><h3>See the system</h3><p>Map people, decisions, dependencies, and friction before proposing a fix.</p></article><article><span>02</span><h3>Build the bridge</h3><p>Connect teams and tools with automation that is observable and easy to hand over.</p></article><article><span>03</span><h3>Make it last</h3><p>Measure the outcome, close the loop, and leave behind a process people trust.</p></article></div>
          <div className="field-kit"><article><p>Operating strengths</p><ul>{strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul></article><article><p>Credentials</p><ul>{credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul></article></div>
        </div>
      </section>

      <section className="sylva-contact page-shell" id="contact">
        <p className="sylva-index">05 / NEXT FIELD NOTE</p>
        <h2>Have a messy problem<br /><em>worth solving?</em></h2>
        <p>Tell me what is stuck, what matters, and what better would look like.</p>
        <div className="sylva-actions"><Link className="sylva-button sylva-button-light glass-button" href="/contact">Start a conversation <span>↗</span></Link><a className="sylva-button sylva-button-ghost glass-button" href="https://www.linkedin.com/in/nishant-jha-059828104/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
      </section>
    </div>
  );
}
