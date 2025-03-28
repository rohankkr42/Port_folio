import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
    </div>
  );
}

export default App;