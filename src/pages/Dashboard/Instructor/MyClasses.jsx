import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ClassesRowsTable from "./ClassesRowsTable";

const MyClasses = () => {
  //* hooks
  const { user } = useContext(AuthContext);
  //* customhooks
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("user_access_token");
  const { data: myClasses = [] } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !!user?.email && !!token,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/my_classes?email=${user?.email}`
      );
      return res.data;
    },
  });
  return (
    <>
      <div className="overflow-x-auto w-full px-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Enrolled Students</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {myClasses &&
              myClasses?.map((singleClass, index) => (
                <ClassesRowsTable
                  key={singleClass._id}
                  singleClass={singleClass}
                  index={index}
                />
              ))}
          </tbody>
        </table>
        {myClasses.length === 0 && (
          <>
            <p className="mt-10 text-red-600 font-bold text-lg text-center">
              You have not add any classes yet !!!
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default MyClasses;
