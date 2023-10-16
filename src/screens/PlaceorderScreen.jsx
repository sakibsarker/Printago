import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Container,
} from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useCreateOrderMutation } from "../slices/orderApiSlice";
import { clearCartItems } from "../slices/cartSlice";

const PlaceorderScreen = () => {
  const { mode } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.shippingAddress.address, cart.paymentMethod, navigate]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{
                backgroundColor: mode === "dark" ? "black" : "#eee",
                color: mode === "dark" && "white",
              }}
            >
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: mode === "dark" ? "black" : "#eee",
                color: mode === "dark" && "white",
              }}
            >
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: mode === "dark" ? "black" : "#eee",
                color: mode === "dark" && "white",
              }}
            >
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is emty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      style={{
                        backgroundColor: mode === "dark" ? "black" : "#eee",
                        color: mode === "dark" && "white",
                      }}
                    >
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link
                            style={{ color: mode === "dark" && "white" }}
                            to={`/product/${item._id}`}
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={"4"}>
                          {item.qty} x TK {item.price} ={" "}
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card style={{ border: "1px solid grey" }}>
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{
                  backgroundColor: mode === "dark" ? "black" : "#eee",
                  color: mode === "dark" && "white",
                }}
              >
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: mode === "dark" ? "black" : "#eee",
                  color: mode === "dark" && "white",
                }}
              >
                <Row>
                  <Col>Items:</Col>
                  <Col>TK {cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: mode === "dark" ? "black" : "#eee",
                  color: mode === "dark" && "white",
                }}
              >
                <Row>
                  <Col>Shipping:</Col>
                  <Col>TK {cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: mode === "dark" ? "black" : "#eee",
                  color: mode === "dark" && "white",
                }}
              >
                <Row>
                  <Col>Tax:</Col>
                  <Col>TK {cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: mode === "dark" ? "black" : "#eee",
                  color: mode === "dark" && "white",
                }}
              >
                <Row>
                  <Col>Total Price:</Col>
                  <Col>TK {cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: mode === "dark" ? "black" : "#eee",
                  color: mode === "dark" && "white",
                }}
              >
                {error && <Message variant="danger">{error.message}</Message>}
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: mode === "dark" ? "black" : "#eee",
                  color: mode === "dark" && "white",
                }}
              >
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems.length === 0}
                  onClick={placeOrderHandler}
                  style={{
                    backgroundColor: mode === "dark" && "black",
                    color: mode === "dark" && "white",
                  }}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceorderScreen;
