import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  //re direct after login shipping
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <FormContainer>
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          marginTop: "25px",
        }}
      >
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group
            style={{ boxSizing: "border-box" }}
            controlId="email"
            className="my-3"
          >
            <Form.Control
              type="email"
              placeholder="E-Mail"
              value={email}
              style={{ borderRadius: "30px", padding: "18px 25px" }}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password" className="my-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "30px", padding: "18px 25px" }}
            ></Form.Control>
          </Form.Group>

          <Button
            type="submit"
            value="primary"
            className="mt-2"
            disabled={isLoading}
            style={{
              width: "100%",
              fontSize: "20px",
              borderRadius: "30px",
              padding: "15px 0",
              backgroundColor: "black",
            }}
          >
            Signin
          </Button>
          {isLoading && <Loader />}
        </Form>
        <p className="mt-3">New Customer?</p>
        <Link
          className="mt-2 hover-bg-black"
          disabled={isLoading}
          to={redirect ? `/register?redirect=${redirect}` : `/register`}
          style={{
            display: "inline-block",
            textAlign: "center",
            width: "100%",
            fontSize: "20px",
            borderRadius: "30px",
            padding: "15px 0",
            background: "transparent",
            color: "#000",
            textDecoration: "none",
            border: "1px solid black",
          }}
        >
          Signup
        </Link>
      </div>
    </FormContainer>
  );
};

export default LoginScreen;
