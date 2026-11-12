# Nishant Jha Portfolio

Public portfolio for Nishant Jha — Executive, Founder's Office at CallHippo, focused on company-wide AI adoption, AI-enabled automation, and reliable cross-functional delivery.

## What is included

- Recruiter-focused homepage with verified experience, operating strengths, and measurable outcomes.
- Detailed, sanitized case studies, led by the company-wide GrokBot rollout (with a bot-fleet section showing each bot's role and human check), HippoMeet, Tools Hub, AI Builders Team, Revenue & Churn Signals, AI Video Ad Pipeline, and Competitor Talent Map, plus MakeCV — FlowCreate, StreamFree, YT Transcriber, GitLab Access Automation, Claude Usage Uploader, My Fitness Blueprint, Operations Insights, and earlier CallHippo work.
- A public profile portrait in the homepage hero and Person structured metadata. Personal phone details remain excluded from the public HTML.
- A beta YT Transcriber link beside Labs and a project case study at `/work/yt-transcriber`.
- Working text-to-speech lab at `/labs/ai-tts`, using device-provided browser speech with voice, speed, pitch, pause, resume, stop, and script download controls.
- Privacy-safe contact composer that opens a prefilled email draft without storing form contents.
- Resume route and download with `X-Robots-Tag: noindex, noarchive`.
- GSAP (ScrollTrigger, SplitText) motion with Lenis smooth scrolling, defined per route in `src/components/motion/`. Reduced-motion visitors get native scrolling and fully static content.
- Search and AI visibility: one identity source in `src/lib/seo.ts` feeds every page's metadata and JSON-LD (Person, WebSite, ProfilePage, Article, FAQPage, BreadcrumbList). `/about` answers "who is Nishant Jha" with an FAQ. `/llms.txt` and `/llms-full.txt` give AI assistants a plain-Markdown version of the site, generated from the same data as the pages. `robots.txt` explicitly welcomes search and AI crawlers.
- After a deploy, `node scripts/indexnow.mjs` tells IndexNow search engines (Bing and others) which pages changed. The key file lives in `public/`.
- Responsive dark-first design with keyboard navigation, reduced-motion support, structured metadata, sitemap, robots rules, and project-specific case-study pages.

## Privacy and publication boundary

The public portfolio intentionally excludes personal phone details from HTML, metadata, structured data, and forms. The downloadable resume is the only public site asset that contains the phone number, and it is served as a noindex document. Internal automation case studies use generic architecture and sanitized outcomes; they do not publish source code, company data, tokens, internal URLs, or employee information.

## Local development

```bash
npm install
npm run dev
```

Validation commands:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

The repository is connected to the `nishant-portfolio` Vercel project and deploys from `main`. The production domain is `https://nishant.top`; `www.nishant.top` permanently redirects to the apex domain. Both domains have valid Vercel configuration.
