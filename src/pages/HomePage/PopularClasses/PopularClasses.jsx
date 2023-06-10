import Title from "../../../components/Title";
import useClasses from "../../../hooks/useClasses";

const PopularClasses = () => {
  //* hooks
  const [classes] = useClasses();

  return (
    <>
      <Title title={"Students Love The Classes"} />
      <div className="my-container grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-y-12 uppercase px-4 lg:px-0">
        {classes.map((singleClass) => (
          <div key={singleClass._id} className="relative">
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
    </>
  );
};

export default PopularClasses;
