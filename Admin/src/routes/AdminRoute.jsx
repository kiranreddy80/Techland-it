import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  // Simple check for demo purposes. 
  // In a real production app with backend, you would check a cookie or call an API here.
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
