import React, { useState, useEffect } from "react";
import bannerCategoryPage from "../assets/images/banner-category-page.jpg";
import categoryImage1 from "../assets/images/category-1.1.jpg";
import ProductItem from "../components/common/ProductItem";
import Feedback from "../components/common/Feedback";
import ListStaff from "../components/common/ListStaff";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Pagination } from "antd";

const Category = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    let fetchVariants = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1/orders/variants/${name}?page=${page}`
      );

      setProducts(response.data);
    };

    fetchVariants();
    setCurrent(page);
  };
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchVariants = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/orders/variants/" + name
      );

      setProducts(response.data);
    };

    fetchVariants();
  }, [name]);
  return (
    <>
      <div className="banner flex justify-center">
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
          {products?.data?.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Pagination
            current={current}
            onChange={onChange}
            pageSize={products?.pagination?.pageSize}
            total={products.total}
          />
        </div>
        <Feedback />
        <ListStaff />
      </div>
    </>
  );
};

export default Category;
