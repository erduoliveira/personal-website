import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Eduardo R. Oliveira. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:eduardo82926@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/eduardo-oliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
