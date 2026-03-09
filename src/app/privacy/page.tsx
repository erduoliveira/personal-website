import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Eduardo R. Oliveira",
  description: "Privacy Policy for Eduardo R. Oliveira's personal website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-slate-50 mb-3">
          Privacy <span className="text-cyan-400">Policy</span>
        </h1>
        <div className="w-12 h-1 bg-cyan-500 mb-6 rounded-full" />
        <p className="text-slate-500 text-sm mb-12">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how Eduardo R. Oliveira
              (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) handles
              information when you visit this personal portfolio website (the
              &quot;Site&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              2. Information I Do Not Collect
            </h2>
            <p>
              This Site does not use tracking cookies, analytics services, or
              collect any personally identifiable information automatically. I do
              not maintain user accounts and do not store any data submitted
              through this Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              3. Information You Voluntarily Provide
            </h2>
            <p>
              If you choose to contact me via email at{" "}
              <a
                href="mailto:eduardo82926@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                eduardo82926@gmail.com
              </a>
              , I will receive your email address and any information you include
              in your message. This information is used solely to respond to your
              inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              4. Third-Party Services
            </h2>
            <p>
              This Site may be hosted on Vercel and may contain links to external
              platforms such as GitHub and LinkedIn. These third-party services
              have their own privacy policies, and I encourage you to review
              them. I am not responsible for the privacy practices of these
              external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              5. Cookies
            </h2>
            <p>
              This Site does not set cookies on your browser. Third-party
              services (such as the hosting platform) may set their own cookies
              for operational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              6. Children&apos;s Privacy
            </h2>
            <p>
              This Site is not directed to children under the age of 13, and I
              do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              I reserve the right to update this Privacy Policy at any time.
              Changes will be reflected by updating the &quot;Last updated&quot;
              date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-50 mb-3">
              8. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              me at{" "}
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
