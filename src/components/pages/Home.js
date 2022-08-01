import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from '../About';
import Team from '../Team';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
