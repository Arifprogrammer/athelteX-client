import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import RowsTable from "./RowsTable";

const SelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [] } = useQuery({
    queryKey: ["selected"],
    queryFn: async () => {
      const res = await axiosSecure.get("/dashboard/selected");

      return res.data;
    },
  });
  console.log(selectedClasses);
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SelectedClasses;
