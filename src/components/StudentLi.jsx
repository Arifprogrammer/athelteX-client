import { NavLink } from "react-router-dom";

const StudentLi = () => {
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
          Selected Classes
        </NavLink>
      </li>
      <li className="pb-16">
        <NavLink
          to="/dashboard/enrolled"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-xl"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
          }
        >
          Enrolled Classes
        </NavLink>
      </li>
    </>
  );
};

export default StudentLi;
