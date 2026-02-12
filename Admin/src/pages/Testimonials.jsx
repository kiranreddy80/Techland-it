import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import config from "../config";

export default function AdminTestimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", designation: "", message: "", rating: 5, image: null });
    const [preview, setPreview] = useState("");
    const backendUrl = config.ASSETS_URL;
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const fetchTestimonials = async () => {
        try {
            const { data } = await api.get("/testimonials");
            setTestimonials(data);
        } catch (error) {
            console.error("Error fetching testimonials:", error);
            toast.error("Failed to load testimonials");
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const handleOpenModal = (testimonial = null) => {
        if (testimonial) {
            setFormData({
                name: testimonial.name,
                designation: testimonial.designation,
                message: testimonial.message,
                rating: testimonial.rating,
                image: null
            });
            setPreview(testimonial.image.startsWith("http") ? testimonial.image : `${backendUrl}${testimonial.image}`);
            setEditingId(testimonial._id);
        } else {
            setFormData({ name: "", designation: "", message: "", rating: 5, image: null });
            setPreview("");
            setEditingId(null);
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!editingId && !formData.image) {
            toast.error("Please upload an image");
            return;
        }

        setLoading(true);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("designation", formData.designation);
        data.append("message", formData.message);
        data.append("rating", formData.rating);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            if (editingId) {
                await api.put(`/testimonials/${editingId}`, data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                toast.success("Testimonial updated successfully");
            } else {
                await api.post("/testimonials", data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                toast.success("Testimonial added successfully");
            }
            fetchTestimonials();
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error saving testimonial:", error);
            toast.error(error.response?.data?.message || `Failed to ${editingId ? 'update' : 'add'} testimonial`);
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id) => {
        try {
            await api.patch(`/testimonials/${id}/toggle`);
            setTestimonials(testimonials.map(t => t._id === id ? { ...t, isActive: !t.isActive } : t));
            toast.success("Status updated");
        } catch (error) {
            console.error("Error toggling status:", error);
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to remove this testimonial?")) {
            try {
                await api.delete(`/testimonials/${id}`);
                setTestimonials(testimonials.filter(t => t._id !== id));
                toast.success("Testimonial removed");
            } catch (error) {
                console.error("Error deleting testimonial:", error);
                toast.error("Failed to delete testimonial");
            }
        }
    };

    return (
        <div className="dashboard-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                    <h1 className="admin-title">Testimonials</h1>
                    <p className="admin-subtitle">Manage client feedback and reviews.</p>
                </div>
                <button className="quick-action-btn primary" style={{ width: "auto" }} onClick={() => handleOpenModal()}>
                    + Add New Testimonial
                </button>
            </div>

            <div className="panel">
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Message</th>
                                <th>Rating</th>
                                <th>Visible</th>
                                <th style={{ textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.map((testimonial) => (
                                <tr key={testimonial._id} style={{ opacity: testimonial.isActive ? 1 : 0.6 }}>
                                    <td>
                                        <div style={{
                                            width: "60px", height: "60px",
                                            borderRadius: "50%", background: "#fff",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            border: "1px solid #e5e7eb", overflow: "hidden"
                                        }}>
                                            <img
                                                src={testimonial.image.startsWith("http") ? testimonial.image : `${backendUrl}${testimonial.image}`}
                                                alt=""
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    </td>
                                    <td><strong>{testimonial.name}</strong></td>
                                    <td>{testimonial.designation}</td>
                                    <td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{testimonial.message}</td>
                                    <td>{testimonial.rating} ⭐</td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={testimonial.isActive}
                                                onChange={() => toggleStatus(testimonial._id)}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                                            <button className="delete-btn-icon" onClick={() => handleOpenModal(testimonial)} title="Edit">✏️</button>
                                            <button className="delete-btn-icon" onClick={() => handleDelete(testimonial._id)} title="Delete">🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {testimonials.length === 0 && (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>No testimonials found.</td>
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
                            <h2>{editingId ? "Edit Testimonial" : "Add New Testimonial"}</h2>
                            <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Designation</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.designation}
                                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Rating</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    className="form-input"
                                    value={formData.rating}
                                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    className="form-input"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows="4"
                                />
                            </div>
                            <div className="form-group">
                                <label>Author Image</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
                                    <label htmlFor="image-upload" className="table-action-btn" style={{ cursor: "pointer", background: "#f3f4f6" }}>
                                        📂 Choose File
                                    </label>
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>
                                        {formData.image ? formData.image.name : "No file chosen"}
                                    </span>
                                </div>
                                <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setFormData({ ...formData, image: file });
                                            setPreview(URL.createObjectURL(file));
                                        }
                                    }}
                                    required={!editingId}
                                />
                            </div>

                            {preview && (
                                <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                    <img src={preview} alt="Preview" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", border: "1px solid #eee", padding: "5px" }} />
                                </div>
                            )}

                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? (editingId ? "Updating..." : "Adding...") : (editingId ? "Update Testimonial" : "Add Testimonial")}
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}
