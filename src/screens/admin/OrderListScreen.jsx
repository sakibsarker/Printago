import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Row, Col, Table, Container } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetAllOrdersQuery } from "../../slices/orderApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetAllOrdersQuery();
  const { mode } = useSelector((state) => state.auth);
  console.log(orders);

  return (
    <Container>
      <h1 style={{ color: mode === "dark" && "white" }}>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="Danger">
          {error?.data?.message || error.message}
        </Message>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr style={{ color: mode === "dark" && "white" }}>
              <th>ID</th>
              <th>Username</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td style={{ color: mode === "dark" && "white" }}>
                  {order._id}
                </td>
                <td style={{ color: mode === "dark" && "white" }}>
                  {order.user && order.user.name}
                </td>
                <td style={{ color: mode === "dark" && "white" }}>
                  {order.createdAt.substring(0, 10)}
                </td>
                <td style={{ color: mode === "dark" && "white" }}>
                  {order.totalPrice}
                </td>
                <td style={{ color: mode === "dark" && "white" }}>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes color="red" />
                  )}
                </td>
                <td style={{ color: mode === "dark" && "white" }}>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes color="red" />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button className="btn-sm " variant="light">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderListScreen;
