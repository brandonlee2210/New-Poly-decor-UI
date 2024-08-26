import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import saleProductImage1 from "../../assets/images/sale-product-1.jpg";
import saleProductImage2 from "../../assets/images/sale-product-2.jpg";
import ProductItem from "../common/ProductItem";

import { getProductsPaginate } from "../../api/api.js";

const addProductToLocalStorage = (product) => {
  let products = localStorage.getItem("saleProducts");
  products = products ? JSON.parse(products) : [];
  products.push(product);
  localStorage.setItem("saleProducts", JSON.stringify(products));
};

const SaleProducts = () => {
  const saleProducts2 = [
    {
      id: 1,
      image: saleProductImage1,
      name: "Sofa da màu kem 2 băng góc trái 9192GTK",
      price: "19.500.000 ₫",
      initPrice: "39.000.000 ₫",
    },
    {
      id: 2,
      image: saleProductImage2,
      name: " Bộ Sofa Da 3 Băng Góc Phải SP919-C1011",
      price: "22.000.000 ₫",
      initPrice: "44.000.000 ₫",
    },
    {
      id: 3,
      image: saleProductImage1,
      name: "Sofa da màu kem 2 băng góc trái 9192GTK",
      price: "19.500.000 ₫",
      initPrice: "39.000.000 ₫",
    },
    {
      id: 4,
      image: saleProductImage2,
      name: " Bộ Sofa Da 3 Băng Góc Phải SP919-C1011",
      price: "22.000.000 ₫",
      initPrice: "44.000.000 ₫",
    },
    {
      id: 5,
      image: saleProductImage1,
      name: "Sofa da màu kem 2 băng góc trái 9192GTK",
      price: "19.500.000 ₫",
      initPrice: "39.000.000 ₫",
    },
    {
      id: 6,
      image: saleProductImage2,
      name: " Bộ Sofa Da 3 Băng Góc Phải SP919-C1011",
      price: "22.000.000 ₫",
      initPrice: "44.000.000 ₫",
    },
  ];

  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductsPaginate(1, 6);
      setSaleProducts(response.data);
    };

    fetchProducts();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="bg-brown-light px-4 pb-[30px] pt-4 mb-[30px]  rounded-lg">
      <h2 className="title pb-6">Ưu đãi không thể bỏ lỡ tại PolyDecor.</h2>
      <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={16}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay]}
      >
        {saleProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem product={product} isSaleProduct={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaleProducts;
