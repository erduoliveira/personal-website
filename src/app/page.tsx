import Link from "next/link";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "GCP",
  "React Native",
  "CI/CD",
  "REST APIs",
  "Microfrontends",
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Grupo Boticário",
    period: "Jan 2023 — Jun 2025",
    tags: [
      "React",
      "Microfrontends",
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    description:
      "Led development of microfrontend architecture and scalable backend services for one of Brazil's largest beauty groups.",
  },
  {
    title: "Mid-Level Full Stack Developer & Tech Lead",
    company: "Axion Digital",
    period: "Oct 2021 — Dec 2022",
    tags: [
      "React",
      "React Native",
      "PWA",
      "Next.js",
      "NestJS",
      "Parse Server",
      "MongoDB",
      "Firebase",
      "AWS",
      "GCP",
      "Docker",
    ],
    description:
      "Served as Tech Lead, architecting and delivering full-stack solutions across web and mobile platforms.",
  },
  {
    title: "Junior Full Stack Developer",
    company: "Axion Digital",
    period: "Apr 2021 — Sep 2021",
    tags: [
      "React",
      "React Native",
      "PWA",
      "Node.js",
      "Parse Server",
      "MongoDB",
      "Firebase",
    ],
    description:
      "Built and maintained cross-platform applications using React and React Native alongside Node.js backends.",
  },
  {
    title: "Full Stack Intern",
    company: "Axion Digital",
    period: "Sep 2020 — Mar 2021",
    tags: ["React", "Node.js", "MongoDB"],
    description:
      "Contributed to web application development as part of the engineering team.",
  },
  {
    title: "QA Intern",
    company: "Cielo",
    period: "Jan 2019 — Dec 2019",
    tags: ["Java", "Ruby", "JavaScript", "Cucumber", "BDD"],
    description:
      "Developed and maintained automated test suites using BDD methodology with Cucumber.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-50 mb-4 leading-tight">
            Eduardo R.{" "}
            <span className="text-cyan-400">Oliveira</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-slate-400 font-medium mb-6">
            Full Stack Developer
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-10 leading-relaxed">
            5+ years building scalable web and mobile applications with modern
            TypeScript, React, and Node.js stacks. Based in{" "}
            <span className="text-slate-300">Oviedo, Florida, USA</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
              Download CV
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 hover:bg-slate-800 font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-3">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mb-10 rounded-full" />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I&apos;m a 29-year-old Brazilian Full Stack Developer with 5
                years of professional experience building modern web and mobile
                applications. I&apos;m passionate about crafting clean,
                performant, and maintainable code.
              </p>
              <p>
                My main stack includes TypeScript, JavaScript, React, Next.js,
                Node.js, and NestJS on the backend, along with cloud platforms
                like AWS and GCP, and containerization with Docker.
              </p>
              <p>
                I currently live in Oviedo, Florida, USA with my wife and young
                daughter. Outside of coding, I enjoy working out and playing
                video games.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-slate-50 font-semibold mb-4 text-sm uppercase tracking-widest text-cyan-400">
                  Quick Info
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { label: "Location", value: "Oviedo, FL, USA" },
                    { label: "Experience", value: "5+ years" },
                    {
                      label: "Languages",
                      value: "Portuguese (Native), English (Advanced)",
                    },
                    { label: "Work Auth", value: "USA — L-2 Visa" },
                    {
                      label: "Email",
                      value: "eduardo82926@gmail.com",
                      href: "mailto:eduardo82926@gmail.com",
                    },
                  ].map(({ label, value, href }) => (
                    <li key={label} className="flex gap-2">
                      <span className="text-slate-500 w-28 shrink-0">
                        {label}
                      </span>
                      {href ? (
                        <a
                          href={href}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-slate-200">{value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-3">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mb-10 rounded-full" />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg text-sm font-medium hover:border-cyan-500 hover:text-cyan-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-3">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mb-10 rounded-full" />
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-700 ml-[7px] hidden sm:block" />
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="sm:pl-10 relative"
                >
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 border-2 border-slate-900 hidden sm:block" />
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-slate-50 font-semibold text-lg">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-slate-500 text-sm shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-slate-700 text-slate-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-50 mb-3">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mb-10 rounded-full" />
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 max-w-2xl">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-slate-50 font-semibold text-lg">
                  Bachelor&apos;s in Computer Engineering
                </h3>
                <p className="text-cyan-400 text-sm font-medium mt-1">
                  UTFPR — Universidade Tecnológica Federal do Paraná
                </p>
              </div>
              <span className="text-slate-500 text-sm shrink-0">
                Jul 2015 — Jul 2021
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
