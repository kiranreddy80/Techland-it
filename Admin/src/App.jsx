import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import AdminRoute from "./routes/AdminRoute.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoader from "./components/PageLoader.jsx";
import ConnectionStatus from "./components/ConnectionStatus.jsx";

const AdminLogin = lazy(() => import("./pages/Login.jsx"));
const AdminDashboard = lazy(() => import("./pages/Dashboard.jsx"));
const AdminTeam = lazy(() => import("./pages/Team.jsx"));
const AdminProjects = lazy(() => import("./pages/Projects.jsx"));
const AdminClients = lazy(() => import("./pages/Clients.jsx"));
const AdminActivities = lazy(() => import("./pages/Activities.jsx"));
const AdminContacts = lazy(() => import("./pages/Contacts.jsx"));
const AdminMedia = lazy(() => import("./pages/Media.jsx"));

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out",
            offset: 50,
            disable: "mobile",
        });
    }, []);

    return (
        <div>
            <ConnectionStatus />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Navigate to="/admin/login" replace />} />
                    <Route path="/admin/login" element={<AdminLogin />} />

                    <Route
                        path="/admin"
                        element={
                            <AdminRoute>
                                <AdminLayout />
                            </AdminRoute>
                        }
                    >
                        <Route index element={<Navigate to="/admin/dashboard" replace />} />
                        <Route path="dashboard" element={<AdminDashboard />} />
                        <Route path="team" element={<AdminTeam />} />
                        <Route path="activities" element={<AdminActivities />} />
                        <Route path="projects" element={<AdminProjects />} />
                        <Route path="clients" element={<AdminClients />} />
                        <Route path="contacts" element={<AdminContacts />} />
                        <Route path="media" element={<AdminMedia />} />
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/admin/login" replace />} />
                </Routes>
            </Suspense>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
}

export default App;
