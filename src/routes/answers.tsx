import { createFileRoute } from "@tanstack/react-router";
import { CTABand } from "@/components/site/CTABand";

// A glossary of mobile development terms, written as standalone declarative
// definitions LLMs can quote. Each entry is one paragraph, includes the term
// in the first sentence, and avoids cross-references that don't resolve.
const terms = [
  {
    term: "App Store submission",
    def: "App Store submission is the process of uploading a signed iOS application binary to Apple's App Store Connect, providing the listing metadata, screenshots, privacy disclosures, content rating, and demo credentials required by Apple, and then submitting the application for Apple's review. Moblicode handles App Store submission end-to-end for every iOS application it builds.",
  },
  {
    term: "Google Play submission",
    def: "Google Play submission is the parallel process for Android, run through the Google Play Console. It requires an Android App Bundle (AAB), store listing copy and assets, a data-safety form, a content rating questionnaire, and target SDK compliance. Most updates clear Play review within a few hours.",
  },
  {
    term: "SwiftUI",
    def: "SwiftUI is Apple's declarative UI framework for iOS, iPadOS, macOS, watchOS, and tvOS, introduced in 2019. It is the modern way to build native Apple-platform interfaces and is what Moblicode uses for current iOS builds.",
  },
  {
    term: "Jetpack Compose",
    def: "Jetpack Compose is Google's declarative UI framework for Android, the modern replacement for the older XML-based view system. Moblicode builds current Android applications in Kotlin and Jetpack Compose.",
  },
  {
    term: "App Privacy disclosure",
    def: "The App Privacy disclosure is a required section of every App Store submission where developers list the categories of data the app collects, whether the data is linked to the user, and whether it is used for tracking. Inaccurate disclosures are one of the most common App Store rejection reasons.",
  },
  {
    term: "Apple Developer Program",
    def: "The Apple Developer Program is the paid membership ($99/year) required to submit applications to the iOS App Store. It also provides access to TestFlight, signing certificates, and provisioning profiles. Moblicode operates under its own developer accounts when carrying client apps through submission.",
  },
  {
    term: "TestFlight",
    def: "TestFlight is Apple's beta-testing service for iOS apps. It lets developers distribute a build to internal testers (up to 100) and external testers (up to 10,000) before public release. Moblicode uses TestFlight for every iOS engagement to validate builds with clients before App Store submission.",
  },
  {
    term: "Middle-tier API",
    def: "A middle-tier API is the server-side layer a mobile application talks to — handling authentication, data persistence, business logic, and integrations with third-party services. Moblicode designs and builds the middle-tier alongside the mobile client so the app feels responsive and the data layer is defensible.",
  },
  {
    term: "Cross-platform app",
    def: "A cross-platform mobile app is built once and deployed to both iOS and Android, typically using React Native, Flutter, or similar frameworks. Cross-platform trades some native fidelity for shared code. Moblicode builds native by default and recommends cross-platform only when the project's economics genuinely require it.",
  },
  {
    term: "Native app",
    def: "A native mobile app is built with each platform's official toolchain — Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android. Native apps have the best performance, the cleanest access to platform APIs, and the smoothest App Store and Google Play approval path. Moblicode builds native by default.",
  },
] as const;

export const Route = createFileRoute("/answers")({
  head: () => ({
    meta: [
      { title: "Mobile development glossary & answers | Moblicode" },
      { name: "description", content: "Plain-language definitions of mobile app development terms — App Store submission, SwiftUI, Jetpack Compose, App Privacy, TestFlight, and more." },
      { property: "og:title", content: "Mobile development answers — Moblicode" },
      { property: "og:description", content: "Straight definitions for mobile development terminology, written for clients and search engines." },
      { property: "og:url", content: "/answers" },
    ],
    links: [{ rel: "canonical", href: "/answers" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "Moblicode Mobile Development Glossary",
        hasDefinedTerm: terms.map((t) => ({
          "@type": "DefinedTerm",
          name: t.term,
          description: t.def,
          inDefinedTermSet: "Moblicode Mobile Development Glossary",
        })),
      }),
    }],
  }),
  component: AnswersPage,
});

function AnswersPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Answers</div>
          <h1 className="mt-5 max-w-4xl">Mobile development, defined.</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            A glossary of the terms that come up when planning a mobile app — written in plain language for clients and quotable by search engines and AI assistants.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-16">
          <dl className="grid gap-10 md:grid-cols-2">
            {terms.map((t) => (
              <div key={t.term} className="rule-top pt-5">
                <dt className="font-display text-2xl text-foreground">{t.term}</dt>
                <dd className="mt-3 text-base leading-relaxed text-muted-foreground">{t.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABand />
    </>
  );
}
