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
<<<<<<< HEAD
    <div className="bg-gradient-to-b from-indigo-700/10 to-transparent">
      <AppShell footer={<Footer />}>
        <Hero />
        <Experience />
        <Articles />
        <Projects />
        <Connect />
        <Contact />
      </AppShell>
=======
    <div className="bg-linear-to-b from-indigo-700/10 to-transparent">
      <NavBar />
      <ScrollNav />
      <Hero />
      <Experience />
      <Articles />
      <Projects />
      <Connect />
      <Contact />
      <Footer />
>>>>>>> 6c49f39 (fix tailwind classes)
      <ScrollToTop />
    </div>
  )
}

export default page
