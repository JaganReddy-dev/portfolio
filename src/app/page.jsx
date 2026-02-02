import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Connect from "./components/Connect"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import ScrollToTop from "./components/buttons/ScrollToTop"

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Connect />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default page
