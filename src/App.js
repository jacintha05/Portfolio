import './App.css';
import { Helmet } from "react-helmet-async";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      {/* Helmet for setting the page title */}
      <Helmet>
        <title>Jacintha Priyadharshini | Portfolio</title>
      </Helmet>

      <Header/>
      <Hero />
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
