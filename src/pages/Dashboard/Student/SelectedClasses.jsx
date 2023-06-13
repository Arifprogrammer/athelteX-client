import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useSelectedClasse from "../../../hooks/useSelectedClasse";
import SelectedRowsTable from "./SelectedRowsTable";

const SelectedClasses = () => {
  //* customhooks
  const [selectedClasses, refetch] = useSelectedClasse();
  const [axiosSecure] = useAxiosSecure();

  const reverseClasses = [...selectedClasses].reverse();

  //* functions
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
          // console.log(res.data);
          refetch();
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
        };
        deleteData();
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Available Seats</th>
              <th>Enrolled Students</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reverseClasses &&
              reverseClasses?.map((singleClass, index) => (
                <SelectedRowsTable
                  key={singleClass._id}
                  singleClass={singleClass}
                  index={index}
                  handleDeleteData={handleDeleteData}
                />
              ))}
          </tbody>
        </table>
        {reverseClasses.length === 0 && (
          <>
            <p className="mt-10 text-red-600 font-bold text-lg text-center">
              You have not selected any classes yet !!!
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default SelectedClasses;
