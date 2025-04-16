import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Slider from "../Slider";
const ClientLayout = () => {
  return (
    <>
      <Header />
      <Slider />
      {/* <main className="p-1">
        <Outlet />
      </main> */}
      <Footer />
    </>
  );
};

export default ClientLayout;
