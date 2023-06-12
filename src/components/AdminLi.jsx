import { NavLink } from "react-router-dom";

const AdminLi = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/selected"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-xl"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
          }
        >
          Manage Classes
        </NavLink>
      </li>
      <li className="pb-16">
        <NavLink
          to="/dashboard/history"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-xl"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
          }
        >
          Manage Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminLi;
