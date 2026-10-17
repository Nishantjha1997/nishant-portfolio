import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/SiteHeader";
import { PageMotion } from "@/components/motion/PageMotion";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";
import "./liquid-glass.css";
import "./sylva.css";

// Hides the first paint only until GSAP applies its from-states; never runs with reduced motion or without JS,
// and a CSS failsafe in sylva.css reveals the page if the motion bundle never loads.
const motionGuard = `if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches)document.documentElement.classList.add("motion-pending")`;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishant.top";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nishant Jha | Forward-Deployed Builder",
    template: "%s | Nishant Jha",
  },
  description: "Nishant Jha is a forward-deployed builder in Ahmedabad working across AI adoption, automation, business intelligence, analytics, and operations.",
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
    title: "Nishant Jha | Forward-Deployed Builder",
    description: "End-to-end AI adoption, automation, analytics, and operations case studies by Nishant Jha.",
    siteName: "Nishant Jha",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nishant Jha - forward-deployed builder portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Jha | Forward-Deployed Builder",
    description: "Explore Nishant Jha's AI adoption, automation, analytics, and business systems work.",
    images: ["/opengraph-image"],
  },
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
        <SmoothScroll />
        <PageMotion />
        <SiteHeader />
        <main>{children}</main>
        <Analytics />
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Nishant Jha</span>
          <nav aria-label="Footer navigation">
            <a href="/resume">Nishant Jha Resume</a>
            <a href="https://www.linkedin.com/in/nishant-jha-059828104/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Nishantjha1997" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
