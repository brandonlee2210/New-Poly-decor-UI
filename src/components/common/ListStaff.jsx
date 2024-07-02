import React from "react";
import { Link } from "react-router-dom";

const ListStaff = () => {
  return (
    <div className="mt-[70px]">
      <h2 className="text-xl font-bold text-brown-strong text-center uppercase mb-5">
        Nhân viên tư vấn mua hàng
      </h2>

      <div className="grid grid-cols-6 gap-3">
        <div className="border border-[#ccc] rounded-lg">
          <div className="p-2 flex items-center gap-3">
            <img
              src="https://cafebiz.cafebizcdn.vn/162123310254002176/2022/12/19/worldcupmessi-16714134707591286548462-1671414492850-1671414494903186357457-1671421675279-16714216754791661468257.jpeg"
              alt="avata"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm">Tư vấn: Trương Thế Hiền</span>
          </div>
          <div className="grid grid-cols-2">
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc] border-r"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc]"
            >
              Zalo
            </Link>
          </div>
        </div>

        <div className="border border-[#ccc] rounded-lg">
          <div className="p-2 flex items-center gap-3">
            <img
              src="https://pbs.twimg.com/media/EGOrDHLWsAEt7Xb?format=jpg&name=large"
              alt="avata"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm">Tư vấn: Đinh Gia Bảo</span>
          </div>
          <div className="grid grid-cols-2">
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc] border-r"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc]"
            >
              Zalo
            </Link>
          </div>
        </div>

        <div className="border border-[#ccc] rounded-lg">
          <div className="p-2 flex items-center gap-3">
            <img
              src="https://pbs.twimg.com/media/FoUoGo3XsAMEPFr?format=jpg&name=4096x4096"
              alt="avata"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm">Tư vấn: Phạm Công Gia Khánh</span>
          </div>
          <div className="grid grid-cols-2">
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc] border-r"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc]"
            >
              Zalo
            </Link>
          </div>
        </div>

        <div className="border border-[#ccc] rounded-lg">
          <div className="p-2 flex items-center gap-3">
            <img
              src="https://avatarfiles.alphacoders.com/233/233306.jpg"
              alt="avata"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm">Tư vấn: Phạm Ngọc Sơn</span>
          </div>
          <div className="grid grid-cols-2">
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc] border-r"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc]"
            >
              Zalo
            </Link>
          </div>
        </div>

        <div className="border border-[#ccc] rounded-lg">
          <div className="p-2 flex items-center gap-3">
            <img
              src="https://pbs.twimg.com/media/EGOq4cWWwAAkB_C.jpg"
              alt="avata"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm">Tư vấn: Ngô Văn Nhất</span>
          </div>
          <div className="grid grid-cols-2">
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc] border-r"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc]"
            >
              Zalo
            </Link>
          </div>
        </div>

        <div className="border border-[#ccc] rounded-lg">
          <div className="p-2 flex items-center gap-3">
            <img
              src="https://i.pinimg.com/736x/73/cf/ed/73cfed8ff89b085f250cc804d8572485.jpg"
              alt="avata"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm">Tư vấn: Nguyễn Khánh Văn</span>
          </div>
          <div className="grid grid-cols-2">
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc] border-r"
            >
              Facebook
            </Link>
            <Link
              to={"/"}
              className="text-sm py-1 inline-block text-center border-t border-[#ccc]"
            >
              Zalo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStaff;
