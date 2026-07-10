"use client";

import ContactForm from "@/app/components/contact/ContactForm/ContactForm";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTASection() {
  return (
    <section id="contact" className="scroll-mt-24" aria-labelledby="cta-heading">
      <div className="py-16 md:py-24 bg-black">
        <div className="amz-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <ScrollReveal>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Ready to Grow on Amazon?
              </h2>
              <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                Get a free, no-obligation Amazon account audit and a tailored growth plan from
                Tech2Globe&apos;s marketplace team.
              </p>
              <div className="mt-8">
                <a href="#audit-form" className="amz-btn amz-btn-primary">
                  Book Your Free Audit Today
                </a>
              </div>
              <ul className="mt-8 space-y-2 text-white/75 text-sm">
                <li>✓ Free Amazon account &amp; listing audit</li>
                <li>✓ Tailored local-market growth plan</li>
                <li>✓ No obligation · Dedicated support</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div
                id="audit-form"
                className="rounded-3xl bg-white p-6 md:p-8 scroll-mt-28"
              >
                <h3 className="text-xl font-bold text-black mb-1">
                  Book Your Free Amazon Audit
                </h3>
                <p className="text-sm text-[var(--amz-muted)] mb-6">
                  Tell us about your Amazon store — we&apos;ll follow up with next steps.
                </p>
                <ContactForm
                  variant="faq"
                  source="Amazon Marketplace Management — Free Account Audit"
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
