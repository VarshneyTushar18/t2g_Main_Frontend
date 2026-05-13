import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaAngleRight, FaChartBar, FaCheckSquare, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaGlobe, FaHandPointRight, FaIndustry, FaLightbulb, FaMedal, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Faq from "@/app/(resources)/faq/page";
import "./custom.css";

export const metadata = {
  title: "#1 Influencer Marketing Agency | Influencer Marketing Services",

  description:
    "Tech2globe is an influencer marketing agency and the most trusted platform connecting brands with influencers for better sales. Consult our influencer specialists today!",

  keywords: [
    "Influencer Marketing Agency in India",
    "Influencer marketing company",
    "Influencer Marketing Companies In India",
    "Influencer agency in India",
  ],

  alternates: {
    canonical:
      "https://www.tech2globe.com/influencer-marketing-agency",
  },

  openGraph: {
    title:
      "#1 Influencer Marketing Agency | Influencer Marketing Services",

    description:
      "Tech2globe is an influencer marketing agency and the most trusted platform connecting brands with influencers for better sales. Consult our influencer specialists today!",

    url:
      "https://www.tech2globe.com/influencer-marketing-agency",

    siteName: "Tech2Globe Web Solutions LLP",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "#1 Influencer Marketing Agency | Influencer Marketing Services",

    description:
      "Tech2globe is an influencer marketing agency and the most trusted platform connecting brands with influencers for better sales. Consult our influencer specialists today!",
  },
};


