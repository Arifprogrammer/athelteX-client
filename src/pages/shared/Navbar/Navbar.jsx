import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useRole from "../../../hooks/useRole";

const Navbar = () => {
  //* hooks
  const { user, logOut } = useContext(AuthContext);

  //* customhooks
  const [isRole] = useRole();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => console.log(error));
  };
  const listItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200"
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200"
          }
        >
          Classes
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to={`${
                (isRole.student && "/dashboard/selected") ||
                (isRole.instructor && "/dashboard/my_classes") ||
                (isRole.admin && "/dashboard/classes")
              }`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700"
                  : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="lg:hidden">
            <button onClick={handleLogOut} className="font-semibold">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li className="lg:hidden">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700"
                : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <section className="fixed z-10 w-full bg-black">
      <div className="navbar p-0 my-container rounded-sm text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52 font-semibold text-black"
            >
              {listItem}
            </ul>
          </div>
          <div className="px-5 pb-8 pt-3 -skew-x-12  bg-[#F1F2F9] -mb-1 hidden lg:flex">
            <h1 className="text-3xl text-black font-extrabold">
              Athlete
              <span className="text-red-700 font-extrabold italic text-6xl -mt-6 pl-1">
                X
              </span>
            </h1>
          </div>
        </div>
        <div className="navbar-center">
          <div className="px-3 pb-5 pt-2 text-black -skew-x-12  bg-[#F1F2F9] -mb-1 lg:hidden">
            <h1 className="text-2xl font-extrabold">
              Athlete
              <span className="text-red-700 font-extrabold italic text-4xl -mt-5 pl-1">
                X
              </span>
            </h1>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal mr-3 gap-4  hidden lg:flex">
            {listItem}
          </ul>
          {user ? (
            <div className=" hidden lg:flex items-center gap-6">
              <Link className="text-white text-2xl">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </Link>{" "}
              <button
                onClick={handleLogOut}
                className="py-3 px-8 font-semibold -skew-x-12 text-white  bg-red-700 hover:text-red-700 hover:bg-white lg:transition lg:duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="py-3 px-8 font-semibold -skew-x-12 text-white  bg-red-700  hidden lg:flex hover:text-red-700 hover:bg-white lg:transition lg:duration-200"
            >
              Login
            </Link>
          )}
          {user && (
            <Link className="text-white text-2xl pr-4 lg:hidden">
              <img
                src={user?.photoURL}
                alt=""
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-full"
              />
            </Link>
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Navbar;
