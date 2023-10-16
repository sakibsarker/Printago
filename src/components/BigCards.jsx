import React, { useEffect } from "react";
import BigCard from "./BigCard";
import image4 from "../assets/images/4.png";
import { Container } from "react-bootstrap";
import BigCardForMobile from "./BigCardForMobile";

const BigCards = ({ products }) => {
  return (
    <>
      <div>
        <div className="padd-10" style={{ padding: "5rem 2.5rem" }}>
          {products?.map((item, idx) => {
            if (idx % 2 === 0) {
              return <BigCardForMobile product={item} />;
            }
            return (
              <BigCardForMobile product={item} className="flex-row-reverse" />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BigCards;
