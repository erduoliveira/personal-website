import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Eduardo R. Oliveira",
  description: "Get in touch with Eduardo R. Oliveira.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-slate-50 mb-3">
          Get in <span className="text-cyan-400">Touch</span>
        </h1>
        <div className="w-12 h-1 bg-cyan-500 mb-6 rounded-full" />
        <p className="text-slate-400 mb-14 max-w-xl leading-relaxed">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a conversation about technology. Feel free to
          reach out!
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="mailto:eduardo82926@gmail.com"
            className="group flex items-start gap-4 bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-slate-50 font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                Email
              </h2>
              <p className="text-slate-400 text-sm">eduardo82926@gmail.com</p>
              <p className="text-cyan-400 text-sm mt-2 group-hover:underline">
                Send an email →
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/eduardo-oliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <h2 className="text-slate-50 font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                LinkedIn
              </h2>
              <p className="text-slate-400 text-sm">
                linkedin.com/in/eduardo-oliveira
              </p>
              <p className="text-cyan-400 text-sm mt-2 group-hover:underline">
                View profile →
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
