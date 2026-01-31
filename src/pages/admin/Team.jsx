import { useEffect, useState } from "react";
import {
  fetchTeam,
  createTeam,
  deleteTeam,
} from "../../services/team.service";

export default function AdminTeam() {
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    const res = await fetchTeam();
    setTeam(Array.isArray(res.data.data) ? res.data.data : []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !role) return;

    await createTeam({ name, role });
    setName("");
    setRole("");
    loadTeam();
  };

  const handleDelete = async (id) => {
    const ok = window.confirm(
      "Are you sure you want to delete this team member?"
    );
    if (!ok) return;

    setLoading(true);
    try {
      await deleteTeam(id);
      loadTeam();
    } catch (err) {
      alert("Failed to delete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-card">
      <h2 className="admin-title">Team Management</h2>

      {/* ADD FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
       <button type="submit">Add</button>

      </form>

      {/* TABLE */}
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {team.length === 0 && (
              <tr>
                <td colSpan="4" className="empty-text">
                  No team members found
                </td>
              </tr>
            )}

            {team.map((member) => (
              <tr key={member._id}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>
                  <span className="status active">Active</span>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(member._id)}
                    disabled={loading}
                    style={{
                      background: "#ef4444",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
