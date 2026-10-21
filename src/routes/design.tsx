import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { design } from "@/data/design";
import { site } from "@/data/site";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: `Design — ${site.name}` },
      { name: "description", content: design.intro.body },
      { property: "og:title", content: `Design — ${site.name}` },
      { property: "og:description", content: design.intro.body },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignPage,
});

function DesignPage() {
  return (
    <div className="mx-auto max-w-6xl container-padding">
      <section className="section-padding">
        <SectionHeading subtitle={design.intro.body}>{design.intro.heading}</SectionHeading>
      </section>

      <section className="section-padding border-t border-border">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Case studies</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {design.caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{study.title}</h3>
                <span className="shrink-0 text-xs font-medium opacity-60">{study.year}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed opacity-70">{study.description}</p>
              {study.outcome && (
                <p className="mt-4 rounded-xl bg-yellow/30 p-3 text-sm font-medium">
                  {study.outcome}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <Tag key={tag} color="plum">
                    {tag}
                  </Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
