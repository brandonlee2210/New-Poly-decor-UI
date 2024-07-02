import React, { useState } from "react";
import categoryImage1 from "../assets/images/category-1.1.jpg";
import InDecreaseQuantity from "../components/common/InDecreaseQuantity";
import { Link } from "react-router-dom";

const Cart = () => {
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
  ];
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container2 grid grid-cols-[3fr_1fr] gap-5 mt-16">
      <div>
        <h2 className="title">Giỏ hàng</h2>
        <table className="mt-5">
          <thead>
            <tr className="border-b border-brown-strong">
              <th className="text-brown-strong font-semibold text-lg">
                Sản phẩm
              </th>
              <th className="text-brown-strong font-semibold text-lg">Giá</th>
              <th className="text-brown-strong font-semibold text-lg">
                Số lượng
              </th>
              <th className="text-brown-strong font-semibold text-lg">Tổng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productsCate.map((product, index) => (
              <tr key={index} className="border-b border-brown-strong">
                <td className="text-brown-strong p-3 align-middle flex items-center gap-3 max-w-[520px]">
                  <img
                    src={product.image}
                    alt="product image"
                    className="w-[200px]"
                  />
                  <div>
                    <span className="text-lg font-semibold">
                      {product.name}
                    </span>
                    <div>
                      <div className="mt-1">Màu sắc: Nâu cà phê</div>
                      <div className="mt-1">Chất liệu: Gỗ sồi</div>
                    </div>
                  </div>
                </td>
                <td className="text-brown-strong p-3 align-middle">
                  {product.price}
                </td>
                <td className="text-brown-strong p-3 align-middle">
                  <InDecreaseQuantity
                    isCart={true}
                    quantity={quantity}
                    increment={increment}
                    decrement={decrement}
                  />
                </td>
                <td className="text-brown-strong p-3 text-lg font-semibold">
                  {/* {product.price * quantity} */}
                  173.000.000 ₫
                </td>
                <td className="text-brown-strong p-3 text-xl hover:text-red-600 cursor-pointer">
                  <i class="fa-regular fa-trash-can"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4">
          <Link
            to={"/"}
            className="text-white px-5 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:opacity-70"
          >
            Tiếp tục mua hàng
          </Link>
          <div className="text-red-600 text-lg font-semibold cursor-pointer">
            Xóa toàn bộ giỏ hàng
          </div>
        </div>
      </div>
      <div className="mt-14 text-brown-strong">
        <h2 className="text-2xl font-bold ">Tổng tiền giỏ hàng</h2>
        <div className="flex items-center justify-between mt-4">
          <span>Tổng sản phẩm</span>
          <span>10</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span>Tổng tiền hàng</span>
          <span className="font-semibold">100.000.000 ₫</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span>Thành tiền</span>
          <span className="font-semibold">100.000.000 ₫</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span>Tạm tính</span>
          <span className="font-semibold">100.100.000 ₫</span>
        </div>

        <Link
          to={"/checkout"}
          className="block mt-5 text-center py-3 text-lg font-semibold uppercase rounded-lg bg-brown-light text-white border-2 border-brown-light duration-200 hover:text-brown-light hover:border-brown-light hover:bg-white"
        >
          Đặt hàng
        </Link>
      </div>
    </div>
  );
};

export default Cart;
