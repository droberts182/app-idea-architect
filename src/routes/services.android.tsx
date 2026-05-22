import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services/android")({
  head: () => ({
    meta: [
      { title: "Android app development company — Kotlin & Jetpack Compose | Moblicode" },
      { name: "description", content: "Custom Android app development by a US-based studio. Kotlin, Jetpack Compose, end-to-end Google Play submission. 19+ years of mobile experience." },
      { property: "og:title", content: "Android app development — Moblicode" },
      { property: "og:description", content: "Native Kotlin and Jetpack Compose apps for the full range of Android devices and tablets." },
      { property: "og:url", content: "/services/android" },
    ],
    links: [{ rel: "canonical", href: "/services/android" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Android app development",
        serviceType: "Android app development",
        provider: { "@id": `${SITE.url}#organization` },
        areaServed: "US",
        description: "Native Android app development in Kotlin and Jetpack Compose, plus end-to-end Google Play submission.",
      }),
    }],
  }),
  component: AndroidPage,
});

function AndroidPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Services / Android</div>
          <h1 className="mt-5 max-w-4xl">
            Android development for the <em className="italic text-accent">whole</em> device range.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Built for a wide range of Android phones and tablets — from utilities and games to medical, beauty, and social applications. Kotlin and Jetpack Compose, with Google Play submission included.
          </p>
        </div>
      </section>

      <section className="rule-bottom">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow">What's included</div>
            <h2 className="mt-3">From concept to Play Store, end-to-end.</h2>
          </div>
          <ul className="grid gap-5">
            {[
              ["Native Kotlin &amp; Jetpack Compose", "Modern, maintainable Android — not a webview wrapper."],
              ["Phone, tablet, foldable", "Tested across the device sizes your users actually carry."],
              ["Material 3 design language", "Familiar where it should be, distinctive where your brand needs it."],
              ["Google Play submission", "Listing copy, screenshots, content rating, data-safety form — we handle the submission packet."],
              ["Update cycle support", "Android changes target SDK requirements yearly. We keep your app compliant."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-medium text-foreground" dangerouslySetInnerHTML={{ __html: t }} />
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: d }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rule-bottom bg-muted/40">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-3">Common Android questions.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              More on the <Link to="/faq" className="text-accent underline-offset-2 hover:underline">FAQ page</Link>.
            </p>
          </div>
          <div className="space-y-6">
            {[
              ["How long does Google Play review take?", "Most updates clear Google Play review in a few hours. First-time submissions and apps that trigger a manual policy review can take 1–7 days."],
              ["Should we ship iOS and Android at the same time?", "Sometimes. If your audience is genuinely split, yes. If 80% of your users will be on one platform first, ship that platform well before splitting your engineering attention."],
              ["What does a defensible Android MVP cost?", "Comparable to iOS — typically $25k–$90k depending on scope. We give a fixed estimate up front."],
            ].map(([q, a]) => (
              <details key={q} className="rule-top pt-4">
                <summary className="cursor-pointer text-base font-medium text-foreground">{q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline="Have an Android app in mind?" body="Send the idea. We'll come back with scope, timeline, and a fixed estimate." />
    </>
  );
}
