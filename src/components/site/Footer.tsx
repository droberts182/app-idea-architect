import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="rule-top mt-24 bg-background">
      <div className="container-page py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl text-foreground">Moblicode</div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.pitch}
            </p>
          </div>
          <div>
            <div className="eyebrow mb-3">Services</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/ios" className="hover:text-accent">iOS development</Link></li>
              <li><Link to="/services/android" className="hover:text-accent">Android development</Link></li>
              <li><Link to="/services/app-store-submission" className="hover:text-accent">iOS & Android distribution</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/faq" className="hover:text-accent">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><span>{SITE.email}</span></li>
              <li><a href={`tel:${SITE.phoneE164}`} className="hover:text-accent">{SITE.phoneDisplay}</a></li>
              <li><a href={SITE.founderLinkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a></li>
              <li><a href={SITE.googleProfile} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Google</a></li>
            </ul>
          </div>
        </div>
        <div className="rule-top mt-12 flex flex-col gap-3 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p>US-based · iOS &amp; Android · Established {SITE.founded}</p>
        </div>
      </div>
    </footer>
  );
}
