import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Header />
      <div className="h-40"></div>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;