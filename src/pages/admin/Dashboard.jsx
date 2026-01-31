export default function AdminDashboard() {
  return (
    <div>
      <h1 className="admin-title">Dashboard</h1>
      <p className="admin-subtitle">
        Welcome back! Here’s an overview of your website.
      </p>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card purple">
          <h3>Total Team</h3>
          <p>12</p>
        </div>

        <div className="stat-card blue">
          <h3>Total Projects</h3>
          <p>24</p>
        </div>

        <div className="stat-card purple-light">
          <h3>Clients</h3>
          <p>18</p>
        </div>

        <div className="stat-card blue-light">
          <h3>Messages</h3>
          <p>6</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button>Add Team Member</button>
          <button>Add Project</button>
          <button>View Messages</button>
        </div>
      </div>
    </div>
  );
}
