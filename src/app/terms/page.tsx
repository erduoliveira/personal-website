import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Eduardo R. Oliveira",
  description: "Terms of Service for Eduardo R. Oliveira's personal website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-slate-50 mb-3">
          Terms of <span className="text-cyan-400">Service</span>
        </h1>
        <div className="w-12 h-1 bg-cyan-500 mb-6 rounded-full" />
        <p className="text-slate-500 text-sm mb-12">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (the &quot;Site&quot;), you
              accept and agree to be bound by these Terms of Service. If you do
              not agree to these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              2. Use of the Site
            </h2>
            <p>
              This Site is a personal portfolio website provided for
              informational purposes only. You may browse the content for
              personal, non-commercial use. You agree not to misuse the Site or
              help anyone else do so.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content on this Site, including text, graphics, code snippets,
              and project descriptions, is the property of Eduardo R. Oliveira
              unless otherwise noted. You may not reproduce or distribute any
              content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              4. Disclaimer of Warranties
            </h2>
            <p>
              The Site is provided &quot;as is&quot; without any warranties,
              express or implied. Eduardo R. Oliveira makes no representations or
              warranties regarding the accuracy or completeness of the content on
              this Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Eduardo R. Oliveira shall
              not be liable for any indirect, incidental, special, or
              consequential damages arising out of or in connection with your use
              of this Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              6. External Links
            </h2>
            <p>
              This Site may contain links to third-party websites. These links
              are provided for convenience only. Eduardo R. Oliveira has no
              control over the content of those sites and accepts no
              responsibility for them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              7. Changes to Terms
            </h2>
            <p>
              Eduardo R. Oliveira reserves the right to modify these terms at
              any time. Continued use of the Site after any changes constitutes
              your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              8. Contact
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact{" "}
              <a
                href="mailto:eduardo82926@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                eduardo82926@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
