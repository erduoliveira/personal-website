import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Eduardo R. Oliveira",
  description: "Projects built by Eduardo R. Oliveira.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-slate-50 mb-3">
          My <span className="text-cyan-400">Projects</span>
        </h1>
        <div className="w-12 h-1 bg-cyan-500 mb-4 rounded-full" />
        <p className="text-slate-400 mb-14 max-w-xl">
          A selection of personal and professional projects I&apos;ve worked on.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all hover:-translate-y-1"
            >
              <div className="relative w-full h-48 bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-slate-50 font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
