"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Style from "./portfolio.module.css";

export default function PortfolioTabs({ data,title="Our Portfolio",description=null }) {
  // Load Bootstrap JS for tabs

  return (
    <div className="container pb-5">
        <h2 className="text-danger text-center mb-3">{title}</h2>
        {description && <p className="text-center">{description}</p>}
        
      {/* ==== Main Tabs ==== */}
      <ul className={`${Style.PorfolioTab} nav nav-tabs mb-4`}>
        {data?.map((tab, i) => (
          <li key={i}>
            <a
              href={`#tab${i}`}
              data-bs-toggle="tab"
              className={i === 0 ? "active" : ""}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {data?.map((tab, i) => (
          <div
            key={i}
            id={`tab${i}`}
            className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
          >
            {/* ==== If this tab has sub-tabs ==== */}
            {tab.subTabs ? (
              <SubTabGroup subTabs={tab.subTabs} parentIndex={i} />
            ) : (
              <PortfolioGrid items={tab.items} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SubTabGroup({ subTabs, parentIndex }) {
  return (
    <>
      <ul className={`${Style.PorfolioTab} nav nav-tabs mt-3 mb-5`}>
        {subTabs.map((sub, j) => (
          <li key={j}>
            <a
              href={`#sub${parentIndex}-${j}`}
              data-bs-toggle="tab"
              className={j === 0 ? "active" : ""}
            >
              {sub.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {subTabs.map((sub, j) => (
          <div
            key={j}
            id={`sub${parentIndex}-${j}`}
            className={`tab-pane fade ${j === 0 ? "show active" : ""}`}
          >
            <PortfolioGrid items={sub.items} />
          </div>
        ))}
      </div>
    </>
  );
}
function PortfolioGrid({ items }) {
  return (
    <div className="row">
      {items?.map((item, k) => (
        <div
          key={k}
          className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4"
        >
          <div className={`${Style.PortfolioCard} PortfolioCard h-100 pb-0 d-flex flex-column`}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.image_url}
                alt={item.title}
                width={400}
                height={300}
                className="img-fluid"
              />
              <div className="blackBg"></div>
            </a>
            <h3 className={Style.PortfolioTitle}>{item.title}</h3>
            <p>
            <p>{item.description}</p>
            </p>
            <div className="text-right mt-auto">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={Style.PortfolioLink}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
