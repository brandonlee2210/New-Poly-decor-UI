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
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");
  const id = localStorage.getItem("id");

  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/auth/${id}`);
        const user = res.data.user;

        setProvince(user.province);
        setDistrict(user.district);
        setWard(user.ward);

        setStreet(user.street);
        const namePro = provinces.find(
          (x) => x.ProvinceID == province
        )?.ProvinceName;
        const nameDis = districts.find(
          (f) => f.DistrictID == district
        )?.DistrictName;
        form.setFieldsValue({
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          email: user.email,
          province: namePro.ProvinceName || user.province,
          district: nameDis.DistrictName || user.district,
          ward: user.ward,
          street: user.street,
        });
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [form, id, provinces, districts, wards, province, district, ward]);
  console.log(province);

  // Fetch provinces
  useEffect(() => {
    const getProvinces = async () => {
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
    getProvinces();
  }, []);

  useEffect(() => {
    const getDistricts = async () => {
      if (province) {
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
      }
    };
    getDistricts();
  }, [province]);

  useEffect(() => {
    const getWards = async () => {
      if (district) {
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
      }
    };
    getWards();
  }, [district]);

  useEffect(() => {
    if (typeof props.onDataChange === "function") {
      if (province && district && ward) {
        const provinceName = provinces.find(
          (x) => x.ProvinceID == province
        )?.ProvinceName;
        const districtName = districts.find(
          (x) => x.DistrictID == district
        )?.DistrictName;
        const wardName = wards.find((x) => x.WardCode == ward)?.WardName;

        let address = `Tỉnh ${provinceName || province}, ${
          districtName || district
        }, ${wardName || ward}, ${street}`;
        console.log("address", address);

        props.onDataChange(address);
      }
    }
  }, [province, district, ward, props, provinces, districts, wards]);

  const handleGetDistricts = async (provinceId) => {
    setProvince(provinceId);
    setDistrict(""); // Reset district and ward when province changes
    setWard("");
    if (provinceId) {
      try {
        const { data } = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
          {
            params: { province_id: provinceId },
            headers: {
              token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
            },
          }
        );

        setDistricts(data.data);
      } catch (error) {
        console.error("Failed to fetch districts:", error);
      }
    }
  };

  const handleGetWards = async (districtId) => {
    setDistrict(districtId);
    setWard("");

    if (districtId) {
      try {
        const { data } = await axios.get(
          "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
          {
            params: { district_id: districtId },
            headers: {
              token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
            },
          }
        );
        setWards(data.data);
      } catch (error) {
        console.error("Failed to fetch wards:", error);
      }
    }
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
  const backgroud = props.type === "checkout" ? "bg-[#FFF]" : "bg-[#DDB671]";
  const minHeight = props.type === "checkout" ? "" : "min-h-[750px]";

  const tittle =
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
          className="bg-brown-strong text-white px-8 py-4 font-bold rounded-lg shadow-md hover:bg-brown-dark transition-colors duration-300"
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
        className={`max-w-3xl w-full ${backgroud} p-10 rounded-lg shadow-lg border border-gray-300`}
        style={{ backgroundImage: "url('/path-to-your-furniture-bg.jpg')" }}
      >
        {tittle}

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
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="province"
            rules={[
              { required: true, message: "Vui lòng chọn Tỉnh/Thành phố." },
            ]}
          >
            <Select
              onChange={handleGetDistricts}
              placeholder="Tỉnh/Thành phố"
              className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-brown-strong"
              style={{ height: "48px" }}
            >
              {provinces.map((prov) => (
                <Option key={prov.ProvinceID} value={prov.ProvinceID}>
                  {prov.ProvinceName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="district"
            rules={[{ required: true, message: "Vui lòng chọn Quận/Huyện." }]}
          >
            <Select
              onChange={handleGetWards}
              placeholder="Quận/Huyện"
              className="w-full border border-gray-300 rounded-lg  focus:ring-2 focus:ring-brown-strong"
              disabled={!province}
              style={{ height: "48px" }}
            >
              {districts.map((dist) => (
                <Option key={dist.DistrictID} value={dist.DistrictID}>
                  {dist.DistrictName}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="ward"
            rules={[{ required: true, message: "Vui lòng chọn Phường/Xã." }]}
          >
            <Select
              onChange={(value) => setWard(value)}
              placeholder="Phường/Xã"
              className="w-full border border-gray-300 rounded-lg  focus:ring-2 focus:ring-brown-strong"
              disabled={!district}
              style={{ height: "48px" }}
            >
              {wards?.map((ward) => (
                <Option key={ward.WardCode} value={ward.WardCode}>
                  {ward.WardName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="street"
            rules={[{ required: true, message: "Vui lòng nhập tên đường." }]}
          >
            <Input
              type="text"
              name="street"
              placeholder="Tên đường"
              className="outline-none border border-gray-300 rounded-lg px-4 py-3 w-full placeholder:text-gray-600 text-gray-800 focus:ring-2 focus:ring-brown-strong bg-opacity-75 shadow-sm transition-all duration-300"
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