const usefullinks = [
  { id: 1, name: "AI Data Support For KPO Services", path: "/data-support-kpo-ai-services" },
  { id: 2, name: "AI Data Support Services", path: "/data-support-ai-services" },
  { id: 3, name: "Chat Support Services For AI Products", path: "/chat-support-services" },
  { id: 4, name: "Customer Data Migration Services", path: "/data-migration-services" },
  { id: 5, name: "Customer Onboarding Services", path: "/customer-onboarding-services" },
  { id: 6, name: "Project Implementation Services", path: "/project-implementation-services" },
  { id: 7, name: "Reporting And Analytics", path: "/reporting-and-analytics" },
  { id: 8, name: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { id: 9, name: "Voice Support For AI Products", path: "/voice-support-for-ai-products" },
];


const sidebarSections = [
  { heading: "Useful Links", links: usefullinks },
];

const portfolio = [
  {
    title: "Product Uploading",
    items: [
      {
        title: "Lacanvas",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.lacanvas.com/",
        img: "/images/services/portfolio-img/lacanvas.jpg",
      },
      {
        title: "Linkcycle",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.linkcycle.com/",
        img: "/images/services/portfolio-img/linkcycle.jpg",
      },
      {
        title: "Silver Goldinto Cash",
        tech: "PHP, Mysql",
        link: "http://www.silvergoldintocash.com/",
        img: "/images/services/portfolio-img/silvergoldintocash.jpg",
      },
      {
        title: "Travel Blue",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.travel-blue.com/",
        img: "/images/services/portfolio-img/travel-blue.jpg",
      },
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Zphotoedit",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.zphotoedit.com/",
        img: "/images/services/portfolio-img/zphotoedit.jpg",
      },
      {
        title: "Luiolei",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      }
    ],
  },
  {
    title: "Web Stores Design & Dev",
    items: [
      {
        title: "Consult for PPP",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "https://consultforppp.com/",
        img: "/images/services/portfolio-img/consultforppp.jpg",
      },
      {
        title: "Devouttechs",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "http://devouttechs.com/",
        img: "/images/services/portfolio-img/devouttechs.jpg",
      },
      {
        title: "Geturkart",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "https://geturkart.com/",
        img: "/images/services/portfolio-img/geturkart.jpg",
      },
      {
        title: "Nopextensions",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "http://nopextensions.com/",
        img: "/images/services/portfolio-img/nopextensions.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      },
      {
        title: "Luiolei",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      }
    ],
  },
  {
    title: "Indian Ecomm MarketPlace",
    items: [
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Zphotoedit",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.zphotoedit.com/",
        img: "/images/services/portfolio-img/zphotoedit.jpg",
      },
      {
        title: "My Orthosoft",
        tech: "Cake PHP",
        link: "http://www.myorthosoft.com/",
        img: "/images/services/portfolio-img/myorthosoft.jpg",
      },
      {
        title: "Saleswarp",
        tech: "Cake PHP",
        link: "https://saleswarp.com/",
        img: "/images/services/portfolio-img/saleswarp.jpg",
      },
      {
        title: "Webmallng",
        tech: "PHP, Mysql, Jquery.",
        link: "https://www.webmallng.com/",
        img: "/images/services/portfolio-img/webmallng.jpg",
      },
      {
        title: "UnotechonLine",
        tech: "PHP, Mysql, Jquery.",
        link: "https://www.unotechonline.com/",
        img: "/images/services/portfolio-img/unotechonline.jpg",
      },
      {
        title: "Lacanvas",
        tech: "PHP, Mysql, Jquery.",
        link: "http://www.lacanvas.com/",
        img: "/images/services/portfolio-img/lacanvas.jpg",
      },
      {
        title: "Linkcycle",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.linkcycle.com/",
        img: "/images/services/portfolio-img/linkcycle.jpg",
      },
      {
        title: "Silver Goldinto Cash",
        tech: "PHP, Mysql",
        link: "http://www.silvergoldintocash.com/",
        img: "/images/services/portfolio-img/silvergoldintocash.jpg",
      },
      {
        title: "Travel Blue",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.travel-blue.com/",
        img: "/images/services/portfolio-img/travel-blue.jpg",
      },
    ],
  },
  {
    title: "International Ecomm Marketplace",
    subTabs: [
      {
        title: "Shopify",
        items: [
          {
            title: "Shop Modern Accessory",
            tech: "Shopify",
            link: "http://shopmodernaccessory.com/",
            img: "/images/services/portfolio-img/shopmodernaccessory.jpg",
          },
          {
            title: "Donna Bella Jewelry",
            tech: "Shopify",
            link: "http://www.donnabellajewelry.dk/",
            img: "/images/services/portfolio-img/donnabellajewelry.jpg",
          },
          {
            title: "E-Panneur",
            tech: "Shopify",
            link: "http://e-panneur.ca/",
            img: "/images/services/portfolio-img/e-panneur.jpg",
          },
        ],
      },
      {
        title: "Magento",
        items: [
          {
            title: "Sports456",
            tech: "Magento",
            link: "http://www.sports456.com/",
            img: "/images/services/portfolio-img/sports456.jpg",
          },
          {
            title: "All Extreme",
            tech: "Magento",
            link: "http://www.allextreme.in/",
            img: "/images/services/portfolio-img/allextreme.jpg",
          },
          {
            title: "Shoesuite",
            tech: "Magento",
            link: "https://www.shoesuite.ie/",
            img: "/images/services/portfolio-img/shoesuite.jpg",
          },
          {
            title: "Atkins",
            tech: "Magento",
            link: "https://www.atkins.ie/",
            img: "/images/services/portfolio-img/atkins.jpg",
          },
          {
            title: "Director Derblinds",
            tech: "Magento",
            link: "https://www.directorderblinds.co.uk/",
            img: "/images/services/portfolio-img/directorderblinds.jpg",
          },
        ],
      },
      {
        title: "BigCommerce",
        items: [
          {
            title: "Coovy Sports",
            tech: "BigCommerce",
            link: "https://coovysports.com/",
            img: "/images/services/portfolio-img/coovysports.jpg",
          },
        ],
      },
      {
        title: "NopCommerce",
        items: [
          {
            title: "Luiolei",
            tech: "NopCommerce",
            link: "http://www.luiolei.com/",
            img: "/images/services/portfolio-img/luiolei.jpg",
          },
          {
            title: "Plaza Surf Sports",
            tech: "NopCommerce",
            link: "http://www.plazasurfsports.com/",
            img: "/images/services/portfolio-img/plazasurfsports.jpg",
          },
          {
            title: "Home Turph",
            tech: "NopCommerce",
            link: "https://www.hometurph.com/",
            img: "/images/services/portfolio-img/hometurph.jpg",
          },
        ],
      },
    ],
  },
]

