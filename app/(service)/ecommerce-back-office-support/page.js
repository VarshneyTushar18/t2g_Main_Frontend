import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";
import {
  FaAmazon,
  FaHeadset,
  FaClipboardList,
  FaThList,
  FaUserFriends,
  FaDatabase,
  FaTruck,
  FaComments,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaClipboardCheck,
  FaUsers,
  FaTachometerAlt,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaUserCheck,
  FaCogs,
  FaLayerGroup,
  FaShoppingBag,
  FaStore,
  FaBuilding,
  FaSyncAlt,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import {
  SiShopify,
  SiWoo,
  SiWalmart,
  SiEbay,
  SiEtsy,
  SiBigcommerce,
} from "react-icons/si";

export const metadata = {
  title: "Ecommerce Back Office Support Services | Tech2Globe",
  description:
    "Outsource ecommerce back office support to Tech2Globe—customer support, order processing, catalog management, virtual assistants, data entry, logistics, chat, and invoicing.",
  keywords: [
    "Ecommerce Back Office Support",
    "ecommerce customer support",
    "order processing services",
    "catalog management services",
    "hire virtual assistant",
    "product data entry",
    "ecommerce logistics",
    "chat support",
    "invoice processing",
  ],
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/ecommerce-back-office-support",
  },
  openGraph: {
    title: "Ecommerce Back Office Support Services | Tech2Globe",
    description:
      "Outsource ecommerce back office support to Tech2Globe—customer support, order processing, catalog management, virtual assistants, data entry, logistics, chat, and invoicing.",
    url: "https://stagenew.tech2globe.tech/ecommerce-back-office-support",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Back Office Support Services | Tech2Globe",
    description:
      "Outsource ecommerce back office support to Tech2Globe—customer support, order processing, catalog management, virtual assistants, data entry, logistics, chat, and invoicing.",
  },
};

const pageHeaderData = {
  title: "Ecommerce Back Office Support",
  description:
    "Streamline your online store operations with dedicated back-office support covering customer support, order processing, catalog management, virtual assistants, product data entry, logistics, chat support, and invoice processing.",
  buttonText: "Talk to Our Experts",
  buttonLink: "/contact-us",
  backgroundImage: "/images/skyscraper.jpg",
};

const usefulLinks = [
  { id: 1, name: "Customer Support", path: "/customer-support" },
  { id: 2, name: "Order Processing", path: "/order-processing-services" },
  { id: 3, name: "Catalog Management Services", path: "/catalog-management-services" },
  { id: 4, name: "Hire Virtual Assistant", path: "/virtual-assistant-services" },
  { id: 5, name: "Product Data Entry", path: "/product-data-entry-services" },
  { id: 6, name: "Logistic Services", path: "/logistics-services" },
  { id: 7, name: "Chat Support", path: "/chat-support-services" },
  { id: 8, name: "Invoice Processing", path: "/invoice-processing-services" },
];

const sidebarSections = [
  { heading: "Ecommerce Back Office Support", links: usefulLinks },
];

