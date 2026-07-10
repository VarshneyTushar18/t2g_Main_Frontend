"use client";

import {
  FiSearch,
  FiMap,
  FiCode,
  FiSmartphone,
  FiSend,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    icon: FiSearch,
    title: "Free Store & Conversion Audit",
    description:
      "We review speed, UX, checkout friction, and SEO to uncover quick wins and growth blockers.",
  },
  {
    icon: FiMap,
    title: "UX & Local Market Strategy",
    description:
      "We map journeys, payments, and messaging around how your customers actually buy.",
  },
  {
    icon: FiCode,
    title: "Theme Development & App Integration",
    description:
      "Custom theme builds plus AfterPay, Zip, ShipStation, ERP, and other critical integrations.",
  },
  {
    icon: FiSmartphone,
    title: "QA, Speed & Mobile Testing",
    description:
      "Rigorous device testing, Core Web Vitals checks, and conversion path validation before launch.",
  },
  {
    icon: FiSend,
    title: "Launch & Continuous Optimisation",
    description:
      "Go-live support, monitoring, CRO experiments, and ongoing Shopify performance care.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-[var(--sp-bg)] scroll-mt-24"
      aria-labelledby="process-heading"
    >
      <div className="sp-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[var(--sp-green)] font-semibold text-sm uppercase tracking-wide mb-3">
            Process
          </p>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--sp-ink)]"
          >
            Our Shopify Build Process
          </h2>
          <p className="mt-4 text-[var(--sp-muted)]">
            A clear path from audit to launch—built for speed, quality, and measurable results.
          </p>
        </ScrollReveal>

        <div className="sp-timeline">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.title} delay={Math.min(i + 1, 4)}>
                <article className="sp-step h-full">
                  <div className="sp-step-num" aria-hidden>
                    {i + 1}
                  </div>
                  <div className="mx-auto mb-3 w-10 h-10 rounded-xl bg-[var(--sp-green-soft)] text-[var(--sp-green)] grid place-items-center">
                    <Icon size={18} aria-hidden />
                  </div>
                  <h3 className="text-sm font-bold text-[var(--sp-ink)] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--sp-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
