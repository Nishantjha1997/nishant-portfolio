import type { Metadata } from "next";
import Link from "next/link";
import { ContactComposer } from "@/components/ContactComposer";

export const metadata: Metadata = {
  title: { absolute: "Contact Nishant Jha | Portfolio & Collaborations" },
  description: "Contact Nishant Jha in Ahmedabad about Founder's Office operations, AI automation, internal tools, digital products, or professional collaboration.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Nishant Jha",
    description: "Start a conversation about operations, AI automation, internal tools, or digital product work.",
  },
};

export default function ContactPage() {
  return <section className="page-shell simple-page contact-page"><Link className="back-link" href="/">← Back home</Link><p className="eyebrow">CONTACT / NISHANT JHA</p><h1>Contact Nishant Jha.</h1><p className="detail-summary">For work, collaboration, or a thoughtful conversation about operations, AI automation, and digital products, email is the best place to start.</p><a className="contact-email" href="mailto:nishantjha31@gmail.com">nishantjha31@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://github.com/Nishantjha1997" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/nishant-jha-059828104/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><ContactComposer /></section>;
}
