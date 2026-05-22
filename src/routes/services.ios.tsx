import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import { Check } from "lucide-react";
import iphoneMockup from "@/assets/iphone-ios-mockup.jpg";

export const Route = createFileRoute("/services/ios")({
  head: () => ({
    meta: [
      { title: "iOS app development company — Swift & SwiftUI | Moblicode" },
      { name: "description", content: "Hire an iOS developer with 19+ years of App Store experience. Native Swift and SwiftUI apps for iPhone and iPad — every category, end-to-end submission." },
      { property: "og:title", content: "iOS app development — Moblicode" },
      { property: "og:description", content: "Native Swift and SwiftUI applications. US-based. 19+ years of App Store submissions." },
      { property: "og:url", content: "/services/ios" },
    ],
    links: [{ rel: "canonical", href: "/services/ios" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "iOS app development",
        serviceType: "iOS app development",
        provider: { "@id": `${SITE.url}#organization` },
        areaServed: "US",
        description: "Native iOS app development in Swift and SwiftUI for iPhone and iPad, plus end-to-end App Store submission.",
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD" },
      }),
    }],
  }),
  component: IosPage,
});

function IosPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="eyebrow">Services / iOS</div>
              <h1 className="mt-5 max-w-4xl">
                iOS app development for <em className="italic text-accent">every</em> App Store category.
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
                We build native iPhone and iPad applications in Swift and SwiftUI, and we carry every build through Apple's App Store review. 19+ years of submissions. We know what gets approved.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={iphoneMockup}
                alt="Polished iPhone mockup showing a native iOS app built by Moblicode"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full max-w-sm rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rule-bottom">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow">What's included</div>
            <h2 className="mt-3">Concept to App Store, in one engagement.</h2>
          </div>
          <ul className="grid gap-5">
            {[
              ["Native Swift &amp; SwiftUI", "Modern architecture — no cross-platform wrappers unless you ask for one."],
              ["iPhone &amp; iPad", "Universal apps when it makes sense; focused single-platform when it doesn't."],
              ["API &amp; middle-tier", "We design the server-side layer your app talks to, so it feels instant."],
              ["App Store submission", "Metadata, screenshots, privacy disclosures, review notes — we handle the whole submission packet."],
              ["Review-cycle support", "If Apple rejects, we fix it. Subsequent submissions are part of the engagement."],
              ["Post-launch updates", "Apple deprecates APIs every year. We keep up so your app keeps working."],
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
        <div className="container-page py-20">
          <div className="eyebrow">Categories</div>
          <h2 className="mt-4 max-w-3xl">We've shipped iOS apps in every category on the App Store.</h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3 lg:grid-cols-4">
            {SITE.categories.map((c) => (
              <li key={c} className="flex items-center gap-2 text-foreground/80">
                <span className="h-1 w-1 rounded-full bg-accent" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rule-bottom">
        <div className="container-page grid gap-10 py-20 md:grid-cols-2">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="mt-3">Common iOS questions.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              More on the <Link to="/faq" className="text-accent underline-offset-2 hover:underline">FAQ page</Link>.
            </p>
          </div>
          <div className="space-y-6">
            {[
              ["How long does App Store review take?", "Apple's median review time is 24–48 hours, but the first submission for a new app can take longer if metadata, privacy disclosures, or sign-in flows aren't tight. We submit clean packets, so most of our first submissions clear in a day."],
              ["Do I need a Mac to develop iOS apps?", "Yes — Xcode (Apple's build toolchain) only runs on macOS. You don't need one personally; we have the hardware and the developer accounts. You only need a device to test the build."],
              ["How much does an iOS app cost?", "Real number depends on scope, but a defensible MVP typically lands between $25k and $90k. We give a fixed estimate before any work starts, and we don't bill against it without telling you first."],
            ].map(([q, a]) => (
              <details key={q} className="rule-top pt-4">
                <summary className="cursor-pointer text-base font-medium text-foreground">{q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline="Have an iOS app in mind?" body="Tell us about the application you want to ship. We respond within one business day." />
    </>
  );
}
