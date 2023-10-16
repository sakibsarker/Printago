import "./App.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { productsApiSlice } from "./slices/productsApiSlice";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CookieModal from "./components/CookieModal";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const { mode } = useSelector((state) => state.auth);

  return (
    <div
      style={{
        backgroundColor: mode === "dark" ? "#1B170F" : "#ccc",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Outlet />
      <ToastContainer />
      <CookieModal />
    </div>
  );
}

export default App;
