import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES as services, SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";


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
          <h1 className="mt-5 max-w-4xl">What we build &amp; execute for our customer's business <em className="font-display italic text-accent">needs</em></h1>
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
          <div className="eyebrow">Business impact</div>
          <h2 className="mt-4 max-w-3xl">What a mobile app can do for your business</h2>
          <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <h3 className="text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/70">{b.description}</p>
                </div>
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

const benefits: { title: string; description: string }[] = [
  {
    title: "Direct line to your customer",
    description: "Push notifications reach people instantly — no ad spend, no algorithm deciding who sees you.",
  },
  {
    title: "Higher conversion, bigger baskets",
    description: "App shoppers convert up to 11x more often than mobile-web visitors, and average order values run 10–50% higher in-app.",
  },
  {
    title: "Customers who come back",
    description: "60% of app customers purchase again within a year, versus roughly 40% of mobile-web-only customers — and app users show up to 5x higher lifetime value.",
  },
  {
    title: "Deeper engagement, every visit",
    description: "App sessions run 3–7x longer than mobile-web visits, and shoppers browse far more of what's on offer.",
  },
  {
    title: "A daily seat on the home screen",
    description: "Every unlock is a free brand impression — repeated visibility no social feed can guarantee.",
  },
  {
    title: "Revenue that outpaces your user share",
    description: "App users are often just 7–16% of a brand's customers, yet can drive up to 62% of total revenue.",
  },
  {
    title: "Personalization at scale",
    description: "Apps can remember preferences, purchase history, and behavior to serve tailored recommendations and content — something a generic website can't do nearly as well.",
  },
  {
    title: "Richer customer data and analytics",
    description: "Real-time tracking of in-app behavior shows you exactly what's popular, where people drop off, and how customer journeys actually unfold — sharper insight than web analytics typically offers.",
  },
  {
    title: "Faster, simpler checkout",
    description: "Saved payment info, one-tap purchasing, and native payment integrations (Apple Pay, Google Pay) cut friction and reduce cart abandonment.",
  },
  {
    title: "New revenue streams",
    description: "In-app purchases, subscriptions, and premium/unlockable features give you monetization options a plain website doesn't support as naturally.",
  },
  {
    title: "Loyalty and gamification",
    description: "Points, rewards, tiered memberships, and app-exclusive discounts are easier to build and track in an app, and they give people a reason to keep coming back.",
  },
  {
    title: "Built-in customer support",
    description: "In-app messaging, chatbots, and feedback tools let customers get help without leaving the experience or hunting for a phone number.",
  },
  {
    title: "Offline access",
    description: "Apps can let people browse, use core features, or queue actions without a live connection — useful for spotty signal or travel, and impossible on a website.",
  },
  {
    title: "Location-based marketing",
    description: "Geofencing and GPS integration let you trigger offers or notifications when a customer is near a store or relevant location.",
  },
  {
    title: "Stronger security",
    description: "Biometric login (Face ID, fingerprint) and native encryption make transactions and account access feel safer than typing a password on mobile web.",
  },
  {
    title: "Operational efficiency",
    description: "Beyond customer-facing use, apps can automate booking/scheduling, order tracking, and inventory management — cutting manual work and errors internally.",
  },
  {
    title: "Free discoverability",
    description: "A presence in the App Store / Google Play is itself a marketing channel — people actively search there for tools in your category.",
  },
];

