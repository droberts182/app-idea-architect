import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";


const services = [
  {
    to: "/services/ios",
    eyebrow: "iOS",
    title: "iOS app development",
    blurb: "iOS (iPhone/iPad) apps and games for all categories of the App Store. Ad-hoc (outside of the App Store) distribution is always an option. Fully native development using Swift and SwiftUI for smooth performance, modern UI, and seamless integration with Apple's ecosystem (iOS, iPadOS, watchOS, and visionOS where applicable).",
    keywords: ["iOS app development company", "hire iOS developer", "iPhone app developers"],
  },
  {
    to: "/services/android",
    eyebrow: "Android",
    title: "Android app development",
    blurb: "Android (Phone / Tablet) applications built for the next generation of apps. Native Android development using Kotlin and Jetpack Compose for clean architecture, beautiful UIs, and excellent performance. UI/UX design, backend integration (Firebase, REST APIs, etc.), push notifications, in-app purchases, subscriptions, analytics, and Google Play optimization.",
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
          <div className="eyebrow">Why mobile</div>
          <h2 className="mt-4 max-w-3xl">Reasons businesses want a mobile app</h2>
          <div className="mt-10 grid gap-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="grid gap-4 md:grid-cols-[1fr_2fr]">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-foreground">{r.title}</h3>
                </div>
                <ul className="space-y-1 text-xs leading-snug text-foreground/70">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>



        </div>
      </section>

      <section className="rule-top">
        <div className="container-page py-20">
          <div className="eyebrow">Our Customers</div>
          <h2 className="mt-4 max-w-3xl">Startups, Small - Medium Sized Businesses, Individuals</h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">We value our customers and aim for <em className="font-display italic text-accent">100% customer satisfaction</em>.</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}

const reasons: { title: string; points: string[] }[] = [
  {
    title: "Boost customer engagement and retention",
    points: [
      "Push notifications, personalized content, and in-app messaging drive repeat visits and higher engagement (often 3x higher than websites).",
      "Loyalty programs, rewards, and seamless reordering (e.g., Starbucks-style) increase retention and lifetime value. Keeping existing customers is far cheaper than acquiring new ones.",
      "A direct channel bypasses social media algorithms and browser friction.",
    ],
  },
  {
    title: "Increase sales and revenue",
    points: [
      "Faster, more convenient purchasing with saved payment info, one-tap checkout, and in-app purchases.",
      "Mobile commerce continues to grow rapidly; apps often convert at much higher rates (e.g., 157% higher than mobile sites in some data).",
      "New monetization opportunities: subscriptions, in-app sales, upsells, and exclusive deals.",
    ],
  },
  {
    title: "Enhance brand visibility and awareness",
    points: [
      "An app icon on a user's home screen provides constant, passive brand exposure without ongoing ad spend.",
      "Appears in app stores, improving discoverability and reinforcing your brand as modern and customer-centric.",
    ],
  },
  {
    title: "Deliver superior customer experience and service",
    points: [
      "24/7 access to services, booking, support, tracking, or information.",
      "Personalized experiences based on user data, behavior, and preferences (many customers prefer or expect this).",
      "Faster support (chat, FAQs, self-service) leading to higher satisfaction and loyalty.",
    ],
  },
  {
    title: "Gather valuable customer insights and data",
    points: [
      "Detailed analytics on behavior, preferences, and usage that websites often can't match.",
      "Enables better product development, targeted marketing, and personalized offers.",
    ],
  },
  {
    title: "Streamline internal operations and efficiency",
    points: [
      "Employee-facing apps for field service, inventory management, CRM, scheduling, or sales tools.",
      "Automation of tasks, real-time data sync, and reduced paperwork.",
    ],
  },
  {
    title: "Stay competitive and meet customer expectations",
    points: [
      "In a mobile-first world, customers (especially younger demographics) expect apps for convenience.",
      "Differentiates you from competitors who only have websites; can become a market advantage or necessity in industries like e-commerce, finance, health, retail, food delivery, etc.",
    ],
  },
  {
    title: "Support specific business models or industries",
    points: [
      "E-commerce / retail: better shopping experience, AR try-ons, wish lists.",
      "Service businesses (booking, fitness, education): scheduling, progress tracking, content delivery.",
      "B2B: client portals, project management, or field tools.",
      "Finance / health: secure transactions, monitoring, telehealth features.",
    ],
  },
  {
    title: "Marketing and loyalty channel",
    points: [
      "Built-in marketing tools (notifications, geofencing, referrals).",
      "Effective for building community, running campaigns, and fostering long-term relationships.",
    ],
  },
  {
    title: "Future-proofing and scalability",
    points: [
      "Prepares for emerging tech like AI personalization, AR/VR features, wearables integration, or offline functionality.",
      "Provides an owned platform less dependent on third-party platforms (Apple/Google policies, web changes).",
    ],
  },
];

