import { Link } from "@tanstack/react-router";

export function CTABand({
  eyebrow = "Start a project",
  headline = "Want to develop an app or game? We can build it.",
  body = "Tell us what you're trying to build.",
}: {
  eyebrow?: string;
  headline?: string;
  body?: string;
}) {
  return (
    <section className="rule-top rule-bottom bg-foreground text-background">
      <div className="container-page grid gap-8 py-20 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <div className="eyebrow !text-background/60">{eyebrow}</div>
          <h2 className="mt-3 max-w-2xl text-background">{headline}</h2>
          <p className="mt-4 max-w-xl text-base text-background/75">{body}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  );
}
