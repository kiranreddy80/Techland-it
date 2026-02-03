import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import config from "../config";

export default function AdminDashboard() {
  const [date, setDate] = useState(new Date());
  const [stats, setStats] = useState({
    team: 0,
    projects: 0,
    activities: 0,
    messages: 0,
  });
  const [recentProjects, setRecentProjects] = useState([]);
  const backendUrl = config.ASSETS_URL;

  const fetchDashboardData = async () => {
    try {
      const [teamRes, projectsRes, activitiesRes, contactRes] = await Promise.all([
        api.get("/team"),
        api.get("/projects"),
        api.get("/activities"),
        api.get("/contact")
      ]);

      setStats({
        team: teamRes.data.length,
        projects: projectsRes.data.length,
        activities: activitiesRes.data.length,
        messages: contactRes.data.length
      });

      // Show last 3 projects
      setRecentProjects(projectsRes.data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = date.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="dashboard-container">
      {/* HEADER SECTION */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "8px", color: "#111827" }}>
          {getGreeting()}, Admin 👋
        </h1>
        <p style={{ color: "#6b7280" }}>
          Here is what's happening in your workspace today.
        </p>
      </div>

      {/* STATS GRID */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-card-icon">🚀</div>
          <div className="stat-value">{stats.projects}</div>
          <div className="stat-label">Total Projects</div>
        </div>

        <div className="stat-card success">
          <div className="stat-card-icon">🎈</div>
          <div className="stat-value">{stats.activities}</div>
          <div className="stat-label">Our Activities</div>
        </div>

        <div className="stat-card secondary">
          <div className="stat-card-icon">👥</div>
          <div className="stat-value">{stats.team}</div>
          <div className="stat-label">Team Members</div>
        </div>

        <div className="stat-card warning">
          <div className="stat-card-icon">📩</div>
          <div className="stat-value">{stats.messages}</div>
          <div className="stat-label">Total Inquiries</div>
        </div>
      </div>

      {/* MAIN DASHBOARD CONTENT */}
      <div className="dashboard-grid">

        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* RECENT PROJECTS PANEL */}
          <div className="panel">
            <div className="panel-header">
              <h3 className="panel-title">Recently Added Projects</h3>
              <Link to="/admin/projects" style={{ color: "#4f46e5", fontSize: "14px", textDecoration: "none", fontWeight: "600" }}>View All</Link>
            </div>
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Thumbnail</th>
                    <th>Project Name</th>
                    <th>Client</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProjects.length > 0 ? recentProjects.map((p) => (
                    <tr key={p._id}>
                      <td>
                        <img
                          src={p.image.startsWith("http") ? p.image : `${backendUrl}${p.image}`}
                          alt=""
                          style={{ width: "50px", height: "30px", borderRadius: "4px", objectFit: "cover" }}
                        />
                      </td>
                      <td><strong>{p.title}</strong></td>
                      <td>{p.client}</td>
                      <td>
                        <span
                          style={{
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "600",
                            background: p.status === "Completed" ? "#dcfce7" : p.status === "In Progress" ? "#dbeafe" : "#fef3c7",
                            color: p.status === "Completed" ? "#15803d" : p.status === "In Progress" ? "#1e40af" : "#b45309"
                          }}
                        >
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center", padding: "20px", color: "#6b7280" }}>No projects found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* ANALYTICS VISUAL */}
          <div className="panel">
            <div className="panel-header">
              <h3 className="panel-title">Resource Distribution</h3>
            </div>
            <div style={{ height: "150px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px", padding: "10px 0" }}>
              {/* Using status distribution bars as a visual representation */}
              {[40, 60, 45, 70, 30, 80, 55, 90, 65, 50, 75, 85].map((h, i) => (
                <div key={i} style={{ width: "100%", background: "#f3f4f6", borderRadius: "8px", height: "100%", position: "relative" }}>
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: `${h}%`,
                    background: i % 2 === 0 ? "#4f46e5" : "#818cf8",
                    borderRadius: "8px",
                    transition: "height 1s ease"
                  }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", color: "#9ca3af", fontSize: "12px" }}>
              <span>Jan</span><span>Dec</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* QUICK ACTIONS */}
          <div className="panel">
            <h3 className="panel-title" style={{ marginBottom: "20px" }}>Quick Actions</h3>
            <Link to="/admin/projects" style={{ textDecoration: "none" }}>
              <button className="quick-action-btn primary">
                <span>+</span> Add Project
              </button>
            </Link>
            <Link to="/admin/activities" style={{ textDecoration: "none" }}>
              <button className="quick-action-btn">
                <span>🎈</span> Post Activity
              </button>
            </Link>
            <Link to="/admin/team" style={{ textDecoration: "none" }}>
              <button className="quick-action-btn">
                <span>👤</span> Add Team Member
              </button>
            </Link>
          </div>

          {/* SYSTEM SUMMARY */}
          <div className="panel" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", color: "white" }}>
            <h3 className="panel-title" style={{ color: "white", marginBottom: "15px" }}>System Status</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ opacity: 0.8 }}>Database</span>
                <span style={{ color: "#4ade80" }}>● Online</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ opacity: 0.8 }}>Storage</span>
                <span style={{ color: "#4ade80" }}>● Healthy</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                <span style={{ opacity: 0.8 }}>Total Records</span>
                <span>{stats.team + stats.projects + stats.activities + stats.messages}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
