import React from 'react';
import './Whyus.css';

function Whyus() {
  return (
    <>
    <div className='whyus'>
    <h1 className='whyus-h1' data-aos="fade-up">Why Join Us?</h1>
      <div className='whyus-wrapper'>
        <div className='whyus-card' data-aos="slide-right" data-aos-duration="1000">
        <i className='fa fa-globe icon-living'></i>
            <h2 className='whyus-h2'>Learn</h2>
            <p className='whyus-p'> Through events and gatherings, expose yourself to Singaporean culture. </p>
        </div>
        <div className='whyus-card' data-aos="slide-right" data-aos-duration="2000">
        <i className='fab fa-angellist icon-living'></i>
            <h2 className='whyus-h2'>Lepak</h2>
            <p className='whyus-p'>From our regular socials to events! Guaranteed GOOD TIME.</p>
        </div>
        <div className='whyus-card' data-aos="slide-right" data-aos-duration="3000">
        <i className='fa fa-users icon-living'></i>
            <h2 className='whyus-h2'>Belong</h2>
            <p className='whyus-p'>Connect with others and belong to a big community that you can call home. </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Whyus;
