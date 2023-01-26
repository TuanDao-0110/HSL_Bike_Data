import React from "react";
import { Outlet } from "react-router-dom";
import MainPage from "../component/MainPage";

import Footer from "./Footer";
import Header from "./Header";

const Template = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center flex-wrap">
        {/* <MainPage /> */}
        {/* <Journey_Table /> */}
        <Outlet />
        {/* <City_Table /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Template;
