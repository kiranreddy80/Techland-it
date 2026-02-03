import React, { useState } from "react";
import SEO from "../components/SEO";
import { getSEO } from "../config/seoConfig";
import { Link } from "react-router-dom";
import { servicesData } from "./services/servicesData";

// 3D Icon mapping for each service (Local paths)
const serviceIcons = {
  "mobile-app-development": "/assets/img/service-icons/smartphone.png",
  "web-development": "/assets/img/service-icons/source-code.png",
  "digital-marketing": "/assets/img/service-icons/megaphone.png",
  "custom-software-development": "/assets/img/service-icons/software.png",
  "ui-ux-design": "/assets/img/service-icons/design.png",
  "staffing-services": "/assets/img/service-icons/user-group-man-man.png",
};

function Services() {
  const seo = getSEO("services");
  const [expandedServices, setExpandedServices] = useState({});

  const toggleDescription = (serviceId) => {
    setExpandedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const truncateText = (text, limit = 120) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      {/* Breadcrumb Section */}
      <div
        className="breadcumb-area style2 bg-smoke4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("/assets/img/bg/breadcumb-bg.jpg")' }}
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">Our Services</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <section className="space-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="title-area text-center mb-55"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span className="sub-title style1 text-anime-style-2">
                  What We Offer
                </span>
                <h2 className="sec-title text-anime-style-3">
                  Comprehensive IT Solutions for Your Business
                </h2>
                <p className="sec-text mt-3">
                  From mobile apps to web development, we provide end-to-end
                  technology solutions that drive growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Beautiful Boxes */}
      <section className="service-area4 space-bottom overflow-hidden">
        <div className="container">
          <div className="row gy-4">
            {servicesData.map((service, index) => {
              const isExpanded = expandedServices[service.id];
              const description = service.description || "";
              const shouldShowToggle = description.length > 120;

              return (
                <div
                  key={service.id}
                  className="col-md-6 col-lg-4"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="service-item sv-card7 sv-card8 th-ani">
                    <div className="service-img position-relative">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                          borderRadius: "15px 15px 0 0",
                        }}
                      />
                      {/* 3D Icon - Local */}
                      <div
                        className="service-icon"
                        style={{
                          position: "absolute",
                          bottom: "-30px",
                          left: "30px",
                          width: "70px",
                          height: "70px",
                          background: "white",
                          borderRadius: "15px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 10px 30px rgba(22, 49, 152, 0.3)",
                          padding: "8px",
                        }}
                      >
                        <img
                          src={serviceIcons[service.id]}
                          alt={service.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>

                    <div className="service-content sv-content6 text-start pt-3">
                      {/* White Badge */}
                      <span
                        className="badge mb-3"
                        style={{
                          background: "#fff",
                          color: "#163198",
                          padding: "6px 16px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          border: "1px solid #e2e8f0",
                        }}
                      >
                        {service.category || "IT Services"}
                      </span>
                      <h3 className="box-title mb-3">
                        <Link
                          to={`/services/${service.id}`}
                          style={{
                            color: "#1e293b",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {service.title}
                        </Link>
                      </h3>

                      {/* Description with Read More/Less */}
                      <div className="service-description mb-4">
                        <p className="service-text mb-2">
                          {isExpanded
                            ? description
                            : truncateText(description, 120)}
                        </p>
                        {shouldShowToggle && (
                          <button
                            onClick={() => toggleDescription(service.id)}
                            style={{
                              background: "none",
                              border: "none",
                              color: "#163198",
                              cursor: "pointer",
                              fontSize: "14px",
                              fontWeight: "600",
                              padding: "0",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            {isExpanded ? (
                              <>
                                Read Less
                                <i className="fas fa-chevron-up"></i>
                              </>
                            ) : (
                              <>
                                Read More
                                <i className="fas fa-chevron-down"></i>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      <div className="service-features mb-4">
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {service.details.slice(0, 3).map((detail, idx) => (
                            <li
                              key={idx}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "8px",
                                fontSize: "14px",
                                color: "#64748b",
                              }}
                            >
                              <i
                                className="fas fa-check-circle"
                                style={{ color: "#163198", fontSize: "16px" }}
                              ></i>
                              {detail.subTitle}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={`/services/${service.id}`}
                        className="th-btn style4 th-icon"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        Learn More
                        <i className="fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Shapes */}
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-top="0"
          data-left="0"
        >
          <img src="/assets/img/shape/spider-shape.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-bottom="0"
          data-right="0"
        >
          <img src="/assets/img/shape/spider-right-shape.png" alt="shape" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="about-area position-relative overflow-hidden space"
        style={{ background: "#f8f9fa" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="img-box15 d-flex justify-content-center">
                <div className="img1 d-none d-md-block">
                  <img src="/assets/img/normal/aboutt_15_3.png" alt="About" />
                  <img src="/assets/img/normal/about_15_2.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="/assets/img/normal/about_15_3.png" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-15-title-box ps-xl-3 ms-xl-5">
                <div className="title-area mb-20">
                  <span className="sub-title style1 text-anime-style-2">
                    Why Choose Us
                  </span>
                  <h2 className="sec-title mb-25 text-anime-style-3">
                    We Deliver Excellence in Every Project
                  </h2>
                  <p className="sec-text mb-30">
                    With years of experience and a dedicated team of experts, we
                    provide innovative solutions that transform businesses and
                    drive success.
                  </p>
                </div>

                <div className="about-feature-wrap">
                  <div className="about-feature-list">
                    <ul>
                      <li className="wow fadeInUp" data-wow-delay=".4s">
                        <span className="about-feature-icon">
                          <img
                            src="/assets/img/icon/checkmark.svg"
                            alt="checkmark icon"
                          />
                        </span>
                        Expert Team of Developers & Designers
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".5s">
                        <span className="about-feature-icon">
                          <img
                            src="/assets/img/icon/checkmark.svg"
                            alt="checkmark icon"
                          />
                        </span>
                        On-Time Project Delivery Guaranteed
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".6s">
                        <span className="about-feature-icon">
                          <img
                            src="/assets/img/icon/checkmark.svg"
                            alt="checkmark icon"
                          />
                        </span>
                        24/7 Customer Support & Maintenance
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".7s">
                        <span className="about-feature-icon">
                          <img
                            src="/assets/img/icon/checkmark.svg"
                            alt="checkmark icon"
                          />
                        </span>
                        Competitive Pricing & Flexible Plans
                      </li>
                      <li className="wow fadeInUp" data-wow-delay=".8s">
                        <span className="about-feature-icon">
                          <img
                            src="/assets/img/icon/checkmark.svg"
                            alt="checkmark icon"
                          />
                        </span>
                        Latest Technologies & Best Practices
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-35 wow fadeInUp" data-wow-delay=".9s">
                  <Link to="/contact" className="th-btn style4 th-icon">
                    Get Started Today
                    <i className="fa-regular fa-rocket"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta-area space"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div
            className="cta-box"
            style={{
              background: "linear-gradient(135deg, #163198 0%, #0a1a5e 100%)",
              padding: "60px 40px",
              borderRadius: "20px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2
                  className="h2 mb-3"
                  style={{ color: "white", fontSize: "36px" }}
                >
                  Ready to Transform Your Business?
                </h2>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "18px",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: "1.6",
                  }}
                >
                  Let's discuss your project and create a custom solution that
                  meets your unique needs. Get a free consultation today!
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    to="/contact"
                    className="th-btn style3"
                    style={{
                      background: "white",
                      color: "#163198",
                      padding: "15px 35px",
                      borderRadius: "50px",
                      fontWeight: "600",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    Get Free Consultation
                    <i className="fa-regular fa-comments"></i>
                  </Link>
                  <Link
                    to="/portfolio"
                    className="th-btn"
                    style={{
                      background: "transparent",
                      color: "white",
                      padding: "15px 35px",
                      borderRadius: "50px",
                      fontWeight: "600",
                      textDecoration: "none",
                      border: "2px solid white",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    View Our Work
                    <i className="fa-regular fa-eye"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
