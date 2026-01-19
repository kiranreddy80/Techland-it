import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import GlobalUtilities from "./GlobalUtilities.jsx";
import SeasonalDecor from "./SeasonalDecor.jsx";

function Layout({ setOpenContactModal }) {
  return (
    <div className="app">
      <Navbar setOpenContactModal={setOpenContactModal} />
      <main>
        <SeasonalDecor />

        <Outlet />
      </main>
      <Footer />
      <GlobalUtilities />
    </div>
  );
}

export default Layout;
