import React from "react";

import { Button, Result } from "antd";
const App = () => (
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
export default App;
