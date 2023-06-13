import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
const AdminLi = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/classes"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-xl"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
          }
        >
          <FaChalkboardTeacher /> Manage Classes
        </NavLink>
      </li>
      <li className="pb-16">
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-xl"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-xl"
          }
        >
          <MdManageAccounts /> Manage Users
        </NavLink>
      </li>
    </>
  );
};

export default AdminLi;
