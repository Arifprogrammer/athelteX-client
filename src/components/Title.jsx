const Title = ({ title }) => {
  return (
    <div className="my-container px-4 lg:px-0">
      <h1 className="italic font-bold text-3xl w-fit border-b-4 border-b-red-700 mb-16  pb-4 text-center lg:text-left">
        {title}
      </h1>
    </div>
  );
};

export default Title;
