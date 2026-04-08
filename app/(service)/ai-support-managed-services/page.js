import Style from "./style.module.css";
import Image from "next/image";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "./custom.css";
import FaqSection from "@/app/components/ai-pages/faqs/faqsection";
import CTASection from "@/app/components/ai-pages/cta/CTASection";
import {
  FaChartLine, FaClipboardList, FaCloudUploadAlt, FaComment, FaHeadset, FaProjectDiagram, FaRobot, FaBrain,
  FaUserCheck,
  FaCoins,
  FaTrophy,
  FaRocket,
  FaCog,
  FaFileContract,
  FaUsersCog,
  FaCode,
  FaVial,
  FaSyncAlt,
} from "react-icons/fa";
import ServiceSlider from "@/app/components/ai-pages/ServiceSlider/ServiceSlider";
import IndustryApplication from "@/app/components/ai-pages/IndustryApplication/IndustryApplication";
import FutureSlider from "@/app/components/ai-pages/FutureSlider/FutureSlider";



export const metadata = {
  title: "",
  description:
    "",
  keywords: "",

  openGraph: {
    title: "",
    description:
      "",
    url: "",
    siteName: "Tech2Globe",
  },

  twitter: {
    card: "summary_large_image",
    title: "",
    description:
      "",
  },

  alternates: {
    canonical: "",
  },
};



const futureData = [
  {
    title: "Dedicated Project Management",
    desc: "A dedicated project manager will oversee AI system support, ensuring all tasks are completed on time and in alignment with your business goals.",
  },
  {
    title: "Transparent Support Process",
    desc: "We provide regular updates on system performance, monitoring results, and areas for improvement, keeping you informed and aligned with your objectives.",
  },
  {
    title: "Agile Methodology",
    desc: "Our agile approach ensures that we can quickly adapt to new requirements, provide updates, and handle evolving business needs with ease.",
  },
  {
    title: "24/7 Support",
    desc: "Our team is available round the clock to provide support, troubleshoot issues, and ensure your AI systems remain fully operational.",
  },
  {
    title: "Cross-Functional Teams",
    desc: "We offer a diverse team of AI professionals, from system integrators to data security experts, ensuring that every aspect of your AI system is well-managed and optimized.",
  },
];

const services = [

  {
    title: "System Monitoring & Performance Optimization",
    desc: "<strong>Continuous Monitoring:</strong> Our team ensures that your AI systems are always operational, monitoring for performance issues or system failures and ensuring a smooth operation.<br/> <strong>Optimization:</strong> We conduct regular performance evaluations to identify areas for improvement, ensuring that AI systems run at peak performance, enhancing productivity and reducing downtime.",
    points: [
      "Supervised and unsupervised learning models",
      "Predictive analytics and forecasting",
      "Data mining and clustering",
      "Custom recommendation systems",
    ],
  },
  {
    title: "Machine Learning Development",
    desc: "We build custom machine learning models that enable businesses to make smarter, data driven decisions. Whether you need predictive analytics, recommendation systems, or anomaly detection models, we’ll tailor the right machine learning algorithms to meet your needs.",
    points: [
      "Supervised and unsupervised learning models",
      "Predictive analytics and forecasting",
      "Data mining and clustering",
      "Custom recommendation systems",
    ],
  },
  {
    title: "Natural Language Processing (NLP)",
    desc: "Natural Language Processing (NLP) allows computers to understand, interpret, and respond to human language. We develop custom NLP solutions that help businesses improve customer service, automate content generation, and gain insights from unstructured text data.",
    points: [
      "Sentiment analysis",
      "Chatbots and virtual assistants",
      "Text classification and summarization",
      "Language translation models",
    ],
  },
  {
    title: "AI Powered Automation",
    desc: "We help businesses integrate AI into their workflows to automate routine tasks, optimize operations, and enhance productivity. Custom AI powered automation solutions can help you reduce manual intervention and increase efficiency.",
    points: [
      "Workflow automation",
      "Robotic Process Automation (RPA)",
      "Intelligent process automation (IPA)",
      "Real-time decision making automation",
    ],
  },
  {
    title: "Computer Vision Development",
    desc: "Computer vision enables machines to interpret and understand visual data from the world. We develop custom computer vision applications for industries such as manufacturing, healthcare, and retail, helping businesses automate processes and enhance visual data analysis.",
    points: [
      "Object recognition and tracking",
      "Image classification and segmentation",
      "Video analytics",
      "Facial recognition and biometric systems",
    ],
  },
  {
    title: "Custom AI Integration & Implementation",
    desc: "We ensure seamless integration of AI solutions into your existing systems, applications, and workflows. Our team works with your infrastructure to ensure that AI tools are fully integrated and functional, offering support throughout the entire implementation process.",
    points: [
      "Integration with existing platforms (CRM, ERP, etc.)",
      "Cloud-based AI infrastructure setup",
      "API development for AI services",
      "End-to-end solution implementation",
    ],
  },
  {
    title: "AI Maintenance & Support",
    desc: "AI systems require ongoing monitoring, optimization, and maintenance to ensure peak performance. Our team provides continuous support for the AI solutions we develop, offering regular updates, model retraining, and troubleshooting to ensure your AI tools evolve with your business needs.",
    points: [
      "Model retraining and optimization",
      "Ongoing performance monitoring",
      "Support for scaling and system upgrades",
      "Troubleshooting and bug fixing",
    ],
  },
];

