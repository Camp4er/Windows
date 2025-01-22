import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

const MobileView = () => {
  return (
    <><Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
      </>
  );
};

export default MobileView;
