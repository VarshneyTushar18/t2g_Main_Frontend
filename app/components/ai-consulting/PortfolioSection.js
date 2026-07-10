"use client";

import ScrollReveal from "./ScrollReveal";

const ROWS = [
  {
    brand: "Logistics & Wholesale Distribution",
    service: "AI audit + workflow automation",
    result: "60%",
    resultLabel: "Faster order processing",
  },
  {
    brand: "Professional Services Firm",
    service: "Generative AI knowledge assistant",
    result: "40%",
    resultLabel: "Reduction in research time",
  },
  {
    brand: "Retail & Ecommerce Brand",
    service: "AI customer support chatbot",
    result: "3x",
    resultLabel: "Faster response times",
  },
  {
    brand: "Healthcare Admin Provider",
    service: "Data strategy + AI governance",
    result: "8 wks",
    resultLabel: "Fully compliant AI rollout",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--ai-bg)]" aria-labelledby="portfolio-heading">
      <div className="ai-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            Client Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            Businesses We&apos;ve Helped Implement AI
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROWS.map((row, i) => (
            <ScrollReveal key={row.brand} delay={Math.min(i + 1, 4)}>
              <article className="ai-portfolio-card flex flex-col">
                <h3 className="font-bold text-[var(--ai-ink)] text-lg leading-snug">
                  {row.brand}
                </h3>
                <p className="mt-2 text-sm text-[var(--ai-muted)] leading-snug">
                  <span className="font-medium text-[var(--ai-ink)]/70">Service: </span>
                  {row.service}
                </p>
                <div className="mt-auto pt-5 mt-5 border-t border-[var(--ai-border)]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ai-muted)] mb-1">
                    Result
                  </p>
                  <p className="text-3xl font-extrabold text-[var(--ai-purple)] tracking-tight">
                    {row.result}
                  </p>
                  <p className="mt-1.5 text-sm text-[var(--ai-muted)]">{row.resultLabel}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
