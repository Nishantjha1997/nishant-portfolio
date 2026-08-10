import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "@/data/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};
  const canonical = `/work/${project.slug}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical },
    openGraph: { title: project.title, description: project.summary, url: canonical },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": project.links?.length ? "SoftwareApplication" : "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: { "@type": "Person", name: "Nishant Jha" },
    url: `https://nishant.top/work/${project.slug}`,
    keywords: project.tags.join(", "),
    ...(project.links?.[0] ? { sameAs: project.links[0].href, applicationCategory: "BusinessApplication" } : {}),
  };

  return (
    <article className={`project-detail page-shell accent-${project.accent}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Link className="back-link" href="/#work">← Back to selected work</Link>
      <div className="detail-hero"><p className="eyebrow">{project.kicker}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <div className="detail-layout">
        <div className="detail-art" aria-hidden="true"><span>{project.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span></div>
        <div className="detail-content">
          <p className="detail-description">{project.description}</p>
          <div className="detail-facts">{project.details.map((detail) => <div key={detail.label}><span>{detail.label}</span><strong>{detail.value}</strong></div>)}</div>
          {project.flow && <div className="case-flow"><p className="section-index">THE OPERATING FLOW</p>{project.flow.map((step) => <div className="case-flow-step" key={step.label}><span>{step.label}</span><strong>{step.value}</strong></div>)}</div>}
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
    </article>
  );
}
