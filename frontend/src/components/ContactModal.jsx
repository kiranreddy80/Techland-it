import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactModal.css";

const ContactModal = ({ openModal, setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* New Validation Logic */
  const [errors, setErrors] = useState({});

  // Seasonal Festival Configuration for India
  const getSeasonalFestival = () => {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    const day = now.getDate();

    // Define Indian festivals with date ranges and icons
    const festivals = [
      {
        name: "Christmas",
        startMonth: 12,
        startDay: 20,
        endMonth: 12,
        endDay: 30,
        icon: "/assets/cdn-images/cdn_c15b8b8c17.png",
        bgColor: "#c94b4b20",
      },
      {
        name: "New Year",
        startMonth: 31,
        startDay: 1,
        endMonth: 1,
        endDay: 7,
        icon: "/assets/icons/party-popper.png",
        bgColor: "#f093fb20",
      },
      {
        name: "Sankranti",
        startMonth: 1,
        startDay: 10,
        endMonth: 1,
        endDay: 18,
        icon: "/assets/cdn-images/cdn_b5ad1593e5.png",
        bgColor: "#fa709a20",
      },
      {
        name: "Holi",
        startMonth: 3,
        startDay: 1,
        endMonth: 3,
        endDay: 15,
        icon: "/assets/icons/holi.png",
        bgColor: "#ff9a9e20",
      },
      {
        name: "Ugadi",
        startMonth: 3,
        startDay: 20,
        endMonth: 4,
        endDay: 5,
        icon: "/assets/cdn-images/cdn_0bb6e1fe94.png",
        bgColor: "#a8edea20",
      },
      {
        name: "Ramzan",
        startMonth: 3,
        startDay: 10,
        endMonth: 4,
        endDay: 10,
        icon: "/assets/cdn-images/cdn_84635920cb.png",
        bgColor: "#667eea20",
      },
      {
        name: "Independence Day",
        startMonth: 8,
        startDay: 10,
        endMonth: 8,
        endDay: 20,
        icon: "/assets/cdn-images/cdn_40f8ebdbf4.png",
        bgColor: "#ff993320",
      },
      {
        name: "Ganesh Chaturthi",
        startMonth: 8,
        startDay: 25,
        endMonth: 9,
        endDay: 10,
        icon: "/assets/icons/ganesh.png",
        bgColor: "#f6d36520",
      },
      {
        name: "Onam",
        startMonth: 8,
        startDay: 20,
        endMonth: 9,
        endDay: 5,
        icon: "/assets/icons/flower-bouquet.png",
        bgColor: "#ffecd220",
      },
      {
        name: "Dussehra",
        startMonth: 10,
        startDay: 1,
        endMonth: 10,
        endDay: 15,
        icon: "/assets/icons/bow-and-arrow.png",
        bgColor: "#ff6e7f20",
      },
      {
        name: "Diwali",
        startMonth: 10,
        startDay: 20,
        endMonth: 11,
        endDay: 10,
        icon: "/assets/icons/diya.png",
        bgColor: "#f093fb20",
      },
    ];

    // Check if current date falls within any festival range
    for (const festival of festivals) {
      const isInRange =
        (month === festival.startMonth && day >= festival.startDay) ||
        (month === festival.endMonth && day <= festival.endDay) ||
        (month > festival.startMonth && month < festival.endMonth);

      if (isInRange) {
        return festival;
      }
    }

    // Default icon when no festival
    return {
      name: "Contact",
      icon: "/assets/cdn-images/cdn_3f6838ccc1.png",
      bgColor: "#667eea20",
    };
  };

  const currentFestival = getSeasonalFestival();

  // Handle external modal trigger (from navbar button)
  useEffect(() => {
    if (openModal) {
      setIsOpen(true);
      if (setOpenModal) {
        setOpenModal(false); // Reset the trigger
      }
    }
  }, [openModal, setOpenModal]);

  useEffect(() => {
    if (location.pathname === "/") {
      // Show modal 6 seconds after page load (3.5s loader + 2.5s delay)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }, 300);
  };

  const validateForm = () => {
    let tempErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name should contain only letters";
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    // Phone validation (Optional but if present must be valid)
    if (formData.phone && !/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ""))) {
      tempErrors.phone = "Phone number must be 10-15 digits";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for specific field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      setIsSubmitting(false);
      return;
    }

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        subject: "Website Inquiry (Modal)",
        message: formData.message,
      };

      await api.post("/contact", dataToSend);

      toast.success("Message sent successfully! We'll get back to you soon.");

      setTimeout(() => {
        handleClose();
      }, 2000);

      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "Failed to submit form. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="contact-modal-overlay" onClick={handleClose}>
        <div
          className="contact-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <button type="button" className="contact-modal-close" onClick={handleClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="contact-modal-content">
            <div className="contact-modal-left">
              <div className="contact-modal-header">
                <div
                  className="contact-modal-icon seasonal-icon"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    boxShadow: `0 10px 40px ${currentFestival.bgColor}`,
                  }}
                >
                  <img
                    src={currentFestival.icon}
                    alt={currentFestival.name}
                    className="festival-icon-img"
                  />
                </div>
                <h2 className="contact-modal-title">Get In Touch</h2>
                <p className="contact-modal-subtitle">
                  {currentFestival.name !== "Contact" && (
                    <span className="festival-greeting">
                      Happy {currentFestival.name}! 🎉
                      <br />
                    </span>
                  )}
                  Let's discuss how we can help bring your vision to life.
                </p>
              </div>

              <div className="contact-modal-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <img
                      src="/assets/icons/email.png"
                      alt="Email"
                      width="48"
                      height="48"
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@techlanditsolutions.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <img
                      src="/assets/icons/phone.png"
                      alt="Phone"
                      width="48"
                      height="48"
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 78423 85604</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <img
                      src="/assets/icons/location.png"
                      alt="Location"
                      width="48"
                      height="48"
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-modal-right">
              <form
                onSubmit={handleSubmit}
                onKeyDown={handleKeyDown}
                className="contact-form"
              >
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Please enter your name"
                    className={errors.name ? "error-input" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span
                      className="error-text"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "5px",
                        display: "block",
                      }}
                    >
                      <i className="fas fa-exclamation-circle me-1"></i>{" "}
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please enter your email"
                    className={errors.email ? "error-input" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span
                      className="error-text"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "5px",
                        display: "block",
                      }}
                    >
                      <i className="fas fa-exclamation-circle me-1"></i>{" "}
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Please enter your mobile number"
                    className={errors.phone ? "error-input" : ""}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <span
                      className="error-text"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "5px",
                        display: "block",
                      }}
                    >
                      <i className="fas fa-exclamation-circle me-1"></i>{" "}
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="3"
                    className={errors.message ? "error-input" : ""}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && (
                    <span
                      className="error-text"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "5px",
                        display: "block",
                      }}
                    >
                      <i className="fas fa-exclamation-circle me-1"></i>{" "}
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <img
                        src="/assets/icons/paper-plane.png"
                        alt="Send"
                        width="22"
                        height="22"
                        style={{
                          objectFit: "contain",
                          display: "inline-block",
                        }}
                        loading="lazy"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
