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
  FaBook,
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaHandHoldingUsd,
  FaChartPie,
  FaStore,
  FaChartLine,
  FaUserTie,
  FaMoneyBillWave,
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
  FaTruck,
  FaSyncAlt,
  FaBuilding,
  FaBriefcase,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiShopify,
  SiWoo,
  SiWalmart,
  SiEbay,
  SiEtsy,
  SiBigcommerce,
  SiXero,
  SiQuickbooks,
  SiZoho,
} from "react-icons/si";

export const metadata = {
  title: "Ecommerce Back Office Support Services | Tech2Globe",
  description:
    "Streamline ecommerce operations with Tech2Globe back office support—bookkeeping, accounting, reconciliation, reporting, and dedicated operational assistance.",
  keywords: [
    "Ecommerce Back Office Support",
    "ecommerce bookkeeping services",
    "ecommerce accounting services",
    "marketplace reconciliation",
    "ecommerce financial reporting",
    "outsourced ecommerce accounting",
  ],
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/ecommerce-back-office-support",
  },
  openGraph: {
    title: "Ecommerce Back Office Support Services | Tech2Globe",
    description:
      "Streamline ecommerce operations with Tech2Globe back office support—bookkeeping, accounting, reconciliation, reporting, and dedicated operational assistance.",
    url: "https://stagenew.tech2globe.tech/ecommerce-back-office-support",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Back Office Support Services | Tech2Globe",
    description:
      "Streamline ecommerce operations with Tech2Globe back office support—bookkeeping, accounting, reconciliation, reporting, and dedicated operational assistance.",
  },
};

const pageHeaderData = {
  title: "Ecommerce Back Office Support",
  description:
    "Streamline your ecommerce operations with dedicated back-office support covering bookkeeping, accounting, reconciliation, order management, reporting, and operational assistance.",
  buttonText: "Talk to Our Experts",
  buttonLink: "/contact-us",
  backgroundImage: "/images/skyscraper.jpg",
};

const usefulLinks = [
  { id: 1, name: "Bookkeeping Services", path: "/bookkeeping-services" },
  { id: 2, name: "Accounting Services", path: "/accounting-services" },
  { id: 3, name: "Accounts Payable", path: "/accounts-payable-services" },
  { id: 4, name: "Accounts Receivable", path: "/accounts-receivable-services" },
  { id: 5, name: "Financial Accounting", path: "/financial-accounting-services" },
  { id: 6, name: "E-Commerce Support", path: "/e-commerce-support-services" },
  { id: 7, name: "Order Processing", path: "/order-processing-services" },
  { id: 8, name: "Payroll Services", path: "/payroll-processing-services" },
];

const sidebarSections = [
  { heading: "Useful Links", links: usefulLinks },
];

