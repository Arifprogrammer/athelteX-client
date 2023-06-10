import { useQuery } from "react-query";

const useInstructors = () => {
  const { data: instructors = [], isLoading } = useQuery(
    "instructors",
    async () => {
      const res = await fetch(
        "http://localhost:5000/instructors?role=Instructor"
      );
      return res.json();
    }
  );
  return [instructors, isLoading];
};

export default useInstructors;
