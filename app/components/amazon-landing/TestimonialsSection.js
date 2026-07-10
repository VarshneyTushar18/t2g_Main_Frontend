"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "We'd tried managing our Amazon account in-house for a year with flat results. Tech2Globe rebuilt our listings and PPC structure, and within four months we had our first properly profitable quarter on Amazon.",
    role: "Operations Director",
    brand: "Home & Kitchenware Brand, Melbourne",
    initials: "OD",
  },
  {
    quote:
      "What stood out was that they actually understood the difference between the US Amazon marketplace and our local Amazon marketplace — the keyword research, the ad targeting, even the GST guidance was specific to our market.",
    role: "Founder",
    brand: "Skincare Brand, Sydney",
    initials: "FS",
  },
  {
    quote:
      "Our ACOS was out of control before we brought Tech2Globe on. They rebuilt our campaign structure and got us to a sustainable number within eight weeks, without sacrificing sales volume.",
    role: "Ecommerce Manager",
    brand: "Pet Care Brand, Brisbane",
    initials: "EM",
  },
];

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 scroll-mt-24 bg-[var(--amz-bg)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="amz-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-[var(--amz-orange-dark)] font-semibold text-sm uppercase tracking-wide mb-3">
            Client Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
          >
            What Sellers Say About Working With Us
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto">
            <button
              type="button"
              className="amz-testimonial-nav amz-testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => swiper?.slidePrev()}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="amz-testimonial-nav amz-testimonial-next"
              aria-label="Next testimonial"
              onClick={() => swiper?.slideNext()}
            >
              <FiChevronRight size={22} />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              slidesPerView={1}
              loop
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="amz-testimonial-swiper"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.brand}>
                  <article className="amz-testimonial-card">
                    <div
                      className="flex justify-center gap-1 mb-5 text-[var(--amz-orange)]"
                      aria-label="5 star rating"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <blockquote>
                      <p className="amz-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                    </blockquote>
                    <div className="amz-testimonial-author">
                      <div className="amz-testimonial-avatar" aria-hidden>
                        {t.initials}
                      </div>
                      <div className="text-left">
                        <cite className="not-italic font-bold text-black block">
                          {t.role}
                        </cite>
                        <span className="text-sm text-[var(--amz-muted)]">{t.brand}</span>
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