const caseStudies = [
  {
    id: 1,
    title: "e-Commerce Store Version Upgrade",
    image: "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
    description:
      "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
    docLink: "https://www.tech2globe.com/casestudies-docs/E-commerce%20version%20upgrade.pdf",
  },
  {
    id: 2,
    title: "e-Commerce Multivendor Store",
    image: "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
    description:
      "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/E-commerce%20version%20upgrade%20(1).pdf",
  },
  {
    id: 3,
    title: "e-Commerce Multivendor Store",
    image: "/images/services/service-inner/portfolio/4.jpg",
    description:
      "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/E-commerce%20version%20upgrade%20(1).pdf",
  },
  {
    id: 4,
    title: "Migration from Sooq to Amazon.ae",
    image: "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
    description:
      "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/E-Commerce%20Store%20for%20Luxury%20Goods-converted.pdf",
  },
  {
    id: 5,
    title: "About Drop shipping",
    image: "/images/services/service-inner/about-drop-shipping.jpg",
    description:
      "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%202%20-%20Sales%20Increase%20in%20different%20categories-converted.pdf",
  },
  {
    id: 6,
    title: "Amazon Sale Boost",
    image: "/images/services/service-inner/amazon-sale-boost.jpg",
    description:
      "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/amazon-india-case-study.pdf",
  },

]

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana- Amazon Sponsored Ads USA",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: " Medi Hub- Amazon Store Creations USA",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed- Amazon Enhance Brand Content USA",
  },
];


