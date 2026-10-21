import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillTags } from "@/components/SkillTags";
import { home } from "@/data/home";
import { site } from "@/data/site";
import profileImg from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.title}` },
      { name: "description", content: home.hero.bio },
      { property: "og:title", content: `${site.name} — ${site.title}` },
      { property: "og:description", content: home.hero.bio },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="mx-auto max-w-6xl container-padding">
      {/* Hero */}
      <section className="flex flex-col items-center py-16 text-center sm:py-24">
        <div className="relative">
          <img
            src={profileImg}
            alt={`Portrait of ${home.hero.name}`}
            width={1024}
            height={1024}
            className="h-40 w-40 rounded-full border-4 border-primary object-cover shadow-lg sm:h-52 sm:w-52"
          />
          <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-background bg-green sm:bottom-2 sm:right-2 sm:h-6 sm:w-6" />
        </div>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
          {home.hero.name}
        </h1>
        <p className="mt-2 text-lg font-medium text-muted-foreground sm:text-xl">
          {home.hero.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
          {home.hero.bio}
        </p>
      </section>

      {/* Looking for */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl">
          <SectionHeading>{home.lookingFor.heading}</SectionHeading>
          <ul className="space-y-3">
            {home.lookingFor.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-peach" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding border-t border-border">
        <div className="max-w-3xl">
          <SectionHeading>{home.skills.heading}</SectionHeading>
          <SkillTags groups={home.skills.groups} />
        </div>
      </section>

      {/* Quick links */}
      <section className="section-padding border-t border-border">
        <SectionHeading>{home.quickLinks.heading}</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-3">
          {home.quickLinks.links.map((link) => {
            const colorMap: Record<string, string> = {
              rust: "bg-rust text-white hover:bg-rust/90",
              green: "bg-green text-white hover:bg-green/90",
              plum: "bg-plum text-white hover:bg-plum/90",
            };
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-3xl px-6 py-8 text-center text-lg font-semibold shadow-sm transition-transform duration-200 hover:scale-[1.02] ${colorMap[link.color]}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
