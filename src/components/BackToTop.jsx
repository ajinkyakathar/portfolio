import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const BackToTop = ({ scrolled, scrollToTop }) => {
  return (
    <button
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
        scrolled ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpOutlined className="text-lg" />
    </button>
  );
};

export default BackToTop; 