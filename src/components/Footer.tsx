import { Mail, MapPin, Github, Linkedin, FileText } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl container-padding py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">{site.name}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed opacity-80">
              {site.title}. Open to software, UX/UI, and research opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide opacity-70">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li className="inline-flex items-center gap-2">
                  <span className="font-mono text-xs">📞</span>
                  {site.phone}
                </li>
              )}
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {site.location}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide opacity-70">Elsewhere</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                >
                  <FileText className="h-4 w-4 shrink-0" />
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} {site.name}. Built with React + Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
