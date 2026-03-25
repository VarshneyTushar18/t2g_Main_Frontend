"use client";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./ContactSection.module.css"; // optional if you want CSS module
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";


const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        country: formData.country,
        phone: formData.phone,
        message: formData.message,
        form_type: "contact_page",
        source_page: "contact-us",
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      alert("Submission failed");
      return;
    }

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Submission failed");
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("Server error");
  }
};

  return (
    <section
      className={Style.ContactSection || "ContactSection"}
      id="contact-us"
    >
      <div className={Style.Overlay}>
        <div className="container">
          <div className="row justify-content-between">
            {/* ===== Contact Info ===== */}
            <div className="col-12 col-lg-5 text-white">
              <p className="sub-title text-uppercase">NEED ANY HELP</p>
              <h2 className="title">Get in touch with us</h2>
              <p className="text-white">
                Looking for IT solutions that can make a transformative
                difference?
              </p>

              <div className="contact-info mt-4">
                {/* Email */}
                <div className="d-flex align-items-center mb-3">
                  <div className={Style.Icon}>
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                    ></FontAwesomeIcon>
                  </div>
                  <div>
                    <a
                      href="mailto:Info@tech2globe.com"
                      className="text-white hover-underline"
                      aria-label="Email Tech2Globe at Info@tech2globe.com"
                    >
                      Info@tech2globe.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center mb-3">
                  <div className={Style.Icon}>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  </div>
                  <div>
                    <a
                      href="tel:+919899675039"
                      className="text-white hover-underline"
                      aria-label="Call Tech2Globe at +91-9899675039"
                    >
                      +91-9899675039 (Sales)
                    </a>
                    ,{" "}
                    <a
                      href="tel:+17783829628"
                      className="text-white hover-underline"
                      aria-label="Call Tech2Globe at +1-778-382-9628"
                    >
                      +1-778-382-9628 (Sales)
                    </a>
                  </div>
                </div>

                {/* Microsoft Teams */}
                <div className="d-flex align-items-center mb-3">
                  <div className={Style.Icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={25}
                      height={25}
                      x={0}
                      y={0}
                      viewBox="0 0 100 100"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className
                    >
                      <g>
                        <path
                          fill="#ffffff"
                          d="M84.025 35.881c5.797 0 10.513-4.729 10.513-10.54-.577-13.983-20.45-13.979-21.026 0 0 5.811 4.717 10.54 10.513 10.54z"
                          opacity={1}
                          data-original="#464eb8"
                          className
                        />
                        <path
                          fill="#ffffff"
                          d="M90.958 38.71H51.61v-3.68c.784.139 1.605.232 2.467.268.093.001.186-.006.279-.007a15.5 15.5 0 0 0 1.063-.053c.12-.011.239-.021.357-.035.403-.045.801-.104 1.193-.181.024-.005.05-.008.074-.012a14.377 14.377 0 0 0 5.167-2.17 14.504 14.504 0 0 0 3.693-3.615c.26-.341.497-.697.718-1.061.021-.036.044-.07.065-.107.17-.287.32-.584.466-.884.064-.13.13-.26.19-.392.154-.345.296-.696.421-1.053l.032-.088c1.427-4.208.774-9.156-1.676-12.856a14.476 14.476 0 0 0-2.268-2.574c-.176-.153-.344-.314-.529-.457a14.41 14.41 0 0 0-3.567-2.159 12.49 12.49 0 0 0-1.347-.493c-.264-.081-.538-.141-.808-.207-.239-.058-.475-.121-.717-.166-.2-.038-.405-.062-.607-.092-.352-.05-.704-.096-1.06-.121-.122-.009-.245-.012-.368-.018a14.095 14.095 0 0 0-1.088-.007c-2.08.121-3.926.558-5.543 1.24-.33.149-.664.294-.975.47-3.242 1.766-5.722 4.772-6.867 8.293a15.274 15.274 0 0 0-.187 8.129l.02.076.097.345c.039.137.085.273.128.409.039.11.08.219.121.329H8.774a5.168 5.168 0 0 0-5.162 5.162v37.672a5.168 5.168 0 0 0 5.162 5.162h20.122c.026.118.059.232.087.349 2.77 10.899 12.463 18.607 23.917 18.885 9.503-.231 17.666-5.721 21.753-13.592.061.022.124.038.185.059 10.182 3.851 21.752-4.229 21.546-15.131V44.122c.001-2.984-2.434-5.412-5.426-5.412z"
                          opacity={1}
                          data-original="#464eb8"
                          className
                        />
                        <path
                          fill="#ebebeb"
                          d="M77.444 44.232c.069-2.971-2.287-5.448-5.251-5.521H50.761a1.43 1.43 0 0 0-1.429 1.433v29.095a2.433 2.433 0 0 1-2.428 2.433H30.199a1.429 1.429 0 0 0-1.399 1.721c2.367 11.561 12.248 19.837 24.1 20.126 13.856-.34 24.866-11.914 24.544-25.767zM54.077 35.298c.093.001.186-.006.279-.007.358-.005.713-.023 1.064-.053.12-.011.239-.021.357-.035.402-.045.801-.104 1.193-.181l.074-.013a14.377 14.377 0 0 0 5.167-2.17 14.508 14.508 0 0 0 3.694-3.615c.26-.341.497-.697.718-1.061.021-.036.044-.07.065-.107.17-.287.32-.585.466-.884.064-.13.13-.259.19-.392.154-.345.297-.696.421-1.053l.032-.088c1.427-4.208.774-9.157-1.676-12.856a14.476 14.476 0 0 0-2.268-2.574c-.176-.153-.344-.314-.529-.457a14.41 14.41 0 0 0-3.567-2.159A12.49 12.49 0 0 0 58.41 7.1c-.264-.081-.538-.14-.808-.207-.239-.058-.475-.121-.717-.166-.2-.038-.404-.062-.607-.092-.352-.05-.704-.096-1.06-.121-.122-.009-.245-.012-.367-.018a15.179 15.179 0 0 0-1.088-.005c-2.08.121-3.926.557-5.543 1.24-.33.149-.664.294-.975.47-3.242 1.767-5.723 4.773-6.867 8.294a15.274 15.274 0 0 0-.187 8.129l.02.076.097.345c.039.137.085.273.128.409.06.171.123.34.187.51h-.027c1.775 4.977 6.268 9.029 13.481 9.334z"
                          opacity={1}
                          data-original="#7b83eb"
                          className
                        />
                        <path
                          fill="#ffffff"
                          d="M46.448 25.783H8.774a5.168 5.168 0 0 0-5.162 5.162v37.672a5.168 5.168 0 0 0 5.162 5.162h37.674a5.167 5.167 0 0 0 5.161-5.162V30.945a5.166 5.166 0 0 0-5.161-5.162z"
                          opacity={1}
                          data-original="#464eb8"
                          className
                        />
                        <path
                          fill="#234268"
                          d="M37.109 36.271h-19.28c-.771 0-1.395.625-1.395 1.396v3.514c0 .771.624 1.396 1.395 1.396h6.22v19.575c0 .771.624 1.396 1.395 1.396h4.134c.771 0 1.395-.625 1.395-1.396V42.577h6.136c.771 0 1.395-.625 1.395-1.396v-3.514c0-.771-.624-1.396-1.395-1.396z"
                          opacity={1}
                          data-original="#ffffff"
                          className
                        />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <a
                      href="msteams:/l/chat/0/0?users=info@tech2globe.com"
                      className="text-white hover-underline"
                      aria-label="Connect Tech2Globe on Microsoft Teams"
                    >
                      info@tech2globe.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Contact Form ===== */}
            <div className="col-12 col-lg-5 mt-4 mt-lg-0">
              <div className={Style.ContactForm}>
                <h5 className="text-white text-center mb-4 font">
                  Fill out the form, and our team will get back to you in 1
                  business day.
                </h5>
                <form onSubmit={handleSubmit} id="contactForm">
                  <div id="formErrors"></div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <select
                        name="country"
                        className="form-select"
                        value={formData.country}
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
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phoneNumber"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone No."
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Enter Your Query"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    ></textarea>
                  </div>

                  {/* Turnstile */}
                  <div style={{ display: "block", flexFlow: "row" }}>
                    <div
                      className="cf-turnstile"
                      data-sitekey="0x4AAAAAAAZkfkKo2ooZlFK4"
                      data-size="flexible"
                      data-theme="light"
                    ></div>
                  </div>

                  <button
                    type="submit"
                    id="contactFormSubmitBtn"
                    aria-label="Submit Enquiry"
                    className="btn btn-primary w-100"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
