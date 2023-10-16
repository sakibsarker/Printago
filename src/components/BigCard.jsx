import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const BigCard = ({ className, product }) => {
  const { mode } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const addToCartHandler = async (products, qty) => {
    dispatch(addToCart({ ...products, qty }));
  };
  return (
    <div
      className="w-75"
      style={{
        justifySelf: "center",
        textAlign: "center",
      }}
    >
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
        <div className={`${className} align-center-1000 w-100`}>
          <div
            style={{
              borderRadius: "5%",
              backgroundColor: "#C0CAD5",
              overflow: "hidden",
              border: "1px solid black",
            }}
          >
            <div
              className="big-card w-100"
              style={{ overflow: "hidden", height: "16vw" }}
            >
              <img
                className="h-100 w-100"
                src={product.image}
                alt="CardImage"
              />
            </div>
            <div className="pb-3 m-0" style={{ flexBasis: "66.66%" }}>
              <h3
                className="m-0 p-0 mt-2"
                style={{ fontSize: "24px", fontWeight: 600 }}
              >
                {product.name}
              </h3>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              <strong>${product.price}</strong>
            </div>
          </div>
        </div>
      </Link>
      {product.countInStock > 0 ? (
        <Button
          className="px-4 py-1 text-decoration-none"
          to="/"
          style={{
            marginTop: "16px",
            display: "inline-block",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            border: 0,
            borderRadius: "20px",
            color: "white",
            backgroundColor: mode === "dark" ? "#3B3C1B" : "#708B3B",
          }}
          onClick={() => {
            addToCartHandler(product, product.qty ? product.qty + 1 : 1);
          }}
        >
          Add to cart
        </Button>
      ) : (
        <Button
          className="px-4 py-1 text-decoration-none"
          to="/"
          style={{
            marginTop: "16px",
            display: "inline-block",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            border: 0,
            borderRadius: "20px",
            color: "white",
            backgroundColor: mode === "dark" ? "#3B3C1B" : "#708B3B",
          }}
          disabled
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default BigCard;
