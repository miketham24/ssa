import React from 'react';
import './About.css';
import 'aos/dist/aos.css';
import Carousel from 'react-elastic-carousel';

function About() {
  return (
<div className="about2-container" id="about">
      <div className="section2">
        <div className="text2">
          <h1 data-aos="fade-up-right">
          <span className="w"> UBC Singapore </span> <br />
          <span>  Students' Association </span> 
         </h1>
         <div className='ssa-p2' data-aos="fade-up">
          <p>The UBC Singapore Students’ Association is a social/cultural club at the University of British Columbia (Vancouver) that comprises of Singaporean students and
             UBC students who are interested in Singaporean culture. As a club, we strive to build a strong and lasting community. Throughout the school year, 
            we seek to foster friendships among our members, provide a support base for Singaporean students, as well as offer 
            various opportunities to our members. Our members are from all over the world,
             and we welcome anyone and everyone to be part of our community! </p>
          </div>
          </div>
        </div>
      <div className='ssa-gallery2' data-aos="fade-left">
      <Carousel enableAutoPlay autoPlaySpeed={2000} showArrows={false} pagination={false}>
          <img src='images/team_photos/aboutteamphoto.jpeg' alt='ssa team' className='test' />
          <img src='images/ssateam.jpg' alt='ssa team' className='test' />
          <img src='images/teamsg3.jpg' alt='ssa team' className='test' />
          <img src='images/team_photos/aboutteamphoto.jpeg' alt='ssa team' className='test' />
      </Carousel>
      </div>
 </div>
  );
}

export default About;
