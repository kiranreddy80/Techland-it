import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import config from "../config";

export default function AdminClients() {
    const [clients, setClients] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", industry: "", logo: null });
    const [preview, setPreview] = useState("");
    const backendUrl = config.ASSETS_URL;
    const [loading, setLoading] = useState(false);

    const fetchClients = async () => {
        try {
            const { data } = await api.get("/clients");
            setClients(data);
        } catch (error) {
            console.error("Error fetching clients:", error);
            toast.error("Failed to load clients");
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const handleOpenModal = () => {
        setFormData({ name: "", industry: "", logo: null });
        setPreview("");
        setIsModalOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("industry", formData.industry);
        if (formData.logo) {
            data.append("logo", formData.logo);
        }

        try {
            await api.post("/clients", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toast.success("Client added successfully");
            fetchClients();
            setIsModalOpen(false);
        } catch (error) {
            console.error("Error adding client:", error);
            toast.error(error.response?.data?.message || "Failed to add client");
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id) => {
        try {
            await api.patch(`/clients/${id}/toggle`);
            setClients(clients.map(c => c._id === id ? { ...c, isActive: !c.isActive } : c));
            toast.success("Status updated");
        } catch (error) {
            console.error("Error toggling status:", error);
            toast.error("Failed to update status");
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to remove this client?")) {
            try {
                await api.delete(`/clients/${id}`);
                setClients(clients.filter(c => c._id !== id));
                toast.success("Client removed");
            } catch (error) {
                console.error("Error deleting client:", error);
                toast.error("Failed to delete client");
            }
        }
    };

    return (
        <div className="dashboard-container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                    <h1 className="admin-title">Clients & Partners</h1>
                    <p className="admin-subtitle">Manage the companies and brands you work with.</p>
                </div>
                <button className="quick-action-btn primary" style={{ width: "auto" }} onClick={handleOpenModal}>
                    + Add New Client
                </button>
            </div>

            <div className="panel">
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Company Name</th>
                                <th>Industry</th>
                                <th>Visible</th>
                                <th style={{ textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client._id} style={{ opacity: client.isActive ? 1 : 0.6 }}>
                                    <td>
                                        <div style={{
                                            width: "60px", height: "60px",
                                            borderRadius: "8px", background: "#fff",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            border: "1px solid #e5e7eb", padding: "5px", overflow: "hidden"
                                        }}>
                                            <img
                                                src={client.logo.startsWith("http") ? client.logo : `${backendUrl}${client.logo}`}
                                                alt=""
                                                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                                            />
                                        </div>
                                    </td>
                                    <td><strong>{client.name}</strong></td>
                                    <td>{client.industry}</td>
                                    <td>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={client.isActive}
                                                onChange={() => toggleStatus(client._id)}
                                            />
                                            <span className="slider"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                                            <button className="delete-btn-icon" onClick={() => handleDelete(client._id)}>🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {clients.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>No clients found.</td>
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
                            <h2>Add New Client</h2>
                            <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Industry</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Company Logo</label>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
                                    <label htmlFor="logo-upload" className="table-action-btn" style={{ cursor: "pointer", background: "#f3f4f6" }}>
                                        📂 Choose File
                                    </label>
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>
                                        {formData.logo ? formData.logo.name : "No file chosen"}
                                    </span>
                                </div>
                                <input
                                    id="logo-upload"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setFormData({ ...formData, logo: file });
                                            setPreview(URL.createObjectURL(file));
                                        }
                                    }}
                                    required
                                />
                            </div>

                            {preview && (
                                <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                                    <img src={preview} alt="Preview" style={{ width: "100px", height: "100px", objectFit: "contain", border: "1px solid #eee", borderRadius: "8px", padding: "10px" }} />
                                </div>
                            )}

                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? "Adding..." : "Add Client"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
