import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/data/about";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: about.intro.body },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: about.intro.body },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl container-padding">
      <section className="section-padding">
        <SectionHeading subtitle={about.intro.body}>{about.intro.heading}</SectionHeading>
      </section>

      <section className="section-padding border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
            {about.awards.heading}
          </h2>
          <ul className="space-y-3">
            {about.awards.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-peach" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
          {about.beyond.heading}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.beyond.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-secondary p-5 transition-transform duration-200 hover:scale-[1.02]"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
