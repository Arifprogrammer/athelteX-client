import { useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MngClsRowsTable = ({ singleClass, index, refetch, handleDeny }) => {
  //* hooks
  const { user } = useContext(AuthContext);
  //* customhooks
  const [axiosSecure] = useAxiosSecure();
  const {
    _id,
    image,
    name,
    seats,
    enrolled,
    price,
    status,
    feedback,
    instructor,
    email,
  } = singleClass;

  //* functions
  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16A34A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        const approveClass = { status: "approved", id: id };
        const updateData = async () => {
          const res = await axiosSecure.patch(
            `/approve_class?email=${user?.email}`,
            approveClass
          );
          console.log(res.data);
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire("Approved!", "The class has been approved.", "success");
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
        <td>{instructor}</td>
        <td>{email}</td>
        <td className="pl-11">{seats}</td>
        <td className="pl-11">{enrolled}</td>
        <td className="pl-5">$ {price}</td>

        <td
          className={`${
            (status === "approved" && "text-green-700") ||
            (status === "pending..." && "text-blue-700") ||
            (status === "denied" && "text-red-600")
          }`}
        >
          {status}
        </td>
        <td className="space-y-2">
          <button
            onClick={() => handleApprove(_id)}
            className={`border-2 rounded-3xl w-3/4 ${
              status === "pending..."
                ? "border-green-600 text-green-600 hover:text-white hover:bg-green-600"
                : "border-green-300 text-green-300"
            }`}
            disabled={status === "pending..." ? false : true}
          >
            Approve
          </button>{" "}
          <button
            onClick={() => handleDeny(singleClass)}
            className={`border-2 rounded-3xl w-3/4 ${
              status === "pending..."
                ? "border-red-600 text-red-600 hover:text-white hover:bg-red-600"
                : "border-red-300 text-red-300"
            }`}
            disabled={status === "pending..." ? false : true}
          >
            Deny
          </button>
        </td>
        <td>
          {feedback.length < 1 ? "No feedback" : feedback.slice(0, 25) + "..."}
        </td>
      </tr>
    </>
  );
};

export default MngClsRowsTable;
