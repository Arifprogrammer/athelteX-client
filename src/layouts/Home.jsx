import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] text-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
