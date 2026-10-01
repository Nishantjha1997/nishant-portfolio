"""Build the public, recruiting-focused resume PDF."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


OUTPUT = Path(__file__).resolve().parents[1] / "public" / "resume" / "Nishant-Jha-Resume.pdf"
INK = colors.HexColor("#263026")
MUTED = colors.HexColor("#586358")
GREEN = colors.HexColor("#4C6744")
PALE = colors.HexColor("#EEF2EA")
ACID = colors.HexColor("#D9FF54")

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=25, leading=29, textColor=INK),
    "subtitle": ParagraphStyle("subtitle", fontName="Helvetica", fontSize=11, leading=15, textColor=GREEN),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=13, textColor=MUTED),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=13, textColor=GREEN, spaceBefore=17, spaceAfter=7),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, leading=14, textColor=INK, spaceBefore=8),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=8.9, leading=13.8, textColor=INK, spaceAfter=4),
    "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8.2, leading=12, textColor=MUTED, spaceAfter=3),
    "proof": ParagraphStyle("proof", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=INK, alignment=TA_LEFT),
    "proof_label": ParagraphStyle("proof_label", fontName="Helvetica", fontSize=7.4, leading=10, textColor=MUTED),
}


def p(text, style="body"):
    return Paragraph(text, styles[style])


def section(title):
    return p(title.upper(), "section")


def item(title, detail):
    return p(f"<b>{title}</b> - {detail}")


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
    p("I work with leaders and frontline teams to turn unclear business needs into useful systems. I map the workflow and data, build tools and automations, and stay close enough to the rollout to handle exceptions, adoption, and handover. My work spans safe AI use, business intelligence, process improvement, and full-stack products."),
    section("Selected proof"),
]

proof = Table(
    [[
        [p("24h to 30m", "proof"), p("Eligible access processing window", "proof_label")],
        [p("95%", "proof"), p("Fewer Apps Script lock collisions", "proof_label")],
        [p("100+", "proof"), p("New hires supported", "proof_label")],
    ]],
    colWidths=[57 * mm] * 3,
)
proof.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), PALE),
    ("LINEABOVE", (0, 0), (-1, 0), 2, ACID),
    ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#D8E2D5")),
    ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#D8E2D5")),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 11),
    ("RIGHTPADDING", (0, 0), (-1, -1), 11),
    ("TOPPADDING", (0, 0), (-1, -1), 11),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
]))
story += [proof, section("Experience")]

story += [
    KeepTogether([
        p("Executive, Founder's Office  |  CallHippo  |  Current", "role"),
        item("Build and adoption", "frame operational problems with teams, then design internal tools, review workflows, and decision systems."),
        item("AI and knowledge", "owned the knowledge structure, assistant behavior, and rollout for source-backed company answers with the internal technical team."),
        item("Operational intelligence", "built an evidence-led meeting review workflow and a pre-launch purchase management system; kept uncertain data visible for human review."),
    ]),
    KeepTogether([
        p("Executive Assistant to CEO, Founder's Office  |  Sigma Solve  |  Previous role", "role"),
        item("Business operations", "translated stakeholder needs into leadership reporting, delivery dashboards, SOPs, and cross-functional follow-through."),
        item("Automation", "built an auditable GitLab access workflow that cut normal eligible-request processing from up to 24 hours to a maximum 30-minute window."),
    ]),
    KeepTogether([
        p("IT Trainer  |  Vagaro Technologies  |  Dec 2024 - Apr 2025", "role"),
        p("Delivered product training and documentation, supported SDLC coordination, and mentored trainers."),
    ]),
    KeepTogether([
        p("Customer Support Representative and SME  |  TTEC India  |  Aug 2020 - Feb 2024", "role"),
        p("Improved support processes, helped onboard more than 100 new hires, and developed product expertise across teams."),
    ]),
    PageBreak(),
    p("Nishant Jha  |  Selected work", "subtitle"),
    section("Selected builds"),
    item("Lead Cleanup", "on Jev AI's second day after launch, identified a practical use case and integrated suggestions into a deterministic qualification workflow with human review."),
    item("Ask CallHippo", "organized approved knowledge and source checks so colleagues can get answers they can verify; server implementation and hosting were shared with the technical team."),
    item("Sales Meeting Punctuality", "built a reviewer dashboard and evidence rules that distinguish a client waiting from incomplete attendance records."),
    item("Purchase Management", "built a pre-launch request-to-payment workflow with role checks, audit records, and invoice matching."),
    item("Claude Usage Uploader", "built an offline-first telemetry utility and separated write paths to reduce lock collisions by 95%."),
    item("Independent products", "built MakeCV, StreamFree, and YT Transcriber, spanning AI-assisted workflows, responsive web UX, and resilient data extraction."),
    section("Decision systems and research"),
    item("Software and AI access", "created reviewable assessments of software use and AI licence needs to guide adoption and access decisions."),
    item("Pricing and reporting", "turned market research and recurring-report inventories into decision models and engineering handovers."),
    item("Compliance and launch planning", "mapped overlapping control evidence and organized telecom launch dependencies for specialist review."),
    section("How I work"),
    item("Discover", "work with users and leaders to define the decision, map the process, and identify the smallest useful intervention."),
    item("Build", "ship apps, API integrations, automations, dashboards, and decision models with clear error and review paths."),
    item("Adopt", "document ownership, make results inspectable, and refine the system from real use."),
    section("Capabilities and tools"),
    p("Business requirements, process mapping, executive decision support, AI adoption, data analysis, dashboard design, product delivery, SOPs, stakeholder alignment, and training."),
    p("Node.js, TypeScript, Next.js, Google Apps Script, SQL, APIs, Google Workspace, spreadsheets, and AI assistants."),
    section("Education and credentials"),
    p("Bachelor of Computer Application (BCA), Aryabhatta Knowledge University"),
    p("Microsoft Azure Fundamentals (AZ-900)  |  CNSS Certified Network Security Specialist  |  Six Sigma Yellow Belt  |  SQL: Database Fundamentals  |  Full Stack and Front-End Development"),
    Spacer(1, 7 * mm),
    p("More detail and case studies: <link href='https://nishant.top/' color='#4C6744'>nishant.top</link>", "small"),
]

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4, rightMargin=19 * mm, leftMargin=19 * mm,
    topMargin=18 * mm, bottomMargin=23 * mm, title="Nishant Jha Resume",
    author="Nishant Jha", subject="Forward-deployed builder and Founder's Office resume",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
