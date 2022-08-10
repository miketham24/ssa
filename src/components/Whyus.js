import React from 'react';
import './Whyus.css';

function Whyus() {
  return (
    <>
    <div className='whyus'>
    <h1 className='whyus-h1' data-aos="fade-up">Why Join US?</h1>
      <div className='whyus-wrapper'>
        <div className='whyus-card' data-aos="slide-right" data-aos-duration="1000">
            <i class='fab fa-facebook-square icon-living' />
            <h2 className='whyus-h2'>Learn</h2>
            <p className='whyus-p'>Don't be blur like sotong. Through events,Through events,Through events,
            Through events,Through events,Through events,Through events, </p>
        </div>
        <div className='whyus-card' data-aos="slide-right" data-aos-duration="2000">
        <i class='fab fa-facebook-square icon-living' />
            <h2 className='whyus-h2'>Lepak</h2>
            <p className='whyus-p'>Through events,Through events,Through events,
            Through events,Through events,Through events,Through events, </p>
        </div>
        <div className='whyus-card' data-aos="slide-right" data-aos-duration="3000">
        <i class='fab fa-facebook-square icon-living' />
            <h2 className='whyus-h2'>Belong</h2>
            <p className='whyus-p'>Through events,Through events,Through events,
            Through events,Through events,Through events,Through events, </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Whyus;
