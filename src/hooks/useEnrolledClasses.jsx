import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("user_access_token");
  const { data: enrolledClasses = [], refetch } = useQuery({
    queryKey: ["enrolled", user?.email],
    enabled: !!user?.email && !!token,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/enrolled?email=${user.email}`
      );

      return res.data;
    },
  });
  return [enrolledClasses, refetch];
};

export default useEnrolledClasses;
