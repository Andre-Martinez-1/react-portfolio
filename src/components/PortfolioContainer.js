import React from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Horizontal from './Horizontal';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  return (
    <div>
      
      {<NavTabs />}

      {<Home />}
      
      {<Portfolio />} 
      {<Horizontal />} 


      {<About />}

      {<Resume />}
      {<Contact />}

      {<Footer />}
    </div>
  );
 }