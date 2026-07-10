"use client";

import {
  FiSettings,
  FiSearch,
  FiTarget,
  FiLayout,
  FiPackage,
  FiFileText,
  FiStar,
  FiGlobe,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    icon: FiSettings,
    title: "Amazon Seller Central & Vendor Central Account Management",
    description:
      "End-to-end operations, order management, and account health monitoring for Amazon.",
  },
  {
    icon: FiSearch,
    title: "Amazon Listing Optimisation & A10 SEO",
    description:
      "Keyword-mapped titles, bullet points, backend search terms and A+ Content built for how local shoppers actually search.",
  },
  {
    icon: FiTarget,
    title: "Amazon PPC Management",
    description:
      "Sponsored Products, Sponsored Brands & Sponsored Display campaigns tuned for local ACOS/TACOS targets.",
  },
  {
    icon: FiLayout,
    title: "Amazon Storefront & Brand Store Design",
    description:
      "Conversion-focused storefronts that build trust with local shoppers.",
  },
  {
    icon: FiPackage,
    title: "Amazon FBA & Inventory Management",
    description:
      "Stock planning across local fulfilment centres to avoid restocking penalties.",
  },
  {
    icon: FiFileText,
    title: "GST, ABN & Compliance Support Guidance",
    description:
      "Help understanding your GST registration threshold (AUD $75,000), BAS lodgement touchpoints and local Consumer Law basics as they relate to your Amazon operations.",
  },
  {
    icon: FiStar,
    title: "Amazon Review & Reputation Management",
    description:
      "Proactive feedback monitoring tailored to local review patterns.",
  },
  {
    icon: FiGlobe,
    title: "Multi-Marketplace Expansion",
    description:
      "Take your Amazon catalogue into the US, UK, Canada or EU once your local base is solid.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 scroll-mt-24 bg-[var(--amz-bg)]"
      aria-labelledby="services-heading"
    >
      <div className="amz-container">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[var(--amz-orange-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
          >
            Full-Service Amazon Marketplace Management for Local Sellers
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.title} delay={Math.min((i % 4) + 1, 4)}>
                <article className="amz-service-card">
                  <div className="amz-icon-wrap">
                    <Icon aria-hidden />
                  </div>
                  <h3 className="text-base font-bold text-black leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--amz-muted)] leading-relaxed">
                    {s.description}
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
