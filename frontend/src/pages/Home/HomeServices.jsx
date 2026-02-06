import React from "react";
import { Link } from "react-router-dom";
import "./HomeServices.css";

const HomeServices = () => {
  return (
    <div>
      <div className="counter-sec2 space overflow-hidden black-bg  bg-title footer-layout10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="title-area text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span
                  className="sub-title extra-sub text-anime-style-2 sail-regular"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  Our Services
                </span>
                <h2
                  className="sec-title text-white text-anime-style-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Our awesome services to give you success
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* First Grid Section */}
        <div className="history2-area overflow-hidden">
          <div className="th-container">
            <div className="story-wrapp">
              <div className="row px-3 px-lg-5 gy-30 justify-content-center">
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <div className="special-dedication-card">
                    <div className="card-glare"></div>
                    <div className="dedication-content">
                      <div className="dedication-icon-wrapper">
                        <img
                          src="/assets/img/icon/gem_stone_3d.png"
                          alt="Quality Dedication"
                        />
                      </div>
                      <h3 className="dedication-title sail-regular">
                        <span>100%</span>
                        Dedication
                      </h3>
                      <p className="dedication-text">
                        We offer a comprehensive range of innovative services
                        meticulously tailored to exceed your expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div
                    className="story-card story-card2 story-bg"
                    style={{
                      backgroundImage: `url('/assets/img/home-services/app-development-bg.png')`,
                    }}
                  >
                    <div className="story-content">
                      <div className="col-9">
                        <h2 className="box-title sail-regular">
                          App <br />
                          Development
                        </h2>
                        <div className="header-button">
                          <Link
                            to="services/mobile-app-development"
                            className="th-btn style6 ms-0 th-radius th-icon"
                          >
                            Read More{" "}
                            <i className="fa-regular fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-5 col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <div
                    className="story-card story-card2 story-bg"
                    style={{
                      backgroundImage: `url('/assets/img/home-services/web-development-bg.png')`,
                    }}  
                  >
                    <div className="story-content">
                      <h3 className="box-title sail-regular">
                        Web Development
                        <br />
                        Services
                      </h3>
                      <div className="header-button">
                        <Link
                          to="services/web-development"
                          className="th-btn style6 ms-0 th-radius th-icon"
                        >
                          Read More{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <div
                    className="story-card story-card2 story-bg"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1664447972886-410492bb83bf?q=80&w=2000&auto=format&fit=crop')`,
                    }}
                  >
                    <div className="story-content">
                      <h3 className="box-title sail-regular">
                        E-Commerce
                        <br />
                        Solutions
                      </h3>
                      <div className="header-button">
                        <Link
                          to="services/web-development"
                          className="th-btn style6 ms-0 th-radius th-icon"
                        >
                          Read More{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div
                    className="story-card story-card2 story-bg"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1635236063541-b070bb583321?q=80&w=2000&auto=format&fit=crop')`,
                    }}
                  >
                    <div className="story-content">
                      <h3 className="box-title sail-regular">
                        Digital
                        <br />
                        Marketing
                      </h3>
                      <div className="header-button">
                        <Link
                          to="services/digital-marketing"
                          className="th-btn style6 ms-0 th-radius th-icon"
                        >
                          Read More{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </Link>
                      </div> 
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <div
                    className="story-card story-card2 story-bg"
                    style={{
                      backgroundImage: `url('/assets/img/home-services/ui-ux-bg.png')`,
                    }}
                  >
                    <div className="story-content">
                      <h3 className="box-title sail-regular">
                        UI/UX
                        <br />
                        Design
                      </h3>
                      <div className="header-button">
                        <Link
                          to="/services/ui-ux-design"
                          className="th-btn style6 ms-0 th-radius th-icon"
                        >
                          Read More{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
