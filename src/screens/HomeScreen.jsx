import React from "react";
import Banner from "../components/Banner";
import FAQ from "../components/FAQ";
import ProductDetails from "../components/ProductDetails";
import Quicklinks from "../components/Quicklinks";
import SmallCards from "../components/SmallCards";

const HomeScreen = () => {
  return (
    <>
      <ProductDetails />
      <SmallCards />
      <Banner />
      <FAQ />
      <Quicklinks />
    </>
  );
};

export default HomeScreen;
