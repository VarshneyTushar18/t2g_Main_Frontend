"use client";

import { FiShield, FiLayers, FiBriefcase, FiBarChart2, FiRefreshCw } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    icon: FiShield,
    text: "AI consultants who build for data privacy, security and Australian Privacy Principles compliance out of the box",
  },
  {
    icon: FiLayers,
    text: "Experience integrating the tools businesses already run on — Microsoft 365, Google Workspace, Xero, HubSpot, Shopify and local ERPs",
  },
  {
    icon: FiBriefcase,
    text: "Category experience across retail, professional services, healthcare admin, logistics and B2B wholesale — the sectors seeing the fastest AI-driven efficiency gains",
  },
  {
    icon: FiBarChart2,
    text: "Transparent reporting on real time saved, cost reduction and revenue impact — not vanity AI demos",
  },
  {
    icon: FiRefreshCw,
    text: "Flexible engagement — from a single AI audit to an ongoing AI advisory retainer with hands-on implementation support",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="py-16 md:py-24 scroll-mt-24 bg-[var(--ai-navy)] text-white"
      aria-labelledby="why-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-[#B6A2BB] font-semibold text-sm uppercase tracking-wide mb-3">
            Why Businesses Choose Us
          </p>
          <h2
            id="why-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
          >
            Local Business Knowledge. Practical AI Expertise.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal
                key={f.text}
                delay={Math.min(i + 1, 4)}
                className={i === FEATURES.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <span className="w-11 h-11 rounded-xl bg-[#410275] text-[#B6A2BB] grid place-items-center mb-4">
                    <Icon size={20} aria-hidden />
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed">{f.text}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
