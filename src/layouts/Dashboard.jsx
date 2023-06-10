import { Link, Outlet } from "react-router-dom";
import StudentLi from "../components/StudentLi";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start py-20">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side bg-slate-900">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-4 w-80 h-full text-base-content space-y-6 flex flex-col justify-center">
            {/* Sidebar content here */}
            <StudentLi />
            <div className="h-[2px] bg-slate-400"></div>{" "}
            <li className="pt-8">
              <Link
                to="/"
                className="font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/instructors"
                className="font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
              >
                Instructors
              </Link>
            </li>
            <li>
              <Link
                to="/classes"
                className="font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
              >
                Classes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
