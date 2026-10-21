import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { research } from "@/data/research";
import { site } from "@/data/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: `Research — ${site.name}` },
      { name: "description", content: research.intro.body },
      { property: "og:title", content: `Research — ${site.name}` },
      { property: "og:description", content: research.intro.body },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl container-padding">
      <section className="section-padding">
        <SectionHeading subtitle={research.intro.body}>{research.intro.heading}</SectionHeading>
      </section>

      <section className="section-padding border-t border-border">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {research.projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <span className="shrink-0 text-xs font-medium opacity-60">{project.year}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed opacity-70">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} color="rust">
                    {tag}
                  </Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="conferences" className="section-padding border-t border-border">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          {research.conferences.heading}
        </h2>
        <div className="space-y-4">
          {research.conferences.items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1 rounded-2xl border border-border bg-secondary p-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="shrink-0 text-sm font-semibold opacity-60">{item.year}</span>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm opacity-70">{item.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
