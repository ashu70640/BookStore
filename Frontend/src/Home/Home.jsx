import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </div>
    </>
  );
};
