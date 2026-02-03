import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.css";

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(useLocation());
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Start transition - fade out current page
      setIsTransitioning(true);

      // Phase 1: Fade out old content (300ms)
      const fadeOutTimer = setTimeout(() => {
        // Scroll to top smoothly
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });

        // Update location (change page)
        setDisplayLocation(location);

        // Phase 2: Brief pause with loading (200ms)
        const fadeInTimer = setTimeout(() => {
          // Fade in new content
          setIsTransitioning(false);
        }, 200);

        return () => clearTimeout(fadeInTimer);
      }, 300);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* Premium Loading Overlay */}
      <div
        className={`page-transition-overlay ${isTransitioning ? "active" : ""}`}
      >
        <div className="transition-content">
          {/* Animated Logo */}
          <div className="transition-logo-wrapper">
            <div className="logo-circle">
              <svg className="circle-svg" viewBox="0 0 100 100">
                <circle className="circle-bg" cx="50" cy="50" r="45" />
                <circle className="circle-progress" cx="50" cy="50" r="45" />
              </svg>
            </div>
            <div className="transition-logo">
              <img src="/assets/media/logo.png" alt="Techland" />
            </div>
          </div>

          {/* Loading Text */}
          <div className="transition-text">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div
        className={`page-content-container ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
