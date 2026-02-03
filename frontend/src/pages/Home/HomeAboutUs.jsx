import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
const Nudeal = "/assets/media/Assets/logo/nudeal.png";
const Newes = "/assets/media/Assets/logo/poolpal.png";
const Abhi = "/assets/media/Assets/logo/abhisree.png";
const Yuva = "/assets/media/Assets/logo/yuvaride.png";
const Zenfoo = "/assets/media/Assets/logo/zenfoo.png";
const Zest = "/assets/media/Assets/logo/zestfindz.png";
const Best = "/assets/media/Assets/logo/bestseeds.png";
const Boutique = "/assets/media/Assets/logo/boutique.png";
const Carclean = "/assets/media/Assets/logo/gocarclean.png";
const Market = "/assets/media/Assets/logo/marketyatra.png";
const Meato = "/assets/media/Assets/logo/meatoo.png";
const Vnews = "/assets/media/Assets/logo/vnews.png";
const Paywallet = "/assets/media/Assets/logo/paywallet.png";
const Sapid = "/assets/media/Assets/logo/sapid.png";
const Temple = "/assets/media/Assets/logo/Templecity.png";
const Trust = "/assets/media/Assets/logo/trustlab.png";
const Work = "/assets/media/Assets/logo/work.png";
const Mydeal = "/assets/media/Assets/logo/mydeal.png";

const HomeAboutUs = () => {
  // Create a data array for features to make the component cleaner and more maintainable
  const featuresData = [
    {
      id: 1,
      icon: "assets/img/icon/checkmark.svg",
      text: "Data Storage and Backup",
    },
    {
      id: 2,
      icon: "assets/img/icon/checkmark.svg",
      text: "Data Backup and Disaster Recovery",
    },
    {
      id: 3,
      icon: "assets/img/icon/checkmark.svg",
      text: "Hybrid and Multi-Cloud Solutions",
    },
  ];

  // Updated brandData array to use all imported images
  const brandData = [
    { id: 1, img: Nudeal },
    { id: 2, img: Newes },
    { id: 3, img: Abhi },
    { id: 4, img: Yuva },
    { id: 5, img: Zenfoo },
    { id: 6, img: Zest },
    { id: 7, img: Best },
    { id: 8, img: Boutique },
    { id: 9, img: Carclean },
    { id: 10, img: Market },
    { id: 11, img: Meato },
    { id: 12, img: Vnews },
    { id: 13, img: Paywallet },
    { id: 14, img: Sapid },
    { id: 15, img: Temple },
    { id: 16, img: Trust },
    { id: 17, img: Work },
    { id: 18, img: Mydeal },
  ];

  return (
    <div>
      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row">
            {/* Left Column: Images */}
            {/* <div className="col-xl-6">
              <div
                className="img-box15 d-flex justify-content-center"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <div className="img1 d-none d-md-block">
                  <img src="assets/img/normal/about_15_1.jpg" alt="About" />
                  <img src="assets/img/normal/about_15_2.jpg" alt="About" />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/mobile about.png" alt="About" />
                </div>
              </div>
            </div> */}
            <div className="col-xl-6">
              <div className="img-box15 d-flex justify-content-center">
                <div className="img1 d-none d-md-block">
                  <img
                    src="assets/img/normal/about_15_1.png"
                    alt="About"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    loading="lazy"
                  />
                  <img
                    src="assets/img/normal/about_15_2.png"
                    alt="About"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    loading="lazy"
                  />
                </div>
                <div className="img2">
                  <img
                    src="assets/img/normal/mobile about.png"
                    alt="About"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="col-xl-6">
              <div className="about-15-title-box ps-xl-3 ms-xl-5">
                <div className="title-area mb-20">
                  {/* UPDATED: Sub-title and main title from the image */}
                  <span
                    className="sub-title style1 text-anime-style-2"
                    data-aos="fade-down"
                    data-aos-duration="800"
                  >
                    About Us
                  </span>
                  <h2
                    className="sec-title mb-25 text-anime-style-3"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Techland IT Solutions - Best App, Web & Digital Marketing
                    Services
                  </h2>
                </div>

                {/* UPDATED: Paragraph content from the image */}
                {/* UPDATED: Paragraph content from the image */}
                <p
                  className="sec-text mb-30 me-xl-3 wow fadeInUp"
                  data-wow-delay=".3s"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Techland IT Solutions is a leading provider of App, Web, and
                  Digital Marketing services in Hyderabad. Our customer-centric
                  approach and innovative strategies set us apart. We are a team
                  of passionate developers and marketers dedicated to delivering
                  high-performance digital solutions. From custom application
                  development to result-oriented digital marketing campaigns, we
                  combine creativity and technology to help your business thrive
                  in the digital landscape.
                </p>

                <div className="about-feature-wrap">
                  <div className="about-feature-list">
                    <ul>
                      {/* Map over the featuresData array to create list items */}
                      {featuresData.map((feature) => (
                        <li
                          key={feature.id}
                          className="wow fadeInUp"
                          data-wow-delay=".4s"
                          data-aos="fade-right"
                          data-aos-duration="800"
                          data-aos-delay={feature.id * 100}
                        >
                          <span className="about-feature-icon">
                            <img
                              src={feature.icon}
                              alt="checkmark icon"
                              loading="lazy"
                            />
                          </span>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="mt-35"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  {/* 
                  UPDATED: Button text changed to "Start Ranking Now" to match the image.
                  Replaced <a> with <Link> for routing.
                */}
                  <Link to="/about" className="th-btn style4 th-icon">
                    {" "}
                    {/* Assuming it links to a contact page */}
                    Learn More <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        style={{ backgroundImage: "url('assets/img/bg/process-1-3-bg.jpg')" }}
      >
        <div className="container">
          <div className="newsletter-area">
            <div className="newsletter-top pb-0 mb-0">
              <div className="row gy-4 py-5 align-items-center">
                <div className="col-lg-3 mt-0">
                  <h2 className="newsletter-title text-white text-capitalize mb-0">
                    Our Clients
                  </h2>
                </div>
                <div className="col-lg-9 mt-0">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      576: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1300: {
                        slidesPerView: 6,
                      },
                      1400: {
                        slidesPerView: 6,
                      },
                    }}
                    className="swiper th-slider brandSlider1"
                  >
                    {brandData.map((brand) => (
                      <SwiperSlide key={brand.id}>
                        <div className="brand-box">
                          <a href="#">
                            <img
                              className="original"
                              src={brand.img}
                              alt="Brand Logo"
                            />
                            <img
                              className="gray"
                              src={brand.img}
                              alt="Brand Logo"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomeAboutUs;
