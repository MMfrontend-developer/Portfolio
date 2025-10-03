import React from 'react';
import Header from './Component/Header';
import About from './Component/About';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;