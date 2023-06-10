import Title from "../../../components/Title";
import useInstructors from "../../../hooks/useInstructors";

const PopularInstructors = () => {
  //* customhooks
  const [instructors] = useInstructors();

  return (
    <>
      <Title title={"Be Trained by A Professional Coach"} />
      <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-8 uppercase px-4 lg:px-0 lg:gap-y-12">
        {instructors.map((instructor) => (
          <div key={instructor._id}>
            <img
              src={instructor.image}
              alt=""
              className="w-full grayscale hover:grayscale-0 transition duration-200"
            />
            <h1 className="mt-4 text-2xl font-bold text-center lg:text-left">
              {instructor.name}
            </h1>
            <p className="font-semibold text-gray-600 text-center lg:text-left">
              {instructor.category} Coach
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularInstructors;
