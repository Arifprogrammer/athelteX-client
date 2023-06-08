import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Title from "../../../components/Title";

const HomePage = () => {
  //* states
  const [instructors, setInstructors] = useState([]);
  const [classes, setClasses] = useState([]);

  //* effects
  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <section className="pt-16 mb-16 lg:pt-28">
        <Banner />
      </section>
      <section className="my-16 py-16 lg:my-28 lg:py-20">
        <Title title={"Students Love The Classes"} />
        <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-12 uppercase px-4 lg:px-0">
          {classes.map((singleClass) => (
            <div key={singleClass.id} className="relative">
              <div className="lg:h-[230px] lg:overflow-hidden">
                <img
                  src={singleClass.image}
                  alt=""
                  className="w-full lg:grayscale-0 lg:hover:grayscale lg:transition lg:duration-200 lg:hover:scale-125"
                />
              </div>
              <p className="px-3 py-1 bg-red-700 bg-opacity-70 text-white rounded-3xl w-fit absolute bottom-14 right-1 text-sm">
                Total Students: {singleClass.enrolled}
              </p>
              <h1 className="mt-4 text-xl font-bold text-center lg:text-left">
                {singleClass.name}
              </h1>
              <p className="font-semibold text-gray-600 text-center lg:text-left">
                {singleClass.category} {singleClass.role}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-16 py-16 lg:my-28 lg:py-20 bg-white">
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
      </section>
    </>
  );
};

export default HomePage;
