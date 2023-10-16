import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import Breadcrump from "../components/Breadcrump";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";

const ShopScreen = () => {
  const [selected, setSelected] = useState("All");
  const [range, setRange] = useState({ minimum: 0, maximum: 10000 });
  const { pageNumber, keyword } = useParams();
  const [products, setProducts] = useState([]);

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
    <div className="py-5">
      <Container>
        <div className="d-flex justify-content-center mb-2">
          <h1 className="shop-heading">Unsere Produktoptionen:</h1>
        </div>
        <div className="d-flex flex-column">
          <Cards />
        </div>
      </Container>
    </div>
  );
};

export default ShopScreen;
