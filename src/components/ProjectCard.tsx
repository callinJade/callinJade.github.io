import { ExternalLink, Github } from "lucide-react";
import { TagList } from "./Tag";
import { Tag } from "./Tag";

interface ProjectCardProps {
  title: string;
  year: number;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  color?: "green" | "rust" | "plum";
}

export function ProjectCard({ title, year, description, tags, github, live, color = "green" }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <span className="shrink-0 text-base font-medium opacity-70">{year}</span>
      </div>  
      <p className="mt-2 text-sm leading-relaxed opacity-70">{description}</p>

      {/* <div className="mt-4">
        <TagList tags={tags} color={color} />
      </div> */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} color={color}>
            {tag}
          </Tag>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
