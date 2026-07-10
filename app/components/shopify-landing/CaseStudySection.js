"use client";

import { FiArrowRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const SOLUTIONS = [
  "Shopify Plus Migration",
  "Mobile-first Theme",
  "AfterPay Integration",
  "Zip Integration",
  "Local SEO",
  "ShipStation Integration",
];

const RESULTS = [
  { label: "Checkout abandonment", value: "78% → 41%" },
  { label: "Mobile conversion", value: "2.6x Increase" },
  { label: "Organic traffic", value: "3.1x Growth" },
  { label: "Monthly Revenue", value: "$100K+" },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-studies"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="case-heading"
    >
      <div className="sp-container">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[var(--sp-green)] font-semibold text-sm uppercase tracking-wide mb-3">
            Featured Case Study
          </p>
          <h2
            id="case-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--sp-ink)]"
          >
            From Squarespace to a Six-Figure Shopify Plus Store
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <article className="rounded-3xl border border-[var(--sp-border)] overflow-hidden shadow-[var(--sp-shadow-lg)] bg-white">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 md:p-10">
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3">
                      Problem
                    </h3>
                    <ul className="space-y-2 text-sm text-[var(--sp-muted)]">
                      <li className="flex gap-2">
                        <span className="text-red-500 mt-0.5">●</span>
                        Checkout abandonment 78%
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 mt-0.5">●</span>
                        Poor mobile experience
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-500 mt-0.5">●</span>
                        No growth strategy
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--sp-green)] mb-3">
                      Solutions
                    </h3>
                    <ul className="space-y-2 text-sm text-[var(--sp-muted)]">
                      {SOLUTIONS.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="text-[var(--sp-green)] mt-0.5">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--sp-border)] bg-[var(--sp-bg)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--sp-muted)] mb-3">
                    Before vs After
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white border border-red-100 p-4 text-center">
                      <p className="text-[10px] uppercase font-semibold text-red-500 mb-1">
                        Before
                      </p>
                      <p className="text-2xl font-bold text-[var(--sp-ink)]">78%</p>
                      <p className="text-xs text-[var(--sp-muted)] mt-1">
                        Checkout abandonment
                      </p>
                      <div className="mt-3 h-2 rounded-full bg-red-100 overflow-hidden">
                        <div className="h-full w-[78%] bg-red-400 rounded-full" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-white border border-[#eef6e3] p-4 text-center">
                      <p className="text-[10px] uppercase font-semibold text-[var(--sp-green)] mb-1">
                        After
                      </p>
                      <p className="text-2xl font-bold text-[var(--sp-green-dark)]">41%</p>
                      <p className="text-xs text-[var(--sp-muted)] mt-1">
                        Checkout abandonment
                      </p>
                      <div className="mt-3 h-2 rounded-full bg-[#eef6e3] overflow-hidden">
                        <div className="h-full w-[41%] bg-[var(--sp-green)] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-6 md:p-10 text-white flex flex-col justify-center"
                style={{ background: "var(--sp-gradient)" }}
              >
                <h3 className="text-lg font-bold mb-6">Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  {RESULTS.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-4"
                    >
                      <p className="text-xl md:text-2xl font-bold">{r.value}</p>
                      <p className="text-xs text-white/80 mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="sp-btn sp-btn-white mt-8 self-start text-sm"
                >
                  Get similar results
                  <FiArrowRight aria-hidden />
                </a>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
