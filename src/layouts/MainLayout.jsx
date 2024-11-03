import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-sora">
      <Navbar />

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
