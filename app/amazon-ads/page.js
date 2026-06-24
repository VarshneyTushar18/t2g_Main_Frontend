import { FaAmazon, FaChartLine, FaCheck, FaCheckCircle, FaFireAlt, FaHandPointRight, FaTrophy } from "react-icons/fa";
import "./custom.css";
import Image from "next/image";
import TestimonialSlider from "../components/landingpage/TestimonialSlider";
import HeroReviewSlider from "../components/landingpage/HeroReviewSlider";
import AmazonForm from "../components/landingpage/amazonform";
import PpcTabsSection from "../components/landingpage/PpcTabsSection";
import VideoTestimonialSlider from "../components/landingpage/VideoTestimonialSlider";
import Script from "next/script";

/* Create a headtag and keywords for the page */
export const metadata = {
    title: "Amazon Ads Management Agency India | Free Audit | Tech2Globe",
    description:
      "",
  
    keywords: [
      "",
    ],
}

const testimonials = [
    {
        name: "Tom Harris",
        role: "Co-Founder of FitFusion",
        initials: "TH",
        color: "#51cf66",
        review:
            "Simple, yet game-changing strategies helped us achieve a 45% increase in our monthly Amazon sales within just 60 days.",
    },
    {
        name: "Rachel Miller",
        role: "CEO, EcoWave Essentials",
        initials: "RM",
        color: "#f59f00",
        review:
            "The detailed audit exposed all our blind spots clearly, resulting in our PPC ROAS improving significantly by an impressive 250%.",
    },
    {
        name: "Mike Johnson",
        role: "E-commerce Specialist",
        initials: "MJ",
        color: "#845ef7",
        review:
            "With their PPC services, we improved our ad performance and received insights, making us very happy with results achieved.",
    },
    {
        name: "David Wilson",
        role: "Online Retail Manager",
        initials: "DW",
        color: "#ff6b6b",
        review:
            "They do an excellent job closely monitoring our campaign performance to ensure we stay on track and optimize everything fully.",
    },
    {
        name: "Mackenzie Thomas",
        role: "Marketing Manager",
        initials: "MT",
        color: "#4dabf7",
        review:
            "Their PPC services boosted our online sales significantly, providing clear reports and excellent results through their skilled team.",
    },
];

const clientLogos = [
    { src: "/images/landingpage/clients/abrams.png", alt: "Abrams" },
    { src: "/images/landingpage/clients/aniise.png", alt: "Aniise" },
    { src: "/images/landingpage/clients/ankit-toys-games.png", alt: "Ankit Toys Games" },
    { src: "/images/landingpage/clients/arar.png", alt: "Arar" },
    { src: "/images/landingpage/clients/bluebird.png", alt: "Bluebird" },
    { src: "/images/landingpage/clients/frontier.png", alt: "Frontier" },
    { src: "/images/landingpage/clients/in-season-jewelry.png", alt: "In Season Jewelry" },
    { src: "/images/landingpage/clients/liberty-house-toys.png", alt: "Liberty House Toys" },
    { src: "/images/landingpage/clients/lifetree.png", alt: "Lifetree" },
    { src: "/images/landingpage/clients/ms-glamour.png", alt: "MS Glamour" },
    { src: "/images/landingpage/clients/swiss-arabian.png", alt: "Swiss Arabian" },
    { src: "/images/landingpage/clients/the-good-pea.png", alt: "The Good Pea" },
    { src: "/images/landingpage/clients/ugreen.png", alt: "Ugreen" },
    { src: "/images/landingpage/clients/vanshveda.png", alt: "Vanshveda" },
    { src: "/images/landingpage/clients/wooden-street.png", alt: "Wooden Street" },
];

const faqData = [
    {
        id: "faq1",
        question: "How long does the PPC audit take?",
        answer: "Usually within 24 hours.",
    },
    {
        id: "faq2",
        question: "Do you work with small sellers?",
        answer: "Yes, we support brands at every stage.",
    },
    {
        id: "faq3",
        question: "Do you manage Amazon DSP?",
        answer: "Yes, we offer full-service DSP campaign management.",
    },
];

