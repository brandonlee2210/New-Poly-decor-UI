import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";

// import use param from react dom
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import categoryImage1 from "../assets/images/category-1.1.jpg";
import rightProductDetail from "../assets/images/right-product-detail.jpg";
import ProductItem from "../components/common/ProductItem";
// import InDecreaseQuantity from "../components/common/InDecreaseQuantity";
import { getProductById } from "../api/api";
import { Button, message } from "antd";

const colors = [
  {
    name: "Màu đen",
    id: "bg-brown-strong",
  },
  {
    name: "Màu sáng",
    id: "bg-brown-light",
  },
  {
    name: "Màu vàng",
    id: "bg-yellow-main",
  },
  {
    name: "Màu trắng",
    id: "bg-white",
  },
];

const materials = ["Gỗ sồi", "Gỗ lim", "Gỗ hoàng đàn", "Gỗ hương", "Gỗ óc chó"];

const ProductDetail = () => {
  const { carts, addCart, removeCart } = useContext(CartContext);

  console.log("carts", carts);

  const productsCate = [
    {
      id: 1,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 2,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 3,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 4,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 5,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 6,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 7,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 8,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 9,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
    {
      id: 10,
      image: categoryImage1,
      name: "Bộ Sofa Tân Cổ Điển SF71-123",
      price: "173.000.000 ₫",
      initPrice: "193.000.000 ₫",
    },
  ];
  const [product, setProduct] = useState({});
  const [activeColor, setActiveColor] = useState("bg-brown-strong");

  // get params
  const { id } = useParams();

  const [size, setSize] = useState("M");
  const [material, setMaterial] = useState(materials[0]);
  const [color, setColor] = useState(colors[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const addToCart = () => {
    // TODO: add to cart logic
    let cartData = {
      ...product,
      material,
      color: colors.find((c) => c.id === activeColor).name,
    };
    addCart(cartData);
    message.success(`Thêm thành công ${product.name} vào giỏ hàng`);
  };

  useEffect(() => {
    getProductById(id).then((res) => {
      setProduct(res);
    });
  }, [id]);

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="container mt-[80px]">
      <div className="flex justify-between gap-[30px]">
        <div>
          <img
            src={`/src/assets/images/${product.image}`}
            alt="product image"
          />

          <h2 className="text-3xl font-bold text-brown-strong mt-5">
            {product.name}
          </h2>

          <div className="mt-[25px]">
            <span className="text-brown-light mr-1">Danh mục:</span>
            {product.categoryName}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-regular fa-star  text-yellow-500"></i>
            </div>
            |<div className="text-gray-500">1000 lượt mua</div>
          </div>

          <div className="mt-3 text-lg text-brown-light line-through font-semibold">
            Giá gốc: {product.price + 1000000}
          </div>
          <div className="mt-3 text-3xl font-bold text-red-600">
            Giá: {product.price}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-lg font-semibold text-brown-strong">
              Màu sắc:{" "}
            </span>
            <div className="flex items-center gap-5">
              {colors.map((color) => (
                <span
                  key={color.id}
                  className={`w-7 h-7 duration-300 cursor-pointer hover:scale-125 shadow-[0_0_6px_rgba(0,0,0,0.5)] ${
                    color.id
                  } ${activeColor === color.id ? "scale-125" : ""}`}
                  onClick={() => handleColorClick(color.id)}
                ></span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="material"
              className="text-lg font-semibold text-brown-strong"
            >
              Chất liệu:{" "}
            </label>
            <select
              name=""
              id="material"
              className="border border-brown-strong outline-none py-1 px-2 rounded-lg"
            >
              {materials.map((material, index) => (
                <option key={index} value={material}>
                  {material}
                </option>
              ))}
            </select>
          </div>
          {/* 
          <InDecreaseQuantity
            quantity={quantity}
            increment={increment}
            decrement={decrement}
          /> */}

          {/* <div className="mt-5 text-lg font-semibold text-gray-500">
            <span className=" text-brown-strong mr-2">Số lượng: </span>{" "}
            {product.stock}
          </div> */}

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-brown-light text-brown-strong flex items-center justify-center gap-1 py-4 rounded-lg text-xl font-bold duration-200 border-2 hover:bg-white hover:border-brown-strong hover:border-2">
              <i className="fa-regular fa-credit-card"></i> Mua ngay
            </div>

            <div
              onClick={addToCart}
              className="bg-brown-light text-brown-strong flex items-center justify-center gap-1 py-4 rounded-lg text-xl font-bold duration-200 border-2 hover:bg-white hover:border-brown-strong hover:border-2"
            >
              <i className="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
            </div>
          </div>
        </div>
        <div>
          <img src={rightProductDetail} alt="right image" />

          <h3 className="text-xl text-brown-strong font-bold mt-6 before:border-l-4 before:border-brown-strong before:mr-4">
            Chính sách bảo hành
          </h3>

          <div className="mt-6 border border-brown-light rounded-lg py-5 px-3">
            <div className="before:w-5 before:h-5 before:rounded-full before:bg-brown-light before:inline-block before:mr-2 flex items-center">
              Bảo hành 2 năm
            </div>

            <div className="mt-6 before:w-5 before:h-5 before:rounded-full before:bg-brown-light before:inline-block before:mr-2 flex items-center">
              Bảo trì trọn đời
            </div>

            <div className="mt-6 before:w-5 before:h-5 before:rounded-full before:bg-brown-light before:inline-block before:mr-2 flex items-center">
              Giao hàng miễn phí
            </div>

            <div className="mt-6 before:w-5 before:h-5 before:rounded-full before:bg-brown-light before:inline-block before:mr-2 flex items-center">
              Lắp đặt miễn phí
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="border border-[#eaeaea] p-3">Tên sản phẩm</td>
              <td className="border border-[#eaeaea] p-3">{product.name}</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-[#eaeaea] p-3">Chất liệu</td>
              <td className="border border-[#eaeaea] p-3">
                {product.description}
              </td>
            </tr>
            <tr>
              <td className="border border-[#eaeaea] p-3">Kích thước</td>
              <td className="border border-[#eaeaea] p-3">
                Băng 1 : L1200*W1000*H1340MM, Băng 2 : L1880*W1000*H1370mm, Băng
                3: L2430*W1000*H1380mm
              </td>
            </tr>
            {/* <tr className="bg-[#f9f9f9]">
              <td className="border border-[#eaeaea] p-3">Màu sắc</td>
              <td className="border border-[#eaeaea] p-3">Nâu cà phê</td>
            </tr>
            <tr>
              <td className="border border-[#eaeaea] p-3">Phong cách</td>
              <td className="border border-[#eaeaea] p-3">
                Neoclassical French
              </td>
            </tr> */}
            <tr className="bg-[#f9f9f9]">
              <td className="border border-[#eaeaea] p-3">Xuất xứ</td>
              <td className="border border-[#eaeaea] p-3">Nhập khẩu.</td>
            </tr>
            <tr>
              <td className="border border-[#eaeaea] p-3">Bảo hành</td>
              <td className="border border-[#eaeaea] p-3">2 năm</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-[#eaeaea] p-3">Bảo trì</td>
              <td className="border border-[#eaeaea] p-3">Trọn đời sản phẩm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-[60px]">
        <h2 className="text-3xl font-bold text-brown-strong uppercase">
          Sản phẩm cùng loại
        </h2>
        <div className="mt-5">
          <Swiper
            slidesPerView={4}
            loop={true}
            spaceBetween={16}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Autoplay]}
          >
            {productsCate.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
