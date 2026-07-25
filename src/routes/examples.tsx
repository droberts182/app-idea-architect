import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES, type CaseStudy, SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/examples")({
  head: () => ({
    meta: [
      { title: "Examples — iOS & Android apps we've built | Moblicode" },
      { name: "description", content: "A selection of iOS and Android apps completed by Moblicode across categories — native Swift, SwiftUI, Kotlin, and Jetpack Compose." },
      { property: "og:title", content: "Examples — iOS & Android apps we've built" },
      { property: "og:description", content: "A selection of iOS and Android apps completed by Moblicode across categories." },
      { property: "og:url", content: "/examples" },
    ],
    links: [{ rel: "canonical", href: "/examples" }],
  }),
  component: ExamplesPage,
});

const iosExamples: readonly CaseStudy[] = CASE_STUDIES.filter((c) => c.platform.includes("iOS"));
const androidExamples: readonly CaseStudy[] = CASE_STUDIES.filter(
  (c) => c.platform.includes("Android") && !c.platform.includes("iOS"),
);


function ExamplesPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Examples</div>
          <h1 className="mt-5 max-w-4xl">
            Examples of iOS &amp; Android apps we've <em className="font-display italic text-accent">built</em>.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {SITE.pitch}
          </p>
        </div>
      </section>

      {iosExamples.length > 0 && <ExampleSection title="iOS" eyebrow="iPhone &amp; iPad" items={iosExamples} />}
      {androidExamples.length > 0 && <ExampleSection title="Android" eyebrow="Phone &amp; Tablet" items={androidExamples} />}


      <CTABand />
    </>
  );
}

function ExampleSection({ title, eyebrow, items }: { title: string; eyebrow: string; items: readonly CaseStudy[] }) {
  return (
    <section className="rule-bottom">
      <div className="container-page pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="space-y-16">
          {items.map((ex) => (
            <article key={ex.name}>
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{ex.platform} · {ex.category}</div>
                <h3 className="mt-2 text-foreground">{ex.name}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{ex.blurb}</p>
              </div>
              <div className={`${ex.imagesMarginTopClass ?? "mt-8"} flex flex-nowrap items-center justify-center gap-6 sm:justify-start overflow-x-auto`}>
                {ex.images.map((img, i) => {
                  const src = typeof img === "string" ? img : img.src;
                  const heightClass = typeof img === "string" ? "h-[360px]" : (img.heightClass ?? "h-[360px]");
                  const widthClass = typeof img === "string" ? "w-auto" : (img.widthClass ?? "w-auto");
                  return (
                    <img
                      key={i}
                      src={src}
                      alt={`${ex.name} — screen ${i + 1} — ${ex.platform} app built by Moblicode`}
                      loading="lazy"
                      className={`${heightClass} ${widthClass} object-contain flex-shrink-0`}
                    />
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
