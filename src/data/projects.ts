export interface Project {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  link: string;
  architecture: string;
  techStack: string[];
  image: string;
}

export const projects: Project[] = [
  {
    name: "Shelflog",
    slug: "shelflog",
    shortDescription:
      "Shelflog is a personal project that aims to track games. It serves as a digital bookshelf for my gaming collection.",
    description:
      "ShelfLog was built for players who like to track their games — especially those who want to stop buying more and finally finish what’s already on their shelf. Whether you never started it or stopped halfway through, this is your place to close the loop.",
    link: "https://shelflog.eduoliveira.dev/demo",
    architecture:
      "Built with React, TypeScript, and Tailwind CSS on the frontend, and NestJS with MongoDB on the backend.\n\nHosted on AWS with a serverless architecture using Lambda and API Gateway.\n\nThe frontend is a single-page application that communicates with the backend via RESTful APIs. The backend handles game data management, and integrates with third-party APIs for game information.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "MongoDB",
      "AWS",
    ],
    image: "/shelflog-demo.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
