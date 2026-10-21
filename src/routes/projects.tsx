import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: projects.intro.body },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:description", content: projects.intro.body },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl container-padding">
      <section className="section-padding">
        <SectionHeading subtitle={projects.intro.body}>{projects.intro.heading}</SectionHeading>
      </section>

      <section className="section-padding border-t border-border">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              github={project.github}
              live={project.live}
              color="green"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
