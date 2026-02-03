import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import config from "../config";

export default function AdminActivities() {
    const [activities, setActivities] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ title: "", description: "", date: "", photo: null });
    const [preview, setPreview] = useState("");
    const backendUrl = config.ASSETS_URL;
    const [loading, setLoading] = useState(false);

    const fetchActivities = async () => {
        try {
            const { data } = await api.get("/activities");
            setActivities(data);
        } catch (error) {
            console.error("Error fetching activities:", error);
            toast.error("Failed to load activities");
        }
    };

    useEffect(() => {
        fetchActivities();
    }, []);

    const handleOpenModal = () => {
        setFormData({ title: "", description: "", date: "", photo: null });
        setPreview("");
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("date", formData.date);
        if (formData.photo) {
            data.append("image", formData.photo);
        }

        try {
            await api.post("/activities", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Activity added successfully");
            fetchActivities();
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error adding activity:", error);
            const errorMessage = error.response?.data?.message || "Failed to add activity";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id) => {
        try {
            await api.patch(`/activities/${id}/toggle`);
            setActivities(activities.map(a => a._id === id ? { ...a, isActive: !a.isActive } : a));
            toast.success("Status updated");
        } catch (error) {
            console.error("Error toggling status:", error);
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to remove this activity?")) {
            try {
                await api.delete(`/activities/${id}`);
                setActivities(activities.filter(a => a._id !== id));
                toast.success("Activity removed");
            } catch (error) {
                console.error("Error deleting activity:", error);
                toast.error("Failed to delete activity");
            }
        }
    };

    return (
        <div className="dashboard-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                    <h1 className="admin-title">Our Activities</h1>
                    <p className="admin-subtitle">Update and manage team events and activities.</p>
                </div>
                <button className="quick-action-btn primary" style={{ width: "auto" }} onClick={handleOpenModal}>
                    + Add New Activity
                </button>
            </div>

            <div className="panel">
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th style={{ textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((activity) => (
                                <tr key={activity._id} style={{ opacity: activity.isActive ? 1 : 0.6 }}>
                                    <td>
                                        <img
                                            src={activity.image.startsWith("http") ? activity.image : `${backendUrl}${activity.image}`}
                                            alt=""
                                            className="avatar-preview"
                                            style={{ borderRadius: "4px", width: "60px", height: "40px" }}
                                        />
                                    </td>
                                    <td>
                                        <strong>{activity.title}</strong>
                                    </td>
                                    <td>{activity.date}</td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={activity.isActive}
                                                onChange={() => toggleStatus(activity._id)}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                                            <button className="delete-btn-icon" onClick={() => handleDelete(activity._id)}>🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {activities.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>No activities found.</td>
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
                            <h2>Add New Activity</h2>
                            <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Date (e.g., June 5, 2025)</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    className="form-input"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Activity Photo</label>
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
                                    <img src={preview} alt="Preview" style={{ width: "200px", height: "120px", objectFit: "cover", borderRadius: "8px" }} />
                                </div>
                            )}

                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? "Adding..." : "Add Activity"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
