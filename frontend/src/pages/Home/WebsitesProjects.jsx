import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { categories } from "../portfolio/projectsData";
import api from "../../services/api";
import config from "../../config";

const WebsitesProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const observerRef = useRef(null);
  const backendUrl = config.ASSETS_URL;

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const formatCategoryForUrl = (category) => {
    const safeCategory = category || "uncategorized";
    return safeCategory.toLowerCase().replace(/ /g, "-");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        setDynamicProjects(data.filter(p => p.isActive !== false && (p.platform === "Web" || !p.platform)));
      } catch (error) {
        console.error("Error fetching web projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const webProjects = useMemo(() => {
    const staticWebProjects = [];

    Object.keys(categories).forEach((categoryKey) => {
      const categoryProjects = categories[categoryKey];
      const webProjectsInCategory = categoryProjects
        .filter((project) => project.platform === "Web")
        .map((project) => ({
          ...project,
          category: categoryKey,
          compositeId: project.id
            ? `${categoryKey}-${project.id}`
            : `${categoryKey}-${project.title.replace(/\s+/g, "-")}`,
        }));
      staticWebProjects.push(...webProjectsInCategory);
    });

    const mappedDynamic = dynamicProjects.map(p => ({
      ...p,
      compositeId: p._id,
      category: p.category || "General",
      image: p.image.startsWith("http") ? p.image : `${backendUrl}${p.image}`
    }));

    // Show 2 dynamic (if available) and fill rest with static
    const combined = [...mappedDynamic, ...staticWebProjects];
    return combined.slice(0, 7);
  }, [dynamicProjects]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleItems((prev) => new Set([...prev, index]));
        }
      });
    }, options);

    // Observe all project cards
    const projectCards = document.querySelectorAll(".blog-grid4_wrapp");
    projectCards.forEach((card) => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [webProjects]);

  return (
    <section
      className="bg-smoke space"
      style={{ backgroundImage: "url(assets/img/bg/team_bg_1.png)" }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-5">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area text-center text-lg-start pe-xl-5">
                  <span className="sub-title">Our Website Projects</span>
                  <h2 className="sec-title">
                    Transforming Ideas into Innovations
                  </h2>

                  <Link to="/portfolio" className="th-btn style4 th-icon">
                    See More Projects{" "}
                    <i className="fa-regular fa-folder-open"></i>
                  </Link>
                </div>

                <div className="blog-shape text-lg-start text-center">
                  <img
                    src="assets/img/shape/blog-present.png"
                    alt="decorative shape"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">
            <div className="blog-grid4-static-wrap">
              {webProjects.map((project, index) => {
                const text = project.project_overview || project.description;
                const isExpanded = expandedIndex === index;
                const shortText =
                  text?.length > 120 ? text.slice(0, 120) + "..." : text;
                const isVisible = visibleItems.has(index);

                return (
                  <div
                    className={`col-12 blog-grid4_wrapp ${isVisible ? "animate-in" : "animate-out"
                      }`}
                    key={project.compositeId}
                    data-index={index}
                    style={{
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="blog-grid4 th-ani style4 mt-8 p-4">
                      <div className="box-content">
                        <h3 className="box-title">{project.title}</h3>

                        {/* Read More / Read Less */}
                        <p>{isExpanded ? text : shortText}</p>

                        {text?.length > 120 && (
                          <button
                            className="th-btn style4 th-icon"
                            style={{
                              border: "none",
                              padding: "6px 14px",
                              cursor: "pointer",
                            }}
                            onClick={() => toggleReadMore(index)}
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        )}

                        {/* Full details page */}
                        <Link
                          to={`/portfolio/${formatCategoryForUrl(
                            project.category
                          )}/${project.compositeId}`}
                          className="th-btn style4 th-icon mt-2"
                        >
                          View Project Details{" "}
                          <i className="fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>

                      <div className="blog-img global-img">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesProjects;
