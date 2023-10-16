import React from "react";
import FAQCard from "./FAQCard";
import { Container } from "react-bootstrap";
import FAQTable from "./FAQTable";

const FAQ = () => {
  return (
    <div className="faq-area" style={{ margin: "1.5rem 0" }}>
      <Container>
        <FAQCard number={0} />
        <FAQCard number={1} />
        <FAQCard number={2} />
      </Container>
      <FAQTable />
    </div>
  );
};

export default FAQ;
