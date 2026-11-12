import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbs, jsonLd, person, personId, siteUrl, websiteId } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "About Nishant Jha | AI Adoption Lead, Ahmedabad" },
  description: "Who is Nishant Jha? An AI adoption lead and forward-deployed builder in Ahmedabad, India, in the Founder's Office at CallHippo. Background, work, and FAQ.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: "About Nishant Jha | AI Adoption Lead, Ahmedabad",
    description: "Background, work, and skills of Nishant Jha, AI adoption lead and forward-deployed builder in Ahmedabad.",
    firstName: "Nishant",
    lastName: "Jha",
  },
};

const timeline = [
  { period: "Now", role: "Executive, Founder's Office", org: "CallHippo, Ahmedabad", text: "Leads company-wide AI adoption: 20+ AI bots live across analytics, finance, SEO and marketing, operations, and support; 40+ people trained; 80+ shared automations. Also built HippoMeet (sales demo scheduling), Tools Hub, and revenue and churn signals." },
  { period: "Previous", role: "Executive Assistant to CEO", org: "Sigma Solve", text: "The CEO's operational right hand: leadership reporting, dashboards, SOPs, and automations across HR systems, Asana, Gmail, Google Sheets, and GitLab." },
  { period: "2024–25", role: "IT Trainer", org: "Vagaro Technologies", text: "Product training and documentation, SDLC coordination, and mentoring a team of trainers." },
  { period: "2020–24", role: "Customer Support Representative & SME", org: "TTEC India", text: "Improved CSAT and resolution time by 25% each and onboarded 100+ new hires." },
];

const faqs = [
  {
    q: "Who is Nishant Jha?",
    a: `${person.summary} Before CallHippo, he was Executive Assistant to the CEO at Sigma Solve, an IT trainer at Vagaro Technologies, and a support subject-matter expert at TTEC India.`,
  },
  {
    q: "Where is Nishant Jha based?",
    a: "Nishant Jha is based in Ahmedabad, Gujarat, India.",
  },
  {
    q: "What does Nishant Jha do at CallHippo?",
    a: "He works in the Founder's Office. Alongside working with leadership on priorities and operations, he leads AI adoption: he trained 40+ colleagues to run their own AI agent teams, published shared department bots, and keeps a register of 80+ team automations, each with a human check. The Support Head and Refund bots cut support and refund handling time by about 90%.",
  },
  {
    q: "What has Nishant Jha built?",
    a: "Company-wide GrokBot agent teams, HippoMeet (website demo booking with sales-team routing), Tools Hub (one sign-in home for internal tools), GitLab access automation (access requests cut from up to 24 hours to 30 minutes), revenue and churn signals, and independent products such as MakeCV, StreamFree, and YT Transcriber.",
  },
  {
    q: "What tools does Nishant Jha use?",
    a: "AI agents (Grok Bot team bots), Claude Code and Codex for building, Next.js and TypeScript, Google Apps Script, n8n, Vercel, Supabase, and dashboards for business intelligence.",
  },
  {
    q: "How can I contact Nishant Jha?",
    a: `Email ${person.email}, use the contact page on nishant.top, or connect on LinkedIn.`,
  },
];

export default function AboutPage() {
  const graph = [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/about#profilepage`,
      url: `${siteUrl}/about`,
      name: "About Nishant Jha",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      dateModified: "2026-11-12",
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/about#faq`,
      mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
    },
    breadcrumbs([{ name: "About", path: "/about" }]),
  ];

  return (
    <article className="page-shell simple-page resume-page about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      <Link className="back-link" href="/">← Back home</Link>
      <p className="eyebrow">ABOUT / NISHANT JHA</p>
      <h1>About Nishant <em>Jha.</em></h1>
      <p className="detail-summary">{person.summary}</p>

      <section className="resume-section" aria-labelledby="about-now">
        <p className="section-index">01 / WHAT I DO</p>
        <h2 id="about-now">AI adoption, built end to end</h2>
        <div className="about-prose">
          <p>I&apos;m Nishant Jha, and I live and work in Ahmedabad. In the Founder&apos;s Office at CallHippo I work with leadership on priorities, operations, and decisions. AI has turned a growing part of that job into building: I find the manual work in each team, build bots and internal tools to take it over, and help people adopt them.</p>
          <p>So far that means 20+ AI bots live across business and data analytics, finance, SEO and marketing, internal operations, and support; 40+ colleagues trained to run their own agent teams; and a shared register of 80+ automations, each with an owner, a schedule, and a human check.</p>
          <p>See the <Link href="/work/grokbot-rollout">GrokBot rollout case study</Link>, the <Link href="/#bots">bot army overview</Link>, or <Link href="/#work">all selected work</Link>.</p>
        </div>
      </section>

      <section className="resume-section" aria-labelledby="about-path">
        <p className="section-index">02 / CAREER</p>
        <h2 id="about-path">How I got here</h2>
        <div className="experience-list">
          {timeline.map((item) => (
            <article className="experience-item" key={item.org}>
              <span className="experience-period">{item.period}</span>
              <div><h3>{item.role}</h3><p className="experience-company">{item.org}</p><p>{item.text}</p></div>
            </article>
          ))}
        </div>
        <p className="about-prose">Education: Bachelor of Computer Application (BCA), Aryabhatta Knowledge University. Certifications include Microsoft Azure Fundamentals (AZ-900), CNSS Certified Network Security Specialist, and Six Sigma Yellow Belt. <Link href="/resume">Full résumé →</Link></p>
      </section>

      <section className="resume-section" aria-labelledby="about-faq">
        <p className="section-index">03 / FAQ</p>
        <h2 id="about-faq">Questions about Nishant Jha</h2>
        <div className="about-faq">
          {faqs.map((item) => (
            <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>
          ))}
        </div>
      </section>

      <section className="resume-section" aria-labelledby="about-elsewhere">
        <p className="section-index">04 / ELSEWHERE</p>
        <h2 id="about-elsewhere">Find me online</h2>
        <div className="contact-links">
          <a href={person.linkedin} target="_blank" rel="noreferrer me">LinkedIn ↗</a>
          <a href={person.github} target="_blank" rel="noreferrer me">GitHub ↗</a>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <Link href="/contact">Contact page →</Link>
        </div>
      </section>
    </article>
  );
}
