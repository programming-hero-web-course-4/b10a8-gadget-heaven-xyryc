import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <Navbar></Navbar>

      <div className="py-14">
        <h1 className="text-7xl mb-4 text-red-500">Oops!</h1>
        <h1 className="text-9xl text-red-600">Page not found!</h1>
        <NavLink to="/" className="btn mt-20 btn-outline">
          Go To Home
        </NavLink>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
