import { Plus_Jakarta_Sans } from "next/font/google";
import AIConsultingPage from "@/components/ai-consulting/AIConsultingPage";
import "./ai-consulting.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-ai-lp",
  display: "swap",
});

const PAGE_URL = "https://tech2globe.ca/AI-Consulting";

export const metadata = {
  title:
    "AI Consulting Agency Australia | AI Strategy, Automation & LLM Integration | Tech2Globe",
  description:
    "Tech2Globe AI consulting ships working systems — AI readiness audits, strategy, generative AI, workflow automation and compliance for Australian businesses. Book a free AI Opportunity Audit.",
  keywords: [
    "AI Consulting Agency",
    "AI Consultant Australia",
    "AI Strategy Consulting",
    "AI Readiness Audit",
    "Generative AI Consulting",
    "AI Implementation Services",
    "Business Process Automation",
    "AI Workflow Automation",
    "LLM Integration Services",
    "AI Chatbot Development",
    "AI Governance & Compliance",
    "Data Strategy Consulting",
    "AI for Small Business",
    "Enterprise AI Consulting",
    "AI Customer Experience",
    "AI Opportunity Audit",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI Consulting Services | Tech2Globe — Working Systems, Not Slide Decks",
    description:
      "AI readiness audits, strategy, generative AI, automation and compliance. Book a free AI Opportunity Audit.",
    url: PAGE_URL,
    siteName: "Tech2Globe",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting Agency | Tech2Globe",
    description:
      "Practical AI consulting for Australian businesses. Free AI Opportunity Audit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "AI Consulting Services | Tech2Globe",
      description:
        "AI consulting agency delivering strategy, automation, generative AI and compliance for Australian businesses.",
      isPartOf: {
        "@type": "WebSite",
        name: "Tech2Globe",
        url: "https://tech2globe.ca",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}#service`,
      name: "Tech2Globe AI Consulting",
      url: PAGE_URL,
      image: "https://tech2globe.ca/images/landingpageimages/tech2globe-logo.webp",
      description:
        "AI consulting including readiness audits, strategy, LLM integration, workflow automation, customer experience AI and governance.",
      areaServed: "Australia",
      serviceType: [
        "AI Consulting",
        "AI Strategy Consulting",
        "Generative AI Consulting",
        "AI Workflow Automation",
        "AI Governance & Compliance",
      ],
      provider: {
        "@type": "Organization",
        name: "Tech2Globe",
        url: "https://tech2globe.ca",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do we need to already have an AI or data strategy in place?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — most clients start with little to no AI strategy. Our free AI Opportunity Audit identifies where AI can help from scratch.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer a free AI audit before we commit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — every engagement starts with a free AI Opportunity Audit so you can see the value before deciding to work with us.",
          },
        },
        {
          "@type": "Question",
          name: "Is our business data safe if we use generative AI tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Implementations are designed with privacy and security first, aligned to the Privacy Act and Australian Privacy Principles.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className={`${plusJakarta.variable} ${plusJakarta.className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIConsultingPage />
    </div>
  );
}
