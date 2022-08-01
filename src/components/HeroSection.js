import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/mbsssa (1).mp4' autoPlay loop muted />
      <h1>Your home away from home <span class="sgflag" role="img" aria-label="sg flag">🇸🇬</span></h1>
      <div className='hero-btns'>
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
