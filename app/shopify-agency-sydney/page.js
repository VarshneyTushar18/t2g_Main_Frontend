import ShopifyLandingPage from "@/app/components/shopify-landing/ShopifyLandingPage";
import "./shopify-landing.css";

const PAGE_URL = "https://tech2globe.ca/Shopify-landing-page";

export const metadata = {
  title:
    "Shopify Development Agency | Custom Shopify & Shopify Plus Experts | Tech2Globe",
  description:
    "Tech2Globe is a Shopify development agency for D2C, retail, wholesale & Shopify Plus brands. Custom themes, migrations, SEO, CRO & free Shopify store audits.",
  keywords: [
    "Shopify Development Agency",
    "Shopify Developer",
    "Shopify Plus Partner",
    "Shopify Website Design",
    "Shopify Store Migration",
    "Shopify App Development",
    "Shopify SEO",
    "Shopify Ecommerce Agency",
    "Shopify Plus Development",
    "Shopify Support",
    "Shopify Store Audit",
    "Headless Shopify Development",
    "Shopify Conversion Rate Optimisation",
    "Custom Shopify Theme Development",
    "Ecommerce Website Development",
    "Shopify Experts",
    "Shopify Developers",
    "Shopify Migration Experts",
    "Shopify CRO",
    "Shopify Agency",
    "Shopify Website Development",
    "Shopify Theme Customization",
    "Shopify Performance Optimization",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Shopify Development Agency | Tech2Globe — Stores That Actually Sell",
    description:
      "Design, build and scale Shopify & Shopify Plus stores. Book a free Shopify store audit from Tech2Globe.",
    url: PAGE_URL,
    siteName: "Tech2Globe",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency | Tech2Globe",
    description:
      "Custom Shopify development, Plus solutions, migrations, SEO & CRO. Book a free store audit.",
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
      name: "Shopify Development Agency | Tech2Globe",
      description:
        "Premium Shopify development agency for custom themes, Shopify Plus, migrations, SEO, CRO and ongoing support.",
      isPartOf: {
        "@type": "WebSite",
        name: "Tech2Globe",
        url: "https://tech2globe.ca",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}#service`,
      name: "Tech2Globe Shopify Development Agency",
      url: PAGE_URL,
      image: "https://tech2globe.ca/images/landingpageimages/tech2globe-logo.webp",
      description:
        "Shopify development agency specializing in custom Shopify & Shopify Plus theme development, store migration, app integration, SEO, CRO and headless commerce.",
      areaServed: "Worldwide",
      serviceType: [
        "Shopify Development",
        "Shopify Plus Development",
        "Shopify Store Migration",
        "Shopify SEO",
        "Shopify CRO",
        "Headless Shopify Development",
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
          name: "Do you only work with local businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We partner with D2C brands, retailers, wholesale businesses, and Shopify Plus enterprises across markets with local timezone support.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a Shopify store cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Investment depends on scope. After your free store audit we provide a clear roadmap and transparent quote.",
          },
        },
        {
          "@type": "Question",
          name: "Can you migrate without losing SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Our migration process includes URL mapping, redirects, metadata preservation, and post-launch monitoring.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support Shopify Plus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We deliver Shopify Plus enterprise development including wholesale, multi-currency, B2B and complex integrations.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide free audits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Book a free Shopify store audit and receive a tailored growth roadmap with no obligation.",
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
      <ShopifyLandingPage />
    </div>
  );
}
