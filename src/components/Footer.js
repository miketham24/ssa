import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Footer() {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_uzpwszc', 'ssa_template' , e.target, 'n8o_5KUUNA5PYKjQW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className='footer-container2' id="footer">
      <div className='left-contact2'>
        <div className='whole-left'>
        <h1 className='left-h1'>UBC SSA</h1>
        <h2 className='left-h2'>singapore.ubc@gmail.com</h2>
        <section class='social-media'>
        <div class='social-media-wrap'>
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
              <i class='fab fa-facebook-square' />
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
            <Link
              class='social-icon-link discord'
              target='_blank'
              aria-label='Discord'
              onClick={(e) => {
                e.preventDefault();
                window.open('https://discord.com/invite/dyPydJK');
                }}
            >
              <i class='fab fa-discord' />
            </Link>
          </div>
        </div>
      </section>
        </div>
      </div>
      <div className='footer-subscription2'>
        <p className='footer-subscription-heading'>
        Have a question? Send us a message!  <br/>
        or send us an email at singapore.ubc@gmail.com</p>
        <div className='input-areas'>
          <form onSubmit={sendEmail}>
          <input
              className='footer-input'
              name="name"
              type='text'
              placeholder='Your Name'
              required
            />
            <input
              className='footer-input'
              name="email"
              type='email'
              placeholder='Your Email'
              required
            />
            <input
              className='footer-input'
              name="subject"
              type='text'
              placeholder='Your Subject'
            />
            <textarea className='footer-input' name="Message" rows="7" placeholder=' Your Message' required/>
            <Button buttonStyle='btn--outline' type="submit" value="Send">Send Message &nbsp;<i class="fa fa-arrow-right"></i></Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
