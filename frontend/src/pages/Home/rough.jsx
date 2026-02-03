import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// Import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

const MobileAppProjects = () => {
  // Project data remains the same
  const projectData = [
    {
      id: 1,
      imageUrl: "/assets/img/mobile_projects/1.png",
      title: "Web & Mobile Development",
      subtitle: "Development",
      link: "#",
    },
    {
      id: 2,
      imageUrl: "/assets/img/mobile_projects/2.png",
      title: "UI/UX Design",
      subtitle: "UI/UX Design",
      link: "#",
    },
    {
      id: 3,
      imageUrl: "/assets/img/mobile_projects/3.png",
      title: "Backend Development",
      subtitle: "Python",
      link: "#",
    },
    {
      id: 4,
      imageUrl: "/assets/img/mobile_projects/4.png",
      title: "Python Development",
      subtitle: "JavaScript",
      link: "#",
    },
    {
      id: 5,
      imageUrl: "/assets/img/mobile_projects/5.png",
      title: "Apps Development",
      subtitle: "Java",
      link: "#",
    },
    {
      id: 6,
      imageUrl: "/assets/img/mobile_projects/6.png",
      title: "iOS Development",
      subtitle: "Swift",
      link: "#",
    },
    {
      id: 7,
      imageUrl: "/assets/img/mobile_projects/7.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
    {
      id: 8,
      imageUrl: "/assets/img/mobile_projects/8.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
    {
      id: 9,
      imageUrl: "/assets/img/mobile_projects/9.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
    {
      id: 10,
      imageUrl: "/assets/img/mobile_projects/10.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
  ];

  return (
    <div>
      <div
        className="case-area position-relative overflow-hidden space mobile-projects"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          {/* Title Section */}
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="title-area case-title-box text-center">
                <span
                  className="sub-title mb-15 text-anime-style-2"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  Mobile App Projects
                </span>
                <h2
                  className="sec-title text-anime-style-3"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Transforming Ideas into Innovations
                </h2>
              </div>
            </div>
          </div>

          {/* Slider Section */}
          <div
            className="slider-area case-slider slider-drag-wrap"
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              speed={3000}
              coverflowEffect={{
                rotate: 0,
                stretch: 95,
                depth: 212,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper case-slider"
            >
              {projectData.map((project, index) => (
                <SwiperSlide
                  key={project.id}
                  data-aos="slide-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="case-box">
                    <div className="case-img">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                      />
                      {/* <div className="case-content">
                        <h3 className="case-title">
                          <a href={project.link}>{project.title}</a>
                        </h3>
                        <span className="case-categ">{project.subtitle}</span>
                        <a href={project.link} className="case-icon">
                          <i className="fa-light fa-arrow-right-long"></i>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppProjects;

const projectData = [
    {
      id: 1,
      imageUrl: "/assets/img/mobile_projects/1.png",
      title: "Web & Mobile Development",
      subtitle: "Development",
      link: "#",
    },
    {
      id: 2,
      imageUrl: "/assets/img/mobile_projects/2.png",
      title: "UI/UX Design",
      subtitle: "UI/UX Design",
      link: "#",
    },
    {
      id: 3,
      imageUrl: "/assets/img/mobile_projects/3.png",
      title: "Backend Development",
      subtitle: "Python",
      link: "#",
    },
    {
      id: 4,
      imageUrl: "/assets/img/mobile_projects/4.png",
      title: "Python Development",
      subtitle: "JavaScript",
      link: "#",
    },
    {
      id: 5,
      imageUrl: "/assets/img/mobile_projects/5.png",
      title: "Apps Development",
      subtitle: "Java",
      link: "#",
    },
    {
      id: 6,
      imageUrl: "/assets/img/mobile_projects/6.png",
      title: "iOS Development",
      subtitle: "Swift",
      link: "#",
    },
    {
      id: 7,
      imageUrl: "/assets/img/mobile_projects/7.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
    {
      id: 8,
      imageUrl: "/assets/img/mobile_projects/8.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
    {
      id: 9,
      imageUrl: "/assets/img/mobile_projects/9.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
    {
      id: 10,
      imageUrl: "/assets/img/mobile_projects/10.png",
      title: "Android Development",
      subtitle: "Kotlin",
      link: "#",
    },
  ];
