"use client";

import StickyNav from "./StickyNav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import WhyChooseSection from "./WhyChooseSection";
import CaseStudySection from "./CaseStudySection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";
import LandingFooter from "./LandingFooter";
import StickyMobileCTA from "./StickyMobileCTA";

export default function AmazonLandingPage() {
  return (
    <div className="amz-lp">
      <StickyNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <CaseStudySection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
      <StickyMobileCTA />
    </div>
  );
}
