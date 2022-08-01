import React from 'react';
import './About.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about-container'>
      <section className='about-subscription'>
        <p className='about-subscription-heading'>
        About Us</p>
        <p className='about-subscription-text'>
        <h1>
          Singapore <br />
          Students' <br />
          <span className="w"> Association </span>
        </h1></p>
        <div className='about-txtarea'>
        <p className='about-ssatxt'>The UBC Singapore Students’ Association is a social/cultural club at the University of British Columbia (Vancouver) that comprises of Singaporean students, 
as well as UBC students who are interested in Singaporean culture. As a club, we strive to build a strong and lasting community. Throughout the school year, 
we seek to foster friendships among our members, provide a support base for Singaporean students who are new to Vancouver and away from home, as well as offer 
various opportunities to our members. Club activities and initiatives also help Singaporean students in UBC to remain connected to their Singaporean roots, 
as well as promote awareness of Singapore to other UBC students. Our members are from all over the world, and we welcome anyone and everyone to be part of our community! </p>
        </div>
      </section>
      <div class='about-links'>
        <div className='about-link-wrapper'>
            <img src='images/cny22.jpg' alt='gallery' className='about-gallery' />
        </div>
      </div>
      <section class='about-media'>
        <div class='about-media-wrap'>
          <div class='footer-logo'>
            Want to learn more about Singapore? Check out Singapore Global Network's website!
            <Link to='/' className='social-logo'>
            <img src="images/ssa23logo.png" alt='SSA logo' class='footer-logo' />
            x SGN
            </Link>
          </div> 
        </div>
      </section>
    </div>
  );
}

export default About;
