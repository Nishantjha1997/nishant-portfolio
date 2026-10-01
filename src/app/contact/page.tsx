import type { Metadata } from "next";
import Link from "next/link";
import { ContactComposer } from "@/components/ContactComposer";

export const metadata: Metadata = {
  title: { absolute: "Contact Nishant Jha | Portfolio & Collaborations" },
  description: "Contact Nishant Jha in Ahmedabad about forward-deployed building, AI adoption, automation, business intelligence, and operational problem solving.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Nishant Jha",
    description: "Start a conversation about AI adoption, automation, analytics, or an end-to-end business build.",
  },
};

export default function ContactPage() {
  return <section className="page-shell simple-page contact-page"><Link className="back-link" href="/">← Back home</Link><p className="eyebrow">CONTACT / NISHANT JHA</p><h1>Let&apos;s solve something useful.</h1><p className="detail-summary">Hiring for a role that needs someone to understand the business, build across tools, and help people use the result? Email is the best place to start.</p><a className="contact-email" href="mailto:nishant@nishant.top">nishant@nishant.top <span aria-hidden="true">↗</span></a><p className="detail-summary">Alternative email: <a href="mailto:nishantjha31@gmail.com">nishantjha31@gmail.com</a></p><div className="contact-links"><a href="https://github.com/Nishantjha1997" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/nishant-jha-059828104/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><ContactComposer /></section>;
}
