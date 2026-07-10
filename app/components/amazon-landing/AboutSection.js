"use client";

import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const POINTERS = [
  "Amazon here isn't a copy-paste of the US marketplace — it's smaller, faster-moving, and still up for grabs.",
  "Category leadership goes to brands that get listings, advertising and compliance right from day one.",
  "Seller Central rules, the A10 algorithm, and local consumer expectations differ enough that generic global strategies won't rank.",
  "Tech2Globe pairs Amazon expertise with local buyer behaviour, GST/ABN obligations, and competitive landscape knowledge.",
  "Launch and scale the right way the first time — whether you're local or entering this market for the first time.",
];

export default function AboutSection() {
  return (
    <section
      id="opportunity"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="opportunity-heading"
    >
      <div className="amz-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <ScrollReveal>
              <p className="text-[var(--amz-orange-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
                The Marketplace Opportunity
              </p>
              <h2
                id="opportunity-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black"
              >
                Amazon Is Still in Its Land-Grab Phase — Early Movers Win Category Authority
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="mt-5 text-[var(--amz-muted)] leading-relaxed">
                Amazon isn&apos;t a copy-paste of the US marketplace. It&apos;s a smaller,
                faster-moving marketplace where category leadership is still up for grabs —
                but only for brands that get their listings, advertising and compliance right
                from day one. Whether you&apos;re a local brand selling in your home market
                or an international seller entering this market for the first time, the rules
                of Seller Central, the A10 algorithm, and local consumer expectations are
                different enough that a generic global strategy simply won&apos;t rank.
              </p>
              <p className="mt-4 text-[var(--amz-muted)] leading-relaxed">
                Tech2Globe combines Amazon marketplace expertise with genuine understanding
                of local buyer behaviour, GST/ABN obligations, and the local competitive
                landscape — so you launch and scale the right way the first time.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={1}>
            <div className="rounded-2xl bg-[var(--amz-bg)] border border-[var(--amz-border)] p-6 md:p-8">
              <p className="text-sm font-bold text-[var(--amz-orange-dark)] uppercase tracking-wide mb-5">
                Why local expertise matters
              </p>
              <ul className="space-y-4">
                {POINTERS.map((text) => (
                  <li key={text} className="flex gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-[var(--amz-orange-soft)] text-[var(--amz-orange-dark)] grid place-items-center flex-shrink-0">
                      <FiCheck size={14} strokeWidth={3} aria-hidden />
                    </span>
                    <p className="text-sm text-[var(--amz-muted)] leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
