import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import "../../styles/custom.css";
import api from "../../services/api";

const frontend = "/assets/media/Assets/FrontEnd.jpg";
const backend = "/assets/media/Assets/BackEnd.jpg";
const ourteam = "/assets/media/Assets/OurTeam.jpg";
const admin = "/assets/media/Assets/admin.jpg";
const env = "/assets/media/Assets/env1.jpg";
const fday = "/assets/media/Assets/fday1.jpg";
const bday = "/assets/media/Assets/bday.jpg";
const env5 = "/assets/media/Assets/env5.jpg";
const market = "/assets/media/Assets/market.jpg";
const testing = "/assets/media/Assets/test.jpg";
const ceo = "/assets/media/Assets/ceo.jpeg";
const harsh = "/assets/media/Assets/core-team/harsh.jpeg";
const keerthana = "/assets/media/Assets/core-team/keerthana.jpeg";
const raaja = "/assets/media/Assets/core-team/raaja.jpeg";
const ram = "/assets/media/Assets/core-team/ram.jpeg";
const sathish = "/assets/media/Assets/core-team/sathish.jpeg";
const vicky = "/assets/media/Assets/core-team/vicky.jpeg";
const yashwanth = "/assets/media/Assets/core-team/Yashwanth.jpeg";
const bhargavi = "/assets/media/Assets/core-team/Bhargavi.jpeg";
const hr = "/assets/media/Assets/core-team/HR (1).jpeg";
const vinayKumar = "/assets/media/Assets/core-team/Vinay Kumar.jpeg";
const pradeep = "/assets/media/Assets/core-team/pradeep.jpeg";
const sathish_aws = "/assets/media/Assets/core-team/sathish_aws.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
import config from "../../config";

