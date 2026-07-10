"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "Do I need an ABN to sell on Amazon?",
    a: "It's not mandatory for all international sellers, but having an ABN builds buyer trust, simplifies GST registration, and is required if you plan to claim GST credits on Amazon fees, import duty or ad spend. We help you understand what applies to your situation.",
  },
  {
    q: "When do I need to register for GST as an Amazon seller?",
    a: "Generally, GST registration becomes mandatory once your local sales reach AUD $75,000 in a rolling 12-month period. Rules differ depending on whether you're using FBA with stock stored locally versus low-value imported goods, where Amazon may collect GST on your behalf. We recommend confirming your specific obligations with a registered tax agent.",
  },
  {
    q: "How is this Amazon marketplace different from the US Amazon marketplace for ranking purposes?",
    a: "This Amazon marketplace is smaller and faster-growing, with different search volume, competition density, and buyer behaviour than the US marketplace. Keyword strategy, PPC budgets and even image/content preferences that work on the US marketplace often need to be rebuilt specifically for this market.",
  },
  {
    q: "How long does it take to see results on Amazon?",
    a: "Most clients see initial ranking and traffic movement within 4-8 weeks of listing optimisation and PPC restructuring, with meaningful revenue growth typically compounding over 3-6 months as organic ranking strengthens.",
  },
  {
    q: "Can you help brands new to Amazon, not just existing sellers?",
    a: "Yes. We support brand-new market entry — from Seller Central setup and category research to launch-phase PPC and market-specific keyword mapping — as well as scaling existing underperforming accounts.",
  },
  {
    q: "Do you manage Amazon PPC for Sydney, Melbourne, Brisbane and Perth-based sellers?",
    a: "Yes, our Amazon PPC management works with sellers across all states. Location doesn't affect service delivery — what matters is your product category, target ACOS/TACOS, and growth stage.",
  },
  {
    q: "What's the difference between FBA and FBM for Amazon sellers?",
    a: "FBA (Fulfilment by Amazon) means Amazon stores and ships your inventory from local fulfilment centres — faster delivery, Prime eligibility, but higher fees. FBM (Merchant Fulfilled) gives you more control and lower fixed costs but requires you to manage shipping and customs compliance yourself. We help you model which is right for your margins.",
  },
  {
    q: "Do you offer a free audit before we commit to a plan?",
    a: "Yes — we start every new relationship with a free Amazon account and listing audit so you can see exactly where the gaps are before deciding to work with us.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-24" aria-labelledby="faq-heading">
      <div className="amz-container max-w-3xl">
        <ScrollReveal className="text-center mb-10">
          <p className="text-[var(--amz-orange-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
            Frequently Asked Questions
          </p>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Amazon Seller FAQs
          </h2>
        </ScrollReveal>

        <div className="space-y-3" role="list">
          {FAQS.map((faq, i) => {
            const isOpen = openId === i;
            return (
              <ScrollReveal key={faq.q} delay={Math.min(i, 3)}>
                <div className={`amz-faq-item ${isOpen ? "is-open" : ""}`} role="listitem">
                  <h3>
                    <button
                      type="button"
                      className="amz-faq-btn"
                      aria-expanded={isOpen}
                      aria-controls={`amz-faq-panel-${i}`}
                      id={`amz-faq-btn-${i}`}
                      onClick={() => setOpenId(isOpen ? -1 : i)}
                    >
                      <span>{faq.q}</span>
                      <FiChevronDown
                        className={`flex-shrink-0 text-[var(--amz-orange-dark)] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div
                    id={`amz-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`amz-faq-btn-${i}`}
                    className="amz-faq-panel"
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
