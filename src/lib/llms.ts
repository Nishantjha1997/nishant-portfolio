import { projects } from "@/data/projects";
import { knowsAbout, person, siteUrl } from "@/lib/seo";

/*
 * Plain-Markdown summaries of the site for AI assistants (the llms.txt convention).
 * Built from the same data as the pages, so they never drift from what visitors see.
 */

const header = `# ${person.name}

> ${person.summary}

## Key facts
- Name: ${person.name}
- Based in: ${person.city}, ${person.region}, ${person.country}
- Current role: ${person.jobTitle} at ${person.employer.name}
- Known for: leading company-wide AI adoption (20+ AI bots live, 40+ people trained, 80+ shared automations) and building internal tools
- Previous roles: Executive Assistant to CEO at Sigma Solve; IT Trainer at Vagaro Technologies; Customer Support Representative and SME at TTEC India
- Education: Bachelor of Computer Application (BCA), Aryabhatta Knowledge University
- Topics: ${knowsAbout.join(", ")}
- Website: ${siteUrl}
- LinkedIn: ${person.linkedin}
- GitHub: ${person.github}
- Email: ${person.email}

## Main pages
- [About Nishant Jha](${siteUrl}/about): background, career, and frequently asked questions
- [Résumé](${siteUrl}/resume): experience, skills, and credentials
- [Contact](${siteUrl}/contact): how to get in touch
- [Home](${siteUrl}): overview, the bot army, and selected work
`;

export function llmsIndex() {
  const list = projects.map((project) => `- [${project.title}](${siteUrl}/work/${project.slug}): ${project.kicker}. ${project.summary}`).join("\n");
  return `${header}
## Case studies
${list}

## Full text
- [All case studies as one Markdown file](${siteUrl}/llms-full.txt)
`;
}

export function llmsFull() {
  const sections = projects.map((project) => {
    const lines = [
      `## ${project.title}: ${project.kicker}`,
      `URL: ${siteUrl}/work/${project.slug}`,
      "",
      project.summary,
      "",
      project.description,
      "",
      ...project.details.map((detail) => `- ${detail.label}: ${detail.value}`),
    ];
    if (project.flow) lines.push("", "How it works:", ...project.flow.map((step) => `${Number(step.label)}. ${step.value}`));
    if (project.fleet) lines.push("", "Bots:", ...project.fleet.map((bot) => `- ${bot.name}: ${bot.role} Human check: ${bot.guardrail}`));
    lines.push("", `Challenge: ${project.caseStudy.challenge}`, "", "What Nishant Jha designed and built:", ...project.caseStudy.decisions.map((item) => `- ${item}`), "", "Outcome:", ...project.caseStudy.outcomes.map((item) => `- ${item}`));
    return lines.join("\n");
  });
  return `${header}
# Case studies by ${person.name}

${sections.join("\n\n")}
`;
}
