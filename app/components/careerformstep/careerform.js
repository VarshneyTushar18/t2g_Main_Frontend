"use client";

import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef, Suspense } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";
const DRAFT_STORAGE_KEY = "tech2globe_career_form_draft_v1";
const REAPPLY_DAYS = 90;

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];
const ALLOWED_RESUME_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".jpg",
  ".jpeg",
  ".png",
];
const MAX_RESUME_BYTES = 3 * 1024 * 1024; // matches backend RESUME_FILE_LIMIT

const isAllowedResume = (file) => {
  if (!file) return false;
  const name = (file.name || "").toLowerCase();
  const hasValidExt = ALLOWED_RESUME_EXTENSIONS.some((ext) =>
    name.endsWith(ext)
  );
  const hasValidMime = !file.type || ALLOWED_RESUME_TYPES.includes(file.type);
  return hasValidExt && hasValidMime;
};

const INITIAL_FORM = {
  jobId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  portfolioLink: "",
  currentLakhs: "",
  currentThousands: "",
  currentCTC: null,
  expectedLakhs: "",
  expectedThousands: "",
  expectedCTC: null,
  joinDate: "",
  lastCompany: "",
  noticePeriod: "",
  comments: "",
  resume: null,
};

const SUBMIT_KEYS = [
  "jobId",
  "firstName",
  "lastName",
  "email",
  "phone",
  "portfolioLink",
  "currentCTC",
  "expectedCTC",
  "joinDate",
  "lastCompany",
  "noticePeriod",
  "comments",
  "resume",
];

const DRAFT_KEYS = [
  "jobId",
  "firstName",
  "lastName",
  "email",
  "phone",
  "portfolioLink",
  "currentLakhs",
  "currentThousands",
  "currentCTC",
  "expectedLakhs",
  "expectedThousands",
  "expectedCTC",
  "joinDate",
  "lastCompany",
  "noticePeriod",
  "comments",
];

function FieldError({ message }) {
  if (!message) return null;
  return <span className="field-error">{message}</span>;
}

