"use client";

import {
  FiHome,
  FiActivity,
  FiDroplet,
  FiPackage,
  FiArrowUpRight,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const ROWS = [
  {
    brand: "Homewares Brand",
    service: "Shopify Plus migration + CRO",
    result: "$100K+",
    resultLabel: "Monthly revenue in Q1",
    icon: FiHome,
    accent: "#5E8E3E",
  },
  {
    brand: "Activewear Brand",
    service: "Custom theme development",
    result: "2.6x",
    resultLabel: "Mobile conversion rate",
    icon: FiActivity,
    accent: "#95BF47",
  },
  {
    brand: "Beauty Brand",
    service: "Shopify SEO + app integration",
    result: "3.1x",
    resultLabel: "Organic traffic growth",
    icon: FiDroplet,
    accent: "#5E8E3E",
  },
  {
    brand: "B2B Wholesale Brand",
    service: "Headless Shopify build",
    result: "40%",
    resultLabel: "Reduction in page load time",
    icon: FiPackage,
    accent: "#95BF47",
  },
];

export default function PortfolioSection() {
  return (
    <section
      className="py-16 md:py-24 bg-[var(--sp-bg)]"
      aria-labelledby="portfolio-heading"
    >
      <div className="sp-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[var(--sp-green)] font-semibold text-sm uppercase tracking-wide mb-3">
            Client Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--sp-ink)]"
          >
            Brands We&apos;ve Built on Shopify
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROWS.map((row, i) => {
            const Icon = row.icon;
            return (
              <ScrollReveal key={row.brand} delay={Math.min(i + 1, 4)}>
                <article className="sp-portfolio-card group h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className="sp-portfolio-icon flex-shrink-0"
                      style={{
                        backgroundColor: `${row.accent}1a`,
                        color: row.accent,
                      }}
                    >
                      <Icon size={20} aria-hidden />
                    </span>
                    <FiArrowUpRight
                      className="text-[var(--sp-muted)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--sp-green-dark)] transition-all duration-300"
                      size={18}
                      aria-hidden
                    />
                  </div>

                  <h3 className="font-bold text-[var(--sp-ink)] text-lg leading-snug">
                    {row.brand}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--sp-muted)] leading-snug">
                    <span className="font-medium text-[var(--sp-ink)]/70">
                      Service:{" "}
                    </span>
                    {row.service}
                  </p>

                  <div
                    className="mt-auto pt-5 mt-5 border-t border-[var(--sp-border)]"
                    style={{ borderTopColor: `${row.accent}40` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sp-muted)] mb-1">
                      Result
                    </p>
                    <p
                      className="text-3xl font-extrabold tracking-tight leading-none"
                      style={{ color: row.accent }}
                    >
                      {row.result}
                    </p>
                    <p className="mt-1.5 text-sm text-[var(--sp-muted)]">
                      {row.resultLabel}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
