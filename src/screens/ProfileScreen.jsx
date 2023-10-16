import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Table,
  Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProfileMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useGetMyOrdersQuery } from "../slices/orderApiSlice";
import { FaTimes } from "react-icons/fa";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo, mode } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const { data: orders, isLoading, error } = useGetMyOrdersQuery();

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo, userInfo.name, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Profile Updated");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <h2 style={{ color: mode === "dark" && "white" }}>User Profile</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-2">
              <Form.Label style={{ color: mode === "dark" && "white" }}>
                Name
              </Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" className="my-2">
              <Form.Label style={{ color: mode === "dark" && "white" }}>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password" className="my-2">
              <Form.Label style={{ color: mode === "dark" && "white" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmpassword" className="my-2">
              <Form.Label style={{ color: mode === "dark" && "white" }}>
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="my-2"
              style={{ backgroundColor: "black" }}
            >
              Update
            </Button>
            {loadingUpdateProfile && <Loader />}
          </Form>
        </Col>
        <Col md={9}>
          <h2 style={{ color: mode === "dark" && "white" }}>My Orders</h2>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <>
              <Table striped hover responsive className="table-sm">
                <thead>
                  <tr style={{ color: mode === "dark" && "white" }}>
                    <th>ID</th>
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
                          {order.isPaid ? (
                            <Button className="btn-sm " variant="light">
                              Details
                            </Button>
                          ) : (
                            <Button className="btn-sm " variant="light">
                              {" "}
                              Pay Now
                            </Button>
                          )}
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