const coreServices = [
  {
    icon: <FaHeadset size={36} color="#f15a29" />,
    title: "Customer Support",
    path: "/customer-support",
    description:
      "Deliver responsive, brand-aligned customer care across email, phone, and helpdesk channels so shoppers get answers fast and keep coming back.",
    bullets: [
      "Order status, returns, and refund queries",
      "Product information and purchase guidance",
      "Ticket triage and escalation handling",
      "Multilingual support options",
      "Quality monitoring and SLA reporting",
    ],
  },
  {
    icon: <FaClipboardList size={36} color="#f15a29" />,
    title: "Order Processing",
    path: "/order-processing-services",
    description:
      "Process orders accurately from placement to fulfillment confirmation, reducing delays, cancellations, and manual errors.",
    bullets: [
      "Order validation and exception handling",
      "Payment and address verification support",
      "Fulfillment handoff and status updates",
      "Returns and exchange processing",
      "Peak-season volume scaling",
    ],
  },
  {
    icon: <FaThList size={36} color="#f15a29" />,
    title: "Catalog Management Services",
    path: "/catalog-management-services",
    description:
      "Keep product catalogs clean, consistent, and conversion-ready across storefronts and marketplaces.",
    bullets: [
      "SKU setup and attribute enrichment",
      "Category mapping and taxonomy cleanup",
      "Bulk catalog updates and syncs",
      "Content consistency across channels",
      "Ongoing catalog maintenance",
    ],
  },
  {
    icon: <FaUserFriends size={36} color="#f15a29" />,
    title: "Hire Virtual Assistant",
    path: "/virtual-assistant-services",
    description:
      "Add flexible ecommerce VAs who handle admin, seller workflows, and day-to-day operational tasks as an extension of your team.",
    bullets: [
      "Seller account and dashboard management",
      "Listing updates and competitor checks",
      "Inbox and calendar support",
      "Reporting and task coordination",
      "Part-time or dedicated resource models",
    ],
  },
  {
    icon: <FaDatabase size={36} color="#f15a29" />,
    title: "Product Data Entry",
    path: "/product-data-entry-services",
    description:
      "Upload and maintain accurate product data at scale—titles, specs, images metadata, pricing, and inventory fields.",
    bullets: [
      "New product uploads and updates",
      "Attribute and variation mapping",
      "Image and description association",
      "Pricing and inventory field entry",
      "Quality checks before go-live",
    ],
  },
  {
    icon: <FaTruck size={36} color="#f15a29" />,
    title: "Logistic Services",
    path: "/logistics-services",
    description:
      "Coordinate shipping, tracking, and delivery follow-ups so customers receive orders on time and exceptions are resolved quickly.",
    bullets: [
      "Shipment booking and label coordination",
      "Tracking updates and carrier follow-ups",
      "Delivery exception management",
      "Return logistics support",
      "Fulfillment status reporting",
    ],
  },
  {
    icon: <FaComments size={36} color="#f15a29" />,
    title: "Chat Support",
    path: "/chat-support-services",
    description:
      "Convert live conversations into sales and satisfaction with trained chat agents who resolve issues in real time.",
    bullets: [
      "Live website and marketplace chat",
      "Pre-sales and post-purchase support",
      "Cart recovery and upsell prompts",
      "Chat-to-ticket escalation",
      "Shift coverage for peak hours",
    ],
  },
  {
    icon: <FaFileInvoiceDollar size={36} color="#f15a29" />,
    title: "Invoice Processing",
    path: "/invoice-processing-services",
    description:
      "Process vendor and customer invoices accurately—capture, validate, and route documents so accounts stay organized.",
    bullets: [
      "Invoice data capture and validation",
      "PO matching and exception flags",
      "Vendor and customer invoice workflows",
      "Digital filing and retrieval",
      "Processing status reports",
    ],
  },
];

const benefits = [
  { icon: <FaTachometerAlt size={28} />, title: "Faster Daily Operations", text: "Reduce backlog across support, orders, catalogs, and invoices with trained specialists." },
  { icon: <FaCheckCircle size={28} />, title: "Fewer Manual Errors", text: "Standardized workflows improve accuracy in order processing, data entry, and invoicing." },
  { icon: <FaClock size={28} />, title: "Extended Coverage Hours", text: "Keep customer and chat support available when your buyers expect replies." },
  { icon: <FaUsers size={28} />, title: "Dedicated Back-Office Team", text: "Work with specialists for support, catalog, logistics, and virtual assistant tasks." },
  { icon: <FaExpandArrowsAlt size={28} />, title: "Scale During Peak Seasons", text: "Ramp capacity for holidays and campaigns without long hiring cycles." },
  { icon: <FaCogs size={28} />, title: "Process Consistency", text: "Documented SOPs keep every ticket, order, and listing update handled the same way." },
  { icon: <FaGlobe size={28} />, title: "Multi-Channel Ready", text: "Support operations across Shopify, Amazon, marketplaces, and branded stores." },
  { icon: <FaClipboardCheck size={28} />, title: "Clear Reporting", text: "Get visibility into tickets, orders processed, catalog updates, and turnaround times." },
];

const industries = [
  { icon: <FaShoppingBag size={32} />, title: "D2C Brands", text: "Owned stores that need reliable support, catalog upkeep, and order handling." },
  { icon: <FaStore size={32} />, title: "Marketplace Sellers", text: "Amazon, Walmart, eBay, and multi-marketplace sellers managing high order volume." },
  { icon: <FaLayerGroup size={32} />, title: "Omnichannel Retailers", text: "Brands selling across websites, marketplaces, and wholesale channels." },
  { icon: <FaBuilding size={32} />, title: "Wholesale & B2B", text: "Bulk order processing, invoice workflows, and account support." },
  { icon: <FaSyncAlt size={32} />, title: "Subscription Brands", text: "Recurring orders, customer care, and catalog maintenance." },
  { icon: <FaTruck size={32} />, title: "Dropshipping Stores", text: "Order routing, supplier coordination, and shipment follow-ups." },
  { icon: <FaHeadset size={32} />, title: "Growing Startups", text: "Lean teams that need flexible VA and support capacity." },
  { icon: <FaThList size={32} />, title: "Large Catalog Sellers", text: "High-SKU businesses needing continuous product data and catalog work." },
];

const platforms = [
  { name: "Shopify", icon: <SiShopify size={40} /> },
  { name: "Amazon", icon: <FaAmazon size={40} /> },
  { name: "WooCommerce", icon: <SiWoo size={40} /> },
  { name: "Magento", icon: <FaShoppingBag size={40} /> },
  { name: "Walmart", icon: <SiWalmart size={40} /> },
  { name: "eBay", icon: <SiEbay size={40} /> },
  { name: "Etsy", icon: <SiEtsy size={40} /> },
  { name: "BigCommerce", icon: <SiBigcommerce size={40} /> },
];

