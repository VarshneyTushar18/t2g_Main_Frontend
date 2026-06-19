"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Style from "./ContactForm.module.css";
import Select from "react-select";
import { countries } from "@/data/countries";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mailid: "",
    countrycode: "",
    phone: "",
    comment: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");

  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const renderTurnstile = () => {
      if (
        !isMounted ||
        !window.turnstile ||
        !turnstileRef.current ||
        widgetIdRef.current
      ) {
        return;
      }

      try {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACu4Eb4Q25bWJD9B",
          theme: "light",

          callback: (token) => {
            setCaptchaToken(token);
          },

          "expired-callback": () => {
            setCaptchaToken("");
          },

          "error-callback": () => {
            setCaptchaToken("");
            console.error("Turnstile failed");
          },
        });
      } catch (error) {
        console.error("Turnstile render error:", error);
      }
    };

    if (!window.turnstile) {
      const existingScript = document.querySelector('script[src*="turnstile"]');

      if (!existingScript) {
        const script = document.createElement("script");

        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

        script.async = true;
        script.defer = true;

        script.onload = renderTurnstile;

        document.body.appendChild(script);
      } else {
        existingScript.addEventListener("load", renderTurnstile);
      }
    } else {
      renderTurnstile();
    }

    return () => {
      isMounted = false;

      try {
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      } catch (error) {
        console.error("Turnstile cleanup error:", error);
      }
    };
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{7,15}$/;

    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mailid.trim()) {
      newErrors.mailid = "Email is required";
    } else if (!validateEmail(formData.mailid)) {
      newErrors.mailid = "Please enter a valid email address";
    }

    if (!formData.countrycode) {
      newErrors.countrycode = "Please select a country";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.comment.trim()) {
      newErrors.comment = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "name") {
      value = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setFormData({
      ...formData,
      phone: value,
    });

    if (errors.phone) {
      setErrors({
        ...errors,
        phone: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!captchaToken) {
      alert("Please complete captcha");
      return;
    }

    try {
      const response = await fetch(`${API}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.mailid,
          country: formData.countrycode,
          phone: formData.phone,
          message: formData.comment,
          form_type: "contact_page",
          source_page: window.location.href,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: "",
          mailid: "",
          countrycode: "",
          phone: "",
          comment: "",
          website: "",
        });

        setCaptchaToken("");

        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }

        router.push("/thank-you");
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className={Style.ContactFormSection}>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="feature-banner2-caption text-white">
              <Link
                href="/scam-alert"
                target="_blank"
                className="text-light pb-2"
              >
                <u>Scam Alert</u>
              </Link>

              <h1>Contact Us</h1>

              <ol>
                <li>
                  <p>
                    Drop us your requirements.
                    <br />
                    Our team will get back to you within 1 business day.
                  </p>
                </li>

                <li>
                  <strong>Ask your query:</strong>
                  <br />

                  <a href="mailto:info@tech2globe.com">
                    <u>Info@tech2globe.com</u>
                  </a>
                </li>

                <li>
                  <strong>Career with us:</strong>

                  <br />

                  <p>
                    Helping build dream{" "}
                    <Link
                      href="/career"
                      className="text-white text-decoration-underline d-inline-block"
                    >
                      careers
                    </Link>
                  </p>
                </li>

                <li className="pt-0">
                  <strong>Contact HR Department:</strong>

                  <br />

                  <a href="tel:+91-9871102889">
                    <u>+91-9871102889 (HR)</u>
                  </a>

                  <br />

                  <a href="mailto:career@tech2globe.com">
                    <u>career@tech2globe.com</u>
                  </a>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className={Style.Formbox}
            >
              <h2 className="fw-normal">Get in touch</h2>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                {errors.name && (
                  <div className="text-danger mt-1">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email ID"
                  name="mailid"
                  value={formData.mailid}
                  onChange={handleChange}
                  required
                />

                {errors.mailid && (
                  <div className="text-danger mt-1">{errors.mailid}</div>
                )}
              </div>

              <div className="mb-3">
                <Select
                  options={countries}
                  placeholder="Select Country"
                  value={countries.find(
                    (opt) => opt.value === formData.countrycode,
                  )}
                  onChange={(selectedOption) => {
                    setFormData({
                      ...formData,
                      countrycode: selectedOption?.value || "",
                    });

                    if (errors.countrycode) {
                      setErrors({
                        ...errors,
                        countrycode: "",
                      });
                    }
                  }}
                  isSearchable
                />

                {errors.countrycode && (
                  <div className="text-danger mt-1">{errors.countrycode}</div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputMode="numeric"
                  minLength={7}
                  maxLength={15}
                  required
                />

                {errors.phone && (
                  <div className="text-danger mt-1">{errors.phone}</div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Enter Your Text"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>

                {errors.comment && (
                  <div className="text-danger mt-1">{errors.comment}</div>
                )}
              </div>

              {/* Honeypot */}
              <input type="text" name="website" className="d-none" />

              {/* Cloudflare Turnstile */}
              <div ref={turnstileRef} className="mb-3"></div>

              <button
                type="submit"
                className="btn btn-danger mt-3"
                id="contactFormSubmitBtn"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
