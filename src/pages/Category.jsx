import React, { useState, useEffect } from "react";
import bannerCategoryPage from "../assets/images/banner-category-page.jpg";
import categoryImage1 from "../assets/images/category-1.1.jpg";
import ProductItem from "../components/common/ProductItem";
import Feedback from "../components/common/Feedback";
import ListStaff from "../components/common/ListStaff";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";

const Category = () => {
  const productsCate = [
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
    {
      id: 5,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 6,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 7,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 8,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 9,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 10,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
  ];
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  const [categoryId, setCategoryId] = useState(1);

  useEffect(() => {
    let fetchVariants = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/orders/variants/Sofa"
      );

      console.log("response", response);

      setProducts(response.data);
    };

    fetchVariants();
  }, []);
  return (
    <>
      <div className="banner">
        <img src={bannerCategoryPage} alt="banner" />
      </div>
      <div className="container">
        <div className="flex items-center justify-between mt-10">
          <h3 className="text-2xl font-bold text-brown-strong">Sắp xếp theo</h3>
          <div>
            <span className="px-3 py-1 border border-[#ccc] rounded-lg text-brown-strong font-semibold cursor-pointer duration-200 hover:text-white hover:bg-brown-light active:bg-brown-light mr-3">
              Giá tăng dần
            </span>
            <span className="px-3 py-1 border border-[#ccc] rounded-lg text-brown-strong font-semibold cursor-pointer duration-200 hover:text-white hover:bg-brown-light active:bg-brown-light">
              Giá giảm dần
            </span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5">
          {products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Pagination current={current} onChange={onChange} total={50} />
        </div>
        <Feedback />
        <ListStaff />
      </div>
    </>
  );
};

export default Category;
