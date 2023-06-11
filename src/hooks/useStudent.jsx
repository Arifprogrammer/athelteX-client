import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isStudent = {}, isLoading } = useQuery({
    queryKey: ["student", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/student/${user?.email}`);
      return res.data.student;
    },
  });
  return [isStudent, isLoading];
};

export default useStudent;
