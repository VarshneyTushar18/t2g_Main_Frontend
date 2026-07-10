"use client";

import ScrollReveal from "./ScrollReveal";

const ACTIONS = [
  "Rebuilt all 42 listings with local-search-intent keyword mapping and new A+ Content",
  "Restructured Sponsored Products campaigns around a tightened market-specific negative keyword list",
  "Fixed FBA inventory flow to eliminate long-term storage fees and stockouts",
  "Launched a Brand Store optimised for mobile — the dominant device for local Amazon shoppers",
];

const RESULTS = [
  { value: "Top 3", label: "Organic ranking for 11 priority keywords" },
  { value: "21%", label: "ACOS (down from 55%)" },
  { value: "3.4x", label: "Monthly Amazon revenue growth" },
  { value: "6 SKUs", label: "Amazon's Choice badges won" },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="py-16 md:py-24 scroll-mt-24 bg-[var(--amz-bg)]"
      aria-labelledby="case-heading"
    >
      <div className="amz-container">
        <ScrollReveal className="max-w-3xl mb-10">
          <p className="text-[var(--amz-orange-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
            Case Study
          </p>
          <h2
            id="case-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
          >
            From Page 4 to Category Bestseller on Amazon
          </h2>
          <p className="mt-4 text-[var(--amz-muted)] leading-relaxed">
            A home &amp; kitchenware brand approached Tech2Globe after 8 months of stagnant
            sales on Amazon, buried on page 4 for its core keywords with an ACOS above 55%.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <ScrollReveal className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--amz-border)] bg-white p-6 md:p-8 h-full">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--amz-orange-dark)] mb-4">
                What we did
              </h3>
              <ul className="space-y-3">
                {ACTIONS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[var(--amz-muted)]">
                    <span className="text-[var(--amz-orange-dark)] font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1} className="lg:col-span-2">
            <div className="rounded-2xl bg-black p-6 md:p-8 text-white h-full">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--amz-orange)] mb-5">
                Results in 5 months
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {RESULTS.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-xl bg-white/5 border border-white/10 p-4"
                  >
                    <p className="text-xl font-bold text-[var(--amz-orange)]">{r.value}</p>
                    <p className="text-xs text-white/70 mt-1 leading-snug">{r.label}</p>
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
