import React, { useState } from "react";
import axios from "axios";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
// Import the toast library and its CSS
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const seo = getSEO("contact");
  // State for form data - UPDATED from ContactUs
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // State for loading button
  const [loading, setLoading] = useState(false);

  // Validation function
  const validateForm = () => {
    let tempErrors = {};

    // Name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = "Name is required";
    } else if (formData.firstName.trim().length < 2) {
      tempErrors.firstName = "Name must be at least 2 characters";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      tempErrors.firstName = "Name should contain only letters";
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    // Phone validation
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
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

  // Handle input changes - UPDATED to match new state keys
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for specific field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle form submission with validation - UPDATED from ContactUs
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      setLoading(false);
      return;
    }

    try {
      const API_URL = "https://formsubmit.co/ajax/info@techlanditsolutions.com";

      await axios.post(
        API_URL,
        {
          name: formData.firstName, // Using firstName as name
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Show success toast
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form on success - UPDATED to match new state keys
      setFormData({ firstName: "", phone: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error toast
      toast.error(
        "Failed to submit form. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
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

      {/* --- Breadcrumb Section - Content UPDATED --- */}
      <div
        className="breadcumb-area style2 bg-smoke4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: "url('assets/img/bg/breadcumb-bg.jpg')" }}
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">Contact Us</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- Contact Info Section - Content UPDATED --- */}
      <div
        className="contact-area space space-extra-bottom overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="contact-wrapp2 mb-60 smoke-bg">
            <div className="contact-infobox-top">
              <div className="row align-items-center justify-content-between text-center">
                <div className="col-xl-3 col-lg-3">
                  <div className="contact-shape-left text-sm-start">
                    <img
                      src="/assets/img/3d-icons/user-male-circle.png"
                      alt="Customer support icon"
                      width="150"
                      height="150"
                      loading="lazy"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="title-area contact-titlebox2 text-center">
                    <span className="sub-title">Work With Us</span>
                    {/* --- Title and Description UPDATED --- */}
                    <h3 className="sec-title">Contact Techland IT Solutions</h3>
                    <p className="sec-text">
                      Get in touch with Techland IT Solutions for expert digital
                      marketing, web development, and app development services
                      in Hyderabad.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="contact-shape-right text-sm-end">
                    <img
                      src="/assets/icons/communication.png"
                      alt="Communication icon"
                      width="150"
                      height="150"
                      loading="lazy"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-infobox-bottom d-xl-flex align-items-center justify-content-between">
              {/* --- Contact Details UPDATED --- */}
              <div className="about-contact-grid inner-style">
                <span className="about-contact-icon">
                  <img
                    src="/assets/icons/phone.png"
                    alt="Phone"
                    width="48"
                    height="48"
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                </span>
                <div className="about-contact-details">
                  <span className="sec-text">Call Us For Query</span>
                  <p className="about-contact-details-text">
                    <a href="tel:+917842385604">+91 784 238 5604</a>
                  </p>
                </div>
              </div>
              <div className="about-contact-grid inner-style">
                <span className="about-contact-icon">
                  <img
                    src="/assets/icons/email.png"
                    alt="Email"
                    width="48"
                    height="48"
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                </span>
                <div className="about-contact-details">
                  <span className="sec-text">Email Us Anytime</span>
                  <p className="about-contact-details-text">
                    <a href="mailto:info@techlanditsolutions.com">
                      info@techlanditsolutions.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="about-contact-grid inner-style">
                <span className="about-contact-icon">
                  <img
                    src="/assets/icons/location.png"
                    alt="Location"
                    width="48"
                    height="48"
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                </span>
                <div className="about-contact-details">
                  <span className="sec-text">Visit Our Office</span>
                  <p className="about-contact-details-text">
                    <a
                      href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kavuri Hills, Madhapur, Hyderabad
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Form Section - Fields and Logic UPDATED --- */}
          <div className="contact-form-wrapp2">
            <div className="row">
              <div
                className="col-xl-7 order-1 order-xl-0"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="contact-formbox">
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form ajax-contact"
                  >
                    <div className="row">
                      {/* --- Name field UPDATED --- */}
                      <div className="col-sm-6 form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          name="firstName"
                          id="name3"
                          placeholder="Your Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          minLength="2"
                          pattern="[A-Za-z\s]+"
                          title="Please enter valid name (letters only)"
                        />
                        <img
                          src="/assets/icons/user-male-circle.png"
                          alt="User icon"
                          width="24"
                          height="24"
                          loading="lazy"
                          style={{ objectFit: "contain" }}
                        />
                        {errors.firstName && (
                          <div className="text-danger mt-1 fs-6 small">
                            <i className="fas fa-exclamation-circle me-1"></i>
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 form-group">
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <img
                          src="/assets/icons/email.png"
                          alt="Email icon"
                          width="24"
                          height="24"
                          loading="lazy"
                          style={{ objectFit: "contain" }}
                        />
                        {errors.email && (
                          <div className="text-danger mt-1 fs-6 small">
                            <i className="fas fa-exclamation-circle me-1"></i>
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 form-group">
                        <input
                          type="tel"
                          className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                          name="phone"
                          id="number"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          pattern="[0-9]{10,15}"
                          title="Phone number must be between 10 and 15 digits"
                        />
                        <img
                          src="/assets/icons/phone.png"
                          alt="Phone icon"
                          width="24"
                          height="24"
                          loading="lazy"
                          style={{ objectFit: "contain" }}
                        />
                        {errors.phone && (
                          <div className="text-danger mt-1 fs-6 small">
                            <i className="fas fa-exclamation-circle me-1"></i>
                            {errors.phone}
                          </div>
                        )}
                      </div>
                      <div className="col-sm-6 form-group">
                        {/* Empty div for layout alignment */}
                      </div>
                      <div className="form-group col-12">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="3"
                          className={`form-control ${
                            errors.message ? "is-invalid" : ""
                          }`}
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          minLength="10"
                          title="Message must be at least 10 characters long"
                        ></textarea>
                        <img
                          src="/assets/icons/chat.png"
                          alt="Message icon"
                          width="24"
                          height="24"
                          loading="lazy"
                          style={{ objectFit: "contain" }}
                        />
                        {errors.message && (
                          <div className="text-danger mt-1 fs-6 small">
                            <i className="fas fa-exclamation-circle me-1"></i>
                            {errors.message}
                          </div>
                        )}
                      </div>
                      <div className="form-btn col-12">
                        <button
                          type="submit"
                          className="th-btn"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit Now"}
                          <img
                            src="/assets/icons/paper-plane.png"
                            alt="Send icon"
                            width="22"
                            height="22"
                            loading="lazy"
                            style={{ objectFit: "contain" }}
                          />
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3"></p>
                  </form>
                </div>
              </div>
              <div
                className="col-xl-5 order-0 order-xl-1"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="contact-thumb">
                  <img
                    src="assets/img/normal/contact-2-img.jpg"
                    alt="Contact us - Techland IT Solutions team"
                    width="600"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Map Section - Content UPDATED --- */}
      <div className="" data-aos="zoom-in" data-aos-duration="1200">
        <div className="contact-map style2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.263340846998!2d78.37701741037169!3d17.447105483381275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb938fa04b952d%3A0x2d0c448b127e06e3!2sTechland%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1737129743764!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Techland IT Solutions location map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
