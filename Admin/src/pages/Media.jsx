import { useState } from "react";

export default function AdminMedia() {
    return (
        <div className="admin-page">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                <h1 className="admin-title">Media Library</h1>
                <button className="status active" style={{ padding: "10px 20px", fontSize: "14px", border: "none", cursor: "pointer" }}>
                    + Upload Image
                </button>
            </div>

            <div className="empty-text" style={{ padding: "100px 0", background: "white", borderRadius: "16px" }}>
                <h3>No media files uploaded yet.</h3>
                <p>Upload images to use them in your projects and blogs.</p>
            </div>
        </div>
    );
}
