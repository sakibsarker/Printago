import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Quicklinks = () => {
  const { mode } = useSelector((state) => state.auth);
  const arr = [
    { label: "Datenschutzerklärung", link: "/somewhere" },
    { label: "AGB", link: "/somewhere" },
    { label: "Impressum", link: "/somewhere" },
    { label: "Widerruf & Rückgabe", link: "/somewhere" },
  ];
  return (
    <div
      className="d-flex justify-content-center align-items-center fs-10"
      style={{ padding: "1rem 0 2.5rem 0", backgroundColor: "black" }}
    >
      {arr.map((item) => (
        <Link
          className="mx-2"
          to={item.link}
          style={{ color: "white", textDecoration: "none" }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Quicklinks;
