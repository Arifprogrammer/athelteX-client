import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("user_access_token");
  const { data: isStudent = {}, isLoading } = useQuery({
    queryKey: ["student", user?.email],
    enabled: !!user?.email && !!token,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/student/${user?.email}`);
      return res.data.student;
    },
  });
  return [isStudent, isLoading];
};

export default useStudent;
