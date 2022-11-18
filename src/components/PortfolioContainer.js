import React from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Horizontal from './Horizontal';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  return (
    <div>
      
      {<NavTabs />}

      {<Home />}

      {<About />}

      {<Horizontal />} 

      {<Portfolio />} 

      {<Contact />}

      {<Footer />}
    </div>
  );
 }