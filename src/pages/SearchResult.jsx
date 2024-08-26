import React, { useEffect, useState } from "react";
import ProductItem from "../components/common/ProductItem";
import { Pagination, Slider, Select, Button } from "antd";
import { formatCurrency } from "../utils";
import { getProductsFiltered } from "../api/api";
import { useParams } from "react-router-dom";
import axios from "axios";

const { Option } = Select;

const SearchResult = () => {
  const { keyword } = useParams();

  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [variants, setVariants] = useState([]);
  const [current, setCurrent] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState({
    color: null,
    material: null,
    price: [0, 100000000],
    limit: 4,
    page: 1,
  });

  const onChangePage = (page) => {
    setCurrent(page);
    const updatedFilters = { ...filters, page };
    setFilters(updatedFilters);

    const keywordFilter = keyword === "empty" ? "" : keyword;
    getProductsFiltered({
      ...updatedFilters,
      keyword: keywordFilter,
    }).then((res) => {
      setProducts(res.data);
      setTotal(res.total);
    });
  };

  useEffect(() => {
    const getAllVariantsColor = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1/variantProducts/colors/getall`
      );
      setColors(response.data);
    };

    const getAllVariantsMaterial = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1/variantProducts/materials/getall`
      );
      setMaterials(response.data);
    };

    const getAllVariant = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1//variants/getall/productnopagination`
      );
      setVariants(response.data);
    };

    getAllVariantsColor();
    getAllVariantsMaterial();
    getAllVariant();
  }, []);

  useEffect(() => {
    if (variants.length > 0) {
      let max = 0;
      variants.forEach((product) => {
        product.variants.forEach((variant) => {
          if (+variant.price > max) {
            max = +variant.price;
          }
        });
      });
      setMaxPrice(max);
    }
  }, [variants]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      price: [0, maxPrice],
    }));
  }, [maxPrice]);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleFilterSubmit = () => {
    let keywordFilter = keyword === "empty" ? "" : keyword;
    getProductsFiltered({ ...filters, keyword: keywordFilter }).then((res) => {
      setProducts(res.data);
      setTotal(res.total);
    });
  };

  useEffect(() => {
    let keywordFilter = keyword === "empty" ? "" : keyword;
    getProductsFiltered({ ...filters, keyword: keywordFilter }).then((res) => {
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
              {colors.length > 0 &&
                colors.map((color, index) => (
                  <Option key={index} value={color.variantProductName}>
                    {color.variantProductName}
                  </Option>
                ))}
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
              {materials.length > 0 &&
                materials.map((material, index) => (
                  <Option key={index} value={material.variantProductName}>
                    {material.variantProductName}
                  </Option>
                ))}
            </Select>
          </div>
          <div className="mb-4">
            <label className="text-brown-strong">Giá</label>
            <Slider
              range
              min={0}
              max={maxPrice}
              value={filters.price}
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
          {products.length === 0 && (
            <div className="text-5xl text-brown-strong font-bold text-center">
              Không có sản phẩm nào
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            {products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
          {products.length > 0 && (
            <div className="flex items-center justify-center mt-5">
              <Pagination
                current={current}
                onChange={onChangePage}
                pageSize={filters.limit}
                total={total}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
