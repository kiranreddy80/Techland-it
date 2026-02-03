import React from "react";
import { Link } from "react-router-dom";

const GlobalUtilities = () => {
  return (
    <>
      {/* Slider Drag Cursor */}
      <div className="slider-drag-cursor d-flex align-items-center justify-content-between">
        <span className="drag-icon-left">
          <img
            src="assets/img/icon/drag-arrow-left.svg"
            alt="Drag left arrow"
          />
        </span>
        DRAG
        <span className="drag-icon-right">
          <img
            src="assets/img/icon/drag-arrow-right.svg"
            alt="Drag right arrow"
          />
        </span>
      </div>

      {/* Color Scheme Switcher */}
      {/* <div className="color-scheme-wrap active">
        <button className="switchIcon">
          <i className="fa-solid fa-palette"></i>
        </button>
        <h4 className="color-scheme-wrap-title">
          <i className="far fa-palette"></i>STYLE SWITCHER
        </h4>
        <div className="color-switch-btns">
          <button data-color="#684DF4">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#086ad8">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#FC3737">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#8a2be2">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#104CBA">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#ffbf4f">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#323F7C">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#0e2bc5">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#F79C53">
            <i className="fa-solid fa-droplet"></i>
          </button>
          <button data-color="#6957af">
            <i className="fa-solid fa-droplet"></i>
          </button>
        </div>
        <a
          href="https://themeforest.net/search/themehour"
          className="th-btn text-center"
        >
          <i className="fa fa-shopping-cart me-2"></i> Purchase
        </a>
      </div> */}
    </>
  );
};

export default GlobalUtilities;
