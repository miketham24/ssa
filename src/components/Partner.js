import React from 'react'
import './Partner.css';
import Marquee from "react-fast-marquee";

function Partner() {
  return (
    <div className='partner-container'>
      <h1 className='partner-h1' data-aos="zoom-in-down">Looking to reach a wide student audience? Partner with <a href="https://drive.google.com/file/d/1zBUtMGnCm5lgbo08Bd-uo-6dAdlTSDj7/view?usp=sharing" target="_blank" rel="noopener noreferrer">us</a>!</h1>
      <div className='sgn-partner'>
      <h2 data-aos="zoom-out-up">We are grateful for the unwavering support from: </h2>
      <img src='images/partners/sgn.jpg' alt='sgn' className='sgn3' 
            onClick={(e) => {
            e.preventDefault();
            window.open('https://singaporeglobalnetwork.gov.sg/join-us/');
            }}
            data-aos="zoom-out-up"/>
      </div>
      <div className='companies'>
      <h3 data-aos="zoom-out-up">2024/2025 Partners: </h3>
        <Marquee pauseOnHover={true} speed={50} gradientColor={[248,251,253]}
        gradientWidth={120}>
          <img src='images/partners/sgn.jpg' alt='SGN' className='sgn2'/>
          <img src='images/partners/yeo.png' alt='YEOs' className='mc' />
          <img src='images/partners/chatime.png' alt='Chatime' className='chatime' />
          <img src='images/partners/bl.png' alt='Banana Leaf' className='mc' />
          <img src='images/partners/teadot.png' alt='TeaDot' className='sgn' />
          <img src='images/partners/dump.png' alt='Dumpliness' className='mc'/>
          <img src='images/partners/honey.png' alt='HoneyDew Labs' className='sgn2'/>
          <img src='images/partners/storage-hotel.png' alt='Storage Hotel' className='mc' />
          <img src='images/partners/rainorshine.jpg' alt='Rain or Shine' className='ros' />
        </Marquee>
        {/* <h3 data-aos="zoom-out-up">Partners we have worked with: </h3>
        <Marquee pauseOnHover={true} speed={30} gradientColor={[248,251,253]}
        gradientWidth={120} direction={'right'}>
          <img src='images/partners/rpr.png' alt='rpr' className='mc' />
          <img src='images/partners/tmlogo.png' alt='tm' className='sgn' />
          <img src='images/partners/vsc.jpeg' alt='vsc' className='sgn' />
          <img src='images/partners/pb.png' alt='pb' className='mc' />
           <img src='images/partners//majulah.jpg' alt='ms' className='sgn' />
          <img src='images/partners/mcbc.jpg' alt='mcbc' className='sgn2'/>
          <img src='images/partners/rr.png' alt='rr' className='sgn' />
          <img src='images/partners/nysm.png' alt='nysm' className='mc' />
          
        </Marquee> */}
        </div>
    </div>
  );
}

export default Partner;