import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setOpenContactModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const handleOpenContactModal = (e) => {
    e.preventDefault();
    if (setOpenContactModal) {
      setOpenContactModal(true);
    }
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menuName, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <div>
      <div
        className={`th-menu-wrapper onepage-nav ${
          isMenuOpen ? "th-body-visible" : ""
        }`}
      >
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle" onClick={toggleMenu}>
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link to="/">
              <img src="/assets/media/logo.png" alt="Techland" loading="lazy" />
            </Link>
          </div>
          <div className="th-mobile-menu allow-natural-scroll">
            <ul>
              <li className="mega-menu-wrap">
                <NavLink to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About Us
                </NavLink>
              </li>
              <li
                className={`menu-item-has-children ${
                  openSubmenu === "services" ? "open" : ""
                }`}
              >
                <Link
                  to="#"
                  onClick={(e) => toggleSubmenu("services", e)}
                  className={
                    location.pathname.startsWith("/services") ? "active" : ""
                  }
                >
                  Our Services
                </Link>
                <ul
                  className={`sub-menu ${
                    openSubmenu === "services" ? "open" : ""
                  }`}
                >
                  <li>
                    <Link
                      to="/services/mobile-app-development"
                      className={
                        location.pathname === "/services/mobile-app-development"
                          ? "active active-service-item"
                          : ""
                      }
                      onClick={closeMenu}
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/web-development"
                      className={
                        location.pathname === "/services/web-development"
                          ? "active active-service-item"
                          : ""
                      }
                      onClick={closeMenu}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/digital-marketing"
                      className={
                        location.pathname === "/services/digital-marketing"
                          ? "active active-service-item"
                          : ""
                      }
                      onClick={closeMenu}
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
                          ? "active active-service-item"
                          : ""
                      }
                      onClick={closeMenu}
                    >
                      Custom Software Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/ui-ux-design"
                      className={
                        location.pathname === "/services/ui-ux-design"
                          ? "active active-service-item"
                          : ""
                      }
                      onClick={closeMenu}
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/staffing-services"
                      className={
                        location.pathname === "/services/staffing-services"
                          ? "active active-service-item"
                          : ""
                      }
                      onClick={closeMenu}
                    >
                      Staffing Services
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/portfolio" onClick={closeMenu}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-team" onClick={closeMenu}>
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" onClick={closeMenu}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout1 header-layout14">
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src="/assets/media/logo.png"
                        alt="Techland"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="mega-menu-wrap">
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>

                      <li className="menu-item-has-children">
                        <Link
                          to="#"
                          className={
                            location.pathname.startsWith("/services")
                              ? "active"
                              : ""
                          }
                        >
                          Our Services
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to="/services/mobile-app-development"
                              className={
                                location.pathname ===
                                "/services/mobile-app-development"
                                  ? "active active-service-item"
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
                                location.pathname ===
                                "/services/web-development"
                                  ? "active active-service-item"
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
                                location.pathname ===
                                "/services/digital-marketing"
                                  ? "active active-service-item"
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
                                  ? "active active-service-item"
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
                                  ? "active active-service-item"
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
                                location.pathname ===
                                "/services/staffing-services"
                                  ? "active active-service-item"
                                  : ""
                              }
                            >
                              Staffing Services
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                      </li>
                      <li>
                        <NavLink to="/our-team">Our Team</NavLink>
                      </li>
                      <li>
                        <NavLink to="blogs">Blog</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="blogs">Careers</NavLink>
                      </li> */}
                      <li>
                        <NavLink to="/contact">Contact us</NavLink>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                    onClick={toggleMenu}
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <button
                      onClick={handleOpenContactModal}
                      className="th-btn style6 th-radius th-icon"
                      style={{ border: "none", cursor: "pointer" }}
                    >
                      Free Quote{" "}
                      <i className="fa-light fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
