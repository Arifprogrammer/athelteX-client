import { useQuery } from "react-query";

const useClasses = () => {
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery("classes", async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  return [classes, isLoading, refetch];
};

export default useClasses;
