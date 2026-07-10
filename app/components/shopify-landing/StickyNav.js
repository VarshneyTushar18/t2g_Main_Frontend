"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
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
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(11,18,32,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="sp-container flex items-center justify-between h-16 md:h-[4.5rem]">
        <Link href="/" className="relative z-10 flex-shrink-0" aria-label="Tech2Globe home">
          <Image
            src="/images/landingpageimages/tech2globe-logo.webp"
            alt="Tech2Globe"
            width={180}
            height={56}
            className="h-9 md:h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--sp-muted)] hover:text-[var(--sp-green-dark)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="sp-btn sp-btn-primary text-sm !py-2.5 !px-5">
            Book Free Audit
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden relative z-10 p-2 rounded-lg text-[var(--sp-ink)] hover:bg-[var(--sp-green-soft)]"
          aria-expanded={open}
          aria-controls="shopify-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        id="shopify-mobile-nav"
        className={`lg:hidden fixed inset-0 top-16 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-xl text-base font-medium text-[var(--sp-ink)] hover:bg-[var(--sp-green-soft)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="sp-btn sp-btn-primary mt-4"
          >
            Book Free Audit
          </a>
        </nav>
      </div>
    </header>
  );
}
