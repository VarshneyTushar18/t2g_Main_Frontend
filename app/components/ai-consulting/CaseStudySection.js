"use client";

import ScrollReveal from "./ScrollReveal";

const ACTIONS = [
  "Ran a full AI Opportunity Audit across sales, support and operations workflows",
  "Built a custom AI assistant to triage and draft responses to incoming customer emails",
  "Automated order-entry and stock-reconciliation workflows using generative AI and existing ERP data",
  "Delivered a live AI-powered reporting dashboard replacing manual spreadsheet reporting",
];

const RESULTS = [
  { value: "60%", label: "Order processing time reduced" },
  { value: "<2 hrs", label: "Email response (from 24 hrs)" },
  { value: "Same-day", label: "Reporting (from 3 days)" },
  { value: "1.5 FTE", label: "Manual work reallocated" },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="case-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="max-w-3xl mb-10">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            Case Study
          </p>
          <h2
            id="case-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            From Manual Back-Office to 60% Faster Order Processing
          </h2>
          <p className="mt-4 text-[var(--ai-muted)] leading-relaxed">
            A national logistics and wholesale distribution business approached Tech2Globe
            with an operations team drowning in manual order entry, email-based customer
            support and spreadsheet-based reporting that took days to compile.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <ScrollReveal className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--ai-border)] bg-white p-6 md:p-8 shadow-[var(--ai-shadow)] h-full">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--ai-purple)] mb-4">
                What we did
              </h3>
              <ul className="space-y-3">
                {ACTIONS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--ai-muted)]">
                    <span className="text-[var(--ai-purple)] font-bold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className="lg:col-span-2">
            <div
              className="rounded-2xl p-6 md:p-8 text-white h-full"
              style={{ background: "var(--ai-gradient)" }}
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#B6A2BB] mb-5">
                Results in 4 months
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {RESULTS.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-xl bg-white/10 border border-white/15 p-4"
                  >
                    <p className="text-xl font-bold">{r.value}</p>
                    <p className="text-xs text-white/75 mt-1 leading-snug">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
