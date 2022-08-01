import React from 'react';
import './Team.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Team() {
  return (
    <div className='team-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Our Team (2021/2022)</p>
        <p className='footer-subscription-text'>
        <h1>
          Singapore <br />
          Students' <br />
          <span className="w"> Association </span>
        </h1></p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
