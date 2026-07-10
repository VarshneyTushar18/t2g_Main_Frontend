"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "We'd tried three different Shopify freelancers before Tech2Globe. They were the first team that actually understood how our customers check out.",
    role: "Founder",
    brand: "Homewares Brand",
    initials: "HB",
  },
  {
    quote:
      "The migration from Squarespace was seamless. No downtime, no lost rankings, and mobile conversions nearly tripled.",
    role: "Ecommerce Manager",
    brand: "Beauty Brand",
    initials: "BB",
  },
  {
    quote:
      "Having developers in our timezone made support incredibly fast.",
    role: "Operations Lead",
    brand: "Activewear Brand",
    initials: "AB",
  },
];

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 scroll-mt-24 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(149,191,71,0.12), transparent 60%), #ffffff",
        }}
      />

      <div className="sp-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-[var(--sp-green-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--sp-ink)]"
          >
            Brands That Trust Tech2Globe
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            <button
              type="button"
              className="sp-testimonial-nav sp-testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => swiper?.slidePrev()}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="sp-testimonial-nav sp-testimonial-next"
              aria-label="Next testimonial"
              onClick={() => swiper?.slideNext()}
            >
              <FiChevronRight size={22} />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              slidesPerView={1}
              spaceBetween={0}
              loop
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="sp-testimonial-swiper"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.brand}>
                  <article className="sp-testimonial-card">
                    <div className="sp-testimonial-quote-mark" aria-hidden>
                      &ldquo;
                    </div>

                    <div
                      className="flex justify-center gap-1 mb-5 text-amber-500"
                      aria-label="5 star rating"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <blockquote>
                      <p className="sp-testimonial-quote">{t.quote}</p>
                    </blockquote>

                    <div className="sp-testimonial-author">
                      <div className="sp-testimonial-avatar" aria-hidden>
                        {t.initials}
                      </div>
                      <div className="text-left">
                        <cite className="not-italic font-bold text-[var(--sp-ink)] block text-base">
                          {t.role}
                        </cite>
                        <span className="text-sm text-[var(--sp-muted)]">
                          {t.brand}
                        </span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
