import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import { Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Moblicode — ${SITE.yearsInBusiness}+ years of US-based mobile development` },
      { name: "description", content: `Moblicode is a US-based mobile app studio founded by ${SITE.founderName}. ${SITE.yearsInBusiness}+ years building iOS and Android applications across every App Store category.` },
      { property: "og:title", content: "About Moblicode" },
      { property: "og:description", content: SITE.pitch },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE.founderName,
        jobTitle: SITE.founderTitle,
        worksFor: { "@id": `${SITE.url}#organization` },
        sameAs: [SITE.founderLinkedIn],
        description: SITE.founderBio,
      }),
    }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">About</div>
          <h1 className="mt-5 max-w-4xl">
            Any mobile solution <em className="italic text-accent">can</em> be made to happen.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{SITE.pitch}</p>
        </div>
      </section>

      <section className="rule-bottom">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow">Founder</div>
            <h2 className="mt-3">{SITE.founderName}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.founderTitle}</p>
            <a
              href={SITE.founderLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-accent underline-offset-2 hover:underline"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>{SITE.founderBio}</p>
            <p>
              Daniel founded Moblicode to do mobile the way he believed it should be done — one engineer who owns the build, talks to the client directly, and carries the application through App Store and Google Play approval without handing it off to anyone.
            </p>
            <p>
              The result is a studio that has shipped across every category on the App Store — utilities, games, medical, beauty, social, travel, finance, education — and that has been doing it for {SITE.yearsInBusiness}+ years.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-20">
          <div className="eyebrow">How we work</div>
          <h2 className="mt-4 max-w-3xl">A small studio that ships, not a large agency that quotes.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { t: "Direct engineering", d: "You talk to the person building your app. No account managers in the middle, no offshore handoffs." },
              { t: "Fixed estimates", d: "We give you a defensible scope and price before any work starts. If it changes, we tell you before we bill against it." },
              { t: "Ship, then iterate", d: "We build what you need to launch, ship it through review, and then iterate with you based on real users." },
            ].map((c) => (
              <div key={c.t} className="rule-top pt-4">
                <h3>{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
