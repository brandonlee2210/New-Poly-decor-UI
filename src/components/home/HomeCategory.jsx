import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../common/ProductItem";

const HomeCategory = (props) => {
  return (
    <div className="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.6)] px-6 pt-4 pb-11">
      <div className="flex justify-between items-center">
        <h2 className="title mb-5">{props.title}</h2>
        <Link to={props.href} className="text-brown-strong text-sm">
          Xem tất cả <i class="fa-solid fa-angles-right text-xs"></i>
        </Link>
      </div>

      <div
        className={
          props.reverst
            ? "flex items-center flex-row-reverse gap-5"
            : "flex items-center flex-row gap-5"
        }
      >
        <div className="w-[52%] overflow-hidden">
          <Link to={props.href}>
            <img
              src={props.banner}
              alt=""
              className="hover:scale-110 duration-500"
            />
          </Link>
        </div>

        <div className="w-[48%] grid grid-cols-2 gap-4">
          {props.products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
