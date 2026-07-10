"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  "Shopify-certified developers",
  "Shopify Plus expertise",
  "Fast mobile performance",
  "Transparent reporting",
  "Flexible engagement models",
  "Dedicated account manager",
  "Local timezone support",
  "Enterprise experience",
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 scroll-mt-24" aria-labelledby="why-heading">
      <div className="sp-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--sp-shadow-lg)] aspect-[4/3] bg-[var(--sp-green-dark)]">
              <Image
                src="/images/landingpageimages/home-page-about.webp"
                alt="Ecommerce developers collaborating on a Shopify project"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--sp-green-dark)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-semibold text-lg">
                  Built by Shopify specialists
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Strategy, UX, and engineering in one team
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-[var(--sp-green)] font-semibold text-sm uppercase tracking-wide mb-3">
                Why Choose Tech2Globe
              </p>
              <h2
                id="why-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--sp-ink)] leading-tight"
              >
                Local Retail Knowledge. Global Shopify Expertise.
              </h2>
              <p className="mt-4 text-[var(--sp-muted)] leading-relaxed">
                We combine deep ecommerce craft with the operational discipline brands
                need to launch, migrate, and scale on Shopify and Shopify Plus.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-[var(--sp-border)] bg-white p-3.5 shadow-[var(--sp-shadow)]"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[var(--sp-green-soft)] text-[var(--sp-green)] grid place-items-center flex-shrink-0">
                      <FiCheck size={12} strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-[var(--sp-ink)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
