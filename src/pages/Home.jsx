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
import { Link } from "react-router-dom";
import Feedback from "../components/common/Feedback";
import Partner from "../components/home/Partner";
import ListStaff from "../components/common/ListStaff";
import axios from "axios";

import React, { useState, useEffect } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/categories"
        );
        const fetchedCategories = response.data.data.slice(0, 4);
        setCategories(fetchedCategories);

        const productsArray = await Promise.all(
          fetchedCategories.map(async (category) => {
            const response = await axios.get(
              "http://localhost:8000/api/v1/orders/variants/" + category.name
            );
            return response.data.slice(0, 4);
          })
        );

        setProductsCategory(productsArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Slider />
      <div className="container">
        <ListCategory />
        <SaleProducts />
        {categories.length > 0 && productsCategory.length > 0 && (
          <HomeCategory
            title={`Danh mục ${categories[0]?.name}`}
            href={`category/${categories[0]?.name}`}
            reverst={false}
            banner={categoryBanner1}
            products={productsCategory[0]}
          />
        )}
        <Link to={"/"} className="py-[50px] block">
          <img src={homeSubBanner1} alt="home sub banner" />
        </Link>

        {categories.length > 0 && productsCategory.length > 0 && (
          <HomeCategory
            title={`Danh mục ${categories[1]?.name}`}
            href={`category/${categories[1]?.name}`}
            reverst={true}
            banner={categoryBanner4}
            products={productsCategory[1]}
          />
        )}
        <Link to={"/"} className="py-[50px] block">
          <img src={homeSubBanner2} alt="home sub banner" />
        </Link>
        {categories.length > 0 && productsCategory.length > 0 && (
          <HomeCategory
            title={`Danh mục ${categories[2]?.name}`}
            href={`category/${categories[2]?.name}`}
            reverst={false}
            banner={categoryBanner3}
            products={productsCategory[2]}
          />
        )}
        <Link to={"/"} className="py-[50px] block">
          <img src={homeSubBanner3} alt="home sub banner" />
        </Link>

        {categories.length > 0 && productsCategory.length > 0 && (
          <HomeCategory
            title={`Danh mục ${categories[3]?.name}`}
            href={`category/${categories[3]?.name}`}
            reverst={true}
            banner={categoryBanner2}
            products={productsCategory[3]}
          />
        )}
        <Feedback />
        <Partner />
        <ListStaff />
      </div>
    </>
  );
};

export default Home;
