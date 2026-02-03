import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import api from "../../services/api";
import { useState, useEffect } from "react";
import config from "../../config";

const staticMobileData = [
  {
    id: 1,
    imageUrl: "/assets/img/mobile_projects/1.png",
    title: "Analysis of Security",
    category: "Technology",
    link: "#",
  },
  {
    id: 2,
    imageUrl: "/assets/img/mobile_projects/2.png",
    title: "UiXi Design",
    category: "Development",
    link: "#",
  },
  {
    id: 3,
    imageUrl: "/assets/img/mobile_projects/3.png",
    title: "Frontend Development",
    category: "App Design",
    link: "#",
  },
  {
    id: 4,
    imageUrl: "/assets/img/mobile_projects/4.png",
    title: "WordPress Development",
    category: "Mobile",
    link: "#",
  },
  {
    id: 5,
    imageUrl: "/assets/img/mobile_projects/5.png",
    title: "App Development",
    category: "Software",
    link: "#",
  },
  {
    id: 6,
    imageUrl: "/assets/img/mobile_projects/6.png",
    title: "UiXi Design",
    category: "Security",
    link: "#",
  },
  {
    id: 7,
    imageUrl: "/assets/img/mobile_projects/7.png",
    title: "Frontend Development",
    category: "Technology",
    link: "#",
  },
  {
    id: 8,
    imageUrl: "/assets/img/mobile_projects/8.png",
    title: "WordPress Development",
    category: "Development",
    link: "#",
  },
  {
    id: 9,
    imageUrl: "/assets/img/mobile_projects/9.png",
    title: "App Development",
    category: "Software",
    link: "#",
  },
  {
    id: 10,
    imageUrl: "/assets/img/mobile_projects/10.png",
    title: "Advanced Development",
    category: "Enterprise",
    link: "#",
  },
];

const MobileAppProjects = () => {
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const backendUrl = config.ASSETS_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        // Filter for mobile-like platforms if available, or just any new ones
        setDynamicProjects(data.filter(p =>
          p.isActive !== false &&
          (p.platform === "Android" || p.platform === "iOS")
        ));
      } catch (error) {
        console.error("Error fetching mobile projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const combinedProjects = [
    ...dynamicProjects.map(p => ({
      id: p._id,
      imageUrl: p.image.startsWith("http") ? p.image : `${backendUrl}${p.image}`,
      title: p.title,
      category: p.category || "Mobile App",
      link: `/portfolio/${(p.category || "General").toLowerCase().replace(/ /g, "-")}/${p._id}`
    })),
    ...staticMobileData
  ];

  return (
    <div className="case-area3 position-relative overflow-hidden space">
      <style>{`
        .case-slider3 {
          padding:30px;
          overflow: visible !important;
        }

        .case-slider3 .swiper-slide {
          width: 300px !important; /* Force width */
          height: auto;
          transition: all 0.4s ease;
        }

        .case-box3 {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .case-slider3 .case-img {
          width: 100% !important;
          height: 570px !important; /* Force "short" height */
          position: relative;
          overflow: hidden;
        }

        /* Override active slide size from style.css */
        .case-slider3 .swiper-slide.swiper-slide-active .case-img {
          width: 100% !important;
          height: 600px !important;
        }

        .case-img img {
          width: 100% !important;
          height: 100% !important;
          display: block;
          object-fit: cover;
          border-radius: 24px;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .case-img:hover img {
          transform: scale(1.05);
        }

        .case-content {
          position: absolute;
          bottom: 25px;
          left: 15px;
          right: 15px;
          padding: 20px 15px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          z-index: 2;
        }

        .case-img:hover .case-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .case-title {
          margin: 0 0 5px 0;
          font-size: 18px;
          font-weight: 700;
          font-family: "Play", sans-serif;
        }

        .case-title a {
          color: #1a1a1a;
          text-decoration: none;
        }

        .case-categ {
          color: #163198;
          font-size: 12px;
          font-weight: 700;
          display: block;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 5px;
        }

        .sec-title {
          font-family: "Play", sans-serif;
          font-weight: 700;
        }

        .icon-box {
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }

        .slider-arrow {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #163198;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .slider-arrow:hover {
          background: #163198;
          color: #ffffff;
          border-color: #163198;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(22, 49, 152, 0.2);
        }
        .case-box3 .case-img:hover .case-content {
          bottom: 24px;
          opacity: 1;
          visibility: visible;
          width: 85%;
        }

        @media (max-width: 768px) {
          .case-slider3 .swiper-slide {
            width: 260px;
          }

          .case-img {
            height: 500px;
          }

          .case-content {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            background: rgba(255, 255, 255, 0.98);
            bottom: 20px;
          }
        }
      `}</style>

      <div className="container th-container">
        {/* Title */}
        <div className="title-area text-center" data-aos="fade-up">
          <span className="sub-title text-anime-style-2">
            Innovating Mobile Experiences
          </span>
          <h2 className="sec-title text-anime-style-3">
            Our Mobile Masterpieces
          </h2>
        </div>

        {/* Swiper */}
        <div className="container px-5">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={50}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".case-next",
              prevEl: ".case-prev",
            }}
            coverflowEffect={{
              rotate: -10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            className="case-slider3"
          >
            {combinedProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="case-box3 gsap-cursor">
                  <div className="case-img position-relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                    />
                    <div className="case-content">
                      <span className="case-categ">{project.category}</span>
                      <h3 className="case-title">
                        <a href={project.link}>{project.title}</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </div>
  );
};

export default MobileAppProjects;
