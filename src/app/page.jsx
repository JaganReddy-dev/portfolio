import AppShell from "./components/AppShell"
import Hero from "./components/Hero"
import Connect from "./components/Connect"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Articles from "./components/Articles"
import ScrollToTop from "./components/buttons/ScrollToTop"

const page = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-700/10 to-transparent">
      <AppShell>
        <Hero />
        <Experience />
        <Articles />
        <Projects />
        <Connect />
        <Contact />
        <Footer />
      </AppShell>
      <ScrollToTop />
    </div>
  )
}

export default page
