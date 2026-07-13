import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/about';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Work from './sections/work';
import Journey from './sections/journey';
import Stats from './sections/stats';
import Blog from './sections/blog';
import Contact from './sections/contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-900 text-slate-200">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Journey />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
