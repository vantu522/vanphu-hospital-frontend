import React from "react";
import { Link } from "react-router-dom";
import {uh}from '../../../assets/images/dvt.png'

const Header = () => {
  return (
    <header style={{ padding: "1rem", background: "#f0f0f0" }}>
      <div className="flex gap-12">
        <div className="logo"></div>
        <div className="header-right">
          <div className="header-top">
            <div className="bg">
              <img src={uh} alt=""  className="w-2.5"/>
            </div>
          </div>
          <div className="header-bot"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
