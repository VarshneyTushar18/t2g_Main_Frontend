"use client";

import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const POINTERS = [
  "Boards feel pressure to “do something with AI,” but most teams are stuck between chatbot demos and vendor pitches.",
  "Leaders pulling ahead quietly automate back-office work and embed AI into service and sales.",
  "They use their own data — safely and compliantly — to make faster decisions.",
  "Tech2Globe builds AI around how your business actually operates: readiness, automation, generative AI, and tool integration.",
  "You get measurable results in months — not an endless pilot program.",
];

export default function AboutSection() {
  return (
    <section
      id="opportunity"
      className="py-16 md:py-24 scroll-mt-24 bg-[var(--ai-bg)]"
      aria-labelledby="opportunity-heading"
    >
      <div className="ai-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <ScrollReveal>
              <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
                The AI Opportunity
              </p>
              <h2
                id="opportunity-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[var(--ai-ink)]"
              >
                Every Business Is Talking About AI — Few Have Actually Implemented It
                Properly
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-5 text-[var(--ai-muted)] leading-relaxed">
                Boards and leadership teams are under pressure to &quot;do something with
                AI,&quot; but most businesses are stuck between generic chatbot demos and
                vendor pitches that don&apos;t map to how their operations actually run.
                Meanwhile the businesses pulling ahead are the ones quietly automating
                back-office work, embedding AI into customer service and sales, and using
                their own data — safely and compliantly — to make faster decisions.
              </p>
              <p className="mt-4 text-[var(--ai-muted)] leading-relaxed">
                Tech2Globe builds AI strategy and AI systems around how your business
                actually operates — data readiness, workflow automation, safe and compliant
                use of generative AI, and integration with the tools your team already uses
                — so you get measurable results in months, not an endless pilot program.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={1}>
            <div className="rounded-2xl bg-white border border-[var(--ai-border)] p-6 md:p-8 shadow-[var(--ai-shadow)]">
              <p className="text-sm font-bold text-[var(--ai-purple)] uppercase tracking-wide mb-5">
                What changes when AI is done properly
              </p>
              <ul className="space-y-4">
                {POINTERS.map((text) => (
                  <li key={text} className="flex gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-md bg-[var(--ai-purple-soft)] text-[var(--ai-purple)] grid place-items-center flex-shrink-0">
                      <FiCheck size={14} strokeWidth={3} aria-hidden />
                    </span>
                    <p className="text-sm text-[var(--ai-muted)] leading-relaxed">{text}</p>
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
