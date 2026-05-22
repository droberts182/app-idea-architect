import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="rule-bottom sticky top-0 z-40 bg-background/85 backdrop-blur">
      <div className="container-page flex h-24 items-center justify-between md:h-28">
        <Link to="/" className="flex items-center gap-3" aria-label="Moblicode home">
          <img
            src="/moblicode-logo.png"
            alt="Moblicode"
            className="h-16 w-auto sm:h-20 md:h-24"
            width={320}
            height={96}
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex h-9 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="rule-top md:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-accent text-sm font-medium text-accent-foreground"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
