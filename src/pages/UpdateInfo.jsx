import React, { useState, useEffect } from "react";
import InfoUserForm from "../components/common/InfoUserForm";
import axios from "axios";

const UpdateInfo = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  useEffect(() => {
    const getProvinces = async () => {
      const { data } = await axios.get(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
        {
          headers: {
            token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
          },
        }
      );
      setProvinces(data.data);
    };

    getProvinces();
  }, []);

  const handleGetDistricts = async (e) => {
    setProvince(e.target.value);
    const { data } = await axios.get(
      "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
      {
        params: { province_id: e.target.value },
        headers: {
          token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
        },
      }
    );
    setDistricts(data.data);
  };

  const handleGetWards = async (e) => {
    setDistrict(e.target.value);
    const { data } = await axios.get(
      "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward",
      {
        params: { district_id: e.target.value },
        headers: {
          token: "b10e4bc9-3789-11ef-8f55-4ee3d82283af",
        },
      }
    );
    setWards(data.data);
  };

  const handleGetWardCode = (e) => {
    setWard(e.target.value);
  };
  return (
    <div className="container mt-16">
      <form action="">
        <h2 className="text-center text-3xl font-bold text-brown-strong mb-8">
          Cập nhật tài khoản
        </h2>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
            />
            <span className="text-red-500 text-sm hidden">
              Errorrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
            </span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Mật khẩu"
              className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
            />
            <span className="text-red-500 text-sm hidden">
              Errorrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
            </span>
          </div>
        </div>
        <InfoUserForm
          handleGetDistricts={handleGetDistricts}
          provinces={provinces}
          handleGetWards={handleGetWards}
          districts={districts}
          handleGetWardCode={handleGetWardCode}
          wards={wards}
        />

        <button
          type="submit"
          className="block w-full mt-5 text-center py-3 text-lg font-semibold uppercase rounded-lg bg-brown-light text-white border-2 border-brown-light duration-200 hover:text-brown-light hover:border-brown-light hover:bg-white"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default UpdateInfo;
