import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProfessionalLinks from "./components/ProfessionalLinks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProfessionalLinks />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
