import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Slider from "../Slider";
import Home from "../../../pages/client/Home";
const ClientLayout = () => {
  return (
    <>
      <Header />
      <Slider />
      <main className="p-1">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
