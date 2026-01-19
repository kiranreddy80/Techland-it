import React from "react";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        {/* Logo with Rotating Circle */}
        <div className="loader-circle-container">
          {/* Rotating Circle Border */}
          <div className="loader-circle-border">
            <svg className="loader-circle-svg" viewBox="0 0 100 100">
              <circle className="loader-circle-bg" cx="50" cy="50" r="45" />
              <circle
                className="loader-circle-progress"
                cx="50"
                cy="50"
                r="45"
              />
            </svg>
          </div>

          {/* Logo in Center */}
          <div className="loader-logo">
            <img src="/assets/media/logo.png" alt="Logo" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="loader-text">
          <h2>Loading</h2>
          <div className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="loader-progress">
          <div className="loader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