const OurTeam = () => {
  const seo = getSEO("ourTeam");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const teamGroups = [
    {
      teamName: "Our Team",
      image: ourteam,
      description:
        "At Techland IT Solutions, our skilled teams — from frontend and backend development to design and strategy — collaborate to deliver powerful, innovative digital solutions that drive results.",
    },
    {
      teamName: "Frontend Team",
      image: frontend,
      description:
        "Our frontend team ensures beautiful, responsive, and user-friendly web experiences using the latest technologies like React, Vue, and Tailwind CSS.",
    },
    {
      teamName: "Backend Team",
      image: backend,
      description:
        "Responsible for building secure, scalable, and high-performance server-side applications using Node.js, Express, Python, and databases.",
    },
    {
      teamName: "Admin Team",
      image: admin,
      description:
        "Our creative design team crafts intuitive UI/UX solutions that align with your brand identity and enhance customer engagement.",
    },
    {
      teamName: "Sales & Digital Marketing Team",
      image: market,
      description:
        "Expanding our reach and boosting growth through effective sales strategies and impactful digital marketing solutions tailored to connect with the right audience.",
    },
    {
      teamName: "Testing Team",
      image: testing,
      description:
        "Ensuring quality and reliability through rigorous testing processes that deliver flawless, high-performing solutions.",
    },
  ];

  const [activities, setActivities] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const backendUrl = config.ASSETS_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teamRes, activitiesRes] = await Promise.all([
          api.get("/team"),
          api.get("/activities")
        ]);
        setTeamMembers(teamRes.data.filter(member => member.isActive));
        setActivities(activitiesRes.data.filter(act => act.isActive));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  // Combine all images for gallery
  const galleryImages = [
    { image: ceo, title: "Madhu Kadali - Founder / CEO", type: "Leadership" },
    ...teamGroups.map((team) => ({
      image: team.image,
      title: team.teamName,
      type: "Team",
    })),
    ...activities.map((act) => ({
      image: act.image.startsWith("http") ? act.image : `${backendUrl}${act.image}`,
      title: act.title,
      type: "Events",
      description: act.description,
      date: act.date,
    })),
  ];

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isGalleryOpen) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen]);

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />
      {/* Breadcrumb Section */}
      <div className="breadcumb-area style2 bg-smoke4">
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("assets/img/bg/breadcumb-bg.jpg")' }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1
                className="breadcumb-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Our Team
              </h1>
              <ul
                className="breadcumb-menu"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Our Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="team-area space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title text-anime-style-2">Our Team</span>
                <h2 className="sec-title text-anime-style-3">
                  Meet Our Team | Expert Developers & Marketers in Hyderabad
                </h2>
                <p>
                  Discover the skilled team behind Techland IT Solutions,
                  delivering top-tier digital marketing, web development, and
                  app development services in Hyderabad.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className=" col-lg-10">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="service-hero-content">
                    <h2
                      className="service-hero-title mb-0 text-anime-style-2"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Madhu Kadali
                    </h2>
                    <h6
                      className="service-hero-text mb-40 text-bold"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Founder / CEO
                    </h6>

                    <div data-aos="fade-up" data-aos-delay="300">
                      <p>
                        Under the visionary leadership of Madhu Kadali, Techland
                        IT Solutions was founded in 2018 with a mission to
                        create impactful digital solutions. The company quickly
                        gained momentum, celebrating a major milestone in 2020
                        with the delivery of its 100th successful project across
                        diverse industries. This early success demonstrated the
                        company's versatility and set a strong foundation for
                        future growth.
                      </p>
                      <p>
                        Building on this momentum, Techland IT Solutions
                        expanded its global reach in 2022, establishing a robust
                        client base in the USA, Europe, and Asia. In 2024, the
                        company further solidified its innovative edge by
                        launching AI-driven solutions. These tools are designed
                        to help businesses automate workflows and improve
                        decision-making, positioning Techland as a
                        forward-thinking industry leader.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-hero-image">
                    <div className="service-hero-img ceo-img">
                      <img src={ceo} alt="ceo" loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="choose-area3 space light-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title-area text-center">
                  <span className="sub-title extra-sub text-anime-style-2">
                    Our Core Team
                  </span>
                  <h2 className="sec-title text-white text-anime-style-3">
                    Our Experts at Techland IT Solutions
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="team-inner team-slider-1">
              <div className="row gy-30 justify-content-center">
                {teamMembers.length > 0 ? (
                  teamMembers.map((member, index) => (
                    <div className="col-xl-3 col-md-6" key={member._id || index} data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="team-card-premium">
                        <div className="team-img-wrapper">
                          <img
                            src={member.image.startsWith("http") ? member.image : `${backendUrl}${member.image}`}
                            alt={member.name}
                            loading="lazy"
                            className="team-member-photo"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x400?text=Techland+Member"; }}
                          />
                        </div>
                        <div className="team-info-box">
                          <h3 className="team-name">{member.name}</h3>
                          <p className="team-role">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Fallback to static if no data or loading (optional, but good for perceived performance if we wanted)
                  // For now, if empty, it just shows nothing or I could keep the static list as initial state. 
                  // I will assume the user wants ONLY the dynamic ones.
                  <div className="text-center text-white">Loading team members...</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="service-area overflow-hidden space" id="service-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-7 col-md-8 col-sm-9">
                <div className="title-area service-title-box mb-50 text-center">
                  <span className="sub-title text-anime-style-2">
                    Activities
                  </span>
                  <h2 className="sec-title text-anime-style-3">
                    Our Team Activities
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              {activities.map((event) => (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={event._id}
                  data-aos="flip-up"
                >
                  <div className="service-box service-style-1 sv-card7">
                    <div className="service-img">
                      <img
                        src={event.image.startsWith("http") ? event.image : `${backendUrl}${event.image}`}
                        alt={event.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="service-content sv-content6">
                      <div className="event-date mt-3 mb-2">
                        <img
                          src="/assets/icons/calendar.png"
                          alt="Calendar"
                          width="18"
                          height="18"
                          className="event-calendar-icon"
                          loading="lazy"
                        />
                        <p className="mb-0 pb-0"> {event.date}</p>
                      </div>
                      <h3 className="box-title">{event.title}</h3>
                      <p className="service-box_text">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="gallery-modal">
          <div className="gallery-overlay" onClick={closeGallery}></div>
          <div className="gallery-content">
            <button className="gallery-close" onClick={closeGallery}>
              <img
                src="/assets/icons/delete-sign.png"
                alt="Close"
                width="28"
                height="28"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </button>

            <button className="gallery-nav gallery-prev" onClick={prevImage}>
              <img
                src="/assets/icons/back.png"
                alt="Previous"
                width="32"
                height="32"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </button>

            <div className="gallery-image-container">
              <img
                src={galleryImages[currentImageIndex].image}
                alt={galleryImages[currentImageIndex].title}
                className="gallery-main-image"
              />
              <div className="gallery-info">
                <span className="gallery-badge">
                  {galleryImages[currentImageIndex].type}
                </span>
                <h3>{galleryImages[currentImageIndex].title}</h3>
                {galleryImages[currentImageIndex].date && (
                  <p className="gallery-date">
                    <i className="far fa-calendar-alt me-2"></i>
                    {galleryImages[currentImageIndex].date}
                  </p>
                )}
                {galleryImages[currentImageIndex].description && (
                  <p className="gallery-description">
                    {galleryImages[currentImageIndex].description}
                  </p>
                )}
                <p className="gallery-counter">
                  {currentImageIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>

            <button className="gallery-nav gallery-next" onClick={nextImage}>
              <img
                src="/assets/icons/forward.png"
                alt="Next"
                width="32"
                height="32"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </button>

            {/* Thumbnails */}
            <div className="gallery-thumbnails">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`gallery-thumbnail ${index === currentImageIndex ? "active" : ""
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img.image} alt={img.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
