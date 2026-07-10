"use client";

import AnimatedCounter from "@/components/shopify-landing/AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { end: 80, suffix: "+", label: "AI strategy & automation projects delivered" },
  {
    end: 3.4,
    suffix: "x",
    decimals: 1,
    label: "Avg. productivity uplift on automated workflows",
  },
  { end: 14, suffix: "+", label: "Years combined AI & data engineering experience" },
  { end: 0, suffix: "", label: "Local team, local business hours support", custom: "AEST" },
];

function AIPanelMockup() {
  return (
    <div className="ai-panel" aria-hidden="true">
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="w-2.5 h-2.5 rounded-full bg-[#B6A2BB]" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/35" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="ml-2 text-[10px] text-white/55 font-medium tracking-wide">
          AI Ops Console · Live
        </span>
      </div>

      <div className="ai-panel-grid">
        <div className="ai-panel-card">
          <p className="text-white/65 text-xs font-medium">Workflow automation</p>
          <p className="text-white text-2xl font-bold mt-1">+3.4x</p>
          <p className="text-[#B6A2BB] text-xs mt-1">Productivity uplift</p>
          <div className="mt-4 space-y-2">
            {["Email triage", "Order entry", "Reporting"].map((item, i) => (
              <div key={item} className="flex items-center justify-between gap-2">
                <span className="text-[11px] text-white/70">{item}</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden mx-2">
                  <div
                    className="h-full rounded-full bg-[#B6A2BB]"
                    style={{ width: `${70 + i * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="ai-panel-card flex-1">
            <p className="text-white/65 text-xs">LLM assistants</p>
            <p className="text-white text-sm font-semibold mt-1">Knowledge + Support</p>
            <p className="text-[#B6A2BB] text-xs mt-1">Claude · OpenAI ready</p>
          </div>
          <div className="ai-panel-card flex-1">
            <p className="text-white/65 text-xs">Compliance</p>
            <p className="text-white text-sm font-semibold mt-1">Privacy Act aligned</p>
            <p className="text-white/55 text-xs mt-1">APP · Data sovereignty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#f3f1f6]"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 85% 15%, rgba(182,162,187,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(65,2,117,0.06), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="ai-container relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <ScrollReveal>
              <p className="text-[var(--ai-purple)] font-semibold tracking-wide text-sm uppercase mb-4">
                Tech2Globe · AI Consulting Services
              </p>
              <h1
                id="hero-heading"
                className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-[2.4rem] font-bold leading-[1.2] tracking-tight text-[var(--ai-navy)]"
              >
                The AI Consulting Team That Ships Working Systems, Not Slide Decks
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-5 text-base md:text-lg text-[var(--ai-muted)] leading-relaxed max-w-xl">
                Tech2Globe helps growing Australian businesses cut through the AI noise and
                actually implement AI that pays for itself — AI readiness audits, custom AI
                strategy, generative AI and LLM integration, workflow automation, and
                AI-powered customer experience, delivered by a team that understands local
                compliance, data sovereignty expectations, and how Australian businesses
                actually operate.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="ai-btn ai-btn-primary">
                  Book a Free AI Opportunity Audit
                </a>
                <a href="#case-study" className="ai-btn ai-btn-secondary">
                  View Case Study
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2}>
            <AIPanelMockup />
          </ScrollReveal>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={Math.min(i + 1, 4)}
              className="h-full"
            >
              <div className="h-full rounded-2xl border border-[var(--ai-border)] bg-[#ece8f0] p-5 text-center md:text-left flex flex-col">
                <p className="text-2xl md:text-3xl font-bold text-[var(--ai-purple)]">
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
                <p className="mt-1 text-xs md:text-sm text-[var(--ai-muted)] leading-snug flex-1">
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