function loadDraft() {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveDraft(formData, step) {
  if (typeof window === "undefined") return;
  try {
    const payload = { step: Math.min(step, 4), fields: {} };
    DRAFT_KEYS.forEach((key) => {
      payload.fields[key] = formData[key];
    });
    sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* ignore quota / private mode */
  }
}

function clearDraft() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(DRAFT_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

function MultiStepSignupInner() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [jobs, setJobs] = useState([]);
  const [step, setStep] = useState(1);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [checkingDuplicate, setCheckingDuplicate] = useState(false);
  const [apiError, setApiError] = useState("");
  const [draftReady, setDraftReady] = useState(false);
  const resumeInputRef = useRef(null);

  const params = useSearchParams();
  const [jobId, setJobId] = useState(null);

  useEffect(() => {
    const draft = loadDraft();
    if (draft?.fields) {
      setFormData((prev) => ({
        ...prev,
        ...draft.fields,
        resume: null,
      }));
      const s = Number(draft.step);
      if (Number.isFinite(s) && s >= 1 && s <= 4) setStep(s);
    }
    setDraftReady(true);
  }, []);

  useEffect(() => {
    const id = params.get("jid");
    if (id) setJobId(id);
  }, [params]);

  useEffect(() => {
    async function loadJobs() {
      setLoadingJobs(true);
      try {
        const res = await fetch(`${API_BASE}/api/career/jobs`);
        const data = await res.json();
        setJobs(data?.data || []);
      } catch (err) {
        console.error(err);
        setApiError(
          "Unable to load job listings. Please refresh and try again."
        );
      } finally {
        setLoadingJobs(false);
      }
    }

    loadJobs();
  }, []);

  useEffect(() => {
    if (jobId) {
      setFormData((prev) => ({ ...prev, jobId }));
    }
  }, [jobId]);

  useEffect(() => {
    if (!draftReady) return;
    if (step === 5) {
      clearDraft();
      return;
    }
    saveDraft(formData, step);
  }, [formData, step, draftReady]);

  const updateField = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(updates).forEach((key) => {
        if (key === "currentLakhs" || key === "currentThousands") {
          delete next.currentCTC;
        } else if (key === "expectedLakhs" || key === "expectedThousands") {
          delete next.expectedCTC;
        } else {
          delete next[key];
        }
      });
      return next;
    });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+?[\d\s\-()]{10,}$/.test(phone);
  const validateURL = (url) => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isCtcSelected = (lakhs, thousands) =>
    lakhs !== "" && lakhs !== null && thousands !== "" && thousands !== null;

  const checkDuplicateApplication = async (email, selectedJobId) => {
    if (!email || !selectedJobId || !validateEmail(email)) return null;
    const qs = new URLSearchParams({
      email: email.trim(),
      jobId: String(selectedJobId),
    });
    const res = await fetch(
      `${API_BASE}/api/career/check-application?${qs.toString()}`
    );
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      throw new Error(data?.error || "Could not verify application status.");
    }
    return data;
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "Please enter your first name.";
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Please enter your last name.";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Please enter your email address.";
      } else if (!validateEmail(formData.email)) {
        newErrors.email =
          "Please enter a valid email address (example: name@company.com).";
      }
      if (formData.portfolioLink && !validateURL(formData.portfolioLink)) {
        newErrors.portfolioLink =
          "Please enter a valid portfolio URL starting with http:// or https://.";
      }
    }

    if (currentStep === 2) {
      if (!formData.jobId) {
        newErrors.jobId = "Please select the vacancy you are applying for.";
      }

      if (!isCtcSelected(formData.currentLakhs, formData.currentThousands)) {
        newErrors.currentCTC =
          "Please select Current CTC in both Lakhs and Thousands. Freshers can select 0.";
      }

      if (!isCtcSelected(formData.expectedLakhs, formData.expectedThousands)) {
        newErrors.expectedCTC =
          "Please select Expected CTC in both Lakhs and Thousands. You can select 0 if needed.";
      }

      if (!formData.joinDate) {
        newErrors.joinDate = "Please select the date when you can join.";
      } else {
        const selected = new Date(formData.joinDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) {
          newErrors.joinDate =
            "Join date cannot be in the past. Please choose today or a future date.";
        }
      }
    }

    if (currentStep === 3) {
      if (!formData.phone.trim()) {
        newErrors.phone = "Please enter your phone number.";
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone =
          "Please enter a valid phone number with at least 10 digits.";
      }

      if (!formData.resume) {
        newErrors.resume = "Please upload your resume to continue.";
      } else if (!isAllowedResume(formData.resume)) {
        newErrors.resume =
          "Only PDF, DOC, DOCX, JPG, and PNG resume files are allowed.";
      } else if (formData.resume.size > MAX_RESUME_BYTES) {
        newErrors.resume =
          "Resume file is too large. Please upload a file smaller than 3MB.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = async () => {
    if (!validateStep(step)) return;

    // Early duplicate check whenever email + job are both known
    const shouldCheckDuplicate =
      (step === 1 && formData.jobId && formData.email) ||
      (step === 2 && formData.jobId && formData.email);

    if (shouldCheckDuplicate) {
      setCheckingDuplicate(true);
      setApiError("");
      try {
        const result = await checkDuplicateApplication(
          formData.email,
          formData.jobId
        );
        if (result?.duplicate) {
          const message =
            result.message ||
            `You already applied for this position. You can re-apply after ${REAPPLY_DAYS} days.`;
          setErrors((prev) => ({ ...prev, email: message }));
          setApiError(message);
          setStep(1);
          return;
        }
      } catch (err) {
        console.error(err);
        // Soft-fail: allow continue; final submit still enforces
      } finally {
        setCheckingDuplicate(false);
      }
    }

    setErrors({});
    setApiError("");
    setStep((s) => Math.min(4, s + 1));
  };

  const prevStep = () => {
    setErrors({});
    setApiError("");
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = async () => {
    if (submitting) return;

    for (let i = 1; i <= 4; i++) {
      if (!validateStep(i)) {
        setStep(i);
        return;
      }
    }

    setSubmitting(true);
    setApiError("");

    try {
      const dup = await checkDuplicateApplication(
        formData.email,
        formData.jobId
      );
      if (dup?.duplicate) {
        const message =
          dup.message ||
          `You already applied for this position. You can re-apply after ${REAPPLY_DAYS} days.`;
        setErrors({ email: message });
        setApiError(message);
        setStep(1);
        setSubmitting(false);
        return;
      }
    } catch (err) {
      console.error(err);
    }

    const data = new FormData();
    SUBMIT_KEYS.forEach((key) => {
      const value = formData[key];
      if (value === null || value === undefined || value === "") return;
      data.append(key, value);
    });

    try {
      const res = await fetch(`${API_BASE}/api/career/apply`, {
        method: "POST",
        body: data,
      });

      const raw = await res.text();
      let result = null;
      try {
        result = raw ? JSON.parse(raw) : null;
      } catch {
        result = null;
      }

      if (res.ok) {
        clearDraft();
        setStep(5);
        return;
      }

      const serverMessage =
        result?.error ||
        result?.message ||
        (res.status === 413
          ? "Resume file is too large. Please upload a file smaller than 3MB."
          : null);

      setApiError(
        serverMessage ||
          `Submission failed (error ${res.status}). Please upload a PDF/DOC/DOCX/JPG/PNG resume under 3MB and try again.`
      );

      if (res.status === 409) {
        setStep(1);
        setErrors((prev) => ({
          ...prev,
          email: serverMessage || "You already applied for this position.",
        }));
        return;
      }

      if (
        serverMessage &&
        /pdf|doc|docx|jpg|jpeg|png|resume|file|upload|size/i.test(serverMessage)
      ) {
        setStep(3);
        setErrors((prev) => ({ ...prev, resume: serverMessage }));
      }
    } catch (err) {
      console.error(err);
      setApiError(
        "Could not submit your application. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const stepClass = (n) =>
    step === n ? undefined : "msform-step-hidden";

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <p>Fill all the required form fields to go to the next step</p>

            <form id="msform" onSubmit={(e) => e.preventDefault()}>
              <ul id="progressbar" className="p-0">
                <li className={step >= 1 ? "active" : ""} id="account">
                  <strong>Personal Information</strong>
                </li>
                <li className={step >= 2 ? "active" : ""} id="profile">
                  <strong>Application Details</strong>
                </li>
                <li className={step >= 3 ? "active" : ""} id="education">
                  <strong>Professional Details</strong>
                </li>
                <li className={step >= 4 ? "active" : ""} id="experience">
                  <strong>Additional Information</strong>
                </li>
              </ul>

              <br />

              {apiError && (
                <div className="form-api-error" role="alert">
                  {apiError}
                </div>
              )}

              {/* STEP 1 — kept mounted so Previous retains values */}
              <fieldset className={stepClass(1)}>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title text-black">
                        Personal Information:
                      </h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 1 - 4</h2>
                    </div>
                  </div>

                  <label className="fieldlabels">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      updateField({ firstName: e.target.value })
                    }
                  />
                  <FieldError message={errors.firstName} />

                  <label className="fieldlabels">Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => updateField({ lastName: e.target.value })}
                  />
                  <FieldError message={errors.lastName} />

                  <label className="fieldlabels">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={(e) => updateField({ email: e.target.value })}
                  />
                  <FieldError message={errors.email} />

                  <label className="fieldlabels">Portfolio Link</label>
                  <input
                    type="url"
                    name="portfolioLink"
                    placeholder="https://portfolio.com"
                    value={formData.portfolioLink}
                    onChange={(e) =>
                      updateField({ portfolioLink: e.target.value })
                    }
                  />
                  <FieldError message={errors.portfolioLink} />
                </div>

                <input
                  type="button"
                  className="next action-button"
                  value={checkingDuplicate ? "Checking..." : "Next"}
                  onClick={nextStep}
                  disabled={checkingDuplicate}
                />
              </fieldset>

              {/* STEP 2 */}
              <fieldset className={stepClass(2)}>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title text-black">
                        Application Details:
                      </h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 2 - 4</h2>
                    </div>
                  </div>

                  <label className="fieldlabels">
                    Vacancy you are applying for *
                  </label>
                  <select
                    name="jobId"
                    value={formData.jobId}
                    onChange={(e) => updateField({ jobId: e.target.value })}
                    disabled={loadingJobs}
                  >
                    <option value="" disabled>
                      {loadingJobs
                        ? "Loading positions..."
                        : "Select Position"}
                    </option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.jobId} />

                  <label className="fieldlabels">Current CTC (PA.) *</label>
                  <p className="field-hint">
                    Freshers can select 0 in both Lakhs and Thousands.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        value={formData.currentLakhs}
                        onChange={(e) => {
                          const lakhs = e.target.value;
                          const thousands = formData.currentThousands;
                          updateField({
                            currentLakhs: lakhs,
                            currentCTC:
                              lakhs === "" || thousands === ""
                                ? null
                                : parseInt(lakhs, 10) * 100000 +
                                  parseInt(thousands, 10) * 1000,
                          });
                        }}
                      >
                        <option disabled value="">
                          In Lakhs
                        </option>
                        {[...Array(21)].map((_, i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        value={formData.currentThousands}
                        onChange={(e) => {
                          const thousands = e.target.value;
                          const lakhs = formData.currentLakhs;
                          updateField({
                            currentThousands: thousands,
                            currentCTC:
                              lakhs === "" || thousands === ""
                                ? null
                                : parseInt(lakhs, 10) * 100000 +
                                  parseInt(thousands, 10) * 1000,
                          });
                        }}
                      >
                        <option disabled value="">
                          In Thousands
                        </option>
                        {[...Array(100)].map((_, i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <FieldError message={errors.currentCTC} />

                  <label className="fieldlabels">Expected CTC (PA.) *</label>
                  <div className="row">
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        value={formData.expectedLakhs}
                        onChange={(e) => {
                          const lakhs = e.target.value;
                          const thousands = formData.expectedThousands;
                          updateField({
                            expectedLakhs: lakhs,
                            expectedCTC:
                              lakhs === "" || thousands === ""
                                ? null
                                : parseInt(lakhs, 10) * 100000 +
                                  parseInt(thousands, 10) * 1000,
                          });
                        }}
                      >
                        <option disabled value="">
                          In Lakhs
                        </option>
                        {[...Array(21)].map((_, i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-control"
                        value={formData.expectedThousands}
                        onChange={(e) => {
                          const thousands = e.target.value;
                          const lakhs = formData.expectedLakhs;
                          updateField({
                            expectedThousands: thousands,
                            expectedCTC:
                              lakhs === "" || thousands === ""
                                ? null
                                : parseInt(lakhs, 10) * 100000 +
                                  parseInt(thousands, 10) * 1000,
                          });
                        }}
                      >
                        <option disabled value="">
                          In Thousands
                        </option>
                        {[...Array(100)].map((_, i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <FieldError message={errors.expectedCTC} />

                  <label className="fieldlabels">When can you join? *</label>
                  <input
                    type="date"
                    name="joinDate"
                    value={formData.joinDate}
                    onChange={(e) =>
                      updateField({ joinDate: e.target.value })
                    }
                  />
                  <FieldError message={errors.joinDate} />
                </div>

                <input
                  type="button"
                  className="next action-button"
                  value={checkingDuplicate ? "Checking..." : "Next"}
                  onClick={nextStep}
                  disabled={checkingDuplicate}
                />
                <input
                  type="button"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={prevStep}
                  disabled={checkingDuplicate}
                />
              </fieldset>

              {/* STEP 3 */}
              <fieldset className={stepClass(3)}>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title text-black">
                        Professional Details:
                      </h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 3 - 4</h2>
                    </div>
                  </div>

                  <label className="fieldlabels">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Number"
                    value={formData.phone}
                    onChange={(e) => updateField({ phone: e.target.value })}
                  />
                  <FieldError message={errors.phone} />

                  <label className="fieldlabels">Upload Your Resume *</label>
                  <input
                    ref={resumeInputRef}
                    type="file"
                    name="resume"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      if (file && !isAllowedResume(file)) {
                        e.target.value = "";
                        updateField({ resume: null });
                        setErrors((prev) => ({
                          ...prev,
                          resume:
                            "Only PDF, DOC, DOCX, JPG, and PNG resume files are allowed.",
                        }));
                        return;
                      }
                      if (file && file.size > MAX_RESUME_BYTES) {
                        e.target.value = "";
                        updateField({ resume: null });
                        setErrors((prev) => ({
                          ...prev,
                          resume:
                            "Resume file is too large. Please upload a file smaller than 3MB.",
                        }));
                        return;
                      }
                      updateField({ resume: file });
                    }}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                  />
                  {formData.resume && (
                    <p className="field-hint selected-file">
                      Selected file: {formData.resume.name} (kept when you go
                      Previous/Next)
                    </p>
                  )}
                  <FieldError message={errors.resume} />
                  <span className="text-muted file-hint">
                    Allowed file types: PDF, DOC, DOCX, JPG, PNG (Max size: less
                    than 3MB)
                  </span>

                  <div className="row pt-3">
                    <div className="col-md-6">
                      <label className="fieldlabels">
                        Last company you worked with
                      </label>
                      <input
                        type="text"
                        name="lastCompany"
                        placeholder="Last Company"
                        value={formData.lastCompany}
                        onChange={(e) =>
                          updateField({ lastCompany: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="fieldlabels">Notice Period</label>
                      <select
                        className="form-control"
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={(e) =>
                          updateField({ noticePeriod: e.target.value })
                        }
                      >
                        <option value="">In Days</option>
                        {[...Array(85)].map((_, i) => (
                          <option key={i} value={i + 6}>
                            {i + 6} days
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <input
                  type="button"
                  className="next action-button"
                  value="Next"
                  onClick={nextStep}
                />
                <input
                  type="button"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={prevStep}
                />
              </fieldset>

              {/* STEP 4 */}
              <fieldset className={stepClass(4)}>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title text-black">
                        Additional Information:
                      </h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 4 - 4</h2>
                    </div>
                  </div>

                  <label className="fieldlabels">
                    Reference / Comments / Questions
                  </label>
                  <textarea
                    name="comments"
                    maxLength="200"
                    value={formData.comments}
                    onChange={(e) =>
                      updateField({ comments: e.target.value })
                    }
                  />
                </div>

                <input
                  type="button"
                  className="next action-button"
                  value={submitting ? "Submitting..." : "Submit"}
                  onClick={handleSubmit}
                  disabled={submitting}
                />
                <input
                  type="button"
                  className="previous action-button-previous"
                  value="Previous"
                  onClick={prevStep}
                  disabled={submitting}
                />
              </fieldset>

              {/* SUCCESS */}
              {step === 5 && (
                <fieldset>
                  <div className="form-card text-center">
                    <h2 className="text-black fw-bold mb-5">SUCCESS !</h2>
                    <div className="mb-4">
                      <FaCheckCircle size={60} className="text-success" />
                    </div>
                    <h5 className="text-danger">
                      Your job request has been received
                    </h5>
                    <Link href="/" className="btn btn-danger mt-4">
                      Back To Home
                    </Link>
                  </div>
                </fieldset>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MultiStepSignup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MultiStepSignupInner />
    </Suspense>
  );
}