export default function AmazonAds() {

    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-353956860"
                strategy="afterInteractive"
            />

            <Script id="google-ads-contact" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-353956860');
        `}
            </Script>

            <header className="d2c_navbar sticky-top">
                <div className="container">

                    <nav className="navbar navbar-expand-lg px-0 py-0" id="d2c_main_nav">

                        <a className="navbar-brand"><Image src="/images/landingpage/logo.png" width={180} height={53} className="img-fluid" alt="Logo" priority /></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse js-clone-nav justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service">service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#whychooseus">Why Choose Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#casestudies">Case Studies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonial">testimonial</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="btn d-block d-lg-none">Get Free PPC Audit</a>
                                </li>
                            </ul>
                        </div>

                    </nav>

                    <div className="collapse navbar-collapse d2c_mobile_view" id="navbarSupportedContent">
                        <div className="show_width container">
                            <div className="text-right">
                                <button className="navbar-toggler d2c_cross_btn p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span><i className="fa fa-times"></i></span>
                                </button>
                            </div>

                            <div className="navbar px-0 d2c_mobile_view_body"><div className="navbar-nav ml-auto">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#home">home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">about</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#service">service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#whychooseus">Why Choose Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#casestudies">Case Studies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#testimonial">testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#contact" className="btn d-block d-lg-none">Get Free PPC Audit</a>
                                    </li>
                                </ul>
                            </div></div>
                        </div>
                    </div>

                </div>
            </header>

            <div className="d2c_hero_bg">


                <section className="d2c_hero_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 pe-5">
                                <h1>Free <span>Amazon Account Growth Audit</span> - Discover Hidden Revenue in 24 Hours</h1>
                                <p>Get a professional Amazon seller account analysis from certified experts and uncover</p>
                                <div className="d2c_form_points">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li><FaCheck size={25} /> Revenue leaks</li>
                                                <li><FaCheck size={25} /> Keyword ranking opportunities</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li><FaCheck size={25} /> PPC optimization gaps</li>
                                                <li><FaCheck size={25} /> Competitor strategies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <HeroReviewSlider />
                                <div className="highlight-points">
                                    <ul>
                                        <li><small>⭐</small> Trusted by <span>2000+</span> Amazon Brands </li>
                                        <li><small>💰</small> Managed <span>$1B+</span> Amazon Revenue</li>
                                        <li><small>📈</small> Average <span>63%</span> Sales Growth in 90 Days</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="formblock" id="home">
                                    <h2 className="d2c_title position-relative mb-3">Get Your Free <span> Amazon Growth</span> Audit</h2>

                                    <AmazonForm />

                                    <hr />
                                    <div className="d2c_form_points">
                                        <ul>
                                            <li> <FaCheck size={25} /> Competitor Revenue Analysis</li>
                                            <li> <FaCheck size={25} /> Top Keywords Driving Sales</li>
                                            <li> <FaCheck size={25} /> Listing Optimization Guide</li>
                                            <li> <FaCheck size={25} /> Amazon PPC Audit</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <PpcTabsSection />

            <section className="d2c_testimonial_wrapper" id="testimonial">
                <div className="container">
                    <h3 className="d2c_sub_title text_start text-md-center position-relative">Our <span>Testimonial</span>
                    </h3>
                    <h2 className="d2c_title text_start text-md-center position-relative">Proven Results for Amazon Sellers
                        Like You<span></span></h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3">
                            <div className="row justify-content-center">

                                <VideoTestimonialSlider />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <TestimonialSlider testimonials={testimonials} />
                        </div>

                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12 pt-5">
                            <div className="clients_wrapper" style={{ position: "relative" }}>
                                <div className="clients_wrapper_header">
                                    <h2 className="d2c_title text_start text-md-center position-relative">Swim with the big fish
                                    </h2>
                                </div>

                                <div className="clients_wrapper_body">
                                    <ul>
                                        {clientLogos.map((logo) => (
                                            <li key={logo.alt}>
                                                <Image src={logo.src} width={300} height={150} alt={logo.alt} className="img-fluid" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="d2c_blog_bg_wrapper">
                <section className="d2c_blog_wrapper" id="casestudies">
                    <div className="container">
                        <h3 className="d2c_sub_title text_start text-md-center position-relative">Case <span>Studies</span></h3>
                        <h2 className="d2c_title text_start text-md-center position-relative">Real Client <span>Results</span>
                        </h2>
                        <p className="text_start text-md-center mb-4">See how we've skyrocketed revenue for our clients on Amazon.
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <div className="d2c_card_wrapper d2c_blog_card mb-4">
                                    <Image src="/images/landingpage/amazon-map-pricing-surveillance.webp" width={1438} height={718} className="img-fluid w-100" alt="Case Study" />
                                    <div className="d2c_card_body">

                                        <h4 className=" text-white text-center">How We Increased Sales by 51% While Reducing ACOS by 63% </h4>


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d2c_card_wrapper d2c_blog_card mb-4">
                                    <a href="/images/landingpage/case-study-2.webp">
                                        <Image src="/images/landingpage/case-study-2.webp" width={1438} height={718} className="img-fluid w-100" alt="Case Study" />
                                    </a>
                                    <div className="d2c_card_body">

                                        <h4 className=" text-white text-center">Driving 56% Sales Growth While Reducing ACOS by 41% with Optimized Amazon PPC </h4>


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d2c_card_wrapper d2c_blog_card ">
                                    <a href="/images/landingpage/case-study-3.webp">
                                        <Image src="/images/landingpage/case-study-3.webp" width={1438} height={718} className="img-fluid w-100" alt="Case Study" />
                                    </a>
                                    <div className="d2c_card_body">

                                        <h4 className=" text-white text-center">How Tech2Globe Drove 300%+ Sales Growth While Reducing ACoS by 14.38% </h4>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div className="d2c_shade_bg_wrapper">
                <section className="d2c_service_wrapper oldservice" id="service">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h3 className="d2c_sub_title position-relative">Our <span>Services</span></h3>
                                <h2 className="d2c_title position-relative">Dominate <span>Amazon</span> with Full-Service
                                    Management
                                </h2>
                                <p className="text-white pb-5">Maximize your Amazon sales with our expert PPC, SEO &amp; Amazon DSP
                                    services.</p>
                            </div>
                        </div>
                        <div className="row align-items-center">

                            <div className="col-xl-6 mb-4 mb-xl-0">
                                <div className="row">
                                    <div className="col-md-10">
                                        <ul>
                                            <li><FaHandPointRight /> Amazon PPC &amp; DSP</li>
                                            <li><FaHandPointRight /> Amazon SEO</li>
                                            <li><FaHandPointRight /> AI-powered Market Insights</li>
                                            <li><FaHandPointRight /> Competitor Targeting Strategies</li>
                                            <li><FaHandPointRight /> Advanced Amazon Advertising</li>
                                            <li><FaHandPointRight /> Inventory &amp; Demand Planning</li>
                                            <li><FaHandPointRight /> U.S.-based Experts</li>

                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xl-6">

                                <Image src="/images/landingpage/amazon-dsp-image.webp" width={2560} height={1625} alt="AmazonDSP" className="img-fluid rounded-3 bwlight" />

                            </div>

                        </div>

                        <div className="cta_section text-center">
                            <h3 className="text-center pb-3">Speak with our Amazon experts and unlock new levels of growth!</h3>
                            <div className="btn-block-cta">
                                <a href="#home" className="btn">
                                    🔥 Get Your Free Amazon Growth Audit
                                </a>
                            </div>
                            <div className="cmt text-center">
                                <Image src="/images/landingpage/Stars.webp" width={1157} height={217} alt="Stars" className="img-fluid" />
                                <p>Trusted by <strong>2000+ Amazon Sellers</strong></p>
                            </div>
                        </div>


                    </div>
                </section>


                <section className="d2c_feature_wrapper">
                    <div className="container">
                        <div className="row">
                            <h2 className="d2c_title position-relative text-center">How Our <span>Amazon Growth</span> Process
                                Works</h2>


                            <div className="timeline pt-4">
                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Free<br /> PPC Audit</h3>
                                        <p>Get a detailed audit revealing key Amazon PPC improvement areas.</p>
                                    </div>
                                </div>


                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Keyword &amp; Competitor Analysis</h3>
                                        <p>Identify profitable keywords and analyze competitors strategies</p>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Campaign<br /> Optimization</h3>
                                        <p>Launch &amp; optimize campaigns for maximum ROI.</p>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">4</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Scale<br /> Profitably</h3>
                                        <p>Increase sales and profitability through continuous optimization.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="d2c_team_bg_wrapper">

                <section className="d2c_team_wrapper whychooseus" id="whychooseus">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="d2c_title  position-relative">Why Choose <span>Tech2Globe</span>
                                </h2>
                            </div>
                            <div className="col-md-6">
                                <p className="text-center desc-title mb-3">We're the trusted Amazon growth partner that delivers
                                    exceptional results.</p>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="d2c_card_wrapper text-center mb-3">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d2c_icon_wrapper">
                                            <FaTrophy size={32} className="text-white" />
                                        </div>
                                        <div className="d2c_detail">
                                            <h3>Proven Track Record</h3>
                                            <p>Over <span>$1 Billion</span> in sales driven for our clients</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d2c_card_wrapper text-center mb-3">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d2c_icon_wrapper">
                                            <FaAmazon size={32} className="text-white" />
                                        </div>
                                        <div className="d2c_detail">
                                            <h3>Amazon Experts</h3>
                                            <p><span>12+ Years</span> of maximizing Amazon success</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d2c_card_wrapper d2c_service_card text-center position-relative">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d2c_icon_wrapper">
                                            <FaChartLine size={32} className="text-white" />
                                        </div>
                                        <div className="d2c_detail">
                                            <h3>Full-Spectrum Strategies</h3>
                                            <p>Customized solutions for <span>PPC, SEO &amp; growth</span> </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="row justify-content-center featured-on">
                                    <div className="col-md-4 text-center">
                                        <Image src="/images/landingpage/g2.webp" width={300} height={320} alt="G2" className="img-fluid p-3 width80" />
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <Image src="/images/landingpage/clutch_2024.webp" width={300} height={320} alt="Clutch" className="img-fluid p-3 width80" />
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <Image src="/images/landingpage/trustpilot.webp" width={300} height={320} alt="Trustpilot" className="img-fluid p-3 width80" />
                                    </div>

                                    <div className="col-md-4">
                                        <div className="award-block text-center">
                                            <Image src="/images/landingpage/advanced-partner.webp" width={131} height={109} alt="advanced-partner" className="img-fluid" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="award-block text-center">
                                            <Image src="/images/landingpage/verified-partner.webp" width={133} height={109} alt="verified-partner" className="img-fluid" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="award-block text-center">
                                            <Image src="/images/landingpage/spn-verified-partner.webp" width={133} height={109} alt="spn-verified-partner" className="img-fluid" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <section className="compare-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-6 offset-0 offset-lg-3 px-2 px-md-5">
                                    <h3 className="d2c_sub_title text-start text-md-center position-relative">Why Tech2Globe <span>Wins</span>
                                    </h3>
                                    <h2 className="d2c_title text-start text-md-center position-relative">Superior Strategies <span>Proven Results</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="compare-wrapper">

                                <div className="compare-row">
                                    <div className="compare-left">Competitor <i className="fas fa-times-circle"></i></div>
                                    <div className="compare-right">
                                        <Image src="/images/landingpage/logo-t2g.png" width={180} height={53} alt="tech2globe" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">One-size-fits-all strategies</div>
                                    <div className="compare-right">
                                        <strong>Dedicated Amazon Specialists</strong>
                                        <span>Work with experts focused solely on Amazon growth, including PPC, SEO, and
                                            DSP.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">Limited expertise</div>
                                    <div className="compare-right">
                                        <strong>Data-Driven Strategy</strong>
                                        <span>Campaigns are optimized using performance data, keyword insights, and
                                            competitor analysis.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">Offshore support teams</div>
                                    <div className="compare-right">
                                        <strong>No Outsourcing</strong>
                                        <span>Your account is handled by in-house Amazon experts for quality and
                                            consistency.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">Slow, reactive scaling</div>
                                    <div className="compare-right">
                                        <strong>Transparent Reporting</strong>
                                        <span>Get clear reports and insights on performance and budget usage.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">No proven results</div>
                                    <div className="compare-right">
                                        <strong>Proven Results With Global Brands</strong>
                                        <span>Helping 2000+ Amazon sellers scale revenue with optimized PPC
                                            strategies.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta_section text-center">
                                <h3 className="text-center pb-3">Grow Your <span>Amazon Business</span> With Proven Strategies
                                    That Deliver Results</h3>
                                <div className="btn-block-cta">
                                    <a href="#home" className="btn">
                                        🔥 Get Your Free Amazon Growth Audit
                                    </a>
                                </div>
                                <div className="cmt text-center">
                                    <Image src="/images/landingpage/Stars.webp" width={1157} height={217} alt="Stars" className="img-fluid" />
                                    <p>Trusted by <strong>2000+ Amazon Sellers</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="d2c_about_wrapper" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="d2c_img_container position-relative me-0 me-lg-5">
                                <div className="d2c_img_wrapper">
                                    <Image src="/images/landingpage/about_one.jpg" width={392} height={441} className="img-fluid w-100 rounded-3" alt="About Upper Image" />
                                </div>
                                <div className="d2c_img_wrapper">
                                    <Image src="/images/landingpage/about_two.jpg" width={371} height={419} className="img-fluid w-100 rounded-3" alt="About Down Image" />
                                </div>
                                <Image src="/images/landingpage/about_shade.png" width={582} height={513} alt="About Background Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="d2c_sub_title position-relative">About <span>Tech2Globe</span></h3>
                            <h2 className="d2c_title position-relative">Leaders in Amazon Growth &amp; Global <span>E-Commerce
                                Solutions</span> </h2>
                            <p className="mb-3">Tech2Globe is a leading Amazon managed services agency. For over a decade, we've
                                helped 2000+ Amazon brands skyrocket their sales and profitability. We combine innovative
                                growth strategies with transparent communication &amp; data-driven insights to deliver
                                exceptional results.</p>
                            <ul>
                                <li><FaHandPointRight /> 2000+ Satisfied Clients Worldwide</li>
                                <li><FaHandPointRight /> 12+ Years of Experience</li>
                                <li><FaHandPointRight /> $250M+ Amazon Sales Managed</li>
                            </ul>
                            <a href="#home" className="btn">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="d2c_service_wrapper newservice">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 mb-4 mb-xl-0">
                            <div className="text-center">
                                <h2 className="d2c_title position-relative">Get Your Free Amazon Store <span>PPC Health
                                    Check</span>
                                </h2>
                                <p>Avoid costly mistakes and uncover waye to increase sales &amp; profit.</p>
                            </div>
                        </div>

                        <div className="col-xl-5 mb-4 mb-xl-0">
                            <div className="row">
                                <div className="col-md-10">
                                    <ul>
                                        <li className="mb-3"><FaHandPointRight />  Ad Optimization
                                            Opportunities</li>
                                        <li className="mb-3"><FaHandPointRight /> Keyword Targeting
                                            Enhancements</li>
                                        <li className="mb-3"><FaHandPointRight /> Custom PPC Growth Strategy
                                        </li>
                                        <li><FaHandPointRight /> Competitor PPC Insights</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <Image src="/images/landingpage/ppc-health-image.webp" width={2560} height={1625} alt="PPC Health Check" className="img-fluid bwlight" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta_section pt-5 text-center">
                                <div className="btn-block-cta">
                                    <a href="#home" className="btn">
                                        🔥 Get My Free Amazon PPC Audit
                                    </a>
                                </div>
                                <div className="cmt text-center">
                                    <small>No spam. No: obligation. Just insights to grow Amazon sales</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                            <h2 className="text-center faq-title">
                                Frequently Asked Questions
                            </h2>

                            <div className="accordion" id="faqAccordion">
                                {faqData.map((item, index) => (
                                    <div className="accordion-item" key={item.id}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${index !== 0 ? "collapsed" : ""
                                                    }`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${item.id}`}
                                                aria-expanded={index === 0}
                                                aria-controls={item.id}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>

                                        <div
                                            id={item.id}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                                                }`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">{item.answer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="d2c_footer_wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-8 mb-5 mb-lg-0 text-center">
                            <Image src="/images/landingpage/footer_logo.png" width={300} height={89} className="d2c_footer_logo img-fluid mb-4"
                                alt="Footer Logo" />
                            <p>Tech2Globe Web Solutions is a renowned solution-provider that was established in 2014 with
                                superior quality of our services, we have managed to carve out a coveted position for
                                ourselves in this fiercely competitive sector.</p>
                            <div className="award_wrapper d-flex justify-content-center gap-2">
                                <div className="award-block">
                                    <Image src="/images/landingpage/advanced-partner.webp" width={131} height={109} alt="advanced-partner" className="img-fluid" />
                                </div>
                                <div className="award-block">
                                    <Image src="/images/landingpage/verified-partner.webp" width={133} height={109} alt="verified-partner" className="img-fluid" />
                                </div>
                                <div className="award-block">
                                    <Image src="/images/landingpage/spn-verified-partner.webp" width={133} height={109} alt="spn-verified-partner"
                                        className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d2c_copy_wrapper">
                        <h4 className="text-center">© 2026 Tech2Globe | All Right Reserved</h4>
                    </div>

                </div>

            </footer>

            <div className="sticky_button">
                <a href="#home" className="btn">
                    🔥 Get Free PPC Audit
                </a>
                <div className="cmt text-center">
                    <Image src="/images/landingpage/Stars.webp" width={1157} height={217} alt="Stars" className="img-fluid" />
                    <p>Trusted by <strong>2000+ Amazon Sellers</strong></p>
                </div>
            </div>

            <div className="whatsapp-icon-wrapper">
                <a href="https://wa.me/919899675039?text=Hi, I want a free Amazon audit for my store." target="_blank">
                    <Image src="/images/landingpage/whatsapp-icon.png" width={40} height={40} alt="Whatsapp" className="img-fluid whatsapp-icon" />
                </a>
            </div>
        </>
    )
}