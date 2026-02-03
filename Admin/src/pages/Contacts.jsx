import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export default function AdminContacts() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const fetchContacts = async () => {
        try {
            const { data } = await api.get("/contact");
            setMessages(data);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("Failed to load messages");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this message?")) {
            try {
                await api.delete(`/contact/${id}`);
                setMessages(messages.filter((m) => m._id !== id));
                toast.success("Message deleted");
            } catch (error) {
                console.error("Error deleting message:", error);
                toast.error("Failed to delete message");
            }
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMessages = messages.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(messages.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="dashboard-container">
            <h1 className="admin-title">Inquiries & Messages</h1>
            <p className="admin-subtitle">Manage incoming contact requests from the website.</p>

            <div className="panel" style={{ marginTop: "20px" }}>
                <div className="table-container">
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Sender Details</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th style={{ textAlign: "right" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center", padding: "40px" }}>Loading messages...</td>
                                </tr>
                            ) : messages.length > 0 ? (
                                currentMessages.map((msg) => (
                                    <tr key={msg._id}>
                                        <td style={{ fontSize: "12px", color: "#6b7280", width: "150px" }}>
                                            {formatDate(msg.createdAt)}
                                        </td>
                                        <td>
                                            <strong>{msg.name}</strong><br />
                                            <span style={{ fontSize: "13px", color: "#163198" }}>{msg.email}</span><br />
                                            <span style={{ fontSize: "12px", color: "#6b7280" }}>{msg.phone}</span>
                                        </td>
                                        <td style={{ fontWeight: "600", color: "#1b1b1b" }}>
                                            {msg.subject || "General Inquiry"}
                                        </td>
                                        <td>
                                            <div style={{
                                                maxWidth: "300px",
                                                fontSize: "14px",
                                                color: "#4b5563",
                                                whiteSpace: "pre-wrap"
                                            }}>
                                                {msg.message}
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                                                <button
                                                    className="delete-btn-icon"
                                                    onClick={() => handleDelete(msg._id)}
                                                    title="Delete Message"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
                                        No messages received yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                {!loading && messages.length > itemsPerPage && (
                    <div className="pagination-container">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="pagination-btn arrow"
                        >
                            &larr; Prev
                        </button>

                        <div className="page-numbers">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => paginate(i + 1)}
                                    className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="pagination-btn arrow"
                        >
                            Next &rarr;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