const coreServices = [
  {
    icon: <FaBook size={36} color="#f15a29" />,
    title: "Ecommerce Bookkeeping",
    description:
      "Maintain an accurate, up-to-date ledger across storefronts, marketplaces, and payment gateways so leadership can trust the numbers behind every decision.",
    bullets: [
      "Record marketplace, website, and gateway transactions",
      "Categorize COGS, shipping, ads, and operating expenses",
      "Sync multi-channel sales data into one ledger",
      "Manage digital receipts and invoices",
      "Close books monthly with data validation",
    ],
  },
  {
    icon: <FaBalanceScale size={36} color="#f15a29" />,
    title: "Accounts Reconciliation",
    description:
      "Match internal records with bank statements and processor reports to eliminate discrepancies and reflect your true cash position.",
    bullets: [
      "Bank and credit card reconciliation",
      "Payment gateway deposit matching",
      "Marketplace payout verification",
      "Flag unexpected fees and charges",
      "Verify refunds, returns, and chargebacks",
    ],
  },
  {
    icon: <FaFileInvoiceDollar size={36} color="#f15a29" />,
    title: "Accounts Payable",
    description:
      "Keep supplier payments on track without disrupting inventory procurement or day-to-day operations.",
    bullets: [
      "Vendor invoice processing and validation",
      "Payment scheduling and due-date tracking",
      "Purchase and expense recording",
      "Vendor ledger maintenance",
      "Outstanding payable monitoring",
    ],
  },
  {
    icon: <FaHandHoldingUsd size={36} color="#f15a29" />,
    title: "Accounts Receivable",
    description:
      "Tighten control over outstanding payments for D2C, wholesale, and hybrid selling models with varied payment cycles.",
    bullets: [
      "Customer and wholesale invoice creation",
      "Payment tracking across channels",
      "Receivables aging reports",
      "Overdue invoice follow-up support",
      "Credit notes, refunds, and adjustments",
    ],
  },
  {
    icon: <FaChartPie size={36} color="#f15a29" />,
    title: "Financial Reporting",
    description:
      "Deliver clear, scheduled reports that show profitability, cost trends, and channel performance for operators and stakeholders.",
    bullets: [
      "Monthly, quarterly, and annual P&L statements",
      "Balance sheet reporting",
      "Channel, product, and region segmentation",
      "Comparative period reporting",
      "Investor and lender-ready formats",
    ],
  },
  {
    icon: <FaStore size={36} color="#f15a29" />,
    title: "Marketplace Payment Analysis",
    description:
      "Translate complex settlement data into actionable insight on true earnings after fees, ads, fulfillment, and deductions.",
    bullets: [
      "Settlement, fee, and deduction analysis",
      "Margin erosion from returns and chargebacks",
      "Profitability by marketplace and channel",
      "Ad spend and fulfillment cost impact",
      "Budget planning from payout data",
    ],
  },
  {
    icon: <FaChartLine size={36} color="#f15a29" />,
    title: "Cash Flow Planning",
    description:
      "Project cash movement around sales performance, inventory cycles, and marketplace payout timelines to protect liquidity.",
    bullets: [
      "Map inflows against inventory and fulfillment",
      "Plan for peaks, promos, and growth investments",
      "Marketplace payout timing projections",
      "Working capital and OpEx planning",
      "Rolling short-term cash forecasts",
    ],
  },
  {
    icon: <FaUserTie size={36} color="#f15a29" />,
    title: "CFO Support",
    description:
      "Get senior-level financial guidance without a full-time in-house CFO—strategy, KPIs, and growth-ready decision support.",
    bullets: [
      "Financial strategy aligned to growth goals",
      "Budget planning and performance monitoring",
      "Margin and cost-structure analysis",
      "KPI tracking and executive reporting",
      "Advisory for investments and expansion",
    ],
  },
];

const benefits = [
  { icon: <FaMoneyBillWave size={28} />, title: "Reduced Operational Costs", text: "Replace fragmented in-house effort with a focused back-office team that scales with order volume." },
  { icon: <FaTachometerAlt size={28} />, title: "Better Cash Flow Visibility", text: "See payout cycles, liabilities, and working capital needs before they become surprises." },
  { icon: <FaClipboardCheck size={28} />, title: "Accurate Bookkeeping", text: "Keep multi-channel transactions categorized, reconciled, and audit-ready month after month." },
  { icon: <FaSyncAlt size={28} />, title: "Marketplace Reconciliation", text: "Match settlements, fees, and holdbacks to orders so net margins stay trustworthy." },
  { icon: <FaCheckCircle size={28} />, title: "Audit-Ready Financials", text: "Produce statements that stand up to internal review, investors, lenders, and auditors." },
  { icon: <FaUsers size={28} />, title: "Dedicated Experts", text: "Work with ecommerce-focused accountants who understand platform fee structures." },
  { icon: <FaCogs size={28} />, title: "Faster Month-End Closing", text: "Standardized workflows reduce backlog and shorten closing cycles." },
  { icon: <FaExpandArrowsAlt size={28} />, title: "Scalable Support", text: "Expand coverage as you add SKUs, channels, or brands without rebuilding your finance team." },
];

