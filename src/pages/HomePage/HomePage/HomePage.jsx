import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";

const HomePage = () => {
  return (
    <>
      <section className="pt-16 mb-16 lg:pt-28">
        <Banner />
      </section>
      <section className="my-16 py-16 lg:my-28 lg:py-20">
        <PopularClasses />
      </section>
      <section className="my-16 py-16 lg:my-28 lg:py-20 bg-white">
        <PopularInstructors />
      </section>
      <section className="py-16 mb-16 lg:py-20 px-4 lg:px-0">
        <Reviews />
      </section>
    </>
  );
};

export default HomePage;
