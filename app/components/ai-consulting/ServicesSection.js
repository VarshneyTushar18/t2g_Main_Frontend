"use client";

import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    title: "AI Readiness & Opportunity Audit",
    description:
      "A clear-eyed assessment of where AI can save time, cut cost or grow revenue in your business, ranked by effort and impact.",
  },
  {
    title: "AI Strategy & Roadmap Development",
    description:
      "A practical, board-ready AI roadmap tied to business outcomes, not technology for its own sake.",
  },
  {
    title: "Generative AI & LLM Integration",
    description:
      "Custom GPT-style assistants, internal knowledge tools and Claude/OpenAI-powered features built into your existing systems.",
  },
  {
    title: "Workflow & Process Automation",
    description:
      "Automating manual, repetitive back-office and operations work across finance, support, sales and logistics.",
  },
  {
    title: "AI-Powered Customer Experience",
    description:
      "Chatbots, virtual agents and support automation trained on your own data and tone of voice.",
  },
  {
    title: "Data Strategy & AI Readiness Infrastructure",
    description:
      "Cleaning, structuring and governing your data so it's actually usable for AI and analytics.",
  },
  {
    title: "AI Governance, Privacy & Compliance",
    description:
      "Responsible AI use aligned to the Privacy Act, the Australian Privacy Principles and your industry's regulatory requirements.",
  },
  {
    title: "Ongoing AI Advisory & Support",
    description:
      "Local business-hours (AEST) advisory, model performance monitoring, and continuous improvement as AI tools evolve.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            Full-Service AI Consulting for Growing Businesses
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={Math.min((i % 4) + 1, 4)}>
              <article className="ai-service-row">
                <span className="ai-service-num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[var(--ai-ink)] leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[var(--ai-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
