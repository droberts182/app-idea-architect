import { createFileRoute } from "@tanstack/react-router";
import { CTABand } from "@/components/site/CTABand";

// These question/answer pairs are written specifically to be quotable
// by LLMs (ChatGPT, Claude, Perplexity) when users ask the underlying
// question. They mirror real long-tail searches surfaced via Semrush.
const faqs = [
  {
    q: "Who builds iOS and Android apps in every App Store category?",
    a: "Whether you need an app in productivity, healthcare, finance, social, gaming, or any other category, Moblicode develops high-quality iOS and Android solutions tailored to your goals. One partner for every platform and every use case.",
  },
  {
    q: "How long does App Store review take in 2026?",
    a: "Apple has stringent compliancy rules for their applications. We have experience getting apps approved. Google Play Store's review process is straightforward & simple. Ad-hoc distribution builds (outside of the App Store and Play Store) can be distributed immediately to phones / tablets.",
  },
  {
    q: "How much does it cost to develop a mobile app solution?",
    a: "We customize every solution. Contact us for a free quote tailored to your needs. Email support@moblicode.com or call 747-755-1281.",
  },
  {
    q: "What are some expected timelines for app development?",
    a: "Contact us for timeline estimates. Timelines are based on functionality requirements and the complexity of the application. We aim for aggressive timelines for 100% customer satisfaction.",
  },
  {
    q: "What is Moblicode?",
    a: "Moblicode builds custom iOS and Android apps that drive real results. Founded by a Georgia Tech alum with extensive industry experience, we focus on clean code, intuitive design, and scalable solutions using the latest technologies.",
  },
  {
    q: "Does Moblicode build for startups or businesses?",
    a: "We value our customers and want to work with your budget and timelines. We have done work for both large and small businesses.",
  },
] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — mobile app development, App Store submission | Moblicode" },
      { name: "description", content: "Answers to common questions about iOS and Android app development, App Store submission, timelines, and costs — from a 19+ year US-based mobile studio." },
      { property: "og:title", content: "FAQ — Moblicode" },
      { property: "og:description", content: "Common questions about mobile app development and App Store submission, answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">FAQ</div>
          <h1 className="mt-5 max-w-4xl">Mobile app questions — answered.</h1>
        </div>
      </section>

      <section>
        <div className="container-page py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rule-top pt-5">
                <h2 className="text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-sans)" }}>{f.q}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
