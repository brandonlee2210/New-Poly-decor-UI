import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import { useParams } from "react-router-dom";
import { Button, Result } from "antd";
const App = () => {
  const { removeAll } = useContext(CartContext);

  const { src } = useParams();

  useEffect(() => {
    removeAll();
  }, []);

  return (
    <Result
      status="success"
      title="Bạn đã đặt hàng thành công, "
      subTitle="Mã số đơn hàng: 2017182818828182881. Thông tin đơn hàng đã được gửi vào email của bạn. Vui lòng kiểm tra lại"
      extra={[
        <Button type="primary" key="console">
          Tiếp tục mua hàng
        </Button>,
      ]}
    />
  );
};
export default App;
