import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import partner1 from "../../assets/images/doitac-1.png";
import partner3 from "../../assets/images/doitac-3.jpg";

const Partner = () => {
  return (
    <div className="mt-[100px]">
      <h2 className="big-title text-center pb-8">Đối tác chiến lược</h2>
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={16}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay]}
        navigation={true}
      >
        <SwiperSlide>
          <Link to={"/"} className=" flex item-center justify-center">
            <img
              src={partner1}
              alt="doi tac 1"
              className="max-h-[91px] rounded-lg"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={"/"} className="flex item-center justify-center">
            <img
              src={partner3}
              alt="doi tac 3"
              className="max-h-[91px] rounded-lg"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"} className=" flex item-center justify-center">
            <img
              src={partner1}
              alt="doi tac 1"
              className="max-h-[91px] rounded-lg"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={"/"} className="flex item-center justify-center">
            <img
              src={partner3}
              alt="doi tac 3"
              className="max-h-[91px] rounded-lg"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={"/"} className=" flex item-center justify-center">
            <img
              src={partner1}
              alt="doi tac 1"
              className="max-h-[91px] rounded-lg"
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={"/"} className="flex item-center justify-center">
            <img
              src={partner3}
              alt="doi tac 3"
              className="max-h-[91px] rounded-lg"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partner;
