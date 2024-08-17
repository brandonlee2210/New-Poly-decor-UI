import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import { Button, Result } from "antd";
const App = () => {
  const { removeAll } = useContext(CartContext);

  useEffect(() => {
    removeAll();
  }, [removeAll]);

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
