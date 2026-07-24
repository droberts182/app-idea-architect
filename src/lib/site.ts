// Single source of truth for Moblicode brand, copy, case studies, and services.
// Every page AND every MCP tool must read from this module — do not duplicate
// case studies or services in page components or in tool handlers.

import launchToWellnessIos from "@/assets/launch-to-wellness-ios.png.asset.json";
import launchToWellnessIos2 from "@/assets/launch-to-wellness-ios-2.png.asset.json";
import launchToWellnessIos3 from "@/assets/launch-to-wellness-ios-3.png.asset.json";
import rfxIphone1 from "@/assets/rfx-iphone-1.png.asset.json";
import rfxIphone2 from "@/assets/rfx-iphone-2.png.asset.json";
import rfxIphone3 from "@/assets/rfx-iphone-3.png.asset.json";
import gravballIpad1 from "@/assets/gravball-ipad-1.png.asset.json";
import gravballIpad2 from "@/assets/gravball-ipad-2.png.asset.json";

export const SITE = {
  name: "Moblicode",
  legalName: "Moblicode",
  // Canonical pitch. Repeat verbatim across meta tags, JSON-LD, llms.txt and hero copy.
  pitch:
    "Moblicode builds high-quality iOS and Android apps & games that meet and exceed our customers' expectations. We focus on clean code, intuitive design, reliable performance, and measurable business impact. Our goal is 100% customer satisfaction on every project.",
  shortPitch:
    "US-based mobile app studio. iOS and Android, every category, 19+ years.",
  tagline: "Mobile apps for every category. Built to ship.",
  url: "https://moblicode.com",
  email: "support@moblicode.com",
  phoneDisplay: "747 755 1281",
  phoneE164: "+17477551281",
  founderName: "Daniel Roberts",
  founderTitle: "Founder & Lead Mobile Engineer",
  founderLinkedIn: "https://www.linkedin.com/in/ttm182/",
  googleProfile: "https://share.google/U4fNKmw2oLAg88L",
  founderBio:
    "With well over 15 years of experience in mobile application development, Daniel specializes in creating tailored mobile app solutions for individuals and any-sized businesses. His expertise spans iOS and Android, enabling polished, creative, technically sound applications across every App Store and Google Play category.",
  founded: 2006,
  city: "United States",
  region: "US",
  categories: [
    "Business", "Books", "Catalogs", "Developer Tools", "Education",
    "Entertainment", "Finance", "Food & Drink", "Games", "Graphics & Design",
    "Health & Fitness", "Lifestyle", "Magazines & Newspapers", "Medical",
    "Music", "Navigation", "News", "Photo & Video", "Productivity",
    "Reference", "Shopping", "Social Networking", "Sports", "Travel",
    "Utilities", "Weather",
  ],
} as const;

// Computed at runtime so it never goes stale.
export const yearsInBusiness = new Date().getFullYear() - SITE.founded;

// ---------------------------------------------------------------------------
// Services — rendered by src/routes/services.tsx AND exposed by list_services.
// ---------------------------------------------------------------------------

export type Service = {
  to: "/services/ios" | "/services/android" | "/services/app-store-submission" | "/contact";
  eyebrow: string;
  title: string;
  blurb: string;
  keywords: readonly string[];
};

export const SERVICES: readonly Service[] = [
  {
    to: "/services/ios",
    eyebrow: "iOS",
    title: "iOS app development",
    blurb:
      "iOS (iPhone/iPad) apps and games for all categories of the App Store. Ad-hoc (outside of the App Store) distribution is always an option. Fully native development using Swift and SwiftUI for smooth performance, modern UI, and seamless integration with Apple's ecosystem (iOS, iPadOS, watchOS, and visionOS where applicable).",
    keywords: ["iOS app development company", "hire iOS developer", "iPhone app developers"],
  },
  {
    to: "/services/android",
    eyebrow: "Android",
    title: "Android app development",
    blurb:
      "Android (Phone / Tablet) applications built for the next generation of apps. Native Android development using Kotlin and Jetpack Compose for clean architecture, beautiful UIs, and excellent performance. UI/UX design, backend integration (Firebase, REST APIs, etc.), push notifications, in-app purchases, subscriptions, analytics, and Google Play optimization.",
    keywords: ["android app development company", "custom mobile app development"],
  },
  {
    to: "/contact",
    eyebrow: "Database",
    title: "Database design",
    blurb:
      "We design and build robust, scalable databases and middle-tier APIs that power the mobile applications we develop — ensuring fast, secure, and reliable data handling. A well-architected backend is the foundation of any successful mobile app. We create systems that seamlessly connect your iOS and Android apps to the data and services they need.",
    keywords: ["database development", "backend development", "API development"],
  },
  {
    to: "/services/app-store-submission",
    eyebrow: "Distribution",
    title: "iOS (App Store) & Android (Play Store) distribution and ad-hoc (in house) distribution",
    blurb:
      "We handle the complete distribution process for your mobile apps — whether you want to release publicly on the Apple App Store and Google Play Store, or distribute privately within your organization through ad-hoc / in-house distribution. Ad-hoc distribution (also called in-house or enterprise distribution) allows you to install your app directly on specific devices without going through the public App Store or Play Store.",
    keywords: ["app store submission service", "ad hoc app distribution", "in house app distribution"],
  },
] as const;

// ---------------------------------------------------------------------------
// Case studies — rendered by src/routes/examples.tsx AND exposed by
// list_case_studies. Add a new case study here and both surfaces pick it up.
// ---------------------------------------------------------------------------

export type CaseStudyImage = string | { src: string; heightClass?: string };

export type CaseStudy = {
  name: string;
  platform: string;
  category: string;
  blurb: string;
  images: CaseStudyImage[];
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    name: "Launch to Wellness",
    platform: "iOS & Android",
    category: "Health & Wellness",
    blurb:
      "iOS & Android mental-health support app connecting clients with therapeutic resources and each other.\n• Built an AI chatbot that functions as a virtual therapist, providing clients with on-demand, conversational support.\n• Developed a forum feature enabling clients to connect with and support one another.\n• Architected the backend on Firebase for authentication, data storage, and real-time updates.",
    images: [launchToWellnessIos.url, launchToWellnessIos2.url, { src: launchToWellnessIos3.url, heightClass: "h-[280px]" }],
  },
  {
    name: "RFX — RecruitFluency",
    platform: "iOS & Android",
    category: "Sports & Recruiting",
    blurb:
      "A soccer recruiting platform connecting high-school athletes with college coaches, built and owned end-to-end across mobile, web, backend, and infrastructure.\n• Architected native iOS (Swift/SwiftUI) and Android (Kotlin/Jetpack Compose) apps, plus a Flutter web admin portal and a React/Vite club dashboard.\n• Built a NestJS/TypeScript backend on PostgreSQL database, deployed on DigitalOcean and Vercel\n• Designed an automated, round-based outreach engine emailing thousands of college coaches via Postmark, with per-coach/gender rate limits, NCAA contact-window rules, and division targeting.\n• Implemented subscription monetization (RevenueCat) with tiered/gated features, live YouTube highlight validation, and profile-completeness gating.",
    images: [rfxIphone1.url, rfxIphone2.url, rfxIphone3.url],
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
