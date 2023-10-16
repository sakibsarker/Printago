import React from "react";
import { Col, Row } from "react-bootstrap";

const FAQTable = () => {
  return (
    <div
      className="px-2"
      style={{ textAlign: "center", marginBottom: "100px", marginTop: "80px" }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "white",
          fontWeight: 400,
        }}
      >
        Vorteile
      </p>
      <Row style={{ margin: "auto" }}>
        <Col
          className="faq-table-text"
          style={{
            padding: "4px 20px",
            border: "1px solid white",
            margin: "5px",
            fontSize: "20px",
          }}
        >
          Besonderes Shoppingerlebnis mit dem 3D Konfigurator
        </Col>
        <Col
          className="faq-table-text"
          style={{
            padding: "4px 20px",
            border: "1px solid white",
            margin: "5px",
            fontSize: "20px",
          }}
        >
          Schnelle Lieferung: von Produktion bis zur Lieferung 5-6 Tage
        </Col>
      </Row>
      <Row style={{ margin: "auto" }}>
        <Col
          className="faq-table-text"
          style={{
            padding: "4px 20px",
            border: "1px solid white",
            margin: "5px",
            fontSize: "20px",
          }}
        >
          Individuelles und maßgeschneidertes Endprodukt
        </Col>
        <Col
          className="faq-table-text"
          style={{
            padding: "4px 20px",
            border: "1px solid white",
            margin: "5px",
            fontSize: "20px",
          }}
        >
          Hautverträgliche Druckfarben - für Babys geeignet
        </Col>
      </Row>
      <Row style={{ margin: "auto" }}>
        <Col
          className="faq-table-text"
          style={{
            padding: "4px 20px",
            border: "1px solid white",
            margin: "5px",
            fontSize: "20px",
          }}
        >
          Nachhaltig - 98% weniger Wasserverbrauch bei der Produktion
        </Col>
        <Col
          className="faq-table-text"
          style={{
            padding: "4px 20px",
            border: "1px solid white",
            margin: "5px",
            fontSize: "20px",
          }}
        >
          Kein fast Fashion - keine Überproduktion
        </Col>
      </Row>
    </div>
  );
};

export default FAQTable;
