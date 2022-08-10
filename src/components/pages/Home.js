import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
// import Team from '../Team';
import About from '../About';
import Whyus from '../Whyus';
import Partner from '../Partner';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <Whyus />
      {/* <Team /> */}
      <Partner />
      <Footer />
    </>
  );
}

export default Home;
