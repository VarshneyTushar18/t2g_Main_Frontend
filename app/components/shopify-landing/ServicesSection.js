"use client";

import {
  FiLayout,
  FiRefreshCw,
  FiCode,
  FiSearch,
  FiTrendingUp,
  FiBriefcase,
  FiHeadphones,
  FiCpu,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    icon: FiLayout,
    title: "Custom Shopify & Shopify Plus Theme Development",
    description:
      "Bespoke mobile-first Shopify storefronts designed specifically for your brand.",
  },
  {
    icon: FiRefreshCw,
    title: "Shopify Store Migration",
    description:
      "WooCommerce, Magento, Squarespace and BigCommerce migrations with zero SEO loss.",
  },
  {
    icon: FiCode,
    title: "Shopify App Development & Integration",
    description:
      "Integrations including AfterPay, Zip, ShipStation, postal carriers, Xero, and ERP systems.",
  },
  {
    icon: FiSearch,
    title: "Shopify SEO & Technical Optimisation",
    description:
      "Core Web Vitals, schema markup, site speed, and technical SEO that compounds growth.",
  },
  {
    icon: FiTrendingUp,
    title: "Conversion Rate Optimisation",
    description:
      "Product pages, checkout, cart optimisation, and A/B testing built for revenue lift.",
  },
  {
    icon: FiBriefcase,
    title: "Shopify Plus Enterprise Development",
    description:
      "Wholesale, multi-currency, B2B, and enterprise Shopify Plus store architecture.",
  },
  {
    icon: FiHeadphones,
    title: "Ongoing Shopify Support",
    description:
      "Theme maintenance, updates, performance monitoring, and Black Friday readiness.",
  },
  {
    icon: FiCpu,
    title: "Headless Shopify Development",
    description:
      "React, Next.js, Hydrogen, and custom storefronts for brands that need more control.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[var(--sp-bg)] scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="sp-container">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[var(--sp-green)] font-semibold text-sm uppercase tracking-wide mb-3">
            Services
          </p>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--sp-ink)]"
          >
            Full-Service Shopify Development for Growing Brands
          </h2>
          <p className="mt-4 text-[var(--sp-muted)]">
            From first build to Shopify Plus scale—strategy, design, development, and
            growth under one roof.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={(i % 4) + 1}>
                <article className="sp-service-card">
                  <div className="sp-icon-wrap">
                    <Icon aria-hidden />
                  </div>
                  <h3 className="text-base font-bold text-[var(--sp-ink)] leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--sp-muted)] leading-relaxed">
                    {service.description}
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
