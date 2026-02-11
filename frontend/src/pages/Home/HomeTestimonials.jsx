import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import config from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomeTestimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await api.get("/testimonials");
        const backendUrl = config.ASSETS_URL;

        const formattedData = data
          .filter((t) => t.isActive)
          .map((t) => ({
            id: t._id,
            review: t.rating ? t.rating.toFixed(1) : "5.0",
            text: t.message,
            author: t.name,
            designation: t.designation,
            img: t.image.startsWith("http") ? t.image : `${backendUrl}${t.image}`,
          }));
        setTestimonialsData(formattedData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testi-area-11 overflow-hidden" id="testi-sec">
      <div
        className="testi-wrap11 space overflow-hidden"
        style={{ backgroundImage: `url(assets/img/bg/testi_bg_11.jpg)` }}
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Testimonials</span>
            <h2 className="sec-title">Real Feedback from Real Clients</h2>
          </div>
          <div className="row gy-40 justify-content-center">
            {/* Right Column: Testimonials Slider */}
            <div>
              <div className="slider-area slider-drag-wrap">
                <Swiper
                  modules={[Pagination, Autoplay]} // Using Pagination and Autoplay
                  spaceBetween={30}
                  slidesPerView={1} // Default for mobile
                  autoHeight={true} // Important for varying content heights
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".slider-pagination", // Targeting the pagination div
                    clickable: true,
                  }}
                  // UPDATED: Added breakpoints for responsive slidesPerView
                  breakpoints={{
                    // When window width is >= 992px (desktop)
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 30, // You can adjust spaceBetween for this breakpoint too
                    },
                  }}
                  className="swiper th-slider testiSlider11-2"
                  id="testiSlider11_2"
                >
                  {/* Map over the testimonialsData array to create slides */}
                  {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testi-card9">
                        <div className="testi-card_review">
                          {testimonial.review}{" "}
                          <img
                            src="/assets/img/3d-icons/star.png"
                            alt="Star"
                            width="16"
                            height="16"
                            style={{ objectFit: "contain", marginLeft: "4px" }}
                            loading="lazy"
                          />{" "}
                          <img
                            src="/assets/img/3d-icons/star.png"
                            alt="Star"
                            width="16"
                            height="16"
                            style={{ objectFit: "contain" }}
                            loading="lazy"
                          />{" "}
                          <img
                            src="/assets/img/3d-icons/star.png"
                            alt="Star"
                            width="16"
                            height="16"
                            style={{ objectFit: "contain" }}
                            loading="lazy"
                          />{" "}
                          <img
                            src="/assets/img/3d-icons/star.png"
                            alt="Star"
                            width="16"
                            height="16"
                            style={{ objectFit: "contain" }}
                            loading="lazy"
                          />{" "}
                          <img
                            src="/assets/img/3d-icons/star.png"
                            alt="Star"
                            width="16"
                            height="16"
                            style={{ objectFit: "contain" }}
                            loading="lazy"
                          />
                        </div>
                        <p className="box-text">{testimonial.text}</p>
                        <div className="box-content">
                          <div className="box-img">
                            <img
                              src={testimonial.img || "/assets/img/3d-icons/user-male-circle.png"}
                              alt={testimonial.author}
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "contain",
                                borderRadius: "50%",
                              }}
                              loading="lazy"
                            />
                          </div>
                          <div className="media-body">
                            <h3 className="box-title">{testimonial.author}</h3>
                            <span className="box-desig">
                              {testimonial.designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default HomeTestimonials;
  