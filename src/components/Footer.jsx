import React from "react";
import { navLinks } from "../utils/data";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Amar Kumar Prajapati</h3>
            <p className="text-gray-400 mb-6">
              Building exceptional digital experiences with clean code and thoughtful design.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-white transition duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Amar Kumar Prajapati. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Last updated: July 2, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