const processSteps = [
  { step: 1, title: "Requirement Analysis", text: "Map your support channels, order flow, catalog size, and back-office priorities." },
  { step: 2, title: "Process & Access Setup", text: "Align SOPs, tools, and secure access to storefronts, marketplaces, and helpdesks." },
  { step: 3, title: "Team Onboarding", text: "Assign specialists for support, orders, catalog, VA, logistics, chat, and invoicing." },
  { step: 4, title: "Pilot Execution", text: "Run a controlled pilot on priority workflows and refine quality benchmarks." },
  { step: 5, title: "Daily Operations", text: "Execute tickets, orders, catalog updates, chats, logistics follow-ups, and invoices." },
  { step: 6, title: "Quality Monitoring", text: "Track accuracy, response time, and SLA performance with regular reviews." },
  { step: 7, title: "Continuous Optimization", text: "Scale coverage, improve scripts, and streamline workflows as volume grows." },
];

const whyChoose = [
  { icon: <FaUserCheck size={28} />, title: "Experienced Ecommerce Specialists", text: "Teams trained on marketplace and storefront workflows—not generic admin support." },
  { icon: <FaShieldAlt size={28} />, title: "Secure Data Handling", text: "Controlled access and confidentiality practices for customer and order data." },
  { icon: <FaUsers size={28} />, title: "Dedicated Account Managers", text: "A clear point of contact who understands your channels and priorities." },
  { icon: <FaClipboardCheck size={28} />, title: "Quality-First Delivery", text: "Checks on tickets, listings, orders, and invoices before work is marked complete." },
  { icon: <FaExpandArrowsAlt size={28} />, title: "Scalable Engagement Models", text: "Start with one function or combine full back-office coverage as you grow." },
  { icon: <FaCogs size={28} />, title: "Tool & Platform Flexibility", text: "We work within your existing helpdesk, OMS, catalog, and shipping tools." },
  { icon: <FaClock size={28} />, title: "Reliable Turnaround", text: "Predictable SLAs for support replies, order processing, and catalog updates." },
  { icon: <FaLayerGroup size={28} />, title: "End-to-End Back Office Coverage", text: "One partner for support, operations, catalog, logistics, chat, and invoicing." },
];

const faqs = [
  {
    id: "One",
    question: "What is included in ecommerce back office support?",
    answer:
      "Our ecommerce back office support covers customer support, order processing, catalog management, virtual assistants, product data entry, logistics coordination, chat support, and invoice processing—delivered as a combined package or individual services.",
  },
  {
    id: "Two",
    question: "Can we start with only one or two services?",
    answer:
      "Yes. Many clients begin with customer support, order processing, or catalog management and expand into virtual assistants, chat, logistics, or invoice processing as volume grows.",
  },
  {
    id: "Three",
    question: "Do you support multiple marketplaces and storefronts?",
    answer:
      "Yes. We support operations across major platforms including Shopify, Amazon, WooCommerce, Magento, Walmart, eBay, Etsy, and BigCommerce, following your channel-specific workflows.",
  },
  {
    id: "Four",
    question: "How quickly can a virtual assistant or support team start?",
    answer:
      "After requirement analysis and access setup, we onboard dedicated resources and begin with a pilot. Timelines depend on scope, but most engagements start within a short onboarding window.",
  },
  {
    id: "Five",
    question: "How do you maintain quality for order processing and data entry?",
    answer:
      "We use documented SOPs, dual-check processes for critical fields, exception queues for incomplete orders or catalog records, and regular accuracy reporting shared with your account manager.",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe took over our customer support and order processing during peak season. Response times improved and our internal team finally got back to growth work.",
    name: "D2C Brand Founder – USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Their catalog management and product data entry keep our Amazon and Shopify listings consistent. Virtual assistants handle the daily admin we never had time for.",
    name: "Marketplace Seller – UK",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Chat support, logistics follow-ups, and invoice processing are now handled by one reliable partner. Back-office operations feel organized for the first time.",
    name: "Omnichannel Retailer – Australia",
  },
];