const industries = [
  { icon: <FaShoppingBag size={32} />, title: "D2C Brands", text: "Owned storefronts with high marketing spend, variable margins, and fast transaction cycles." },
  { icon: <FaStore size={32} />, title: "Marketplace Sellers", text: "Sellers managing multiple payout schedules, fee structures, and settlement reports." },
  { icon: <FaLayerGroup size={32} />, title: "Omnichannel Retailers", text: "Retailers selling across marketplaces, branded sites, wholesale, and physical stores." },
  { icon: <FaBuilding size={32} />, title: "Wholesale Businesses", text: "B2B sellers with bulk orders, negotiated pricing, credit terms, and longer cycles." },
  { icon: <FaSyncAlt size={32} />, title: "Subscription Businesses", text: "Membership, replenishment, and subscription-box models with recurring revenue." },
  { icon: <FaTruck size={32} />, title: "Dropshipping", text: "Supplier-fulfilled models with dynamic cost structures and light inventory ownership." },
  { icon: <FaBriefcase size={32} />, title: "CPA Firms", text: "Firms supporting marketplace sellers and online retailers that need ecommerce specialists." },
  { icon: <FaChartPie size={32} />, title: "Ecommerce Aggregators", text: "Groups managing multi-brand portfolios that need consolidated financial oversight." },
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
  { name: "Xero", icon: <SiXero size={40} /> },
  { name: "QuickBooks", icon: <SiQuickbooks size={40} /> },
  { name: "Zoho Books", icon: <SiZoho size={40} /> },
  { name: "NetSuite", icon: <FaBuilding size={40} /> },
  { name: "FreshBooks", icon: <FaBook size={40} /> },
  { name: "Microsoft Dynamics", icon: <FaMicrosoft size={40} /> },
];

const processSteps = [
  { step: 1, title: "Requirement Analysis", text: "Audit historical data, chart of accounts, and channel mix to define the right engagement model." },
  { step: 2, title: "Platform Access", text: "Establish secure access to storefronts, marketplaces, banks, and accounting software." },
  { step: 3, title: "Data Migration", text: "Import and validate opening balances, open invoices, and historical transactions." },
  { step: 4, title: "Accounting Setup", text: "Configure ledgers, categories, automations, and channel-level reporting structures." },
  { step: 5, title: "Daily Operations", text: "Record sales, fees, expenses, and payouts with continuous reconciliation checkpoints." },
  { step: 6, title: "Monthly Reporting", text: "Deliver closed books, P&L, cash flow, and channel performance packs on schedule." },
  { step: 7, title: "Continuous Optimization", text: "Refine workflows, close faster, and surface margin insights as your business grows." },
];

const whyChoose = [
  { icon: <FaUserCheck size={28} />, title: "Experienced Ecommerce Specialists", text: "Teams who understand marketplace fee schedules, holdbacks, and multi-channel accounting." },
  { icon: <FaShieldAlt size={28} />, title: "Secure Data Handling", text: "Controlled access, confidentiality practices, and secure workflows for financial data." },
  { icon: <FaUsers size={28} />, title: "Dedicated Account Managers", text: "A clear point of contact who understands your brands, channels, and reporting cadence." },
  { icon: <FaBalanceScale size={28} />, title: "Accurate Reconciliations", text: "Transaction-level matching across banks, gateways, and marketplace settlements." },
  { icon: <FaExpandArrowsAlt size={28} />, title: "Scalable Engagement Models", text: "Flexible coverage—from single specialists to full outsourced finance support." },
  { icon: <FaClipboardCheck size={28} />, title: "Transparent Reporting", text: "Scheduled packs tailored for operators, investors, and internal stakeholders." },
  { icon: <FaCogs size={28} />, title: "Modern Accounting Software Expertise", text: "Hands-on experience with leading cloud accounting and ERP platforms." },
  { icon: <FaLayerGroup size={28} />, title: "Multi-Marketplace Experience", text: "Proven workflows for Amazon, Shopify, Walmart, eBay, and omnichannel stacks." },
];

