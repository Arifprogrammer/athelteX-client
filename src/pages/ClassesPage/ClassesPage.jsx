import ClassesCard from "./ClassesCard";
import useClasses from "../../hooks/useClasses";

const ClassesPage = () => {
  //* hooks
  const [classes] = useClasses();
  return (
    <section className="pt-28">
      <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-12 uppercase px-4 lg:px-0 mb-16 lg:my-24">
        {classes?.map((singleClass) => (
          <ClassesCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </section>
  );
};

export default ClassesPage;
