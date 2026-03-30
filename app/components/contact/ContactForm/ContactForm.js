"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./ContactForm.module.css";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mailid: "",
    countrycode: "",
    phone: "",
    comment: "",
    website: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone, countryCode) => {
    // Basic phone validation - adjust based on country if needed
    const phoneRegex = /^[0-9]{7,15}$/; // Allow 7-15 digits
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
    } else if (!validatePhone(formData.phone, formData.countrycode)) {
      newErrors.phone = "Please enter a valid phone number (7-15 digits)";
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
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleNumberOnly = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
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
          source_page: "contact-us",
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          mailid: "",
          countrycode: "",
          phone: "",
          comment: "",
          website: "",
        });
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
                    Drop us your requirements. <br />
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
                {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
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
                {errors.mailid && <div className="text-danger mt-1">{errors.mailid}</div>}
              </div>

              <div className="mb-3">
                <select
                  className="form-control"
                  name="countrycode"
                  value={formData.countrycode}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>

                  <option value="+1">+1 United States</option>
                  <option value="+1">+1 Canada</option>
                  <option value="+7">+7 Russia</option>
                  <option value="+20">+20 Egypt</option>
                  <option value="+27">+27 South Africa</option>
                  <option value="+30">+30 Greece</option>
                  <option value="+31">+31 Netherlands</option>
                  <option value="+32">+32 Belgium</option>
                  <option value="+33">+33 France</option>
                  <option value="+34">+34 Spain</option>
                  <option value="+36">+36 Hungary</option>
                  <option value="+39">+39 Italy</option>
                  <option value="+40">+40 Romania</option>
                  <option value="+41">+41 Switzerland</option>
                  <option value="+43">+43 Austria</option>
                  <option value="+44">+44 United Kingdom</option>
                  <option value="+45">+45 Denmark</option>
                  <option value="+46">+46 Sweden</option>
                  <option value="+47">+47 Norway</option>
                  <option value="+48">+48 Poland</option>
                  <option value="+49">+49 Germany</option>
                  <option value="+52">+52 Mexico</option>
                  <option value="+53">+53 Cuba</option>
                  <option value="+54">+54 Argentina</option>
                  <option value="+55">+55 Brazil</option>
                  <option value="+56">+56 Chile</option>
                  <option value="+57">+57 Colombia</option>
                  <option value="+58">+58 Venezuela</option>
                  <option value="+60">+60 Malaysia</option>
                  <option value="+61">+61 Australia</option>
                  <option value="+62">+62 Indonesia</option>
                  <option value="+63">+63 Philippines</option>
                  <option value="+64">+64 New Zealand</option>
                  <option value="+65">+65 Singapore</option>
                  <option value="+66">+66 Thailand</option>
                  <option value="+81">+81 Japan</option>
                  <option value="+82">+82 South Korea</option>
                  <option value="+84">+84 Vietnam</option>
                  <option value="+86">+86 China</option>
                  <option value="+90">+90 Turkey</option>
                  <option value="+91">+91 India</option>
                  <option value="+92">+92 Pakistan</option>
                  <option value="+93">+93 Afghanistan</option>
                  <option value="+94">+94 Sri Lanka</option>
                  <option value="+95">+95 Myanmar</option>
                  <option value="+98">+98 Iran</option>
                  <option value="+211">+211 South Sudan</option>
                  <option value="+212">+212 Morocco</option>
                  <option value="+213">+213 Algeria</option>
                  <option value="+216">+216 Tunisia</option>
                  <option value="+218">+218 Libya</option>
                  <option value="+220">+220 Gambia</option>
                  <option value="+221">+221 Senegal</option>
                  <option value="+222">+222 Mauritania</option>
                  <option value="+223">+223 Mali</option>
                  <option value="+224">+224 Guinea</option>
                  <option value="+225">+225 Ivory Coast</option>
                  <option value="+226">+226 Burkina Faso</option>
                  <option value="+227">+227 Niger</option>
                  <option value="+228">+228 Togo</option>
                  <option value="+229">+229 Benin</option>
                  <option value="+230">+230 Mauritius</option>
                  <option value="+231">+231 Liberia</option>
                  <option value="+232">+232 Sierra Leone</option>
                  <option value="+233">+233 Ghana</option>
                  <option value="+234">+234 Nigeria</option>
                  <option value="+235">+235 Chad</option>
                  <option value="+236">
                    +236 Central African Republic
                  </option>
                  <option value="+237">+237 Cameroon</option>
                  <option value="+238">+238 Cape Verde</option>
                  <option value="+239">+239 Sao Tome and Principe</option>
                  <option value="+240">+240 Equatorial Guinea</option>
                  <option value="+241">+241 Gabon</option>
                  <option value="+242">+242 Congo</option>
                  <option value="+243">+243 DR Congo</option>
                  <option value="+244">+244 Angola</option>
                  <option value="+245">+245 Guinea-Bissau</option>
                  <option value="+248">+248 Seychelles</option>
                  <option value="+249">+249 Sudan</option>
                  <option value="+250">+250 Rwanda</option>
                  <option value="+251">+251 Ethiopia</option>
                  <option value="+252">+252 Somalia</option>
                  <option value="+253">+253 Djibouti</option>
                  <option value="+254">+254 Kenya</option>
                  <option value="+255">+255 Tanzania</option>
                  <option value="+256">+256 Uganda</option>
                  <option value="+257">+257 Burundi</option>
                  <option value="+258">+258 Mozambique</option>
                  <option value="+260">+260 Zambia</option>
                  <option value="+261">+261 Madagascar</option>
                  <option value="+262">+262 Reunion</option>
                  <option value="+263">+263 Zimbabwe</option>
                  <option value="+264">+264 Namibia</option>
                  <option value="+265">+265 Malawi</option>
                  <option value="+266">+266 Lesotho</option>
                  <option value="+267">+267 Botswana</option>
                  <option value="+268">+268 Eswatini</option>
                  <option value="+269">+269 Comoros</option>
                  <option value="+971">+971 United Arab Emirates</option>
                  <option value="+972">+972 Israel</option>
                  <option value="+973">+973 Bahrain</option>
                  <option value="+974">+974 Qatar</option>
                  <option value="+975">+975 Bhutan</option>
                  <option value="+976">+976 Mongolia</option>
                  <option value="+977">+977 Nepal</option>
                  <option value="+880">+880 Bangladesh</option>
                </select>
                {errors.countrycode && <div className="text-danger mt-1">{errors.countrycode}</div>}
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyPress={handleNumberOnly}
                  minLength={10}
                  maxLength={13}
                  required
                />
                {errors.phone && <div className="text-danger mt-1">{errors.phone}</div>}
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
                {errors.comment && <div className="text-danger mt-1">{errors.comment}</div>}
              </div>

              {/* Honeypot Field */}
              <input type="text" name="website" className="d-none" />

              {/* Cloudflare Turnstile */}
              <div
                className="cf-turnstile"
                data-sitekey="0x4AAAAAAAZkfkKo2ooZlFK4"
                data-theme="light"
              ></div>

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
