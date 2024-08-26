import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../CartContext";
import { LoginContext } from "../LoginContext";
import { Link } from "react-router-dom";
import { Modal } from "antd";

const History = () => {
  const [orders, setOrders] = useState([]);
  const { carts, addCart, removeCart } = useContext(CartContext);
  const { userInfo } = useContext(LoginContext);

  const isOrdersEmpty = orders.length === 0;

  const totalQuantity = carts.length;
  const totalPrice = carts.reduce((total, product) => total + product.price, 0);
  const finalPrice = totalPrice;

  useEffect(() => {
    const fetchOrders = async () => {
      let response = await axios.get(
        "http://localhost:8000/api/v1/ordersByUser/" + userInfo._id
      );
      setOrders(response.data);
      console.log("res", response.data);
      
    };
    fetchOrders();
  }, [userInfo._id]);

  const orderStatus = {
    1: "Chờ xác nhận",
    2: "Đang giao hàng",
    3: "Đã giao hàng",
    4: "Đã huỷ",
    5: "Đã nhận hàng",
  };

  const colorOrderStatus = {
    1: "#FAAD14",
    2: "#1890FF",
    3: "#2F5496",
    4: "#F5222D",
    5: "#28a745"
  };

  const getOrderAndColorStatus = (status) => {
    console.log(status);
    
    return { status: orderStatus[status], color: colorOrderStatus[status] };
  };

  const handleChangeStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:8000/api/v1/orders/${orderId}`, {
        status: newStatus,
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Failed to update order status", error);
    }
  };

  return (
    <div className="container2 gap-5 mt-16">
      {isOrdersEmpty ? (
        <div>
          <div className="text-center text-2xl font-semibold text-brown-strong">
            Đơn hàng của bạn trống.
          </div>
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
                <th className="text-brown-strong font-semibold text-lg ">
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
                    <div>
                      <span className="text-lg font-semibold">
                        {new Date(product.orderDate).toLocaleDateString(
                          "vi-VN",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </td>
                  <td className={`text-brown-strong p-3 align-middle ${product.status == 2 ? "w-[400px]" : ""}`}>
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
                  {product.status == 2 && (
                    <td className="text-brown-strong p-3 text-xl hover:text-red-600 cursor-pointer">
                      <div
                        className="text-red px-5 py-2 rounded-lg text-lg font-semibold hover:opacity-70"
                        onClick={() => {
                          // Handle click to view order details
                          handleChangeStatus(product._id, 5);
                        }}
                      >
                        Đã nhận
                      </div>
                    </td>
                  )}
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
