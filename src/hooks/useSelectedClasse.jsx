import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useSelectedClasse = () => {
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
  return [selectedClasses, refetch];
};

export default useSelectedClasse;
