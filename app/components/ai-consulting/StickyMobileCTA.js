"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroH = window.innerHeight * 0.7;
      const contact = document.getElementById("contact");
      const nearContact =
        contact &&
        contact.getBoundingClientRect().top < window.innerHeight * 0.85;
      setShown(window.scrollY > heroH && !nearContact);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`ai-sticky-cta ${shown ? "is-shown" : ""}`}
      role="region"
      aria-label="Book free AI audit"
    >
      <a href="#contact" className="ai-btn ai-btn-primary w-full">
        Book a Free AI Opportunity Audit
      </a>
    </div>
  );
}
