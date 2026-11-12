/*
 * One source of truth for who Nishant Jha is, used by every page's metadata and JSON-LD.
 * Search engines and AI assistants build an "entity" from consistent name, role, place, and
 * profile links; keeping them identical everywhere is what ties nishant.top to the name.
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nishant.top";

export const person = {
  name: "Nishant Jha",
  role: "AI Adoption Lead & Forward-Deployed Builder",
  jobTitle: "Executive, Founder's Office",
  employer: { name: "CallHippo", url: "https://callhippo.com" },
  city: "Ahmedabad",
  region: "Gujarat",
  country: "India",
  email: "nishant@nishant.top",
  image: "/images/nishant-jha-profile.jpg",
  linkedin: "https://www.linkedin.com/in/nishant-jha-059828104/",
  github: "https://github.com/Nishantjha1997",
  // Short version for meta descriptions (search results cut off near 160 characters).
  metaDescription:
    "Nishant Jha is an AI adoption lead and forward-deployed builder in Ahmedabad. Founder's Office at CallHippo: 20+ AI bots live, 40+ people trained.",
  summary:
    "Nishant Jha is an AI adoption lead and forward-deployed builder in Ahmedabad, India. He works in the Founder's Office at CallHippo, where he rolled out AI agent teams across the company (20+ bots live, 40+ people trained, 80+ shared automations) and builds internal systems for sales, finance, and operations.",
};

/*
 * Link-preview text: what shows when the site is pasted into LinkedIn, WhatsApp, Slack or X.
 * Kept separate from the search title in each page's metadata, so one can change without the other.
 */
export const preview = {
  title: "Nishant Jha | I turn messy problems into working systems",
  description: "AI adoption lead. 20+ AI bots live and 40+ people trained at CallHippo.",
  imageAlt: "Nishant Jha. Messy problems in, working systems out.",
};

// A page that sets its own openGraph block replaces the site-wide one, image included, so each page adds this back.
// Double the usual 1200×630 so the image stays sharp on high-density screens; src/app/opengraph-image.tsx draws it.
export const previewImage = { url: "/opengraph-image", width: 2400, height: 1260, alt: preview.imageAlt };

/** X/Twitter card for a page, so a pasted link shows that page's own title and text with the shared image. */
export const twitterCard = (title: string, description: string) => ({ card: "summary_large_image" as const, title, description, images: [previewImage.url] });

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

export const knowsAbout = [
  "AI adoption",
  "AI agents",
  "Agent teams",
  "Business process automation",
  "Business intelligence",
  "Process improvement",
  "Founder's Office operations",
  "Internal tools",
  "Change management",
  "Next.js",
  "Google Apps Script",
];

/** Full Person entity. Rendered on every page so each URL reinforces the same identity. */
export const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: person.name,
  alternateName: "Nishant",
  givenName: "Nishant",
  familyName: "Jha",
  url: siteUrl,
  image: `${siteUrl}${person.image}`,
  email: `mailto:${person.email}`,
  jobTitle: person.jobTitle,
  description: person.summary,
  worksFor: { "@type": "Organization", name: person.employer.name, url: person.employer.url },
  homeLocation: { "@type": "Place", name: `${person.city}, ${person.region}, ${person.country}` },
  address: { "@type": "PostalAddress", addressLocality: person.city, addressRegion: person.region, addressCountry: "IN" },
  nationality: { "@type": "Country", name: "India" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Aryabhatta Knowledge University" },
  hasCredential: [
    "Microsoft Azure Fundamentals (AZ-900)",
    "CNSS Certified Network Security Specialist",
    "Six Sigma Yellow Belt",
    "Bachelor of Computer Application (BCA)",
  ].map((name) => ({ "@type": "EducationalOccupationalCredential", name })),
  knowsAbout,
  sameAs: [person.linkedin, person.github],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: "Nishant Jha",
  alternateName: "Nishant Jha Portfolio",
  description: person.summary,
  inLanguage: "en-IN",
  publisher: { "@id": personId },
  about: { "@id": personId },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Nishant Jha", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function jsonLd(graph: object[]) {
  return { __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") };
}