export default function InfluencerMarketingAgency() {


  return (
    <>

      <Breadcrumb pageName="Influencer Marketing Agency" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Data Support Kpo Ai Services" imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg" />
              <div className={Style.ContentDiv}>

                <h2>Why Does AI Based KPO Need Data Support Experts?</h2>

                <p><strong>AI data support experts</strong> gather the best practices and the latest technologies to create innovative and self-automated tools to work on your client's projects. If you want to create new strategic value for your products to increase ROI and save cost, then going with <strong>AI based KPO data support experts</strong> is the right choice!</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">We Are Capable Of Providing You The Non Parallel AI Data Support For Your KPO Services</h4>
                <p>You can avail of our services to leverage several advantages, including:</p>
                <div className="card h-100 p-3 mb-3  shadow-sm">
                  <h5><FaLightbulb fontSize={32} /> Innovation Driven</h5>
                  <p className="mb-0">Our data support gives you a smart and comprehensively innovative approach to help your business meet the needs of customers.</p>
                </div>


                <div className="card h-100 p-3 mb-3 shadow-sm">
                  <h5>
                    <FaIndustry fontSize={32} /> We Cover Almost Every Industry
                  </h5>
                  <p className="mb-0">
                    We provide our complete data support for AI KPO services
                    in areas like business research, marketing research,
                    business, technical analysis, and more.
                  </p>
                </div>

                <div className="card h-100 p-3 mb-3 shadow-sm">
                  <h5>
                    <FaMedal fontSize={32} /> Data Experts Make The Final Checks
                  </h5>
                  <p className="mb-0">
                    We have a team of data support experts that ensure the
                    consistency and quality of the services provided.
                  </p>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger pt-3 pb-3">What Makes Our Data Support Services Best Among Others?</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaCheckSquare fontSize={32} /> Cost-Efficient</h5>
                      <p className="mb-0">We provide <strong>data support for AI KPO services</strong> from decades of experience with new impacts and better ways. Ultimately, these include the latest technologies that can reduce your administrative costs with improved performance. Also, our experts help you with lower staffing and training costs.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaGlobe fontSize={32} /> Improved Working In Other Domains</h5>
                      <p className="mb-0">Our services allow you sufficient time to focus on other key areas, such as data entry, billing, analysis reports, or documentation services. We carefully handle all these to meet state-of-the-art results.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaChartBar fontSize={32} /> Improved Operational Efficiency</h5>
                      <p className="mb-0">With our data support to your AI-KPO services, you can save time, achieve better result accuracy in your KPO services and increase the overall productivity of your business.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaLightbulb fontSize={32} /> Focus On Business Core</h5>
                      <p className="mb-0">We spend valuable time improving customer satisfaction and achieving high standards with our data support services.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-danger mb-3">Why Should You Switch To Tech2Globe For Data Support Experts For Your AI KPO Services?</h2>
                    <p className="mb-0"><strong>Our Motto!</strong></p>
                    <p className="mb-3">We serve to transform operations as our <strong>data support experts</strong> are capable enough to let you achieve your business goals.</p>

                    <h5 className="mb-3">How Beneficial Is It For You?</h5>

                    <p>Our <strong>data support for AI KPO services</strong> comes with modernisation & platform management which ultimately enables businesses to outperform in the market.</p>

                    <p>Our global expertise, combined with the latest knowledge from partners and hyperscalers, prepares your business for AI. We keep our services updated with automated workflows and state-of-the-art <strong>AI data support</strong> systems.</p>

                    <p>To kickstart with our new project, we mix dependable, modular, and scalable solutions with your current KPO services structure.</p>

                    <h5 className="mb-3">The Process Of Our AI Data Support For KPO Services Includes The Below Steps :</h5>

                    <p>We include expert technical knowledge while processing AI support for your KPO services:</p>

                    <ul>
                      <li>Identifying client issues</li>
                      <li>Considering and gaining knowledge from the data gathered</li>
                      <li>Providing specific and appropriate AI solutions</li>
                      <li>Offer immediate assistance</li>
                      <li>Observing the number of customers complaints and concerns.</li>
                      <li>Reporting submission post project completion</li>
                    </ul>

                    <h5 className="mb-3">Key Highlights Of Our AI Data Support For KPO Services :</h5>

                    <ul>
                      <li>Seamless Service</li>
                      <li>Industry Standards</li>
                      <li>Advanced Technology</li>
                      <li>Improved Quality</li>
                      <li>Best AI Support</li>
                      <li>Strong Technical And Professional Expertise</li>
                    </ul>

                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h3 className="text-danger">Get Connected With Us Today!</h3>
                <p>To connect with us, you can request a demo to see how our <strong>AI data support experts</strong> work for your business. We are there for our customers 24/7, making it easier for you to have a seamless experience when you perform KPO services.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>
        </div>
      </section >

      <div className="container mt-5">
        <div className="row">

          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="why-infulancer">
              <img src="images/services/service-inner/why-influancer.jpg" className="img-fluid" />

            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">

            <h2 className="main-heading influencer-portfolio-heading ">Why Should You Invest in Influencer Marketing?
            </h2>
            <p>Influencer marketing agency serves to obtain higher things to communicate to your web traffic in your
              business. It works to build relationships that help happy supporters gain brands. Because of the need for a
              platform and content, influencer marketing also integrates with social media and content marketing.</p>


            <div className="media mr-5 why-should-content-bg">
              <div className="media-left media-icon-bg">

                <svg className="svg-inline--fa fa-network-wired fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Becoming connected in the Instagram Influencer Marketing to a strong network of
                  influencers.</p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-list fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">The ability to link the list of top Instagram influencers to the correct influencers.
                </p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-magnifying-glass fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Choosing the best social media networks for your company</p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-handshake fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="far" data-icon="handshake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Expertise in the arrangement of agreements and costs</p>
              </div>
            </div>

            <div className="media why-should-content-bg">
              <div className="media-left">

                <svg className="svg-inline--fa fa-headphones-simple fa-2x text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headphones-simple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 80C141.1 80 48 173.1 48 288V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288C0 146.6 114.6 32 256 32s256 114.6 256 256V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V352zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h16z"></path></svg>

              </div>
              <div className="media-body">
                <p className="text-white">Support by organizing every part of the project to save a significant amount of time
                </p>
              </div>
            </div>



          </div>

        </div>
      </div>

      <div className="container-fluid award-sec pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 className="main-heading influencer-portfolio-heading mt-5">Our Award Winning Marketing Services</h2>
              <p className="award-text">We are an influencer marketing agency that uses a combination of offline planners and a
                unique influencer marketing platform to ensure a high performing influencer campaign for your brand. We also
                work with other influencer marketing platforms to ensure that you get the best influencers for every
                campaign. The combination of online and influencer marketing platforms allows you to harness the power of
                offline creativity and reach using the online platform.</p>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/youtube.png" />
                </div>
                <h4 className="mt-3">Youtube influencer marketing</h4>
                <p className="influencer-text">YouTube has the second largest search volume after Google, so it is indispensable
                  for influencer marketing campaigns. <strong>Youtube Influencer Marketing</strong> is suitable for
                  campaigns that require high reach influencers. An interesting aspect of managing.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/instagram.png" />
                </div>
                <h4 className="mt-3">Instagram influencer marketing</h4>
                <p className="influencer-text">With a robust, image-oriented content approach, Instagram is perfect for
                  influencer marketing for lifestyle brands. We can help you with sponsored posts that are one of the most
                  popular content formats for <strong>Instagram influencer marketing</strong>.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/memes.png" />
                </div>
                <h4 className="mt-3">Meme influencer marketing</h4>
                <p className="influencer-text">We offer a range of opportunities for influencers to establish and define their
                  presence in the marketing world and the brand’s face to make money on all endeavours. We can create
                  interesting memes, have a unique sense of humour.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-12 text-center mb-4">
              <div className="award-box h-100 shadow-sm p-4">
                <div className="our-exper-icon award-img-bg bg-transparent">
                  <img className="port-box-img img-fluid" src="images/services/service-inner/celebrity.png" />
                </div>
                <h4 className="mt-3">Celebrity marketing</h4>
                <p className="influencer-text">Are you looking for an agency that carries out advertising campaigns <strong>with
                  celebrity endorsement in india</strong>? The main objective of these advertising campaigns is to improve
                  the visibility of your product and increase conversions, that is, sales. </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="col-md-12">
          <h2 className="main-heading influencer-portfolio-heading text-center">Why Choose Tech2Globe for Influencer Marketing Agency?</h2>
          <p className="text-center mb-3">Tech2Globe is Social Media Influencer Marketing Company among the best Influencer
            Marketing Agency India because we try to establish effective local and international influencer marketing
            strategies.</p>
        </div>
        <div className="row">
          <div className="col-md-4 col-xs-12 text-center mt-4">
            <div className="why-chose-box">
              <div className="why-chose-box-icon bg-primary">
                <img src="images/services/service-inner/target-1.png" className="img-fluid" />
              </div>
              <h3 className="mt-3">Target Influencers</h3>
              <p className="card-text text-center">We also connected with the influencers of the leading niche that have the
                highest market value. Our business relationship in the influencer industry with the top names would
                undoubtedly benefit you.</p>
            </div>

          </div>
          <div className="col-md-4 col-xs-12 text-center mt-4">
            <div className="why-chose-box-icon bg-danger">
              <img src="images/services/service-inner/aproch-1-1.png" className="img-fluid" />
            </div>
            <h3 className="mt-3">Approach to Data-Driven</h3>
            <p className="card-text text-center">Data never lies, and we firmly believe that. We have a validated data-driven
              approach that, whether it is about implementing the strategy or identifying the influencers, never stops
              working.</p>
          </div>

          <div className="col-md-4 col-xs-12 text-center mt-4">
            <div className="why-chose-box-icon bg-success">
              <img src="images/services/service-inner/clarity.png" className="img-fluid" />
            </div>
            <h3 className="mt-3">100 Percent Clarity</h3>
            <p className="card-text text-center">As one of the biggest marketing companies for influencers, we can uphold
              total integrity in all our transactions. We ensure that every step we take about your campaign is held in
              sync with you.</p>
          </div>
        </div>
        <div className="col-md-12">
          <h4 className="h3 text-center mt-5 pb-2 text-muted">Connect with us and gain immense popularity</h4>
          <p className="text-center mb-4">Tech2Globe's team encourages brands to be strongly tied to target users and give the
            best products.</p>
        </div>

        <div className="col-md-12 text-center">
          <a href="/influencer-marketing-package" className="btn btn-danger rounded-pill p-3 mt-4 text-uppercase see-our-btn">See Our Packages <span className="badge badge-light"><svg className="svg-inline--fa fa-angles-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L370.7 256 233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path></svg></span></a>
        </div>

      </div>



    </>
  )
};