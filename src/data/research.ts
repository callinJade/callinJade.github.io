export const research = {
  intro: {
    heading: "Research",
    body: "My current research is on the evolutionary history of mimosine production in mimisoid legumes, using plant phylogenetics and bioinformatic techniques. ",
  },
  projects: [
    {
      title: "Single-cell atlas of stress response",
      year: "2025",
      description:
        "Built an RNA-seq pipeline to cluster and visualize 40,000+ cells across multiple timepoints, identifying candidate regulatory modules involved in stress response.",
      tags: ["Python", "Scanpy", "Single-cell RNA-seq"],
    },
    {
      title: "Variant calling workflow for non-model organisms",
      year: "2024",
      description:
        "Developed a reproducible Snakemake workflow for alignment, variant calling, and quality control tailored to a newly sequenced plant genome.",
      tags: ["Snakemake", "BWA", "GATK", "Bioinformatics"],
    },
    {
      title: "Phylogenetic network inference",
      year: "2024",
      description:
        "Explored graph-based methods for inferring reticulate evolutionary history using simulated and empirical datasets.",
      tags: ["R", "Network analysis", "Evolution"],
    },
  ],
  conferences: {
    heading: "Conference Presentations",
    items: [
      {
        year: "2025",
        title: "Poster — Single-cell stress atlas in Arabidopsis",
        venue: "International Plant Molecular Biology Congress",
      },
      {
        year: "2024",
        title: "Talk — Reproducible variant calling in non-model species",
        venue: "Regional Bioinformatics Meet",
      },
      {
        year: "2024",
        title: "Poster — Network approaches to reticulate evolution",
        venue: "Society for Molecular Biology and Evolution",
      },
    ],
  },
};
