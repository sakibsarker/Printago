import React from "react";

const FAQCard = ({ number }) => {
  return (
    <div
      className="mx-auto my-4 w-100"
      style={{
        maxWidth: "40rem",
        height: "35px",
        backgroundColor: number === 0 ? "#424242" : "black",
      }}
    ></div>
  );
};

export default FAQCard;
