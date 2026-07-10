"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Case Study", href: "#case-study" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[var(--amz-border)] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="amz-container flex items-center justify-between h-16 md:h-[4.5rem]">
        <Link href="/" className="relative z-10" aria-label="Tech2Globe home">
          <Image
            src="/images/landingpageimages/tech2globe-logo.webp"
            alt="Tech2Globe"
            width={180}
            height={56}
            className="h-9 md:h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--amz-muted)] hover:text-black transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="amz-btn amz-btn-primary text-sm !py-2.5 !px-5">
            Book Free Audit
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-[var(--amz-orange-soft)]"
          aria-expanded={open}
          aria-controls="amz-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        id="amz-mobile-nav"
        className={`lg:hidden fixed inset-0 top-16 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-xl font-medium hover:bg-[var(--amz-orange-soft)]"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="amz-btn amz-btn-primary mt-4">
            Book Free Audit
          </a>
        </nav>
      </div>
    </header>
  );
}
