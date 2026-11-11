"""Build the public, recruiting-focused resume PDF."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "resume" / "Nishant-Jha-Resume.pdf"
INK = colors.HexColor("#263026")
MUTED = colors.HexColor("#586358")
GREEN = colors.HexColor("#4C6744")
ACID = colors.HexColor("#D9FF54")

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=25, leading=29, textColor=INK),
    "subtitle": ParagraphStyle("subtitle", fontName="Helvetica", fontSize=11, leading=15, textColor=GREEN),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=13, textColor=MUTED),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=13, textColor=GREEN, spaceBefore=13, spaceAfter=6),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=INK, spaceBefore=8),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=8.9, leading=13.8, textColor=INK, spaceAfter=4),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=8.9, leading=13.8, textColor=INK, leftIndent=12, bulletIndent=1, spaceAfter=5),
}


def p(text, style="body"):
    return Paragraph(text, styles[style])


def section(title):
    return p(title.upper(), "section")


def bullet(text):
    return Paragraph(text, styles["bullet"], bulletText="-")


def footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(colors.HexColor("#30362F"))
    canvas.rect(0, height - 5 * mm, width, 5 * mm, stroke=0, fill=1)
    canvas.setFillColor(ACID)
    canvas.rect(19 * mm, height - 5 * mm, 30 * mm, 1.5 * mm, stroke=0, fill=1)
    canvas.setStrokeColor(colors.HexColor("#CAD5C7"))
    canvas.line(19 * mm, 17 * mm, 191 * mm, 17 * mm)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(19 * mm, 12 * mm, "Nishant Jha  |  nishant.top")
    canvas.drawRightString(191 * mm, 12 * mm, str(doc.page))
    canvas.restoreState()


story = [
    p("Nishant Jha", "name"),
    p("AI adoption lead  |  Forward-deployed builder  |  Founder's Office", "subtitle"),
    Spacer(1, 5 * mm),
    p("Ahmedabad, India  |  nishant@nishant.top  |  +91 82104 99970", "contact"),
    p("Alternative: nishantjha31@gmail.com  |  Portfolio: nishant.top  |  GitHub: github.com/Nishantjha1997", "contact"),
    section("Profile"),
    p("Founder's Office professional and AI-assisted builder who turns business needs into working systems. I gather requirements with stakeholders, map the workflow and data, build automations, dashboards, and internal tools, and support adoption through documentation, review paths, and handover."),
    p("My work spans executive operations, safe AI adoption, process improvement, and full-stack products. I translate between leadership and technical teams while keeping decisions traceable and useful in daily work."),
    section("Selected impact"),
    bullet("<b>Company-wide AI adoption:</b> Rolled out GrokBot agent teams across CallHippo: 20+ bots live across analytics, finance, SEO and marketing, operations, and support; 40+ people trained; 80+ shared automations tracked with owner, schedule, and status. Support and refund handling time fell by about 90%."),
    bullet("<b>GitLab access:</b> Connected HR, project-assignment, and GitLab checks in an auditable approval workflow. Normal eligible requests moved from up to 24 hours to a maximum 30-minute processing window; elevated permissions still require approval."),
    bullet("<b>Early AI adoption:</b> On Jev AI's second day after launch, identified lead qualification as a practical use case and integrated AI suggestions into an existing contact-cleanup process. Clear cases follow deterministic rules; ambiguous leads stay in a human review queue with an audit trail."),
    section("Professional experience"),
]

story += [
    KeepTogether([
        p("Executive, Founder's Office  |  CallHippo  |  Current", "role"),
        bullet("Lead company-wide AI adoption: trained 40+ people, published shared department-head bots, and built a register of 80+ team automations with a human approval step in every bot that acts."),
        bullet("Built the Support Head and Refund bots (cited answers; account-history checks before refunds), cutting handling time by about 90%."),
        bullet("Built and shipped HippoMeet (website demo booking with sales-team routing) and Tools Hub (one sign-in home for six internal tools)."),
        bullet("Flagged about $10K MRR of at-risk accounts before renewal, designed a controlled price-change test, and set up hiring and an agent team for a new AI builders function."),
        bullet("Also delivered source-backed internal answers, an evidence-led sales meeting review, and a purchase platform with audit records and human checks."),
    ]),
    p("Executive Assistant to CEO, Founder's Office  |  Sigma Solve  |  Previous role", "role"),
    bullet("Acted as the CEO's operational right hand, owning priorities and cross-functional follow-through across engineering, delivery, HR, and leadership; supported business-transformation work from intake to closure."),
    bullet("Gathered, analyzed, and documented business requirements, prepared executive briefings and leadership updates, and drove decisions and action items to closure across departments."),
    bullet("Built and maintained workload dashboards, operational reports, and activity logs that gave leadership real-time visibility into capacity, assignments, and delivery risk."),
    bullet("Standardized operating processes, SOPs, and Statements of Work; monitored efficiency and recommended improvements that clarified scope between business and engineering."),
    bullet("Designed and deployed automation across HR systems, Asana, Gmail, Google Sheets, and GitLab, with monitoring, retries, and escalation to reduce manual work and keep records in sync."),
    bullet("Ran the cadence of meetings, reviews, and stakeholder communications; coordinated day-to-day operations and acted as liaison to clients and partners."),
    KeepTogether([
        p("IT Trainer  |  Vagaro Technologies  |  Dec 2024 - Apr 2025", "role"),
        bullet("Delivered training and documentation on proprietary products; coordinated schedules and progress tracking across departments in Asana."),
        bullet("Supported SDLC adherence and reviewed and approved SRS and SDD documents."),
        bullet("Mentored a team of trainers and drove continuous-improvement practices."),
    ]),
    KeepTogether([
        p("Customer Support Representative and SME  |  TTEC India  |  Aug 2020 - Feb 2024", "role"),
        bullet("Improved CSAT by 25% and reduced resolution time by 25% by standardizing support processes across teams."),
        bullet("Managed onboarding for more than 100 new hires using Asana and learning-management platforms."),
        bullet("Served as a subject-matter expert on software tools."),
    ]),
    section("Selected projects"),
    bullet("<b>GrokBot rollout and bot fleet:</b> Executive Assistant orchestrator, Support Head, Refund, Business Analyst (report packs posted only after approval), read-only marketing and SEO audit bots, finance deadline bots, and a booking agent that never handles payment."),
    bullet("<b>HippoMeet and Tools Hub:</b> Self-hosted demo scheduling with per-rep hours and team routing; one Google sign-in home for internal tools and workflow maps."),
    bullet("<b>Lead Cleanup:</b> Built a contact qualification flow for CSV and XLSX exports with duplicate checks, explainable rules, provisional Jev AI suggestions, and a reviewer queue before outreach export."),
    bullet("<b>Sales Meeting Punctuality:</b> Combined scheduled meeting times with measured join evidence in a reviewer dashboard; uncertain records remain unverified rather than becoming performance findings."),
    bullet("<b>Purchase Management:</b> Built a pre-launch request-to-payment workflow with role-based approvals, audit records, and purchase-order, receipt, and invoice matching."),
    bullet("<b>Independent products:</b> Built MakeCV, StreamFree, and YT Transcriber across AI-assisted workflows, responsive web experiences, and resilient data extraction."),
    section("Skills and tools"),
    p("<b>Business:</b> Requirements, process design, decision support, reporting, stakeholder management, SOPs, and training."),
    p("<b>AI-assisted delivery:</b> Use Claude Code and Codex to build; understand the architecture and stack, review generated changes, and check workflows, access, and data safety before deployment."),
    p("<b>Platforms and stack used:</b> Deploy on Vercel and Netlify; integrate Supabase, Resend, and Clerk. Projects have used Next.js, Node.js, TypeScript, SQL, APIs, and Google Apps Script."),
    section("Certifications"),
    p("Microsoft Azure Fundamentals (AZ-900)  |  CNSS Certified Network Security Specialist  |  Six Sigma Yellow Belt  |  SQL: Database Fundamentals  |  Full Stack and Front-End Development"),
    section("Education"),
    p("Bachelor of Computer Application (BCA), Aryabhatta Knowledge University"),
]

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4, rightMargin=19 * mm, leftMargin=19 * mm,
    topMargin=18 * mm, bottomMargin=23 * mm, title="Nishant Jha Resume",
    author="Nishant Jha", subject="AI adoption lead, forward-deployed builder, and Founder's Office resume",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
