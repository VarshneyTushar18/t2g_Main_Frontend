"use client";

import StickyNav from "./StickyNav";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WhyChooseSection from "./WhyChooseSection";
import ProcessSection from "./ProcessSection";
import CaseStudySection from "./CaseStudySection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";
import LandingFooter from "./LandingFooter";
import StickyMobileCTA from "./StickyMobileCTA";

export default function AIConsultingPage() {
  return (
    <div className="ai-lp">
      <StickyNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
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
