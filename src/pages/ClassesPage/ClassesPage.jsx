import ClassesCard from "./ClassesCard";
import useClasses from "../../hooks/useClasses";
import Title from "../../components/Title";

const ClassesPage = () => {
  //* customhooks
  const [classes] = useClasses();
  const approvedClasses = classes.filter(
    (singleClasses) => singleClasses.status === "approved"
  );
  return (
    <section className="pt-40">
      <Title title="Select Your Favourite Classes" />
      <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-12 uppercase px-4 lg:px-0 mb-16 lg:my-24">
        {approvedClasses?.map((singleClass) => (
          <ClassesCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </section>
  );
};

export default ClassesPage;
