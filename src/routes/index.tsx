import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE, CASE_STUDIES } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import iphoneMockup from "@/assets/iphone-ios-mockup.png";
import iphoneMockupLeft from "@/assets/iphone-ios-mockup-left.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moblicode — iOS & Android app development for every category" },
      { name: "description", content: SITE.pitch },
      { property: "og:title", content: "Moblicode — iOS & Android app development for every category" },
      { property: "og:description", content: SITE.pitch },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="rule-bottom">
        <div className="container-page grid gap-10 py-20 md:grid-cols-[1.6fr_1fr] md:py-28">
          <div>
            <div className="eyebrow">US-based · iOS &amp; Android · Est. {SITE.founded}</div>
            <h1 className="mt-5 text-foreground">
              Mobile apps for <em className="font-display italic text-accent">every category</em>.
              Built to ship.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {SITE.pitch}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground hover:opacity-90"
              >
                Start a project
              </Link>
              <Link
                to="/work"
                className="inline-flex h-12 items-center rounded-md border border-foreground/15 px-6 text-sm font-medium hover:border-foreground/40"
              >
                See the work
              </Link>
            </div>
          </div>
          <aside className="rule-top md:rule-top-0 flex flex-col justify-end gap-6 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <Stat n="19+" label={`Years building mobile (since ${SITE.founded})`} />
            <Stat n="1M+" label="App Store downloads on a single client app" />
            <Stat n="26" label="App Store categories covered" />
          </aside>
        </div>
      </section>

      {/* What we do */}
      <section className="rule-bottom">
        <div className="container-page grid gap-12 py-20 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="mt-4">Mobile development solutions for any project.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              { t: "iOS development", d: "Native Swift and SwiftUI applications, App Store submission included.", to: "/services/ios" },
              { t: "Android development", d: "Kotlin and Jetpack Compose for the full range of Android devices and tablets.", to: "/services/android" },
              { t: "App Store submission", d: "We know what gets approved and what gets rejected. 19+ years of submissions.", to: "/services/app-store-submission" },
              { t: "Middle-tier &amp; APIs", d: "The database and API layer that makes the app feel instant.", to: "/services" },
            ].map((c) => (
              <Link key={c.t} to={c.to} className="group rule-top pt-5">
                <h3 className="flex items-baseline justify-between text-foreground">
                  <span dangerouslySetInnerHTML={{ __html: c.t }} />
                  <ArrowUpRight className="h-4 w-4 translate-y-1 text-muted-foreground transition-transform group-hover:-translate-y-0 group-hover:text-accent" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: c.d }} />
                {c.t === "iOS development" && (
                  <img
                    src={iphoneMockup}
                    alt="Polished iPhone showing a native iOS app built by Moblicode"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="mt-5 w-full max-w-[260px] transition-transform group-hover:-translate-y-1"
                  />
                )}
                {c.t === "App Store submission" && (
                  <img
                    src={iphoneMockupLeft}
                    alt="Polished iPhone, mirrored orientation, showing an approved App Store build"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="mt-5 w-full max-w-[260px] transition-transform group-hover:-translate-y-1"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories grid — concrete signal that Moblicode handles every category */}
      <section className="rule-bottom bg-muted/40">
        <div className="container-page py-20">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <div className="eyebrow">Every category</div>
              <h2 className="mt-4">If it's on the App Store, we've shipped one.</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Twenty-six App Store categories. Plus the full range of Games sub-genres on Google Play. We don't pick a vertical — we pick clients we can ship for.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
              {SITE.categories.map((c) => (
                <li key={c} className="flex items-center gap-2 text-foreground/80">
                  <span className="h-1 w-1 rounded-full bg-accent" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Moblicode */}
      <section className="rule-bottom">
        <div className="container-page py-20">
          <div className="eyebrow">Why Moblicode</div>
          <h2 className="mt-4 max-w-3xl">
            We do the difficult parts of mobile so you don't have to learn them the hard way.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              { t: "19+ years, one studio", d: "Daniel has been shipping mobile applications since the App Store was new. That depth shows up in the parts of the build you don't see — review-ready submissions, defensive API design, App Store guideline literacy." },
              { t: "US-based, transparent pricing", d: "Direct engineering with the person building the app. No offshore handoffs, no opaque rate cards, no surprise invoices." },
              { t: "Submission is not optional", d: "Most agencies hand you a build and call it done. We don't. We carry the submission through approval — and if Apple rejects, we fix it." },
            ].map((c) => (
              <div key={c.t}>
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <h3 className="mt-3">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="rule-bottom bg-foreground text-background">
        <div className="container-page py-20">
          <div className="flex items-end justify-between">
            <div>
              <div className="eyebrow !text-background/60">Selected work</div>
              <h2 className="mt-4 text-background">Three apps. Three categories. One studio.</h2>
            </div>
            <Link to="/work" className="hidden text-sm text-background/70 underline-offset-4 hover:underline md:inline">
              All work →
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                to="/work/$slug"
                params={{ slug: cs.slug }}
                className="group block border-t border-background/15 pt-5"
              >
                <div className="flex items-baseline justify-between text-xs text-background/60">
                  <span>{cs.platform} · {cs.category}</span>
                  <span>{cs.year}</span>
                </div>
                <h3 className="mt-3 text-background">{cs.title.split("—")[0].trim()}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{cs.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
                  Read case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-5xl leading-none text-foreground">{n}</div>
      <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