const faqs = [
  {
    id: "One",
    question: "How do you transition our current bookkeeping setup to your team?",
    answer:
      "We begin with an audit of historical data and your existing chart of accounts, map current workflows, connect securely to your sales channels, and run a trial reconciliation before fully taking over day-to-day accounting.",
  },
  {
    id: "Two",
    question: "Can you support businesses selling across multiple channels?",
    answer:
      "Yes. Multi-channel support is core to our ecommerce back office services. We consolidate marketplace, storefront, and payment gateway data into one ledger while preserving channel-level segmentation for performance analysis.",
  },
  {
    id: "Three",
    question: "How do you handle discrepancies between marketplace payouts and financial records?",
    answer:
      "Our team systematically reconciles marketplace settlements with internal records and bank statements. Missing transactions, fee mismatches, and processing errors are identified and resolved at the transaction level.",
  },
  {
    id: "Four",
    question: "Do you support multi-entity or multi-storefront accounting?",
    answer:
      "Yes. We maintain separate books for each legal entity, properly record intercompany transactions, and produce consolidated statements that give ownership a clear view of aggregate performance.",
  },
  {
    id: "Five",
    question: "Will we have a dedicated point of contact?",
    answer:
      "You can choose a dedicated account manager for personalized support or a specialist team model where different experts handle bookkeeping, reconciliation, and reporting. Engagement models include retainers and custom packages.",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe took over our multi-channel bookkeeping and finally gave us clean month-end numbers we can trust. Marketplace fees and payouts used to be a black box—now they are clear.",
    name: "D2C Brand Founder – USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Their reconciliation work across Amazon and Shopify saved our finance team hours every week. Reporting is timely, accurate, and easy for leadership to act on.",
    name: "Marketplace Seller – UK",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We needed scalable back-office support without hiring a full in-house accounting team. Tech2Globe delivered dedicated specialists and audit-ready books.",
    name: "Ecommerce Aggregator – Australia",
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
          "Dedicated ecommerce back office support covering bookkeeping, accounting, reconciliation, reporting, cash flow planning, and operational assistance for online retailers.",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe Web Solutions LLP",
          url: "https://www.tech2globe.com",
        },
        url: "https://stagenew.tech2globe.tech/ecommerce-back-office-support",
        serviceType: "Ecommerce Accounting and Back Office Support",
        areaServed: "Worldwide",
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
                <h2>Ecommerce Back Office Support That Delivers Real Financial Visibility</h2>
                <p>
                  Accurate ecommerce accounting goes far beyond recording gross sales. Each sales channel
                  brings its own fee schedules, payout cycles, returns, advertising deductions, and
                  fulfillment costs. When those details are mishandled, financial statements misrepresent
                  true net margins, cash position, and operational profitability.
                </p>
                <p>
                  Tech2Globe provides end-to-end <strong>ecommerce back office support</strong> that
                  consolidates multi-channel transaction data, platform fees, settlement records, and
                  operating expenses into clear, audit-ready books. Our team reconciles settlements against
                  bank records and internal ledgers, resolves discrepancies at the transaction level, and
                  keeps your finance operations running smoothly so you can focus on growth.
                </p>
                <p>
                  From daily bookkeeping and accounts reconciliation to reporting and CFO-level guidance,
                  we help online retailers improve operational efficiency and maintain complete financial
                  visibility across every channel they sell on.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Core Ecommerce Back Office Services</h2>
                <p className="mb-4">
                  Comprehensive financial and operational support designed for high-volume online retail—
                  covering every function from transaction recording to strategic planning.
                </p>
                <div className="row">
                  {coreServices.map((service) => (
                    <div key={service.title} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                      <div className={Style.CardBox}>
                        <div className="mb-2">{service.icon}</div>
                        <h5>{service.title}</h5>
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
                  Outsourcing gives you specialized ecommerce finance expertise, faster closes, and clearer
                  visibility into margins—without the overhead of building every capability in-house.
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
                  Outsourced accounting and bookkeeping support tailored for diverse online retail
                  operations and the firms that serve them.
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
                  Deep functional expertise across leading commerce platforms and accounting tools—so we
                  can manage high-volume transactions without disrupting your existing workflows.
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
                  A clear onboarding-to-optimization path that keeps your books accurate from day one and
                  improves as your ecommerce operation scales.
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
                  Leading ecommerce businesses trust us with their finances because we combine platform
                  expertise, secure processes, and accountable delivery.
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
                <h2 className="text-danger pt-3">Related Services</h2>
                <p className="mb-3">
                  Explore more finance and ecommerce support offerings from Tech2Globe.
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
                  Partner with Tech2Globe for accurate bookkeeping, marketplace reconciliation, and
                  reporting that gives you complete visibility into true net margins.
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
