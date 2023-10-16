import React from "react";
import { useNavigate } from "react-router-dom";
import logoLight from "../assets/icons/blackprintago.svg";
import logoDark from "../assets/icons/logowhite.svg";
import darkModeBtn from "../assets/icons/darkModeBtn.svg";
import sunModeBtn from "../assets/icons/sunmode.svg";
import cartDark from "../assets/icons/cartDark.svg";
import cartLight from "../assets/icons/cartLight.svg";
import lightLoginSgv from "../assets/icons/login icon white .svg";
import {
  Navbar,
  Nav,
  Container,
  Badge,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout, setMode } from "../slices/authSlice";
import SearchBox from "./SearchBox";
import loginSvg from "../assets/icons/login.svg";
import { useState } from "react";
import hamburger from "../assets/icons/darkHamburger.svg";

const Header = () => {
  const { mode } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const modeHandler = (x) => {
    localStorage.setItem("mode", x);
    window.location.href = window.location.href;
  };

  return (
    <header className="header-navbar">
      <Navbar
        expand="lg"
        className="d-flex align-items-center justify-content-between navbar-1"
        style={{ backgroundColor: mode === "dark" ? "#1B170F" : "#fff" }}
      >
        <Container>
          <img src={hamburger} alt="Hamburger" className="hamburger" />
          <Nav className="d-flex align-items-center">
            {userInfo && userInfo.isAdmin ? (
              <NavDropdown
                title={
                  <span
                    className="mti-5"
                    style={{
                      color: mode === "dark" ? "white" : "black",
                    }}
                  >
                    Admin
                  </span>
                }
                id="adminmenu"
                className="dropdown"
                style={{ zIndex: 999 }}
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop" className="for-sm">
                  <NavDropdown.Item>Shop</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>Products List</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>Order List</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>User List</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : userInfo ? (
              <NavDropdown
                title={
                  <span
                    className="mti-5"
                    style={{ color: mode === "dark" ? "white" : "black" }}
                  >
                    {userInfo.name}
                  </span>
                }
                id="username"
                className="dropdown"
                style={{ zIndex: 999 }}
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop" className="for-sm">
                  <NavDropdown.Item>Shop</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="dropdown d-flex align-items-center">
                <Nav.Link href="/login">
                  <img
                    src={mode === "dark" ? lightLoginSgv : loginSvg}
                    alt="LoginBtn"
                    width="70"
                  />
                </Nav.Link>
                <Nav.Link href="/register">
                  <Button
                    style={{
                      backgroundColor: "#C5BDAF",
                      padding: "1px 8px",
                      border: 0,
                      outline: 0,
                      marginLeft: "10px",
                    }}
                  >
                    Register
                  </Button>
                </Nav.Link>
              </div>
            )}
          </Nav>
          <Nav.Link href="/">
            <img
              src={mode === "dark" ? logoDark : logoLight}
              alt="Logo"
              width="200"
              height={70}
              className="logo"
            />
          </Nav.Link>
          <Nav className="d-flex align-items-center flex-row cart-div">
            {/* {mode === "dark" ? (
              <img
                src={sunModeBtn}
                alt="DarkModeBtn"
                width="50"
                onClick={() => modeHandler("light")}
                style={{ marginRight: "10px", cursor: "pointer" }}
                className="modeBtn"
              />
            ) : (
              <img
                src={darkModeBtn}
                alt="DarkModeBtn"
                width="50"
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => modeHandler("dark")}
                className="modeBtn"
              />
            )} */}
            <Nav.Link href="/cart">
              <img
                src={mode === "dark" ? cartDark : cartLight}
                alt="CartBtn"
                width="30"
                className="cart-icon"
              />
              {cartItems.length > 0 && (
                <Badge
                  pill
                  bg="danger"
                  style={{ transform: "translateY(-10px)" }}
                >
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
