import { useEffect, useState } from "react";
import Title from "../../../components/Title";

const PopularInstructors = () => {
  //* states
  const [instructors, setInstructors] = useState([]);

  //* effects
  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <>
      <Title title={"Be Trained by A Professional Coach"} />
      <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-8 uppercase px-4 lg:px-0 lg:gap-y-12">
        {instructors.map((instructor) => (
          <div key={instructor.id}>
            <img
              src={instructor.image}
              alt=""
              className="w-full grayscale hover:grayscale-0 transition duration-200"
            />
            <h1 className="mt-4 text-2xl font-bold text-center lg:text-left">
              {instructor.name}
            </h1>
            <p className="font-semibold text-gray-600 text-center lg:text-left">
              {instructor.category} {instructor.role}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularInstructors;
