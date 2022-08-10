import React from 'react';
import './About.css';
import 'aos/dist/aos.css';

function About() {
  return (
<div class="about2-container" id="about">
      <div class="section2">
        <div class="text2">
          <h1 data-aos="fade-up-right">
             Singapore <br />
             Students' <br />
           <span className="w"> Association </span>
         </h1>
         <div className='ssa-p2' data-aos="fade-up">
          <p>The UBC Singapore Students’ Association is a social/cultural club at the University of British Columbia (Vancouver) that comprises of Singaporean students, 
 as well as UBC students who are interested in Singaporean culture. As a club, we strive to build a strong and lasting community. Throughout the school year, 
 we seek to foster friendships among our members, provide a support base for Singaporean students who are new to Vancouver and away from home, as well as offer 
 various opportunities to our members. Club activities and initiatives also help Singaporean students in UBC to remain connected to their Singaporean roots, 
 as well as promote awareness of Singapore to other UBC students. Our members are from all over the world, and we welcome anyone and everyone to be part of our community! </p>
          </div>
          </div>
        </div>
      <div className='ssa-gallery2' data-aos="fade-left">
          <img src='images/ssateam.JPG' alt='ssa team' className='test' />
      </div>
 </div>
  );
}

export default About;
