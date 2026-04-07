import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/about';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <div className="bg-white">
        <About />
        </div>
      </main>
    </>
  );
}

export default App;