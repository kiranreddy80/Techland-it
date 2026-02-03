import React from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define process icon paths
const processRequirements = "/assets/img/icon/process-requirements.png";
const processAgreement = "/assets/img/icon/process-agreement.png";
const processDesign = "/assets/img/icon/process-design.png";
const processDevelopment = "/assets/img/icon/process-development.png";
const processTesting = "/assets/img/icon/process-testing.png";
const processApproval = "/assets/img/icon/process-approval.png";
const processDeployment = "/assets/img/icon/process-deployment.png";
const processUx = "/assets/img/icon/process-ux.png";
const processMonitor = "/assets/img/icon/process-monitor.png";
const marqueeIcon = "/assets/img/icon/marquee-icon1-3.png";
const processBg = "/assets/img/bg/process-1-3-bg.jpg";

const OurProcess = () => {
  // --- Data for the Main Process Slider (with normalized description lengths) ---
  const processData = [
    {
      step: 1,
      title: "Requirements",
      icon: processRequirements,
      desc: "We begin by thoroughly understanding your business goals and vision to define clear project objectives and a solid foundation for success.",
    },
    {
      step: 2,
      title: "Agreement",
      icon: processAgreement,
      desc: "We establish a transparent project agreement detailing scope, timeline, and budget to ensure clarity and build mutual trust.",
    },
    {
      step: 3,
      title: "UI/UX Design",
      icon: processDesign,
      desc: "Our designers craft intuitive wireframes and stunning prototypes focused on user experience, accessibility, and your brand identity.",
    },
    {
      step: 4,
      title: "Development",
      icon: processDevelopment,
      desc: "Our expert developers build your app using modern frameworks, ensuring it is scalable, high-performing, and built to last.",
    },
    {
      step: 5,
      title: "Testing",
      icon: processTesting,
      desc: "We conduct rigorous manual and automated testing to guarantee a flawless, secure, and bug-free user experience before launch.",
    },
    {
      step: 6,
      title: "Client Approval",
      icon: processApproval,
      desc: "You review the app, and we carefully incorporate your feedback to ensure the final product perfectly matches your expectations.",
    },
    {
      step: 7,
      title: "Deployment",
      icon: processDeployment,
      desc: "We handle the seamless deployment of your app to all relevant stores, optimizing for maximum visibility and a successful launch.",
    },
    {
      step: 8,
      title: "User Experience",
      icon: processUx,
      desc: "Post-launch, we monitor user interactions and gather insights to continuously improve the app for a smooth user journey.",
    },
    {
      step: 9,
      title: "Analogue Monitor",
      icon: processMonitor,
      desc: "Our partnership continues with ongoing performance monitoring, updates, and new features to keep your app future-ready.",
    },
  ];

  // --- Data for the Marquee Slider (Unchanged) ---
  const marqueeData = [
    { id: 1, text: "App Development" },
    { id: 2, text: "Web Development" },
    { id: 3, text: "E-Commerce Solutions" },
    { id: 4, text: "Digital Marketing" },
    { id: 5, text: "UI/UX Design" },
  ];

  return (
    <>
      <style>{`
        .process-card-enhanced {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: visible;
        }
        
        .process-card-enhanced:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(28, 36, 109, 0.1);
        }
        
        .process-icon-wrapper {
          transition: all 0.4s ease;
          position: relative;
        }
        
        .process-card-enhanced:hover .process-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        
        .process-card-enhanced:hover .process-circular-text {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .process-card-enhanced:hover .process-circular-text text {
          fill: #ff6b35;
        }
        
        .step-tag-wrap {
          position: absolute;
          top: 5px;
          right: 5px;
          list-style: none;
          padding: 0;
          margin: 0;
          z-index: 10;
        }
        
        .step-tag {
          background: rgba(28, 36, 109, 0.85);
          backdrop-filter: blur(8px);
          color: white;
          padding: 6px 18px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.5px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-block;
        }
        
        .process-card-enhanced:hover .step-tag {
          background: #ff6b35;
          border-color: #ff6b35;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 107, 53, 0.4);
        }
        
        .process-title-link {
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .process-card-enhanced:hover .process-title-link {
          color: #ff6b35 !important;
          transform: translateX(5px);
        }
        
        .process-text-enhanced {
          transition: color 0.3s ease;
        }
        
        .process-card-enhanced:hover .process-text-enhanced {
          color: #2c3e50;
        }
        
        .process-shape-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(28, 36, 109, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .process-card-enhanced:hover .process-shape-glow {
          opacity: 1;
        }
      `}</style>
      <section
        className="process-area bg-top-center pt-80"
        style={{
          backgroundImage: `url(${processBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* --- Main Process Slider Section --- */}
        <div className="container">
          <div className="process-area">
            <div className="process-content text-center">
              <div
                className="title-area mb-55"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <span className="sub-title style1 text-white text-anime-style-2">
                  Our Process
                </span>
                <h2 className="sec-title text-white text-anime-style-3">
                  How It Work Process!
                </h2>
              </div>
            </div>

            <div className="slider-area">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                className="swiper th-slider has-shadow"
                id="processSlider"
              >
                {processData.map((process, index) => (
                  <SwiperSlide key={process.step}>
                    <div
                      className="process-item style-2 text-center process-card-enhanced"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={index * 100}
                    >
                      {/* <ul className="step-tag-wrap">
                        <li className="step-tag">
                          STEP {process.step.toString().padStart(2, "0")}
                        </li>
                      </ul> */}
                      <p className="box-number"> STEP {process.step.toString().padStart(2, "0")}</p>
                      <div className="process-icon mb-20 process-icon-wrapper">
                        <div className="process-shape">
                          <div className="process-shape-glow"></div>
                        </div>
                        <div className="process-circular-text">
                          <svg viewBox="0 0 100 100">
                            <path
                              id={`circlePath-${process.step}`}
                              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                              fill="transparent"
                            />
                            <text>
                              <textPath
                                xlinkHref={`#circlePath-${process.step}`}
                              >
                                TECHLAND • PROCESS • TECHLAND • PROCESS •
                              </textPath>
                            </text>
                          </svg>
                        </div>
                        <img
                          src={process.icon}
                          alt={`${process.title} Icon`}
                          style={{
                            width: "90px",
                            height: "90px",
                            position: "relative",
                            zIndex: "2",
                            objectFit: "contain",
                          }}
                          title={`${process.title} Process`}
                          loading="lazy"
                        />
                      </div>
                      <div className="process-content text-center">
                        <h3 className="box-title mb-10">
                          <Link to="#" className="process-title-link">
                            {process.title}
                          </Link>
                        </h3>
                        <p className="process-text process-text-enhanced">
                          {process.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* --- Marquee Slider Section (Unchanged) --- */}
        <div className="overflow-hidden pt-80">
          <div
            className="container-fluid p-0"
            data-cue="slideInUp"
            style={{ backgroundColor: "#1c246d" }}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView="auto"
              loop={true}
              allowTouchMove={false}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={10000}
              breakpoints={{
                0: { slidesPerView: 1.5 },
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: "auto" },
              }}
              className="swiper th-slider marquee-slider3"
            >
              {[...Array(5)].map((_, index) => (
                <React.Fragment key={index}>
                  {marqueeData.map((item) => (
                    <SwiperSlide key={`${item.id}-${index}`}>
                      <div className="marquee-card3">
                        <div className="marquee-icon">
                          <img src={marqueeIcon} alt="icon" loading="lazy" />
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="#">
                          {item.text}
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </React.Fragment>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
