"use client";

import AnimatedCounter from "@/app/components/shopify-landing/AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { end: 80, suffix: "%+", label: "Avg. YoY sales growth for local clients" },
  { end: 30, suffix: "+", label: "Marketplaces & categories managed" },
  { end: 14, suffix: "+", label: "Years combined Amazon team expertise" },
  { end: 0, suffix: "", label: "Dedicated support, no missed messages", custom: "24/7" },
];

function AmazonPanel() {
  return (
    <div className="amz-panel" aria-hidden="true">
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--amz-orange)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/35" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="ml-2 text-[10px] text-white/55 font-medium tracking-wide">
          Seller Central · Live
        </span>
      </div>
      <div className="amz-panel-grid">
        <div className="amz-panel-card">
          <p className="text-white/60 text-xs">Sales (YoY)</p>
          <p className="text-white text-2xl font-bold mt-1">+80%</p>
          <p className="text-[var(--amz-orange)] text-xs mt-1">Local client avg.</p>
          <div className="mt-4 flex items-end gap-1.5 h-16">
            {[35, 48, 42, 60, 55, 72, 68, 85, 78, 95].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t bg-[var(--amz-orange)]"
                style={{ height: `${h}%`, opacity: 0.55 + i * 0.04 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="amz-panel-card flex-1">
            <p className="text-white/60 text-xs">ACOS</p>
            <p className="text-white text-xl font-bold mt-1">21%</p>
            <p className="text-[var(--amz-orange)] text-xs mt-1">Down from 55%</p>
          </div>
          <div className="amz-panel-card flex-1">
            <p className="text-white/60 text-xs">A10 SEO</p>
            <p className="text-white text-sm font-semibold mt-1">Top 3 keywords</p>
            <p className="text-white/50 text-xs mt-1">11 priority terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[var(--amz-bg)]"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 90% 10%, rgba(255,168,0,0.14), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="amz-container relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <ScrollReveal>
              <p className="text-[var(--amz-orange-dark)] font-semibold tracking-wide text-sm uppercase mb-4">
                Tech2Globe · Amazon Marketplace Management
              </p>
              <h1
                id="hero-heading"
                className="text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.45rem] font-bold leading-[1.2] tracking-tight text-black"
              >
                Grow Your Amazon Store With a Team That Actually Understands the Local Market
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="mt-5 text-base md:text-lg text-[var(--amz-muted)] leading-relaxed max-w-xl">
                Tech2Globe manages Amazon Seller Central &amp; Vendor Central accounts for
                brands selling in Sydney, Melbourne, Brisbane, Perth and beyond — covering
                listing optimisation, Amazon PPC, A10 SEO, GST/ABN-ready operations, and
                Amazon storefront design. One team, full accountability, real local market
                results.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="amz-btn amz-btn-primary">
                  Book a Free Amazon Account Audit
                </a>
                <a href="#case-study" className="amz-btn amz-btn-secondary">
                  View Case Study
                </a>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <AmazonPanel />
          </ScrollReveal>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={Math.min(i + 1, 4)} className="h-full">
              <div className="h-full rounded-2xl border border-[var(--amz-border)] bg-[#eceeec] p-5 text-center md:text-left flex flex-col">
                <p className="text-2xl md:text-3xl font-bold text-[var(--amz-orange-dark)]">
                  {stat.custom ? (
                    stat.custom
                  ) : (
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      decimals={0}
                    />
                  )}
                </p>
                <p className="mt-1 text-xs md:text-sm text-[var(--amz-muted)] leading-snug flex-1">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
