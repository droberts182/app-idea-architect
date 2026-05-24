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
            Moblicode builds iOS & Android Apps & Games to meet customer's expectations. We want our customers to be <em className="italic text-accent">100% satisfied</em> with the product they are receiving.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-20">
          <div className="eyebrow">How we work</div>
          <h2 className="mt-4 max-w-3xl">A professional mobile development company that delivers quality that customers expect.</h2>
        </div>
      </section>

      <CTABand />
    </>
  );
}
