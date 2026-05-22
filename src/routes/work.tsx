import { createFileRoute, Link } from "@tanstack/react-router";
import { CASE_STUDIES } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected work — iOS & Android apps by Moblicode" },
      { name: "description", content: "Mobile applications Moblicode has built across categories — from a government-grade travel utility to an AI mental wellness app to an original arcade game." },
      { property: "og:title", content: "Selected work — Moblicode" },
      { property: "og:description", content: "iOS and Android apps built end-to-end by Moblicode across multiple App Store categories." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Work</div>
          <h1 className="mt-5 max-w-4xl">A government utility. An AI therapy app. An arcade game.</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Three projects across three App Store categories. Each carried from concept through submission and approval.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-16">
          <div className="grid gap-12">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                to="/work/$slug"
                params={{ slug: cs.slug }}
                className="group rule-top grid gap-6 pt-10 md:grid-cols-[1fr_2fr]"
              >
                <div>
                  <div className="eyebrow">{cs.platform} · {cs.category} · {cs.year}</div>
                  <h2 className="mt-3 text-foreground">{cs.title.split("—")[0].trim()}</h2>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-foreground/85">{cs.blurb}</p>
                  <ul className="mt-5 space-y-1 text-sm text-muted-foreground">
                    {cs.highlights.map((h) => <li key={h}>· {h}</li>)}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-accent">
                    Full case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
