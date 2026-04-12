import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/about';
import Journey from './sections/journey';
import Skills from './sections/skills';
import Work from './sections/work';
import Stats from './sections/stats';
import Blog from './sections/blog';
import Contact from './sections/contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Journey />
        <Skills />
        <Work />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;