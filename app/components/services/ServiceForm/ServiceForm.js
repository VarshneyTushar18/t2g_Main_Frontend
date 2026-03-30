"use client";

import { useState } from "react";
import { countries } from "@/data/countries";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:       formData.name,
          email:      formData.email,
          country:    formData.country,   // maps countrycode → country
          phone:      formData.phone,
          message:    formData.comment,        // maps comment → message
          form_type:  "service_form",
          source_page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          comment: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="contact-us1" onSubmit={handleSubmit} className="pt-3 px-3">
      <div className="row">
        {/* Name */}
        <div className="col-md-6 input-fields px-0">
          <div className="form-group me-1">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="col-md-6 input-fields px-0">
          <div className="form-group ms-1">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="row">
        {/* Country */}
        <div className="col-12 input-fields px-0">
          <div className="form-group newform">
            <select
              className="form-control mb-3"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {countries.map((c, idx) => (
                <option key={idx} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Phone */}
        <div className="col-12 input-fields px-0">
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Contact*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength="10"
              maxLength="11"
              required
            />
          </div>
        </div>
      </div>

      {/* Comment */}
      <div className="row pb-2">
        <div className="col-12 input-fields px-0">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Your Query*"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
        </div>
      </div>

      {/* Cloudflare Turnstile */}
      <div className="row">
        <div className="col-12 px-0">
          <div
            className="cf-turnstile"
            data-sitekey="0x4AAAAAAAaIGkjRLxuffu9G"
            data-theme="light"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="row">
        <div className="col-12 px-0">
          <input
            type="submit"
            value={loading ? "Sending…" : "Submit"}
            name="submit"
            disabled={loading}
            className="btn bg-dark text-white w-auto"
          />
        </div>
      </div>
    </form>
  );
}