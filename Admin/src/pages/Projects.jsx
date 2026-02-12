import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import config from "../config";

export default function AdminProjects() {
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        client: "",
        status: "Completed",
        photo: null
    });
    const [preview, setPreview] = useState("");
    const backendUrl = config.ASSETS_URL;
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const fetchProjects = async () => {
        try {
            const { data } = await api.get("/projects");
            setProjects(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
            toast.error("Failed to load projects");
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleOpenModal = (project = null) => {
        if (project) {
            setFormData({
                title: project.title,
                category: project.category,
                client: project.client,
                status: project.status,
                photo: null
            });
            setPreview(project.image.startsWith("http") ? project.image : `${backendUrl}${project.image}`);
            setEditingId(project._id);
        } else {
            setFormData({ title: "", category: "", client: "", status: "Completed", photo: null });
            setPreview("");
            setEditingId(null);
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append("title", formData.title);
        data.append("category", formData.category);
        data.append("client", formData.client);
        data.append("status", formData.status);
        if (formData.photo) {
            data.append("image", formData.photo);
        }

        try {
            if (editingId) {
                await api.put(`/projects/${editingId}`, data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                toast.success("Project updated successfully");
            } else {
                await api.post("/projects", data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                toast.success("Project added successfully");
            }
            fetchProjects();
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error saving project:", error);
            const errorMessage = error.response?.data?.message || `Failed to ${editingId ? 'update' : 'add'} project`;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id) => {
        try {
            await api.patch(`/projects/${id}/toggle`);
            setProjects(projects.map(p => p._id === id ? { ...p, isActive: !p.isActive } : p));
            toast.success("Status updated");
        } catch (error) {
            console.error("Error toggling status:", error);
            toast.error("Failed to update status");
        }
    };

    const updateStatusText = async (id, newStatus) => {
        try {
            await api.patch(`/projects/${id}/status`, { status: newStatus });
            setProjects(projects.map(p => p._id === id ? { ...p, status: newStatus } : p));
            toast.success("Project status updated");
        } catch (error) {
            console.error("Error updating status text:", error);
            toast.error("Failed to update status text");
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this project?")) {
            try {
                await api.delete(`/projects/${id}`);
                setProjects(projects.filter(p => p._id !== id));
                toast.success("Project removed");
            } catch (error) {
                console.error("Error deleting project:", error);
                toast.error("Failed to delete project");
            }
        }
    };

    return (
        <div className="dashboard-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                    <h1 className="admin-title">Projects Portfolio</h1>
                    <p className="admin-subtitle">Showcase your best work and manage project statuses.</p>
                </div>
                <button className="quick-action-btn primary" style={{ width: "auto" }} onClick={() => handleOpenModal()}>
                    + Add New Project
                </button>
            </div>

            <div className="panel">
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Project Title</th>
                                <th>Category</th>
                                <th>Client</th>
                                <th>Status</th>
                                <th>Visible</th>
                                <th style={{ textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project._id} style={{ opacity: project.isActive ? 1 : 0.6 }}>
                                    <td>
                                        <img
                                            src={project.image.startsWith("http") ? project.image : `${backendUrl}${project.image}`}
                                            alt=""
                                            className="avatar-preview"
                                            style={{ borderRadius: "8px", width: "70px", height: "45px", objectFit: "cover" }}
                                        />
                                    </td>
                                    <td><strong>{project.title}</strong></td>
                                    <td>{project.category}</td>
                                    <td>{project.client}</td>
                                    <td>
                                        <select
                                            value={project.status}
                                            onChange={(e) => updateStatusText(project._id, e.target.value)}
                                            style={{
                                                padding: "5px 10px",
                                                borderRadius: "20px",
                                                fontSize: "12px",
                                                fontWeight: "600",
                                                border: "1px solid #e5e7eb",
                                                background: project.status === "Completed" ? "#dcfce7" : project.status === "In Progress" ? "#dbeafe" : "#fef3c7",
                                                color: project.status === "Completed" ? "#15803d" : project.status === "In Progress" ? "#1e40af" : "#b45309"
                                            }}
                                        >
                                            <option value="Completed">Completed</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Pending">Pending</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={project.isActive}
                                                onChange={() => toggleStatus(project._id)}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                                            <button className="delete-btn-icon" onClick={() => handleOpenModal(project)} title="Edit">✏️</button>
                                            <button className="delete-btn-icon" onClick={() => handleDelete(project._id)} title="Delete">🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>No projects found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false) }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingId ? "Edit Project" : "Add New Project"}</h2>
                            <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Project Title</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g. Web Development, App Design"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Client</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.client}
                                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Project Status</label>
                                <select
                                    className="form-input"
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                >
                                    <option value="Completed">Completed</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Thumbnail Photo</label>
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
                                    required={!editingId}
                                />
                            </div>

                            {preview && (
                                <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                    <img src={preview} alt="Preview" style={{ width: "200px", height: "120px", objectFit: "cover", borderRadius: "8px" }} />
                                </div>
                            )}

                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? (editingId ? "Updating..." : "Creating...") : (editingId ? "Update Project" : "Create Project")}
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}
