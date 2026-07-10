"use client";

import {
  FiSearch,
  FiMap,
  FiCpu,
  FiShield,
  FiSend,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    icon: FiSearch,
    title: "Free AI Opportunity Audit",
    description:
      "We review your current operations, data and tech stack to find where AI delivers real, measurable value.",
  },
  {
    icon: FiMap,
    title: "Strategy & Roadmap",
    description:
      "A prioritised roadmap mapped to your budget, team capability and business goals.",
  },
  {
    icon: FiCpu,
    title: "Pilot Build",
    description:
      "A scoped pilot (chatbot, automation, internal tool) built and tested against real workflows and real data.",
  },
  {
    icon: FiShield,
    title: "Governance, Testing & Compliance Review",
    description:
      "Privacy, security and accuracy testing before anything goes near your customers or your data.",
  },
  {
    icon: FiSend,
    title: "Rollout & Ongoing Optimisation",
    description:
      "Full rollout, staff training, monthly reporting, and a dedicated AI advisor.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-16 md:py-24 scroll-mt-24 bg-[var(--ai-bg)]"
      aria-labelledby="process-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            Our AI Consulting Process
          </h2>
          <p className="mt-4 text-[var(--ai-muted)]">
            A clear path from audit to rollout — built for measurable value, not endless pilots.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;
            return (
              <ScrollReveal
                key={step.title}
                delay={Math.min(i + 1, 4)}
                className={isLast ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <article className="ai-step-card group h-full">
                  <div className="flex items-start justify-between mb-5">
                    <span className="ai-step-icon">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="ai-step-watermark" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--ai-purple)] mb-2">
                    Step {i + 1}
                  </p>
                  <h3 className="font-bold text-[var(--ai-ink)] text-lg leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[var(--ai-muted)] leading-relaxed">
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
