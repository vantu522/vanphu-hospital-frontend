import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Slider from "../sections/Home/Slider";
import Home from "../../../pages/client/Home";
const ClientLayout = () => {
  return (
    <>
      <Header />
      {/* <main className="p-1">
        <Outlet />
      </main> */}
      <Footer />
    </>
  );
};

export default ClientLayout;
