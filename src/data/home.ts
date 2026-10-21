export const home = {
  hero: {
    name: "Jade Collins",
    title: "Bio & CS @ NMSU ’27 | Discovery Scholars Program Scholar | AI4ALL Ignite Fellow ’26 | TechX ’25 | HSF Scholar | TRIO STEM-H Scholar | National Merit Scholar",
    bio: "",
  },
  lookingFor: {
    heading: "What I'm looking for",
    items: [
      "Software Engineering/Developer internships (Summer 2027)",
      "UX/UI Design internships (Summer 2027)",
      "Computational biology / Bioinformatics REUs or research internships (Summer 2027)",
      "Full-time New Grad roles starting late Spring/Summer 2028",
    ],
  },
  skills: {
    heading: "Skills",
    groups: [
      {
        label: "Computer Science",
        color: "green" as const,
        tags: ["Python", "Java", "HTML", "CSS", "JavaScript", "SQL", "R", "C"],
      },
      {
        label: "UX/UI Design",
        color: "plum" as const,
        tags: ["Figma", "User Research", "Prototyping", "Accessibility"],
      },
      {
        label: "Research",
        color: "rust" as const,
        tags: ["Bioinformatics", "Genomics", "Phylogenetics", "R"],
      },
    ] satisfies { label: string; color: "green" | "rust" | "plum"; tags: string[] }[],
  },
  quickLinks: {
    heading: "Explore my work",
    links: [
      { label: "Research", href: "/research", color: "rust" },
      { label: "CS Projects", href: "/projects", color: "green" },
      { label: "UX/UI Design", href: "/design", color: "plum" },
    ],
  },
};