export default function EcommerceBackOfficeSupport() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Ecommerce Back Office Support Services",
        description:
          "Dedicated ecommerce back office support covering customer support, order processing, catalog management, virtual assistants, product data entry, logistics, chat support, and invoice processing.",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe Web Solutions LLP",
          url: "https://www.tech2globe.com",
        },
        url: "https://stagenew.tech2globe.tech/ecommerce-back-office-support",
        serviceType: "Ecommerce Back Office Support",
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Ecommerce Back Office Support",
          itemListElement: usefulLinks.map((link) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: link.name,
              url: `https://stagenew.tech2globe.tech${link.path}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.replace(/<[^>]*>/g, "").trim(),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Ecommerce Back Office Support" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName=""
                imageSrc="/images/ecommerce-back-office.webp"
              />

              <div id="overview" className={Style.ContentDiv}>
                <h2>Ecommerce Back Office Support That Keeps Your Store Running</h2>
                <p>
                  Growing an online business takes more than driving traffic. Behind every successful
                  storefront is a reliable back office—handling customers, orders, catalogs, logistics,
                  and documentation without delays or quality gaps.
                </p>
                <p>
                  Tech2Globe provides end-to-end <strong>ecommerce back office support</strong> so your
                  team can focus on selling while we manage the operational work that keeps buyers happy
                  and channels clean. From customer care and chat to catalog updates, virtual assistants,
                  order processing, logistics coordination, and invoice workflows, we act as an extension
                  of your operations team.
                </p>
                <p>
                  Whether you sell on Shopify, Amazon, or across multiple marketplaces, our specialists
                  follow your SOPs and tools to deliver consistent, scalable support every day.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Ecommerce Back Office Support Services</h2>
                <p className="mb-4">
                  Complete operational coverage designed around the services online sellers need most—
                  available individually or as a combined back-office engagement.
                </p>
                <div className="row">
                  {coreServices.map((service) => (
                    <div key={service.title} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                      <div className={Style.CardBox}>
                        <div className="mb-2">{service.icon}</div>
                        <h5>
                          <Link href={service.path}>{service.title}</Link>
                        </h5>
                        <p>{service.description}</p>
                        <ul className="ps-3 mb-0">
                          {service.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="benefits" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Why Businesses Outsource Ecommerce Back Office Support</h2>
                <p className="mb-4">
                  Outsourcing gives you trained ecommerce operators, faster turnaround, and scalable
                  coverage—without building every function in-house.
                </p>
                <div className="row">
                  {benefits.map((item) => (
                    <div key={item.title} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 h-100 shadow-sm">
                        <div className="text-danger mb-2">{item.icon}</div>
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="industries" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Industries We Support</h2>
                <p className="mb-4">
                  Back-office support tailored for online retailers and sellers across growth stages and
                  selling models.
                </p>
                <div className="row">
                  {industries.map((item) => (
                    <div key={item.title} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                      <div className={Style.IconBox}>
                        {item.icon}
                        <h5 className="mt-2">{item.title}</h5>
                        <p className="mb-0 small">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="platforms" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Platforms We Work With</h2>
                <p className="mb-4">
                  Our teams support day-to-day operations across leading ecommerce platforms and
                  marketplaces.
                </p>
                <div className="row">
                  {platforms.map((platform) => (
                    <div key={platform.name} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                      <div className={Style.IconBox} title={platform.name}>
                        {platform.icon}
                        <h5 className="mt-2">{platform.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Process</h2>
                <p className="mb-4">
                  A clear onboarding-to-optimization path that gets your back office running smoothly and
                  improving as volume grows.
                </p>
                <div className="row">
                  {processSteps.map((step) => (
                    <div key={step.step} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <div className={Style.ProcessStep}>
                        <span className={Style.ProcessNumber}>{step.step}</span>
                        <h5>{step.title}</h5>
                        <p className="mb-0">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Why Choose Tech2Globe</h2>
                <p className="mb-4">
                  Ecommerce brands trust us with their back-office operations because we combine platform
                  experience, process discipline, and accountable delivery.
                </p>
                <div className="row">
                  {whyChoose.map((item) => (
                    <div key={item.title} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 h-100 shadow-sm">
                        <div className="text-danger mb-2">{item.icon}</div>
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Explore Our Back Office Services</h2>
                <p className="mb-3">
                  Jump into any service under Ecommerce Back Office Support.
                </p>
                <div className="row">
                  {usefulLinks.map((link) => (
                    <div key={link.id} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 shadow-sm h-100">
                        <Link href={link.path} className="text-decoration-none">
                          {link.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div id="contact" className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className={`${Style.CtaSection} text-center mt-5 mb-3 p-5 rounded-3`}>
                <h2 className="text-white mb-3">Ready to Simplify Your Ecommerce Back Office?</h2>
                <p className="text-white mb-4">
                  Partner with Tech2Globe for customer support, order processing, catalog management,
                  virtual assistants, logistics, chat, and invoice processing—handled by one reliable team.
                </p>
                <div className={`${Style.BtnBlock} d-flex justify-content-center`}>
                  <Link href="/contact-us" className="button-red">
                    Talk to Our Experts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <FaqSection faqs={faqs} />
      </div>

      <div className="EmailMarketingTestimonials">
        <ClientSlider testimonials={testimonials} />
      </div>
    </>
  );
}
