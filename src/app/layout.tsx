import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/SiteHeader";
import { PageMotion } from "@/components/motion/PageMotion";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { jsonLd, person, personSchema, preview, siteUrl, twitterCard, websiteSchema } from "@/lib/seo";
import "lenis/dist/lenis.css";
import "./globals.css";
import "./liquid-glass.css";
import "./sylva.css";

// Hides the first paint only until GSAP applies its from-states; never runs with reduced motion or without JS,
// and a CSS failsafe in sylva.css reveals the page if the motion bundle never loads.
const motionGuard = `if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches)document.documentElement.classList.add("motion-pending")`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nishant Jha | AI Adoption Lead in Ahmedabad",
    template: "%s | Nishant Jha",
  },
  description: person.metaDescription,
  keywords: ["Nishant Jha", "Nishant Jha Ahmedabad", "Nishant Jha CallHippo", "Nishant Jha portfolio", "AI adoption lead", "forward-deployed builder", "AI agents", "automation", "Founder's Office"],
  applicationName: "Nishant Jha Portfolio",
  authors: [{ name: "Nishant Jha", url: siteUrl }],
  creator: "Nishant Jha",
  publisher: "Nishant Jha",
  category: "Professional portfolio",
  verification: { google: ["nnbaAqvjLNHLQ-UYrV9G1c8ecKnW6Vb_4Cem_YQXgMY", "n6-qwzZlewX7HV94VQDlln2Mxhwj0w5R_SfRwhaQPEo"] },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: preview.title,
    description: preview.description,
    siteName: "Nishant Jha",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: preview.imageAlt }],
  },
  twitter: twitterCard(preview.title, preview.description),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGuard }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([websiteSchema, personSchema])} />
        <SmoothScroll />
        <PageMotion />
        <SiteHeader />
        <main>{children}</main>
        <Analytics />
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Nishant Jha · Ahmedabad, India</span>
          <nav aria-label="Footer navigation">
            <a href="/about">About Nishant Jha</a>
            <a href="/resume">Nishant Jha Resume</a>
            <a href={person.linkedin} target="_blank" rel="noreferrer me">LinkedIn</a>
            <a href={person.github} target="_blank" rel="noreferrer me">GitHub</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
