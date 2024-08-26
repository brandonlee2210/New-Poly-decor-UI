import React, { useState, useEffect, useContext } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { CartContext } from "../../CartContext";
import { LoginContext } from "../../LoginContext";
import { useNavigate } from "react-router-dom";
import amdin from "../../assets/images/8fc6b76e48a8a8ab33246dc94c8fecf6.webp";
import axios from "axios";

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
  const [logged, setLogged] = useState(false);
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState({});
  const { carts, addCart, removeCart, whistlists } = useContext(CartContext);

  const { isLoggedIn, login, logout, userInfo } = useContext(LoginContext);
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const handleLogout = () => {
    logout();
  };
  const getUserId = async () => {
    const res = await axios.get(`http://localhost:8000/api/v1/auth/${id}`);
    setUser( res.data.user);
  };
  useEffect(()=>{
    getUserId()
  },[])

  
  const loggedItems = [
    {
      key: "1",
      label: <Link to={"/update-info"}>Cập nhật tài khoản</Link>,
    },
    {
      key: "2",
      label: <span onClick={handleLogout}>Đăng xuất</span>,
    },
    {
      key: "3",
      label: <Link to={"/forgot"}>Đổi mật khẩu</Link>,
    }
  ];
 
  const handleSearch = (e) => {
    e.preventDefault();
    // navigate to router <Route path="search/:keyword" element={<SearchResult />} />
    if (!keyword) {
      navigate(`/search/empty`);
      return;
    }
    navigate(`/search/${keyword}`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/categories"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

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
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                className="absolute top-[50%] left-2 translate-y-[-50%] text-brown-strong text-xl"
                onClick={handleSearch}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <Link
            to={"wishlist"}
            className="wishlist text-sm text-brown-strong relative"
          >
            <i className="fa-solid fa-heart text-xl mr-1 hover:text-red-600 duration-200"></i>
            Yêu thích
            {whistlists && whistlists.length > 0 ? (
              <span className="absolute top-0 left-0 translate-x-[-60%] translate-y-[-60%] text-white text-xs w-5 h-5 flex justify-center items-center bg-red-500 rounded-full">
                {whistlists?.length}
              </span>
            ) : null}
          </Link>

          <Link to={"cart"} className="cart text-sm text-brown-strong relative">
            <i className="fa-solid fa-cart-shopping text-xl mr-2"></i>
            Giỏ hàng
            {carts && carts.length > 0 ? (
              <span className="absolute top-0 left-0 translate-x-[-60%] translate-y-[-60%] text-white text-xs w-5 h-5 flex justify-center items-center bg-red-500 rounded-full">
                {carts?.length}
              </span>
            ) : null}
          </Link>

          <Link
            to={"history"}
            className="cart text-sm text-brown-strong relative"
          >
            <i className="fa-solid fa-basket-shopping text-xl mr-2"></i>
            Đơn hàng
          </Link>

          <div className="hotline bg-brown-strong p-2 px-4 rounded-lg">
            <a
              href="tel:0366027883"
              className="flex items-center gap-3 text-brown-light font-bold text-sm"
            >
              <i className="fa-solid fa-phone-volume "></i>
              <span className="uppercase">Hotline</span>
              <span>0366027883</span>
            </a>
          </div>

          <div className="user">
            {isLoggedIn ? (
              <Dropdown
                menu={{
                  items: loggedItems,
                }}
                placement="bottomLeft"
                arrow
              >
                <div className="text-brown-strong flex items-center gap-1">
                  <div className="h-9 w-9 overflow-hidden rounded-full flex items-center">
                    <img src={amdin} alt="avatar" />{" "}
                  </div>
                  {userInfo?.username || "Khách hàng"}
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
                  <i className="fa-solid fa-user"></i> Đăng ký/nhập
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
              {categories.map((category) => (
                <li key={category._id}>
                  <Link to={`/category/${category.name}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
