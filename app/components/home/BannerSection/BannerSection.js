"use client";

import Image from "next/image";
import Link from "next/link";
import Style from "./BannerSection.module.css";

export default function BannerSection() {
  return (
    <section className={Style.BannerSection}>
      <div id="home_wave" className={Style.HomeBanner}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-4">
                Your Partner in AI-Enabled Development, Digital Marketing, eCommerce, Data Management, Business
                Intelligence & Operations.
              </h1>

              <p className="text-light my-4">
                <Link href="/e-commerce-development" className="hover-underline link-light">Ecommerce</Link> |{" "}
                <Link href="/web-development" className="hover-underline link-light">Web</Link> |{" "}
                <Link href="/mobile-app-development" className="hover-underline link-light">Mobile</Link> |{" "}
                <Link href="/call-centre-services" className="hover-underline link-light">BPO</Link> |{" "}
                <Link href="/virtual-assistant-services" className="hover-underline link-light">KPO</Link> |{" "}
                <Link href="/data-management-services" className="hover-underline link-light">Data Management</Link> |{" "}
                <Link href="/graphic-design-services" className="hover-underline link-light">Graphics</Link> |{" "}
                <Link href="/digital-marketing-services" className="hover-underline link-light">Digital Marketing</Link>
              </p>

              <div className={`${Style.CertifiedSection} my-4`}>
                <ul className="d-flex align-items-center p-0" style={{ listStyle: "none" }}>
                  {[
                    "iso.webp",
                    "flipkart.webp",
                    "meta-bs-partner.webp",
                    "amazon_spn_logo.webp",
                    "google-partner-logo.png",
                    "Payoneer-Log.webp",
                    "shopify.webp",
                    "certificate.webp",
                    "ebay.webp",
                    "cmmi-3.png",
                  ].map((img, idx) => (
                    <li className={Style.BgLight} key={idx}>
                      <Image
                        className="img-fluid"
                        src={`/images/homepage/banner/${img}`}
                        alt={img.replace(".webp", "").replace(".png", "")}
                        width={292}
                        height={150}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-flex flex-wrap">
                <Link href="/contact-us" className="button-red mt-2 mx-0">REQUEST A QUOTE</Link>
                <Link href="/portfolio" className="button-red mt-2 ms-2">PORTFOLIO</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
