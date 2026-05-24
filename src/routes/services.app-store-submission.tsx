import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";

const faqs = [
  ["How long does App Store submission approval take?", "Apple's median review time is 24 to 48 hours. First submissions for a new app, or apps that trigger sign-in or in-app-purchase review, can take longer. A clean submission packet — accurate metadata, working demo account, screenshots that match the current build — is the biggest factor."],
  ["What is required for App Store submission?", "Apple requires a signed binary, App Store listing copy, screenshots for every supported device size, an app privacy disclosure, a content rating, age rating, demo account credentials if your app requires login, and (for apps with in-app purchases) tax and banking information at the App Store Connect level."],
  ["How much does Apple charge for App Store submission?", "Apple charges $99/year for the standard Apple Developer Program membership. Submitting an app itself is free; Apple takes a commission on paid apps and in-app purchases (15% for most small developers, 30% for larger ones)."],
  ["Why does App Store submission get rejected?", "The most common rejections are: missing or non-functional demo accounts, privacy policies that don't match what the app actually does, sign-in flows that don't support Sign in with Apple where Apple requires it, metadata that overstates what the app does, and use of private APIs."],
];

export const Route = createFileRoute("/services/app-store-submission")({
  head: () => ({
    meta: [
      { title: "iOS (App Store) & Android (Play Store) distribution + ad-hoc | Moblicode" },
      { name: "description", content: "End-to-end iOS App Store and Android Play Store distribution, plus ad-hoc (in-house) app distribution. 19+ years of submissions. US-based." },
      { property: "og:title", content: "iOS & Android distribution, including ad-hoc — Moblicode" },
      { property: "og:description", content: "We carry the application through Apple and Google review, and handle ad-hoc (in-house) distribution for enterprise builds." },
      { property: "og:url", content: "/services/app-store-submission" },
    ],
    links: [{ rel: "canonical", href: "/services/app-store-submission" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "iOS App Store, Google Play, and ad-hoc app distribution",
        serviceType: "App distribution",
        provider: { "@id": `${SITE.url}#organization` },
        areaServed: "US",
        description: "End-to-end iOS App Store and Android Google Play distribution, plus ad-hoc (in-house) distribution for enterprise builds — metadata, screenshots, privacy disclosures, and review-cycle support.",
      }),
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question", name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }),
    }],
  }),
  component: SubmissionPage,
});

function SubmissionPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Services / Distribution</div>
          <h1 className="mt-5 max-w-4xl">
            iOS (App Store) &amp; Android (Play Store) distribution — including ad-hoc (in-house) <em className="italic text-accent">distribution model</em>.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Most agencies hand you a build and call it done. We don't. Moblicode carries every application through Apple App Store and Google Play review — and ships ad-hoc (in-house) builds for enterprise distribution outside the public stores. 19+ years of submissions; we know what gets approved and what gets rejected.
          </p>
        </div>
      </section>

      <section className="rule-bottom">
        <div className="container-page py-20">
          <div className="eyebrow">FAQ</div>
          <h2 className="mt-4 max-w-3xl">Frequently asked questions about App Store, Play Store &amp; ad-hoc distribution.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <div key={q} className="rule-top pt-5">
                <h3 className="text-foreground">{q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline="Stuck in App Store review?" body="If your build is finished but submission is the bottleneck, we can take it from here." />
    </>
  );
}
