/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";
import Title from "../../../components/Title";
import { Bounce, Fade } from "react-awesome-reveal";

const stars = (
  <>
    <div className="my-6 flex gap-3 text-xl text-yellow-600 hover:text-red-700 transition duration-200">
      <Bounce delay={500}>
        <FaStar />
      </Bounce>
      <Bounce delay={1000}>
        <FaStar />
      </Bounce>
      <Bounce delay={1500}>
        <FaStar />
      </Bounce>
      <Bounce delay={2000}>
        <FaStar />
      </Bounce>
      <Bounce delay={2500}>
        <FaStar />
      </Bounce>
    </div>
  </>
);
const Reviews = () => {
  return (
    <>
      <Title title={"What They Say About Us!"} />
      <div className="my-container flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-12 justify-between">
        <div className="p-8 lg:p-12 bg-red-200 lg:-skew-x-12 lg:transition lg:duration-100 lg:hover:scale-105 lg:hover:shadow-2xl">
          <Fade delay={200} duration={1000}>
            <p className="font-semibold">
              "Joining your athlete training club has been one of the best
              decisions I've made for my athletic development. The club provides
              a supportive and motivating environment where athletes of all
              levels come together to train and improve. The coaches are
              knowledgeable, experienced, and genuinely care about the progress
              of each member. The training sessions are well-structured and
              challenging, pushing me to reach new heights. Additionally, the
              club organizes various events and competitions that add excitement
              and foster a sense of camaraderie among the athletes. I highly
              recommend this club to anyone looking to take their athletic
              performance to the next level."
            </p>
          </Fade>
          {stars}
          <Fade delay={2600} duration={1000}>
            <h1 className="text-xl font-bold">--- Henry Joseph</h1>
          </Fade>
        </div>
        <div className="p-8 lg:p-12 bg-red-200 lg:-skew-x-12 lg:transition lg:duration-100 lg:hover:scale-105 lg:hover:shadow-2xl">
          <Fade delay={600} duration={1000}>
            <p className="font-semibold">
              "I've been a part of your athlete training club for over a year
              now, and I can confidently say it has transformed my athletic
              abilities. The club's emphasis on proper technique, strength
              training, and conditioning has helped me become stronger, faster,
              and more agile. The coaching staff is exceptional, providing
              individualized attention and guidance to ensure everyone's
              progress. The club also offers specialized workshops and guest
              sessions with renowned athletes, giving us unique opportunities to
              learn from the best. Being a part of this club has not only
              improved my physical performance but has also given me a
              supportive community of like-minded athletes. I couldn't be
              happier with my experience."
            </p>
          </Fade>
          {stars}
          <Fade delay={2800} duration={1000}>
            <h1 className="text-xl font-bold">--- Nicholas Pooran</h1>
          </Fade>
        </div>
        <div className="p-8 lg:p-12 bg-red-200 lg:-skew-x-12 lg:transition lg:duration-100 lg:hover:scale-105 lg:hover:shadow-2xl">
          <Fade delay={1000} duration={1000}>
            <p className="font-semibold">
              "Your athlete training club is simply outstanding! The facilities
              are top-notch, providing a wide range of equipment and resources
              to cater to various sports and training needs. The club's focus on
              comprehensive athlete development sets it apart from others. From
              strength and conditioning to agility and skill training, every
              aspect is covered to maximize performance. The coaching staff is
              exceptional, bringing a wealth of expertise and passion to each
              session. The club's commitment to creating a positive and
              inclusive atmosphere is evident in the way athletes support and
              encourage one another. Joining this club has not only improved my
              athletic performance but has also introduced me to an incredible
              community of dedicated athletes. I'm grateful to be a part of it."
            </p>
          </Fade>
          {stars}
          <Fade delay={3000} duration={1000}>
            <h1 className="text-xl font-bold">--- David Conway</h1>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Reviews;
