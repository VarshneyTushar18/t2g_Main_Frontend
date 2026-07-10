"use client";

import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { end: 120, suffix: "+", label: "Shopify Stores Built & Migrated" },
  { end: 2.8, suffix: "x", decimals: 1, label: "Average Conversion Rate Increase" },
  { end: 10, suffix: "+", label: "Years Combined Shopify Experience" },
  { end: 0, suffix: "", label: "Local Business Hours Support (AEST)", custom: "AEST" },
];

function DashboardMockup() {
  return (
    <div className="sp-dashboard sp-float" aria-hidden="true">
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#95BF47]/80" />
        <span className="ml-2 text-[10px] text-white/50 font-medium tracking-wide">
          Shopify Admin · Live
        </span>
      </div>

      <div className="sp-dash-grid">
        <div className="sp-dash-card">
          <div className="flex items-center justify-between">
            <p className="text-white/70 text-xs font-medium">Total sales</p>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#95BF47]/25 text-[#95BF47]">
              +24%
            </span>
          </div>
          <p className="text-white text-2xl font-bold mt-1">$128,450</p>
          <div className="sp-chart-bars">
            {[40, 55, 48, 70, 62, 85, 78, 92, 88, 100].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="sp-dash-card flex-1">
            <p className="text-white/70 text-xs">Conversion</p>
            <p className="text-white text-xl font-bold mt-1">4.8%</p>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-[var(--sp-green-bright)]"
                style={{ width: "72%" }}
              />
            </div>
          </div>
          <div className="sp-dash-card flex-1">
            <p className="text-white/70 text-xs">Checkout</p>
            <p className="text-white text-sm font-semibold mt-1">Frictionless</p>
            <p className="text-[#95BF47] text-xs mt-1">AfterPay · Zip ready</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="sp-dash-card flex-1">
          <p className="text-white/70 text-xs mb-2">Storefront preview</p>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-white/15 to-white/5 border border-white/10"
              />
            ))}
          </div>
        </div>
        <div className="sp-phone hidden sm:block">
          <div className="h-3 w-10 mx-auto mb-1.5 rounded-full bg-white/20" />
          <div className="rounded-lg overflow-hidden bg-gradient-to-b from-[#5E8E3E] to-[#1a2a12] aspect-[9/16]">
            <div className="p-2 space-y-1.5">
              <div className="h-2 w-8 rounded bg-white/30" />
              <div className="h-10 rounded bg-white/10" />
              <div className="h-2 w-full rounded bg-white/20" />
              <div className="h-2 w-3/4 rounded bg-white/15" />
              <div className="mt-2 h-5 rounded-full bg-[#95BF47]/90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(149,191,71,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 30%, rgba(94,142,62,0.1), transparent 50%), linear-gradient(180deg, #f7faf3 0%, #ffffff 55%, #ffffff 100%)",
        }}
      />

      <div className="sp-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="text-[var(--sp-green)] font-semibold tracking-wide text-sm uppercase mb-4">
                Tech2Globe · Shopify Development Agency
              </p>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.12] tracking-tight text-[var(--sp-ink)]"
              >
                The Shopify Development Team for Brands That Want to Actually Sell
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-5 text-base md:text-lg text-[var(--sp-muted)] leading-relaxed max-w-xl">
                Tech2Globe designs, builds and scales Shopify and Shopify Plus stores for
                growing brands—from DTC labels to national warehouses shipping nationwide.
                We specialize in custom Shopify development, Shopify Plus solutions,
                migrations, SEO, CRO, and long-term growth support.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="sp-btn sp-btn-primary">
                  Book a Free Shopify Store Audit
                </a>
                <a href="#case-studies" className="sp-btn sp-btn-secondary">
                  View Our Work
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2} className="relative">
            <DashboardMockup />
          </ScrollReveal>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={Math.min(i + 1, 4)}
              className="h-full"
            >
              <div className="h-full rounded-2xl border border-[var(--sp-border)] bg-[#f3f4f6] p-5 text-center md:text-left flex flex-col">
                <p className="text-2xl md:text-3xl font-bold text-[var(--sp-green-dark)]">
                  {stat.custom ? (
                    stat.custom
                  ) : (
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  )}
                </p>
                <p className="mt-1 text-xs md:text-sm text-[var(--sp-muted)] leading-snug flex-1">
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
