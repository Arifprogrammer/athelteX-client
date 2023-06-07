import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[140vh]">
        <Outlet />
      </div>
      <h1>Footer</h1>
    </>
  );
};

export default Home;
