import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      className={`project-card accent-${project.accent}`}
      data-reveal="item"
      href={`/work/${project.slug}`}
      style={{ "--card-index": index } as React.CSSProperties}
      aria-label={`Read the ${project.title} case study`}
    >
      <div className="card-topline">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.metric}</span>
      </div>
      <div className="card-art" aria-hidden="true"><span>{project.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span></div>
      <div className="card-copy">
        <p className="eyebrow">{project.kicker}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </Link>
  );
}
