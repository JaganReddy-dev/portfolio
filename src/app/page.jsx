import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProfessionalLinks from "./components/ProfessionalLinks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <ProfessionalLinks />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
