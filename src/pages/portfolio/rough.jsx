import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { getSEO } from "../../config/seoConfig";
import Masonry from "react-masonry-css";
import { categories } from "./projectsData";

const projectTypeTabs = [
  {
    id: "all",
    label: "All Projects",
    icon: "📁",
    color: "#667eea",
    bgColor: "#f0f4ff",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: "📱",
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  {
    id: "web",
    label: "Web Projects",
    icon: "🌐",
    color: "#06b6d4",
    bgColor: "#ecfeff",
  },
];

const categoryIcons = {
  All: { icon: "📋", color: "#667eea", bgColor: "#f0f4ff" },
  "E-Commerce": { icon: "🛒", color: "#f59e0b", bgColor: "#fef3c7" },
  Healthcare: { icon: "🏥", color: "#ef4444", bgColor: "#fee2e2" },
  Education: { icon: "🎓", color: "#8b5cf6", bgColor: "#f5f3ff" },
  Finance: { icon: "💰", color: "#10b981", bgColor: "#d1fae5" },
  "Social Media": { icon: "📱", color: "#ec4899", bgColor: "#fce7f3" },
  Entertainment: { icon: "🎬", color: "#f43f5e", bgColor: "#ffe4e6" },
  "Food & Delivery": { icon: "🍔", color: "#f97316", bgColor: "#ffedd5" },
  Travel: { icon: "✈️", color: "#06b6d4", bgColor: "#cffafe" },
  "Real Estate": { icon: "🏠", color: "#14b8a6", bgColor: "#ccfbf1" },
  Fitness: { icon: "💪", color: "#84cc16", bgColor: "#ecfccb" },
  Business: { icon: "💼", color: "#6366f1", bgColor: "#e0e7ff" },
  Productivity: { icon: "✅", color: "#a855f7", bgColor: "#f3e8ff" },
  Gaming: { icon: "🎮", color: "#d946ef", bgColor: "#fae8ff" },
  News: { icon: "📰", color: "#64748b", bgColor: "#f1f5f9" },
  Music: { icon: "🎵", color: "#f43f5e", bgColor: "#ffe4e6" },
  Photography: { icon: "📷", color: "#0ea5e9", bgColor: "#e0f2fe" },
  Utilities: { icon: "⚙️", color: "#71717a", bgColor: "#f4f4f5" },
  Communication: { icon: "💬", color: "#3b82f6", bgColor: "#dbeafe" },
  "Job Search": { icon: "🔍", color: "#8b5cf6", bgColor: "#f5f3ff" },
  Financial: { icon: "💵", color: "#10b981", bgColor: "#d1fae5" },
  "Non-Profit": { icon: "❤️", color: "#ef4444", bgColor: "#fee2e2" },
  "Wedding Planning": { icon: "💒", color: "#ec4899", bgColor: "#fce7f3" },
  "Car Rental": { icon: "🚗", color: "#06b6d4", bgColor: "#cffafe" },
  "HR & Recruitment": { icon: "👥", color: "#6366f1", bgColor: "#e0e7ff" },
  Delivery: { icon: "📦", color: "#f97316", bgColor: "#ffedd5" },
  "General Utilities": { icon: "🔧", color: "#71717a", bgColor: "#f4f4f5" },
  Hospitality: { icon: "🏨", color: "#f59e0b", bgColor: "#fef3c7" },
  "Food Delivery": { icon: "🍕", color: "#f97316", bgColor: "#ffedd5" },
  default: { icon: "⭐", color: "#eab308", bgColor: "#fef9c3" },
};

const Portfolio = () => {
  const seo = getSEO("portfolio");
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [activeProjectType, setActiveProjectType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        if (
          categories &&
          typeof categories === "object" &&
          categories !== null
        ) {
          const cats = Object.keys(categories);
          setCategoryList(["All", ...cats]);
          const processedProjects = [];

          for (const categoryKey in categories) {
            const categoryProjects = categories[categoryKey];
            categoryProjects.forEach((project) => {
              if (project && project.title) {
                const id = project.id
                  ? `${categoryKey}-${project.id}`
                  : `${categoryKey}-${project.title.replace(/\s+/g, "-")}`;
                processedProjects.push({
                  ...project,
                  id,
                  category: categoryKey,
                });
              }
            });
          }
          setAllProjects(processedProjects);
        } else {
          setError(
            "Project data is not available or is in an incorrect format."
          );
          setAllProjects([]);
          setCategoryList([]);
        }
      } catch (err) {
        console.error("Failed to fetch portfolio data:", err);
        setError("Failed to load projects. Please try again later.");
        setAllProjects([]);
        setCategoryList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCategoryToggle = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prev) => {
        const newCategories = prev.filter((c) => c !== "All");
        if (newCategories.includes(category)) {
          const filtered = newCategories.filter((c) => c !== category);
          return filtered.length === 0 ? ["All"] : filtered;
        } else {
          return [...newCategories, category];
        }
      });
    }
  };

  const filteredData = useMemo(() => {
    let projects = allProjects;
    if (activeProjectType === "mobile") {
      projects = projects.filter(
        (p) => p.platform === "Android" || p.platform === "iOS"
      );
    } else if (activeProjectType === "web") {
      projects = projects.filter((p) => p.platform === "Web");
    }
    if (!selectedCategories.includes("All")) {
      projects = projects.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }
    return projects;
  }, [allProjects, activeProjectType, selectedCategories]);

  useEffect(() => {
    setFilteredProjects(filteredData);
  }, [filteredData]);

  const getProjectCountByType = (type) => {
    if (type === "all") return allProjects.length;
    if (type === "mobile")
      return allProjects.filter(
        (p) => p.platform === "Android" || p.platform === "iOS"
      ).length;
    if (type === "web")
      return allProjects.filter((p) => p.platform === "Web").length;
    return 0;
  };

  const getCategoryData = (category) =>
    categoryIcons[category] || categoryIcons["default"];
  const formatCategoryForUrl = (category) =>
    (category || "uncategorized").toLowerCase().replace(/ /g, "-");

  const breakpointColumnsObj = { default: 3, 1200: 3, 992: 2, 768: 2, 576: 1 };

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
        <p>Loading Projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-wrapper">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
      />

      <div className="breadcumb-area style2 bg-smoke4">
        <div
          className="breadcumb-wrapper"
          style={{ backgroundImage: 'url("assets/img/bg/breadcumb-bg.jpg")' }}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">Portfolio</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="container-fluid">
          <div className="portfolio-layout">
            <aside className="filter-sidebar">
              <div className="sidebar-header">
                <h3>Filters</h3>
                {(activeProjectType !== "all" ||
                  !selectedCategories.includes("All")) && (
                  <button
                    className="clear-all-btn"
                    onClick={() => {
                      setActiveProjectType("all");
                      setSelectedCategories(["All"]);
                    }}
                  >
                    CLEAR ALL
                  </button>
                )}
              </div>

              <div className="filter-group">
                <h4 className="filter-heading">PROJECT TYPE</h4>
                <div className="filter-options">
                  {projectTypeTabs.map((tab) => (
                    <label
                      key={tab.id}
                      className={`filter-option type-option ${
                        activeProjectType === tab.id ? "active" : ""
                      }`}
                      style={{
                        borderLeft:
                          activeProjectType === tab.id
                            ? `3px solid ${tab.color}`
                            : "none",
                        background:
                          activeProjectType === tab.id
                            ? tab.bgColor
                            : "transparent",
                      }}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        checked={activeProjectType === tab.id}
                        onChange={() => setActiveProjectType(tab.id)}
                      />
                      <span className="option-content">
                        <span className="emoji-icon">{tab.icon}</span>
                        <span className="option-label">{tab.label}</span>
                        <span className="option-count">
                          ({getProjectCountByType(tab.id)})
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h4 className="filter-heading">CATEGORIES</h4>
                <div className="filter-options category-options">
                  {categoryList.map((category) => {
                    const catData = getCategoryData(category);
                    const isSelected = selectedCategories.includes(category);
                    return (
                      <label
                        key={category}
                        className={`filter-option checkbox-option ${
                          isSelected ? "active" : ""
                        }`}
                        style={{
                          borderLeft: isSelected
                            ? `3px solid ${catData.color}`
                            : "none",
                          background: isSelected
                            ? catData.bgColor
                            : "transparent",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleCategoryToggle(category)}
                        />
                        <span
                          className="custom-checkbox"
                          style={{
                            borderColor: isSelected ? catData.color : "#d0d0d0",
                            background: isSelected ? catData.color : "#f2f5fa",
                          }}
                        ></span>
                        <span className="option-content">
                          <span className="emoji-icon">{catData.icon}</span>
                          <span className="option-label">{category}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </aside>

            <main className="content-area">
              <div className="results-header">
                <h1 className="page-title">
                  Our Portfolio
                  <span className="results-count">
                    ({filteredProjects.length} Projects)
                  </span>
                </h1>
              </div>

              {filteredProjects.length > 0 ? (
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="projects-grid"
                  columnClassName="grid-column"
                >
                  {filteredProjects.map((project) => {
                    const catData = getCategoryData(project.category);
                    return (
                      <div key={project.id} className="project-card">
                        <div className="card-image">
                          <img
                            src={
                              project.image || "assets/img/default-project.jpg"
                            }
                            alt={project.title}
                          />
                          {project.platform && (
                            <span className="platform-badge">
                              {project.platform}
                            </span>
                          )}
                          <div className="card-overlay">
                            <div className="overlay-actions">
                              <Link
                                to={`/portfolio/${formatCategoryForUrl(
                                  project.category
                                )}/${project.id}`}
                                className="action-btn view-more-btn"
                              >
                                <span className="btn-icon">👁️</span>
                                View More
                              </Link>
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="action-btn view-live-btn"
                                >
                                  <span className="btn-icon">🚀</span>
                                  View Live
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-description">
                            {project.description}
                          </p>
                          <div className="card-footer">
                            <div className="footer-row">
                              <span
                                className="category-tag"
                                style={{
                                  background: catData.bgColor,
                                  color: catData.color,
                                }}
                              >
                                {project.category}
                              </span>
                              {project.status && (
                                <span className="status-tag">
                                  {project.status}
                                </span>
                              )}
                            </div>
                            {/* {project.technologies_used &&
                              project.technologies_used.length > 0 && (
                                <div className="tools-row">
                                  <span className="tools-label">🛠️</span>
                                  <div className="tools-list">
                                    {project.technologies_used
                                      .slice(0, 4)
                                      .map((tech, idx) => (
                                        <span key={idx} className="tool-badge">
                                          {tech}
                                        </span>
                                      ))}
                                    {project.technologies_used.length > 4 && (
                                      <span className="tool-badge more-tools">
                                        +{project.technologies_used.length - 4}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              )} */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Masonry>
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No Projects Found</h3>
                  <p>Try adjusting your filters</p>
                  <button
                    className="reset-btn"
                    onClick={() => {
                      setActiveProjectType("all");
                      setSelectedCategories(["All"]);
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <style jsx>{`
        .loading-wrapper,
        .error-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e0e0e0;
          border-top-color: #163198;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .portfolio-container {
          padding: 20px 0;
        }
        .portfolio-layout {
          display: flex;
          gap: 16px;
        }
        .filter-sidebar {
          width: 280px;
          flex-shrink: 0;
          background: #f2f5fa;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          height: fit-content;
          position: sticky;
          top: 20px;
        }
        .sidebar-header {
          padding: 20px 24px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sidebar-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #212121;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .clear-all-btn {
          background: none;
          border: none;
          color: #163198;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .clear-all-btn:hover {
          color: #1c5bbf;
          text-decoration: underline;
        }
        .filter-group {
          border-bottom: 1px solid #f0f0f0;
          padding: 24px;
        }
        .filter-group:last-child {
          border-bottom: none;
        }
        .filter-heading {
          font-size: 13px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 18px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .filter-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .category-options {
          max-height: 400px;
          overflow-y: auto;
          padding-right: 8px;
        }
        .category-options::-webkit-scrollbar {
          width: 6px;
        }
        .category-options::-webkit-scrollbar-track {
          background: #f5f5f5;
          border-radius: 3px;
        }
        .category-options::-webkit-scrollbar-thumb {
          background: #d0d0d0;
          border-radius: 3px;
        }
        .category-options::-webkit-scrollbar-thumb:hover {
          background: #b0b0b0;
        }
        .filter-option {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          padding: 10px 12px;
          border-radius: 4px;
          transition: all 0.2s;
          margin-left: -12px;
          margin-right: -12px;
        }
        .filter-option.active {
          padding-left: 9px;
        }
        .filter-option input[type="radio"] {
          width: 18px;
          height: 18px;
          margin: 0;
          cursor: pointer;
          accent-color: #163198;
        }
        .checkbox-option {
          position: relative;
          padding-left: 12px;
        }
        .checkbox-option input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .custom-checkbox {
          position: relative;
          display: inline-block;
          width: 18px;
          height: 18px;
          background: #f2f5fa;
          border: 2px solid #d0d0d0;
          border-radius: 3px;
          margin-right: 12px;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .custom-checkbox::after {
          content: "";
          position: absolute;
          display: none;
          left: 5px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        .checkbox-option.active .custom-checkbox::after {
          display: block;
        }
        .option-content {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: 12px;
          flex: 1;
        }
        .checkbox-option .option-content {
          margin-left: 0;
        }
        .emoji-icon {
          font-size: 24px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .option-label {
          font-size: 14px;
          color: #212121;
          font-weight: 400;
          flex: 1;
        }
        .option-count {
          font-size: 12px;
          color: #878787;
          margin-left: auto;
        }
        .content-area {
          flex: 1;
          min-width: 0;
        }
        .results-header {
          background: #f2f5fa;
          padding: 20px 24px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          margin-bottom: 16px;
        }
        .page-title {
          font-size: 26px;
          font-weight: 700;
          color: #212121;
          margin: 0;
          font-family: "Poppins", sans-serif;
        }
        .results-count {
          font-size: 15px;
          font-weight: 400;
          color: #878787;
          margin-left: 10px;
        }
        .projects-grid {
          display: flex;
          margin-left: -16px;
          width: auto;
        }
        .grid-column {
          padding-left: 16px;
          background-clip: padding-box;
        }
        .grid-column > .project-card {
          margin-bottom: 16px;
        }
        .project-card {
          background: #f2f5fa;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .project-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
        }
        .card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #f5f5f5;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .card-image img {
          transform: scale(1.08);
        }
        .platform-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.95);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          color: #212121;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(4px);
          z-index: 2;
        }
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }
        .project-card:hover .card-overlay {
          opacity: 1;
        }
        .overlay-actions {
          display: flex;
          gap: 12px;
          width: 100%;
        }
        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .view-more-btn {
          background: #f2f5fa;
          color: #212121;
        }
        .view-more-btn:hover {
          background: #f5f5f5;
          transform: translateY(-2px);
        }
        .view-live-btn {
          background: #163198;
          color: #f2f5fa;
        }
        .view-live-btn:hover {
          background: #1c5bbf;
          transform: translateY(-2px);
        }
        .btn-icon {
          font-size: 18px;
        }
        .card-body {
          padding: 18px;
        }
        .card-title {
          font-size: 17px;
          font-weight: 600;
          color: #212121;
          margin: 0 0 10px;
          line-height: 1.4;
          font-family: "Poppins", sans-serif;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-description {
          font-size: 14px;
          color: #878787;
          margin: 0 0 14px;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
        }
        .category-tag,
        .status-tag {
          font-size: 12px;
          padding: 5px 12px;
          border-radius: 4px;
          font-weight: 600;
        }
        .status-tag {
          background: #e8f5e9;
          color: #388e3c;
        }
        .tools-row {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .tools-label {
          font-size: 14px;
          flex-shrink: 0;
        }
        .tools-list {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
          flex: 1;
        }
        .tool-badge {
          font-size: 10px;
          padding: 3px 8px;
          background: #f5f5f5;
          color: #666;
          border-radius: 3px;
          font-weight: 500;
          white-space: nowrap;
        }
        .more-tools {
          background: #e3f2fd;
          color: #1976d2;
          font-weight: 600;
        }
        .no-results {
          background: #f2f5fa;
          padding: 80px 24px;
          text-align: center;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
        }
        .no-results-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }
        .no-results h3 {
          font-size: 20px;
          font-weight: 600;
          color: #212121;
          margin: 0 0 10px;
        }
        .no-results p {
          font-size: 14px;
          color: #878787;
          margin: 0 0 24px;
        }
        .reset-btn {
          background: #163198;
          color: #f2f5fa;
          border: none;
          padding: 12px 28px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .reset-btn:hover {
          background: #1c5bbf;
        }
        @media (max-width: 992px) {
          .filter-sidebar {
            display: none;
          }
          .portfolio-layout {
            flex-direction: column;
          }
        }
        @media (max-width: 768px) {
          .page-title {
            font-size: 22px;
          }
          .results-count {
            display: block;
            margin-left: 0;
            margin-top: 6px;
          }
          .card-body {
            padding: 14px;
          }
          .overlay-actions {
            flex-direction: column;
          }
        }
        .container-fluid {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 16px;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
