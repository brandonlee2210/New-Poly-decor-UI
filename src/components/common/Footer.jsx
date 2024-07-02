import React from "react";
import { FloatButton } from "antd";
import { Link } from "react-router-dom";
import zaloImage from "../../assets/images/zalo-icon.webp";
import messImage from "../../assets/images/mess-icon.webp";

const Footer = () => {
  return (
    <>
      <div className="footer bg-brown-light mt-[50px] pt-[30px] pb-16">
        <div className="container text-brown-strong grid grid-cols-4 gap-4">
          <div>
            <h3 className="footer-title">Giờ mở cửa</h3>
            <span className="text-sm">
              8:00 đến 19:00 tất cả các ngày trong tuần.
            </span>

            <h3 className="footer-title mt-4">Showroom Hà Nội</h3>
            <span className="text-sm">
              Cổng số 1, Tòa nhà FPT Polytechnic, 13 phố Trịnh Văn Bô, phường
              Phương Canh, quận Nam Từ Liêm, TP Hà Nội
            </span>
            <div className="text-sm mt-3">
              <strong>Hotline:</strong>
              (024) 7300 1955
            </div>
            <div className="text-sm mt-1">
              <strong>Email:</strong>
              caodang@fpt.edu.vn
            </div>

            <h3 className="footer-title mt-4">Showroom Hồ Chí Minh</h3>
            <span className="text-sm">
              Tòa nhà QTSC9 (toà T), đường Tô Ký, phường Tân Chánh Hiệp, quận
              12, TP HCM.
            </span>
            <div className="text-sm mt-3">
              <strong>Hotline:</strong>
              (024) 7300 1955
            </div>
            <div className="text-sm mt-1">
              <strong>Email:</strong>
              caodang@fpt.edu.vn
            </div>
          </div>
          <div>
            <h3 className="footer-title">Thông tin hướng dẫn</h3>
            <ul>
              <li>
                <Link to={"/"} className="hover:text-white">
                  Câu hỏi thường gặp 2{" "}
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white">
                  Điều khoản và điều kiện 2{" "}
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white">
                  Tin tức 2{" "}
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-sm hover:text-white">
                  Kiến thức xây dựng
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-sm hover:text-white">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-sm hover:text-white">
                  Hình thức vận chuyển
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-sm hover:text-white">
                  Hình thức thanh toán
                </Link>
              </li>
              <li>
                <Link to={"/"} className="text-sm hover:text-white">
                  Chính sách đổi trả
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Bài viết mới</h3>
            <ul>
              <li>
                <Link to={"/"} className="hover:text-white mb-1 flex gap-2">
                  <i class="fa-solid fa-chevron-right mt-2"></i> Tổng Hợp 55 Mẫu
                  Sofa Nỉ Ấn Tượng Đủ Mọi Phong Cách Cho Năm 2024
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white mb-1 flex gap-2">
                  <i class="fa-solid fa-chevron-right mt-2"></i>
                  25 bộ Sofa phong cách Bắc Âu cho lối sống hiện đại, giản đơn
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white mb-1 flex gap-2">
                  <i class="fa-solid fa-chevron-right mt-2"></i> 25 bộ giường
                  ngủ chân cao gia đình và ưu điểm chúng đem lại
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white mb-1 flex gap-2">
                  <i class="fa-solid fa-chevron-right mt-2"></i> 17 bộ sofa màu
                  hồng đầy mơ mộng cho ngôi nhà trong mơ
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white mb-1 flex gap-2">
                  <i class="fa-solid fa-chevron-right mt-2"></i> 33 bộ sofa màu
                  be trang nhã và thời thượng cho gia đình
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white mb-1 flex gap-2">
                  <i class="fa-solid fa-chevron-right mt-2"></i> 12 bộ sofa màu
                  xanh lá cây ấn tượng độc đáo cho năm tới
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-white mb-1 flex gap-2">
                  <i class="fa-solid fa-chevron-right mt-2"></i> 24 mẫu sofa
                  khung inox ấn tượng cho phòng khách 5 sao
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Theo dõi chúng tôi</h3>
            <div className="flex items-center gap-2 mt-2">
              <Link to={"/"}>
                <span className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-white hover:bg-blue-600 hover:text-white">
                  <i class="fa-brands fa-facebook-f"></i>
                </span>
              </Link>
              <Link to={"/"}>
                <span className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-white hover:bg-black hover:text-white">
                  <i class="fa-brands fa-tiktok"></i>
                </span>
              </Link>
              <Link to={"/"}>
                <span className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-white hover:bg-black hover:text-white">
                  <i class="fa-brands fa-x-twitter"></i>
                </span>
              </Link>
              <Link to={"/"}>
                <span className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-white hover:text-red-600 hover:bg-white">
                  <i class="fa-brands fa-youtube"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right text-center bg-brown-strong text-brown-light py-6">
        Copyright © 2022 - 2024 polydecor.com.
      </div>
      <div>
        <Link
          to={"/"}
          className="inline-block w-[50px] h-[50px] fixed top-[50%] right-0 -translate-y-[51%] mr-3"
        >
          <img src={zaloImage} alt="zalo icon" />
        </Link>
        <Link
          to={"/"}
          className="inline-block w-[60px] h-[60px] fixed top-[50%] right-0 translate-y-[51%] mr-2"
        >
          <img src={messImage} alt="mess icon" />
        </Link>
      </div>
      <FloatButton.BackTop />
    </>
  );
};

export default Footer;
