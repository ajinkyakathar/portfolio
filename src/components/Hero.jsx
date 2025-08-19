import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import myimage from "../assets/1.png";
import { motion } from "framer-motion";
import ParticlesBackground from "../pages/components/ParticlesBackground";

const Hero = ({ scrollToSection }) => {
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "MERN Stack Developer | AI Engineer";
  const typingSpeed = 100;

  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (typedText === fullText) {
      setIsTyping(false);
      setTimeout(() => {
        setTypedText("");
        setIsTyping(true);
      }, 3000);
    }
  }, [typedText, isTyping]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Amar_Kumar_Prajapati.pdf";
    link.download = "Amar_Kumar_Prajapati.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-6 py-20 md:py-0 relative z-10 w-full max-w-[2000px]">
        <div className="grid md:grid-cols-2 gap-32 items-center">
          {/* Left Section */}
          <div
            className="flex flex-col justify-center h-full pl-12 md:pl-28 lg:pl-36 xl:pl-48 animate-fadeIn"
            style={{ color: "#232946" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#4B0082]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Amar Kumar Prajapati
              </span>
            </h1>
            <div className="h-8 mb-6">
              <h2
                className="text-xl md:text-2xl font-medium"
                style={{ color: "#4B0082" }}
              >
                {typedText}
                <span
                  className={`inline-block w-1 h-6 bg-indigo-600 ml-1 ${
                    isTyping ? "animate-blink" : "opacity-0"
                  }`}
                  style={{ backgroundColor: "#4B0082" }}
                ></span>
              </h2>
            </div>
            <p className="text-lg mb-8 max-w-lg" style={{ color: "#4B0082" }}>
              I create exceptional digital experiences with clean code and
              thoughtful design. Passionate about building intuitive,
              high-performance web applications that solve real problems.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <button
                onClick={handleDownload}
                className="group inline-flex items-center px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              >
                Download Resume
                <RightOutlined className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:block relative justify-self-center pr-12 md:pr-28 lg:pr-36 xl:pr-48">
            {/* Blob 1 */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full opacity-20 z-0"
              style={{ x: "-65%", y: "-50%" }}
              animate={{
                rotate: [0, 360],
                x: ["-65%", "-60%", "-65%"],
                y: ["-50%", "-52%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full opacity-30 z-0"
              style={{ x: "-65%", y: "-50%" }}
              animate={{
                rotate: [360, 0],
                x: ["-65%", "-70%", "-65%"],
                y: ["-50%", "-48%", "-50%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 mt-10 w-[550px] h-[550px] overflow-hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-2xl bg-white">
              <img
                src={myimage}
                alt="Amar Kumar Prajapati"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#experience"
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("experience");
          }}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
