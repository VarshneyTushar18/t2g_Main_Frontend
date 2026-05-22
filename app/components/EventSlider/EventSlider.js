"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import FancyGallery from "../EventGallery/FancyGallery";
import "./custom.css";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/** Main section heading — e.g. "Events" → "Events Collection" */
function formatSectionTitle(title) {
  const t = String(title ?? "").trim();
  if (!t) return "";
  if (/ collection$/i.test(t)) return t;
  return `${t} Collection`;
}

/** Short label for top tab icons */
function formatTabTitle(title) {
  return String(title ?? "")
    .trim()
    .replace(/ Collection$/i, "");
}

/** Card overlay text — always from Description; append year if missing for consistency */
function formatEventCardTitle(item) {
  const year = String(item?.year ?? "").trim();
  let text = String(item?.description ?? "").trim();

  if (!text) {
    text = String(item?.category_title ?? "")
      .replace(/ Collection$/i, "")
      .trim();
  }

  if (!text) return year || "Event";

  if (year && !new RegExp(`\\b${year}\\b`).test(text)) {
    return `${text} ${year}`;
  }

  return text;
}

export default function EventTabs() {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [years, setYears] = useState([]);
  const [activeYear, setActiveYear] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [openGalleryId, setOpenGalleryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── Step 1: Fetch categories on mount ──
  useEffect(() => {
    fetch(`${BASE_URL}/api/life/categories`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch categories");
        return res.json();
      })
      .then(({ data }) => {
        setCategories(data);
        if (data.length > 0) setActiveTab(data[0]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // ── Step 2: Fetch years when tab changes ──
  useEffect(() => {
    if (!activeTab) return;

    setYears([]);
    setActiveYear(null);
    setGalleryItems([]);

    fetch(`${BASE_URL}/api/life/years/${activeTab.category}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch years");
        return res.json();
      })
      .then(({ data }) => {
        setYears(data);
        if (data.length > 0) setActiveYear(data[0]);
      })
      .catch((err) => setError(err.message));
  }, [activeTab]);

  // ── Step 3: Fetch gallery when year changes ──
  useEffect(() => {
    if (!activeTab || !activeYear) return;

    setGalleryItems([]);

    fetch(`${BASE_URL}/api/life/gallery/${activeTab.category}/${activeYear}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch gallery");
        return res.json();
      })
      .then(({ data }) => {
        setGalleryItems(Array.isArray(data) ? data : []);
      })
      .catch((err) => setError(err.message));
  }, [activeTab, activeYear]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenGalleryId(null);
  };

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error) return <p className="text-center text-danger py-5">{error}</p>;
  if (!categories.length)
    return <p className="text-center py-5">No data found.</p>;

  return (
    <>
      {/* ── Slider Tabs ── */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 6 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 8 },
        }}
      >
        {categories.map((item) => (
          <SwiperSlide key={item.category}>
            <div
              className={`tabCard ${activeTab?.category === item.category ? "active" : ""}`}
              onClick={() => handleTabChange(item)}
            >
              <div className="imgWrapper">
                <Image
                  src={item.category_img}
                  alt={item.category_title}
                  width={57}
                  height={41}
                />
              </div>
              <p className="title">{formatTabTitle(item.category_title)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Tab Content ── */}
      <div className="contentBox pt-5">
        <h2>{formatSectionTitle(activeTab?.category_title)}</h2>
        {/* ── Year Buttons ── */}
        <div className="yearTabs pb-4">
          {years.length > 0 ? (
            years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setOpenGalleryId(null);
                }}
                className={`yearBtn ${activeYear === year ? "active" : ""}`}
              >
                {year}
              </button>
            ))
          ) : (
            <p className="text-muted">No years available.</p>
          )}
        </div>

        {/* ── Event cards (one per gallery row) ── */}
        <div className="row g-4 events-cards-row">
          {galleryItems.length > 0 ? (
            galleryItems.map((item) => (
              <div key={item.id} className="col-md-6">
                <div className="bannerBlock">
                  <Image
                    src={item.banner}
                    alt={formatEventCardTitle(item)}
                    width={628}
                    height={350}
                    className="rounded-4 object-fit-cover imgBanner w-100"
                  />
                  <div className="bannerContentBlock">
                    <h4>{formatEventCardTitle(item)}</h4>
                    <button
                      type="button"
                      className="btn bg-danger"
                      disabled={!item.gallery?.length}
                      onClick={() => {
                        if (item.gallery?.length) setOpenGalleryId(item.id);
                      }}
                    >
                      Explore More
                    </button>
                    <FancyGallery
                      images={item.gallery || []}
                      open={openGalleryId === item.id}
                      setOpen={() => setOpenGalleryId(null)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-muted">No content for this selection.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
