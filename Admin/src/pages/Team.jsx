import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import config from "../config";

export default function AdminTeam() {
  const [team, setTeam] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // We only support creating new members for now based on backend controller, edit is not implemented in backend yet.
  const [formData, setFormData] = useState({ name: "", role: "", photo: null });
  const [preview, setPreview] = useState("");
  const backendUrl = config.ASSETS_URL;

  const [loading, setLoading] = useState(false);

  const fetchTeam = async () => {
    try {
      const { data } = await api.get("/team");
      setTeam(data);
    } catch (error) {
      console.error("Error fetching team:", error);
      toast.error("Failed to load team members");
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleOpenModal = () => {
    setFormData({ name: "", role: "", photo: null });
    setPreview("");
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // START LOADING

    // Create FormData for file upload
    const data = new FormData();
    data.append("name", formData.name);
    data.append("role", formData.role);
    if (formData.photo) {
      data.append("image", formData.photo);
    }

    try {
      await api.post("/team", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Team member added successfully");
      fetchTeam();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding member:", error);
      const errorMessage = error.response?.data?.message || "Failed to add team member";
      toast.error(errorMessage);
    } finally {
      setLoading(false); // END LOADING
    }
  };

  const toggleStatus = async (id) => {
    try {
      await api.patch(`/team/${id}/toggle`);
      setTeam(team.map(t => t._id === id ? { ...t, isActive: !t.isActive } : t));
      toast.success("Status updated");
    } catch (error) {
      console.error("Error toggling status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to remove this member?")) {
      try {
        await api.delete(`/team/${id}`);
        setTeam(team.filter(t => t._id !== id));
        toast.success("Member removed");
      } catch (error) {
        console.error("Error deleting member:", error);
        toast.error("Failed to delete member");
      }
    }
  };

  return (
    <div className="dashboard-container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 className="admin-title">Team Members</h1>
          <p className="admin-subtitle">Manage your team structure and roles.</p>
        </div>
        <button className="quick-action-btn primary" style={{ width: "auto" }} onClick={handleOpenModal}>
          + Add New Member
        </button>
      </div>

      <div className="panel">
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member) => (
                <tr key={member._id} style={{ opacity: member.isActive ? 1 : 0.6 }}>
                  <td>
                    <img
                      src={member.image.startsWith("http") ? member.image : `${backendUrl}${member.image}`}
                      alt=""
                      className="avatar-preview"
                    />
                  </td>
                  <td>
                    <strong>{member.name}</strong>
                  </td>
                  <td>{member.role}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={member.isActive}
                        onChange={() => toggleStatus(member._id)}
                      />
                      <span className="slider"></span>
                    </label>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                      {/* Edit not fully supported by backend yet, simplifying to just delete for now or could implement update later */}
                      <button className="delete-btn-icon" onClick={() => handleDelete(member._id)}>🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
              {team.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>No team members found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false) }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add New Member</h2>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Profile Photo</label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
                  <label htmlFor="photo-upload" className="table-action-btn" style={{ cursor: "pointer", background: "#f3f4f6" }}>
                    📂 Choose File
                  </label>
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>
                    {formData.photo ? formData.photo.name : "No file chosen"}
                  </span>
                </div>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFormData({ ...formData, photo: file });
                      setPreview(URL.createObjectURL(file));
                    }
                  }}
                  required
                />
              </div>

              {preview && (
                <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                  <img src={preview} alt="Preview" className="avatar-preview" style={{ width: "100px", height: "100px" }} />
                </div>
              )}

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Adding..." : "Add Member"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
