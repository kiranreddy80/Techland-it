import React from "react";
import { Link, useLocation } from "react-router-dom";
import { blogPosts } from "../pages/blogs/blogData.jsx";
import { isWinterSeason } from "../utils/seasonUtils";

function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Get first 6 blogs for the gallery section
  const blogImages = blogPosts.slice(0, 6);

  // Check if it's winter season for snow effect
  const isWinter = isWinterSeason();

  // Social links with 3D icons and Font Awesome fallback
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/techland-it-solutions/",
      icon: "fab fa-linkedin-in",
      icon3d: "/assets/icons/linkedin.png",
      label: "LinkedIn",
    },
    {
      href: `https://wa.me/917842385604?text=${encodeURI(
        "Hi Techland,\nI'm inquiring about the website development and mobile app development"
      )}`,
      icon: "fab fa-whatsapp",
      icon3d: "/assets/icons/whatsapp.png",
      label: "WhatsApp",
    },
    {
      href: "tel:+917842385604",
      icon: "fas fa-phone-alt",
      icon3d: "/assets/icons/phone.png",
      label: "Phone",
    },
    {
      href: "https://www.instagram.com/techlanditsolutions?igsh=MW1hemQ4YngxMWQ2aQ==",
      icon: "fab fa-instagram",
      icon3d: "/assets/icons/instagram.png",
      label: "Instagram",
    },
  ];

  return (
    <div>
      <style>{`
        /* Advanced 3D Snow Effect for Footer - ENHANCED */
        @keyframes footerSnowfall3D {
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

        @keyframes footerSnowfallWind {
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

        @keyframes footerSnowfallSlow {
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

        @keyframes footerSnowGlow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1)) 
                    drop-shadow(0 0 10px rgba(173, 216, 230, 0.8))
                    drop-shadow(0 0 15px rgba(135, 206, 250, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1)) 
                    drop-shadow(0 0 20px rgba(173, 216, 230, 1))
                    drop-shadow(0 0 30px rgba(135, 206, 250, 0.8));
          }
        }

        @keyframes footerSnowTwirl {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(var(--twirl-x)) rotate(720deg) scale(1.2);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(0) rotate(1080deg) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes footerSnowSparkle {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .footer-snow-container {
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

        .footer-snow-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .footer-snow-layer-1 {
          z-index: 3;
          filter: blur(0px);
        }

        .footer-snow-layer-2 {
          z-index: 2;
          filter: blur(0.5px);
          opacity: 0.85;
        }

        .footer-snow-layer-3 {
          z-index: 1;
          filter: blur(1px);
          opacity: 0.7;
        }

        .footer-snowflake {
          position: absolute;
          top: -10vh;
          color: #fff;
          font-size: 1em;
          opacity: 0.95;
          will-change: transform, opacity;
          text-shadow: 0 0 15px rgba(255, 255, 255, 1),
                       0 0 25px rgba(173, 216, 230, 0.8),
                       0 0 35px rgba(135, 206, 250, 0.6),
                       0 0 45px rgba(100, 149, 237, 0.4);
        }

        /* Layer 1 - Close snowflakes (large, slow) - 10 snowflakes */
        .footer-snow-layer-1 .footer-snowflake:nth-child(1) { left: 5%; --drift-x: 80px; --drift-z: 100px; animation: footerSnowfall3D 15s linear infinite; animation-delay: 0s; font-size: 2.2em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(2) { left: 15%; --drift-slow: -60px; animation: footerSnowfallSlow 18s linear infinite; animation-delay: 2s; font-size: 2em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(3) { left: 25%; animation: footerSnowfallWind 16s ease-in-out infinite; animation-delay: 1s; font-size: 2.4em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(4) { left: 35%; --twirl-x: 100px; animation: footerSnowTwirl 17s linear infinite; animation-delay: 3s; font-size: 2.1em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(5) { left: 45%; --drift-x: -90px; --drift-z: 80px; animation: footerSnowfall3D 19s linear infinite; animation-delay: 1.5s; font-size: 2.3em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(6) { left: 55%; --drift-slow: 70px; animation: footerSnowfallSlow 20s linear infinite; animation-delay: 0.5s; font-size: 1.9em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(7) { left: 65%; --drift-x: 85px; --drift-z: 90px; animation: footerSnowfall3D 16s linear infinite; animation-delay: 2.5s; font-size: 2.2em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(8) { left: 75%; animation: footerSnowfallWind 17s ease-in-out infinite; animation-delay: 1.8s; font-size: 2em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(9) { left: 85%; --twirl-x: -95px; animation: footerSnowTwirl 18s linear infinite; animation-delay: 0.8s; font-size: 2.1em; }
        .footer-snow-layer-1 .footer-snowflake:nth-child(10) { left: 95%; --drift-slow: -75px; animation: footerSnowfallSlow 19s linear infinite; animation-delay: 3.5s; font-size: 1.8em; }

        /* Layer 2 - Medium snowflakes (medium size, medium speed) - 15 snowflakes */
        .footer-snow-layer-2 .footer-snowflake:nth-child(1) { left: 3%; --drift-x: 60px; --drift-z: 50px; animation: footerSnowfall3D 12s linear infinite; animation-delay: 0.3s; font-size: 1.5em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(2) { left: 10%; animation: footerSnowfallWind 13s ease-in-out infinite; animation-delay: 1.2s; font-size: 1.3em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(3) { left: 17%; --drift-slow: -50px; animation: footerSnowfallSlow 14s linear infinite; animation-delay: 2.1s; font-size: 1.4em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(4) { left: 24%; --twirl-x: -70px; animation: footerSnowTwirl 11s linear infinite; animation-delay: 0.8s; font-size: 1.6em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(5) { left: 31%; --drift-x: -55px; --drift-z: 60px; animation: footerSnowfall3D 13s linear infinite; animation-delay: 1.7s; font-size: 1.2em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(6) { left: 38%; animation: footerSnowfallWind 15s ease-in-out infinite; animation-delay: 2.5s; font-size: 1.5em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(7) { left: 45%; --drift-slow: 65px; animation: footerSnowfallSlow 12s linear infinite; animation-delay: 0.9s; font-size: 1.3em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(8) { left: 52%; --twirl-x: 80px; animation: footerSnowTwirl 14s linear infinite; animation-delay: 3.2s; font-size: 1.4em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(9) { left: 59%; --drift-x: 45px; --drift-z: 40px; animation: footerSnowfall3D 16s linear infinite; animation-delay: 1.1s; font-size: 1.6em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(10) { left: 66%; animation: footerSnowfallWind 11s ease-in-out infinite; animation-delay: 2.8s; font-size: 1.2em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(11) { left: 73%; --drift-slow: -60px; animation: footerSnowfallSlow 13s linear infinite; animation-delay: 1.5s; font-size: 1.5em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(12) { left: 80%; --twirl-x: -75px; animation: footerSnowTwirl 12s linear infinite; animation-delay: 0.6s; font-size: 1.3em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(13) { left: 87%; --drift-x: 55px; --drift-z: 45px; animation: footerSnowfall3D 14s linear infinite; animation-delay: 2.3s; font-size: 1.4em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(14) { left: 93%; animation: footerSnowfallWind 15s ease-in-out infinite; animation-delay: 1.9s; font-size: 1.2em; }
        .footer-snow-layer-2 .footer-snowflake:nth-child(15) { left: 97%; --drift-slow: 70px; animation: footerSnowfallSlow 11s linear infinite; animation-delay: 3.7s; font-size: 1.6em; }

        /* Layer 3 - Far snowflakes (small, fast) - 20 snowflakes */
        .footer-snow-layer-3 .footer-snowflake:nth-child(1) { left: 2%; --drift-x: 30px; --drift-z: 20px; animation: footerSnowfall3D 8s linear infinite; animation-delay: 0s; font-size: 0.8em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(2) { left: 7%; animation: footerSnowfallWind 9s ease-in-out infinite; animation-delay: 0.5s; font-size: 0.7em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(3) { left: 12%; --drift-slow: -35px; animation: footerSnowfallSlow 10s linear infinite; animation-delay: 1.2s; font-size: 0.9em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(4) { left: 17%; --twirl-x: -40px; animation: footerSnowTwirl 7s linear infinite; animation-delay: 1.8s; font-size: 0.8em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(5) { left: 22%; --drift-x: -25px; --drift-z: 30px; animation: footerSnowfall3D 9s linear infinite; animation-delay: 0.7s; font-size: 0.7em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(6) { left: 27%; animation: footerSnowfallWind 8s ease-in-out infinite; animation-delay: 2.3s; font-size: 0.9em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(7) { left: 32%; --drift-slow: 40px; animation: footerSnowfallSlow 11s linear infinite; animation-delay: 1.5s; font-size: 0.8em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(8) { left: 37%; --twirl-x: 50px; animation: footerSnowTwirl 9s linear infinite; animation-delay: 0.3s; font-size: 0.7em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(9) { left: 42%; --drift-x: 35px; --drift-z: 25px; animation: footerSnowfall3D 10s linear infinite; animation-delay: 2.8s; font-size: 0.9em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(10) { left: 47%; animation: footerSnowfallWind 7s ease-in-out infinite; animation-delay: 1.9s; font-size: 0.8em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(11) { left: 52%; --drift-slow: -30px; animation: footerSnowfallSlow 8s linear infinite; animation-delay: 0.4s; font-size: 0.7em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(12) { left: 57%; --twirl-x: -45px; animation: footerSnowTwirl 10s linear infinite; animation-delay: 2.1s; font-size: 0.9em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(13) { left: 62%; --drift-x: 28px; --drift-z: 22px; animation: footerSnowfall3D 9s linear infinite; animation-delay: 1.3s; font-size: 0.8em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(14) { left: 67%; animation: footerSnowfallWind 8s ease-in-out infinite; animation-delay: 2.7s; font-size: 0.7em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(15) { left: 72%; --drift-slow: 38px; animation: footerSnowfallSlow 11s linear infinite; animation-delay: 0.9s; font-size: 0.9em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(16) { left: 77%; --twirl-x: 48px; animation: footerSnowTwirl 7s linear infinite; animation-delay: 3.1s; font-size: 0.8em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(17) { left: 82%; --drift-x: -32px; --drift-z: 28px; animation: footerSnowfall3D 10s linear infinite; animation-delay: 1.6s; font-size: 0.7em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(18) { left: 87%; animation: footerSnowfallWind 9s ease-in-out infinite; animation-delay: 2.4s; font-size: 0.9em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(19) { left: 92%; --drift-slow: -33px; animation: footerSnowfallSlow 8s linear infinite; animation-delay: 0.2s; font-size: 0.8em; }
        .footer-snow-layer-3 .footer-snowflake:nth-child(20) { left: 97%; --twirl-x: -42px; animation: footerSnowTwirl 9s linear infinite; animation-delay: 2.9s; font-size: 0.7em; }

        /* Glowing snowflakes with enhanced effect */
        .footer-snowflake.glow {
          animation: footerSnowGlow 2.5s ease-in-out infinite;
        }

        /* Sparkling snowflakes */
        .footer-snowflake.sparkle {
          animation: footerSnowSparkle 1.5s ease-in-out infinite;
        }

        /* 3D Social Media Icons Styling */
        .th-social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin: 0 8px;
          border-radius: 12px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .th-social a::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .th-social a:hover::before {
          opacity: 1;
        }

        .th-social a:hover {
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3),
                      0 5px 15px rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .th-social a img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .th-social a:hover img {
          transform: scale(1.15) rotateY(360deg);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        @keyframes float3d {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
          }
          50% {
            transform: translateY(-5px) rotateZ(2deg);
          }
        }

        .th-social a:nth-child(1) {
          animation: float3d 3s ease-in-out infinite;
          animation-delay: 0s;
        }

        .th-social a:nth-child(2) {
          animation: float3d 3s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .th-social a:nth-child(3) {
          animation: float3d 3s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        .th-social a:nth-child(4) {
          animation: float3d 3s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        /* Hover effect for footer contact number */
        .about-contact-details-text a {
          transition: color 0.3s ease;
        }
        .about-contact-details-text a:hover {
          color: #fff !important;
        }

        /* Hover effect for footer location info */
        .info-box_link:hover {
          color: #fff !important;
        }
      `}</style>

      <footer
        className="footer-wrapper footer-layout1  space-top bg-title footer-layout10"
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{ position: "relative" }}
      >
        <div className="shape-mockup shadow-title" data-top="0" data-right="0">
          Techland
        </div>

        {/* Advanced 3-Layer Snow Effect Container - ENHANCED (Winter Only) */}
        {isWinter && (
          <div className="footer-snow-container">
            {/* Layer 1 - Foreground (Close, Large, Slow) - 10 snowflakes */}
            <div className="footer-snow-layer footer-snow-layer-1">
              <div className="footer-snowflake glow">❄</div>
              <div className="footer-snowflake sparkle">❅</div>
              <div className="footer-snowflake glow">❆</div>
              <div className="footer-snowflake">✻</div>
              <div className="footer-snowflake glow">❄</div>
              <div className="footer-snowflake sparkle">✼</div>
              <div className="footer-snowflake glow">❅</div>
              <div className="footer-snowflake">❆</div>
              <div className="footer-snowflake sparkle">✽</div>
              <div className="footer-snowflake glow">❄</div>
            </div>

            {/* Layer 2 - Midground (Medium, Medium Speed) - 15 snowflakes */}
            <div className="footer-snow-layer footer-snow-layer-2">
              <div className="footer-snowflake">❅</div>
              <div className="footer-snowflake glow">❆</div>
              <div className="footer-snowflake sparkle">❄</div>
              <div className="footer-snowflake">✽</div>
              <div className="footer-snowflake glow">❅</div>
              <div className="footer-snowflake">✻</div>
              <div className="footer-snowflake sparkle">❆</div>
              <div className="footer-snowflake glow">❄</div>
              <div className="footer-snowflake">✼</div>
              <div className="footer-snowflake sparkle">❅</div>
              <div className="footer-snowflake glow">❆</div>
              <div className="footer-snowflake">✽</div>
              <div className="footer-snowflake sparkle">❄</div>
              <div className="footer-snowflake">✻</div>
              <div className="footer-snowflake glow">❅</div>
            </div>

            {/* Layer 3 - Background (Far, Small, Fast) - 20 snowflakes */}
            <div className="footer-snow-layer footer-snow-layer-3">
              <div className="footer-snowflake">❄</div>
              <div className="footer-snowflake">❅</div>
              <div className="footer-snowflake sparkle">❆</div>
              <div className="footer-snowflake">✻</div>
              <div className="footer-snowflake">❄</div>
              <div className="footer-snowflake sparkle">✽</div>
              <div className="footer-snowflake">❅</div>
              <div className="footer-snowflake">✼</div>
              <div className="footer-snowflake sparkle">❆</div>
              <div className="footer-snowflake">❄</div>
              <div className="footer-snowflake">✻</div>
              <div className="footer-snowflake sparkle">❅</div>
              <div className="footer-snowflake">❆</div>
              <div className="footer-snowflake">✽</div>
              <div className="footer-snowflake sparkle">❄</div>
              <div className="footer-snowflake">✼</div>
              <div className="footer-snowflake">❅</div>
              <div className="footer-snowflake sparkle">❆</div>
              <div className="footer-snowflake">✻</div>
              <div className="footer-snowflake">❄</div>
            </div>
          </div>
        )}

        <div className="widget-area">
          <div className="container">
            {/* Newsletter Section (Kept from second footer) */}

            <div className="row justify-content-between">
              {/* About Us Column */}
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo">
                      {/* Logo from second footer, unchanged */}
                      <Link to="/">
                        <img
                          src="/assets/media/logo.png"
                          alt="Atek"
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    {/* About text from first footer */}
                    <p className="about-text">
                      We are expert designer team, There have a lot of designer
                      and developer If you have any project you can hire Create
                      a website.
                    </p>
                    {/* Social links with 3D icons */}
                    <div className="th-social">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          aria-label={link.label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={link.icon3d}
                            alt={link.label}
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Links Column */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link
                          to="/"
                          className={location.pathname === "/" ? "active" : ""}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className={
                            location.pathname === "/about" ? "active" : ""
                          }
                        >
                          About us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          className={
                            location.pathname === "/services" ||
                            location.pathname.startsWith("/services/")
                              ? "active"
                              : ""
                          }
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/portfolio"
                          className={
                            location.pathname === "/portfolio" ? "active" : ""
                          }
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/our-team"
                          className={
                            location.pathname === "/our-team" ? "active" : ""
                          }
                        >
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className={
                            location.pathname === "/contact" ? "active" : ""
                          }
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Our Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link
                          to="/services/mobile-app-development"
                          className={
                            location.pathname ===
                            "/services/mobile-app-development"
                              ? "active"
                              : ""
                          }
                        >
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/web-development"
                          className={
                            location.pathname === "/services/web-development"
                              ? "active"
                              : ""
                          }
                        >
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/digital-marketing"
                          className={
                            location.pathname === "/services/digital-marketing"
                              ? "active"
                              : ""
                          }
                        >
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/custom-software-development"
                          className={
                            location.pathname ===
                            "/services/custom-software-development"
                              ? "active"
                              : ""
                          }
                        >
                          Custom Software Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/ui-ux-design"
                          className={
                            location.pathname === "/services/ui-ux-design"
                              ? "active"
                              : ""
                          }
                        >
                          UI/UX Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/staffing-services"
                          className={
                            location.pathname === "/services/staffing-services"
                              ? "active"
                              : ""
                          }
                        >
                          Staffing Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recent Blog Posts Column */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent Blog Posts</h3>
                  <div className="sidebar-gallery">
                    {blogImages.map((blog, index) => (
                      <div className="gallery-thumb" key={index}>
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          loading="lazy"
                        />
                        <Link
                          to={`/blogs/${blog.id}`}
                          className="gallery-btn"
                          title={blog.title}
                        >
                          <i className="fas fa-book-open"></i>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-between">
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="about-contact-grid inner-style">
                  <span className="about-contact-icon">
                    <i className="fa-solid fa-headphones-simple"></i>
                  </span>
                  <div className="about-contact-details">
                    <span className="sec-text">Call Us For Query</span>
                    <p className="about-contact-details-text info-box_link">
                      <a href="tel:+917842385604">+91 784 238 5604</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="about-contact-grid inner-style">
                  <span className="about-contact-icon">
                    <i className="fa-light fa-envelope-open-text"></i>
                  </span>
                  <div className="about-contact-details">
                    <span className="sec-text">Email Us Anytime</span>
                    <p className="about-contact-details-text">
                      <a href="mailto:info@techlanditsolutions.com">
                        info@techlanditsolutions.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 mb-lg-0">
                <div className="info-box_text align-items-center about-contact-grid inner-style">
                  <span className="about-contact-icon">
                    <i className="fa-thin fa-map-location-dot"></i>
                  </span>
                  <div className="details">
                    <p>
                      <a
                        href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-box_link"
                      >
                        Flat No. 101, Sirisampada Hitec Apartment, H. No.
                        1-63/C/8/2, Plot No. 2, Block No. 8, Kavuri Hills
                        Madhapur, Hyderabad, Telangana 500081
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="copyright-wrap">
          <div className="container">
            <div className="row justify-content-lg-between align-items-center">
              <div className="col-lg-6"></div>
              <div className="col-lg-6 text-center text-lg-end">
                <div className="footer-links">
                  <p className="copyright-text">
                    Copyright © {currentYear}{" "}
                    <Link to="/">Techland IT Solutions</Link>. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
