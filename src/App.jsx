import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout.jsx";
import PageLoader from "./components/PageLoader.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ContactModal from "./components/ContactModal.jsx";

// Lazy load components for performance
const HomeLayout = lazy(() => import("./pages/Home/HomeLayout.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const ServiceDetails = lazy(() =>
  import("./pages/services/ServiceDetails.jsx")
);
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio.jsx"));
const ProjectDetail = lazy(() => import("./pages/portfolio/ProjectDetail.jsx"));
const Blogs = lazy(() => import("./pages/blogs/Blogs.jsx"));
const BlogDetails = lazy(() => import("./pages/blogs/BlogDetails.jsx"));
const Contact = lazy(() => import("./pages/contact/Contact.jsx"));
const OurTeam = lazy(() => import("./pages/ourteam/OurTeam.jsx"));

function App() {
  const [openContactModal, setOpenContactModal] = useState(false);

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true, // Improve performance by animating only once
      easing: "ease-out",
      offset: 50,
      disable: "mobile", // Optional: disable on mobile for better performance
    });
  }, []);

  return (
    <div>
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={<Layout setOpenContactModal={setOpenContactModal} />}
          >
            <Route index element={<HomeLayout />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:id" element={<ServiceDetails />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route
              path="/portfolio/:category/:projectId"
              element={<ProjectDetail />}
            />
          </Route>
        </Routes>
      </Suspense>
      <ScrollToTop />
      <ContactModal
        openModal={openContactModal}
        setOpenModal={setOpenContactModal}
      />
    </div>
  );
}

export default App;
