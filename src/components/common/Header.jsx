import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";

const loggedItems = [
  {
    key: "1",
    label: <Link to={"/update-info"}>Cập nhật tài khoản</Link>,
  },
  {
    key: "2",
    label: <Link to={"/"}>Đăng xuất</Link>,
  },
];

const loginItems = [
  {
    key: "1",
    label: <Link to={"register"}>Đăng ký</Link>,
  },
  {
    key: "2",
    label: <Link to={"login"}>Đăng nhập</Link>,
  },
];

const Header = () => {
  const [logged, setLogged] = useState(true);
  // setLogged(true);
  return (
    <div className="header sticky top-0 left-0 right-0 z-10">
      <div className="bg-brown-light">
        <div className="container header-top flex justify-between items-center py-6">
          <Link to={"/"}>
            <Logo />
          </Link>

          <div className="search basis-[30%] relative">
            <form action="">
              <input
                className="bg-[#C79F61] py-2 px-8 outline-none rounded-xl placeholder:text-brown-strong placeholder:text-sm w-full"
                type="text"
                placeholder="Nhập để tìm kiếm sản phẩm bạn muốn"
              />
              <button className="absolute top-[50%] left-2 translate-y-[-50%] text-brown-strong text-xl">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <Link
            to={"wishlist"}
            className="wishlist text-sm text-brown-strong relative"
          >
            <i class="fa-solid fa-heart text-xl mr-1 hover:text-red-600 duration-200"></i>
            Yêu thích
            <span className="absolute top-0 left-0 translate-x-[-60%] translate-y-[-60%] text-white text-xs w-5 h-5 flex justify-center items-center bg-red-500 rounded-full">
              10
            </span>
          </Link>

          <Link to={"cart"} className="cart text-sm text-brown-strong relative">
            <i class="fa-solid fa-basket-shopping text-xl mr-2"></i>
            Giỏ hàng
            <span className="absolute top-0 left-0 translate-x-[-60%] translate-y-[-60%] text-white text-xs w-5 h-5 flex justify-center items-center bg-red-500 rounded-full">
              10
            </span>
          </Link>

          <div className="hotline bg-brown-strong p-2 px-4 rounded-lg">
            <a
              href="tel:0366027883"
              className="flex items-center gap-3 text-brown-light font-bold text-sm"
            >
              <i class="fa-solid fa-phone-volume "></i>
              <span className="uppercase">Hotline</span>
              <span>0366027883</span>
            </a>
          </div>

          <div className="user">
            {logged ? (
              <Dropdown
                menu={{
                  items: loggedItems,
                }}
                placement="bottomLeft"
                arrow
              >
                <div className="text-brown-strong flex items-center gap-1">
                  <div className="h-9 w-9 overflow-hidden rounded-full flex items-center">
                    <img
                      src="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096"
                      alt="avatar"
                    />{" "}
                  </div>
                  Gia Khánh
                </div>
              </Dropdown>
            ) : (
              <Dropdown
                menu={{
                  items: loginItems,
                }}
                placement="bottomLeft"
                arrow
              >
                <div className="text-brown-strong ">
                  <i class="fa-solid fa-user"></i> Đăng ký/nhập
                </div>
              </Dropdown>
            )}
            {/*  */}
          </div>
        </div>
      </div>

      <div className="bg-brown-strong">
        <div className="container header-bottom">
          <nav>
            <ul className="flex items-center gap-10 py-4 font-semibold text-brown-light uppercase">
              <li>
                <Link to={"category/1"}>Sofa</Link>
              </li>
              <li>
                <Link to={"category/1"}>Bàn trà</Link>
              </li>
              <li>
                <Link to={"category/1"}>Kệ tivi</Link>
              </li>
              <li>
                <Link to={"category/1"}>Bàn ghế ăn</Link>
              </li>
              <li>
                <Link to={"category/1"}>Giường ngủ</Link>
              </li>
              <li>
                <Link to={"category/1"}>Tủ quần áo</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
