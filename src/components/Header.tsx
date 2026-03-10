import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-cyan-400 font-bold text-base sm:text-lg tracking-tight hover:text-cyan-300 transition-colors shrink-0"
          >
            <span className="hidden xs:inline">Eduardo R. Oliveira</span>
            <span className="xs:hidden">Eduardo R.</span>
          </Link>

          <nav className="flex items-center gap-0.5 sm:gap-2">
            <Link
              href="/"
              className="hidden sm:block text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-800"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-slate-300 hover:text-cyan-400 transition-colors px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-md hover:bg-slate-800"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-cyan-400 transition-colors px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-md hover:bg-slate-800"
            >
              Contact
            </Link>
            <a
              href="https://erduoliveira.github.io/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 sm:ml-2 px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-md transition-colors"
            >
              <span className="hidden xs:inline">Download CV</span>
              <span className="xs:hidden">CV</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
