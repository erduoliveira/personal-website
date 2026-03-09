export interface Project {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  link: string;
  architecture: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    name: "Personal Website",
    slug: "personal-website",
    shortDescription:
      "My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    description:
      "My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It showcases my experience, skills, and personal projects.",
    link: "https://github.com/erduoliveira/personal-website",
    architecture:
      "Built with Next.js 15 App Router, TypeScript for type safety, and Tailwind CSS for styling. Deployed on Vercel with automatic CI/CD pipeline.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
