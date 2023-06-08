import { useEffect, useState } from "react";

const InstructorsPage = () => {
  //* states
  const [instructors, setInstructors] = useState([]);

  //* effects
  useEffect(() => {
    fetch("./users.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <section className="pt-28">
      <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-8 uppercase px-4 lg:px-0 lg:gap-y-12 mb-16 lg:my-24">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="px-6 py-10 bg-white rounded-lg">
            <div className="overflow-hidden rounded-lg">
              <img
                src={instructor.image}
                alt=""
                className="w-full lg:grayscale-0 lg:hover:grayscale lg:transition lg:duration-200 lg:hover:scale-110"
              />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-center lg:text-left">
              {instructor.name}
            </h1>
            <p className="font-semibold text-gray-600 text-center lg:text-left lowercase">
              {instructor.email}
            </p>
            <p className="font-semibold text-gray-600 text-center lg:text-left">
              {instructor.category} Coach
            </p>
            <p className="font-semibold text-gray-600 text-center lg:text-left">
              classes: {instructor.classes}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructorsPage;
