import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { CTABand } from "@/components/site/CTABand";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import iphoneMockup from "@/assets/iphone-ios-mockup.png";
import iphoneMockupLeft from "@/assets/iphone-ios-mockup-left.png";
import androidMockup from "@/assets/android-mockup.png";
import androidMockupLeft from "@/assets/android-mockup-left.png";

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
              Mobile App &amp; Game solutions to fit <em className="font-display italic text-accent">any project</em>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Moblicode builds iOS &amp; Android (Apps and Games) for every category of the iOS App Store &amp; Google Play Store — our engineers have experience building mobile since 2009.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground hover:opacity-90"
              >
                Start a project
              </Link>
            </div>
          </div>
          <aside className="rule-top md:rule-top-0 flex flex-col justify-end gap-6 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <Stat n="19+" label="Years building mobile app solutions for customers" />
            <Stat n="1M+" label="Our engineers have developed for apps downloaded millions of times" />
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
              { t: "iOS (App Store) &amp; Android (Play Store) distribution", d: "Public store releases plus ad-hoc (in-house) distribution. 19+ years of submissions — we know what gets approved.", to: "/services/app-store-submission" },
              { t: "Middle-tier &amp; APIs", d: "The database and API layer that makes the app feel instant.", to: "/services" },
            ].map((c) => (
              <Link key={c.t} to={c.to} className="group rule-top pt-5">
                <h3 className="flex items-baseline justify-between text-foreground">
                  <span dangerouslySetInnerHTML={{ __html: c.t }} />
                  <ArrowUpRight className="h-4 w-4 translate-y-1 text-muted-foreground transition-transform group-hover:-translate-y-0 group-hover:text-accent" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: c.d }} />
                {c.t === "iOS development" && (
                  <div className="mt-5 flex items-center justify-center gap-2 transition-transform group-hover:-translate-y-1">
                    <img
                      src={iphoneMockup}
                      alt="Polished iPhone showing a native iOS app built by Moblicode"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="w-1/2 max-w-[180px]"
                    />
                    <img
                      src={iphoneMockupLeft}
                      alt="Polished iPhone, mirrored orientation, showing another iOS app build"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="w-1/2 max-w-[180px]"
                    />
                  </div>
                )}
                {c.t === "Android development" && (
                  <div className="mt-5 flex items-center justify-center gap-2 transition-transform group-hover:-translate-y-1">
                    <img
                      src={androidMockup}
                      alt="Polished Android Pixel phone showing a native Android app built by Moblicode"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="w-1/2 max-w-[180px]"
                    />
                    <img
                      src={androidMockupLeft}
                      alt="Polished Android Pixel phone, mirrored orientation, showing another Android app build"
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="w-1/2 max-w-[180px]"
                    />
                  </div>
                )}
                {c.t === "Middle-tier &amp; APIs" && (
                  <div className="mt-5 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                    <svg
                      viewBox="0 0 380 200"
                      role="img"
                      aria-label="Mock database schema diagram with users, sessions and events tables connected by relationships"
                      className="w-full max-w-[380px] text-foreground"
                    >
                      <defs>
                        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" opacity="0.5" />
                        </marker>
                      </defs>
                      {/* users table */}
                      <g>
                        <rect x="8" y="20" width="110" height="110" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.4" />
                        <rect x="8" y="20" width="110" height="20" fill="currentColor" fillOpacity="0.08" />
                        <text x="16" y="34" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" fill="currentColor">users</text>
                        <text x="16" y="56" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">id  pk</text>
                        <text x="16" y="72" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">email</text>
                        <text x="16" y="88" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">name</text>
                        <text x="16" y="104" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">created_at</text>
                      </g>
                      {/* sessions table */}
                      <g>
                        <rect x="135" y="50" width="110" height="100" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.4" />
                        <rect x="135" y="50" width="110" height="20" fill="currentColor" fillOpacity="0.08" />
                        <text x="143" y="64" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" fill="currentColor">sessions</text>
                        <text x="143" y="86" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">id  pk</text>
                        <text x="143" y="102" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">user_id  fk</text>
                        <text x="143" y="118" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">token</text>
                        <text x="143" y="134" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">expires_at</text>
                      </g>
                      {/* events table */}
                      <g>
                        <rect x="262" y="30" width="110" height="120" rx="4" fill="none" stroke="currentColor" strokeOpacity="0.4" />
                        <rect x="262" y="30" width="110" height="20" fill="currentColor" fillOpacity="0.08" />
                        <text x="270" y="44" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" fill="currentColor">events</text>
                        <text x="270" y="66" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">id  pk</text>
                        <text x="270" y="82" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">user_id  fk</text>
                        <text x="270" y="98" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">type</text>
                        <text x="270" y="114" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">payload</text>
                        <text x="270" y="130" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fill="currentColor" opacity="0.7">at</text>
                      </g>
                      {/* relations */}
                      <path d="M118,75 L135,100" stroke="currentColor" strokeOpacity="0.5" fill="none" markerEnd="url(#arr)" />
                      <path d="M118,75 C150,40 220,40 262,82" stroke="currentColor" strokeOpacity="0.5" fill="none" markerEnd="url(#arr)" />
                    </svg>
                  </div>
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
