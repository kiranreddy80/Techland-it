import React, { useState } from "react";
import api from "../../services/api";
// Import the toast library
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    number: "",
  });
  const [errors, setErrors] = useState({});

  // State for loading button
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name should contain only letters";
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      tempErrors.email = "Email must be a valid @gmail.com address";
    }

    // Phone validation
    if (!formData.number) {
      tempErrors.number = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.number)) {
      tempErrors.number = "Phone number must be 10 digits and start with 6-9";
    }

    // Message validation
    if (!formData.message) {
      tempErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.trim().length < 2)
        error = "Name must be at least 2 characters";
      else if (!/^[A-Za-z\s]+$/.test(value))
        error = "Name should contain only letters";
    }
    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value))
        error = "Email must be a valid @gmail.com address";
    }
    if (name === "number") {
      if (!value) error = "Phone number is required";
      else if (!/^[6-9]\d{9}$/.test(value))
        error = "Phone number must be 10 digits and start with 6-9";
    }
    if (name === "message") {
      if (!value) error = "Message is required";
      else if (value.length < 10)
        error = "Message must be at least 10 characters";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFocus = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      setLoading(false);
      return;
    }

    try {
      const dataToSend = {
        name: formData.name,
        phone: formData.number,
        email: formData.email,
        subject: formData.subject || "Home Page Quote Inquiry",
        message: formData.message,
      };

      await api.post("/contact", dataToSend);

      // Show success toast
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        number: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit form. Please check your connection and try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  return (
    <div>
      <style>{`
        .transparent-form .form-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: none !important;
        }
        
        /* Fix for dropdown options visibility */
        .transparent-form select option {
          background-color: #0b1422 !important;
          color: white !important;
        }

        /* Target active/hover states of options if possible */
        .transparent-form select option:hover,
        .transparent-form select option:focus,
        .transparent-form select option:active {
          background-color: #1c246d !important;
        }

        /* Ensure consistent height for inputs and selects, but not textarea */
        .transparent-form .transparent-input:not(textarea) {
          height: 60px !important;
        }
        
        .transparent-form .transparent-input {
          background-color: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          padding-left: 20px !important;
          border-radius: 12px !important;
          transition: all 0.3s ease;
        }
        
        .transparent-form .transparent-input:hover {
          background-color: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        
        .transparent-form .transparent-input:focus {
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: #3d4db7 !important;
          box-shadow: 0 0 15px rgba(61, 77, 183, 0.2);
          outline: none;
        }

        .transparent-form textarea.transparent-input {
          height: auto !important;
          padding-top: 15px !important;
          min-height: 120px;
        }
      `}</style>

      <div
        className="history-sec1 overflow-hidden"
        id="story-sec"
        data-sec-pos="bottom-half"
      >
        <div>
          <div className="">
            {/* The main background image is applied here */}
            <div
              className="history-area overflow-hidden space"
              style={{
                backgroundColor: "#0b1422",
                position: "relative",
                color: "white",
              }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* Background Shapes */}
              <img
                src="/assets/img/ai-shape-left.webp"
                alt=""
                className="ai-shape-left"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  height: "400px",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
                loading="lazy"
              />
              <img
                src="/assets/img/ai-shape-right.webp"
                alt=""
                className="ai-shape-right"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  height: "400px",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
                loading="lazy"
              />
              <div
                className="col-lg-8 mx-auto"
                style={{ position: "relative", zIndex: 1 }}
              >
                <div className="history-content">
                  <div>
                    <div className="title-area text-center">
                      <span className="sub-title">
                        Let Us Elevate Your Projects With Our Skills
                      </span>
                      <h4>
                        <span className="scroll-text-ani">
                          Get a Quote from a Top Mobile App Development Company
                        </span>
                      </h4>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    {/* RIGHT COLUMN: For the Form */}
                    <div>
                      <form
                        onSubmit={handleSubmit}
                        onKeyDown={handleKeyDown}
                        method="POST"
                        className="transparent-form"
                      >
                        <div className="row g-3">
                          {/* Form Fields are now in a 2-column grid */}
                          <div
                            className="form-group col-md-6"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="100"
                          >
                            <input
                              type="text"
                              className={`form-control transparent-input ${errors.name ? "is-invalid" : ""
                                }`}
                              name="name"
                              id="name"
                              placeholder="First Name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={handleFocus}
                            />
                            <img
                              src="/assets/img/3d-icons/user-male-circle.png"
                              alt="user icon"
                              width="24"
                              height="24"
                              style={{ objectFit: "contain" }}
                              loading="lazy"
                            />
                            {errors.name && (
                              <div
                                className="mt-1 fs-6 small"
                                style={{ color: "red" }}
                              >
                                <i className="fas fa-exclamation-circle me-1"></i>
                                {errors.name}
                              </div>
                            )}
                          </div>
                          <div
                            className="form-group col-md-6"
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="200"
                          >
                            <input
                              type="email"
                              className={`form-control transparent-input ${errors.email ? "is-invalid" : ""
                                }`}
                              name="email"
                              id="email"
                              placeholder="Your Mail (gmail.com only)"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={handleFocus}
                            />
                            <img
                              src="/assets/img/3d-icons/email.png"
                              alt="mail icon"
                              width="24"
                              height="24"
                              style={{ objectFit: "contain" }}
                              loading="lazy"
                            />
                            {errors.email && (
                              <div
                                className="mt-1 fs-6 small"
                                style={{ color: "red" }}
                              >
                                <i className="fas fa-exclamation-circle me-1"></i>
                                {errors.email}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              type="tel"
                              className={`form-control transparent-input ${errors.number ? "is-invalid" : ""
                                }`}
                              name="number"
                              id="number"
                              placeholder="Your Number"
                              value={formData.number}
                              onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "");
                                if (val.length <= 10) {
                                  handleChange({
                                    target: { name: "number", value: val },
                                  });
                                }
                              }}

                              onFocus={handleFocus}
                              maxLength="10"
                            />
                            <img
                              src="/assets/img/3d-icons/phone.png"
                              alt="phone icon"
                              width="24"
                              height="24"
                              style={{ objectFit: "contain" }}
                              loading="lazy"
                            />
                            {errors.number && (
                              <div
                                className="mt-1 fs-6 small"
                                style={{ color: "red" }}
                              >
                                <i className="fas fa-exclamation-circle me-1"></i>
                                {errors.number}
                              </div>
                            )}
                          </div>
                          <div className="form-group col-12">
                            <textarea
                              name="message"
                              id="message"
                              cols="30"
                              rows="3"
                              className={`form-control transparent-input ${errors.message ? "is-invalid" : ""
                                }`}
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                              onFocus={handleFocus}
                            ></textarea>
                            <img
                              src="/assets/icons/chat.png"
                              alt="chat icon"
                              width="24"
                              height="24"
                              style={{ objectFit: "contain" }}
                              loading="lazy"
                            />
                            {errors.message && (
                              <div
                                className="mt-1 fs-6 small"
                                style={{ color: "red" }}
                              >
                                <i className="fas fa-exclamation-circle me-1"></i>
                                {errors.message}
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="form-messages mb-0 mt-3"></p>

                        <div className="form-btn-wrapp">
                          <div className="form-btn">
                            <button
                              type="submit"
                              className="th-btn style5 th-radius"
                              disabled={loading}
                            >
                              {loading ? "Submitting..." : "Send Message"}{" "}
                              <i className="fa-regular fa-paper-plane"></i>
                            </button>
                          </div>
                          <div className="contact-info">
                            <p className="contact-info_link">
                              <a href="tel: 78423 85604"> 78423 85604</a>
                            </p>
                            <div className="contact-info_icon">
                              <a href="tel: 78423 85604">
                                <img
                                  src="/assets/img/3d-icons/phone.png"
                                  alt="call icon"
                                  width="28"
                                  height="28"
                                  style={{ objectFit: "contain" }}
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default HomeContactUs;
