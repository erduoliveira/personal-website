import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-cyan-400 font-bold text-lg tracking-tight hover:text-cyan-300 transition-colors"
          >
            Eduardo R. Oliveira
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800"
            >
              Contact
            </Link>
            <a
              href="https://erduoliveira.github.io/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-md transition-colors"
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
