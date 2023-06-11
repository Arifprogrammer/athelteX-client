import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import RowsTable from "./RowsTable";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("user_access_token");
  const { data: selectedClasses = [], refetch } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !!user?.email && !!token,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/selected?email=${user.email}`
      );

      return res.data;
    },
  });
  const handleDeleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteData = async () => {
          const res = await axiosSecure.delete(`/dashboard/selected/${id}`);
          console.log(res.data);
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
            refetch();
          }
        };
        deleteData();
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto w-full px-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Available Seats</th>
              <th>Enrolled Students</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {selectedClasses?.map((singleClass, index) => (
              <RowsTable
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
                handleDeleteData={handleDeleteData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SelectedClasses;
