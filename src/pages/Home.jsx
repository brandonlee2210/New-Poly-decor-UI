import Slider from "../components/home/Slider";
import ListCategory from "../components/home/ListCategory";
import SaleProducts from "../components/home/SaleProducts";
import HomeCategory from "../components/home/HomeCategory";
import homeSubBanner1 from "../assets/images/home-sub-banner-1.png";
import homeSubBanner2 from "../assets/images/home-sub-banner-2.png";
import homeSubBanner3 from "../assets/images/home-sub-banner-3.png";
import categoryBanner1 from "../assets/images/category-1-banner.png";
import categoryBanner2 from "../assets/images/category-2-banner.png";
import categoryBanner3 from "../assets/images/category-3-banner.png";
import categoryBanner4 from "../assets/images/category-4-banner.png";
import categoryImage1 from "../assets/images/category-1.1.jpg";
import categoryImage2 from "../assets/images/category-2.1.jpg";
import categoryImage3 from "../assets/images/category-3.1.jpg";
import categoryImage4 from "../assets/images/category-4.1.jpg";
import { Link } from "react-router-dom";
import Feedback from "../components/common/Feedback";
import Partner from "../components/home/Partner";
import ListStaff from "../components/common/ListStaff";

const Home = () => {
  const productsCate1 = [
    {
      id: 1,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 2,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 3,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 4,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
  ];

  const productsCate2 = [
    {
      id: 1,
      image: categoryImage2,
      name: "Bộ Sofa 3 Băng Góc Phải SF672-Nano1-28",
      price: "26.600.000 ₫",
      initPrice: "29.600.000 ₫",
    },
    {
      id: 2,
      image: categoryImage2,
      name: "Bộ Sofa 3 Băng Góc Phải SF672-Nano1-28",
      price: "26.600.000 ₫",
      initPrice: "29.600.000 ₫",
    },
    {
      id: 3,
      image: categoryImage2,
      name: "Bộ Sofa 3 Băng Góc Phải SF672-Nano1-28",
      price: "26.600.000 ₫",
      initPrice: "29.600.000 ₫",
    },
    {
      id: 4,
      image: categoryImage2,
      name: "Bộ Sofa 3 Băng Góc Phải SF672-Nano1-28",
      price: "26.600.000 ₫",
      initPrice: "29.600.000 ₫",
    },
  ];

  const productsCate3 = [
    {
      id: 1,
      image: categoryImage3,
      name: "Bộ Phòng Ngủ 1M8 Cổ Điển Trắng Sứ Cao Cấp GI3028-18",
      price: "99.000.000 ₫",
      initPrice: "120.000.000 ₫",
    },
    {
      id: 2,
      image: categoryImage3,
      name: "Bộ Phòng Ngủ 1M8 Cổ Điển Trắng Sứ Cao Cấp GI3028-18",
      price: "99.000.000 ₫",
      initPrice: "120.000.000 ₫",
    },
    {
      id: 3,
      image: categoryImage3,
      name: "Bộ Phòng Ngủ 1M8 Cổ Điển Trắng Sứ Cao Cấp GI3028-18",
      price: "99.000.000 ₫",
      initPrice: "120.000.000 ₫",
    },
    {
      id: 4,
      image: categoryImage3,
      name: "Bộ Phòng Ngủ 1M8 Cổ Điển Trắng Sứ Cao Cấp GI3028-18",
      price: "99.000.000 ₫",
      initPrice: "120.000.000 ₫",
    },
  ];

  const productsCate4 = [
    {
      id: 1,
      image: categoryImage4,
      name: "Bàn Ăn Gỗ Sồi Nhập Khẩu Phong Cách Tân Cổ Điển BH8311",
      price: "19.600.000 ₫",
      initPrice: "24.600.000 ₫",
    },
    {
      id: 2,
      image: categoryImage4,
      name: "Bàn Ăn Gỗ Sồi Nhập Khẩu Phong Cách Tân Cổ Điển BH8311",
      price: "19.600.000 ₫",
      initPrice: "24.600.000 ₫",
    },
    {
      id: 3,
      image: categoryImage4,
      name: "Bàn Ăn Gỗ Sồi Nhập Khẩu Phong Cách Tân Cổ Điển BH8311",
      price: "19.600.000 ₫",
      initPrice: "24.600.000 ₫",
    },
    {
      id: 4,
      image: categoryImage4,
      name: "Bàn Ăn Gỗ Sồi Nhập Khẩu Phong Cách Tân Cổ Điển BH8311",
      price: "19.600.000 ₫",
      initPrice: "24.600.000 ₫",
    },
  ];
  return (
    <>
      <Slider />
      <div className="container">
        <ListCategory />
        <SaleProducts />
        <HomeCategory
          title="Nội thất tân cổ điển"
          href="category/1"
          reverst={false}
          banner={categoryBanner1}
          products={productsCate1}
        />
        <Link to={"/"} className="py-[50px] block">
          <img src={homeSubBanner1} alt="home sub banner" />
        </Link>

        <HomeCategory
          title="Nội thất phòng khách"
          href="category/1"
          reverst={true}
          banner={categoryBanner2}
          products={productsCate2}
        />
        <Link to={"/"} className="py-[50px] block">
          <img src={homeSubBanner2} alt="home sub banner" />
        </Link>

        <HomeCategory
          title="Nội thất phòng ngủ"
          href="category/1"
          reverst={false}
          banner={categoryBanner3}
          products={productsCate3}
        />
        <Link to={"/"} className="py-[50px] block">
          <img src={homeSubBanner3} alt="home sub banner" />
        </Link>

        <HomeCategory
          title="Nội thất phòng ăn"
          href="category/1"
          reverst={true}
          banner={categoryBanner4}
          products={productsCate4}
        />
        <Feedback />
        <Partner />
        <ListStaff />
      </div>
    </>
  );
};

export default Home;
