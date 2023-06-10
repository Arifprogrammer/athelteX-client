import { useQuery } from "react-query";

const useClasses = () => {
  const { data: classes = [], isLoading } = useQuery("classes", async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  return [classes, isLoading];
};

export default useClasses;
