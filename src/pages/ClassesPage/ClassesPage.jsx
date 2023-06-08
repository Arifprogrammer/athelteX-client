import { useEffect, useState } from "react";

const ClassesPage = () => {
  //* states
  const [classes, setClasses] = useState([]);

  //* effects
  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <section className="pt-28">
      <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-12 uppercase px-4 lg:px-0 mb-16 lg:my-24">
        {classes.map((singleClass) => (
          <div
            key={singleClass.id}
            className="relative p-6 bg-white rounded-lg"
          >
            <div className="lg:h-[230px] lg:overflow-hidden rounded-lg">
              <img
                src={singleClass.image}
                alt=""
                className="w-full lg:grayscale-0 lg:hover:grayscale lg:transition lg:duration-200 lg:hover:scale-125"
              />
            </div>
            <p className="px-3 py-1 bg-red-700 bg-opacity-70 text-white rounded-3xl w-fit absolute top-9 right-8 text-sm">
              Total Students: {singleClass.enrolled}
            </p>
            <h1 className="mt-4 text-xl font-bold text-center lg:text-left">
              {singleClass.name}
            </h1>
            <p className="font-semibold text-gray-600 text-center lg:text-left">
              {singleClass.category} {singleClass.role}
            </p>
            <p className="font-semibold text-gray-600 text-center lg:text-left">
              {singleClass.instructor}
            </p>
            <p className="font-semibold text-gray-600 text-center lg:text-left lowercase">
              {singleClass.email}
            </p>
            <p
              className={` text-center lg:text-left ${
                singleClass.seats === 0
                  ? "font-bold text-red-700"
                  : "font-semibold text-gray-600"
              }`}
            >
              Available seats:{" "}
              <span className="text-red-700 font-bold text-xl">
                {singleClass.seats}
              </span>
            </p>
            <p className="font-semibold text-gray-600 text-center lg:text-left">
              Price: ${" "}
              <span className="text-red-700 font-bold text-xl">
                {singleClass.price}
              </span>
            </p>
            <div className="mt-8 mx-auto w-fit">
              <button
                className={`py-3 px-8 font-semibold -skew-x-12 ${
                  singleClass.seats === 0
                    ? "bg-red-400 text-gray-200"
                    : "text-white  bg-red-700 hover:bg-black lg:transition lg:duration-200"
                } `}
                disabled={singleClass.seats === 0 ? true : false}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassesPage;
