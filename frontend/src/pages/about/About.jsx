import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/custom.css";

const About = () => {
  const seo = getSEO("about");

  // Counter data for statistics section
  const counterData = [
    { number: "156+", title: "Mobile Apps" },
    { number: "94+", title: "Websites" },
    { number: "52+", title: "Projects" },
    { number: "350+", title: "Happy Clients" },
  ];

  const servicesData = [
    {
      id: 1,
      img: "/assets/img/bg/Web_Development.png",
      title: "Web Development",
      description:
        "Creating responsive websites tailored to your business needs.",
    },
    {
      id: 2,
      img: "/assets/img/bg/App_Development.png",
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications for iOS and Android.",
    },
    {
      id: 3,
      img: "/assets/img/bg/Digital_marketig.png",
      title: "Digital Marketing",
      description:
        "Implementing brand online visibility strategies to boost your presence.",
    },
    {
      id: 4,
      img: "/assets/img/bg/Custom_software.png",
      title: "Custom Software Development",
      description:
        "Creating custom software solutions to address complex business challenges.",
    },
    {
      id: 5,
      img: "/assets/img/cdn-assets/Cloud and IT Consulting.png",
      title: "Cloud and IT Consulting",
      description:
        "Helping businesses migrate to the cloud and optimize their IT architecture.",
    },
  ];

  // Mission, Vision, and Goal data
  const missionVisionData = [
    {
      title: "Our Mission",
      text: "We empower businesses with innovative and scalable digital solutions that streamline operations, enhance customer experiences, and solve complex challenges. Our mission is to deliver technology that drives sustainable growth and long-term success.",
      icon: "/assets/img/cdn-assets/icons8-goal.png",
    },
    {
      title: "Our Vision",
      text: "Our vision is to lead globally in creating advanced and sustainable tech solutions that transform how businesses operate and grow in a digital world. We aim to bridge technology with strategy, enabling clients to unlock new opportunities with confidence.",
      icon: "/assets/img/cdn-assets/icons8-visible.png",
    },
    {
      title: "Our Goal",
      text: "Our goal is to build strong partnerships by delivering reliable, high-impact solutions that exceed expectations. We promote a culture of learning and innovation within our team, ensuring we stay ahead in technology trends and help clients achieve sustainable growth.",
      icon: "/assets/img/cdn-assets/icons8-trophy.png",
    },
  ];

  // Milestones data
  const milestonesData = [
    {
      image: "/assets/img/cdn-assets/Our Beginning (2018).png",
      icon: "/assets/img/cdn-assets/icons8-rocket.png",
      number: "01",
      title: "Our Beginning (2018)",
      text: "Techland IT Solutions was founded with a vision to provide meaningful digital experiences for global businesses.",
    },
    {
      image:
        "/assets/img/cdn-assets/unsplash-photo-1552664730-d307ca884978.jpg",
      icon: "/assets/img/cdn-assets/icons8-trophy.png",
      number: "02",
      title: "100+ Projects Delivered (2020)",
      text: "Successfully completed over 100 projects across diverse industries including healthcare, retail, and education.",
    },
    {
      image: "/assets/img/cdn-assets/Global Expansion.png",
      icon: "/assets/img/cdn-assets/icons8-globe.png",
      number: "03",
      title: "Global Expansion (2022)",
      text: "Expanded our reach to clients across America, Europe, and Asia, becoming a trusted technology partner worldwide.",
    },
    {
      image:
        "/assets/img/cdn-assets/unsplash-photo-1677442136019-21780ecad995.jpg",
      icon: "/assets/img/cdn-assets/icons8-brain.png",
      number: "04",
      title: "AI-Driven Innovation (2024)",
      text: "Launched AI-powered automation tools to help businesses optimize operations and make data-driven decisions.",
    },
  ];

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      {/* Breadcrumb section - Shows navigation path */}
      <div
        className="breadcumb-area style2 bg-smoke4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("assets/img/bg/breadcumb-bg.jpg")' }}
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">About Us</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section>
        {/* About section - Company introduction */}
        <div
          className="about-area position-relative overflow-hidden space overflow-hidden"
          id="about-sec"
        >
          <div className="container">
            <div className="row">
              <div
                className="col-xl-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="img-box3 style1">
                  <div className="img1 reveal">
                    <img
                      src="assets/img/normal/about_3_3.png"
                      alt="About"
                      loading="lazy"
                    />
                  </div>

                  <div className="img3 movingX">
                    <img
                      src="/assets/img/normal/ai_aboutus.png"
                      alt="About"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="ps-xxl-2">
                  <div className="title-area about-3-titlebox mb-20 pe-xxl-1 me-xxl-1">
                    <span
                      className="sub-title style1 text-anime-style-2"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      About Our Company
                    </span>
                    <h2
                      className="sec-title mb-20 text-anime-style-3"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      About Techland IT Solutions | Leading IT Services in
                      Hyderabad
                    </h2>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300">
                    <p className="pb-0">
                      We are a "tech-cocktail" Entity enabling fast-track IT
                      solutions powered with a perfect balance of technology
                      innovation, software designing-development and business
                      consultancy.
                    </p>
                    <p className="pb-0">
                      <b>Techland</b> is synonymous with a heady mix of
                      enthusiastic, young and experienced engineering
                      professionals and systems development tech wizards, adept
                      at brewing innovative and dynamic e-solutions. Our
                      value-added business services and solutions add a spring
                      to your portfolio of services to enhance user
                      satisfaction.
                    </p>
                    <p className="pb-0">
                      Automation is our goal. We factor technology to take the
                      service to a new high. Individually we have experience in
                      variegated fields like designing and developing apt apps
                      (both web and mobile) for start-ups, CRM, Attendance and
                      payroll management, apart from providing seamless
                      e-service platforms suitable across different segments of
                      business and government.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div
            className="shape-mockup jump d-none d-xxl-block"
            data-bottom="25%"
            data-left="6%"
          >
            <img
              src="assets/img/shape/small-cloud.png"
              alt="shape"
              loading="lazy"
            />
          </div>
          <div
            className="shape-mockup jump d-none d-xxl-block"
            data-bottom="10%"
            data-right="4%"
          >
            <img
              src="assets/img/shape/cp-gp-shape.png"
              alt="shape"
              loading="lazy"
            />
          </div>
        </div>

        {/* Counter section - Statistics display */}
        <div className="counter-sec2 space overflow-hidden black-bg space-top bg-title footer-layout10">
          <div
            className="shape-mockup shadow-title"
            data-top="0"
            data-right="0"
          >
            Milestones
          </div>
          <div className="container">
            <div className="row">
              {/* Loop through counter data */}
              {counterData.map((item, index) => (
                <div
                  key={index}
                  className="col-sm-6 col-xl-3 counter-card-wrap"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="counter-card">
                    <div className="counter-shape">
                      <span></span>
                    </div>
                    <div className="media-body">
                      <h3 className="box-number">
                        <span className="counter-number">{item.number}</span>
                      </h3>
                      <h6 className="counter-title">{item.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative element */}
          <div
            className="shape-mockup jump d-none d-xl-block"
            data-bottom="5%"
            data-left="-10%"
          >
            <img
              src="assets/img/shape/shape_5.png"
              alt="shape"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission, Vision, and Goals section */}
        <div
          className="position-relative overflow-hidden space overflow-hidden"
          id="mission-sec"
        >
          <div className="container-lg-fluid px-lg-5">
            <div>
              <div className="row gy-4 justify-content-center">
                {/* Loop through mission, vision, and goals data */}
                {missionVisionData.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-4 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <div className="story-box">
                      <h3 className="box-title">{item.title}</h3>
                      <p className="story-box_text">{item.text}</p>
                      <span className="story-box_icon">
                        <img src={item.icon} alt={item.title} loading="lazy" />
                      </span>
                      <a
                        href="#"
                        className="icon"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img
                          src="/assets/icons/forward.png"
                          alt="Forward Arrow"
                          width="20"
                          height="20"
                          style={{ objectFit: "contain" }}
                          loading="lazy"
                        />
                      </a>
                      <div className="story-wrapp">
                        <div className="discount-tag">
                          <span className="discount-anime"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div
            className="shape-mockup jump d-none d-xxl-block"
            data-bottom="25%"
            data-left="6%"
          >
            <img
              src="assets/img/shape/small-cloud.png"
              alt="shape"
              loading="lazy"
            />
          </div>
          <div
            className="shape-mockup jump d-none d-xxl-block"
            data-bottom="10%"
            data-right="4%"
          >
            <img
              src="assets/img/shape/cp-gp-shape.png"
              alt="shape"
              loading="lazy"
            />
          </div>
        </div>

        {/* Core Values section */}
        <div className="choose-area3 space light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title-area text-center">
                  <span className="sub-title extra-sub text-anime-style-2">
                    Our Guiding Principles
                  </span>
                  <h2 className="sec-title text-white text-anime-style-3">
                    Core Values That Define Us
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-area4">
            <div className="px-3 px-lg-5">
              <div className="row gy-4 justify-content-center justify-content-lg-between">
                <div className="col-xl-6 col-lg-6 col-md-6 feature_wrapp">
                  <div
                    className="feature-item style-4 text-center"
                    data-aos="flip-left"
                    data-aos-delay="100"
                  >
                    <div className="feature_icon">
                      <img
                        src="/assets/img/cdn-assets/icons8-cloud.png"
                        alt="Cloud Icon"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature_content">
                      <h3 className="box-title">Cloud-Based Delivery</h3>
                      <p className="sec-text">
                        Software is hosted on the provider's servers and
                        accessed online. This eliminates the need for local
                        installations and allows users to access applications
                        from anywhere with an internet connection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
                  <div
                    className="feature-item style-4 text-center wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="feature_icon">
                      <img
                        src="/assets/img/cdn-assets/flaticon-3135706.png"
                        alt="Subscription Model Icon"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature_content">
                      <h3 className="box-title">Subscription Model</h3>
                      <p className="sec-text">
                        Users pay a recurring fee, often monthly or annually,
                        based on usage or features.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
                  <div
                    className="feature-item style-4 text-center wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="feature_icon">
                      <img
                        src="/assets/img/cdn-assets/flaticon-2991148.png"
                        alt="Update Icon"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature_content">
                      <h3 className="box-title">Automatic Updates</h3>
                      <p className="sec-text">
                        Ensures users always have access to the latest features
                        and security patches.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
                  <div
                    className="feature-item style-4 text-center wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="feature_icon">
                      <img
                        src="/assets/img/cdn-assets/icons8-server.png"
                        alt="Multi-Tenancy Icon"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature_content">
                      <h3 className="box-title">Multi-Tenancy</h3>
                      <p className="sec-text">
                        Multiple users (tenants) share a single instance of the
                        application while keeping their data isolated.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 feature_wrapp">
                  <div
                    className="feature-item style-4 text-center wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="feature_icon">
                      <img
                        src="/assets/img/cdn-assets/flaticon-3588592.png"
                        alt="Scalability Icon"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature_content">
                      <h3 className="box-title">Scalability</h3>
                      <p className="sec-text">
                        Scale resources instantly to match demand, eliminating
                        costly infrastructure investments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 feature_wrapp">
                  <div
                    className="feature-item style-4 text-center wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="feature_icon">
                      <img
                        src="/assets/img/cdn-assets/icons8-laptop.png"
                        alt="Compatibility Icon"
                        loading="lazy"
                      />
                    </div>
                    <div className="feature_content">
                      <h3 className="box-title">
                        Cross-Platform Compatibility
                      </h3>
                      <p className="sec-text">
                        SaaS applications typically run on any device with a web
                        browser, including desktops, laptops, tablets, and
                        smartphones, ensuring seamless access across different
                        operating systems and devices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones section - Company journey */}
        <div
          className="service-area4 space"
          id="service-sec"
          data-bg-src=""
          style={{ backgroundImage: `url('assets/img/bg/service_bg_4.jpg')` }}
        >
          <div className="px-3 px-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title-area text-center">
                  <span className="sub-title text-anime-style-2">
                    Journey of Excellence
                  </span>
                  <h2 className="sec-title text-anime-style-3">
                    Our Milestones
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Loop through milestones data */}
              {milestonesData.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="service-item style4 th-ani">
                    <div className="service-img position-relative">
                      <a>
                        <img src={item.image} alt={item.title} loading="lazy" />
                      </a>
                      <span className="service-icon">
                        <img
                          src={item.icon}
                          alt={`${item.title} icon`}
                          loading="lazy"
                        />
                      </span>
                    </div>
                    <div className="service-content text-start">
                      <h3 className="box-title">
                        <span className="text-theme me-2">{item.number}.</span>
                        <a>{item.title}</a>
                      </h3>
                      <p className="service-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="counter-sec2 space overflow-hidden  black-bg space-top bg-title footer-layout10">
          <div className="px-3 px-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title-area text-center">
                  <span className="sub-title extra-sub text-anime-style-2">
                    What We Do
                  </span>
                  <h2 className="sec-title text-white text-anime-style-3">
                    Driving Digital Transformation Across Hyderabad
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Swiper Slider Area */}
          <div
            className="slider-area slider-drag-wrap"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={15}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              // Breakpoints for responsive slidesPerView
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
                1300: {
                  slidesPerView: 5,
                },
              }}
              className="swiper th-slider has-shadow"
              id="serviceSlider4"
            >
              {/* Map over the servicesData array to create slides */}
              {servicesData.map((service, index) => (
                <SwiperSlide
                  key={service.id}
                  data-aos="slide-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="service-item sv-card7 sv-card8 th-ani">
                    <div className="service-img position-relative">
                      <Link
                        to={`/services/${service.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <img
                          src={service.img}
                          alt={service.title}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <div className="service-content sv-content6 text-start">
                      <h3 className="box-title">
                        <Link
                          to={`/services/${service.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {service.title}
                        </Link>
                      </h3>
                      <p className="service-text">{service.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <section
          className="service-hero-area space"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="ps-xxl-2">
                  <div className="title-area about-3-titlebox mb-20 pe-xxl-1 me-xxl-1">
                    <span
                      className="sub-title style1 text-anime-style-2"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Journey{" "}
                    </span>
                    <h2
                      className="sec-title mb-20 text-anime-style-3"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Our Journey
                    </h2>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300">
                    <p className="pb-0">
                      Techland IT Solutions was founded with a simple yet
                      ambitious goal: to empower businesses by delivering
                      innovative and reliable technology solutions. What began
                      as a small team with a vision to drive digital
                      transformation has evolved into a trusted partner for
                      organizations around the globe. Through dedication, hard
                      work, and a relentless pursuit of excellence, we have
                      continuously expanded our expertise and service offerings.
                      From our humble beginnings in Hyderabad, India, we have
                      made significant strides in the fields of mobile app
                      development, web solutions, e-commerce, and digital
                      marketing. Each project we undertake is a testament to our
                      commitment to excellence and our drive to provide the best
                      possible solutions to our clients. As we continue to grow
                      and innovate, our journey is not just about expanding our
                      services but also about making a lasting
                      impact—transforming businesses and helping them thrive in
                      the digital age.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="service-hero-image">
                  <div className="service-hero-img">
                    <img
                      src="assets/img/bg/OurTeam.jpg"
                      alt="Our Team"
                      loading="lazy"
                      style={{ borderRadius: "8px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
