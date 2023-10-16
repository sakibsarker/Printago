import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const arr = [
  "All",
  "WIR DRUCKEN",
  "WIR SCHNEIDEN",
  "WIR NÄHEN",
  "WIR VERSENDEN SCHNELL",
];

const Sidebar = ({ setRange, selected, setSelected }) => {
  const { pageNumber, keyword } = useParams();
  const { mode } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  const [searchParams] = useSearchParams();
  const query = searchParams.get("val");

  const handleSelectedChange = (value) => {
    setSelected(value);
    console.log(selected);
  };

  return (
    <Container>
      <div style={{ maxWidth: "150px", margin: "10px 0 10px auto" }}>
        <p style={{ color: mode === "dark" && "white" }}>Select Category</p>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleSelectedChange(e.target.value)}
        >
          {arr.map((item) => (
            <option selected={item === selected} value={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
    </Container>
  );
};

export default Sidebar;
