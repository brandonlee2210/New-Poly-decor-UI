import React from "react";

const InfoUserForm = (props) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            placeholder="Họ tên"
            className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
          />
          <span className="text-red-500 text-sm hidden">
            Errorrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
          />
          <span className="text-red-500 text-sm hidden">
            Errorrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <select
            name="province"
            onChange={props.handleGetDistricts}
            className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
          >
            <option value="">Tỉnh/Thành phố</option>
            {props.provinces.map((province, index) => (
              <option key={index} value={province.ProvinceID}>
                {province.ProvinceName}
              </option>
            ))}
          </select>
          <span className="text-red-500 text-sm hidden">
            Errorrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
          </span>
        </div>
        <div>
          <select
            name="district"
            onChange={props.handleGetWards}
            className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
          >
            <option value="">Quận/Huyện</option>
            {props.districts.map((district, index) => (
              <option key={index} value={district.DistrictID}>
                {district.DistrictName}
              </option>
            ))}
          </select>
          <span className="text-red-500 text-sm hidden">
            Errorrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
          </span>
        </div>
      </div>

      <div className="mt-5">
        <select
          onChange={props.handleGetWardCode}
          className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
        >
          <option value="">Phường xã</option>
          {props.wards.map((ward, index) => (
            <option key={index} value={ward.WardCode}>
              {ward.WardName}
            </option>
          ))}
        </select>
        <span className="text-red-500 text-sm hidden">
          Errorrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
        </span>
      </div>

      <div className="mt-5">
        <input
          type="text"
          placeholder="Địa chỉ"
          className="outline-none border border-brown-light rounded-lg px-5 py-3 w-full placeholder:text-brown-strong"
        />
        <span className="text-red-500 text-sm hidden">
          Errorrrrrrrrr rrrrrrrrrrrrrrrrrrrrrrr
        </span>
      </div>
    </>
  );
};

export default InfoUserForm;
