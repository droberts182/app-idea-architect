import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import launchToWellnessIos from "@/assets/launch-to-wellness-ios.png.asset.json";
import launchToWellnessIos2 from "@/assets/launch-to-wellness-ios-2.png.asset.json";
import launchToWellnessIos3 from "@/assets/launch-to-wellness-ios-3.png.asset.json";

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
  images: string[];
};

const iosExamples: Example[] = [
  {
    name: "Launch to Wellness",
    platform: "iOS",
    category: "Health & Wellness",
    blurb: "iOS & Android mental-health support app connecting clients with therapeutic resources and each other.\n• Built an AI chatbot that functions as a virtual therapist, providing clients with on-demand, conversational support.\n• Developed a forum feature enabling clients to connect with and support one another.\n• Architected the backend on Firebase for authentication, data storage, and real-time updates.",
    images: [launchToWellnessIos.url, launchToWellnessIos2.url, launchToWellnessIos3.url],
  },
  {
    name: "RFX — RecruitFluency",
    platform: "iOS",
    category: "Sports & Recruiting",
    blurb: "A soccer recruiting platform connecting high-school athletes with college coaches, built and owned end-to-end across mobile, web, backend, and infrastructure.\n• Architected native iOS (Swift/SwiftUI) and Android (Kotlin/Jetpack Compose) apps, plus a Flutter web admin portal and a React/Vite club dashboard.\n• Built a NestJS/TypeScript backend on PostgreSQL (Sequelize) with JWT auth and REST APIs, deployed on DigitalOcean and Vercel; developed the database from the ground up.\n• Designed an automated, round-based outreach engine emailing thousands of college coaches via Postmark, with per-coach/gender rate limits, NCAA contact-window rules, and division targeting.\n• Implemented subscription monetization (RevenueCat) with tiered/gated features, live YouTube highlight validation, and profile-completeness gating.",
    images: [],
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
        <div className="eyebrow" dangerouslySetInnerHTML={{ __html: eyebrow }} />
        <h2 className="mt-3">{title}</h2>
        <div className="mt-10 space-y-16">
          {items.map((ex) => (
            <article key={ex.name}>
              <div className="max-w-3xl">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{ex.platform} · {ex.category}</div>
                <h3 className="mt-2 text-foreground">{ex.name}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{ex.blurb}</p>
              </div>
              <div className="mt-8 flex flex-nowrap items-end justify-center gap-6 sm:justify-start overflow-x-auto">
                {ex.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${ex.name} — screen ${i + 1} — ${ex.platform} app built by Moblicode`}
                    loading="lazy"
                    className="h-[360px] w-auto object-contain flex-shrink-0"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
