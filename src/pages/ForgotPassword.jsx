import React from "react";
import { Button, Form, Input, Typography, notification } from "antd";
import "antd/dist/reset.css"; // Đảm bảo import CSS của Ant Design
import axios from "axios";

const { Title } = Typography;

const ForgotPassword = () => {
  const id = localStorage.getItem("id");
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/auth/forgot-password/${id}`,
        values
      );
      if (res.status === 200) {
        notification.success({
          message: "Đã gửi email",
          description: "Mật khẩu tạm thời đã được gửi đến email của bạn.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Gửi email thất bại",
        description: "Có lỗi xảy ra khi gửi email.",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center py-20 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Title level={2} className="text-center mb-4">
          Quên Mật Khẩu
        </Title>
        <Form
          name="forgot_password"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Địa chỉ Email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập địa chỉ email của bạn!",
              },
            ]}
          >
            <Input type="email" placeholder="Nhập địa chỉ email của bạn" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              style={{
                backgroundColor: "rgb(221,182,113)", // Hoặc màu bạn muốn
                color: " rgb(50,20,5) ", // Hoặc màu bạn muốn
                boxShadow: "none",
              }}
            >
              Gửi email
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
