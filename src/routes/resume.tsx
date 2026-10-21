import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Download, ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import cvPreview from "@/assets/cv-preview.png";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: `Resume — ${site.name}` },
      { name: "description", content: `Download ${site.name}'s resume/CV.` },
      { property: "og:title", content: `Resume — ${site.name}` },
      { property: "og:description", content: `Download ${site.name}'s resume/CV.` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl container-padding">
      <section className="section-padding">
        <SectionHeading subtitle="I keep tailored resumes for different roles, so the version you received with my application is the most relevant one. Below is a general multi-page CV you can preview or download.">
          Resume
        </SectionHeading>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={site.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <Download className="h-5 w-5" />
            Download CV
          </a>
          
          <a
            href={site.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <ExternalLink className="h-5 w-5" />
            Open in New Tab
          </a>

          <p className="text-sm opacity-70 sm:ml-auto">Last updated: September 2026</p>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <a
          href={site.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
          title="Click to open full PDF in a new tab"
        >
          <div className="relative">
            <img
              src={cvPreview}
              alt="Preview of multi-page CV"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur-sm">
                <ExternalLink className="h-4 w-4" />
                Open PDF in New Tab
              </span>
            </div>
          </div>
        </a>
        <p className="mt-4 text-center text-sm opacity-60">
          Click the preview image or button above to open the full multi-page CV in a new tab.
        </p>
      </section>
    </div>
  );
}