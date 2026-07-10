"use client";

import ScrollReveal from "./ScrollReveal";

const ROWS = [
  {
    brand: "Home & Kitchenware Brand, Melbourne",
    service: "Full account management + PPC",
    result: "3.4x",
    resultLabel: "Revenue in 5 months",
  },
  {
    brand: "Natural Skincare Brand, Sydney",
    service: "Listing optimisation + Brand Store",
    result: "2.1x",
    resultLabel: "Conversion rate uplift",
  },
  {
    brand: "Pet Care Brand, Brisbane",
    service: "FBA inventory + Amazon PPC",
    result: "19%",
    resultLabel: "ACOS (from 48%)",
  },
  {
    brand: "Activewear Brand, Perth",
    service: "Amazon market entry",
    result: "$1M+",
    resultLabel: "Run rate in 12 months",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="portfolio-heading">
      <div className="amz-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[var(--amz-orange-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
            Client Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
          >
            Brands We&apos;ve Helped Grow on Amazon
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROWS.map((row, i) => (
            <ScrollReveal key={row.brand} delay={Math.min(i + 1, 4)}>
              <article className="amz-portfolio-card flex flex-col">
                <h3 className="font-bold text-black text-lg leading-snug">{row.brand}</h3>
                <p className="mt-2 text-sm text-[var(--amz-muted)] leading-snug">
                  <span className="font-medium text-black/70">Service: </span>
                  {row.service}
                </p>
                <div className="mt-auto pt-5 mt-5 border-t border-[var(--amz-border)]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--amz-muted)] mb-1">
                    Result
                  </p>
                  <p className="text-3xl font-extrabold text-[var(--amz-orange-dark)] tracking-tight">
                    {row.result}
                  </p>
                  <p className="mt-1.5 text-sm text-[var(--amz-muted)]">{row.resultLabel}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
