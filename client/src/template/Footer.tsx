import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0">
      <footer className="bg-gray-200 text-center lg:text-left ">
        <div className="text-gray-700 text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2021 Copyright:
          <a className="text-gray-800" href="https://tailwind-elements.com/">
            Tailwind Elements
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
