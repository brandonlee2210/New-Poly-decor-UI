import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { whistlists, removeWhistlist } = useContext(CartContext);

  const isWhishListEmpty = whistlists.length === 0;

  console.log(whistlists);

  return (
    <div className="container2 grid grid-cols-[3fr_1fr] gap-5 mt-16">
      {isWhishListEmpty ? (
        <div>
          <div className="text-center text-2xl font-semibold text-brown-strong">
            Danh sách yêu thích của bạn trống.
          </div>
          <Link
            to={"/search/empty"}
            className="text-white px-5 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:opacity-70"
          >
            Tiếp tục mua hàng
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="title">Danh sách yêu thích</h2>
          <table className="mt-5">
            <thead>
              <tr className="border-b border-brown-strong">
                <th className="text-brown-strong font-semibold text-lg mr-10 w-[600px]">
                  Sản phẩm
                </th>

                <th className="text-brown-strong font-semibold text-lg">
                  Mô tả
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {whistlists.map((product, index) => (
                <tr key={index} className="border-b border-brown-strong">
                  <td className="text-brown-strong p-3 align-middle flex items-center gap-3 max-w-[520px]">
                    <img
                      src={`${product.image}`}
                      alt="product image"
                      className="w-[200px]"
                    />
                    <div className="ml-20">
                      <span className="text-lg font-semibold">
                        {product.name}
                      </span>
                      <div>
                        <div className="mt-1">Màu sắc: {product.color}</div>
                        <div className="mt-1">
                          Chất liệu: {product.material}
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* <td className="text-brown-strong p-3 text-lg font-semibold">
                    {product?.price.toLocaleString()} đ
                  </td>
                  <td className="text-brown-strong p-3 text-lg font-semibold">
                    {(product?.price * product.quantity).toLocaleString()} đ
                  </td> */}
                  <td className="text-brown-strong p-3 text-xl hover:text-red-600 cursor-pointer">
                    <i
                      className="fa-regular fa-trash-can"
                      onClick={() => removeWhistlist(product._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mt-4">
            <Link
              to={"/search/empty"}
              className="text-white px-5 py-3 bg-green-500 rounded-lg text-lg font-semibold hover:opacity-70"
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
