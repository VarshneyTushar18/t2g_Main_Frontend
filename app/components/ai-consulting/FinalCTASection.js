"use client";

import ContactForm from "@/app/components/contact/ContactForm/ContactForm";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTASection() {
  return (
    <section id="contact" className="scroll-mt-24" aria-labelledby="cta-heading">
      <div className="py-16 md:py-24" style={{ background: "var(--ai-gradient)" }}>
        <div className="ai-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <ScrollReveal>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Ready to Put AI to Work in Your Business?
              </h2>
              <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                Get a free, no-obligation AI Opportunity Audit and a tailored roadmap from
                Tech2Globe&apos;s AI consulting team.
              </p>
              <div className="mt-8">
                <a href="#audit-form" className="ai-btn ai-btn-white">
                  Book Your Free AI Audit Today
                </a>
              </div>
              <ul className="mt-8 space-y-2 text-white/85 text-sm">
                <li>✓ Free AI Opportunity Audit</li>
                <li>✓ Tailored implementation roadmap</li>
                <li>✓ No obligation · AEST business hours support</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div
                id="audit-form"
                className="rounded-3xl bg-white p-6 md:p-8 shadow-[var(--ai-shadow-lg)] scroll-mt-28"
              >
                <h3 className="text-xl font-bold text-[var(--ai-ink)] mb-1">
                  Book Your Free AI Audit
                </h3>
                <p className="text-sm text-[var(--ai-muted)] mb-6">
                  Tell us about your business — we&apos;ll follow up with next steps.
                </p>
                <ContactForm
                  variant="faq"
                  source="AI Consulting landing page — Free AI Opportunity Audit"
                  successRedirect="/thank-you"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
