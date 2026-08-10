# Nishant Jha Portfolio

Public portfolio for Nishant Jha — Executive, Founder's Office at CallHippo, focused on executive operations, AI-enabled automation, and reliable cross-functional delivery.

## What is included

- Recruiter-focused homepage with verified experience, operating strengths, and measurable outcomes.
- Detailed, sanitized case studies for FlowCreate, StreamFree, GitLab Access Automation, Claude Usage Uploader, My Fitness Blueprint, and Operations Insights.
- Working text-to-speech lab at `/labs/ai-tts`, using device-provided browser speech with voice, speed, pitch, pause, resume, stop, and script download controls.
- Privacy-safe contact composer that opens a prefilled email draft without storing form contents.
- Resume route and download with `X-Robots-Tag: noindex, noarchive`.
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
