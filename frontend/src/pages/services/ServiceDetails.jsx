import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { servicesData } from "./servicesData";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import UsedToolsTab from "./UsedToolsTab";
import HomeFAQ from "../Home/HomeFAQ";
import HomeContact from "../Home/HomeContactUs";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service data based on the ID parameter
    const foundService = servicesData.find((service) => service.id === id);
    setService(foundService);
    setLoading(false);
  }, [id]);

  // If service not found, display a message
  if (!loading && !service) {
    return (
      <div className="container py-5 text-center">
        <div className="error-section">
          <h2 className="error-title">Service Not Found</h2>
          <p className="error-message">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/services" className="th-btn">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>
          {service.metaTitle || `${service.title} - Techland IT Solutions`}
        </title>
        <meta
          name="description"
          content={service.metaDescription || service.description}
        />
        <meta
          name="keywords"
          content={`${service.title}, Techland IT Solutions, Hyderabad, ${service.title} Company, Best ${service.title} Services`}
        />
        <meta
          property="og:title"
          content={service.metaTitle || service.title}
        />
        <meta
          property="og:description"
          content={service.metaDescription || service.description}
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`https://techlanditsolutions.com/services/${service.id}`}
        />
      </Helmet>
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
              <h1 className="breadcumb-title">{service.title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>{service.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section with Service Info */}
      <section
        className="service-hero-area pace"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row align-items-center py-4">
            <div className="col-lg-6">
              <div className="service-hero-content">
                <div className="service-badge mb-25">
                  <span className={`badge ${service.bgColor} text-dark`}>
                    {service.title}
                  </span>
                </div>
                <h2 className="service-hero-title mb-30">
                  {service.aboutSubtitle}
                </h2>
                <p className="service-hero-text mb-40">{service.description}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-hero-image">
                <div className="service-hero-img">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section
        className="service-area4 space smoke-bg overflow-hidden"
        id="service-sec"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title-area service-4-title-box mb-55 text-center">
                <span className="sub-title text-anime-style-2">
                  Our Services
                </span>
                <h2 className="sec-title text-anime-style-3">
                  {service.servicesTitle}
                </h2>
              </div>
            </div>
          </div>

          <div className="slider-area slider-drag-wrap">
            <Swiper
              className="swiper th-slider has-shadow"
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1300: { slidesPerView: 4 },
              }}
            >
              {service.details.map((detail, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="service-item sv-card7 sv-card8 th-ani"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                  >
                    <div className="service-img position-relative">
                      <img
                        src={service.detailImages[index]}
                        alt={detail.subTitle}
                      />
                    </div>

                    <div className="service-content sv-content6 text-start">
                      <h3 className="box-title">{detail.subTitle}</h3>

                      <p className="service-text">{detail.subDescription}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div
          className="shape-mockup jump d-none d-xl-block"
          data-top="0"
          data-left="0"
        >
          <img src="/assets/img/shape/spider-shape.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-bottom="-5%"
          data-right="0"
        >
          <img src="/assets/img/shape/spider-right-shape.png" alt="shape" />
        </div>
      </section>
      {/* About Section */}
      <div
        className="about-area  position-relative overflow-hidden space"
        id="about-sec"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-6">
              <div className="img-box6">
                <div className="img1 reveal">
                  <img src="/assets/img/normal/bestMobileApp.png"  alt="About" />
                </div>
                <div className="img2 reveal">
                  <img src="/assets/img/normal/about_6_2.png" alt="About" />
                </div>
                <div className="img3 reveal">
                  <img src="/assets/img/normal/about_6_3.png" alt="About" />
                </div>
              </div>
            </div> */}
            <div className="col-xl-6">
              <div className="img-box6">
                <div className="img1 reveal">
                  <img
                    src="/assets/img/our_Services/digital_marketing/about_images/about_6_1.jpg"
                    alt="About"
                  />
                </div>
                <div className="img2 reveal">
                  <img
                    src="/assets/img/our_Services/digital_marketing/about_images/about_6_2.jpg"
                    alt="About"
                  />
                </div>
                <div className="img3 reveal">
                  <img
                    src="/assets/img/our_Services/digital_marketing/about_images/about_6_3.jpg"
                    alt="About"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xl-3 ms-xl-3 ps-xl-5 ms-xxl-5">
                <div className="title-area about-7-titlebox mb-20">
                  <span className="sub-title style1 text-anime-style-2">
                    {service.aboutTitle}
                  </span>
                  <h2 className="sec-title mb-20 text-anime-style-3">
                    {service.aboutSubtitle}
                  </h2>
                  <p
                    className="sec-text mb-30 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    {service.aboutContent}
                  </p>
                </div>
                <div className="about-item-wrap">
                  <div className="about-item wow fadeInUp" data-wow-delay=".5s">
                    <div className="about-item_img ab-img7">
                      <img
                        src="/assets/img/icon/th-shield.svg"
                        alt="Expert Team Icon"
                      />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Expert Team</h5>
                      <p className="about-item_text">
                        Our professionals have deep expertise in{" "}
                        {service.title.toLowerCase()}.
                      </p>
                    </div>
                  </div>
                  <div className="about-item wow fadeInUp" data-wow-delay=".6s">
                    <div className="about-item_img ab-img7">
                      <img
                        src="/assets/img/icon/th-shield.svg"
                        alt="Client-Centric Approach Icon"
                      />
                    </div>
                    <div className="about-item_centent">
                      <h5 className="box-title">Client-Centric Approach</h5>
                      <p className="about-item_text">
                        We prioritize your needs and deliver tailored solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-35 wow fadeInUp" data-wow-delay=".7s">
                  <Link
                    to="/contact"
                    className="th-btn black-btn th-radius th-icon"
                  >
                    Contact Us <i className="fa-regular fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Details Section */}
      <section
        className="process-area bg-top-center space"
        style={{ backgroundImage: 'url("/assets/img/bg/process_bg_1.jpg")' }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="process-area">
            <div className="process-content text-center">
              <div className="title-area mb-55">
                <span className="sub-title style1 text-anime-style-2">
                  Our Process
                </span>
                <h2 className="sec-title text-anime-style-3">
                  {service.workflowTitle}
                </h2>
              </div>
            </div>
            <div className="slider-area">
              <Swiper
                className="swiper th-slider has-shadow"
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 4,
                  },
                }}
              >
                {service.workflow.map((step, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="process-item wow fadeInUp"
                      data-wow-delay={`.${(index + 1) * 2}s`}
                    >
                      <div className="process-img mb-20">
                        <img
                          src={service.workflowImages[index]}
                          alt={step.title}
                        />
                      </div>
                      <div className="process-content text-center">
                        <h3 className="box-title mb-10">{step.title}</h3>
                        <p className="process-text">{step.description}</p>
                        <p className="box-number">
                          STEP -{step.id.toString().padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            {/* Left Column: Images */}
            <div className="col-xl-6">
              <div className="img-box15 d-flex justify-content-center">
                <div className="img1 d-none d-md-block">
                  <img src="/assets/img/normal/about_15_1.png" alt="About" />
                  <img
                    src="/assets/img/normal/about_15_2.png"
                    style={{ maxHeight: "300px" }}
                    alt="About"
                  />
                </div>
                <div className="img2">
                  <img src="/assets/img/normal/about_15_3.png" alt="About" />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="col-xl-6">
              <div className="about-15-title-box ps-xl-3 ms-xl-5">
                <div className="title-area mb-20">
                  {/* UPDATED: Sub-title and main title from the image */}
                  <span className="sub-title style1 text-anime-style-2">
                    Why Choose Us
                  </span>
                  <h2 className="sec-title mb-25 text-anime-style-3">
                    {service.whyChooseTitle}
                  </h2>
                </div>

                <div className="about-feature-wrap">
                  <div className="about-feature-list">
                    <ul>
                      {service.whyChooseItems.map((item, index) => (
                        <li
                          key={index}
                          className="wow fadeInUp"
                          data-wow-delay={`.${(index + 2) * 2}s`}
                        >
                          <span className="about-feature-icon">
                            <img
                              src="/assets/img/icon/checkmark.svg"
                              alt="checkmark icon"
                            />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-35 wow fadeInUp" data-wow-delay=".6s">
                  <Link to="/contact" className="th-btn style4 th-icon">
                    {" "}
                    Learn More <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Share Section */}
      <section
        className="space-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="share-links clearfix">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-auto text-center">
                <div className="share-links_wrapp">
                  <span
                    className="share-links-title"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Share This Service:
                  </span>
                  <div
                    className="social-links"
                    style={{
                      display: "inline-flex",
                      gap: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-5px) scale(1.1)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <img
                        src="/assets/icons/facebook.png"
                        alt="Share on Facebook"
                        width="28"
                        height="28"
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}&text=${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-5px) scale(1.1)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <img
                        src="/assets/icons/twitter.png"
                        alt="Share on Twitter"
                        width="28"
                        height="28"
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </a>
                    <a
                      href={`https://www.instagram.com/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-5px) scale(1.1)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <img
                        src="/assets/icons/instagram.png"
                        alt="Share on Instagram"
                        width="28"
                        height="28"
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-5px) scale(1.1)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 25px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <img
                        src="/assets/icons/linkedin.png"
                        alt="Share on LinkedIn"
                        width="28"
                        height="28"
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <UsedToolsTab />
      </div>
      {/* CTA Section */}
      <HomeFAQ />
      <HomeContact />{" "}
    </div>
  );
};

export default ServiceDetails;
