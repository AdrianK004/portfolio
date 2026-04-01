import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import BackToTop from "./components/BackToTop";
import Contact from "./sections/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <BackToTop />
      <Contact />
    </div>
  );
}

export default App;