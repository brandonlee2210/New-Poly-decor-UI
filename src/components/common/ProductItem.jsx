/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const addProductToLocalStorage = (product) => {
  let products = localStorage.getItem("carts");
  products = products ? JSON.parse(products) : [];
  products.push(product);
  console.log(products);
  localStorage.setItem("carts", JSON.stringify(products));
};

const ProductItem = (props) => {
  const addToCart = () => {
    addProductToLocalStorage(props.product);
  };

  return (
    <div
      className={
        props.isSaleProduct
          ? "bg-white rounded-lg overflow-hidden"
          : "shadow-[0_0_6px_rgba(0,0,0,0.4)]  bg-white"
      }
    >
      <div className="overflow-hidden">
        <Link to={`/product/${props.product._id}`}>
          <img
            src={`src/assets/images/${props.product.image}`}
            alt="product image"
            className="hover:scale-110 duration-500"
          />
        </Link>
      </div>
      <div className="p-[10px]">
        <Link to={`/product/${props.product._id}`}>
          <h3 className="text-brown-strong text-sm mb-2 font-bold">
            {props.product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center">
          <p className="text-brown-strong text-xl mb-1 font-bold">
            {props.product.price}
          </p>

          <div className="mb-1">
            <Link to={"/"}>
              <i className="fa-solid fa-heart text-xl mr-2 text-brown-strong hover:text-red-600 duration-200"></i>
            </Link>
            <div onClick={addToCart}>
              <i className="fa-solid fa-basket-shopping text-xl text-brown-strong hover:text-brown-light"></i>
            </div>
          </div>
        </div>

        <p className="text-brown-light text-sm font-bold line-through">
          {props.product.initPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
