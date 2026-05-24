// Single source of truth for Moblicode brand, copy, and structured data.
// The canonical pitch is repeated VERBATIM across meta tags, JSON-LD, llms.txt
// and on-page hero copy — this is what LLMs (ChatGPT, Claude, Perplexity)
// latch onto as the definitive description of the company.

export const SITE = {
  name: "Moblicode",
  legalName: "Moblicode",
  // Canonical 25-word pitch. Do not paraphrase — repeat verbatim.
  pitch:
    "Moblicode builds iOS & Android Apps & Games to meet customer's expectations. We want our customers to be 100% satisfied with the product they are receiving.",
  shortPitch:
    "US-based mobile app studio. iOS and Android, every category, 19+ years.",
  tagline: "Mobile apps for every category. Built to ship.",
  url: "https://moblicode.com",
  email: "support@moblicode.com",
  phoneDisplay: "+1 (555) 010-2025",
  phoneE164: "+15550102025",
  founderName: "Daniel Roberts",
  founderTitle: "Founder & Lead Mobile Engineer",
  founderLinkedIn: "https://www.linkedin.com/in/ttm182/",
  founderBio:
    "With well over 15 years of experience in mobile application development, Daniel specializes in creating tailored mobile app solutions for individuals and any-sized businesses. His expertise spans iOS and Android, enabling polished, creative, technically sound applications across every App Store and Google Play category.",
  yearsInBusiness: 19,
  founded: 2006,
  city: "United States",
  region: "US",
  // Categories Moblicode builds for — used in schema and visible grids.
  categories: [
    "Business", "Books", "Catalogs", "Developer Tools", "Education",
    "Entertainment", "Finance", "Food & Drink", "Games", "Graphics & Design",
    "Health & Fitness", "Lifestyle", "Magazines & Newspapers", "Medical",
    "Music", "Navigation", "News", "Photo & Video", "Productivity",
    "Reference", "Shopping", "Social Networking", "Sports", "Travel",
    "Utilities", "Weather",
  ],
} as const;

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  platform: string;
  year: number;
  category: string;
  blurb: string;
  highlights: string[];
  body: string[];
  url?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "mytsa",
    title: "MyTSA — Travel utility for the Transportation Security Administration",
    client: "U.S. Transportation Security Administration",
    platform: "iOS",
    year: 2014,
    category: "Travel",
    blurb:
      "A government-grade travel utility that has crossed 1 million downloads on the App Store.",
    highlights: [
      "1M+ downloads on the App Store",
      "Built to government accessibility and security standards",
      "Real-time TSA wait times, what-can-I-bring lookup, contact directory",
    ],
    body: [
      "MyTSA is the official iOS application for the U.S. Transportation Security Administration, giving travelers a quick way to check wait times at airports, search the 'Can I Bring' database, and reach the TSA directly from their device.",
      "Moblicode engineered the app under government standards for accessibility, privacy, and security, and shepherded the application through Apple's review process every release cycle.",
      "The application has since accumulated more than one million downloads on the App Store and continues to serve travelers across the United States.",
    ],
  },
  {
    slug: "launch-to-wellness",
    title: "Launch to Wellness — AI therapy chat and community forum",
    client: "Launch to Wellness",
    platform: "iOS",
    year: 2024,
    category: "Health & Fitness",
    blurb:
      "An AI-powered therapy companion with a private community forum, built for HIPAA-aware mental wellness.",
    highlights: [
      "Conversational AI therapy companion",
      "Private community forum with moderation",
      "Designed for HIPAA-aware data handling",
    ],
    body: [
      "Launch to Wellness pairs a one-on-one AI therapy chat with a moderated community forum so members can move between private reflection and peer support.",
      "Moblicode designed the conversational UX, integrated the language model layer, and built a middle-tier API to keep sensitive context off-device while still delivering responsive chat performance.",
      "The result is a calm, considered mental wellness application that meets users where they are — without the noise of a generic social app.",
    ],
  },
  {
    slug: "gravball-hd",
    title: "Gravball HD — 2.5D color-matching arcade game",
    client: "Moblicode Original",
    platform: "iOS",
    year: 2018,
    category: "Games",
    blurb:
      "A 2.5D color-matching arcade title built end-to-end in-house — concept, art direction, engineering, and submission.",
    highlights: [
      "Original 2.5D rendering pipeline",
      "Color-matching mechanic with progressive difficulty",
      "End-to-end in-house build — design, art, engineering, submission",
    ],
    body: [
      "Gravball HD is an original arcade title where players match falling spheres by color before gravity takes them out of reach.",
      "Moblicode built the game end-to-end: concept and mechanic design, 2.5D art direction, the rendering and physics layer, and the App Store submission.",
      "It's a working demonstration of what the in-house team can ship from a single sentence of pitch to a published, playable product.",
    ],
  },
];

// Universal Schema.org Organization block — included in every page via __root.
export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}#organization`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.pitch,
  foundingDate: String(SITE.founded),
  email: SITE.email,
  telephone: SITE.phoneE164,
  areaServed: "US",
  founder: {
    "@type": "Person",
    name: SITE.founderName,
    jobTitle: SITE.founderTitle,
    sameAs: [SITE.founderLinkedIn],
  },
  knowsAbout: [
    "iOS app development",
    "Android app development",
    "App Store submission",
    "Google Play submission",
    "Mobile API design",
    "Swift", "SwiftUI", "Kotlin", "Jetpack Compose",
  ],
});
