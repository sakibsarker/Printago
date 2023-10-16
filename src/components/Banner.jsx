import React from "react";
import image from "../assets/images/01.webp";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container>
      <div
        className="mx-auto banner"
        style={{
          maxWidth: "400px",
          width: "100%",
          marginTop: "6rem",
          marginBottom: "5rem",
        }}
      >
        <img className="w-100 h-100" src={image} alt="Banner" />
      </div>
    </Container>
  );
};

export default Banner;
