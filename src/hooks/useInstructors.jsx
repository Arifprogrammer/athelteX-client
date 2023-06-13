import { useQuery } from "react-query";

const useInstructors = () => {
  const { data: instructors = [], isLoading } = useQuery(
    "instructors",
    async () => {
      const res = await fetch(
        "https://athletex-com-server.vercel.app/instructors?role=Instructor"
      );
      return res.json();
    }
  );
  return [instructors, isLoading];
};

export default useInstructors;
