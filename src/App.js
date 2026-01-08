import React, { useState } from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Book from './components/Book';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Hero />;
      case 'projects':
        return <Projects />;
      case 'journey':
        return <Journey />;
      case 'skills':
        return <Skills />;
      case 'book':
        return <Book />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="App">
      <SideNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="page-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
