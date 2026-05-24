import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { trackLead, trackEvent } from "@/lib/analytics";
import { Mail, Phone, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Moblicode — start an iOS or Android app project" },
      { name: "description", content: "Tell us about the mobile app you want to ship. We respond within one business day with scope, timeline, and a fixed estimate." },
      { property: "og:title", content: "Contact Moblicode" },
      { property: "og:description", content: "Start an iOS or Android app project. One business day response." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Moblicode",
        url: `${SITE.url}/contact`,
        mainEntity: { "@id": `${SITE.url}#organization` },
      }),
    }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "ios", budget: "", message: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Fire analytics conversion event FIRST so it lands even if the mail handoff fails.
    trackLead({
      source: "contact_page",
      service: form.service,
      value: 1500, // adjust to your average lead-to-customer math
    });
    trackEvent("form_field_engagement", { service: form.service, budget: form.budget });

    // Without a backend wired yet, hand off via mailto. Easy to swap for a server fn later.
    try {
      const subject = `New project inquiry — ${form.name}${form.company ? ` (${form.company})` : ""}`;
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "—"}`,
        `Company: ${form.company || "—"}`,
        `Service: ${form.service}`,
        `Budget: ${form.budget || "—"}`,
        ``,
        form.message,
      ].join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="rule-bottom">
        <div className="container-page py-20 md:py-28">
          <div className="eyebrow">Contact</div>
          <h1 className="mt-5 max-w-4xl">Tell us what you want to ship.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            One business day response. We'll come back with honest scope, timeline, and a fixed estimate — not a deck.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page grid gap-12 py-16 md:grid-cols-[2fr_1fr]">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Your name" required>
                <input value={form.name} onChange={(e) => update("name", e.target.value)} required className={inputClass} />
              </Field>
              <Field label="Email" required>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required className={inputClass} />
              </Field>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Phone number (optional)">
                <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} maxLength={30} className={inputClass} />
              </Field>
              <Field label="Company (optional)">
                <input value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass} />
              </Field>
            </div>

            <Field label="Tell us about the project" required>
              <textarea value={form.message} onChange={(e) => update("message", e.target.value)} required rows={6} className={inputClass} />
            </Field>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-12 items-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Opening your email client…" : "Send inquiry"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-muted-foreground">
                If your email client didn't open, write directly to{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent underline-offset-2 hover:underline">{SITE.email}</a>.
              </p>
            )}
          </form>

          <aside className="space-y-6 rule-top pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div>
              <div className="eyebrow">Direct</div>
              <ul className="mt-3 space-y-3 text-sm">
                <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent"><Mail className="h-4 w-4" /> {SITE.email}</a></li>
                <li><a href={`tel:${SITE.phoneE164}`} onClick={() => trackEvent("phone_click", { source: "contact_page" })} className="flex items-center gap-2 hover:text-accent"><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a></li>
                <li><a href={SITE.founderLinkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow">What happens next</div>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>1. We read your inquiry within one business day.</li>
                <li>2. We reply with a few clarifying questions, or a scoping call.</li>
                <li>3. You get a fixed estimate, timeline, and engagement terms — in plain language.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {children}
    </label>
  );
}
