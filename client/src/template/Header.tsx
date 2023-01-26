import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../assets/logo.png";
import solitaLogo from "../assets/solita.png";
const Header = () => {
  return (
    <div className="">
      <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 md:text-3xl flex justify-center items-center gap-5">
              <NavLink to={"/"}>
                <img src={logo} width={80} height={80} alt="" />
              </NavLink>
              <NavLink to={"/"}>
                <img src={solitaLogo} width={80} height={80} alt="" />
              </NavLink>
            </div>
            <div className="md:hidden">
              <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    className="hidden"
                    d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                  />
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row hidden md:block -mx-2">
            <NavLink to={"journey"}>
              <Button size="large"> journey</Button>
            </NavLink>
            <NavLink to={"station"}>
              <Button> station</Button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
