import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import banner1 from "../../../assets/Banners/banner1-min.png";
import banner2 from "../../../assets/Banners/banner2-min.png";
import banner3 from "../../../assets/Banners/banner3-min.png";

const Banner = () => {
  return (
    <div className="my-16 lg:my-24 my-container grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
      <div className="mt-14">
        <div className="uppercase font-semibold w-fit flex items-center gap-4 bg-slate-300 rounded-3xl px-3 py-1">
          <p className="text-white bg-black rounded-3xl px-3 py-1">The Best</p>
          <p className="text-black">Athlete Club in Town</p>
        </div>
        <div className="uppercase text-4xl font-bold space-y-2 my-6 ">
          <h1>Enhancing your summer</h1>
          <h1>vacation by embracing an</h1>
          <h1 className="text-red-700 tracking-[0.3rem]">athletic lifestyle</h1>
        </div>
        <div className="uppercase flex items-center gap-5">
          <div>
            <h3 className="text-2xl font-bold">
              20 <span className="text-red-700 text-3xl">+</span>
            </h3>
            <p className="text-gray-700 font-semibold">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              30 <span className="text-red-700 text-3xl">+</span>
            </h3>
            <p className="text-gray-700 font-semibold">Instructors</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              215 <span className="text-red-700 text-3xl">+</span>
            </h3>
            <p className="text-gray-700 font-semibold">Members joined</p>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          className="mySwiper -skew-x-12"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
