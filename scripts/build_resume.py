"""Build the public, recruiting-focused resume PDF."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
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
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=13, textColor=GREEN, spaceBefore=17, spaceAfter=7),
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
    p("Forward-deployed builder  |  Founder's Office  |  AI and automation", "subtitle"),
    Spacer(1, 5 * mm),
    p("Ahmedabad, India  |  nishant@nishant.top  |  +91 82104 99970", "contact"),
    p("Alternative: nishantjha31@gmail.com  |  Portfolio: nishant.top  |  GitHub: github.com/Nishantjha1997", "contact"),
    section("Profile"),
    p("Founder's Office professional and hands-on builder who turns business needs into working systems. I gather requirements with stakeholders, map the workflow and data, build automations, dashboards, and internal tools, and support adoption through documentation, review paths, and handover."),
    p("My work spans executive operations, safe AI adoption, process improvement, and full-stack products. I translate between leadership and technical teams while keeping decisions traceable and useful in daily work."),
    section("Selected impact"),
    bullet("<b>GitLab access:</b> Connected HR, project-assignment, and GitLab checks in an auditable approval workflow. Normal eligible requests moved from up to 24 hours to a maximum 30-minute processing window; elevated permissions still require approval."),
    bullet("<b>Early AI adoption:</b> On Jev AI's second day after launch, identified lead qualification as a practical use case and integrated AI suggestions into an existing contact-cleanup process. Clear cases follow deterministic rules; ambiguous leads stay in a human review queue with an audit trail."),
    bullet("<b>Operational visibility:</b> Built dashboards that bring workload, delivery signals, and meeting join evidence into reviewable views. Leaders and reviewers can see capacity risk and distinguish a client waiting from incomplete attendance data."),
    section("Professional experience"),
]

story += [
    KeepTogether([
        p("Executive, Founder's Office  |  CallHippo  |  Current", "role"),
        bullet("Partner with leadership, operations, and engineering to turn business needs into requirements, internal tools, and reviewable workflows."),
        bullet("Owned knowledge structure and assistant behavior for source-backed internal answers; worked with the technical team on server implementation and hosting."),
        bullet("Designed an evidence-led sales meeting review and a pre-launch purchase platform with clear ownership, audit records, and human checks."),
    ]),
    KeepTogether([
        p("Executive Assistant to CEO, Founder's Office  |  Sigma Solve  |  Previous role", "role"),
        bullet("Acted as the CEO's operational right hand, owning priorities and cross-functional follow-through across engineering, delivery, HR, and leadership; supported business-transformation work from intake to closure."),
        bullet("Gathered and documented business requirements, prepared executive briefings and leadership updates, and drove decisions and action items to closure across departments."),
        bullet("Built and maintained workload dashboards, operational reports, and activity logs that gave leadership real-time visibility into capacity, assignments, and delivery risk."),
        bullet("Standardized operating processes, SOPs, and Statements of Work; monitored efficiency and recommended improvements that clarified scope between business and engineering."),
    ]),
    PageBreak(),
    p("Nishant Jha  |  Experience and selected work", "subtitle"),
    section("Professional experience (continued)"),
    p("Executive Assistant to CEO  |  Sigma Solve (continued)", "role"),
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
    bullet("<b>Lead Cleanup:</b> Built a contact qualification flow for CSV and XLSX exports with duplicate checks, explainable rules, provisional Jev AI suggestions, and a reviewer queue before outreach export."),
    bullet("<b>Ask CallHippo:</b> Organized approved knowledge and source checks so employees can find routine company answers with citations they can verify."),
    bullet("<b>Sales Meeting Punctuality:</b> Combined scheduled meeting times with measured join evidence in a reviewer dashboard; uncertain records remain unverified rather than becoming performance findings."),
    bullet("<b>Purchase Management:</b> Built a pre-launch request-to-payment workflow with role-based approvals, audit records, and purchase-order, receipt, and invoice matching."),
    bullet("<b>Independent products:</b> Built MakeCV, StreamFree, and YT Transcriber across AI-assisted workflows, responsive web experiences, and resilient data extraction."),
    section("Skills and tools"),
    p("<b>Business:</b> Requirements analysis, process design, decision support, executive reporting, stakeholder management, SOPs, documentation, and training."),
    p("<b>Technical:</b> Node.js, TypeScript, Next.js, Google Apps Script, SQL, APIs, Google Workspace, spreadsheets, and AI assistants."),
    section("Certifications"),
    p("Microsoft Azure Fundamentals (AZ-900)  |  CNSS Certified Network Security Specialist  |  Six Sigma Yellow Belt  |  SQL: Database Fundamentals  |  Full Stack and Front-End Development"),
    section("Education"),
    p("Bachelor of Computer Application (BCA), Aryabhatta Knowledge University"),
]

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4, rightMargin=19 * mm, leftMargin=19 * mm,
    topMargin=18 * mm, bottomMargin=23 * mm, title="Nishant Jha Resume",
    author="Nishant Jha", subject="Forward-deployed builder and Founder's Office resume",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