const industryData = [
  {
    left: {
      title: "Healthcare",
      desc: "Improve patient data management, diagnostic accuracy, and predictive healthcare analytics.",
    },
    right: {
      title: "Retail & E-commerce",
      desc: "Enhance personalization, demand forecasting, pricing optimization, and inventory planning.",
    },
  },
  {
    left: {
      title: "Finance",
      desc: "Strengthen fraud detection systems, automate compliance processes, and improve forecasting accuracy.",
    },
    right: {
      title: "Education",
      desc: "Enable adaptive learning models, personalized content delivery, and performance analysis tools.",
    },
  },
  {
    left: {
      title: "Manufacturing",
      desc: "Optimize supply chain processes, implement predictive maintenance systems, and improve production efficiency.",
    },
    right: {
      title: "Logistics",
      desc: "Improve route optimization, shipment tracking, and operational forecasting.",
    },
  },
];


const ctaData = [
  {
    title: "Contact Us to Hire AI Developers for Support & Managed Services",
    description: [
      "Hiring expert AI developers ensures your systems are continuously monitored, optimized, and supported for maximum performance. With our AI support and managed services, your business can operate smoothly, maintain security, and achieve long-term success."
    ],
    buttonText: "Get in Touch",
    buttonLink: "/contact-us"
  }
];

const faqData = [
  {
    question: "What benefits can AI support & managed services bring to businesses?",
    answer:
      "AI support and managed services ensure your AI systems are always optimized, secure, and functional, providing continuous performance improvement, proactive troubleshooting, and scalability for business growth.",
  },
  {
    question: "How do you provide ongoing AI system support?",
    answer:
      "We provide continuous monitoring, real-time troubleshooting, system updates, and proactive optimization to ensure your AI solutions run smoothly and meet business goals.",
  },
  {
    question: "What industries benefit the most from AI support & managed services?",
    answer:
      "Industries such as ecommerce, healthcare, finance, and manufacturing benefit the most, as they require constant system monitoring, updates, and optimization to maintain efficient operations.",
  },
  {
    question: "How does AI support help with system downtime?",
    answer:
      "Our AI support team monitors systems 24/7, quickly identifying and resolving issues to minimize downtime and ensure your AI systems are always up and running.",
  },
  {
    question: "Can you integrate AI support with existing systems?",
    answer:
      "Yes, our AI support services are designed to seamlessly integrate with your existing business systems, ensuring smooth communication and minimal disruption.",
  },
  {
    question: "What type of post-launch support do you provide?",
    answer:
      "We offer ongoing maintenance, system updates, performance optimization, and troubleshooting to ensure your AI systems remain efficient and effective long after launch.",
  },
];

