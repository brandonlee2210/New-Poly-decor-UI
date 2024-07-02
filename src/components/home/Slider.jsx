import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";

const Slider = () => {
  return (
    <Carousel
      arrows
      dots={false}
      autoplay
      autoplaySpeed={3000}
      draggable
      speed={1000}
      infinite
    >
      <div>
        <Link to={"/"}>
          <img src={banner1} alt="Banner image" />
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <img src={banner2} alt="Banner image" />
        </Link>
      </div>
    </Carousel>
  );
};

export default Slider;
