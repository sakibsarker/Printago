import React from "react";
import SmallCard from "./SmallCard";
import image from "../assets/icons/one .svg";
import image2 from "../assets/icons/TWO.svg";
import image3 from "../assets/icons/THREE.svg";
import image4 from "../assets/icons/FOUR.svg";
import { Col, Row } from "react-bootstrap";

const SmallCards = () => {
  const arr = [
    { image: image, text: "WIR DRUCKEN", link: "WIR DRUCKEN" },
    { image: image2, text: "WIR SCHNEIDEN", link: "WIR SCHNEIDEN" },
    { image: image3, text: "WIR NÄHEN", link: "WIR NÄHEN" },
    {
      image: image4,
      text: "WIR VERSENDEN SCHNELL",
      link: "WIR VERSENDEN SCHNELL",
    },
  ];
  return (
    <Row
      className="small-cards"
      style={{ marginTop: "5rem", padding: "0 2.5rem" }}
    >
      {arr.map((item) => (
        <Col>
          <SmallCard image={item.image} title={item.text} link={item.link} />
        </Col>
      ))}
    </Row>
  );
};

export default SmallCards;
