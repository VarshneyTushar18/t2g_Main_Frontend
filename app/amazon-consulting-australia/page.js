import AmazonLandingPage from "@/app/components/amazon-landing/AmazonLandingPage";
import "./amz-landing.css";

const PAGE_URL = "https://tech2globe.ca/Amazon-Marketplace-Management";

export const metadata = {
  title:
    "Amazon Marketplace Management | Seller Central, PPC & A10 SEO | Tech2Globe",
  description:
    "Tech2Globe manages Amazon Seller Central & Vendor Central for local sellers — listing optimisation, Amazon PPC, A10 SEO, FBA, GST/ABN guidance and storefront design. Book a free Amazon account audit.",
  keywords: [
    "Amazon Marketplace Management",
    "Amazon Seller Central Management",
    "Amazon Vendor Central Management",
    "Amazon Listing Optimisation",
    "A10 SEO",
    "Amazon PPC Management",
    "Amazon Storefront Design",
    "Amazon Brand Store Design",
    "Amazon FBA Management",
    "Amazon Inventory Management",
    "GST Compliance for Amazon Sellers",
    "ABN Guidance",
    "Amazon Review & Reputation Management",
    "Multi-Marketplace Expansion",
    "Amazon Account Audit",
    "ACOS Reduction",
    "TACOS Optimisation",
    "Amazon Growth Strategy",
    "Amazon Seller Support",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Amazon Marketplace Management | Tech2Globe",
    description:
      "Grow your Amazon store with local-market expertise. Free Amazon account audit.",
    url: PAGE_URL,
    siteName: "Tech2Globe",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Marketplace Management | Tech2Globe",
    description:
      "Seller Central, PPC, A10 SEO and FBA management for local Amazon sellers.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Amazon Marketplace Management | Tech2Globe",
      description:
        "Full-service Amazon marketplace management for local sellers including PPC, listings, FBA and compliance guidance.",
      isPartOf: {
        "@type": "WebSite",
        name: "Tech2Globe",
        url: "https://tech2globe.ca",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Tech2Globe Amazon Marketplace Management",
      url: PAGE_URL,
      image: "https://tech2globe.ca/images/landingpageimages/tech2globe-logo.webp",
      areaServed: ["Sydney", "Melbourne", "Brisbane", "Perth", "Australia"],
      serviceType: [
        "Amazon Marketplace Management",
        "Amazon PPC Management",
        "Amazon Listing Optimisation",
        "Amazon FBA Management",
      ],
      provider: {
        "@type": "Organization",
        name: "Tech2Globe",
        url: "https://tech2globe.ca",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you offer a free audit before we commit to a plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we start every new relationship with a free Amazon account and listing audit.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need an ABN to sell on Amazon?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It's not mandatory for all international sellers, but an ABN builds trust and simplifies GST. We help you understand what applies to your situation.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmazonLandingPage />
    </div>
  );
}
