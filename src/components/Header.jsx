import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { navLinks } from "../utils/data";

const Header = ({ scrolled, activeSection, scrollToSection }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 bg-opacity-95 shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-[80%] mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent tracking-tight cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Amar Kumar Prajapati
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-base font-medium transition-all duration-300 cursor-pointer ${
                activeSection === link.id
                  ? "text-purple-400 border-b-2 border-purple-700"
                  : "text-purple-900 hover:text-purple-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-indigo-600"
          onClick={() => setVisible(true)}
        >
          <MenuOutlined className="text-2xl" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={300}
        closeIcon={<CloseOutlined className="text-gray-600" />}
        bodyStyle={{ padding: 0 }}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-white to-indigo-50">
          {/* Drawer Header */}
          <div className="p-6 border-b border-gray-100 bg-white">
            <h2 className="text-2xl font-bold text-indigo-700">
              Amar Kumar Prajapati
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="flex flex-col space-y-3 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 cursor-pointer ${
                    activeSection === link.id
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                    setVisible(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="p-6 border-t border-gray-100">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-700 transition-colors duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-700 transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-700 transition-colors duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
