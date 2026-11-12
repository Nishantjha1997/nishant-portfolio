import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BotArmy } from "@/components/BotArmy";
import { ProjectCard } from "@/components/ProjectCard";
import { SylvaPortfolio } from "@/components/SylvaPortfolio";
import { projectBySlug, projects } from "@/data/projects";
import { jsonLd, person, personId, siteUrl, websiteId } from "@/lib/seo";


export const metadata: Metadata = {
  title: { absolute: "Nishant Jha | AI Adoption Lead & Builder in Ahmedabad" },
  description: person.metaDescription,
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const impact = [
  { value: "20+", label: "AI bots live across departments" },
  { value: "40+", label: "People trained to run agent teams" },
  { value: "80+", label: "Shared automations in the register" },
  { value: "90%", label: "Less time on support & refund handling" },
];

const experience = [
  { period: "Now", title: "Executive, Founder's Office", company: "CallHippo", summary: "Lead company-wide AI adoption: 20+ bots live, 40+ people trained, and 80+ shared automations. Also build internal systems such as demo scheduling, a tools hub, and revenue signals." },
  { period: "Previous", title: "Executive Assistant to CEO", company: "Sigma Solve", summary: "Built leadership reporting, operating rhythms, dashboards, process improvements, and cross-functional automations." },
  { period: "2024—25", title: "IT Trainer", company: "Vagaro Technologies", summary: "Delivered product training and documentation while supporting SDLC coordination and team mentoring." },
  { period: "2020—24", title: "Customer Support Representative & SME", company: "TTEC India", summary: "Improved support processes and enabled onboarding, software adoption, and subject-matter excellence." },
];

const strengths = [
  "Company-wide AI adoption and training",
  "Agent teams and bot automation design",
  "Problem discovery and requirements",
  "End-to-end, AI-assisted product delivery",
  "Data analysis and decision dashboards",
  "Process design, SOPs, and handover",
  "Deployment, integrations, and release checks",
];

const featuredSlugs = ["grokbot-rollout", "hippomeet", "tools-hub", "gitlab-access-automation"];
const featuredProjects = featuredSlugs.map((slug) => projectBySlug[slug]);
const moreProjects = projects.filter((project) => !featuredSlugs.includes(project.slug));

const credentials = [
  "Microsoft Azure Fundamentals (AZ-900)",
  "CNSS Certified Network Security Specialist",
  "Six Sigma Yellow Belt",
  "SQL: Database Fundamentals",
  "Full Stack & Front-End Development",
  "Bachelor of Computer Application",
];

export default function HomePage() {
  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: "Nishant Jha | AI Adoption Lead in Ahmedabad",
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
    about: { "@id": personId },
    dateModified: "2026-11-12",
    inLanguage: "en-IN",
  };

  return (
    <div className="sylva-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([profilePage])} />
      <SylvaPortfolio />

      <section className="sylva-hero page-shell" id="home">
        <div className="sylva-hero-copy">
          <p className="sylva-kicker"><span /> AI adoption lead · Forward-deployed builder · Ahmedabad</p>
          <h1>Nishant Jha.<br /><em>I turn messy problems into working systems.</em></h1>
          <p className="sylva-lede">I work beside the teams who feel the problem, then design, build, and help roll out the fix. At CallHippo I turned AI agents into a company-wide practice, with 20+ bots doing work that used to be manual. My work also spans automation, business intelligence, and the processes that make a solution stick.</p>
          <div className="sylva-actions">
            <Link className="sylva-button sylva-button-dark glass-button" href="#work"><span aria-hidden="true">☰</span> See the proof</Link>
            <a className="sylva-button sylva-button-light glass-button" href="/api/resume" download>Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <div className="sylva-availability"><i /><span>Currently at CallHippo</span><b>·</b><span>Ahmedabad, India</span></div>
        </div>

        <div className="sylva-hero-cards" aria-label="Nishant Jha profile and impact">
          <article className="profile-specimen sylva-float-card">
            <div className="profile-photo-wrap"><Image src="/images/nishant-jha-profile.jpg" alt="Nishant Jha, AI adoption lead and forward-deployed builder in Ahmedabad" fill priority sizes="(max-width: 720px) 72vw, 340px" /></div>
            <p>Profile / 01</p>
            <h2>Find it.<br />Build it.<br />Make it useful.</h2>
            <Link href="#about" aria-label="Read about Nishant Jha">↘</Link>
          </article>
          <article className="field-note sylva-float-card">
            <p>Current field note</p>
            <h2>Busy work is now bot work.</h2>
            <span>20+ bots · 80+ automations</span>
          </article>
          <div className="hero-metric hero-metric-one"><span>Case studies</span><strong>{projects.length} across product &amp; operations</strong></div>
          <div className="hero-metric hero-metric-two"><span>How I work</span><strong>Discover → build → adopt</strong></div>
        </div>
      </section>

      <section className="sylva-impact page-shell" aria-label="Selected impact">
        {impact.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.value}</strong><p>{item.label}</p></article>)}
      </section>

      <section className="sylva-section sylva-surface glass-surface" id="about">
        <div className="page-shell sylva-about-grid">
          <div><p className="sylva-index">01 / ABOUT</p><h2>Close to the problem.<br /><em>Close to the build.</em></h2></div>
          <div className="sylva-prose"><p>I&apos;m Nishant Jha, a Founder&apos;s Office operator in Ahmedabad with a builder&apos;s instinct. I get into the workflow, talk to the people doing the work, trace the data, and turn an unclear request into something a team can use.</p><p>Lately that means bot armies: I trained 40+ colleagues to run their own agent teams and published shared bots for each department, each with a human check built in.</p><p>I use Claude Code and Codex to build quickly, while owning the requirements, architecture, integrations, and pre-deployment checks. I stay close to adoption, exceptions, ownership, and handover so the result works in daily use.</p><Link href="/about">More about Nishant Jha <span>↗</span></Link> <Link href="/resume">Read the full résumé <span>↗</span></Link></div>
        </div>
      </section>

      <BotArmy />

      <section className="sylva-section sylva-work glass-surface" id="work">
        <div className="page-shell">
          <div className="sylva-section-head"><div><p className="sylva-index">03 / SELECTED WORK</p><h2>Useful change,<br /><em>built end to end.</em></h2></div><p>Four examples of how I turn friction into a working tool, a clearer decision, or a process a team can trust.</p></div>
          <div className="sylva-project-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
          <div className="sylva-more-work-head"><div><p className="sylva-index">MORE WORK</p><h3>More ways I&apos;ve put ideas to work.</h3></div><p>Products, internal systems, research, and decision tools. Each links to the problem, approach, and outcome.</p></div>
          <div className="sylva-more-work-grid">{moreProjects.map((project, index) => <Link className="sylva-more-work-item" href={`/work/${project.slug}`} key={project.slug}><span>{String(index + featuredProjects.length + 1).padStart(2, "0")}</span><div><p>{project.kicker}</p><h4>{project.title}</h4><small>{project.summary}</small></div><b aria-hidden="true">↗</b></Link>)}</div>
        </div>
      </section>

      <section className="sylva-section sylva-surface glass-surface" id="experience">
        <div className="page-shell">
          <div className="sylva-section-head"><div><p className="sylva-index">04 / EXPERIENCE</p><h2>A career built around <em>useful change.</em></h2></div><p>Operations gave me the context; building gave me a way to remove the friction I could see.</p></div>
          <div className="sylva-experience-list">{experience.map((item, index) => <article key={`${item.company}-${item.title}`}><span>{item.period}</span><b>{String(index + 1).padStart(2, "0")}</b><div><p>{item.company}</p><h3>{item.title}</h3><small>{item.summary}</small></div></article>)}</div>
        </div>
      </section>

      <section className="sylva-section sylva-capabilities">
        <div className="page-shell">
          <p className="sylva-index">05 / FIELD KIT</p>
          <div className="sylva-section-head"><h2>How I turn intent<br />into <em>execution.</em></h2><p>Fast delivery matters when the result is useful in the real workflow.</p></div>
          <div className="capability-cards"><article><span>01 / DISCOVER</span><h3>Find the real bottleneck</h3><p>Work with users and leaders to map the decision, the data, and where the current process fails.</p></article><article><span>02 / BUILD</span><h3>Ship the smallest useful system</h3><p>Build an app, automation, dashboard, or decision model that answers the business question.</p></article><article><span>03 / ADOPT</span><h3>Make it part of the work</h3><p>Handle exceptions, document ownership, and refine the tool from what people actually see.</p></article></div>
          <div className="field-kit"><article><p>Operating strengths</p><ul>{strengths.map((strength) => <li key={strength}>{strength}</li>)}</ul></article><article><p>Credentials</p><ul>{credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul></article></div>
        </div>
      </section>

      <section className="sylva-contact page-shell" id="contact">
        <p className="sylva-index">06 / NEXT FIELD NOTE</p>
        <h2>Need someone who can<br /><em>find it and build it?</em></h2>
        <p>I&apos;m interested in roles where business context, practical engineering, and fast learning meet. Tell me what needs to change.</p>
        <div className="sylva-actions"><Link className="sylva-button sylva-button-light glass-button" href="/contact">Start a conversation <span>↗</span></Link><a className="sylva-button sylva-button-ghost glass-button" href={person.linkedin} target="_blank" rel="noreferrer me">LinkedIn <span>↗</span></a></div>
      </section>
    </div>
  );
}
