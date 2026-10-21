import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Download, ExternalLink } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: `Resume — ${site.name}` },
      { name: "description", content: `Download ${site.name}'s resume or CV.` },
      { property: "og:title", content: `Resume — ${site.name}` },
      { property: "og:description", content: `Download ${site.name}'s resume or CV.` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

const documents = [
  {
    label: "Resume",
    description: "A general, concise one-page summary.",
    pdf: site.resumePdf,
  },
  {
    label: "CV",
    description: "A detailed multi-page record of my research, projects, and experience.",
    pdf: site.cvPdf,
  },
];

function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl container-padding">
      <section className="section-padding">
        <SectionHeading subtitle="I am constantly updating my resume so this may not be the most updated version. Both resume and CV are available to download or view in a new tab.">
          Resume &amp; CV
        </SectionHeading>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {documents.map((doc) => (
            <div
              key={doc.label}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{doc.label}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed opacity-70">
                {doc.description}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={doc.pdf}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  <Download className="h-5 w-5" />
                  Download {doc.label}
                </a>
                <a
                  href={doc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                  Open in New Tab
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm opacity-70">Last updated: October 2026</p>
      </section>
    </div>
  );
}