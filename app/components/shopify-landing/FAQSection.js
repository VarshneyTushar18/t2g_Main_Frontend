"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "Do you only work with local businesses?",
    a: "No. We partner with D2C brands, retailers, wholesale businesses, and Shopify Plus enterprises across markets. Local timezone support (AEST) means fast communication—wherever your warehouse or HQ sits.",
  },
  {
    q: "How much does a Shopify store cost?",
    a: "Investment depends on scope: theme complexity, migrations, apps, Shopify Plus features, and CRO. After your free store audit we provide a clear roadmap and transparent quote—no surprise fees.",
  },
  {
    q: "Can you migrate without losing SEO?",
    a: "Yes. Our Shopify store migration process includes URL mapping, redirects, metadata preservation, sitemap updates, and post-launch monitoring so organic rankings stay protected.",
  },
  {
    q: "Do you support Shopify Plus?",
    a: "Absolutely. We deliver Shopify Plus enterprise development including wholesale, multi-currency, B2B, checkout extensibility, and complex integrations.",
  },
  {
    q: "How long does development take?",
    a: "Typical custom builds run 6–12 weeks depending on features and content readiness. Migrations and Plus projects are scoped after the audit with a shared timeline and milestones.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Ongoing Shopify support covers theme maintenance, updates, performance monitoring, seasonal readiness (including Black Friday), and continuous CRO.",
  },
  {
    q: "Do you provide free audits?",
    a: "Yes. Book a free Shopify store audit and receive a tailored growth roadmap from our Shopify experts—no obligation.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[var(--sp-bg)] scroll-mt-24" aria-labelledby="faq-heading">
      <div className="sp-container max-w-3xl">
        <ScrollReveal className="text-center mb-10">
          <p className="text-[var(--sp-green)] font-semibold text-sm uppercase tracking-wide mb-3">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--sp-ink)]"
          >
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-3" role="list">
          {FAQS.map((faq, i) => {
            const isOpen = openId === i;
            return (
              <ScrollReveal key={faq.q} delay={Math.min(i, 3)}>
                <div
                  className={`sp-faq-item ${isOpen ? "is-open" : ""}`}
                  role="listitem"
                >
                  <h3>
                    <button
                      type="button"
                      className="sp-faq-btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpenId(isOpen ? -1 : i)}
                    >
                      <span>{faq.q}</span>
                      <FiChevronDown
                        className={`flex-shrink-0 text-[var(--sp-green)] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="sp-faq-panel"
                  >
                    <p className="text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
