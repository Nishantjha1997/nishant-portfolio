import type { Metadata } from "next";
import Link from "next/link";
import { ContactComposer } from "@/components/ContactComposer";
import { breadcrumbs, jsonLd, person, personId, previewImage, siteUrl, twitterCard, websiteId } from "@/lib/seo";

const share = {
  title: "Contact Nishant Jha",
  description: "Start a conversation about AI adoption, automation, analytics, or an end-to-end business build.",
};

export const metadata: Metadata = {
  title: { absolute: "Contact Nishant Jha | Ahmedabad, India" },
  description: "Contact Nishant Jha in Ahmedabad about forward-deployed building, AI adoption, automation, business intelligence, and operational problem solving.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    ...share,
    images: [previewImage],
  },
  twitter: twitterCard(share.title, share.description),
};

const contactGraph = [
  { "@type": "ContactPage", "@id": `${siteUrl}/contact#webpage`, url: `${siteUrl}/contact`, name: "Contact Nishant Jha", mainEntity: { "@id": personId }, isPartOf: { "@id": websiteId }, inLanguage: "en-IN" },
  breadcrumbs([{ name: "Contact", path: "/contact" }]),
];

export default function ContactPage() {
  return <section className="page-shell simple-page contact-page"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(contactGraph)} /><Link className="back-link" href="/">← Back home</Link><p className="eyebrow">CONTACT / NISHANT JHA</p><h1>Let&apos;s solve something useful.</h1><p className="detail-summary">Hiring for a role that needs someone to understand the business, build across tools, and help people use the result? Email is the best place to start.</p><a className="contact-email" href="mailto:nishant@nishant.top">nishant@nishant.top <span aria-hidden="true">↗</span></a><p className="detail-summary">Alternative email: <a href="mailto:nishantjha31@gmail.com">nishantjha31@gmail.com</a></p><div className="contact-links"><a href={person.github} target="_blank" rel="noreferrer me">GitHub ↗</a><a href={person.linkedin} target="_blank" rel="noreferrer me">LinkedIn ↗</a><Link href="/about">About Nishant Jha →</Link></div><ContactComposer /></section>;
}
