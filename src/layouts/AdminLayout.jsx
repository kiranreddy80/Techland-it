import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logoutAdmin } from "../services/auth.service";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <div className="admin-wrapper">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin</h2>

        <nav>
        <NavLink
  to="/admin/dashboard"
  className={({ isActive }) =>
    isActive ? "admin-link active" : "admin-link"
  }
>
  Dashboard
</NavLink>

<NavLink
  to="/admin/team"
  className={({ isActive }) =>
    isActive ? "admin-link active" : "admin-link"
  }
>
  Team
</NavLink>

        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="admin-main">
        {/* HEADER */}
        <header className="admin-header">
          <span>Welcome, Admin</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </header>

        {/* PAGE CONTENT */}
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
