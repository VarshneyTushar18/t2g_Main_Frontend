"use client";

import { useState } from "react";

export default function AmazonForm() {
  const [formData, setFormData] = useState({
    name: "",
    mailid: "",
    countrycode: "India (+91)",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Add API call here
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div id="formErrors"></div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          name="mailid"
          placeholder="Your Email Address"
          value={formData.mailid}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <select
          className="form-control"
          name="countrycode"
          value={formData.countrycode}
          onChange={handleChange}
          required
        >
          <option value="India (+91)">India (+91)</option>
        </select>
      </div>

      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          name="phone"
          placeholder="Your Phone No."
          value={formData.phone}
          onChange={handleChange}
          minLength={10}
          maxLength={13}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          name="comment"
          placeholder="Enter Message"
          value={formData.comment}
          onChange={handleChange}
          required
        />
      </div>


      {/* Cloudflare Turnstile */}
      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAAAZkfkKo2ooZlFK4"
        data-theme="light"
      />

      <button
        type="submit"
        className="btn btn-danger mt-3"
        id="contactFormSubmitBtn"
      >
        🔥 Get Your Free Amazon Growth Audit
      </button>

      <p className="np-line">
        <i className="fas fa-lock"></i> No spam. No obligation. Just insights to
        grow Amazon sales
      </p>
    </form>
  );
}