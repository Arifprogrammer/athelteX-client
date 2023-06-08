import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Title from "../../../components/Title";

const HomePage = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <>
      <section className="pt-16 mb-16 lg:pt-28">
        <Banner />
      </section>
      <section className="my-16 py-16 lg:my-28 lg:py-20 bg-white">
        <Title title={"Be Trained by A Professional Coach"} />
        <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-4 uppercase px-4 lg:px-0">
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
      </section>
    </>
  );
};

export default HomePage;
