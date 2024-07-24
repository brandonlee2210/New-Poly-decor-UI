// RegisterForm.js
import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const RegisterForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission logic here
  };

  return (
    <Form
      name="register-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Row gutter={8}>
          <Col span={12}>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Col>
          <Col span={12}>
            <Button block>Cancel</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
