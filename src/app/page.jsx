import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Connect from "./components/Connect"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Articles from "./components/Articles"
import ScrollNav from "./components/ScrollNav"
import ScrollToTop from "./components/buttons/ScrollToTop"

const page = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-700/10 to-transparent">
      <NavBar />
      <ScrollNav />
      <Hero />
      <Experience />
      <Articles />
      <Projects />
      <Connect />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default page
