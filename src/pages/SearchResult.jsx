import React, { useEffect, useState } from "react";
import ProductItem from "../components/common/ProductItem";
import axios from "axios";
import { Pagination, Slider, Select, Button } from "antd";
import { formatCurrency } from "../utils";
import { getProductsFiltered } from "../api/api";
import { useParams } from "react-router-dom";

const { Option } = Select;

const SearchResult = () => {
  const { keyword } = useParams();
  const [current, setCurrent] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState({
    color: null,
    material: null,
    price: [0, 10000000],
    limit: 4,
    page: 1,
  });

  const onChangePage = (page) => {
    setCurrent(page);
    setFilters((prev) => ({ ...prev, page }));
    let keywordFilter = keyword == "empty" ? "" : keyword;
    getProductsFiltered({
      ...filters,
      keyword: keywordFilter,
    }).then((res) => {
      setProducts(res.data);
    });
  };

  const handleFilterChange = (field, value) => {
    console.log(field, value);
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleFilterSubmit = () => {
    let keywordFilter = keyword == "empty" ? "" : keyword;
    getProductsFiltered({ ...filters, keyword: keywordFilter }).then((res) => {
      console.log(res);
      setProducts(res.data);
      setTotal(res.total);
    });
  };

  useEffect(() => {
    let keywordFilter = keyword == "empty" ? "" : keyword;
    getProductsFiltered({ ...filters, keyword: keywordFilter }).then((res) => {
      console.log(res);
      setProducts(res.data);
      setTotal(res.total);
    });
  }, [keyword]);

  return (
    <div className="container2 mt-16">
      <div className="grid grid-cols-[1fr_3fr] gap-10">
        <div className="">
          <div className="mb-4">
            <label className="text-brown-strong">Màu sắc</label>
            <Select
              className="w-full"
              placeholder="Chọn màu sắc"
              onChange={(value) => handleFilterChange("color", value)}
              allowClear={true}
            >
              <Option value="color1">Nâu lạnh</Option>
              <Option value="color2">Nâu nhạt</Option>
              <Option value="color3">Xanh nhạt</Option>
              <Option value="color4">Xanh ô liu</Option>
              <Option value="color5">Trắng sứ</Option>
              <Option value="color6">Trắng ngà</Option>
              {/* Add more options as needed */}
            </Select>
          </div>
          <div className="mb-4">
            <label className="text-brown-strong">Chất liệu</label>
            <Select
              className="w-full"
              placeholder="Chọn chất liệu"
              onChange={(value) => handleFilterChange("material", value)}
              allowClear={true}
            >
              <Option value="material1">Gỗ sồi</Option>
              <Option value="material2">Gỗ thông</Option>
              <Option value="material3">Da bò Úc</Option>
              <Option value="material4">Da bò Mỹ</Option>
              <Option value="material5">Kính thường</Option>
              <Option value="material6">Kính cường lực</Option>
              {/* Add more options as needed */}
            </Select>
          </div>
          <div className="mb-4">
            <label className="text-brown-strong">Giá</label>
            <Slider
              range
              min={0}
              max={10000000}
              defaultValue={filters.price}
              onChange={(value) => handleFilterChange("price", value)}
              tipFormatter={null}
            />
            <div className="flex justify-between text-brown-strong">
              <span>{formatCurrency(filters.price[0])}</span>
              <span>{formatCurrency(filters.price[1])}</span>
            </div>
          </div>
          <Button type="primary" onClick={handleFilterSubmit}>
            Lọc sản phẩm
          </Button>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-5">
            {products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-5">
            <Pagination
              current={current}
              onChange={onChangePage}
              pageSize={filters.limit}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
