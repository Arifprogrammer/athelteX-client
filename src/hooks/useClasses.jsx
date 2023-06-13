import { useQuery } from "react-query";

const useClasses = () => {
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery("classes", async () => {
    const res = await fetch("https://athletex-com-server.vercel.app/classes");
    return res.json();
  });
  return [classes, isLoading, refetch];
};

export default useClasses;
