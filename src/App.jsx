import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/about';
import Journey from './sections/journey';
import Skills from './sections/skills';
import Work from './sections/work';
import Statics from './sections/statics';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <div className="bg-white">
        <About />
        <Journey />
        <Skills />
        <Work />
        <Statics />
        </div>
      </main>
    </>
  );
}

export default App;