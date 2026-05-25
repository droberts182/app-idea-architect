import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";


const services = [
  {
    to: "/services/ios",
    eyebrow: "iOS",
    title: "iOS app development",
    blurb: "iOS (iPhone/iPad) apps and games for all categories of the App Store. Ad-hoc (outside of the App Store) distribution is always an option.",
    keywords: ["iOS app development company", "hire iOS developer", "iPhone app developers"],
  },
  {
    to: "/services/android",
    eyebrow: "Android",
    title: "Android app development",
    blurb: "Android (Phone / Tablet) applications built for the next generation of apps.",
    keywords: ["android app development company", "custom mobile app development"],
  },
  {
    to: "/contact",
    eyebrow: "Database",
    title: "Database design",
    blurb: "Middle-tier APIs & databases that tie into mobile applications we develop.",
    keywords: ["database development", "backend development", "API development"],
  },
  {
    to: "/services/app-store-submission",
    eyebrow: "Distribution",
    title: "iOS (App Store) & Android (Play Store) distribution and ad-hoc (in house) distribution",
    blurb: "Release your app through the iOS (App Store) & Android (Play Store) or distribute your mobile app in house (ad-hoc distribution).",
    keywords: ["app store submission service", "ad hoc app distribution", "in house app distribution"],
  },
] as const;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mobile app development services — iOS, Android, App Store submission | Moblicode" },
      { name: "description", content: "Native iOS and Android app development plus end-to-end App Store and Google Play submission. US-based, 19+ years, every category." },
      { property: "og:title", content: "Mobile app development services — Moblicode" },
      { property: "og:description", content: "Native iOS and Android app development plus end-to-end App Store and Google Play submission." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "Service", name: s.title, url: `${SITE.url}${s.to}`, provider: { "@id": `${SITE.url}#organization` } },
        })),
      }),
    }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Services</div>
          <h1 className="mt-5 max-w-4xl">What we build &amp; execute for our customer's needs</h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {SITE.pitch}
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-16">
          <div className="grid gap-14">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="group rule-top grid gap-6 pt-10 md:grid-cols-[1fr_2fr]">
                <div>
                  <div className="eyebrow">{s.eyebrow}</div>
                  <h2 className="mt-3 text-foreground">{s.title}</h2>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-foreground/85">{s.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rule-top">
        <div className="container-page py-20">
          <div className="eyebrow">Our Customers</div>
          <h2 className="mt-4 max-w-3xl">Startups, Small - Medium Sized Businesses, Individuals</h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">We value our customers and aim for 100% customer satisfaction.</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
