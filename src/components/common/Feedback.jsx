import React from "react";
import customerHome from "../../assets/images/customer-home.jpg";
import customerHome2 from "../../assets/images/customer-home-2.jpg";
import customerHome3 from "../../assets/images/customer-home-3.jpg";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <div className="mt-[50px]">
      <h2 className="big-title mb-10 text-center">
        HÌNH ẢNH THỰC TẾ TẠI NHÀ KHÁCH HÀNG
      </h2>

      <div className="grid grid-cols-3 gap-8">
        <div className="relative">
          <img src={customerHome2} alt="hinh anh thuc te tai nha khach hang" />
          <Link to={"/"}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
            <h3 className="absolute bottom-0 left-0 text-lg font-bold text-white text-center p-[22px]">
              Combo Nội Thất Phòng Khách Và Phòng Ngủ Của Anh Dũng – Ciputra
            </h3>
          </Link>
        </div>

        <div className="relative">
          <img src={customerHome} alt="hinh anh thuc te tai nha khach hang" />
          <Link to={"/"}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
            <h3 className="absolute bottom-0 left-0 text-lg font-bold text-white text-center p-[22px]">
              Hình ảnh bộ bàn ăn 8 ghế cổ điển tại nhà bác Thắng – TP. Thanh Hoá
            </h3>
          </Link>
        </div>

        <div className="relative">
          <img
            src={customerHome3}
            alt="hinh anh thuc te tai nha khach hang"
            className="h-full object-cover"
          />
          <Link to={"/"}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
            <h3 className="absolute bottom-0 left-0 text-lg font-bold text-white text-center p-[22px]">
              Hình Ảnh Bộ Sofa Tân Cổ Điển Tại Chị Nga – Ocean Park
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
