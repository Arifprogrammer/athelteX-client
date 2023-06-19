import { Link, Outlet } from "react-router-dom";
import StudentLi from "../components/StudentLi";
import useRole from "../hooks/useRole";
import InstructorLi from "../components/InstructorLi";
import AdminLi from "../components/AdminLi";
import { ImHome3 } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { MdOndemandVideo } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isRole] = useRole();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-x-auto w-full px-20 py-20">
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
            <div className="mb-12">
              <img
                src={user?.photoURL}
                alt=""
                className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover"
              />
              <h1 className="text-white mt-6 text-center text-xl font-bold">
                {user?.displayName}
              </h1>
            </div>
            {isRole.student && <StudentLi />}
            {isRole.instructor && <InstructorLi />}
            {isRole.admin && <AdminLi />}
            <div className="h-[2px] bg-slate-400"></div>{" "}
            <li className="pt-8">
              <Link
                to="/"
                className="font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
              >
                <ImHome3 /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/instructors"
                className="font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
              >
                <GiTeacher /> Instructors
              </Link>
            </li>
            <li>
              <Link
                to="/classes"
                className="font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
              >
                <MdOndemandVideo /> Classes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
