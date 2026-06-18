"use client";

import { useEffect, useState } from "react";

const VIDEO_SRC =
  "https://www.youtube-nocookie.com/embed/CDI-QIfFhqM";

export default function VideoTestimonialModal({ trigger }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="video-testimonial-trigger"
        onClick={() => setOpen(true)}
        aria-label="View video testimonial for Strategic Account Management service"
      >
        {trigger}
      </button>

      {open ? (
        <div
          className="modal fade iframevidcontainer show"
          id="vidreviewOne"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vidreviewOneLabel"
          tabIndex={-1}
          style={{ background: "rgba(0, 0, 0, 0.5)", display: "block" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="modal-dialog modal-sm"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="modal-body">
                <figure className="video-container m-0">
                  <iframe
                    width="100%"
                    height="500"
                    src={VIDEO_SRC}
                    title="Tech2Globe Boosts Amazon ROI with Strategic Account Management"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    aria-label="YouTube video: Tech2Globe Boosts Amazon ROI with Strategic Account Management"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
