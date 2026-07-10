"use client";

import {
  FiZap,
  FiSmartphone,
  FiCreditCard,
  FiTruck,
  FiShoppingCart,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const EXPECTATIONS = [
  { icon: FiZap, label: "Lightning-fast stores" },
  { icon: FiSmartphone, label: "Mobile-first shopping" },
  { icon: FiCreditCard, label: "Local payment methods" },
  { icon: FiCheckCircle, label: "AfterPay & Zip" },
  { icon: FiTruck, label: "Fast shipping" },
  { icon: FiShoppingCart, label: "Frictionless checkout" },
];

const JOURNEY = [
  { label: "Customer Journey", sub: "Discover & browse" },
  { label: "Shopify Store", sub: "Brand experience" },
  { label: "Checkout", sub: "Local payments" },
  { label: "Order Success", sub: "Repeat purchase" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="sp-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="text-[var(--sp-green)] font-semibold text-sm uppercase tracking-wide mb-3">
                Ecommerce Opportunity
              </p>
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[var(--sp-ink)]"
              >
                Today&apos;s Shoppers Expect a Fast, Local, Mobile-First Store
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-5 text-[var(--sp-muted)] leading-relaxed">
                Modern ecommerce customers expect lightning-fast stores, mobile-first
                shopping, local payment methods like AfterPay and Zip, GST-inclusive
                pricing, fast shipping, and a frictionless checkout. Generic themes
                rarely deliver that experience out of the box.
              </p>
              <p className="mt-4 text-[var(--sp-muted)] leading-relaxed">
                Tech2Globe builds Shopify stores around real customer buying
                behaviour—not template defaults—so every click moves shoppers closer
                to purchase.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {EXPECTATIONS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-[var(--sp-border)] bg-white px-4 py-3 shadow-[var(--sp-shadow)]"
                  >
                    <span className="sp-icon-wrap !w-9 !h-9 !mb-0 !text-base">
                      <Icon aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-[var(--sp-ink)]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Right journey graphic */}
          <div
            className="rounded-3xl p-6 md:p-8 border border-[var(--sp-border)] shadow-[var(--sp-shadow-lg)]"
            style={{
              background:
                "linear-gradient(160deg, #f7faf3 0%, #ffffff 45%, #eef6e3 100%)",
            }}
            aria-label="Customer journey from browse to order success"
          >
            <p className="text-sm font-semibold text-[var(--sp-green-dark)] mb-8 text-center leading-snug">
              Customer Journey → Shopify Store → Checkout → Order Success
            </p>

            <ol className="relative">
              {JOURNEY.map((step, i) => (
                <li key={step.label} className="relative flex gap-4 last:pb-0 pb-8">
                  <div className="relative flex flex-col items-center">
                    <span
                      className="relative z-[1] w-11 h-11 rounded-full text-white text-sm font-bold grid place-items-center shadow-md"
                      style={{ background: "var(--sp-gradient)" }}
                    >
                      {i + 1}
                    </span>
                    {i < JOURNEY.length - 1 && (
                      <span
                        className="absolute top-11 bottom-[-2rem] w-0.5 left-1/2 -translate-x-1/2"
                        style={{ background: "rgba(149, 191, 71, 0.35)" }}
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="pt-2">
                    <p className="font-semibold text-[var(--sp-ink)] flex items-center gap-2">
                      {step.label}
                      {i < JOURNEY.length - 1 && (
                        <FiArrowRight
                          className="text-[var(--sp-green)]"
                          size={14}
                          aria-hidden
                        />
                      )}
                    </p>
                    <p className="text-sm text-[var(--sp-muted)] mt-0.5">
                      {step.sub}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
