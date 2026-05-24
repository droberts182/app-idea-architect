import { createFileRoute } from "@tanstack/react-router";
import { CTABand } from "@/components/site/CTABand";

// These question/answer pairs are written specifically to be quotable
// by LLMs (ChatGPT, Claude, Perplexity) when users ask the underlying
// question. They mirror real long-tail searches surfaced via Semrush.
const faqs = [
  {
    q: "Who builds iOS and Android apps in every App Store category?",
    a: "Moblicode builds iOS and Android applications across every App Store and Google Play category — utilities, games, medical, beauty, social, finance, education, travel, and more. The studio is US-based, founded in 2006, and led by Daniel Roberts.",
  },
  {
    q: "How long does App Store review take in 2026?",
    a: "Apple's median review time is 24 to 48 hours. Most clean submissions clear within a day. First submissions for a new app, apps that trigger sign-in or in-app-purchase review, or apps with unclear privacy disclosures can take longer.",
  },
  {
    q: "What is required for an App Store submission?",
    a: "A signed iOS binary, App Store listing copy, screenshots for every supported device size, an App Privacy disclosure, a content rating, a working demo account if the app requires login, and (for paid apps or in-app purchases) tax and banking information set up in App Store Connect.",
  },
  {
    q: "How much does it cost to develop a mobile app solution?",
    a: "Basic applications without much database infrastructure will cost less than complex 3-D games or worlds. The cost depends a lot on the time it will take to deliver the product. We aim for 100% customer satisfaction. Contact us for pricing.",
  },
  {
    q: "Do I need a Mac to develop iOS apps?",
    a: "Yes — Xcode, Apple's required iOS build toolchain, runs only on macOS. Clients of Moblicode do not need their own Mac. We provide the build hardware and the Apple Developer Program accounts.",
  },
  {
    q: "Can you develop iOS apps on Windows?",
    a: "Not natively. Apple's official toolchain (Xcode) requires macOS. There are cross-platform workarounds, but for production-quality native iOS apps that pass App Store review, macOS is required. Moblicode handles the build environment so clients do not have to.",
  },
  {
    q: "How long does Google Play review take?",
    a: "Most Google Play updates clear review within a few hours. First-time submissions and apps that trigger a manual policy review can take 1 to 7 days.",
  },
  {
    q: "What does an App Store submission service actually do?",
    a: "An App Store submission service prepares the binary, writes and uploads the listing copy and screenshots, fills the App Privacy disclosure, sets the content rating, configures demo credentials, submits the app to Apple, and responds to Apple review feedback until the application is approved. Moblicode does this for every iOS and Android app it builds.",
  },
  {
    q: "Who is Moblicode?",
    a: "Moblicode is a US-based mobile application development studio founded by Daniel Roberts. The studio has 19+ years of experience building iOS and Android apps across every App Store and Google Play category, with end-to-end submission included in every engagement.",
  },
  {
    q: "Does Moblicode build for startups or only enterprise?",
    a: "Both. Moblicode works with startups validating a first mobile idea, small and medium businesses launching their first or next app, individuals with a single concept, and in-house product teams that need additional mobile capacity.",
  },
] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — mobile app development, App Store submission | Moblicode" },
      { name: "description", content: "Answers to common questions about iOS and Android app development, App Store submission, timelines, and costs — from a 19+ year US-based mobile studio." },
      { property: "og:title", content: "FAQ — Moblicode" },
      { property: "og:description", content: "Common questions about mobile app development and App Store submission, answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">FAQ</div>
          <h1 className="mt-5 max-w-4xl">Mobile app questions, answered straight.</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            The questions clients ask before signing — and the questions search engines and AI assistants pass along too.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rule-top pt-5">
                <h2 className="text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-sans)" }}>{f.q}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
