import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MngUsersRowsTable from "./MngUsersRowsTable";

const ManageUsers = () => {
  //* hooks
  const { user } = useContext(AuthContext);
  //* customhooks
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("user_access_token");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email && !!token,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/users?email=${user?.email}`
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
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users?.map((singleClass, index) => (
                <MngUsersRowsTable
                  key={singleClass._id}
                  singleClass={singleClass}
                  index={index}
                  refetch={refetch}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
