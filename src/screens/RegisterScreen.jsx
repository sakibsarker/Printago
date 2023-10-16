import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

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
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
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
        <h1>Sign up</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="my-3">
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              style={{ borderRadius: "30px", padding: "18px 25px" }}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email" className="my-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "30px", padding: "18px 25px" }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password" className="my-3">
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "30px", padding: "18px 25px" }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword" className="my-3">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            Register Now
          </Button>
          {isLoading && <Loader />}
        </Form>
        <p className="mt-3">Already have account?</p>
        <Link
          to={redirect ? `/login?redirect=${redirect}` : `/login`}
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
          className="hover-bg-black"
        >
          Login
        </Link>
      </div>
    </FormContainer>
  );
};

export default RegisterScreen;
