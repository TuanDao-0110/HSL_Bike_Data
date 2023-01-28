import React from "react";
import gitlog from "../assets/brand-github.svg";
const Footer = () => {
  return (
    <div className="fixed w-full bottom-0 ">
      <footer className="bg-gray-200 text-center lg:text-left ">
        <div className="text-gray-700 text-center p-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2021 Copyright:Tuan Dao
          <a className="text-gray-800 flex justify-center mt-1" href="https://github.com/TuanDao-0110" target={"_blank"}>
            GitHub <img src={gitlog} alt="github" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
