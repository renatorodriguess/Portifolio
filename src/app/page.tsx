import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";  
import Work from "./components/Work";
import Contact from "./components/Contact";
import ScrollButton from './components/ScrollButton'

export default function page() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <ScrollButton />

    </main>
  )
}
