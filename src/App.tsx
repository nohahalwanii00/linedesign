import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) return <LoadingScreen onDone={() => setLoaded(true)} />;

  return (
    <div className="bg-stone-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