export default function AiSupportManagedServices() {
  return (

    <>
      <Breadcrumb parentName="Services" pageName="Ai Support Managed Services" />
      <BrandSection />
      <div className="container">

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 page-content">
            <div className="cardblock">
              <h2>Empower Your Business with AI Support & Managed Services</h2>
              <h5 className="fw-normal mb-3">Unlock Seamless AI Management and Support for Your Business</h5>
              <p>Hire expert AI developers and leverage our AI support and managed services to ensure your systems are always performing at their best. Our AI managed services are designed to provide businesses with ongoing support, system monitoring, and optimization, ensuring smooth and effective AI system operations. With our support, you can focus on growth while we handle the complexities of managing and maintaining your AI solutions.</p>
              <p>We provide tailored solutions that cater to your specific needs, offering proactive support and troubleshooting to keep your AI systems running smoothly. Let us handle your AI needs so you can focus on scaling your business with confidence.</p>
              <p>Enhance operational efficiency with Tech2Globe Workflow Automation solutions designed to eliminate repetitive manual tasks and streamline complex business processes. Our automation frameworks help organizations create structured, efficient workflows that improve productivity, reduce delays, and ensure consistent task execution across departments.</p>
              <p>Tech2Globe empowers businesses to replace fragmented processes with automated workflows that manage tasks, approvals, data movement, and operational sequences efficiently. By minimizing manual involvement, organizations can improve execution speed while maintaining process accuracy.</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 page-content">
            <div className="cardimage">
              <img src="/images/custom-ai-image.webp" className="img-fluid" alt="Custom AI Development Services" />
            </div>
            <div className="cta-btn">
              <h5 className="fw-normal mb-4">Talk To Our Experts Now!</h5>
              <a href="/contact-us" className="btn btn-danger">Get in Touch With Us</a>
            </div>
          </div>
        </div>



        <div className="row pt-5 whychoosesection">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 page-content">
            <h2>Why Businesses Should Hire AI Support & Managed Services</h2>
            <p>AI support and managed services offer businesses long-term stability and efficiency by ensuring their AI systems are maintained, optimized, and secure. Here’s why it’s crucial to hire professional AI developers for support and managed services:</p>
          </div>


          <div className="row pt-3 pb-3">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3" >
              <div className="whychoosebox h-100 mb-3">
                <h5 className="fw-medium mb-3">Expert AI Developers for Continuous Support</h5>
                <p>Our skilled AI developers provide ongoing support to monitor and maintain your AI systems, offering expert troubleshooting, updates, and system enhancements to ensure peak performance at all times.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Maximized ROI with Continuous Optimization</h5>
                <p>With AI support and managed services, your business gains the most value from your AI systems by ensuring they operate efficiently, effectively, and with minimal downtime, leading to better returns on investment.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Scalability for Growing Businesses</h5>
                <p>As your business grows, your AI solutions need to scale. Our support services ensure your systems adapt to increasing data, users, and evolving business needs, providing the flexibility and scalability required for continued success.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Improved Security & Compliance</h5>
                <p>With our comprehensive security measures and compliance management, your AI systems are safeguarded against cyber threats, and your data is protected in accordance with industry regulations, reducing the risk of data breaches and non-compliance penalties.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Reduced Operational Risks</h5>
                <p>Our proactive approach to AI system monitoring and issue resolution minimizes the risk of unexpected system failures, ensuring your operations run smoothly without costly disruptions.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 p-0">
                <img src="/images/whychoose-image.webp" className="img-fluid" alt="Why Choose Custom AI Development" />
              </div>
            </div>
          </div>
        </div>


        <div className="row pt-5">
          <div className="col-md-12">
            <h2>What Does Hiring AI Support & Managed Services Entail?</h2>
            <h5 className="fw-normal mb-3">Comprehensive AI Support for Your Business Needs</h5>
            <p>When you hire AI developers for managed services and support, you ensure that your AI systems are fully optimized, monitored, and maintained over time. Our services include proactive monitoring, troubleshooting, system updates, and more, all designed to ensure your AI solutions continue to meet your business objectives. Here’s what expert AI developers bring to your organization:</p>
          </div>
        </div>
        <ServiceSlider services={services} />


        <div class="row pt-5 whychoosesection">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 page-content">
                <h2>Why Businesses Should Hire AI Support & Managed Services</h2>
                    <p>AI support and managed services offer businesses long-term stability and efficiency by ensuring their AI systems are maintained, optimized, and secure. Here’s why it’s crucial to hire professional AI developers for support and managed services:</p>
            </div>
        

            <div class="row pt-3 pb-3">
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3" >
                    <div class="whychoosebox h-100 mb-3">
                        <h5 class="fw-medium mb-3">Expert AI Developers for Continuous Support</h5>
                        <p>Our skilled AI developers provide ongoing support to monitor and maintain your AI systems, offering expert troubleshooting, updates, and system enhancements to ensure peak performance at all times.</p>
                    </div>
                </div> 
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                    <div class="whychoosebox h-100 ">
                        <h5 class="fw-medium mb-3">Maximized ROI with Continuous Optimization</h5>
                        <p>With AI support and managed services, your business gains the most value from your AI systems by ensuring they operate efficiently, effectively, and with minimal downtime, leading to better returns on investment.</p>
                    </div>
                </div> 
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                    <div class="whychoosebox h-100 ">
                        <h5 class="fw-medium mb-3">Scalability for Growing Businesses</h5>
                        <p>As your business grows, your AI solutions need to scale. Our support services ensure your systems adapt to increasing data, users, and evolving business needs, providing the flexibility and scalability required for continued success.</p>
                    </div>
                </div> 
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                    <div class="whychoosebox h-100 ">
                        <h5 class="fw-medium mb-3">Improved Security & Compliance</h5>
                        <p>With our comprehensive security measures and compliance management, your AI systems are safeguarded against cyber threats, and your data is protected in accordance with industry regulations, reducing the risk of data breaches and non-compliance penalties.</p>
                    </div>
                </div> 
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                    <div class="whychoosebox h-100 ">
                        <h5 class="fw-medium mb-3">Reduced Operational Risks</h5>
                        <p>Our proactive approach to AI system monitoring and issue resolution minimizes the risk of unexpected system failures, ensuring your operations run smoothly without costly disruptions.</p>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                    <div class="whychoosebox h-100 p-0">
                        <img src="/images/whychoose-image.webp" class="img-fluid" alt="Why Choose Custom AI Development"/>
                    </div>
                </div>
            </div>
        </div> 


        <div class="row pt-5 pb-5 whychoosedev">
          <div class="col-md-12">
            <h2 >Machine Learning: Ensuring Continuous Improvement in AI Solutions</h2>
            <h5 class="fw-normal mb-3">Harness Data for Smarter Business Decisions</h5>
            <p>AI developers incorporate machine learning algorithms into your systems to continually improve performance over time. Key features of our support services include:</p>
          </div>
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="bordered-card-wrapper">
                <div class="custom-card">
                  <h5>Real-Time Data Processing</h5>
                  <p>Machine learning allows your AI systems to process data in real-time, learning from new data to continually improve predictions, recommendations, and decision-making capabilities.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="bordered-card-wrapper">
                <div class="custom-card">
                  <h5>Automated Feedback Loops</h5>
                  <p>Our AI support systems automatically analyze feedback and performance metrics, optimizing the AI’s processes and increasing efficiency across your business.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="bordered-card-wrapper">
                <div class="custom-card">
                  <h5>Predictive Analytics for Proactive Management</h5>
                  <p>AI systems equipped with predictive analytics can foresee issues and opportunities, allowing businesses to take proactive measures and reduce downtime or inefficiencies in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row g-4">

          <div class="col-md-12">
            <div class="p-4 shadow-sm rounded bg-light h-100">
              <h5 class="fw-bold">Elevate Your Business with AI Support & Managed Services Expertise</h5>
              <p class="mb-0">Hire expert AI developers and gain access to premium support and managed services that ensure your AI systems are always up to date, secure, and optimized. With continuous monitoring, performance enhancements, and proactive support, we help your business stay ahead of the competition and maintain operational excellence.</p>
            </div>
          </div>

        </div>


        <div class="row pt-5 pb-5 invest-section">
          <div class="col-md-12">
            <h2>How NLP Enhances Communication and Support in AI Systems</h2>
            <h5 class="fw-normal mb-3">Streamlining Customer and System Communication with NLP Solutions</h5>
            <p class="mb-4">Natural Language Processing (NLP) enhances AI support systems by allowing them to understand and interact with human language. Here’s how NLP adds value to AI support:</p>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6 mb-2">
                <div class="white-dashed-box h-100 mb-2">
                  <h3><i class="fa-solid fa-headset me-2"></i> Automated Customer Support</h3>
                  <p class="mb-0">NLP-powered chatbots provide real-time support for customer inquiries, offering instant responses to frequently asked questions and assisting with problem resolution.</p>
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <div class="white-dashed-box h-100 mb-2">
                  <h3><i class="fa-solid fa-face-smile me-2"></i> Sentiment Analysis for Support Enhancement</h3>
                  <p class="mb-2">NLP helps analyze customer interactions and feedback across various platforms, enabling businesses to gain insights into customer sentiment and improve customer support strategies accordingly.</p>
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <div class="white-dashed-box h-100 mb-2">
                  <h3><i class="fa-solid fa-ticket me-2"></i> Automated Ticketing Systems</h3>
                  <p class="mb-2">NLP automates the ticketing process, categorizing and prioritizing customer issues, which helps reduce resolution time and improves efficiency in support operations.</p>
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <div class="white-dashed-box h-100 mb-2">
                  <h3><i class="fa-solid fa-file-lines me-2"></i> Documentation and Reporting Automation</h3>
                  <p class="mb-2">NLP automates the creation of reports and documentation, providing a seamless experience for customers and internal teams by instantly summarizing information from customer interactions and system performance.</p>
                </div>
              </div>

            </div>

          </div>
        </div>


        <div class="row pt-5 pb-5 bg-integration">
          <div class="col-md-6">
            <div class="block-fixed">
              <h2 class="text-white">Integrating AI Support & Managed Services Seamlessly with Your Business</h2>
              <h4 class="text-white fw-normal mb-5">Ensure Seamless Integration of AI Support Solutions</h4>
              <img src="images/Seamless-Integration.jpg" class="img-fluid integrationImg" alt="Seamless Integration with Business Infrastructure" />
            </div>
          </div>
          <div class="col-md-6">
            <p class="mb-5">AI developers work to integrate support and managed services into your existing infrastructure, ensuring minimal disruption and maximum impact. Here’s how we ensure smooth integration:</p>
            <div class="int-card mb-3">
              <h5 class="mb-3">Minimal Disruption</h5>
              <p>Our AI support solutions are designed to integrate seamlessly with your existing systems, ensuring business continuity while implementing new features, updates, and optimizations.</p>
            </div>
            <div class="int-card mb-3">
              <h5 class="mb-3">Custom APIs for Seamless Communication</h5>
              <p>We develop custom APIs to ensure smooth communication between your AI systems and existing business applications, allowing for the efficient flow of data and support tasks.</p>
            </div>
            <div class="int-card mb-3">
              <h5 class="mb-3">System Compatibility</h5>
              <p>Our AI support services are designed to complement your current systems without requiring major infrastructure changes, ensuring compatibility with minimal effort.</p>
            </div>
            <div class="int-card mb-3">
              <h5 class="mb-3">Scalability for Growing Needs</h5>
              <p>As your business grows, so do your AI support needs. Our services are scalable to accommodate increasing data volumes, new users, and evolving requirements, ensuring long-term success.</p>
            </div>
            <div class="int-card">
              <h5 class="mb-3">Regulatory Compliance</h5>
              <p>We ensure that your AI solutions meet the necessary data protection and compliance standards, keeping your business secure and aligned with industry regulations.</p>
            </div>
          </div>
        </div>

        <div class="row pt-5 pb-5">
          <div class="col-md-12">
            <div class="future-wrapper">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="mb-4">How We Ensure Seamless Collaboration for AI Support & Managed Services Projects</h2>
                  <h5 className="fw-normal mb-3"></h5>
                  <p>Our process for delivering AI support and managed services ensures your business objectives are met and systems are fully optimized. Here’s how we collaborate with you:</p>
                </div>
              </div>

              <div class="row pt-3">
                <FutureSlider data={futureData} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 pt-3 pb-1">
          <h2 className="text-center"> Key Use Cases of AI Support & Managed Services in Business
          </h2>
          <h5 className="text-center fw-normal mb-3">Unlock Industry-Specific Innovations with AI Support</h5>
          <p className="mb-0 text-center"> AI support and managed services can transform various business operations across industries. Here are some key use cases:</p>

          <div className="py-5">
            <div className="container">
              <div className="row text-center g-4">

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaFileContract />
                    </div>
                    <h5 className="fw-bold">AI in Ecommerce</h5>
                    <p className="mb-0">Ensure seamless customer experiences by providing continuous support for AI systems handling customer queries, order processing, and personalized recommendations.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaUsersCog />
                    </div>
                    <h5 className="fw-bold">AI in Healthcare</h5>
                    <p className="mb-0">Maintain patient data management systems, automate billing processes, and optimize diagnostics tools with ongoing AI system monitoring and updates.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaCode />
                    </div>
                    <h5 className="fw-bold">AI in Finance</h5>
                    <p className="mb-0">Offer continuous monitoring and optimization of AI tools for fraud detection, transaction analysis, and risk management, ensuring high performance and accuracy.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaVial />
                    </div>
                    <h5 className="fw-bold">AI in Manufacturing</h5>
                    <p className="mb-0">Monitor and optimize AI systems for predictive maintenance, inventory management, and production scheduling to improve efficiency and reduce downtime.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>

        <CTASection data={ctaData} />

        <FaqSection faqs={faqData} />


      </div>


    </>
  )
};
