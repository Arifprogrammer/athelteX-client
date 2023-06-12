import { NavLink } from "react-router-dom";

const InstructorLi = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/my_classes"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-lg"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
          }
        >
          My Classes
        </NavLink>
      </li>
      <li className="pb-16">
        <NavLink
          to="/dashboard/new_class"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-lg"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
          }
        >
          Add A Class
        </NavLink>
      </li>
    </>
  );
};

export default InstructorLi;
