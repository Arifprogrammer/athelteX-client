import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { useEffect } from "react";
import ToggleTheme from "../components/ToggleTheme";

const Home = () => {
  //* hooks
  const { pathname } = useLocation();

  //* effects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <ToggleTheme />
      <div className="min-h-[80vh] text-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
