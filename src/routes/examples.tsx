import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import launchToWellnessIos from "@/assets/launch-to-wellness-ios.png.asset.json";
import launchToWellnessIos2 from "@/assets/launch-to-wellness-ios-2.png.asset.json";

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

type Example = {
  name: string;
  platform: "iOS" | "Android";
  category: string;
  blurb: string;
  image: string;
};

const iosExamples: Example[] = [
  {
    name: "Launch to Wellness",
    platform: "iOS",
    category: "Health & Wellness",
    blurb: "Native iOS mindfulness guide with an in-app conversational assistant, resource library, community forum, and support contact — all wrapped in a calm, image-forward interface.",
    image: launchToWellnessIos.url,
  },
  {
    name: "Launch to Wellness — Meet The Team",
    platform: "iOS",
    category: "Health & Wellness",
    blurb: "Team directory screen featuring clinician headshots, quick-dial contact, and tab-based navigation across Team, Info, Forum, Guide, and Contact sections.",
    image: launchToWellnessIos2.url,
  },
];

const androidExamples: Example[] = [];


function ExamplesPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Examples</div>
          <h1 className="mt-5 max-w-4xl">
            A selection of iOS &amp; Android apps we've <em className="font-display italic text-accent">shipped</em>.
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

function ExampleSection({ title, eyebrow, items }: { title: string; eyebrow: string; items: Example[] }) {
  return (
    <section className="rule-bottom">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-4 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <div className="eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }} />
            <h2 className="mt-3">{title}</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {items.map((ex) => (
            <article key={ex.name} className="group">
              <div className="flex items-center justify-center overflow-hidden rounded-lg bg-muted/40 transition-transform group-hover:-translate-y-1">
                <img
                  src={ex.image}
                  alt={`${ex.name} — ${ex.platform} app built by Moblicode`}
                  loading="lazy"
                  className="h-auto w-full max-w-[360px]"
                />
              </div>

              <div className="mt-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{ex.platform} · {ex.category}</div>
                <h3 className="mt-2 text-foreground">{ex.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
