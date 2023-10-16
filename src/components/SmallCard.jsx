import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SmallCard = ({ image, title, link }) => {
  const { mode } = useSelector((state) => state.auth);
  return (
    <Link to={`category?val=${link}`} style={{ textDecoration: "none" }}>
      <div
        className="d-flex justify-content-center align-items-center flex-column small-card"
        style={{ height: "4rem", margin: "2.5rem 0" }}
      >
        <img className="h-100" src={image} alt="CardImage" />
        <h2
          className="mt-4 small-card-title"
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.33em",
            fontWeight: 700,
            textAlign: "center",
            color: mode === "dark" ? "white" : "black",
          }}
        >
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default SmallCard;
