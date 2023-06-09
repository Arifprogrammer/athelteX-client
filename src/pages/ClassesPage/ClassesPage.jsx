import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

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
          <ClassesCard key={singleClass.id} singleClass={singleClass} />
        ))}
      </div>
    </section>
  );
};

export default ClassesPage;
