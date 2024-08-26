import { Form, Input, Select, Button, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const { Option } = Select;

const InfoUserForm = (props) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");

  const id = localStorage.getItem("id");

  const [form] = Form.useForm();

  // Fetch provinces once at the start
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const { data } = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
          {
            headers: {
              token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
            },
          }
        );
        setProvinces(data.data);
      } catch (error) {
        console.error("Failed to fetch provinces:", error);
      }
    };
    fetchProvinces();
  }, []);

  // Fetch user's data and set form fields
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/auth/${id}`);
        const user = res.data.user;

        setProvince(user.province);
        setDistrict(user.district);
        setWard(user.ward);
        setStreet(user.street);

        form.setFieldsValue({
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          email: user.email,
          province: user.province,
          district: user.district,
          ward: user.ward,
          street: user.street,
        });
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };
    fetchUserData();
  }, [form, id]);

  // Fetch districts when the province is set (including initial user province)
  useEffect(() => {
    if (province) {
      const fetchDistricts = async () => {
        try {
          const { data } = await axios.get(
            "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
            {
              params: { province_id: province },
              headers: {
                token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
              },
            }
          );

          setDistricts(data.data);
        } catch (error) {
          console.error("Failed to fetch districts:", error);
        }
      };
      fetchDistricts();
    }
  }, [province]);

  // Fetch wards when the district is set (including initial user district)
  useEffect(() => {
    if (district) {
      const fetchWards = async () => {
        try {
          const { data } = await axios.get(
            "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
            {
              params: { district_id: district },
              headers: {
                token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
              },
            }
          );
          setWards(data.data);
        } catch (error) {
          console.error("Failed to fetch wards:", error);
        }
      };
      fetchWards();
    }
  }, [district]);

  useEffect(() => {
    if (typeof props.onDataChange === "function") {
      if (province && district && ward) {
        let address =
          `Tỉnh ${
            provinces.find((x) => x.ProvinceID == province)?.ProvinceName
          }, ${
            districts.find((x) => x.DistrictID == district)?.DistrictName
          }, ${wards.find((x) => x.WardCode == ward)?.WardName},${street}` ||
          `Tỉnh ${province}, ${district}, ${ward}, ${street}`;
        console.log("address", address);

        props.onDataChange(address);
      }
    }
  }, [province, district, ward, props, provinces, districts, wards]);
  const handleGetDistricts = (provinceId) => {
    setProvince(provinceId);
    setDistrict(""); // Reset district and ward when province changes
    setWard("");
  };

  const handleGetWards = (districtId) => {
    setDistrict(districtId);
    setWard("");
  };

  const handleSubmit = async (values) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/auth/${id}`,
        values
      );
      console.log("Updated user:", res.data);

      if (res.status === 200) {
        message.success("Cập nhật thông tin thành công");
        if (typeof props.onDataChange === "function") {
          props.onDataChange(values);
        }
      }
    } catch (error) {
      console.log("Failed to submit the form:", error);
      message.error("Cập nhật thông tin thất bại");
    }
  };

  const display = props.type === "checkout" ? "none" : "flex";
  const background = props.type === "checkout" ? "bg-[#FFF]" : "bg-[#DDB671]";
  const minHeight = props.type === "checkout" ? "" : "min-h-[750px]";
  const namePro = provinces.find((prov) => prov.ProvinceID == province)?.ProvinceID
console.log(namePro);

  const title =
    props.type === "checkout" ? (
      ""
    ) : (
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 my-4 md:text-2xl ">
        Cập nhật thông tin người dùng
      </h1>
    );

  const btnConfirm =
    props.type === "checkout" ? (
      ""
    ) : (
      <div className="mt-6 text-center">
        <Button
          type="primary"
          htmlType="submit"
          className="bg-brown-strong text-white px-8 py-4 font-bold rounded-lg shadow-md  transition-colors duration-300"
        >
          Xác nhận
        </Button>
      </div>
    );

  return (
    <div className={`${minHeight} ${display} items-center justify-center`}>
      <Form
        form={form}
        onFinish={handleSubmit}
        className={`max-w-3xl w-full ${background} p-10 rounded-lg shadow-lg border border-gray-300`}
        style={{ backgroundImage: "url('/path-to-your-furniture-bg.jpg')" }}
      >
        {title}

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Vui lòng nhập họ tên." }]}
          >
            <Input
              type="text"
              name="fullName"
              placeholder="Họ tên"
              className="outline-none border border-gray-300 rounded-lg px-4 py-3 w-full placeholder:text-gray-600 text-gray-800 focus:ring-2 focus:ring-brown-strong bg-opacity-75 shadow-sm transition-all duration-300"
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại." },
              { pattern: /^\d{10}$/, message: "Số điện thoại không hợp lệ." },
            ]}
          >
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Số điện thoại"
              className="outline-none border border-gray-300 rounded-lg px-4 py-3 w-full placeholder:text-gray-600 text-gray-800 focus:ring-2 focus:ring-brown-strong bg-opacity-75 shadow-sm transition-all duration-300"
            />
          </Form.Item>

          <Form.Item name="province">
            <Select
              placeholder="Tỉnh/Thành phố"
              value={
                provinces.find((prov) => prov.ProvinceID == province)
                  ?.ProvinceID
              }
              onChange={handleGetDistricts}
              className="w-full"
              style={{height: "48px"}}
            >
              {provinces.map((prov) => (
                <Option key={prov.ProvinceID} value={prov.ProvinceID}>
                  {prov.ProvinceName}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="district">
            <Select
              placeholder="Quận/Huyện"
              value={district}
              onChange={handleGetWards}
              style={{height: "48px"}}
              className="w-full"
            >
              {districts.map((dist) => (
                <Option key={dist?.DistrictID} value={dist.DistrictID}>
                  {dist.DistrictName}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="ward">
            <Select
              placeholder="Phường/Xã"
              value={ward}
              onChange={(value) => setWard(value)}
              className="w-full"
              style={{height: "48px"}}
            >
              {wards.map((wardObj) => (
                <Option key={wardObj.WardCode} value={wardObj.WardCode}>
                  {wardObj.WardName}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="street"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ." }]}
          >
            <Input
              type="text"
              name="street"
              placeholder="Đường/Phố"
              className="outline-none border border-gray-300 rounded-lg px-4 py-3 w-full placeholder:text-gray-600 text-gray-800 focus:ring-2 focus:ring-brown-strong bg-opacity-75 shadow-sm transition-all duration-300"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-1">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email." },
              { type: "email", message: "Email không hợp lệ." },
            ]}
          >
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="outline-none border border-gray-300 rounded-lg px-4 py-3 w-full placeholder:text-gray-600 text-gray-800 focus:ring-2 focus:ring-brown-strong bg-opacity-75 shadow-sm transition-all duration-300"
            />
          </Form.Item>
        </div>
        {btnConfirm}
      </Form>
    </div>
  );
};

export default InfoUserForm;
