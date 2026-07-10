"use client";

import ContactForm from "@/components/ContactForm";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTASection() {
  return (
    <section id="contact" className="scroll-mt-24" aria-labelledby="cta-heading">
      <div
        className="py-16 md:py-24"
        style={{ background: "var(--sp-gradient)" }}
      >
        <div className="sp-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <ScrollReveal>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Ready to Build a Shopify Store That Converts?
              </h2>
              <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                Get a free, no-obligation Shopify store audit and receive a tailored
                growth roadmap from our Shopify experts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#audit-form" className="sp-btn sp-btn-white">
                  Book Your Free Shopify Audit Today
                </a>
                <a href="/contact-us" className="sp-btn sp-btn-outline-white">
                  Schedule a Consultation
                </a>
              </div>
              <ul className="mt-8 space-y-2 text-white/85 text-sm">
                <li>✓ Free conversion & technical audit</li>
                <li>✓ Clear growth roadmap</li>
                <li>✓ No obligation · Local timezone support</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div
                id="audit-form"
                className="rounded-3xl bg-white p-6 md:p-8 shadow-[var(--sp-shadow-lg)] scroll-mt-28"
              >
                <h3 className="text-xl font-bold text-[var(--sp-ink)] mb-1">
                  Book Your Free Audit
                </h3>
                <p className="text-sm text-[var(--sp-muted)] mb-6">
                  Tell us about your store—we&apos;ll follow up with next steps.
                </p>
                <ContactForm
                  variant="faq"
                  source="Shopify landing page — Free Store Audit"
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
