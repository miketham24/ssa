import React from 'react'
import './Partner.css';
import Marquee from "react-fast-marquee";

function Partner() {
  return (
    <div className='partner-container'>
      <h1 className='partner-h1' data-aos="zoom-in-down">Not a student? Partner with us to grow your reach!</h1>
      <div className='sgn-partner'>
      <h2 data-aos="zoom-out-up">Our biggest partner: </h2>
      <img src='images/sgn.jpg' alt='sgn' className='sgn3' 
            onClick={(e) => {
            e.preventDefault();
            window.open('https://singaporeglobalnetwork.gov.sg/join-us/');
            }}
            data-aos="zoom-out-up"/>
      </div>
      <div className='companies'>
        <Marquee pauseOnHover={true} speed={40} gradientColor={[248,251,253]}
        gradientWidth={120}>
          <img src='images/sgn.jpg' alt='sgn' className='sgn2'/>
          <img src='images/vsc.jpeg' alt='vsc' className='sgn' />
          <img src='images/majulah.jpg' alt='ms' className='sgn' />
          <img src='images/tmlogo.png' alt='tm' className='sgn' />
          <img src='images/mcbc.jpg' alt='mcbc' className='sgn2'/>
          <img src='images/bc.jpg' alt='ms' className='bc' />
          <img src='images/shopee.png' alt='shopee' className='sgn' />
          <img src='images/chatime.png' alt='chatime' className='sgn' />
        </Marquee>
        <Marquee pauseOnHover={true} speed={30} gradientColor={[248,251,253]}
        gradientWidth={120} direction={'right'}>
          <img src='images/rpr.png' alt='rpr' className='mc' />
          <img src='images/yeo.png' alt='yeo' className='sgn' />
          <img src='images/pb.png' alt='pb' className='mc' />
          <img src='images/rr.png' alt='rr' className='sgn' />
          <img src='images/bl.jpeg' alt='bl' className='mc' />
          <img src='images/nysm.png' alt='nysm' className='mc' />
          <img src='images/aseac.jpeg' alt='nysm' className='mc' />
        </Marquee>
        </div>
    </div>
  );
}

export default Partner;