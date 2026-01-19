import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Controller } from "swiper/modules";
import { isWinterSeason } from "../../utils/seasonUtils";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeHero = () => {
  const [mainSwiper, setMainSwiper] = useState(null);

  const slides = [
    {
      bg: "/assets/img/hero/hero_bg_2_1.jpg",
      title: "Build Websites That Convert & Perform",
      description:
        "Crafting fast, responsive, and high-impact websites designed to elevate your brand and grow your digital presence.",
    },
    {
      bg: "/assets/img/hero/hero_bg_3_4.png",
      title: "Boost Your Online Visibility & Reach",
      description:
        "Data-driven SEO, social media, and paid ads strategies that help your business attract, engage, and convert customers.",
    },
    {
      bg: "/assets/img/hero/hero_bg_3_3.png",
      title: "Smart, Scalable & Powerful App Solutions",
      description:
        "We develop intuitive mobile apps that deliver seamless user experiences and support your business growth.",
    },
    {
      bg: "/assets/img/hero/hero_bg_2_2.jpg",
      title: "Launch Your High-Performance Online Store",
      description:
        "Custom e-commerce platforms built to provide smooth shopping experiences and maximize sales.",
    },
    {
      bg: "/assets/img/hero/hero_bg_2_2.jpg",
      title: "Beautiful Designs Exceptional User Experience.",
      description:
        "Crafting visually stunning, user-friendly interfaces that keep your customers engaged and loyal.",
    },
  ];

  // Check if it's winter season for snow effect
  const isWinter = isWinterSeason();

  return (
    <div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .swiper-slide-active .hero-title {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .swiper-slide-active .hero-desc {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .swiper-slide-active .btn-group {
          animation: fadeInScale 0.6s ease-out 0.3s both;
        }

        .swiper-slide-active .btn-group .th-btn:nth-child(1) {
          animation: fadeInUp 0.5s ease-out 0.4s both;
        }

        .swiper-slide-active .btn-group .th-btn:nth-child(2) {
          animation: fadeInUp 0.5s ease-out 0.5s both;
        }

        /* Advanced 3D Snow Effect with Multiple Layers - OPTIMIZED */
        @keyframes snowfall3D {
          0% {
            transform: translateY(-10vh) translateX(0) translateZ(0) rotateZ(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift-x)) translateZ(var(--drift-z)) rotateZ(360deg);
            opacity: 0;
          }
        }

        @keyframes snowfallWind {
          0% {
            transform: translateY(-10vh) translateX(0) rotateZ(0deg) scale(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) translateX(50px) rotateZ(90deg) scale(1.1);
          }
          50% {
            transform: translateY(50vh) translateX(-30px) rotateZ(180deg) scale(0.9);
          }
          75% {
            transform: translateY(75vh) translateX(40px) rotateZ(270deg) scale(1.05);
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(-20px) rotateZ(360deg) scale(1);
            opacity: 0;
          }
        }

        @keyframes snowfallSlow {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift-slow)) rotate(180deg);
            opacity: 0;
          }
        }

        .hero-snow-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 5;
          perspective: 1000px;
        }

        .snow-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .snow-layer-1 {
          z-index: 3;
          filter: blur(0px);
        }

        .snow-layer-2 {
          z-index: 2;
          filter: blur(0.5px);
          opacity: 0.85;
        }

        .snow-layer-3 {
          z-index: 1;
          filter: blur(1px);
          opacity: 0.7;
        }

        .snowflake {
          position: absolute;
          top: -10vh;
          color: #fff;
          font-size: 1em;
          opacity: 0.95;
          will-change: transform;
          text-shadow: 0 0 15px rgba(255, 255, 255, 1),
                       0 0 25px rgba(173, 216, 230, 0.8);
        }

        /* Layer 1 - Close snowflakes (large, slow) - 8 snowflakes */
        .snow-layer-1 .snowflake:nth-child(1) { left: 5%; --drift-x: 80px; --drift-z: 100px; animation: snowfall3D 15s linear infinite; animation-delay: 0s; font-size: 2.2em; }
        .snow-layer-1 .snowflake:nth-child(2) { left: 15%; --drift-slow: -60px; animation: snowfallSlow 18s linear infinite; animation-delay: 2s; font-size: 2em; }
        .snow-layer-1 .snowflake:nth-child(3) { left: 30%; animation: snowfallWind 16s ease-in-out infinite; animation-delay: 1s; font-size: 2.4em; }
        .snow-layer-1 .snowflake:nth-child(4) { left: 45%; --drift-x: -90px; --drift-z: 80px; animation: snowfall3D 19s linear infinite; animation-delay: 1.5s; font-size: 2.3em; }
        .snow-layer-1 .snowflake:nth-child(5) { left: 60%; --drift-slow: 70px; animation: snowfallSlow 20s linear infinite; animation-delay: 0.5s; font-size: 1.9em; }
        .snow-layer-1 .snowflake:nth-child(6) { left: 75%; --drift-x: 85px; --drift-z: 90px; animation: snowfall3D 16s linear infinite; animation-delay: 2.5s; font-size: 2.2em; }
        .snow-layer-1 .snowflake:nth-child(7) { left: 85%; animation: snowfallWind 17s ease-in-out infinite; animation-delay: 1.8s; font-size: 2em; }
        .snow-layer-1 .snowflake:nth-child(8) { left: 95%; --drift-slow: -75px; animation: snowfallSlow 19s linear infinite; animation-delay: 3.5s; font-size: 1.8em; }

        /* Layer 2 - Medium snowflakes (medium size, medium speed) - 10 snowflakes */
        .snow-layer-2 .snowflake:nth-child(1) { left: 8%; --drift-x: 60px; --drift-z: 50px; animation: snowfall3D 12s linear infinite; animation-delay: 0.3s; font-size: 1.5em; }
        .snow-layer-2 .snowflake:nth-child(2) { left: 18%; animation: snowfallWind 13s ease-in-out infinite; animation-delay: 1.2s; font-size: 1.3em; }
        .snow-layer-2 .snowflake:nth-child(3) { left: 28%; --drift-slow: -50px; animation: snowfallSlow 14s linear infinite; animation-delay: 2.1s; font-size: 1.4em; }
        .snow-layer-2 .snowflake:nth-child(4) { left: 38%; --drift-x: -55px; --drift-z: 60px; animation: snowfall3D 13s linear infinite; animation-delay: 1.7s; font-size: 1.2em; }
        .snow-layer-2 .snowflake:nth-child(5) { left: 48%; animation: snowfallWind 15s ease-in-out infinite; animation-delay: 2.5s; font-size: 1.5em; }
        .snow-layer-2 .snowflake:nth-child(6) { left: 58%; --drift-slow: 65px; animation: snowfallSlow 12s linear infinite; animation-delay: 0.9s; font-size: 1.3em; }
        .snow-layer-2 .snowflake:nth-child(7) { left: 68%; --drift-x: 45px; --drift-z: 40px; animation: snowfall3D 16s linear infinite; animation-delay: 1.1s; font-size: 1.6em; }
        .snow-layer-2 .snowflake:nth-child(8) { left: 78%; animation: snowfallWind 11s ease-in-out infinite; animation-delay: 2.8s; font-size: 1.2em; }
        .snow-layer-2 .snowflake:nth-child(9) { left: 88%; --drift-slow: -60px; animation: snowfallSlow 13s linear infinite; animation-delay: 1.5s; font-size: 1.5em; }
        .snow-layer-2 .snowflake:nth-child(10) { left: 95%; --drift-x: 55px; --drift-z: 45px; animation: snowfall3D 14s linear infinite; animation-delay: 2.3s; font-size: 1.4em; }

        /* Layer 3 - Far snowflakes (small, fast) - 12 snowflakes */
        .snow-layer-3 .snowflake:nth-child(1) { left: 5%; --drift-x: 30px; --drift-z: 20px; animation: snowfall3D 8s linear infinite; animation-delay: 0s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(2) { left: 12%; animation: snowfallWind 9s ease-in-out infinite; animation-delay: 0.5s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(3) { left: 20%; --drift-slow: -35px; animation: snowfallSlow 10s linear infinite; animation-delay: 1.2s; font-size: 0.9em; }
        .snow-layer-3 .snowflake:nth-child(4) { left: 28%; --drift-x: -25px; --drift-z: 30px; animation: snowfall3D 9s linear infinite; animation-delay: 0.7s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(5) { left: 36%; animation: snowfallWind 8s ease-in-out infinite; animation-delay: 2.3s; font-size: 0.9em; }
        .snow-layer-3 .snowflake:nth-child(6) { left: 44%; --drift-slow: 40px; animation: snowfallSlow 11s linear infinite; animation-delay: 1.5s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(7) { left: 52%; --drift-x: 35px; --drift-z: 25px; animation: snowfall3D 10s linear infinite; animation-delay: 2.8s; font-size: 0.9em; }
        .snow-layer-3 .snowflake:nth-child(8) { left: 60%; animation: snowfallWind 7s ease-in-out infinite; animation-delay: 1.9s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(9) { left: 68%; --drift-slow: -30px; animation: snowfallSlow 8s linear infinite; animation-delay: 0.4s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(10) { left: 76%; --drift-x: 28px; --drift-z: 22px; animation: snowfall3D 9s linear infinite; animation-delay: 1.3s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(11) { left: 84%; animation: snowfallWind 8s ease-in-out infinite; animation-delay: 2.7s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(12) { left: 92%; --drift-slow: 38px; animation: snowfallSlow 11s linear infinite; animation-delay: 0.9s; font-size: 0.9em; }

        /* Remove border-radius from all hero-2 elements except buttons */
        .hero-2 .hero-slider-2 {
          border-radius: 0 !important;
        }

        .hero-2 .th-hero-bg {
          border-radius: 0 !important;
        }

        .hero-2 .th-hero-bg:before {
          border-radius: 0 !important;
        }

        .hero-2 .swiper-pagination {
          border-radius: 0 !important;
        }

        .hero-2 .swiper-pagination-bullet {
          border-radius: 0 !important;
        }

        .hero-2 .scroll-down .scroll-wrap span {
          border-radius: 50% !important; /* Keep circular for icon */
        }

        .hero-2 .hero-arrow {
          border-radius: 50% !important; /* Keep circular for navigation arrows */
        }

        /* Keep border-radius for buttons only */
        .hero-2 .th-btn {
          /* Buttons will keep their default border-radius from global styles */
        }

        /* Responsive Fixes */
        @media (max-width: 991px) {
          .hero-style2 {
            padding: 120px 0 80px 0;
            text-align: center;
          }
          
          .hero-style2 .hero-title {
            font-size: 40px;
            line-height: 1.2;
            margin: 0 auto 20px;
          }
          
          .hero-style2 .hero-desc {
            margin: 0 auto 30px;
          }
          
        }

        @media (max-width: 768px) {
          .hero-style2 {
            padding: 100px 0 60px 0;
          }
          
          .hero-style2 .hero-title {
            font-size: 32px;
          }
          
          .hero-style2 .hero-desc {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-style2 .hero-title {
            font-size: 26px;
          }
          
          .hero-2 .btn-group {
            flex-direction: column;
            gap: 15px;
            width: 100%;
          }
          
          .hero-2 .btn-group .th-btn {
            width: 100%;
            justify-content: center;
            margin: 0;
          }
          
          .hero-snow-container {
             /* Ensure snow doesn't block clicks if z-index issues arise */
             pointer-events: none;
          }
        }
           `}</style>
      <div className="hero-2" id="hero" style={{ position: "relative" }}>
        {/* Decorative Images */}

        {/* Advanced 3-Layer Snow Effect Container - OPTIMIZED (Winter Only) */}
        {isWinter && (
          <div className="hero-snow-container">
            {/* Layer 1 - Foreground (Close, Large, Slow) - 8 snowflakes */}
            <div className="snow-layer snow-layer-1">
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">✼</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
            </div>

            {/* Layer 2 - Midground (Medium, Medium Speed) - 10 snowflakes */}
            <div className="snow-layer snow-layer-2">
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">✻</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">✼</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
            </div>

            {/* Layer 3 - Background (Far, Small, Fast) - 12 snowflakes */}
            <div className="snow-layer snow-layer-3">
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">✽</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">✼</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">✻</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
            </div>
          </div>
        )}

        {/* Main Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: ".slider-prev",
            nextEl: ".slider-next",
          }}
          autoplay={{
            delay: 50000000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          className="swiper hero-slider-2"
          id="heroSlide2"
          onSwiper={setMainSwiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  style={{
                    backgroundImage: `url('${slide.bg}')`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <div className="container">
                  <div className="hero-style2 ">
                    <h1
                      className="hero-title mb-20"
                      data-ani="slideinup"
                      data-ani-delay="0.1s"
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="hero-desc"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      {slide.description}
                    </p>

                    <div
                      className="btn-group justify-content-center"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      <Link to="/about" className="th-btn style6 th-icon">
                        Discover Me{" "}
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>

                      <Link to="/services" className="th-btn style2 th-icon">
                        Our Services{" "}
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="th-swiper-custom">
            <div className="swiper-pagination"></div>
            <div className="hero-icon">
              <button className="hero-arrow slider-prev">
                <img
                  src="/assets/img/icon/hero-arrow-left.svg"
                  alt="Previous"
                  width="20"
                  height="20"
                />
              </button>
              <button className="hero-arrow slider-next">
                <img
                  src="/assets/img/icon/hero-arrow-right.svg"
                  alt="Next"
                  width="20"
                  height="20"
                />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeHero;
