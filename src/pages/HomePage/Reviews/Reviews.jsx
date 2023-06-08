/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";
import Title from "../../../components/Title";

const stars = (
  <>
    <div className="my-6 flex gap-3 text-xl text-yellow-600">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  </>
);
const Reviews = () => {
  return (
    <>
      <Title title={"What They Say About Us!"} />
      <div className="my-container flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 justify-between">
        <div className="p-8 lg:p-12 bg-red-200 lg:-skew-x-12 lg:transition lg:duration-100 lg:hover:scale-105 lg:hover:shadow-2xl">
          <p className="font-semibold">
            "I have been using your athlete training club for the past few
            months, and I am extremely impressed with the quality and depth of
            the content. The training programs are well-structured, targeting
            specific areas of improvement for athletes. The instructional videos
            are clear and informative, providing step-by-step guidance. The
            club's user interface is intuitive and easy to navigate, making it
            simple to find the information I need. Overall, your club has been
            instrumental in helping me enhance my athletic performance. Thank
            you!"
          </p>
          {stars}
          <h1 className="text-xl font-bold">--- Henry Joseph</h1>
        </div>
        <div className="p-8 lg:p-12 bg-red-200 lg:-skew-x-12 lg:transition lg:duration-100 lg:hover:scale-105 lg:hover:shadow-2xl">
          <p className="font-semibold">
            "Your athlete training club is a game-changer! The variety of
            training exercises and programs available is remarkable. Whether
            you're a beginner or an experienced athlete, there is something for
            everyone. The club offers detailed explanations and demonstrations
            of each exercise, ensuring proper form and technique. I appreciate
            the personalized approach, with options to customize workouts based
            on individual goals and fitness levels. The progress tracking
            feature is also fantastic, allowing me to monitor my improvements
            over time. I can confidently say that this club has taken my
            training to new heights."
          </p>
          {stars}
          <h1 className="text-xl font-bold">--- Nicholas Pooran</h1>
        </div>
        <div className="p-8 lg:p-12 bg-red-200 lg:-skew-x-12 lg:transition lg:duration-100 lg:hover:scale-105 lg:hover:shadow-2xl">
          <p className="font-semibold">
            "I stumbled upon your athlete training club recently, and I must
            say, it's been a breath of fresh air. The content is backed by solid
            scientific research, which gives me confidence in the effectiveness
            of the training methods. The articles and blog posts are
            well-written and provide valuable insights into various aspects of
            athletic performance and nutrition. What sets your club apart is the
            interactive community it fosters. The forums and discussion boards
            allow athletes to connect, share experiences, and seek advice. It's
            a great platform for learning from others and finding support. Keep
            up the excellent work!"
          </p>
          {stars}
          <h1 className="text-xl font-bold">--- David Conway</h1>
        </div>
      </div>
    </>
  );
};

export default Reviews;
