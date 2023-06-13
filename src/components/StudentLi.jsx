import { NavLink } from "react-router-dom";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { RiWechatPayFill } from "react-icons/ri";

const StudentLi = () => {
  return (
    <>
      <li>
        <NavLink
          to="/dashboard/selected"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-lg"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
          }
        >
          <BsFillBookmarkHeartFill /> Selected Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/enrolled"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-lg"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
          }
        >
          <RiWechatPayFill /> Enrolled Classes
        </NavLink>
      </li>
      <li className="pb-16">
        <NavLink
          to="/dashboard/history"
          className={({ isActive }) =>
            isActive
              ? "text-red-700 font-semibold lg:border-b-4 border-b-red-700 text-lg"
              : "font-semibold lg:border-b-4 lg:border-b-white hover:border-b-red-700 lg:text-white hover:text-red-700 lg:transition lg:duration-200 text-lg"
          }
        >
          <MdPayment /> Payment History
        </NavLink>
      </li>
    </>
  );
};

export default StudentLi;
