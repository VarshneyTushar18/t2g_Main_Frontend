"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 1
      ? "ai-reveal-delay-1"
      : delay === 2
        ? "ai-reveal-delay-2"
        : delay === 3
          ? "ai-reveal-delay-3"
          : delay === 4
            ? "ai-reveal-delay-4"
            : "";

  return (
    <Tag ref={ref} className={`ai-reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
