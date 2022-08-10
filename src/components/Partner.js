import React from 'react'
import './Partner.css';
import Marquee from "react-fast-marquee";

function Partner() {
  return (
    <div className='partner-container'>
      <h1 className='partner-h1'>Not a student? Partner with us to grow your reach!</h1>
      <div className='companies'>
        <Marquee pauseOnHover={true} speed={50} gradientColor={[248,251,253]}
        gradientWidth={200}>
          <img src='images/sgn.jpg' alt='sgn' className='sgn'/>
          <img src='images/vansgclub.png' alt='vsc' />
        </Marquee>
        </div>
    </div>
  );
}

export default Partner;