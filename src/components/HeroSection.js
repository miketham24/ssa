import React, { useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical';

function HeroSection() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <div className='hero-container' id="home">
      <video src='/videos/mbsssa (1).mp4' autoPlay loop muted />
      <h1 data-aos="fade-right">
        Your{' '}
        <Typical 
        loop={Infinity}
        wrapper="b"
        steps={[
          'home',
          2500,
          'community',
          2500,
          'family',
          2500]}/>
        away from home <span class="sgflag" role="img" aria-label="sg flag">🇸🇬</span></h1>
      <div className='hero-btns' data-aos="fade-right" data-aos-duration="2800">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => {
            e.preventDefault();
            window.open('https://forms.gle/LejsKADbA5BtM9z99');
            }}
        >
          JOIN US LAH!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
