import "./flow-diagram.css";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "@/data/projects";
import { breadcrumbs, jsonLd, personId, siteUrl, websiteId } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};
  const canonical = `/work/${project.slug}`;
  const title = `${project.title}: ${project.kicker}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical },
    authors: [{ name: "Nishant Jha", url: `${siteUrl}/about` }],
    openGraph: { type: "article", title: `${title} | Nishant Jha`, description: project.summary, url: canonical, authors: [`${siteUrl}/about`], ...(project.updatedAt ? { modifiedTime: project.updatedAt } : {}) },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const url = `${siteUrl}/work/${project.slug}`;
  const article = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: `${project.title}: ${project.kicker}`,
    name: project.title,
    description: project.summary,
    url,
    mainEntityOfPage: url,
    image: `${siteUrl}/opengraph-image`,
    author: { "@id": personId },
    creator: { "@id": personId },
    publisher: { "@id": personId },
    isPartOf: { "@id": websiteId },
    keywords: project.tags.join(", "),
    inLanguage: "en-IN",
    ...(project.updatedAt ? { dateModified: project.updatedAt } : {}),
    ...(project.links?.[0] ? { mentions: { "@type": "WebSite", name: project.title, url: project.links[0].href } } : {}),
  };
  const updated = project.updatedAt ? new Date(`${project.updatedAt}T00:00:00Z`) : null;
  const index = projects.findIndex((item) => item.slug === project.slug);
  const related = [1, 2, 3].map((offset) => projects[(index + offset) % projects.length]);

  return (
    <article className={`project-detail page-shell accent-${project.accent}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([article, breadcrumbs([{ name: "Work", path: "/#work" }, { name: project.title, path: `/work/${project.slug}` }])])} />
      <Link className="back-link" href="/#work">← Back to selected work</Link>
      <div className="detail-hero"><p className="eyebrow">{project.kicker}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><p className="detail-byline">By <Link href="/about" rel="author">Nishant Jha</Link> · Ahmedabad{updated ? <> · Updated <time dateTime={project.updatedAt}>{updated.toLocaleDateString("en-IN", { month: "long", year: "numeric", timeZone: "UTC" })}</time></> : null}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <div className="detail-layout">
        <div className="detail-art" aria-hidden="true"><span>{project.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span></div>
        <div className="detail-content">
          <p className="detail-description">{project.description}</p>
          <div className="detail-facts">{project.details.map((detail) => <div key={detail.label}><span>{detail.label}</span><strong>{detail.value}</strong></div>)}</div>
          {project.flow && <div className={`case-flow${project.flowDiagram ? " case-flow-diagram" : ""}`}><p className="section-index">THE OPERATING FLOW</p>{project.flow.map((step) => <div className="case-flow-step" key={step.label}><span>{step.label}</span><strong>{step.value}</strong></div>)}</div>}
          {project.fleet && <section className="case-fleet" aria-labelledby="case-fleet-heading"><p className="section-index" id="case-fleet-heading">THE BOT FLEET</p><div className="detail-facts">{project.fleet.map((bot) => <div key={bot.name}><span>{bot.name}</span><strong>{bot.role}<small>{bot.guardrail}</small></strong></div>)}</div></section>}
          <section className="case-study" aria-labelledby="case-study-heading">
            <p className="section-index" id="case-study-heading">CASE STUDY</p>
            <div className="case-block"><h2>The challenge</h2><p>{project.caseStudy.challenge}</p></div>
            <div className="case-block"><h2>What I designed and built</h2><ul>{project.caseStudy.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div>
            <div className="case-block"><h2>Outcome</h2><ul>{project.caseStudy.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div>
            {project.caseStudy.disclosure ? <p className="case-disclosure">{project.caseStudy.disclosure}</p> : null}
          </section>
          <div className="detail-links">{project.links?.map((link) => <a className="button button-primary" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>
        </div>
      </div>
      <nav className="detail-related" aria-label="More case studies by Nishant Jha">
        <p className="section-index">MORE WORK BY NISHANT JHA</p>
        <div>{related.map((item) => <Link href={`/work/${item.slug}`} key={item.slug}><span>{item.kicker}</span><strong>{item.title}</strong><small>{item.summary}</small></Link>)}</div>
      </nav>
    </article>
  );
}
