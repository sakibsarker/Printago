import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { mode } = useSelector((state) => state.auth);
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <p style={{ color: mode === "dark" && "white" }}>Sign In</p>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled style={{ color: mode === "dark" && "grey" }}>
            Sign In
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <p style={{ color: mode === "dark" && "white" }}>Shipping</p>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled style={{ color: mode === "dark" && "grey" }}>
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link style={{ color: mode === "dark" && "white" }}>
              <p style={{ color: mode === "dark" && "white" }}>Payment</p>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled style={{ color: mode === "dark" && "grey" }}>
            Payment
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <p style={{ color: mode === "dark" && "white" }}>Place Order</p>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled style={{ color: mode === "dark" && "grey" }}>
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
