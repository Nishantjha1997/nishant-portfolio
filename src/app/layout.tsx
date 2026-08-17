import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/SiteHeader";
import { SplashScreen } from "@/components/SplashScreen";
import { ScrollMotion } from "@/components/ScrollMotion";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishant.top";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nishant Jha | Founder's Office & AI Automation Portfolio",
    template: "%s | Nishant Jha",
  },
  description: "Nishant Jha is a Founder's Office executive at CallHippo in Ahmedabad. Explore his portfolio, AI automation projects, operations work, and resume.",
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
    title: "Nishant Jha | Founder's Office & AI Automation Portfolio",
    description: "Explore Nishant Jha's portfolio, AI automation projects, executive operations work, and resume.",
    siteName: "Nishant Jha",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nishant Jha - Founder's Office and AI automation portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Jha | Founder's Office & AI Automation Portfolio",
    description: "Explore Nishant Jha's portfolio, AI automation projects, operations work, and resume.",
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
    <html lang="en-IN">
      <body>
        <SplashScreen />
        <ScrollMotion />
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
