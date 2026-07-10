"use client";

import { FiSearch, FiMap, FiEdit3, FiZap, FiBarChart2 } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    icon: FiSearch,
    title: "Free Account & Listing Audit",
    description:
      "We review your current Amazon presence (or your launch plan) against local competitors and A10 ranking factors.",
  },
  {
    icon: FiMap,
    title: "Strategy & Keyword Mapping",
    description:
      "Local, high-intent search terms mapped to every listing, backed by category and competitor research.",
  },
  {
    icon: FiEdit3,
    title: "Listing Build & Optimisation",
    description:
      "Titles, images, A+ Content and Brand Store built to convert local shoppers.",
  },
  {
    icon: FiZap,
    title: "Launch & PPC Activation",
    description:
      "Sponsored Ads campaigns launched with market-specific budget and ACOS targets.",
  },
  {
    icon: FiBarChart2,
    title: "Ongoing Management & Reporting",
    description:
      "Weekly performance tracking, monthly strategy reviews, and a dedicated account manager in your time zone.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="process-heading"
    >
      <div className="amz-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[var(--amz-orange-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
          >
            Our Amazon Growth Process
          </h2>
        </ScrollReveal>

        <div className="amz-timeline">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.title} delay={Math.min(i + 1, 4)}>
                <article className="amz-step">
                  <div className="amz-step-num" aria-hidden>
                    {i + 1}
                  </div>
                  <div className="mx-auto mb-3 w-10 h-10 rounded-xl bg-[var(--amz-orange-soft)] text-[var(--amz-orange-dark)] grid place-items-center">
                    <Icon size={18} aria-hidden />
                  </div>
                  <h3 className="text-sm font-bold text-black leading-snug">{step.title}</h3>
                  <p className="mt-2 text-xs text-[var(--amz-muted)] leading-relaxed">
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
