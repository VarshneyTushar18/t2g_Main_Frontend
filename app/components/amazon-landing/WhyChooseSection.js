"use client";

import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  "We track Amazon-specific algorithm behaviour, not just US A9/A10 assumptions applied blindly to a different market",
  "Guidance on GST, ABN and local Consumer Law touchpoints so your account stays compliant as you scale",
  "Experience across categories most active on Amazon — health & beauty, home & kitchen, pet care, apparel and grocery",
  "Transparent reporting: you see real ACOS, TACOS and account health data, not vanity metrics",
  "Flexible engagement — from a single Amazon PPC management retainer to full Amazon account management",
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="py-16 md:py-24 scroll-mt-24 bg-black text-white"
      aria-labelledby="why-heading"
    >
      <div className="amz-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ScrollReveal>
            <p className="text-[var(--amz-orange)] font-semibold text-sm uppercase tracking-wide mb-3">
              Why Sellers Choose Us
            </p>
            <h2
              id="why-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
            >
              Local Understanding. Global Marketplace Expertise.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              A dedicated Amazon team that knows how this market actually ranks, converts and
              stays compliant — not a generic overseas playbook.
            </p>
            <a href="#contact" className="amz-btn amz-btn-primary mt-8 inline-flex">
              Book a Free Amazon Account Audit
            </a>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[var(--amz-orange)] text-black grid place-items-center flex-shrink-0">
                    <FiCheck size={14} strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-sm text-white/80 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
