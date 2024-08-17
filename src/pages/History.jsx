import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { CartContext } from "../CartContext";

import { Link } from "react-router-dom";

const History = () => {
  const [orders, setOrders] = useState([]);
  const { carts, addCart, removeCart } = useContext(CartContext);

  const isOrdersEmpty = orders.length === 0;

  const totalQuantity = carts.length;
  const totalPrice = carts.reduce((total, product) => total + product.price, 0);
  const finalPrice = totalPrice;

  useEffect(() => {
    const fetchOrders = async () => {
      let response = await axios.get(
        "http://localhost:8000/api/v1/ordersByUser/669f63c0a71e0102f6be60a6"
      );
      setOrders(response.data);
    };
    fetchOrders();
  }, []);

  const orderStatus = {
    1: "Chờ xác nhận",
    2: "Đang giao hàng",
    3: "Đã giao hàng",
    4: "Đã huỷ",
  };

  const colorOrderStatus = {
    1: "#FAAD14",
    2: "#1890FF",
    3: "#2F5496",
    4: "#F5222D",
  };

  const getOrderAndColorStatus = (status) => {
    return { status: orderStatus[status], color: colorOrderStatus[status] };
  };

  return (
    <div className="container2 gap-5 mt-16">
      {isOrdersEmpty ? (
        <div>
          <div className="text-center text-2xl font-semibold text-brown-strong">
            Đơn hàng của bạn trống.
          </div>
          <Link
            to={"/"}
            className="text-white px-5 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:opacity-70"
          >
            Tiếp tục mua hàng
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="title">Lịch sử đơn hàng</h2>
          <table className="mt-5">
            <thead>
              <tr className="border-b border-brown-strong">
                <th className="text-brown-strong font-semibold text-lg">
                  Số thứ tự
                </th>
                <th className="text-brown-strong font-semibold text-lg">
                  Ngày đặt
                </th>
                <th className="text-brown-strong font-semibold text-lg">
                  Địa chỉ
                </th>
                <th className="text-brown-strong font-semibold text-lg">
                  Tổng tiền
                </th>
                <th className="text-brown-strong font-semibold text-lg">
                  Trạng thái
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((product, index) => (
                <tr key={index} className="border-b border-brown-strong">
                  <td className="text-brown-strong p-3 align-middle">
                    {index + 1}
                  </td>
                  <td className="text-brown-strong p-3 align-middle flex items-center gap-3 max-w-[520px]">
                    {/* <img
                      src={`/src/assets/images/sale-product-1.jpg`}
                      alt="product image"
                      className="w-[200px]"
                    /> */}
                    <div>
                      <span className="text-lg font-semibold">
                        {/* to ISO String */}
                        {
                          new Date(product.orderDate).toLocaleDateString(
                            "vi-VN",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )
                          // new Date(product.orderDate).toISOString().split('T')[0]
                        }
                      </span>
                    </div>
                  </td>
                  <td className="text-brown-strong p-3 align-middle">
                    {product.address}
                  </td>
                  <td className="text-brown-strong p-3 text-lg font-semibold">
                    {product.total.toLocaleString()} đ
                  </td>
                  {/* Custom button status */}
                  <td className="text-brown-strong p-3 text-lg font-semibold">
                    <div
                      className="text-white w-[160px] items-center justify-center px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: getOrderAndColorStatus(product.status)
                          .color,
                      }}
                    >
                      {getOrderAndColorStatus(product.status).status}
                    </div>
                  </td>
                  <td className="text-brown-strong p-3 text-xl hover:text-red-600 cursor-pointer">
                    <Link
                      to={`/history/${product._id}`}
                      className="text-red px-5 py-2 rounded-lg text-lg font-semibold hover:opacity-70"
                      onClick={() => {
                        // Handle click to view order details
                      }}
                    >
                      Xem chi tiết
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
