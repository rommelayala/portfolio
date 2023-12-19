import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
