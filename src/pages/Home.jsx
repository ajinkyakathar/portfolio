import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import './Home.scss'

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
      <BackToTop scrolled={scrolled} scrollToTop={scrollToTop} />
    </div>
  );
};

export default Home;
