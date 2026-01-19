import React, { useState } from "react";
import Nudeal from "../../../public/assets/media/Assets/logo/nudeal.png";
import Newes from "../../../public/assets/media/Assets/logo/poolpal.png";
import Abhi from "../../../public/assets/media/Assets/logo/abhisree.png";
import Yuva from "../../../public/assets/media/Assets/logo/yuvaride.png";
import Zenfoo from "../../../public/assets/media/Assets/logo/zenfoo.png";
import Zest from "../../../public/assets/media/Assets/logo/zestfindz.png";
import Best from "../../../public/assets/media/Assets/logo/bestseeds.png";
import Boutique from "../../../public/assets/media/Assets/logo/boutique.png";
import Carclean from "../../../public/assets/media/Assets/logo/gocarclean.png";
import Market from "../../../public/assets/media/Assets/logo/marketyatra.png";
import Meato from "../../../public/assets/media/Assets/logo/meatoo.png";
import Vnews from "../../../public/assets/media/Assets/logo/vnews.png";
import Paywallet from "../../../public/assets/media/Assets/logo/paywallet.png";
import Sapid from "../../../public/assets/media/Assets/logo/sapid.png";
import Temple from "../../../public/assets/media/Assets/logo/Templecity.png";
import Trust from "../../../public/assets/media/Assets/logo/trustlab.png";
import Work from "../../../public/assets/media/Assets/logo/work.png";
import Mydeal from "../../../public/assets/media/Assets/logo/mydeal.png";
import processBg from "/assets/img/bg/process-1-3-bg.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const OurClients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated brandData array to use all imported images
  const brandData = [
    { id: 1, img: Nudeal, name: "Nudeal" },
    { id: 2, img: Newes, name: "Poolpal" },
    { id: 3, img: Abhi, name: "Abhisree" },
    { id: 4, img: Yuva, name: "Yuvaride" },
    { id: 5, img: Zenfoo, name: "Zenfoo" },
    { id: 6, img: Zest, name: "Zestfindz" },
    { id: 7, img: Best, name: "Bestseeds" },
    { id: 8, img: Boutique, name: "Boutique" },
    { id: 9, img: Carclean, name: "Gocarclean" },
    { id: 10, img: Market, name: "Marketyatra" },
    { id: 11, img: Meato, name: "Meatoo" },
    { id: 12, img: Vnews, name: "Vnews" },
    { id: 13, img: Paywallet, name: "Paywallet" },
    { id: 14, img: Sapid, name: "Sapid" },
    { id: 15, img: Temple, name: "Templecity" },
    { id: 16, img: Trust, name: "Trustlab" },
    { id: 17, img: Work, name: "Work" },
    { id: 18, img: Mydeal, name: "Mydeal" },
  ];

  return (
    <div>
      <div
        className="newsletter-area process-area space pb-0"
        style={{
          backgroundImage: `url(${processBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="newsletter-top container mb-0">
          <div className="row align-items-center">
            <div className="col-lg-3 d-flex flex-column align-items-start">
              <h2 className="newsletter-title text-white text-capitalize mb-3">
                Our Clients
              </h2>
              <button
                className="view-all-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <i className="fal fa-th-large"></i>
                View All
              </button>
            </div>
            <div className="col-lg-9">
              <div>
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
                    0: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1300: { slidesPerView: 6 },
                    1400: { slidesPerView: 6 },
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
                            alt={brand.name}
                            loading="lazy"
                          />
                          <img
                            className="gray"
                            src={brand.img}
                            alt={brand.name}
                            loading="lazy"
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

      {/* Premium Clients Modal - Totally Unique & Attractive Design */}
      <div
        className={`clients-modal-overlay-unique ${isModalOpen ? "open" : ""}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className="clients-modal-container-unique"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Decorative Sidebar - Hidden on mobile */}
          <div className="modal-side-accent">
            <div className="accent-content">
              <span className="accent-label">TECHLAND PARTNERS</span>
              <div className="accent-line"></div>
              <h2 className="accent-text">TRUSTED BY INDUSTRY LEADERS</h2>
            </div>
          </div>

          <div className="modal-main-content">
            <div className="modal-header-unique">
              <div className="header-info">
                <h3 className="modal-title-unique">Our Valued Clients</h3>
               
              </div>
              <button
                className="modal-close-unique"
                onClick={() => setIsModalOpen(false)}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>

            <div className="modal-body-unique">
              <div className="clients-grid-unique">
                {brandData.map((brand, index) => (
                  <div
                    key={brand.id}
                    className="client-card-unique"
                    style={{ "--index": index }}
                  >
                    <div className="card-inner">
                      <div className="client-logo-wrapper">
                        <img src={brand.img} alt={brand.name} loading="lazy" />
                      </div>
                      <div className="client-info-unique">
                       
                        <h4 className="client-name-unique">{brand.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
