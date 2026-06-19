"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaBullseye,
  FaChartLine,
  FaFire,
  FaMoneyBillWave,
} from "react-icons/fa";

const tabs = [
  {
    id: "high-acos",
    label: "High ACOS",
    icon: FaFire,
    title: "High",
    titleSuffix: "ACOS",
    description: "You're getting sales… but barely making profit.",
    image: "/images/landingpage/Hight-Acos1.webp",
    imageAlt: "High Acos",
    imageClass: "coloredbg",
  },
  {
    id: "wasted-spend",
    label: "Wasted Ad Spend",
    icon: FaMoneyBillWave,
    title: "Wasted",
    titleSuffix: "Ad Spend",
    description: "Money goes into ads, but nothing comes back.",
    image: "/images/landingpage/Wasted-Ad-Spend1.webp",
    imageAlt: "Wasted Ad Spend",
    imageClass: "coloredbg",
  },
  {
    id: "poor-keywords",
    label: "Poor Keywords",
    icon: FaBullseye,
    title: "Poor",
    titleSuffix: "Keywords",
    description: "Your ads show to the wrong people.",
    image: "/images/landingpage/keyword.webp",
    imageAlt: "Poor Keywords",
    imageClass: "",
  },
  {
    id: "growth",
    label: "No Growth from Ads",
    icon: FaChartLine,
    title: "No",
    titleSuffix: "Growth from Ads",
    description: "You keep spending, but your business isn't growing.",
    image: "/images/landingpage/No-Growth.webp",
    imageAlt: "Low Organic Rank",
    imageClass: "",
  },
];

export default function PpcTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="ppc-tabs-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="d2c_title text_start text-center position-relative">
              Why <span>Amazon Sellers</span> Struggle With PPC
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="tabs-header">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`tab${activeTab === index ? " active" : ""}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <Icon /> {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="tabs-content">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;

                return (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`tab-pane${activeTab === index ? " active" : ""}`}
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 text-center">
                        <h3>
                          <Icon /> <span>{tab.title}</span> {tab.titleSuffix}
                        </h3>
                        <h5>{tab.description}</h5>
                      </div>

                      <div className="col-lg-6">
                        <div
                          className={`image-blocktab${tab.imageClass ? ` ${tab.imageClass}` : ""}`}
                        >
                          <Image
                            src={tab.image}
                            alt={tab.imageAlt}
                            width={600}
                            height={400}
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
