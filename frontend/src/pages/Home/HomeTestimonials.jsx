import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomeTestimonials = () => {
  // Create a data array for testimonials to make the component cleaner and more maintainable
  const testimonialsData = [
    {
      id: 1,
      review: "5.0",
      text: "Techland IT Solutions gave our boutique a stunning online presence. The website and app look amazing!",
      author: "Boutique",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_1.jpg",
    },
    {
      id: 2,
      review: "5.0",
      text: "The e-commerce platform they created for Meat O is top-notch. Fast and reliable service.",
      author: "Meat O",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_2.jpg",
    },
    {
      id: 3,
      review: "5.0",
      text: "Techland IT Solutions truly understood our vision for Temple City. Our new site is a game-changer!",
      author: "Temple City",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_1.jpg",
    },
    {
      id: 4,
      review: "5.0",
      text: "టెక్‌ల్యాండ్ IT సొల్యూషన్స్ మా న్యూస్ ప్లాట్‌ఫారమ్‌ను సులభంగా ఉపయోగపడేలా మరియు డైనామిక్‌గా మార్చింది. అద్భుతమైన పని!",
      author: "V News",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_2.jpg",
    },
    {
      id: 5,
      review: "5.0",
      text: "టెక్‌ల్యాండ్ IT సొల్యూషన్స్‌తో పని చేయడం చాలా సంతోషంగా ఉంది. వారు మా ఆలోచనలను అద్భుతంగా వాస్తవంగా మార్చారు.",
      author: "Nudeal",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_1.jpg",
    },
    {
      id: 6,
      review: "5.0",
      text: "The team at Techland delivered creative and effective solutions for our site. We couldn't be happier!",
      author: "Sapid",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_2.jpg",
    },
    {
      id: 7,
      review: "5.0",
      text: "Techland IT Solutions designed our website with great attention to detail and professionalism. Very satisfied!",
      author: "Work Oasis",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_1.jpg",
    },
    {
      id: 8,
      review: "5.0",
      text: "The Trust Labs team is thankful for Techland's exceptional service. Our website looks fantastic and works flawlessly!",
      author: "Trust Labs",
      designation: "Client",
      img: "assets/img/testimonial/testi_9_2.jpg",
    },
  ];

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
                              src="/assets/img/3d-icons/user-male-circle.png"
                              alt={testimonial.author}
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "contain",
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
