import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Design", href: "/design" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between container-padding py-4">
        <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
          {site.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-6xl container-padding py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
