import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Have a question? Send us a message!</p>
        <p className='footer-subscription-text'>
        Name:</p>
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
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="images/ssa23logo.png" alt='SSA logo' class='footer-logo' />
            </Link>
          </div>
          <small class='website-rights'>SSA Last Updated Aug 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.facebook.com/theubcssa');
                }}
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.instagram.com/theubcssa/');
                }}
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              target='_blank'
              aria-label='LinkedIn'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.linkedin.com/company/theubcssa/');
                }}
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
