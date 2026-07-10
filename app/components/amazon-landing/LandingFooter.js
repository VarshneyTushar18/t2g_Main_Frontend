"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const SOCIAL = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/tech2globe.software",
    label: "Facebook",
  },
  { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com", label: "LinkedIn" },
  { Icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
];

export default function LandingFooter() {
  return (
    <footer className="bg-[var(--amz-bg)] text-black pt-12 pb-8 border-t border-[var(--amz-border)]">
      <div className="amz-container">
        <div className="flex flex-col items-center text-center max-w-lg mx-auto">
          <Image
            src="/images/landingpageimages/tech2globe-logo.webp"
            alt="Tech2Globe"
            width={180}
            height={56}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-[var(--amz-muted)] leading-relaxed">
            Amazon marketplace management for local sellers — listings, PPC, FBA, compliance
            and growth.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-black text-white hover:bg-[var(--amz-orange)] hover:text-black grid place-items-center transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-7 text-sm text-[var(--amz-muted)]">
            <Link href="/privacy-policy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <span className="text-black/20" aria-hidden>
              |
            </span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-black transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--amz-border)] text-center text-xs text-[var(--amz-muted)]">
          <p>© {new Date().getFullYear()} Tech2Globe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
