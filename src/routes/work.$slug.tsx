import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CASE_STUDIES, SITE, type CaseStudy } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): CaseStudy => {
    const cs = CASE_STUDIES.find((c) => c.slug === params.slug);
    if (!cs) throw notFound();
    return cs;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Case study not found — Moblicode" }] };
    const cs = loaderData;
    return {
      meta: [
        { title: `${cs.title} — Moblicode` },
        { name: "description", content: cs.blurb },
        { property: "og:title", content: `${cs.title} — Moblicode` },
        { property: "og:description", content: cs.blurb },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: cs.title,
          headline: cs.title,
          about: cs.category,
          dateCreated: String(cs.year),
          creator: { "@id": `${SITE.url}#organization` },
          description: cs.blurb,
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1>Case study not found</h1>
      <p className="mt-4 text-muted-foreground">
        <Link to="/work" className="text-accent underline-offset-2 hover:underline">← Back to all work</Link>
      </p>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-page py-32 text-center">
      <h1>Something went wrong</h1>
      <p className="mt-4 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const cs = Route.useLoaderData();
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">
            <Link to="/work" className="hover:text-accent">Work</Link> · {cs.platform} · {cs.category} · {cs.year}
          </div>
          <h1 className="mt-5 max-w-4xl">{cs.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{cs.blurb}</p>
        </div>
      </section>

      <section className="rule-bottom">
        <div className="container-page grid gap-12 py-16 md:grid-cols-[1fr_2fr]">
          <aside>
            <div className="eyebrow">Client</div>
            <p className="mt-2 text-foreground">{cs.client}</p>
            <div className="eyebrow mt-6">Platform</div>
            <p className="mt-2 text-foreground">{cs.platform}</p>
            <div className="eyebrow mt-6">Year</div>
            <p className="mt-2 text-foreground">{cs.year}</p>
          </aside>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {cs.body.map((p, i) => <p key={i}>{p}</p>)}
            <div className="rule-top mt-8 pt-6">
              <div className="eyebrow">Highlights</div>
              <ul className="mt-3 space-y-2 text-base text-muted-foreground">
                {cs.highlights.map((h) => <li key={h}>· {h}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABand headline="Want something like this?" body={`Tell us about your ${cs.category.toLowerCase()} project. We'll respond within one business day.`} />
    </>
  );
}
