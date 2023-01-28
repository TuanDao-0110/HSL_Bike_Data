import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Template = () => {
  return (
    <div className="h-full">
      <Header />
      <div className="flex justify-center flex-wrap">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Template;
