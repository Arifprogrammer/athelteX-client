import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MngUsersRowsTable = ({ singleClass, index, refetch }) => {
  const { _id, image, name, email, role } = singleClass;
  //* hooks
  const { user } = useContext(AuthContext);
  //* customhooks
  const [axiosSecure] = useAxiosSecure();

  //* functions
  const makeRole = (id, role, category) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16A34A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const changeRole = { role, id: id, category };
        const updateData = async () => {
          const res = await axiosSecure.patch(
            `/role?email=${user?.email}`,
            changeRole
          );
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire("Changed!", "The user role has been changed.", "success");
          }
        };
        updateData();
      }
    });
  };

  return (
    <>
      <tr className="font-bold">
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="class picture" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td
          className={`${
            (role === "admin" && "text-pink-500") ||
            (role === "Instructor" && "text-blue-600") ||
            (role === "student" && "text-purple-600")
          }`}
        >
          {role}
        </td>
        <td>
          <button
            onClick={() => makeRole(_id, "admin", "owner")}
            className={`border-2 rounded-3xl w-full ${
              role !== "student"
                ? "border-pink-300 text-pink-300"
                : "border-pink-500 text-pink-500 hover:text-white hover:bg-pink-500"
            }`}
            disabled={role === "student" ? false : true}
          >
            Make Admin
          </button>
        </td>
        <td>
          <button
            onClick={() => makeRole(_id, "Instructor", "trainer")}
            className={`border-2 rounded-3xl w-full ${
              role === "student"
                ? "border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600"
                : "border-blue-300 text-blue-300"
            }`}
            disabled={role === "student" ? false : true}
          >
            Make Instructor
          </button>
        </td>
      </tr>
    </>
  );
};

export default MngUsersRowsTable;
