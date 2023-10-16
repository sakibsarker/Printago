import React, { useEffect, useState } from "react";
import BigCards from "../components/BigCards";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Container } from "react-bootstrap";

const CategoryScreen = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("val");
  const [selected, setSelected] = useState(query);
  const [products, setProducts] = useState([]);
  const { mode } = useSelector((state) => state.auth);
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  const handleFilters = () => {
    if (selected === "All") {
      setProducts(data?.product);
    } else {
      const data2 = data?.product.filter((item) => item.category === selected);
      setProducts(data2);
    }
  };

  useEffect(() => {
    handleFilters();
  }, [selected, data]);

  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: mode === "dark" ? "#1B170F" : "#ccc" }}
    >
      <Sidebar selected={selected} setSelected={setSelected} />
      {data && <BigCards products={products} />}
    </div>
  );
};

export default CategoryScreen;
