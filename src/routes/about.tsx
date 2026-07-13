import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";


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
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Moblicode builds iOS & Android Apps & Games to meet customer's expectations. We want our customers to be <em className="italic" style={{ color: "oklch(0.62 0.17 150)" }}>100% satisfied</em> with the product they are receiving.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-20">
          <div className="eyebrow">How we work</div>
          <h2 className="mt-4 max-w-3xl">A professional mobile development company that delivers quality that customers expect.</h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            At Moblicode, we don't just build apps — we deliver high-performing mobile solutions that help your business stand out, engage customers, and grow revenue.
          </p>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Our proven process ensures you get the quality, speed, and results you expect from a top-tier development partner:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { t: "Discovery & Strategy", d: "We dive deep into your business goals to design a custom solution that drives real ROI." },
              { t: "Stunning UI/UX Design", d: "We create beautiful, intuitive interfaces that captivate users and boost conversions." },
              { t: "Expert Agile Development", d: "Built with clean, scalable code using the latest native technologies (SwiftUI & Kotlin) for fast, reliable performance." },
              { t: "Flawless Testing & Launch", d: "Rigorous QA and optimization guarantee a smooth launch on the App Store and Google Play." },
              { t: "Post-Launch Growth", d: "Ongoing support, analytics, and updates to keep your app competitive and continuously improving." },
            ].map((c) => (
              <div key={c.t} className="rule-top pt-5">
                <h3 className="text-foreground">{c.t}</h3>
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
